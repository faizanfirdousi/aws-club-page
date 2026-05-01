import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    {
      title: "About Us",
      link: "#about",
    },
    {
      title: "Upcoming Events",
      link: "#events",
    },
    {
      title: "Gallery",
      link: "#gallery",
    },
    {
      title: "FAQ",
      link: "#faq",
    },
  ];
  // ['About Us', 'Upcoming Events', 'Gallery', 'FAQ']

  return (
    <footer className="relative mt-24 py-16 overflow-hidden bg-black/40 backdrop-blur-[60px] border-t border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_-40px_100px_rgba(0,0,0,0.6)]">
      {/* 3D Liquid Glass Highlight Edge (Dual highlight for realism) */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/[0.25] to-transparent"></div>

      {/* 3D Floating Mesh Gradients - Slowly pulsing for depth */}
      <div className="absolute -top-64 -left-40 w-[600px] h-[600px] bg-fuchsia-600/20 rounded-[100%] blur-[160px] pointer-events-none mix-blend-screen animate-pulse"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 rounded-full blur-[180px] pointer-events-none mix-blend-screen"></div>
      <div
        className="absolute -top-64 -right-40 w-[600px] h-[600px] bg-violet-600/20 rounded-[100%] blur-[160px] pointer-events-none mix-blend-screen animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-1" style={{ perspective: "1000px" }}>
            <span className="text-xl font-bold tracking-wider flex items-center gap-3 mb-4">
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                AWS Cloud Club
              </span>
              <span className="text-xs px-3 py-1 bg-white/[0.08] backdrop-blur-md rounded-full border border-white/10 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_4px_10px_rgba(0,0,0,0.4)]">
                I²IT
              </span>
            </span>
            <p className="text-base text-white/70 mb-8 leading-relaxed font-light drop-shadow-sm">
              Empowering students through hands-on cloud computing experience,
              networking, and real-world project builds.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  name: "LinkedIn",
                  link: "https://www.linkedin.com/company/awsi2it/",
                  svg: (
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  ),
                },
                {
                  name: "Instagram",
                  link: "https://www.instagram.com/awsclub.i2it/",
                  svg: (
                    <path
                      fillRule="evenodd"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      clipRule="evenodd"
                    />
                  ),
                },
                {
                  name: "Meetup",
                  link: "https://www.meetup.com/aws-sbg-i2it/",
                  viewBox: "0 0 512 512",
                  svg: (
                    <path
                      fillRule="evenodd"
                      d="M99 414.3c1.1 5.7-2.3 11.1-8 12.3-5.4 1.1-10.9-2.3-12-8-1.1-5.4 2.3-11.1 7.7-12.3 5.4-1.2 11.1 2.3 12.3 8zm143.1 71.4c-6.3 4.6-8 13.4-3.7 20 4.6 6.6 13.4 8.3 20 3.7 6.3-4.6 8-13.4 3.4-20-4.2-6.5-13.1-8.3-19.7-3.7zm-86-462.3c6.3-1.4 10.3-7.7 8.9-14-1.1-6.6-7.4-10.6-13.7-9.1-6.3 1.4-10.3 7.7-9.1 14 1.4 6.6 7.6 10.6 13.9 9.1zM34.4 226.3c-10-6.9-23.7-4.3-30.6 6-6.9 10-4.3 24 5.7 30.9 10 7.1 23.7 4.6 30.6-5.7 6.9-10.4 4.3-24.1-5.7-31.2zm272-170.9c10.6-6.3 13.7-20 7.7-30.3-6.3-10.6-19.7-14-30-7.7s-13.7 20-7.4 30.6c6 10.3 19.4 13.7 29.7 7.4zm-191.1 58c7.7-5.4 9.4-16 4.3-23.7s-15.7-9.4-23.1-4.3c-7.7 5.4-9.4 16-4.3 23.7 5.1 7.8 15.6 9.5 23.1 4.3zm372.3 156c-7.4 1.7-12.3 9.1-10.6 16.9 1.4 7.4 8.9 12.3 16.3 10.6 7.4-1.4 12.3-8.9 10.6-16.6-1.5-7.4-8.9-12.3-16.3-10.9zm39.7-56.8c-1.1-5.7-6.6-9.1-12-8-5.7 1.1-9.1 6.9-8 12.6 1.1 5.4 6.6 9.1 12.3 8 5.4-1.5 9.1-6.9 7.7-12.6zM447 138.9c-8.6 6-10.6 17.7-4.9 26.3 5.7 8.6 17.4 10.6 26 4.9 8.3-6 10.3-17.7 4.6-26.3-5.7-8.7-17.4-10.9-25.7-4.9zm-6.3 139.4c26.3 43.1 15.1 100-26.3 129.1-17.4 12.3-37.1 17.7-56.9 17.1-12 47.1-69.4 64.6-105.1 32.6-1.1.9-2.6 1.7-3.7 2.9-39.1 27.1-92.3 17.4-119.4-22.3-9.7-14.3-14.6-30.6-15.1-46.9-65.4-10.9-90-94-41.1-139.7-28.3-46.9.6-107.4 53.4-114.9C151.6 70 234.1 38.6 290.1 82c67.4-22.3 136.3 29.4 130.9 101.1 41.1 12.6 52.8 66.9 19.7 95.2zm-70 74.3c-3.1-20.6-40.9-4.6-43.1-27.1-3.1-32 43.7-101.1 40-128-3.4-24-19.4-29.1-33.4-29.4-13.4-.3-16.9 2-21.4 4.6-2.9 1.7-6.6 4.9-11.7-.3-6.3-6-11.1-11.7-19.4-12.9-12.3-2-17.7 2-26.6 9.7-3.4 2.9-12 12.9-20 9.1-3.4-1.7-15.4-7.7-24-11.4-16.3-7.1-40 4.6-48.6 20-12.9 22.9-38 113.1-41.7 125.1-8.6 26.6 10.9 48.6 36.9 47.1 11.1-.6 18.3-4.6 25.4-17.4 4-7.4 41.7-107.7 44.6-112.6 2-3.4 8.9-8 14.6-5.1 5.7 3.1 6.9 9.4 6 15.1-1.1 9.7-28 70.9-28.9 77.7-3.4 22.9 26.9 26.6 38.6 4 3.7-7.1 45.7-92.6 49.4-98.3 4.3-6.3 7.4-8.3 11.7-8 3.1 0 8.3.9 7.1 10.9-1.4 9.4-35.1 72.3-38.9 87.7-4.6 20.6 6.6 41.4 24.9 50.6 11.4 5.7 62.5 15.7 58.5-11.1zm5.7 92.3c-10.3 7.4-12.9 22-5.7 32.6 7.1 10.6 21.4 13.1 32 6 10.6-7.4 13.1-22 6-32.6-7.4-10.6-21.7-13.5-32.3-6z"
                      clipRule="evenodd"
                    />
                  ),
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 text-white/70 hover:text-white transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_10px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_10px_20px_rgba(0,0,0,0.6)]"
                >
                  <span className="sr-only">{item.name}</span>
                  <svg
                    className="h-5 w-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_4px_8px_rgba(255,100,255,0.5)] transition-all duration-300"
                    fill="currentColor"
                    viewBox={item.viewBox || "0 0 24 24"}
                    aria-hidden="true"
                  >
                    {item.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}

          <div className="flex flex-col gap-4">
            <h3 className="text-white/50 font-semibold tracking-widest uppercase text-xs drop-shadow-md">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((section, idx) => (
                <li key={idx}>
                  <a href={section.link} className="flex items-center group">
                    <span className="text-white/70 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300 font-medium">
                      {section.title}
                    </span>
                    <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(255,100,255,0.6)] border-white/10 font-black">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white/50 font-semibold tracking-widest uppercase text-xs drop-shadow-md">
              Resources
            </h3>
            <ul className="space-y-4">
              {[
                {
                  label: "AWS Certification Guide",
                  link: "https://aws.amazon.com/certification/",
                  external: true,
                },
                { label: "Project Walkthroughs", link: "#" },
                { label: "Tech Blog", link: "#" },
                {
                  label: "AWS Free Tier",
                  link: "https://aws.amazon.com/free/",
                  external: true,
                },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : ""}
                    className="flex items-center group text-white/70 hover:text-white transition-all duration-300 font-medium group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                  >
                    {item.label}
                    {item.external && (
                      <span className="ml-1.5 text-[10px] text-fuchsia-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all drop-shadow-[0_0_5px_rgba(255,100,255,0.5)]">
                        ↗
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated */}
          <div className="flex flex-col gap-4" style={{ perspective: "800px" }}>
            <h3 className="text-white/50 font-semibold tracking-widest uppercase text-xs drop-shadow-md">
              Stay Updated
            </h3>
            <p className="text-white/70 text-base mb-2 font-light leading-relaxed drop-shadow-sm">
              Get notified about our upcoming workshops and exclusive networking
              events.
            </p>
            <form
              className="flex flex-col gap-4 relative"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* 3D Debossed Input */}
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-black/40 border-t-2 border-l-2 border-black/80 border-b border-r border-white/10 rounded-full px-5 py-3.5 text-base text-white placeholder:text-white/30 focus:outline-none focus:bg-black/60 transition-all duration-500 shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)]"
              />
              {/* 3D Embossed Physical Push-Button */}
              <button
                type="submit"
                className="w-full relative bg-gradient-to-b from-white to-gray-200 text-black font-bold tracking-wide rounded-full px-5 py-3.5 text-base border-b-[4px] border-gray-400 hover:border-b-[2px] hover:translate-y-[2px] active:border-b-[0px] active:translate-y-[4px] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.3)] transition-all duration-100 shadow-[0_5px_15px_rgba(255,255,255,0.15)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Liquid 3D Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 mt-8 relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_1px_5px_rgba(255,255,255,0.4)]"></div>
          <p className="text-sm text-white/50 text-center md:text-left font-medium tracking-wide drop-shadow-md">
            &copy; {currentYear} AWS Cloud Club I²IT. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Code of Conduct", "Privacy Policy", "Terms"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="relative group text-sm text-white/50 hover:text-white transition-all duration-300 font-semibold drop-shadow-md"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
