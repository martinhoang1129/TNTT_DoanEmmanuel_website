export default function Footer() {
  return (
    <footer className="border-t border-slate-200/10 bg-[#080E1D] py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold text-gold">Đoàn Emmanuel</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            Vietnamese Eucharistic Youth Movement · Liên Đoàn Biển Đức · St. Benedict League of Chapters.
            Serving Vietnamese Catholic youth for over 40 years.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.24em] text-gold">Navigate</h3>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              { label: 'Our Mission', href: '#mission' },
              { label: 'Our Team', href: '#team' },
              { label: 'Our History', href: '#history' },
              { label: 'Events', href: '#events' },
              { label: 'Join Us', href: '#join' }
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.24em] text-gold">External Links</h3>
          <ul className="space-y-2 text-sm text-white/70">
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
      <div className="mx-auto mt-12 max-w-6xl px-6 text-sm text-white/40 sm:flex sm:items-center sm:justify-between">
        <span>© 2025 Đoàn Emmanuel · TNTT · VEYM</span>
        <span>Vietnamese Eucharistic Youth Movement in the USA</span>
      </div>
    </footer>
  );
}
