import faizanImg from "../assets/faizan.jpeg";
import nikhilImg from "../assets/nikhil.jpeg";
import nehaImg from "../assets/neha.jpeg";
import shravanImg from "../assets/shravan.jpeg";
import vedantImg from "../assets/vedant.jpeg";
import saumyaImg from "../assets/saumya.jpeg";
import jayantImg from "../assets/jayant.jpeg";

import { Linkedin } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    linkedin: "https://www.linkedin.com/in/nikhilhire/"
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

export default function MeetUsSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300">
              Us
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The core team driving the AWS Cloud Club at I²IT.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto px-10 sm:px-14"
        >
          <CarouselContent className="-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full"
              >
                <div className="group bg-white/[0.05] backdrop-blur-xl rounded-2xl py-10 px-8 border border-white/10 hover:border-fuchsia-400/50 transition-all duration-300 h-full flex flex-col items-center text-center max-w-[260px] mx-auto">
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
                      >
                        <Linkedin size={20} />
                      </a>
                      
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2 sm:-left-4 bg-white/20 border-white/20 text-white hover:bg-fuchsia-500/30 hover:border-fuchsia-400/50 hover:text-white w-9 h-9 sm:w-10 sm:h-10" />
          <CarouselNext className="-right-2 sm:-right-4 bg-white/20 border-white/20 text-white hover:bg-fuchsia-500/30 hover:border-fuchsia-400/50 hover:text-white w-9 h-9 sm:w-10 sm:h-10" />
        </Carousel>
      </div>
    </section>
  );
}
