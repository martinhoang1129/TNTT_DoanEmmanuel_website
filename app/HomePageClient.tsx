'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Calendar, ArrowRight, MapPin, Clock } from 'lucide-react';
import type { DivisionItem, EventItem, HomeContent, GalleryData } from '@/lib/content';
import InstagramFeed from '@/components/InstagramFeed';

type HomePageClientProps = {
  homeContent: HomeContent;
  divisions: DivisionItem[];
  events: EventItem[];
  gallery: GalleryData;
};

const divisionColors: Record<string, string> = {
  aunhi: 'from-green-600 to-green-800',
  thieunhi: 'from-blue-500 to-blue-700',
  nghiasi: 'from-yellow-500 to-yellow-700',
  hiepsi: 'from-amber-700 to-amber-900',
  huynhtruong: 'from-red-600 to-red-800'
};

const divisionBorderColors: Record<string, string> = {
  aunhi: 'border-green-500/50 hover:border-green-400',
  thieunhi: 'border-blue-500/50 hover:border-blue-400',
  nghiasi: 'border-yellow-500/50 hover:border-yellow-400',
  hiepsi: 'border-amber-700/50 hover:border-amber-600',
  huynhtruong: 'border-red-500/50 hover:border-red-400'
};

export default function HomePageClient({ homeContent, divisions, events, gallery }: HomePageClientProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.interest) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setFormStatus('submitting');
    setFormError('');
    try {
      const res = await fetch('/api/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Failed to submit');
      setFormStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', interest: '', message: '' });
    } catch {
      setFormStatus('error');
      setFormError('Something went wrong. Please try again or contact us directly.');
    }
  };

  return (
    <div className="min-h-screen bg-cream text-slate-900">
      <Nav />
      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-mid to-[#0a1a38] pb-24 pt-32 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(200,146,58,0.08)] via-transparent to-transparent" />
          <div className="relative mx-auto max-w-5xl px-6">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold">
              {homeContent.hero.eyebrow}
            </span>
            <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-7xl">{homeContent.hero.title}</h1>
            <p className="mt-6 text-lg text-white/70 sm:text-xl">{homeContent.hero.subtitle}</p>
            <p className="mt-3 text-lg italic text-gold-light">{homeContent.hero.caption}</p>
            <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/#join" className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy transition hover:bg-gold-light hover:shadow-lg">
                {homeContent.hero.primaryCta.label}
              </Link>
              <Link href="/#mission" className="group rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition hover:border-gold hover:bg-white/10">
                {homeContent.hero.secondaryCta.label}
                <ArrowRight className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Upcoming events banner */}
          {events.length > 0 && (
            <div className="relative mx-auto mt-16 max-w-4xl px-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                    <Calendar className="h-4 w-4" />
                    Upcoming Events
                  </h3>
                  <Link href="/events" className="text-xs uppercase tracking-[0.15em] text-white/60 transition hover:text-gold">
                    View Calendar →
                  </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {events.slice(0, 2).map((event) => (
                    <Link
                      key={event.slug}
                      href="/events"
                      className="flex items-start gap-3 rounded-xl bg-white/5 p-4 transition hover:bg-white/10"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-gold/20 text-gold">
                        <span className="text-xs font-bold leading-none">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                        <span className="text-lg font-bold leading-none">{new Date(event.date).getDate()}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-white">{event.title}</p>
                        <p className="mt-1 text-xs text-white/50">{event.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Divisions */}
        <section id="divisions" className="bg-navy py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 text-center">
              <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
                Our Divisions
              </p>
              <h2 className="text-4xl font-bold sm:text-5xl">Ngành · Youth Divisions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
                Five age-based divisions, each with its own color, motto, and mission — together forming one community in Christ.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {divisions.map((division) => (
                <Link
                  key={division.slug}
                  href={`/divisions/${division.slug}`}
                  className={`group relative overflow-hidden rounded-2xl border ${divisionBorderColors[division.slug] || 'border-white/10'} bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl`}
                >
                  <div className={`mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r ${divisionColors[division.slug] || 'from-gold to-gold-light'}`} />
                  <h3 className="text-xl font-bold text-white">{division.title}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold/90">{division.motto}</p>
                  <p className="mt-3 text-sm leading-6 text-white/60">{division.subtitle}</p>
                  <p className="mt-3 text-sm leading-6 text-white/75">{division.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-all group-hover:gap-2">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-cream py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-14 text-center">
              <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-gold/25 bg-white px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
                Who We Are
              </p>
              <h2 className="text-4xl font-bold text-navy sm:text-5xl">{homeContent.about.headline}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">{homeContent.about.description}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {homeContent.about.cards.map((card, i) => {
                const icons = ['✦', '👥', '📖'];
                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="h-48 bg-gradient-to-br from-navy to-navy-mid flex items-center justify-center">
                      <span className="text-5xl opacity-40">{icons[i]}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy group-hover:text-gold">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-text-muted">{card.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.12em] text-gold transition-all group-hover:gap-2">
                        Learn More <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Announcements */}
        <section id="announcements" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-14 text-center">
              <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
                Updates
              </p>
              <h2 className="text-4xl font-bold text-navy sm:text-5xl">Announcements</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
                Stay up to date with the latest news from Đoàn Emmanuel.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center lg:col-span-2">
                <div className="mb-4 text-4xl">📢</div>
                <h3 className="text-xl font-bold text-navy">No Announcements Yet</h3>
                <p className="mt-2 text-sm text-text-muted">
                  Check back soon for updates from our leadership team.
                </p>
              </div>
            </div>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-white transition hover:bg-navy-mid"
              >
                <Calendar className="h-4 w-4" />
                View Events &amp; Calendar
              </Link>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="bg-cream py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-14 text-center">
              <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-gold/25 bg-white px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
                Our Purpose
              </p>
              <h2 className="text-4xl font-bold text-navy sm:text-5xl">Our Mission</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
                The heart and purpose of Đoàn Emmanuel.
              </p>
            </div>
            <div className="space-y-8">
              <div className="rounded-2xl border-l-4 border-gold bg-navy px-8 py-10 text-white shadow-lg">
                <p className="text-xl italic leading-relaxed sm:text-2xl">
                  &ldquo;To form young Vietnamese Catholics deeply rooted in the Eucharist, guided by Our Lady of La Vang, growing in faith, knowledge, and service.&rdquo;
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-gold-light">Mission Statement</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { value: '40+', label: 'Years of Service' },
                  { value: '5', label: 'Youth Divisions' },
                  { value: '1', label: 'Community Family' }
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                    <div className="text-5xl font-bold text-gold">{item.value}</div>
                    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Gallery */}
        <InstagramFeed handle={gallery.instagramHandle} posts={gallery.posts} />

        {/* Join Form */}
        <section id="join" className="bg-navy py-24 text-white">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
              Community
            </p>
            <h2 className="text-4xl font-bold sm:text-5xl">Join Our Đoàn</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">{homeContent.join.description}</p>

            {formStatus === 'success' ? (
              <div className="mt-12 rounded-2xl border border-green-500/30 bg-green-500/10 p-10">
                <div className="mb-4 text-5xl">🎉</div>
                <h3 className="text-2xl font-bold text-green-400">Thank You!</h3>
                <p className="mt-3 text-white/70">We&apos;ve received your interest form. Someone from our team will reach out to you soon!</p>
                <button
                  type="button"
                  className="mt-6 rounded-full border border-white/20 px-6 py-2 text-sm text-white transition hover:bg-white/10"
                  onClick={() => setFormStatus('idle')}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form className="mt-12 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-left" onSubmit={handleFormSubmit}>
                {formError && (
                  <div className="rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-300">
                    {formError}
                  </div>
                )}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/50">First Name *</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-gold placeholder:text-white/30"
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/50">Last Name *</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-gold placeholder:text-white/30"
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/50">Email *</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-gold placeholder:text-white/30"
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/50">Phone (optional)</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-gold placeholder:text-white/30"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/50">Interested In *</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-gold"
                    required
                  >
                    <option value="" disabled>I am interested in joining as...</option>
                    <option value="Ấu Nhi (Ages 6–9)">Child — Ấu Nhi (Ages 6–9)</option>
                    <option value="Thiếu Nhi (Ages 10–12)">Child — Thiếu Nhi (Ages 10–12)</option>
                    <option value="Nghĩa Sĩ (Ages 13–15)">Child — Nghĩa Sĩ (Ages 13–15)</option>
                    <option value="Hiệp Sĩ (Ages 16–17)">Child — Hiệp Sĩ (Ages 16–17)</option>
                    <option value="Huynh Trưởng (18+)">Youth Leader — Huynh Trưởng (18+)</option>
                    <option value="Parent / Family Member">Parent / Family Member</option>
                    <option value="Supporter / Volunteer">Supporter / Volunteer</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/50">Message (optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-gold placeholder:text-white/30"
                    rows={4}
                    placeholder="Any questions or notes for us?"
                  />
                </div>
                <button
                  className="w-full rounded-full bg-gold px-6 py-4 text-sm font-bold text-navy transition hover:bg-gold-light disabled:opacity-50"
                  type="submit"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Submit Interest Form'}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
