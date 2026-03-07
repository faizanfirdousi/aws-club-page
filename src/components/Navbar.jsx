import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Team", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none pt-4 px-4">
      {/* Floating pill navbar */}
      <nav className="pointer-events-auto flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg shadow-black/10 px-2 py-1.5 sm:px-3 sm:py-2">

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA pill on desktop */}
        <a
          href="https://www.meetup.com/aws-cloud-club-at-i2it-pune/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block ml-1 px-4 py-1.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors duration-200"
        >
          Join Us
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200 ml-1"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open menu</span>
          {!isOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          className="pointer-events-auto md:hidden absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg shadow-black/10 py-3 px-4"
          id="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.meetup.com/aws-cloud-club-at-i2it-pune/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-center px-4 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors duration-200"
          >
            Join Us
          </a>
        </div>
      )}
    </header>
  );
}
