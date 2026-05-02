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
    <div className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:border-orange-500/40 transition-all duration-500 ease-out shadow-sm hover:shadow-xl hover:-translate-y-1.5 w-full shrink-0">
      {/* Image */}
      <div className="relative w-full h-[200px] bg-muted overflow-hidden">
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
      <div className="p-4 sm:p-5 flex flex-col flex-grow gap-2 sm:gap-3">
        {/* Date & time */}
        <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF9900]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {date}
          </span>
          {time && (
            <span className="flex items-center gap-1.5">
              <svg
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {time}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-base font-bold text-foreground leading-tight sm:leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Location */}
        <div className="flex items-center text-[10px] sm:text-xs text-muted-foreground gap-1.5">
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </div>

        {/* Spacer to push footer down */}
        <div className="flex-grow min-h-[0.5rem] sm:min-h-0" />

        {/* Tags + Button */}
        <div className="flex items-center justify-between mt-1 sm:mt-2 pt-3 border-t border-border">
          <div className="flex flex-wrap gap-1.5 max-w-[60%]">
            {tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="bg-orange-500/10 text-orange-400 text-[9px] sm:text-[10px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-orange-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() =>
              window.open(
                registrationLink || "https://www.meetup.com/aws-sbg-i2it/",
                "_blank",
              )
            }
            className={`text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
              isUpcoming
                ? "bg-[#FF9900] hover:bg-[#ffb03a] text-[#0f1b29] shadow-[0_4px_12px_rgba(255,153,0,0.2)]"
                : "bg-muted hover:bg-accent text-foreground border border-border"
            }`}
          >
            {isUpcoming ? "Join Now" : "Details"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── Events Section (with filters + carousel) ─────────────────────────
export default function EventsSection({
  upcomingEvents = [],
  pastEvents = [],
}) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [scrollIndex, setScrollIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const carouselRef = useRef(null);

  const GAP = 24; // gap-6 = 1.5rem = 24px
  const filters = ["All", "Upcoming", "Past"];

  // Memoize filtered events to keep it stable
  const filteredEvents =
    activeFilter === "All"
      ? [...upcomingEvents, ...pastEvents]
      : activeFilter === "Upcoming"
        ? upcomingEvents
        : pastEvents;

  const updateTranslate = useCallback(() => {
    if (!carouselRef.current) return;
    const containerWidth = carouselRef.current.offsetWidth;

    // Determine cards per view based on container/window width
    let cpv = 3;
    if (window.innerWidth < 640) cpv = 1;
    else if (window.innerWidth < 1024) cpv = 2;

    setCardsPerView(cpv);

    // Calculate card width based on cpv
    const cw =
      cpv === 1 ? containerWidth : (containerWidth - GAP * (cpv - 1)) / cpv;
    setCardWidth(cw);

    // Ensure scrollIndex is within bounds if cpv changes
    const totalEvents = filteredEvents.length;
    const maxIdx = Math.max(0, totalEvents - cpv);
    const safeIndex = Math.min(scrollIndex, maxIdx);

    if (safeIndex !== scrollIndex) {
      setScrollIndex(safeIndex);
    }

    setTranslateX(safeIndex * (cw + GAP));
  }, [scrollIndex, filteredEvents.length]);

  useEffect(() => {
    updateTranslate();
    window.addEventListener("resize", updateTranslate);
    return () => window.removeEventListener("resize", updateTranslate);
  }, [updateTranslate]);

  const maxIndex = Math.max(0, filteredEvents.length - cardsPerView);

  const scrollLeft = () => setScrollIndex((prev) => Math.max(0, prev - 1));
  const scrollRight = () =>
    setScrollIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <section id="events" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
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
                  ? "bg-orange-500 text-white border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                  : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground"
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
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {activeFilter === "All"
                  ? "All Events"
                  : `${activeFilter} Events`}
              </h3>
              <span className="bg-orange-500/20 text-orange-400 text-xs font-bold px-2.5 py-0.5 rounded-full">
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
            {filteredEvents.length > cardsPerView && (
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={scrollLeft}
                  disabled={scrollIndex === 0}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    scrollIndex === 0
                      ? "border-border text-muted-foreground cursor-not-allowed"
                      : "border-border text-foreground hover:border-orange-400 hover:text-orange-400"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={scrollRight}
                  disabled={scrollIndex >= maxIndex}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    scrollIndex >= maxIndex
                      ? "border-border text-muted-foreground cursor-not-allowed"
                      : "border-border text-foreground hover:border-orange-400 hover:text-orange-400"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            {activeFilter === "Upcoming" ? (
              <div className="relative group max-w-lg mx-auto w-full mt-8 mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-card border border-border p-10 sm:p-12 rounded-2xl flex flex-col items-center overflow-hidden shadow-sm">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6 border border-border relative">
                    <svg
                      className="w-10 h-10 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {/* Tiny decorative stars */}
                    <svg
                      className="absolute -top-2 -right-2 w-4 h-4 text-[#FF9900] animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l2.4 7.6H22l-6 4.8 2.4 7.6-6-4.8-6 4.8 2.4-7.6-6-4.8h7.6z" />
                    </svg>
                    <svg
                      className="absolute -bottom-1 -left-3 w-3 h-3 text-purple-400 animate-pulse"
                      style={{ animationDelay: "1s" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l2.4 7.6H22l-6 4.8 2.4 7.6-6-4.8-6 4.8 2.4-7.6-6-4.8h7.6z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">
                    Something's Brewing!
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-sm text-sm sm:text-base leading-relaxed">
                    We're currently cooking up our next set of hands-on
                    workshops and meetups. Stay tuned for awesomeness!
                  </p>

                  <a
                    href="https://www.meetup.com/aws-sbg-i2it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#FF9900] text-[#0f1b29] font-bold py-3 px-8 rounded-full hover:bg-[#e68a00] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,153,0,0.25)] hover:shadow-[0_0_30px_rgba(255,153,0,0.4)]"
                  >
                    <span>Get Notified on Meetup</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ) : (
              <div className="py-16">
                <p className="text-muted-foreground text-lg">
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
