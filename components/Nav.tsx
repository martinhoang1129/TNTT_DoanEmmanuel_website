'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

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

type NavLink = { label: string; href: string };
type NavGroup =
  | NavLink
  | { label: string; links: NavLink[] };

const navGroups: NavGroup[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    links: [
      { label: 'Our Mission', href: '/#mission' },
      { label: 'Our Team', href: '/about/team' },
      { label: 'Our History', href: '/about/history' }
    ]
  },
  {
    label: 'Ngành',
    links: [
      { label: 'Ấu Nhi', href: '/divisions/aunhi' },
      { label: 'Thiếu Nhi', href: '/divisions/thieunhi' },
      { label: 'Nghĩa Sĩ', href: '/divisions/nghiasi' },
      { label: 'Hiệp Sĩ', href: '/divisions/hiepsi' },
      { label: 'Huynh Trưởng', href: '/divisions/huynhtruong' }
    ]
  },
  { label: 'Events', href: '/events' },
  {
    label: 'Resources',
    links: [
      { label: 'Prayer Resources', href: '/prayer' },
      { label: 'Training Resources', href: '/resources' },
      { label: 'VEYM Website', href: 'https://veym.net' },
      { label: 'Liên Đoàn Biển Đức', href: 'https://www.liendoanbienduc.org' }
    ]
  }
];

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/tnttemmanuel',
  facebook: 'https://www.facebook.com/tnttemmanuel'
};

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDesktopDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/98 shadow-lg backdrop-blur-xl' : 'bg-navy/90 backdrop-blur-md'} border-b border-white/10`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-base font-semibold text-gold" onClick={closeMobile}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-gold">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M11 2h2v5h5v2h-5v13h-2V9H6V7h5z" />
              <circle cx="12" cy="9" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </span>
          <span className="hidden sm:inline">TNTT · Đoàn Emmanuel</span>
          <span className="sm:hidden">Đoàn Emmanuel</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex" ref={dropdownRef}>
          {navGroups.map((item) =>
            'links' in item ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm uppercase tracking-[0.12em] transition ${
                    openDesktopDropdown === item.label ? 'bg-white/10 text-gold' : 'text-white/85 hover:bg-white/5 hover:text-gold'
                  }`}
                  onClick={() => setOpenDesktopDropdown(openDesktopDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDesktopDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
                {openDesktopDropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-xl border border-white/10 bg-navy p-2 shadow-xl">
                    {item.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="block rounded-lg px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-gold"
                        onClick={() => setOpenDesktopDropdown(null)}
                        {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm uppercase tracking-[0.12em] text-white/85 transition hover:bg-white/5 hover:text-gold"
              >
                {item.label}
              </Link>
            )
          )}

          {/* Social icons */}
          <div className="ml-2 flex items-center gap-1 border-l border-white/10 pl-3">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="rounded-lg p-2 text-white/70 transition hover:bg-white/5 hover:text-gold" aria-label="Instagram">
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="rounded-lg p-2 text-white/70 transition hover:bg-white/5 hover:text-gold" aria-label="Facebook">
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>

          <Link href="/#join" className="ml-3 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition hover:bg-gold-light">
            Join Us
          </Link>
        </div>

        {/* Mobile toggle + social */}
        <div className="flex items-center gap-2 lg:hidden">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="rounded-lg p-2 text-white/70 transition hover:text-gold" aria-label="Instagram">
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="rounded-lg p-2 text-white/70 transition hover:text-gold" aria-label="Facebook">
            <FacebookIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-gold hover:text-gold"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy px-4 pb-6 pt-4 lg:hidden">
          <div className="space-y-1">
            {navGroups.map((item) =>
              'links' in item ? (
                <div key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm uppercase tracking-[0.12em] text-white/85 transition hover:bg-white/5"
                    onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openSubmenu === item.label && (
                    <div className="ml-3 space-y-1 border-l border-white/10 pl-3">
                      {item.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/5 hover:text-gold"
                          onClick={closeMobile}
                          {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-sm uppercase tracking-[0.12em] text-white/85 transition hover:bg-white/5 hover:text-gold"
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3">
              <Link
                href="/#join"
                className="block rounded-full bg-gold px-4 py-3 text-center text-sm font-semibold text-navy transition hover:bg-gold-light"
                onClick={closeMobile}
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
