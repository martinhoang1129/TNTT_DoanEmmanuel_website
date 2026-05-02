import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Our History – Đoàn Emmanuel',
  description: 'The history and legacy of Đoàn Emmanuel TNTT.'
};

const timeline = [
  {
    year: 'Origins',
    title: 'TNTT Founded in Vietnam',
    description:
      'The Vietnamese Eucharistic Youth Movement (Thiếu Nhi Thánh Thể) was founded in Vietnam, inspired by the Eucharistic Crusade movement, to nurture the Catholic faith among Vietnamese youth.'
  },
  {
    year: '1980s',
    title: 'TNTT in the United States',
    description:
      'Following the Vietnamese diaspora, TNTT chapters were established across the United States to serve Vietnamese Catholic youth communities and preserve cultural and spiritual traditions.'
  },
  {
    year: 'Est.',
    title: 'Đoàn Emmanuel Founded',
    description:
      'Đoàn Emmanuel was established as part of Liên Đoàn Biển Đức (St. Benedict League of Chapters) to serve Vietnamese Catholic families in our local community.'
  },
  {
    year: 'Today',
    title: 'Continuing Our Mission',
    description:
      'Đoàn Emmanuel continues to grow, serving youth across five divisions — Ấu Nhi, Thiếu Nhi, Nghĩa Sĩ, Hiệp Sĩ, and Huynh Trưởng — fostering faith, leadership, and community.'
  }
];

export default function HistoryPage() {
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
            <h1 className="text-4xl font-bold sm:text-5xl">Our History</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
              The story of Đoàn Emmanuel and the Vietnamese Eucharistic Youth Movement.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative border-l-2 border-gold/30 pl-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative mb-12 last:mb-0">
                  <div className="absolute -left-[2.55rem] flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-white text-xs font-bold text-navy">
                    {item.year.length <= 4 ? item.year : '✦'}
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <h3 className="text-xl font-bold text-navy">Help Us Write the Next Chapter</h3>
              <p className="mt-2 text-sm text-text-muted">
                Our story continues with every youth and family that joins our community.
              </p>
              <Link
                href="/#join"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90"
              >
                Join Đoàn Emmanuel →
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
