import { useState, useRef, useCallback, useEffect } from "react";

// ───────────────────────── Single Event Card (vertical / grid style) ─────────────────────────
export function EventGridCard({ event }) {
  const {
    title,
    date,
    time,
    location,
    description,
    image,
    tags,
    isUpcoming,
    registrationLink,
  } = event;

  return (
    <div className="group flex flex-col bg-white/[0.03] backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-fuchsia-500/40 transition-all duration-300 shadow-xl w-full shrink-0">
      {/* Image */}
      <div className="relative w-full h-[200px] bg-[#0a0012] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {isUpcoming && (
          <div className="absolute top-3 right-3 bg-[#FF9900] text-[#0f1b29] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Upcoming
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow gap-3">
        {/* Date & time */}
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#FF9900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </span>
          {time && (
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {time}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Location */}
        <div className="flex items-center text-xs text-gray-400 gap-1.5">
          <svg className="w-3.5 h-3.5 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </div>

        {/* Spacer to push footer down */}
        <div className="flex-grow" />

        {/* Tags + Button */}
        <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/5">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-fuchsia-500/10 text-fuchsia-300 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-fuchsia-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => window.open(registrationLink || "https://www.meetup.com/aws-cloud-club-at-i2it-pune/", "_blank")}
            className={`text-xs font-bold px-4 py-1.5 rounded-full transition-colors duration-200 ${
              isUpcoming 
                ? "bg-[#FF9900] hover:bg-[#e68a00] text-[#0f1b29]" 
                : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
            }`}
          >
            {isUpcoming ? "Join Now" : "View Details"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── Events Section (with filters + carousel) ─────────────────────────
export default function EventsSection({ upcomingEvents = [], pastEvents = [] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [scrollIndex, setScrollIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const carouselRef = useRef(null);

  const GAP = 24; // gap-6 = 1.5rem = 24px

  const updateTranslate = useCallback(() => {
    if (!carouselRef.current) return;
    const containerWidth = carouselRef.current.offsetWidth;
    const cw = (containerWidth - GAP * 2) / 3;
    setCardWidth(cw);
    setTranslateX(scrollIndex * (cw + GAP));
  }, [scrollIndex]);

  useEffect(() => {
    updateTranslate();
    window.addEventListener("resize", updateTranslate);
    return () => window.removeEventListener("resize", updateTranslate);
  }, [updateTranslate]);

  const filters = ["All", "Upcoming", "Past"];

  let filteredEvents = [];
  if (activeFilter === "All") {
    filteredEvents = [...upcomingEvents, ...pastEvents];
  } else if (activeFilter === "Upcoming") {
    filteredEvents = upcomingEvents;
  } else if (activeFilter === "Past") {
    filteredEvents = pastEvents;
  }

  const CARDS_PER_VIEW = 3;
  const maxIndex = Math.max(0, filteredEvents.length - CARDS_PER_VIEW);

  const scrollLeft = () => setScrollIndex((prev) => Math.max(0, prev - 1));
  const scrollRight = () =>
    setScrollIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <section id="events" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Events
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Stay updated with our workshops, community days, and meetups. Build,
            learn, and network with AWS enthusiasts.
          </p>
        </div>

        {/* ── Filter Pills ── */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActiveFilter(f);
                setScrollIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeFilter === f
                  ? "bg-fuchsia-500 text-white border-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.3)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Events Carousel ── */}
        {filteredEvents.length > 0 ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {activeFilter === "All" ? "All Events" : `${activeFilter} Events`}
              </h3>
              <span className="bg-fuchsia-500/20 text-fuchsia-300 text-xs font-bold px-2.5 py-0.5 rounded-full">
                {filteredEvents.length}
              </span>
            </div>

            {/* Carousel container */}
            <div className="relative overflow-hidden" ref={carouselRef}>
              <div
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${translateX}px)`,
                }}
              >
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="shrink-0"
                    style={{ width: `${cardWidth}px` }}
                  >
                    <EventGridCard event={event} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {filteredEvents.length > CARDS_PER_VIEW && (
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={scrollLeft}
                  disabled={scrollIndex === 0}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    scrollIndex === 0
                      ? "border-white/10 text-white/20 cursor-not-allowed"
                      : "border-white/20 text-white hover:border-fuchsia-400 hover:text-fuchsia-400 hover:shadow-[0_0_15px_rgba(217,70,239,0.2)]"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={scrollRight}
                  disabled={scrollIndex >= maxIndex}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    scrollIndex >= maxIndex
                      ? "border-white/10 text-white/20 cursor-not-allowed"
                      : "border-white/20 text-white hover:border-fuchsia-400 hover:text-fuchsia-400 hover:shadow-[0_0_15px_rgba(217,70,239,0.2)]"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            {activeFilter === "Upcoming" ? (
              <div className="relative group max-w-lg mx-auto w-full mt-8 mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-[#0a0012]/80 backdrop-blur-xl border border-white/10 p-10 sm:p-12 rounded-2xl flex flex-col items-center overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] relative">
                    <svg className="w-10 h-10 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {/* Tiny decorative stars */}
                    <svg className="absolute -top-2 -right-2 w-4 h-4 text-[#FF9900] animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 7.6H22l-6 4.8 2.4 7.6-6-4.8-6 4.8 2.4-7.6-6-4.8h7.6z"/>
                    </svg>
                    <svg className="absolute -bottom-1 -left-3 w-3 h-3 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 7.6H22l-6 4.8 2.4 7.6-6-4.8-6 4.8 2.4-7.6-6-4.8h7.6z"/>
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">Something's Brewing!</h3>
                  <p className="text-gray-400 mb-8 max-w-sm text-sm sm:text-base leading-relaxed">
                    We're currently cooking up our next set of hands-on workshops and meetups. Stay tuned for awesomeness!
                  </p>
                  
                  <a
                    href="https://www.meetup.com/aws-cloud-club-at-i2it-pune/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#FF9900] text-[#0f1b29] font-bold py-3 px-8 rounded-full hover:bg-[#e68a00] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,153,0,0.25)] hover:shadow-[0_0_30px_rgba(255,153,0,0.4)]"
                  >
                    <span>Get Notified on Meetup</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ) : (
              <div className="py-16">
                <p className="text-gray-500 text-lg">
                  No events found for "{activeFilter}".
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
