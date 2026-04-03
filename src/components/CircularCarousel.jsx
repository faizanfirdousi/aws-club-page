import React, { useState, useEffect } from 'react';

const images = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
];

const doubleImages = [...images, ...images];

const CircularCarousel = () => {
  const [size, setSize] = useState({ width: 360, height: 260, radius: 1500 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // mobile
        setSize({ width: 200, height: 140, radius: 820 });
      } else if (window.innerWidth < 1024) { // tablet
        setSize({ width: 280, height: 200, radius: 1150 });
      } else { // desktop
        setSize({ width: 360, height: 260, radius: 1500 });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const N = doubleImages.length;

  return (
    <>
      <style>
        {`
          @keyframes spin-orbit-reverse {
            0% { transform: translateX(-50%) rotate(0deg); }
            100% { transform: translateX(-50%) rotate(-360deg); }
          }
          .orbit-system:hover .orbit-wrapper {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden orbit-system rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
        <div 
          className="absolute left-1/2 orbit-wrapper"
          style={{
            top: `${size.radius + (size.height / 2) + 60}px`,
            transform: 'translateX(-50%)',
            transformOrigin: 'center center',
            animation: 'spin-orbit-reverse 150s linear infinite'
          }}
        >
          {doubleImages.map((src, i) => {
            const angleDeg = (i / N) * 360;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: size.width,
                  height: size.height,
                  marginTop: -(size.height / 2),
                  marginLeft: -(size.width / 2),
                  transform: `rotate(${angleDeg}deg) translateY(-${size.radius}px)`,
                }}
              >
                <div className="w-full h-full relative group shadow-[0_15px_50px_rgba(0,0,0,0.6)] hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                  <div className="w-full h-full bg-white p-3 pb-12 sm:p-4 sm:pb-16 flex flex-col justify-start">
                    <div className="w-full h-full relative overflow-hidden bg-gray-100">
                      <img 
                        src={src} 
                        alt={`Community moment ${i}`} 
                        className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.05]"
                      />
                    </div>
                    {/* Dummy text layout matching reference frame */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-1">
                       <span className="text-black font-bold text-xs sm:text-sm tracking-tight truncate">Community Moment #{i+1}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400/40 to-transparent pointer-events-none"></div>
      </div>
    </>
  );
};

export default CircularCarousel;
