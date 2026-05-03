import React, { useState, useEffect } from "react";

const carouselData = [
  { src: "/aws1.jpeg" },
  { src: "/aws2.jpeg" },
  { src: "/aws3.jpeg" },
  { src: "/aws4.jpeg" },
  { src: "/aws5.jpeg" },
  { src: "/aws6.jpeg" },
];

export default function CircularCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[450px] overflow-hidden rounded-xl border border-[var(--border)] bg-[#111]">
        {carouselData.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={`Gallery ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out"
            style={{ 
              opacity: index === activeIndex ? 0.8 : 0,
              transform: index === activeIndex ? 'scale(1)' : 'scale(1.05)',
              filter: 'grayscale(20%)'
            }}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      <div className="flex gap-2 mt-8">
        {carouselData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className="h-[3px] rounded-full transition-all duration-500 ease-out"
            style={{
              width: idx === activeIndex ? '24px' : '12px',
              background: idx === activeIndex ? 'var(--text)' : 'var(--border)'
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
