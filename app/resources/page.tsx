import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getResources } from '@/lib/content';

export const metadata = {
  title: 'Training Resources – Đoàn Emmanuel',
  description: 'Training materials, guides, and resources for Đoàn Emmanuel TNTT leaders and youth.'
};

const categoryLabels: Record<string, string> = {
  training: '📋 Training',
  document: '📄 Document',
  guide: '📘 Guide',
  media: '🎬 Media',
  link: '🔗 Link'
};

const categoryColors: Record<string, string> = {
  training: 'bg-blue-50 text-blue-700 border-blue-200',
  document: 'bg-slate-50 text-slate-700 border-slate-200',
  guide: 'bg-green-50 text-green-700 border-green-200',
  media: 'bg-purple-50 text-purple-700 border-purple-200',
  link: 'bg-amber-50 text-amber-700 border-amber-200'
};

export default function ResourcesPage() {
  const resources = getResources();

  return (
    <div className="min-h-screen bg-cream text-slate-900">
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-navy via-navy-mid to-[#0a1a38] pb-16 pt-32 text-center text-white">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold">
              Resources
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">Training & Resources</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
              Training materials, guides, and resources for our Huynh Trưởng and youth members.
            </p>
          </div>
        </section>

        {/* Resources List */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            {resources.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                  <div
                    key={resource.slug}
                    className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="mb-4">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${categoryColors[resource.category] || 'bg-slate-50 text-slate-700 border-slate-200'}`}
                      >
                        {categoryLabels[resource.category] || resource.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy">{resource.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-text-muted">
                      {resource.description}
                    </p>
                    {resource.body && (
                      <p className="mt-3 text-xs leading-5 text-slate-500">{resource.body}</p>
                    )}
                    {resource.externalUrl && (
                      <a
                        href={resource.externalUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition hover:bg-navy/90"
                      >
                        Open Resource →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center">
                <div className="mb-4 text-5xl">📚</div>
                <h3 className="text-xl font-bold text-navy">Resources Coming Soon</h3>
                <p className="mt-2 text-sm text-text-muted">
                  Training resources will be added here by our Huynh Trưởng.
                </p>
                <p className="mt-4 rounded-xl bg-navy/5 p-4 text-xs text-text-muted">
                  <strong className="text-navy">Leaders:</strong> Add resources in the{' '}
                  <a href="/admin/index.html" className="text-gold underline">
                    TinaCMS Admin Panel
                  </a>{' '}
                  under &quot;Resources &amp; Training&quot;.
                </p>
              </div>
            )}

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
