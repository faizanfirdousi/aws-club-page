import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const images = [
  { src: "/aws1.jpeg", title: "AWS Cloud Bootcamp", date: "Jan 12, 2026" },
  { src: "/aws2.jpeg", title: "Community Meetup", date: "Feb 05, 2026" },
  { src: "/aws3.jpeg", title: "Study Jam", date: "Mar 10, 2026" },
  { src: "/aws4.jpeg", title: "Guest Speaker", date: "Mar 22, 2026" },
  { src: "/aws5.jpeg", title: "Hackathon Prep", date: "Apr 02, 2026" },
  { src: "/aws6.jpeg", title: "Project Showcase", date: "Apr 15, 2026" },
];

export default function SwiperGallery() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        speed={800}
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
            type: 'progressbar',
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="gallery-swiper py-12"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="gallery-slide">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group border border-white/10">
              <img 
                src={item.src} 
                className="block w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                alt={item.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Global overrides for Swiper styling */}
      <style>{`
        .gallery-swiper {
          padding-top: 2rem;
          padding-bottom: 4rem; /* Room for pagination */
          perspective: 1500px;
        }

        .gallery-slide {
          width: 320px;
          height: 420px;
          filter: grayscale(40%) brightness(0.6);
          transition: filter 0.5s ease;
        }

        .swiper-slide-active {
          filter: grayscale(0%) brightness(1);
        }

        @media (min-width: 640px) {
          .gallery-slide {
            width: 400px;
            height: 500px;
          }
        }
        @media (min-width: 1024px) {
          .gallery-slide {
            width: 650px;
            height: 450px;
          }
        }

        /* Customize Pagination - Sleek Progress Bar Aesthetic */
        .swiper-pagination-progressbar {
          top: auto !important;
          bottom: 10px !important;
          background: rgba(255, 255, 255, 0.08) !important;
          height: 4px !important;
          border-radius: 10px;
          width: 50% !important;
          left: 25% !important;
          overflow: hidden;
        }
        .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
          background: linear-gradient(90deg, #d946ef, #8b5cf6, #d946ef) !important;
          background-size: 200% 100%;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(217, 70, 239, 0.8);
          animation: bar-glow 3s linear infinite;
        }
        @keyframes bar-glow {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
    </div>
  );
}
