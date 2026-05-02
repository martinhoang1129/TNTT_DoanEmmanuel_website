import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Our Team – Đoàn Emmanuel',
  description: 'Meet the leaders and Huynh Trưởng of Đoàn Emmanuel TNTT.'
};

const teamMembers = [
  {
    role: 'Đoàn Trưởng',
    name: 'TBD',
    description: 'Chapter Leader — oversees all divisions and activities of Đoàn Emmanuel.'
  },
  {
    role: 'Đoàn Phó Nội Vụ',
    name: 'TBD',
    description: 'Vice-Chapter Leader (Internal) — manages internal operations and division coordination.'
  },
  {
    role: 'Đoàn Phó Ngoại Vụ',
    name: 'TBD',
    description: 'Vice-Chapter Leader (External) — handles community outreach and external relations.'
  },
  {
    role: 'Thư Ký',
    name: 'TBD',
    description: 'Secretary — manages correspondence, records, and documentation.'
  },
  {
    role: 'Thủ Quỹ',
    name: 'TBD',
    description: 'Treasurer — manages chapter finances, fundraising, and budgets.'
  },
  {
    role: 'Ngành Trưởng Ấu Nhi',
    name: 'TBD',
    description: 'Division Leader for Ấu Nhi (Seedlings) — guides our youngest members ages 6–9.'
  },
  {
    role: 'Ngành Trưởng Thiếu Nhi',
    name: 'TBD',
    description: 'Division Leader for Thiếu Nhi (Searchers) — leads members ages 10–12.'
  },
  {
    role: 'Ngành Trưởng Nghĩa Sĩ',
    name: 'TBD',
    description: 'Division Leader for Nghĩa Sĩ (Companions) — mentors members ages 13–15.'
  },
  {
    role: 'Ngành Trưởng Hiệp Sĩ',
    name: 'TBD',
    description: 'Division Leader for Hiệp Sĩ (Knights) — guides members ages 16–17.'
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-cream text-slate-900">
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-navy via-navy-mid to-[#0a1a38] pb-16 pt-32 text-center text-white">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
              About Us
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">Our Team</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
              Meet the dedicated Huynh Trưởng (leaders) who serve Đoàn Emmanuel with love and faith.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.role}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-navy/5 text-3xl">
                    👤
                  </div>
                  <div className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                    {member.role}
                  </div>
                  <h3 className="text-xl font-bold text-navy">{member.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-muted">{member.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <h3 className="text-xl font-bold text-navy">Interested in Joining Our Team?</h3>
              <p className="mt-2 text-sm text-text-muted">
                We&apos;re always looking for dedicated Huynh Trưởng to help lead our youth.
              </p>
              <Link
                href="/#join"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90"
              >
                Get Involved →
              </Link>
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
