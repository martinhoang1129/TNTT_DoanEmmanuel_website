import Link from 'next/link';

type NavGroup =
  | { label: string; href: string }
  | { label: string; links: { label: string; href: string }[] };

const navGroups: NavGroup[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'About',
    links: [
      { label: 'Our Mission', href: '#mission' },
      { label: 'Our Team', href: '#team' },
      { label: 'Our History', href: '#history' }
    ]
  },
  {
    label: 'Ngành',
    links: [
      { label: 'Ấu Nhi', href: '#aunhi' },
      { label: 'Thiếu Nhi', href: '#thieunhi' },
      { label: 'Nghĩa Sĩ', href: '#nghiasi' },
      { label: 'Hiệp Sĩ', href: '#hiepsi' },
      { label: 'Huynh Trưởng', href: '#huynhtruong' }
    ]
  },
  { label: 'Events', href: '#events' },
  {
    label: 'Resources',
    links: [
      { label: 'Songs', href: '#songs' },
      { label: 'Prayers', href: '#prayers' },
      { label: 'TDV Resources', href: '#resources' }
    ]
  }
];

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-navy/95 border-b border-white/10 backdrop-blur-xl px-6 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link href="#home" className="flex items-center gap-3 text-base font-semibold text-gold">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
            +
          </span>
          TNTT · Đoàn Emmanuel
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navGroups.map((item) =>
            'links' in item ? (
              <div key={item.label} className="group relative">
                <button className="nav-btn text-sm uppercase tracking-[0.16em] text-white/85 transition hover:text-gold">
                  {item.label} ▾
                </button>
                <div className="dropdown-menu absolute left-0 top-full mt-2 hidden w-56 rounded-3xl border border-white/10 bg-navy/98 px-4 py-3 shadow-soft group-hover:block">
                  {item.links!.map((link) => (
                    <Link key={link.label} href={link.href} className="block rounded-2xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-gold">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="text-sm uppercase tracking-[0.16em] text-white/85 transition hover:text-gold">
                {item.label}
              </Link>
            )
          )}
          <Link href="#join" className="ml-4 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy transition hover:bg-gold-light">
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
