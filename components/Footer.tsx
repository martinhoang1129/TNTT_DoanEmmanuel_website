import Link from 'next/link';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/PLACEHOLDER',
  facebook: 'https://www.facebook.com/PLACEHOLDER'
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/10 bg-[#080E1D] py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-bold text-gold">Đoàn Emmanuel</Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
            Vietnamese Eucharistic Youth Movement · Liên Đoàn Biển Đức · St. Benedict League of Chapters.
            Serving Vietnamese Catholic youth for over 40 years.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="rounded-lg bg-white/5 p-2.5 text-white/60 transition hover:bg-white/10 hover:text-gold" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="rounded-lg bg-white/5 p-2.5 text-white/60 transition hover:bg-white/10 hover:text-gold" aria-label="Facebook">
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold">Navigate</h3>
          <ul className="space-y-2.5 text-sm text-white/60">
            {[
              { label: 'Home', href: '/' },
              { label: 'Our Mission', href: '/#mission' },
              { label: 'Events', href: '/events' },
              { label: 'Join Us', href: '/#join' }
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold">Divisions</h3>
          <ul className="space-y-2.5 text-sm text-white/60">
            {[
              { label: 'Ấu Nhi', href: '/divisions/aunhi' },
              { label: 'Thiếu Nhi', href: '/divisions/thieunhi' },
              { label: 'Nghĩa Sĩ', href: '/divisions/nghiasi' },
              { label: 'Hiệp Sĩ', href: '/divisions/hiepsi' },
              { label: 'Huynh Trưởng', href: '/divisions/huynhtruong' }
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold">Resources</h3>
          <ul className="space-y-2.5 text-sm text-white/60">
            {[
              { label: 'VEYM National', href: 'https://veym.net' },
              { label: 'Liên Đoàn Biển Đức', href: 'https://www.liendoanbienduc.org' },
              { label: 'Our Lady of Lavang', href: 'https://www.lavangabq.org' }
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-6 pt-8 text-sm text-white/40 sm:flex sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Đoàn Emmanuel · TNTT · VEYM</span>
        <span>Vietnamese Eucharistic Youth Movement in the USA</span>
      </div>
    </footer>
  );
}
