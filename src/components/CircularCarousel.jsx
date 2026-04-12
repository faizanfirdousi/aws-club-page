import React, { useState, useEffect } from "react";

const carouselData = [
  { src: "/aws1.jpeg", isRecent: false },
  { src: "/aws2.jpeg", isRecent: false },
  { src: "/aws3.jpeg", isRecent: false },
  { src: "/aws4.jpeg", isRecent: false },
  { src: "/aws5.jpeg", isRecent: false },
  { src: "/aws6.jpeg", isRecent: false },
  { src: "/aws7.png", isRecent: true },
  { src: "/aws8.png", isRecent: true },
  { src: "/aws9.png", isRecent: true },
  { src: "/aws10.png", isRecent: true },
];

const StackedGalleryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Recent"];

  const filteredData = activeFilter === "All"
    ? carouselData
    : carouselData.filter((item) => item.isRecent);

  // To maintain the 3D loop animation correctly without items abruptly crossing the screen,
  // we need at least 6 items so the off-screen items can mount/unmount properly in the background.
  let displayData = [...filteredData];
  if (displayData.length > 0 && displayData.length < 6) {
    const multiplier = Math.ceil(6 / displayData.length);
    displayData = Array(multiplier).fill(filteredData).flat();
  }

  // Auto-playing logic to slide through the queue
  useEffect(() => {
    setActiveIndex(0); // Reset index on filter change

    if (displayData.length === 0) return;

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayData.length);
    }, 1500); // Faster snap

    return () => clearInterval(intervalId);
  }, [activeFilter, displayData.length]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      {/* ── Filter Pills ── */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
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

      <div className="relative w-full py-16 md:py-24 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-center items-center group">
          
         {/* 3D Scene Perspective Container */}
         <div 
           className="relative w-full max-w-7xl h-[300px] md:h-[400px] lg:h-[480px] flex justify-center items-center"
           style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
         >
           {displayData.map((item, index) => {
            // Distance calculation with array wrapping for infinite loop effect
            let diff = index - activeIndex;
            const total = displayData.length;

            // Normalize for shortest path so they wrap smoothly behind the stack
            if (diff > Math.floor(total / 2)) diff -= total;
            if (diff < -Math.floor(total / 2)) diff += total;

              const isCenter = diff === 0;
              const depth = Math.abs(diff);

              // Hide cards that are completely out of view
              if (depth > 2) return null;

              // Visual properties based on distance from center
              const zIndex = 10 - depth;
              
              // 3D positioning math
              const translateX = `calc(${diff} * 110%)`; 
              const scale = isCenter ? 1 : 1 - (depth * 0.15);
              // Stronger 3D perspective fold
              const rotateY = diff * -12; 
              // Slight fan-out tilt like a deck of cards
              const rotateZ = diff * 1.5; 
              
              return (
                  <div 
                    key={index}
                    className={`absolute transition-all duration-500 ease-out ${isCenter ? 'cursor-default' : 'cursor-pointer'}`}
                    style={{
                        transform: `translateX(${translateX}) scale(${scale}) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
                        zIndex: zIndex,
                        opacity: 1, 
                        pointerEvents: depth <= 2 ? 'auto' : 'none',
                    }}
                    onClick={() => !isCenter && handleCardClick(index)}
                  >
                     {/* Card Frame - Reduced Sizes */}
                     <div className={`relative w-[280px] md:w-[420px] lg:w-[560px] h-[180px] md:h-[260px] lg:h-[340px] rounded-2xl overflow-hidden scroll-smooth transition-all duration-500 bg-[#162638] ${
                         isCenter 
                           ? 'border border-fuchsia-500/60 shadow-[0_20px_60px_rgba(217,70,239,0.35)] ring-1 ring-fuchsia-400/20 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(217,70,239,0.55)]' 
                           : 'border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:shadow-xl'
                     }`}>
                        {/* Main Image without cropping */}
                        <img
                          src={item.src}
                          alt={`Gallery moment ${index + 1}`}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 z-10"
                          loading="lazy"
                        />
                        
                        {/* Interactive edge lighting for the center card */}
                        {isCenter && (
                           <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/0 via-fuchsia-400/5 to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        )}
                     </div>
                  </div>
              )
           })}
         </div>

         {/* Ambient Depth Blurs */}
         <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-64 h-64 bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[140px] opacity-10 pointer-events-none"></div>
         <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-64 h-64 bg-cyan-600 rounded-full mix-blend-screen filter blur-[140px] opacity-10 pointer-events-none"></div>

         {/* Progress Indicator Tracks */}
        <div className="mt-8 flex gap-3 sm:gap-4 z-30">
          {filteredData.map((_, idx) => {
            const isActive = idx === (activeIndex % filteredData.length);
            return (
              <button
                key={idx}
                onClick={() => {
                  // Find the closest index in displayData that corresponds to this dot to prevent rapid spin
                  let minDiff = Infinity;
                  let bestIndex = idx;
                  for (let i = 0; i < displayData.length; i++) {
                    if (i % filteredData.length === idx) {
                      const currentDiff = Math.abs(i - activeIndex);
                      if (currentDiff < minDiff) {
                        minDiff = currentDiff;
                        bestIndex = i;
                      }
                    }
                  }
                  handleCardClick(bestIndex);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${isActive
                    ? 'w-10 bg-fuchsia-400 shadow-[0_0_12px_rgba(217,70,239,0.9)]'
                    : 'w-2 sm:w-3 bg-white/20 hover:bg-white/40'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StackedGalleryCarousel;
