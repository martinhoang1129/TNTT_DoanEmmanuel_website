'use client';

import { useEffect } from 'react';

type Post = {
  url: string;
  caption?: string;
};

type InstagramFeedProps = {
  handle: string;
  posts: Post[];
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function InstagramFeed({ handle, posts }: InstagramFeedProps) {
  const validPosts = posts.filter((p) => p.url && p.url.includes('instagram.com'));

  // Load Instagram embed script
  useEffect(() => {
    if (validPosts.length === 0) return;
    if (typeof window !== 'undefined' && !(window as any).instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, [validPosts]);

  return (
    <section className="bg-white py-20" id="gallery">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mx-auto mb-3 inline-flex items-center justify-center rounded-full border border-navy/10 bg-navy/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-navy">
            <InstagramIcon className="mr-2 h-4 w-4" />
            Instagram
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">Follow Our Journey</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
            See what Đoàn Emmanuel is up to! Follow us for photos, updates, and more.
          </p>
        </div>

        {validPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {validPosts.map((post, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={post.url}
                  style={{
                    background: '#FFF',
                    border: 0,
                    margin: 0,
                    maxWidth: '100%',
                    width: '100%',
                    padding: 0
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <InstagramIcon className="mx-auto mb-4 h-12 w-12 text-pink-500" />
            <h3 className="text-xl font-bold text-navy">Instagram Posts Coming Soon</h3>
            <p className="mt-2 text-sm text-text-muted">
              Add Instagram post URLs in the TinaCMS admin panel under <strong>Instagram Gallery</strong>.
            </p>
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href={`https://www.instagram.com/${handle}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <InstagramIcon className="h-5 w-5" />
            Follow @{handle}
          </a>
        </div>
      </div>
    </section>
  );
}
