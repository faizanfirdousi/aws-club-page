import React from "react";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/awsi2it/",
    icon: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/awsclub.i2it/",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
  {
    name: "Meetup",
    href: "https://www.meetup.com/aws-i2it/",
    viewBox: "0 0 512 512",
    icon: (
      <path fillRule="evenodd" d="M99 414.3c1.1 5.7-2.3 11.1-8 12.3-5.4 1.1-10.9-2.3-12-8-1.1-5.4 2.3-11.1 7.7-12.3 5.4-1.2 11.1 2.3 12.3 8zm143.1 71.4c-6.3 4.6-8 13.4-3.7 20 4.6 6.6 13.4 8.3 20 3.7 6.3-4.6 8-13.4 3.4-20-4.2-6.5-13.1-8.3-19.7-3.7zm-86-462.3c6.3-1.4 10.3-7.7 8.9-14-1.1-6.6-7.4-10.6-13.7-9.1-6.3 1.4-10.3 7.7-9.1 14 1.4 6.6 7.6 10.6 13.9 9.1zM34.4 226.3c-10-6.9-23.7-4.3-30.6 6-6.9 10-4.3 24 5.7 30.9 10 7.1 23.7 4.6 30.6-5.7 6.9-10.4 4.3-24.1-5.7-31.2zm272-170.9c10.6-6.3 13.7-20 7.7-30.3-6.3-10.6-19.7-14-30-7.7s-13.7 20-7.4 30.6c6 10.3 19.4 13.7 29.7 7.4zm-191.1 58c7.7-5.4 9.4-16 4.3-23.7s-15.7-9.4-23.1-4.3c-7.7 5.4-9.4 16-4.3 23.7 5.1 7.8 15.6 9.5 23.1 4.3zm372.3 156c-7.4 1.7-12.3 9.1-10.6 16.9 1.4 7.4 8.9 12.3 16.3 10.6 7.4-1.4 12.3-8.9 10.6-16.6-1.5-7.4-8.9-12.3-16.3-10.9zm39.7-56.8c-1.1-5.7-6.6-9.1-12-8-5.7 1.1-9.1 6.9-8 12.6 1.1 5.4 6.6 9.1 12.3 8 5.4-1.5 9.1-6.9 7.7-12.6zM447 138.9c-8.6 6-10.6 17.7-4.9 26.3 5.7 8.6 17.4 10.6 26 4.9 8.3-6 10.3-17.7 4.6-26.3-5.7-8.7-17.4-10.9-25.7-4.9zm-6.3 139.4c26.3 43.1 15.1 100-26.3 129.1-17.4 12.3-37.1 17.7-56.9 17.1-12 47.1-69.4 64.6-105.1 32.6-1.1.9-2.6 1.7-3.7 2.9-39.1 27.1-92.3 17.4-119.4-22.3-9.7-14.3-14.6-30.6-15.1-46.9-65.4-10.9-90-94-41.1-139.7-28.3-46.9.6-107.4 53.4-114.9C151.6 70 234.1 38.6 290.1 82c67.4-22.3 136.3 29.4 130.9 101.1 41.1 12.6 52.8 66.9 19.7 95.2zm-70 74.3c-3.1-20.6-40.9-4.6-43.1-27.1-3.1-32 43.7-101.1 40-128-3.4-24-19.4-29.1-33.4-29.4-13.4-.3-16.9 2-21.4 4.6-2.9 1.7-6.6 4.9-11.7-.3-6.3-6-11.1-11.7-19.4-12.9-12.3-2-17.7 2-26.6 9.7-3.4 2.9-12 12.9-20 9.1-3.4-1.7-15.4-7.7-24-11.4-16.3-7.1-40 4.6-48.6 20-12.9 22.9-38 113.1-41.7 125.1-8.6 26.6 10.9 48.6 36.9 47.1 11.1-.6 18.3-4.6 25.4-17.4 4-7.4 41.7-107.7 44.6-112.6 2-3.4 8.9-8 14.6-5.1 5.7 3.1 6.9 9.4 6 15.1-1.1 9.7-28 70.9-28.9 77.7-3.4 22.9 26.9 26.6 38.6 4 3.7-7.1 45.7-92.6 49.4-98.3 4.3-6.3 7.4-8.3 11.7-8 3.1 0 8.3.9 7.1 10.9-1.4 9.4-35.1 72.3-38.9 87.7-4.6 20.6 6.6 41.4 24.9 50.6 11.4 5.7 62.5 15.7 58.5-11.1zm5.7 92.3c-10.3 7.4-12.9 22-5.7 32.6 7.1 10.6 21.4 13.1 32 6 10.6-7.4 13.1-22 6-32.6-7.4-10.6-21.7-13.5-32.3-6z" clipRule="evenodd" />
    ),
  },
];

const quickLinks = [
  { title: "About Us",        href: "#about"   },
  { title: "Events",          href: "#events"  },
  { title: "Gallery",         href: "#gallery" },
  { title: "FAQ",             href: "#faq"     },
];

const resources = [
  { label: "AWS Certification", href: "https://aws.amazon.com/certification/",  external: true },
  { label: "AWS Free Tier",     href: "https://aws.amazon.com/free/",            external: true },
  { label: "AWS Docs",          href: "https://docs.aws.amazon.com/",            external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full flex justify-center bg-black border-t border-[var(--border)]">
      <div className="max-w-5xl px-6 md:px-12 w-full pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[var(--bg-elevated)] border border-[var(--border)]">
                <svg viewBox="0 0 640 512" fill="currentColor" className="w-4 h-4 text-[#FF9900]">
                  <path d="M578.39 319.65c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"/>
                </svg>
              </div>
              <div>
                <span className="font-semibold text-white text-base">AWS <span className="text-gray-400 font-normal">Cloud Club</span></span>
              </div>
            </div>
            <p className="text-[var(--text-3)] text-sm leading-relaxed mb-6 max-w-xs">
              A student-driven community at I²IT Pune building cloud skills through hands-on workshops and peer learning.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  className="w-8 h-8 rounded-md flex items-center justify-center bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-3)] hover:text-white hover:border-[var(--border-hover)] transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox={s.viewBox || "0 0 24 24"}>
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-2)] mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-sm text-[var(--text-3)] hover:text-white transition-colors duration-200">
                    {l.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-2)] mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {resources.map((r, i) => (
                <li key={i}>
                  <a
                    href={r.href}
                    target={r.external ? "_blank" : "_self"}
                    rel={r.external ? "noopener noreferrer" : ""}
                    className="group flex items-center gap-1.5 text-sm text-[var(--text-3)] hover:text-white transition-colors duration-200"
                  >
                    {r.label}
                    {r.external && (
                      <span className="text-[10px] text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors">↗</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-2)] mb-4">Updates</h4>
            <p className="text-sm text-[var(--text-3)] mb-4">Get notified about upcoming hands-on workshops.</p>
            <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border)] text-white text-sm px-3 py-2 rounded-md focus:border-[var(--text-3)] focus:outline-none transition-colors"
                required
              />
              <button type="submit" className="w-full bg-white text-black text-sm font-medium py-2 rounded-md hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-[var(--border)]">
          <p className="text-[11px] text-[var(--text-3)] text-center sm:text-left tracking-wide">
            © {year} AWS Cloud Club I²IT. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Code of Conduct", "Privacy", "Terms"].map((item, i) => (
              <a key={i} href="#" className="text-[11px] text-[var(--text-3)] hover:text-white transition-colors duration-200 tracking-wide">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
