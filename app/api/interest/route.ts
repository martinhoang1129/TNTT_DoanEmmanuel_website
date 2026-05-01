import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  interest: string;
  message?: string;
};

const SUBMISSIONS_FILE = path.join(process.cwd(), 'content', 'submissions.json');

function readSubmissions(): (FormData & { submittedAt: string })[] {
  try {
    if (fs.existsSync(SUBMISSIONS_FILE)) {
      return JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf8'));
    }
  } catch {
    // ignore
  }
  return [];
}

function writeSubmissions(submissions: (FormData & { submittedAt: string })[]) {
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf8');
}

// Forwards to Google Apps Script which handles BOTH Google Sheets + email notification
async function forwardToGoogleAppsScript(data: FormData & { submittedAt: string }) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log('⚠️ GOOGLE_SHEET_WEBHOOK_URL not set — skipping Google Sheets + email');
    return;
  }
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      redirect: 'follow' // Google Apps Script redirects on deploy
    });
    const text = await res.text();
    console.log('✅ Google Apps Script response:', text);
  } catch (err) {
    console.error('❌ Google Apps Script webhook error:', err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as FormData;

    if (!body.firstName || !body.lastName || !body.email || !body.interest) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const submission = {
      ...body,
      submittedAt: new Date().toISOString()
    };

    // Save locally
    const submissions = readSubmissions();
    submissions.push(submission);
    writeSubmissions(submissions);

    // Forward to Google Apps Script (handles Sheets + email)
    forwardToGoogleAppsScript(submission).catch(() => {});

    console.log('📋 New interest form submission:', submission);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Interest form error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
