/**
 * Google Apps Script — Đoàn Emmanuel Interest Form Handler
 * =========================================================
 * This script does TWO things when a form is submitted:
 *   1. Logs the submission to a Google Sheet
 *   2. Sends an email notification to you
 *
 * SETUP INSTRUCTIONS:
 * -------------------
 * 1. Go to https://script.google.com and click "+ New project"
 * 2. Delete the default code and paste this ENTIRE file
 * 3. Update NOTIFY_EMAIL below with your email
 * 4. Click the 💾 save icon (name the project "TNTT Interest Form")
 * 5. Click "Deploy" → "New deployment"
 * 6. Click the gear ⚙️ next to "Select type" → choose "Web app"
 * 7. Set:
 *    - Description: "Interest Form Handler"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 8. Click "Deploy"
 * 9. Click "Authorize access" → choose your Google account → Allow
 * 10. Copy the "Web app URL" (looks like https://script.google.com/macros/s/xxxx/exec)
 * 11. Paste that URL into your .env.local as GOOGLE_SHEET_WEBHOOK_URL
 * 12. Restart your dev server (or redeploy)
 *
 * That's it! Form submissions will now appear in a Google Sheet
 * called "TNTT Interest Form Submissions" and you'll get emails.
 */

// ⚡ CHANGE THIS to your email address
var NOTIFY_EMAIL = "YOUR_EMAIL@gmail.com";

// Name of the Google Sheet (created automatically)
var SHEET_NAME = "TNTT Interest Form Submissions";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // --- 1. Log to Google Sheet ---
    var sheet = getOrCreateSheet();
    sheet.appendRow([
      new Date().toLocaleString("en-US", { timeZone: "America/Chicago" }),
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.phone || "",
      data.interest || "",
      data.message || ""
    ]);

    // --- 2. Send email notification ---
    var subject = "New TNTT Interest Form: " + (data.firstName || "") + " " + (data.lastName || "");
    var body = "New interest form submission:\n\n"
      + "Name: " + (data.firstName || "") + " " + (data.lastName || "") + "\n"
      + "Email: " + (data.email || "") + "\n"
      + "Phone: " + (data.phone || "N/A") + "\n"
      + "Interest: " + (data.interest || "") + "\n"
      + "Message: " + (data.message || "N/A") + "\n"
      + "Submitted: " + new Date().toLocaleString("en-US", { timeZone: "America/Chicago" }) + "\n";

    MailApp.sendEmail(NOTIFY_EMAIL, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet() {
  var files = DriveApp.getFilesByName(SHEET_NAME);
  var spreadsheet;

  if (files.hasNext()) {
    spreadsheet = SpreadsheetApp.open(files.next());
  } else {
    spreadsheet = SpreadsheetApp.create(SHEET_NAME);
    var sheet = spreadsheet.getActiveSheet();
    // Add headers
    sheet.appendRow([
      "Submitted At",
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Interest",
      "Message"
    ]);
    // Bold the header row
    sheet.getRange(1, 1, 1, 7).setFontWeight("bold");
    // Auto-resize columns
    for (var i = 1; i <= 7; i++) {
      sheet.autoResizeColumn(i);
    }
  }

  return spreadsheet.getActiveSheet();
}

// Test function — run this manually to verify setup
function testDoPost() {
  var testEvent = {
    postData: {
      contents: JSON.stringify({
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        phone: "555-0123",
        interest: "Ấu Nhi (Ages 6–9)",
        message: "This is a test submission"
      })
    }
  };
  var result = doPost(testEvent);
  Logger.log(result.getContent());
}
