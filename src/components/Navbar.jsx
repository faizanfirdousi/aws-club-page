const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Team", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none pt-4 px-4">
      {/* Floating pill navbar */}
      <nav className="pointer-events-auto rounded-full bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg shadow-black/10 px-2 py-1.5 sm:px-3 sm:py-2 max-w-full">
        <div className="flex items-center gap-0.5 overflow-x-auto no-scrollbar px-1 sm:px-0 whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 flex-shrink-0"
            >
              {link.name}
            </a>
          ))}

          <span className="hidden md:inline-block w-px h-5 mx-1 bg-white/20" />

          <a
            href="https://www.meetup.com/aws-cloud-club-at-i2it-pune/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 px-4 py-1.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
          >
            Join Us
          </a>
        </div>
      </nav>
    </header>
  );
}
