import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home',    href: '#hero'    },
  { name: 'Team',    href: '#about'   },
  { name: 'Events',  href: '#events'  },
  { name: 'Gallery', href: '#gallery' },
  { name: 'FAQ',     href: '#faq'     },
];

const searchableItems = [
  { title: 'Home',             category: 'Navigation', id: '#hero',    icon: '↑' },
  { title: 'Meet the Team',    category: 'Navigation', id: '#about',   icon: '→' },
  { title: 'Events',           category: 'Navigation', id: '#events',  icon: '→' },
  { title: 'Gallery',          category: 'Navigation', id: '#gallery', icon: '→' },
  { title: 'FAQ',              category: 'Navigation', id: '#faq',     icon: '→' },
  { title: 'AWS Free Tier',    category: 'Resource',   link: 'https://aws.amazon.com/free/',                          icon: '↗' },
  { title: 'Join on Meetup',   category: 'Community',  link: 'https://www.meetup.com/aws-cloud-club-at-i2it-pune/',  icon: '↗' },
  { title: 'LinkedIn',         category: 'Social',     link: 'https://www.linkedin.com/company/awsi2it/',             icon: '↗' },
  { title: 'Instagram',        category: 'Social',     link: 'https://www.instagram.com/awsclub.i2it/',              icon: '↗' },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [searchOpen,   setSearchOpen]   = useState(false);
  const [query,        setQuery]         = useState('');
  const [activeSection,setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-40% 0px -50% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fn = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(p => !p); }
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = searchOpen ? 'hidden' : '';
  }, [searchOpen]);

  const go = (e, href) => {
    if (e) e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleResult = (item, e) => {
    setSearchOpen(false); setQuery('');
    if (item.id) go(e, item.id);
    else if (item.link) window.open(item.link, '_blank', 'noopener,noreferrer');
  };

  const filtered = searchableItems.filter(i =>
    i.title.toLowerCase().includes(query.toLowerCase()) ||
    i.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 px-4 pointer-events-none">
        <motion.div
          layout
          className="pointer-events-auto flex items-center justify-between px-3 h-14 sm:h-16 rounded-full transition-all duration-300 w-full max-w-5xl"
          style={{
            background: scrolled ? 'rgba(10, 10, 10, 0.65)' : 'transparent',
            backdropFilter: scrolled ? 'blur(24px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
            border: scrolled ? '1px solid var(--border)' : '1px solid transparent',
            boxShadow: scrolled ? '0 10px 40px -10px rgba(0,0,0,0.5)' : 'none'
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => go(e, '#hero')}
            className="flex items-center gap-2.5 px-2 group flex-shrink-0"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-300">
              <svg viewBox="0 0 640 512" fill="currentColor" className="w-3.5 h-3.5 text-[#FF9900]">
                <path d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM264.91 258.46c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42z"/>
              </svg>
            </div>
            <span className="font-semibold text-white text-sm tracking-tight hidden sm:block">
              AWS <span className="text-white/40 font-normal">Cloud Club</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => {
              const active = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => go(e, link.href)}
                  className="px-4 py-2 text-sm rounded-full transition-all duration-200 relative"
                  style={{ color: active ? '#ffffff' : 'var(--text-3)' }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#FAFAFA'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--text-3)'; }}
                >
                  {active && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden lg:flex items-center gap-2 px-3 py-2 text-sm rounded-full transition-colors duration-200 bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-3)] hover:text-white"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-xs font-medium">Search</span>
              <kbd className="font-mono text-[9px] px-1.5 py-0.5 rounded ml-1 border border-[var(--border)] bg-[var(--bg)]">⌘K</kbd>
            </button>

            {/* CTA */}
            <a
              href="https://www.meetup.com/aws-cloud-club-at-i2it-pune/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-xs sm:text-sm rounded-full px-5 py-2"
            >
              Join Us
            </a>
          </div>
        </motion.div>
      </header>

      {/* Search modal */}
      <AnimatePresence>
      {searchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSearchOpen(false)} 
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-lg rounded-2xl overflow-hidden flex flex-col bg-[#0f0f0f] border border-[var(--border)] shadow-[0_0_80px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border)]">
              <svg className="w-5 h-5 flex-shrink-0 text-[var(--text-3)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                autoFocus
                placeholder="Search resources, events, or navigation..."
                className="flex-1 bg-transparent border-none outline-none text-white text-base placeholder:text-[var(--text-3)] font-medium"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <kbd className="font-mono text-[10px] px-2 py-1 rounded border border-[var(--border)] bg-[var(--bg)] text-[var(--text-3)]">ESC</kbd>
            </div>

            <div className="max-h-80 overflow-y-auto p-2 no-scrollbar">
              {filtered.length > 0 ? filtered.map((item, i) => (
                <button
                  key={i}
                  onClick={e => handleResult(item, e)}
                  className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-colors duration-150 group hover:bg-[var(--bg-elevated)]"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                    <span className="text-xs font-mono text-[var(--text-2)] group-hover:text-[var(--accent)]">{item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{item.title}</p>
                    <p className="text-[11px] uppercase tracking-wider text-[var(--text-3)] mt-0.5 font-medium">{item.category}</p>
                  </div>
                </button>
              )) : (
                <div className="py-12 text-center text-[var(--text-3)]">
                  <p className="text-sm">No results for "{query}"</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
      </AnimatePresence>
    </>
  );
}
