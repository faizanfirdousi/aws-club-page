import React, { useState, useEffect } from 'react';

const images = [
  "/aws1.jpeg",
  "/aws2.jpeg",
  "/aws3.jpeg",
  "/aws4.jpeg",
  "/aws5.jpeg",
  "/aws6.jpeg",
];

const carouselItems = [...images, ...images, ...images, ...images];

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

  const N = carouselItems.length;

  return (
    <>
      <style>
        {`
          @keyframes spin-orbit-reverse {
            0% { transform: translateX(-50%) rotate(0deg); }
            100% { transform: translateX(-50%) rotate(-360deg); }
          }
          .orbit-system:hover .orbit-wrapper, 
          .orbit-system:focus-within .orbit-wrapper {
            animation-play-state: paused;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(1deg); }
          }
          @keyframes shimmer-slide {
             0% { left: -150%; }
             100% { left: 150%; }
          }
          .polaroid-card {
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform-style: preserve-3d;
          }
          .polaroid-card:hover {
            transform: translateY(-30px) scale(1.08) rotate(-3deg);
            z-index: 50;
            box-shadow: 
              0 30px 60px rgba(0,0,0,0.6), 
              0 0 40px rgba(217,70,239,0.4), 
              0 0 80px rgba(139,92,246,0.3);
          }
          .polaroid-card:hover .polaroid-img {
            transform: scale(1.12);
          }
          .shimmer-effect {
            position: absolute;
            top: 0; bottom: 0; width: 60%;
            background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6), transparent);
            transform: skewX(-20deg);
            left: -150%;
            pointer-events: none;
            z-index: 30;
          }
          .polaroid-card:hover .shimmer-effect {
            animation: shimmer-slide 0.8s ease-out forwards;
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
            animation: 'spin-orbit-reverse 110s linear infinite'
          }}
        >
          {carouselItems.map((src, i) => {
            const angleDeg = (i / N) * 360;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 will-change-transform"
                style={{
                  width: size.width,
                  height: size.height,
                  marginTop: -(size.height / 2),
                  marginLeft: -(size.width / 2),
                  transform: `rotate(${angleDeg}deg) translateY(-${size.radius}px)`,
                }}
              >
                <div 
                  className="w-full h-full"
                  style={{ animation: `float ${3 + i % 3}s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }}
                >
                  <div className="polaroid-card w-full h-full relative shadow-[0_15px_50px_rgba(0,0,0,0.6)] cursor-pointer group bg-white rounded-md">
                    <div className="w-full h-full p-3 pb-12 sm:p-4 sm:pb-16 flex flex-col justify-start relative overflow-hidden rounded-md z-10 transition-colors duration-500 group-hover:bg-fuchsia-50/20">
                      <div className="w-full h-full relative overflow-hidden bg-zinc-900 shadow-inner z-10 rounded-sm">
                        <img 
                          src={src} 
                          alt={`Community moment ${i}`} 
                          className="polaroid-img w-full h-full object-cover transition-transform duration-700 ease-out"
                        />
                        <div className="shimmer-effect"></div>
                        {/* Dark gradient overlay at bottom of image to make it look deeper */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-2 z-20">
                         <span className="text-zinc-800 font-bold text-xs sm:text-sm tracking-tight truncate group-hover:text-fuchsia-700 transition-colors duration-300">
                           Community Moment #{i+1}
                         </span>
                         
                         <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out text-fuchsia-500">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 drop-shadow-md" viewBox="0 0 20 20" fill="currentColor">
                             <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                           </svg>
                         </div>
                      </div>
                      
                      {/* Decorative gradient overlay that becomes visible on hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/0 via-transparent to-violet-500/0 group-hover:from-fuchsia-500/10 group-hover:to-violet-500/10 transition-colors duration-500 z-0"></div>
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
