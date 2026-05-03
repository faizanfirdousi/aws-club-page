import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventsSection from "./components/EventCard";
import MeetUsSection from "./components/MeetUsSection";
import ScrollFAQAccordion from "@/components/ui/scroll-faqaccordion";
import CircularCarousel from "./components/CircularCarousel";
import GridBackground from "@/components/ui/grid-background";
import NumberTicker from "@/components/ui/number-ticker";
import TerminalMockup from "@/components/ui/terminal-mockup";
import { motion } from "framer-motion";

/* ─── Data ─────────────────────────────────────────────────────────────── */
const upcomingEvents = [];

const pastEvents = [
  {
    id: 1,
    title: "Your Website, Live on the Internet: Hands-On Website Deployment with AWS",
    date: "April 7, 2026",
    time: "3:45 PM – 4:45 PM",
    location: "Room 302 PPCRC",
    description: "Learn how to deploy your project, make it accessible from anywhere, and give it a real presence on the internet.",
    image: "https://secure.meetupstatic.com/photos/event/7/b/4/b/highres_533551563.webp?w=750",
    tags: ["Deploy", "AWS"],
    registrationLink: "https://www.meetup.com/aws-i2it/events/314130521/?eventOrigin=group_upcoming_events",
  },
  {
    id: 2,
    title: "Launch of AWS Cloud Club I²IT: Introduction to Cloud Computing & AWS",
    date: "March 9, 2026",
    time: "3:45 PM – 4:45 PM",
    location: "CC",
    description: "Join us as we break down cloud technology, highlight club opportunities, and outline our vision for the journey ahead.",
    image: "https://secure.meetupstatic.com/photos/event/1/5/5/8/highres_533045464.webp?w=750",
    tags: ["Launch", "Cloud"],
    isUpcoming: false,
    registrationLink: "https://www.meetup.com/aws-i2it/events/313649260/",
  },
];

const faqData = [
  { id: 1, question: "What is the AWS Community I2IT?", answer: "We are a student-led technical community focused on cloud computing, specifically Amazon Web Services. Our goal is to spread awareness, provide hands-on experience, and build a strong network of cloud enthusiasts at our college." },
  { id: 2, question: "Do I need prior cloud experience to join?", answer: "No. Beginners are welcome. The club organises beginner-friendly sessions that start from the basics and gradually move toward advanced topics." },
  { id: 3, question: "How can I become a member?", answer: "You can officially register during our recruitment drives at the beginning of the semester. Most general meetups and basic workshops are open to all students year-round." },
  { id: 4, question: "How can this help my career?", answer: "Cloud computing is one of the most in-demand skills in tech today. By joining, you'll gain practical experience, prepare for AWS Certifications, build resume-worthy projects, and network with professionals." },
];

const technologies = [
  "Amazon Web Services", "Docker", "Kubernetes", "Linux", "Terraform", "Serverless", "CI/CD", "Next.js", "Python", "Node.js"
];

