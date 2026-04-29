'use client';

import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

const divisions = [
  {
    id: 'aunhi',
    title: 'Ấu Nhi',
    subtitle: 'Seedling Division · Ages 6–9',
    color: 'bg-green-700',
    motto: 'Ngoan · Obedience',
    description: 'Our youngest members growing in faith, innocence, and love for God.'
  },
  {
    id: 'thieunhi',
    title: 'Thiếu Nhi',
    subtitle: 'Search Division · Ages 10–12',
    color: 'bg-blue-700',
    motto: 'Hy Sinh · Sacrifice',
    description: 'Searching for identity through sacrifice, community, and the Eucharist.'
  },
  {
    id: 'nghiasi',
    title: 'Nghĩa Sĩ',
    subtitle: 'Companion Division · Ages 13–15',
    color: 'bg-amber-500',
    motto: 'Chinh Phục · Conquer',
    description: 'Conquering challenges and growing in strength and purpose.'
  },
  {
    id: 'hiepsi',
    title: 'Hiệp Sĩ',
    subtitle: 'Knights Division · Ages 16–17',
    color: 'bg-orange-800',
    motto: 'Dấn Thân · Serve',
    description: 'Serving with courage, service, and Eucharistic devotion.'
  },
  {
    id: 'huynhtruong',
    title: 'Huynh Trưởng',
    subtitle: 'Leader Division · Ages 18+',
    color: 'bg-red-600',
    motto: 'Phụng Sự · Service',
    description: 'The leaders who guide the next generation in faith and formation.'
  }
];

const resources = [
  {
    title: 'VEYM & Organization',
    links: [
      { label: 'VEYM National Website', href: 'https://veym.net' },
      { label: 'Liên Đoàn Biển Đức', href: 'https://www.liendoanbienduc.org' },
      { label: 'Our Lady of Lavang Website', href: 'https://www.lavangabq.org' }
    ]
  },
  {
    title: 'Formation Materials',
    links: [
      { label: 'Cấp 1 Training Resources', href: 'https://veym.net' },
      { label: 'Cấp 2 Training Resources', href: 'https://veym.net' },
      { label: 'Huynh Trưởng Handbook', href: 'https://veym.net' },
      { label: 'Curriculum Guides', href: 'https://veym.net' }
    ]
  },
  {
    title: 'HT Resources',
    links: [
      { label: 'Leader Meeting Materials', href: 'https://veym.net' },
      { label: 'Camp Planning Resources', href: 'https://veym.net' },
      { label: 'VEYM Formation Documents', href: 'https://veym.net' }
    ]
  }
];

