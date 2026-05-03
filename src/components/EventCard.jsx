import { useState, useRef, useCallback, useEffect } from "react";

// ── Single Event Card ──────────────────────────────────────────────────────
export function EventGridCard({ event }) {
  const { title, date, time, location, description, image, tags, isUpcoming, registrationLink } = event;

  return (
    <div className="card flex flex-col w-full shrink-0 h-full overflow-hidden group">
      {/* Image */}
      <div className="relative w-full h-[200px] overflow-hidden border-b border-[var(--border)] bg-[#111]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          style={{ filter: 'brightness(0.8) contrast(1.1)' }}
        />
        {isUpcoming && (
          <div className="absolute top-4 left-4 bg-[var(--accent)] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
            Upcoming
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow bg-[var(--bg-surface)]">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs mb-4 text-[var(--text-3)] font-medium">
          <span>{date}</span>
          {time && <span>&middot; {time}</span>}
          <span>&middot; {location}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-3 leading-snug line-clamp-2 tracking-tight">{title}</h3>

        {/* Description */}
        <p className="text-sm leading-relaxed line-clamp-3 mb-8 flex-grow text-[var(--text-2)]">
          {description}
        </p>

        {/* Tags + CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-2)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={registrationLink || "https://www.meetup.com/aws-cloud-club-at-i2it-pune/"}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-semibold px-4 py-2 rounded-md transition-all duration-200 ${
              isUpcoming 
                ? 'bg-[var(--accent)] text-black hover:bg-[#FFAA33]' 
                : 'bg-[var(--bg-elevated)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--border)]'
            }`}
          >
            {isUpcoming ? "Register" : "Details"}
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Events Section ──────────────────────────────────────────────────────────
export default function EventsSection({ upcomingEvents = [], pastEvents = [] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [scrollIndex,  setScrollIndex]  = useState(0);
  const [translateX,   setTranslateX]   = useState(0);
  const [cardWidth,    setCardWidth]    = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const carouselRef = useRef(null);
  const GAP         = 24;
  const filters     = ["All", "Upcoming", "Past"];

  const filteredEvents =
    activeFilter === "All"
      ? [...upcomingEvents, ...pastEvents]
      : activeFilter === "Upcoming"
      ? upcomingEvents
      : pastEvents;

  const updateLayout = useCallback(() => {
    if (!carouselRef.current) return;
    const containerW = carouselRef.current.offsetWidth;
    let cpv = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    setCardsPerView(cpv);
    const cw = cpv === 1 ? containerW : (containerW - GAP * (cpv - 1)) / cpv;
    setCardWidth(cw);
    const maxIdx  = Math.max(0, filteredEvents.length - cpv);
    const safeIdx = Math.min(scrollIndex, maxIdx);
    if (safeIdx !== scrollIndex) setScrollIndex(safeIdx);
    setTranslateX(safeIdx * (cw + GAP));
  }, [scrollIndex, filteredEvents.length]);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  const maxIndex  = Math.max(0, filteredEvents.length - cardsPerView);
  const scrollLeft  = () => setScrollIndex(p => Math.max(0, p - 1));
  const scrollRight = () => setScrollIndex(p => Math.min(maxIndex, p + 1));

  return (
    <section id="events" className="w-full py-24 md:py-32 flex justify-center border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-5xl px-6 md:px-12 w-full">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] mb-4">
              Workshops & Meetups
            </h2>
            <p className="text-lg text-[var(--text-2)] max-w-xl leading-relaxed">
              Hands-on sessions, community days, and architectural deep dives.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => { setActiveFilter(f); setScrollIndex(0); }}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeFilter === f 
                    ? 'bg-[var(--border)] text-white shadow-sm' 
                    : 'text-[var(--text-3)] hover:text-white hover:bg-[var(--border)]/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div>
            <div className="relative overflow-hidden" ref={carouselRef} style={{ margin: '0 -10px', padding: '10px' }}>
              <div
                className="flex transition-transform duration-500 cubic-bezier(0.25, 1, 0.5, 1)"
                style={{ transform: `translateX(-${translateX}px)`, gap: `${GAP}px` }}
              >
                {filteredEvents.map(event => (
                  <div key={event.id} className="shrink-0" style={{ width: `${cardWidth}px` }}>
                    <EventGridCard event={event} />
                  </div>
                ))}
              </div>
            </div>

            {filteredEvents.length > cardsPerView && (
              <div className="flex justify-end gap-3 mt-8">
                <button onClick={scrollLeft} disabled={scrollIndex === 0} className="w-10 h-10 rounded-lg flex items-center justify-center border border-[var(--border)] text-[var(--text-2)] hover:bg-[var(--bg-surface)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={scrollRight} disabled={scrollIndex >= maxIndex} className="w-10 h-10 rounded-lg flex items-center justify-center border border-[var(--border)] text-[var(--text-2)] hover:bg-[var(--bg-surface)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="card p-16 flex flex-col items-center justify-center text-center">
            <svg className="w-10 h-10 mb-6 text-[var(--text-3)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">No events found</h3>
            <p className="text-sm text-[var(--text-2)] mb-6 max-w-sm">Check back later for {activeFilter.toLowerCase()} events or join our Meetup group to get notified.</p>
            {activeFilter === "Upcoming" && (
              <a href="https://www.meetup.com/aws-cloud-club-at-i2it-pune/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Follow on Meetup
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
