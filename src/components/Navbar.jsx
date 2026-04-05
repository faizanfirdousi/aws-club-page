import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Team", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
];

const searchableItems = [
  { title: "Home Section", category: "Navigation", id: "#hero", icon: "🏠" },
  { title: "Meet the Team", category: "Navigation", id: "#about", icon: "👥" },
  { title: "Upcoming Events", category: "Navigation", id: "#events", icon: "📅" },
  { title: "Photo Gallery", category: "Navigation", id: "#gallery", icon: "📸" },
  { title: "Frequently Asked Questions", category: "Navigation", id: "#faq", icon: "❓" },
  { title: "AWS Free Tier", category: "Resources", link: "https://aws.amazon.com/free/", icon: "☁️" },
  { title: "Official Meetup Page", category: "Socials", link: "https://www.meetup.com/aws-cloud-club-at-i2it-pune/", icon: "👋" },
  { title: "LinkedIn Profile", category: "Socials", link: "https://www.linkedin.com/company/awsi2it/", icon: "💼" },
  { title: "Instagram Page", category: "Socials", link: "https://www.instagram.com/awsclub.i2it/", icon: "📷" },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScrollProgress(Number(scroll) * 100);
      setIsScrolled(totalScroll > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Trigger Cmd+K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      // Escape to close
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSearchOpen]);

  const scrollTo = (e, href) => {
    if (e) e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSearchResultClick = (item, e) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    if (item.id) {
       scrollTo(e, item.id);
    } else if (item.link) {
       window.open(item.link, '_blank', 'noopener,noreferrer');
    }
  };

  const filteredItems = searchableItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500 ${isScrolled ? 'py-0' : 'py-3'}`}>
        {/* 3D Liquid Full-Width Navbar Shell */}
        <nav className={`pointer-events-auto w-full transition-all duration-500 ease-in-out relative ${
          isScrolled 
            ? 'bg-black/50 backdrop-blur-[60px] border-b border-white/[0.1] shadow-[0_15px_40px_rgba(0,0,0,0.8)]' 
            : 'bg-black/10 backdrop-blur-[20px] border-b border-white/[0.02] shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
        }`}>
          
          {/* Subtle top edge liquid highlight */}
          <div className={`absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>

          {/* --- PREMIUM FEATURE: SCROLL PROGRESS RIBBON --- */}
          <div 
            className="absolute left-0 bottom-[-1px] h-[2px] bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-cyan-400 z-50 transition-all duration-150 ease-out shadow-[0_0_15px_rgba(139,92,246,0.9)]" 
            style={{ width: `${scrollProgress}%` }}
          >
            {/* Glowing laser head */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[4px] shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              
              {/* Left: 3D Logo Element + System Status */}
              <a
                href="#hero"
                onClick={(e) => scrollTo(e, '#hero')}
                className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300 flex-shrink-0 group cursor-pointer"
              >
                <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_4px_10px_rgba(139,92,246,0.5)] group-hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_8px_20px_rgba(139,92,246,0.8)] transition-all duration-300 ${isScrolled ? 'scale-90 shadow-none' : 'group-hover:-translate-y-0.5'}`}>
                  <svg viewBox="0 0 640 512" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                    <path d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-base sm:text-lg lg:text-xl tracking-wide drop-shadow-md hidden sm:flex items-center gap-1.5">
                  AWS <span className="font-light text-white/70">I²IT</span>
                  {/* Glowing Operational Dot (Cloud Status) */}
                  <div className="relative flex items-center justify-center w-2 h-2 ml-1" title="All Systems Operational">
                    <span className="absolute inline-flex w-full h-full rounded-full opacity-60 bg-emerald-400 animate-ping duration-[3000ms]"></span>
                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                  </div>
                </span>
              </div>
            </a>

            {/* Center: Dynamic Island Navigation Capsule (Desktop Display) */}
            <div className="hidden lg:flex flex-1 justify-center relative">
              <div className="flex items-center p-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/[0.05] shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)] mx-4 z-10 transition-all duration-300">
                
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="group relative px-5 py-2 rounded-full text-sm font-semibold text-white/50 hover:text-white transition-all duration-300 flex-shrink-0"
                  >
                    <span className="relative z-10">{link.name}</span>
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 rounded-full bg-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_2px_8px_rgba(0,0,0,0.5)]"></div>
                  </a>
                ))}
                
                {/* Visual Separator */}
                <div className="w-px h-5 bg-gradient-to-b from-transparent via-white/10 to-transparent mx-2 flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-black/40 blur-[1px]"></div>
                </div>
                
                {/* Decorative Terminal/Command Palette Indicator */}
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-2 pr-1 pl-2 py-1.5 bg-transparent text-white/30 text-xs cursor-pointer select-none group hover:text-white/80 transition-colors focus:outline-none"
                >
                  <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span className="font-medium tracking-wider">Search</span> 
                  <kbd className="font-mono bg-black/50 border border-white/5 px-2 py-0.5 rounded text-[10px] ml-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_2px_rgba(0,0,0,0.6)] group-hover:bg-white/10 group-hover:border-white/20 transition-all font-bold text-white/50 group-hover:text-white">⌘K</kbd>
                </button>
                
              </div>
            </div>

            {/* Center: Dynamic Island (Mobile/Tablet Compressed View) */}
            <div className="flex lg:hidden flex-1 justify-center relative px-1 sm:px-2">
              <div className="flex items-center p-1 rounded-full bg-black/40 backdrop-blur-md border border-white/[0.05] shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)] z-10 overflow-hidden w-full max-w-[180px] sx:max-w-[220px] sm:max-w-[320px]">
                
                <div className="flex items-center overflow-x-auto no-scrollbar scroll-smooth flex-1 pl-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className="px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white/50 hover:text-white hover:bg-white/[0.08] active:scale-95 transition-all duration-300 flex-shrink-0"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                
                <div className="hidden sm:block w-px h-4 bg-white/10 mx-1 flex-shrink-0"></div>

                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="p-1 px-1.5 text-white/50 hover:text-white flex-shrink-0 focus:outline-none hover:bg-white/[0.08] rounded-full transition-all mr-0.5"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
                
              </div>
            </div>

            {/* Right: Physical 3D Join Us Button */}
            <a
              href="https://www.meetup.com/aws-cloud-club-at-i2it-pune/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-5 py-2 z-10 relative bg-gradient-to-b from-white to-gray-200 text-black text-[10px] sm:text-xs lg:text-sm font-bold tracking-wide rounded-full border-b-[3px] border-gray-400 hover:border-b-[2px] hover:translate-y-[1px] active:border-b-[0px] active:translate-y-[3px] transition-all duration-100 flex-shrink-0 shadow-[0_4px_10px_rgba(255,255,255,0.2)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] select-none ml-1 sm:ml-2 lg:ml-0"
            >
              Join Us
            </a>

          </div>
        </div>
      </nav>
      </header>

      {/* --- SEARCH MODAL (CMD+K Palette OVERLAY) --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 pointer-events-auto">
          {/* Frosted Glass Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsSearchOpen(false)}
          ></div>
          
          {/* Modal Container */}
          <div className="relative w-full max-w-xl bg-gray-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col transform transition-all animate-in fade-in zoom-in-95 duration-200">
            
            {/* Search Input Box */}
            <div className="flex items-center px-5 py-4 border-b border-white/10 bg-white/[0.02]">
              <svg className="w-6 h-6 text-fuchsia-400 opacity-80 mr-4 drop-shadow-[0_0_5px_rgba(232,121,249,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input 
                type="text" 
                autoFocus
                placeholder="Search resources, events, or links..." 
                className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder:text-white/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <kbd className="hidden sm:inline-flex items-center font-mono bg-white/10 border border-white/10 px-2.5 py-1 rounded-md text-[10px] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] font-bold text-white/50 tracking-wider">
                ESC
              </kbd>
            </div>

            {/* Search Results Area */}
            <div className="max-h-[55vh] overflow-y-auto p-2 no-scrollbar">
              {filteredItems.length > 0 ? (
                <ul className="space-y-1">
                  {filteredItems.map((item, idx) => (
                    <li key={idx}>
                      <button 
                        onClick={(e) => handleSearchResultClick(item, e)}
                        className="w-full flex items-center px-4 py-3.5 rounded-xl hover:bg-white/[0.08] focus:bg-white/[0.08] outline-none transition-colors group text-left"
                      >
                        <span className="text-2xl mr-4 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 drop-shadow-md">
                          {item.icon}
                        </span>
                        <div className="flex flex-col flex-1">
                          <span className="text-white text-[15px] font-semibold tracking-wide drop-shadow-sm">{item.title}</span>
                          <span className="text-fuchsia-300/60 text-[10px] uppercase tracking-wider font-bold mt-0.5">{item.category}</span>
                        </div>
                        <span className="opacity-0 group-hover:opacity-100 text-white/40 text-xs font-semibold tracking-wider transition-opacity flex items-center gap-1">
                          Jump To 
                          <span className="text-lg">↵</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-16 text-center flex flex-col items-center">
                  <span className="text-5xl mb-4 opacity-40 grayscale filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">🛸</span>
                  <p className="text-white/60 font-semibold tracking-wide text-lg mb-1">No results matching "{searchQuery}"</p>
                  <p className="text-white/30 text-sm">Try searching for "Events" or "Resources"</p>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="px-5 py-2.5 bg-white/[0.01] border-t border-white/5 flex items-center justify-between text-[10px] text-white/30 font-semibold tracking-wide">
              <span>Quick Navigation Menu</span>
              <span className="flex items-center gap-1 text-fuchsia-400/50">AWS I²IT System Dashboard</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
