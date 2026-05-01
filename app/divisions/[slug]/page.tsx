import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getDivisionBySlug, getDivisionSlugs, getDivisions } from '@/lib/content';

export async function generateStaticParams() {
  return getDivisionSlugs().map((slug) => ({ slug }));
}

const divisionColors: Record<string, string> = {
  aunhi: 'from-green-600 to-green-800',
  thieunhi: 'from-blue-500 to-blue-700',
  nghiasi: 'from-yellow-500 to-yellow-700',
  hiepsi: 'from-amber-700 to-amber-900',
  huynhtruong: 'from-red-600 to-red-800'
};

export default async function DivisionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);

  if (!division) {
    notFound();
  }

  const allDivisions = getDivisions().filter((d) => d.slug !== slug);

  return (
    <div className="min-h-screen bg-cream text-slate-900">
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-navy via-navy-mid to-[#0a1a38] pb-16 pt-32 text-white">
          <div className="mx-auto max-w-5xl px-6">
            <Link href="/" className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-gold">
              ← Back to Home
            </Link>
            <div className={`mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r ${divisionColors[slug] || 'from-gold to-gold-light'}`} />
            <h1 className="text-4xl font-bold sm:text-5xl">{division.title}</h1>
            <p className="mt-4 text-lg text-gold/90">{division.subtitle}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">Motto · {division.motto}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-2xl font-bold text-navy">About {division.title}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">{division.description}</p>
              {division.details && (
                <p className="mt-6 text-base leading-7 text-slate-600">{division.details}</p>
              )}
            </div>

            {/* Other divisions */}
            {allDivisions.length > 0 && (
              <div className="mt-16">
                <h3 className="mb-6 text-xl font-bold text-navy">Other Divisions</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {allDivisions.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/divisions/${d.slug}`}
                      className="group rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className={`mb-3 h-1 w-10 rounded-full bg-gradient-to-r ${divisionColors[d.slug] || 'from-gold to-gold-light'}`} />
                      <h4 className="font-bold text-navy group-hover:text-gold">{d.title}</h4>
                      <p className="mt-1 text-xs text-text-muted">{d.subtitle}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
