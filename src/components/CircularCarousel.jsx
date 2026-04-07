import React, { useState, useEffect } from "react";

const carouselData = [
  { src: "/aws1.jpeg" },
  { src: "/aws2.jpeg" },
  { src: "/aws3.jpeg" },
  { src: "/aws4.jpeg" },
  { src: "/aws5.jpeg" },
  { src: "/aws6.jpeg" },
];

const StackedGalleryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-playing logic to slide through the queue
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselData.length);
    }, 1500); // Faster snap

    return () => clearInterval(intervalId);
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full py-16 md:py-24 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-center items-center group">
        
       {/* 3D Scene Perspective Container */}
       <div 
         className="relative w-full max-w-7xl h-[300px] md:h-[400px] lg:h-[480px] flex justify-center items-center"
         style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
       >
         {carouselData.map((item, index) => {
            // Distance calculation with array wrapping for infinite loop effect
            let diff = index - activeIndex;
            const total = carouselData.length;
            
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
                   <div className={`relative w-[180px] md:w-[260px] lg:w-[340px] h-[260px] md:h-[360px] lg:h-[440px] rounded-2xl overflow-hidden scroll-smooth transition-all duration-500 bg-[#162638] ${
                       isCenter 
                         ? 'border border-fuchsia-500/60 shadow-[0_20px_60px_rgba(217,70,239,0.35)] ring-1 ring-fuchsia-400/20 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(217,70,239,0.55)]' 
                         : 'border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:shadow-xl'
                   }`}>
                      {/* Image */}
                      <img
                        src={item.src}
                        alt={`Gallery moment ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
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
          {carouselData.map((_, idx) => (
             <button
               key={idx}
               onClick={() => handleCardClick(idx)}
               className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === activeIndex 
                    ? 'w-10 bg-fuchsia-400 shadow-[0_0_12px_rgba(217,70,239,0.9)]' 
                    : 'w-2 sm:w-3 bg-white/20 hover:bg-white/40'
               }`}
               aria-label={`Go to slide ${idx + 1}`}
             />
          ))}
       </div>
    </div>
  );
}

export default StackedGalleryCarousel;
