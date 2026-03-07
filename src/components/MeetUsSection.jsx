import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import useMeasure from "react-use-measure";

import faizanImg from "../assets/faizan.jpeg";
import nikhilImg from "../assets/nikhil.jpeg";
import nehaImg from "../assets/neha.jpeg";
import shravanImg from "../assets/shravan.jpeg";
import vedantImg from "../assets/vedant.jpeg";
import saumyaImg from "../assets/saumya.jpeg";
import jayantImg from "../assets/jayant.jpeg";

import { Linkedin, ChevronLeft, ChevronRight, Play } from "lucide-react";

const teamMembers = [
  {
    name: "Faizan Firdousi",
    role: "Club Lead",
    image: faizanImg,
    linkedin: "https://www.linkedin.com/in/faizanfirdousi/",
  },
  {
    name: "Jayant Shrivastava",
    role: "Vice President",
    image: jayantImg,
    linkedin: "https://www.linkedin.com/in/jayant-shrivastava-b347a2378/",
  },
  {
    name: "Vedant Jadhav",
    role: "Operations Lead",
    image: vedantImg,
    linkedin: "https://www.linkedin.com/in/ferroflux/",
  },
  {
    name: "Nikhil Hire",
    role: "Marketing & Outreach",
    image: nikhilImg,
    linkedin: "https://www.linkedin.com/in/nikhilhire/",
  },
  {
    name: "Neha Niphade",
    role: "Content & Communications",
    image: nehaImg,
    linkedin: "https://www.linkedin.com/in/neha-niphade-7974602b8/",
  },
  {
    name: "Shravan Lunawat",
    role: "Technical Lead",
    image: shravanImg,
    linkedin: "https://www.linkedin.com/in/shravan-lunawat-12a195336/",
  },
  {
    name: "Saumya Jha",
    role: "Development Lead",
    image: saumyaImg,
    linkedin: "https://www.linkedin.com/in/jhasaumya/",
  },
];

const CARD_WIDTH = 260; // px, matches max-w-[260px]
const GAP = 24; // px gap between cards
const DURATION = 20; // seconds for one full loop

function TeamCard({ member }) {
  return (
    <div
      className="group bg-white/[0.05] backdrop-blur-xl rounded-2xl py-10 px-8 border border-white/10 hover:border-fuchsia-400/50 transition-all duration-300 h-full flex flex-col items-center text-center"
      style={{ width: CARD_WIDTH, minWidth: CARD_WIDTH }}
    >
      <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-fuchsia-400/50 transition-colors duration-300 mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white leading-tight">
          {member.name}
        </h3>
        <p className="text-sm text-fuchsia-300/80 mt-1 mb-3">{member.role}</p>
        <div className="flex justify-center gap-2">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-fuchsia-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function MeetUsSection() {
  const [paused, setPaused] = useState(false);
  const [measureRef, { width: containerWidth }] = useMeasure();
  const x = useMotionValue(0);
  const controlsRef = useRef(null);

  // Total width of one set of cards
  const singleSetWidth = teamMembers.length * (CARD_WIDTH + GAP);

  // Start / restart the infinite scroll animation
  const startAnimation = useCallback(() => {
    controlsRef.current?.stop();

    const currentX = x.get();
    // How far through the loop are we (0..1)?
    const progress = Math.abs(currentX / singleSetWidth) % 1;
    const remaining = 1 - progress;

    controlsRef.current = animate(
      x,
      [currentX, -singleSetWidth],
      {
        ease: "linear",
        duration: DURATION * remaining,
        onComplete: () => {
          x.set(0);
          // restart from the beginning
          controlsRef.current = animate(x, [0, -singleSetWidth], {
            ease: "linear",
            duration: DURATION,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          });
        },
      }
    );
  }, [x, singleSetWidth]);

  // Start animation on mount and when unpaused
  useEffect(() => {
    if (!paused && singleSetWidth > 0) {
      startAnimation();
    }
    return () => controlsRef.current?.stop();
  }, [paused, startAnimation, singleSetWidth]);

  const handlePause = (e) => {
    // Don't pause when clicking LinkedIn links
    if (e.target.closest("a")) return;
    if (!paused) {
      controlsRef.current?.stop();
      setPaused(true);
    }
  };

  const handleResume = () => {
    setPaused(false);
  };

  const scrollByCard = (dir) => {
    const currentX = x.get();
    const step = (CARD_WIDTH + GAP) * dir;
    let targetX = currentX + step;
    // Wrap around
    if (targetX > 0) targetX = -(singleSetWidth - (CARD_WIDTH + GAP));
    if (targetX < -singleSetWidth) targetX = 0;

    controlsRef.current?.stop();
    controlsRef.current = animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            The core team driving the AWS Cloud Club at I²IT.
          </p>
        </div>

        {/* Slider container */}
        <div className="relative" ref={measureRef}>
          {/* Clickable slider area */}
          <div
            className="overflow-hidden cursor-pointer"
            onClick={handlePause}
          >
            <motion.div
              className="flex"
              style={{ x, gap: `${GAP}px` }}
            >
              {/* Render cards twice for seamless loop */}
              {teamMembers.map((member, i) => (
                <TeamCard key={`a-${i}`} member={member} />
              ))}
              {teamMembers.map((member, i) => (
                <TeamCard key={`b-${i}`} member={member} />
              ))}
            </motion.div>
          </div>

          {/* Controls: shown when paused */}
          {paused && (
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => scrollByCard(1)}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-200"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleResume}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-200"
                aria-label="Resume autoplay"
              >
                <Play size={16} />
              </button>

              <button
                onClick={() => scrollByCard(-1)}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-200"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
