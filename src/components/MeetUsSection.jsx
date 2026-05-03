import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import useMeasure from "react-use-measure";

import faizanImg   from "../assets/faizan.jpeg";
import nikhilImg   from "../assets/nikhil.jpeg";
import nehaImg     from "../assets/neha.jpeg";
import shravanImg  from "../assets/shravan.jpeg";
import vedantImg   from "../assets/vedant.jpeg";
import saumyaImg   from "../assets/saumya.jpeg";
import jayantImg   from "../assets/jayant.jpeg";

const teamMembers = [
  { name: "Faizan Firdousi",    role: "Club Lead",                image: faizanImg,  linkedin: "https://www.linkedin.com/in/faizanfirdousi/" },
  { name: "Jayant Shrivastava", role: "Vice President",           image: jayantImg,  linkedin: "https://www.linkedin.com/in/jayant-shrivastava-b347a2378/" },
  { name: "Vedant Jadhav",      role: "Operations Lead",          image: vedantImg,  linkedin: "https://www.linkedin.com/in/ferroflux/" },
  { name: "Nikhil Hire",        role: "Marketing & Outreach",     image: nikhilImg,  linkedin: "https://www.linkedin.com/in/nikhilhire/" },
  { name: "Neha Niphade",       role: "Content & Communications", image: nehaImg,    linkedin: "https://www.linkedin.com/in/neha-niphade-7974602b8/" },
  { name: "Shravan Lunawat",    role: "Technical Lead",           image: shravanImg, linkedin: "https://www.linkedin.com/in/shravan-lunawat-12a195336/" },
  { name: "Saumya Jha",         role: "Development Lead",         image: saumyaImg,  linkedin: "https://www.linkedin.com/in/jhasaumya/" },
];

const CARD_WIDTH = 240;
const GAP        = 24;
const DURATION   = 35;

function TeamCard({ member }) {
  return (
    <div
      className="card flex flex-col p-8 items-center text-center group shrink-0"
      style={{ width: CARD_WIDTH }}
    >
      <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border border-[var(--border)] bg-[#111]">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" 
          loading="lazy" 
          style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.9)', transition: 'filter 0.5s ease' }} 
          onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%) contrast(1.1) brightness(1)'}
          onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%) contrast(1.1) brightness(0.9)'}
        />
      </div>

      <h3 className="text-base font-semibold text-white mb-1.5 tracking-tight">{member.name}</h3>
      <p className="text-[11px] uppercase tracking-wider mb-6 text-[var(--text-3)] font-medium">{member.role}</p>

      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-semibold px-4 py-2 rounded-md transition-all duration-200 bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-2)] hover:text-white hover:bg-[var(--border)]"
      >
        LinkedIn ↗
      </a>
    </div>
  );
}

export default function MeetUsSection() {
  const [paused, setPaused] = useState(false);
  const [measureRef]        = useMeasure();
  const x                   = useMotionValue(0);
  const controlsRef         = useRef(null);
  const singleSetWidth      = teamMembers.length * (CARD_WIDTH + GAP);

  const startAnimation = useCallback(() => {
    controlsRef.current?.stop();
    const currentX = x.get();
    const progress = Math.abs(currentX / singleSetWidth) % 1;
    const remaining = 1 - progress;

    controlsRef.current = animate(x, [currentX, -singleSetWidth], {
      ease: "linear",
      duration: DURATION * remaining,
      onComplete: () => {
        x.set(0);
        controlsRef.current = animate(x, [0, -singleSetWidth], {
          ease: "linear",
          duration: DURATION,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        });
      },
    });
  }, [x, singleSetWidth]);

  useEffect(() => {
    if (!paused && singleSetWidth > 0) startAnimation();
    return () => controlsRef.current?.stop();
  }, [paused, startAnimation, singleSetWidth]);

  return (
    <section id="about" className="w-full py-24 md:py-32 flex flex-col items-center border-b border-[var(--border)] overflow-hidden bg-[var(--bg)]">
      <div className="max-w-5xl px-6 md:px-12 w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] mb-4">
            Meet the team.
          </h2>
          <p className="text-lg text-[var(--text-2)] max-w-xl leading-relaxed">
            A dedicated group of students building the AWS Cloud Club experience at I²IT.
          </p>
        </div>
      </div>

      {/* Infinite slider */}
      <div className="relative w-full max-w-[1400px]" ref={measureRef}>
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }} />

        <div
          className="overflow-hidden py-4 cursor-pointer"
          onMouseEnter={() => { controlsRef.current?.stop(); setPaused(true); }}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div className="flex w-max" style={{ x, gap: `${GAP}px` }}>
            {[...teamMembers, ...teamMembers, ...teamMembers].map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