const events = [
  {
    date: 'August 15–17, 2025',
    title: 'Lavang XXV — "Forty Years of Memories"',
    description: 'Our 25th annual Lavang summer camp and 40th anniversary celebration.'
  },
  {
    date: 'July 17–20, 2025',
    title: 'Đại Hội Nghĩa Hiệp 2025',
    description: 'Liên Đoàn Biển Đức regional gathering for Nghĩa Sĩ and Hiệp Sĩ youth.'
  },
  {
    date: 'June 22, 2025',
    title: 'Bổn Mạng 2025',
    description: 'Our Feast Day celebration honoring Our Lady of La Vang.'
  },
  {
    date: 'April 5–6, 2025',
    title: 'Về Đất Hứa VIII',
    description: 'Leadership desert training camp for team leaders and assistants.'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-slate-900">
      <Nav />
      <main>
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-mid to-[#0a1a38] pb-24 pt-32 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(200,146,58,0.08)] via-transparent to-transparent" />
          <div className="relative mx-auto max-w-5xl px-6">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold">
              Phong Trào Thiếu Nhi Thánh Thể Việt Nam · VEYM
            </span>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight sm:text-6xl">
              Đoàn <span className="text-gold">Emmanuel</span>
            </h1>
            <p className="mt-6 text-base text-white/70 sm:text-lg">
              Vietnamese Eucharistic Youth Movement in the USA
            </p>
            <p className="mt-3 text-lg italic text-gold-light">Liên Đoàn Biển Đức · St. Benedict League of Chapters</p>
            <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#join" className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy transition hover:bg-gold-light">
                Join Our Community
              </a>
              <a href="#mission" className="rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition hover:border-gold hover:bg-white/10">
                Our Mission
              </a>
            </div>
            <div className="mt-14 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/50">
              <span className="h-10 w-px rounded-full bg-gradient-to-b from-gold to-transparent" />
              Scroll
            </div>
          </div>
        </section>

        <section className="bg-cream py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-gold/25 bg-white px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
                Who We Are
              </p>
              <h2 className="text-4xl font-semibold text-navy">About Our Đoàn</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
                We are a faith community rooted in the Vietnamese Catholic tradition, nurturing young people through faith, service, and fellowship.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Our Mission',
                  description: 'To form young Vietnamese Catholics in faith, love, and service through the Eucharistic spirituality of VEYM.',
                  href: '#mission'
                },
                {
                  title: 'Our Team',
                  description: 'Meet the dedicated Huynh Trưởng leaders who guide and inspire our youth each week with passion and commitment.',
                  href: '#team'
                },
                {
                  title: 'Our History',
                  description: 'Forty years of faith, community, and service — from our founding to today’s thriving Đoàn family.',
                  href: '#history'
                }
              ].map((card) => (
                <a key={card.title} href={card.href} className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:bg-slate-50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                    <span className="text-lg">★</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-navy group-hover:text-gold">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-text-muted">{card.description}</p>
                  <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-gold">Learn More →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="divisions" className="bg-navy py-24 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
                Our Divisions
              </p>
              <h2 className="text-4xl font-semibold">Ngành · Youth Divisions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
                Five age-based divisions, each with its own color, motto, and mission — together forming one community in Christ.
              </p>
            </div>
            <div className="grid gap-4 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2">
              {divisions.map((division) => (
                <a key={division.id} href={`#${division.id}`} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-gold/70 hover:bg-white/10">
                  <div className={`mb-4 h-2 w-14 rounded-full ${division.color}`} />
                  <h3 className="text-xl font-semibold text-white">{division.title}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold/90">{division.motto}</p>
                  <p className="mt-3 text-sm leading-6 text-white/75">{division.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-gold">View Details →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
                Calendar
              </p>
              <h2 className="text-4xl font-semibold text-navy">Upcoming Events</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
                Stay connected with all Đoàn activities and celebrations.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {events.map((event) => (
                <div key={event.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
                  <div className="text-xs uppercase tracking-[0.25em] text-gold">{event.date}</div>
                  <h3 className="mt-4 text-2xl font-semibold text-navy">{event.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-muted">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mission" className="bg-cream py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-gold/25 bg-white px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
                About Us
              </p>
              <h2 className="text-4xl font-semibold text-navy">Our Mission</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
                The heart and purpose of Đoàn Emmanuel.
              </p>
            </div>
            <div className="space-y-8">
              <div className="rounded-3xl border-l-4 border-gold bg-navy px-8 py-10 text-white shadow-soft">
                <p className="text-xl italic leading-relaxed">
                  "To form young Vietnamese Catholics deeply rooted in the Eucharist, guided by Our Lady of La Vang, growing in faith, knowledge, and service."
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-gold-light">Mission Statement</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { value: '40+', label: 'Years of Service' },
                  { value: '5', label: 'Youth Divisions' },
                  { value: '1', label: 'Community Family' }
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
                    <div className="text-4xl font-semibold text-gold">{item.value}</div>
                    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="bg-navy py-24 text-white">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
              Community
            </p>
            <h2 className="text-4xl font-semibold">Join Our Đoàn</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
              Become part of our Vietnamese Catholic youth family.
            </p>
            <form className="mt-12 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40" type="text" placeholder="First Name" />
                <input className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40" type="text" placeholder="Last Name" />
              </div>
              <input className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40" type="email" placeholder="Email Address" />
              <input className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40" type="tel" placeholder="Phone Number (optional)" />
              <select className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none">
                <option value="" disabled>
                  I am interested in joining as...
                </option>
                <option>Child — Ấu Nhi (Ages 6–9)</option>
                <option>Child — Thiếu Nhi (Ages 10–12)</option>
                <option>Child — Nghĩa Sĩ (Ages 13–15)</option>
                <option>Child — Hiệp Sĩ (Ages 16–17)</option>
                <option>Youth Leader — Huynh Trưởng (18+)</option>
                <option>Parent / Family Member</option>
                <option>Supporter / Volunteer</option>
              </select>
              <textarea className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40" rows={5} placeholder="Any questions or notes for us? (optional)" />
              <button className="w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-gold-light" type="submit">
                Submit Interest Form
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