/* ─── App ───────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="relative min-h-screen text-white bg-black font-sans selection:bg-[#FF9900]/20 selection:text-[#FF9900]">
      <GridBackground />
      <Navbar />

      <main className="relative z-10 flex flex-col items-center">
        {/* ═══════════ HERO ═══════════ */}
        <section id="hero" className="w-full pt-32 pb-16 md:pt-48 md:pb-24 flex justify-center border-b border-[var(--border)] overflow-hidden">
          <div className="max-w-6xl px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <div className="flex flex-col items-start z-10">
              <p className="label mb-6 fade-up" style={{ animationDelay: '0ms' }}>AWS Cloud Club · I²IT Pune</p>
              
              <h1 className="text-5xl sm:text-6xl md:text-[72px] font-bold tracking-[-0.03em] leading-[1.05] mb-8 text-gradient fade-up" style={{ animationDelay: '100ms' }}>
                Build on the cloud.
                <br />
                Define the future.
              </h1>

              <p className="max-w-xl text-lg text-[var(--text-2)] leading-relaxed mb-10 font-normal fade-up" style={{ animationDelay: '200ms' }}>
                A student-driven engineering community at I²IT. Explore AWS infrastructure 
                through hands-on workshops, build real systems, and learn alongside peers.
              </p>

              <div className="flex flex-wrap items-center gap-4 fade-up" style={{ animationDelay: '300ms' }}>
                <a
                  href="https://www.meetup.com/aws-cloud-club-at-i2it-pune/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  Join the Community
                </a>
                <a
                  href="#events"
                  onClick={e => { e.preventDefault(); document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="btn-ghost"
                >
                  Explore Events
                </a>
              </div>
            </div>

            {/* Terminal Graphic */}
            <div className="w-full flex justify-end z-10">
              <TerminalMockup />
            </div>

            <div className="col-span-1 lg:col-span-2 flex flex-wrap gap-12 mt-16 lg:mt-24 pt-10 border-t border-[var(--border)] w-full fade-up" style={{ animationDelay: '400ms' }}>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tight">
                  <NumberTicker value={150} />+
                </span>
                <span className="text-sm text-[var(--text-3)] mt-1 font-medium tracking-wide uppercase">Engineers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tight">
                  <NumberTicker value={2} />
                </span>
                <span className="text-sm text-[var(--text-3)] mt-1 font-medium tracking-wide uppercase">Active Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tight">
                  <NumberTicker value={2026} />
                </span>
                <span className="text-sm text-[var(--text-3)] mt-1 font-medium tracking-wide uppercase">Established</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ TECH STACK MARQUEE ═══════════ */}
        <div className="w-full border-b border-[var(--border)] bg-[#0A0A0A] overflow-hidden py-4 flex items-center">
          <motion.div 
            className="flex w-max whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...technologies, ...technologies, ...technologies].map((tech, i) => (
              <div key={i} className="flex items-center gap-8 px-4 text-sm font-medium text-[var(--text-3)] tracking-widest uppercase">
                {tech}
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--border)]"></span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ═══════════ WHY JOIN (BENTO GRID) ═══════════ */}
        <section id="why-join" className="w-full py-24 md:py-32 flex justify-center border-b border-[var(--border)] bg-[#050505]">
          <div className="max-w-5xl px-6 md:px-12 w-full">
            <div className="mb-16 max-w-2xl">
              <p className="label mb-4">The Community</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-6 leading-tight">
                More than just a club. We're building an engineering culture.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
              {/* Box 1 (Large) */}
              <div className="card col-span-1 md:col-span-2 row-span-1 p-8 flex flex-col justify-end group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF9900]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center mb-6 text-[var(--accent)] group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Learn by shipping.</h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed">Spin up real AWS infrastructure, deploy applications, and figure out cloud through hands-on labs instead of slides.</p>
                </div>
              </div>

              {/* Box 2 (Tall) */}
              <div className="card col-span-1 md:col-span-2 row-span-1 md:row-span-2 p-8 flex flex-col justify-end group overflow-hidden relative" style={{ backgroundImage: 'radial-gradient(circle at top right, rgba(255,255,255,0.03), transparent)' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0 opacity-80" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Find your team.</h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed">Late-night debugging, shared certification wins, and a group chat that actually helps. Finding peers and mentors in one place is the biggest advantage you can have in college.</p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="card col-span-1 md:col-span-2 row-span-1 p-8 flex flex-col justify-end group overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Accelerate career.</h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed">AWS certifications, system design reviews, mock interviews, and internship leads. We pool knowledge so nobody learns alone.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ EVENTS ═══════════ */}
        <EventsSection upcomingEvents={upcomingEvents} pastEvents={pastEvents} />

        {/* ═══════════ TEAM ═══════════ */}
        <MeetUsSection />

        {/* ═══════════ GALLERY ═══════════ */}
        <section id="gallery" className="w-full py-24 md:py-32 flex justify-center border-b border-[var(--border)] bg-[#050505]">
          <div className="max-w-5xl px-6 md:px-12 w-full">
            <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] mb-4">
                  The journey so far.
                </h2>
                <p className="text-lg text-[var(--text-2)] max-w-xl leading-relaxed">
                  A visual archive of our events, workshops, and the people behind them.
                </p>
              </div>
            </div>
            <CircularCarousel />
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" className="w-full py-24 md:py-32 flex justify-center border-b border-[var(--border)] bg-[#050505]">
          <div className="max-w-5xl px-6 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5 flex flex-col items-start">
                <p className="label mb-4">Support</p>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-6 leading-tight">
                  Frequently asked questions.
                </h2>
                <p className="text-lg text-[var(--text-2)] leading-relaxed mb-8">
                  Everything you need to know about joining the community, our events, and how we operate.
                </p>
                <div className="hidden lg:flex w-12 h-12 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] items-center justify-center text-[var(--text-3)] shadow-inner">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
              </div>
              <div className="lg:col-span-7 pt-2">
                <ScrollFAQAccordion data={faqData} />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="w-full py-24 md:py-40 flex justify-center bg-black">
          <div className="max-w-5xl px-6 md:px-12 w-full">
            <div className="relative w-full rounded-3xl overflow-hidden border border-[var(--border)] bg-[#0A0A0A] p-12 md:p-20 text-center flex flex-col items-center justify-center">
              {/* Background Glows */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-[var(--accent)]/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[50%] h-[150px] bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-[-0.03em] mb-6 leading-[1.1] text-gradient">
                  Ready to start your cloud journey?
                </h2>
                <p className="text-lg md:text-xl text-[var(--text-2)] leading-relaxed mb-10 max-w-xl">
                  Join a network of student engineers. Learn AWS, apply concepts in real projects, and grow into modern infrastructure engineering.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="https://www.meetup.com/aws-cloud-club-at-i2it-pune/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent px-8 py-4 text-base shadow-[0_0_30px_rgba(255,153,0,0.2)]"
                  >
                    Join on Meetup
                  </a>
                  <a
                    href="https://www.linkedin.com/company/awsi2it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost px-8 py-4 text-base"
                  >
                    Follow LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
