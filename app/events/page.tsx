import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getEvents } from '@/lib/content';
import Link from 'next/link';

export const metadata = {
  title: 'Events & Calendar – Đoàn Emmanuel',
  description: 'View upcoming events and the full calendar for Đoàn Emmanuel TNTT.'
};

// Replace this with your actual Google Calendar embed URL.
// To get it: Google Calendar → Settings → [Your Calendar] → "Integrate calendar" → "Embed code"
// Copy the src="..." URL from the iframe code.
const GOOGLE_CALENDAR_EMBED_URL = process.env.GOOGLE_CALENDAR_EMBED_URL || '';

export default function EventsPage() {
  const events = getEvents();

  return (
    <div className="min-h-screen bg-cream text-slate-900">
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-navy via-navy-mid to-[#0a1a38] pb-16 pt-32 text-center text-white">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
              Calendar
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">Events & Calendar</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
              Stay connected with all Đoàn Emmanuel activities and celebrations.
            </p>
          </div>
        </section>

        {/* Google Calendar Embed */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-6 text-2xl font-bold text-navy">Full Calendar</h2>
            {GOOGLE_CALENDAR_EMBED_URL ? (
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <iframe
                  src={GOOGLE_CALENDAR_EMBED_URL}
                  className="h-[600px] w-full border-0"
                  title="Đoàn Emmanuel Calendar"
                />
              </div>
            ) : (
              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center">
                <div className="mb-4 text-5xl">📅</div>
                <h3 className="text-xl font-bold text-navy">Google Calendar Coming Soon</h3>
                <p className="mt-2 text-sm text-text-muted">
                  The embedded calendar will appear here once configured.
                </p>
                <p className="mt-4 rounded-xl bg-navy/5 p-4 text-left text-xs text-text-muted">
                  <strong className="text-navy">Setup:</strong> Add your Google Calendar embed URL to the{' '}
                  <code className="rounded bg-slate-200 px-1.5 py-0.5">GOOGLE_CALENDAR_EMBED_URL</code>{' '}
                  environment variable. You can find this in Google Calendar → Settings → Integrate calendar → Embed code.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Events List */}
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-2xl font-bold text-navy">Upcoming Events</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <div
                  key={event.slug}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-navy text-white">
                      <span className="text-xs font-bold uppercase text-gold">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-xl font-bold">{new Date(event.date).getDate()}</span>
                    </div>
                    <div>
                      <div className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                        {event.type}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-navy">{event.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-muted">{event.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
