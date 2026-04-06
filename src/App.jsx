import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventCard from "./components/EventCard";
import MeetUsSection from "./components/MeetUsSection";
import NoiseDarkGradient from "@/components/ui/noise-dark-blue-gradient-with-squares";
import ScrollFAQAccordion from "@/components/ui/scroll-faqaccordion";
import CircularCarousel from "./components/CircularCarousel";

const upcomingEvent = {
  id: 1,
  title:
    "Your Website, Live on the Internet : Hands-On Website Deployment with AWS",
  date: "April 7, 2026",
  time: "3:45 PM - 4:45 PM",
  location: "Room 302 PPCRC",
  description:
    "Learn how to deploy your project, make it accessible from anywhere, and give it a real presence on the internet.",
  image:
    "https://secure.meetupstatic.com/photos/event/7/b/4/b/highres_533551563.webp?w=750",
  tags: ["Deploy"],
  isUpcoming: true,
  registrationLink:
    "https://www.meetup.com/aws-i2it/events/314130521/?eventOrigin=group_upcoming_events",
};

const faqData = [
  {
    id: 1,
    question: "What is the AWS Community I2IT?",
    answer:
      "We are a student-led technical community focused on cloud computing, specifically Amazon Web Services. Our goal is to spread awareness, provide hands-on experience, and build a strong network of cloud enthusiasts at our college.",
  },
  {
    id: 2,
    question: "Do I need prior cloud experience to join?",
    answer:
      "No. Beginners are welcome. The club organizes beginner-friendly sessions that start from the basics of cloud computing and gradually move toward advanced topics.",
  },
  {
    id: 3,
    question: "How can I become a member?",
    answer:
      "You can officially register during our recruitment drives at the beginning of the semester. However, most of our general meetups, online discussions, and basic workshops are open to all students year-round.",
  },
  {
    id: 4,
    question: "How can this help my career?",
    answer:
      "Cloud computing is one of the most in-demand skills in the tech industry today. By joining, you'll gain practical experience, prepare for industry-recognized AWS Certifications, build resume-worthy projects, and network with professionals.",
  },
];

function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Full-page animated noise gradient with squares background */}
      <NoiseDarkGradient />

      {/* Main content layer */}
      <div className="relative z-10">
        <Navbar />

        {/* ═══════════════ HERO ═══════════════ */}
        <section
          id="hero"
          className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-5">
              <img
                src="/background_removed.png"
                alt="AWS Cloud Club I²IT logo"
                className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 object-contain drop-shadow-[0_0_26px_rgba(250,250,255,0.4)]"
                loading="lazy"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
              AWS Cloud Club I²IT
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
              A student-driven community at I²IT where you explore AWS, cloud,
              and modern infrastructure through hands-on workshops, projects,
              and peer learning.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="#why-join"
                className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
              >
                Discover Our Mission
              </a>
              <a
                href="#events"
                className="bg-white/5 backdrop-blur-md text-gray-300 font-semibold py-3 px-8 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/10 transition-colors duration-300"
              >
                Upcoming Events
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════ WHY JOIN US ═══════════════ */}
        <section id="why-join" className="py-14 sm:py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header — left-aligned, editorial feel */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4 mb-8 sm:mb-14">
              <div>
                <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                  Why us
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white">
                  More than just a club.
                </h2>
              </div>
              <p className="text-gray-400 max-w-sm text-base md:text-lg md:text-right">
                We&rsquo;re building the kind of community we wished existed
                when we started.
              </p>
            </div>

            {/* Bento grid — asymmetric layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {/* Card 1 — spans full width on top */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 hover:border-fuchsia-400/40 transition-all duration-500 p-6 sm:p-8 md:p-10">
                {/* Decorative glow */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-fuchsia-500/15 rounded-full blur-[100px] pointer-events-none group-hover:bg-fuchsia-500/25 transition-all duration-700"></div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 sm:gap-6">
                  <span className="text-5xl sm:text-6xl md:text-8xl font-black text-white/[0.35] select-none leading-none shrink-0">
                    01
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Learn by breaking things
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
                      Spin up real AWS infrastructure, deploy actual apps, and
                      figure out cloud by doing, not by watching slides. Every
                      session is a hands-on lab, not a lecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 — left half */}
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 hover:border-violet-400/40 transition-all duration-500 p-6 sm:p-8 md:p-10">
                <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-violet-600/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-violet-600/25 transition-all duration-700"></div>
                <div className="relative z-10">
                  <span className="text-5xl sm:text-6xl font-black text-white/[0.35] select-none leading-none block mb-3 sm:mb-4">
                    02
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Your people are here
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Late-night debugging sessions, shared wins on certification
                    day, and a group chat that actually helps. You&rsquo;ll find
                    peers, mentors, and future co-founders here.
                  </p>
                </div>
              </div>

              {/* Card 3 — right half */}
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 hover:border-purple-400/40 transition-all duration-500 p-6 sm:p-8 md:p-10">
                <div className="absolute -top-12 -right-12 w-44 h-44 bg-purple-600/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-purple-600/25 transition-all duration-700"></div>
                <div className="relative z-10">
                  <span className="text-5xl sm:text-6xl font-black text-white/[0.35] select-none leading-none block mb-3 sm:mb-4">
                    03
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Career stuff, sorted
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    AWS certifications, resume roasts, mock interviews, and
                    internship leads. We pool everything we find so nobody
                    figures it out alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ EVENTS ═══════════════ */}
        <section id="events" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Upcoming Events
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Join us at our next event. Learn, build, and grow your cloud
                skillset alongside peers.
              </p>
            </div>

            <EventCard event={upcomingEvent} />

            <div className="flex justify-center items-center gap-15">
              <div className="text-center mt-10">
                <a
                  href="https://www.meetup.com/aws-i2it/events/past/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/5 backdrop-blur-md text-gray-300 font-semibold py-3 px-8 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/10 transition-colors duration-300"
                >
                  See Past Events →
                </a>
              </div>
              <div className="text-center mt-10">
                <a
                  href="https://www.meetup.com/aws-i2it/events/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/5 backdrop-blur-md text-gray-300 font-semibold py-3 px-8 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/10 transition-colors duration-300"
                >
                  See All Events →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ MEET US ═══════════════ */}
        {<MeetUsSection />}

        {/* ═══════════════ GALLERY ═══════════════ */}
        <section id="gallery" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Community Moments
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-500">
                A visual timeline of our journey, events, and the amazing people
                who make up our community.
              </p>
            </div>

            {/* Dynamic Community Circular Carousel */}
            <CircularCarousel />
          </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <ScrollFAQAccordion data={faqData} />
        </section>

        {/* ═══════════════ SOCIALS & CTA ═══════════════ */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/3 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 md:p-12 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)] relative group transform-gpu transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Simplified Background Decorative Glows */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-100 h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 group-hover:opacity-40"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 group-hover:opacity-40"></div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                {/* Left side content (Text and Socials) */}
                <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
                  <p className="text-fuchsia-400 text-sm font-bold uppercase tracking-[0.2em] mb-3">
                    Connect & Join
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white text-balance">
                    Ready to start your cloud journey?
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl text-balance">
                    Learn AWS step by step with peers, apply concepts in your
                    projects, and grow into cloud, DevOps, and modern
                    infrastructure.
                  </p>

                  {/* Meetup Priority Join Button */}
                  <div className="relative z-10 w-full flex justify-center lg:justify-start mb-8">
                    <a
                      href="https://www.meetup.com/aws-cloud-club-at-i2it-pune/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#F64060] text-white font-bold py-4 px-8 rounded-full transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(246,64,96,0.2)] hover:shadow-[0_15px_35px_rgba(246,64,96,0.4)] transition-all duration-300"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fillRule="evenodd"
                          d="M99 414.3c1.1 5.7-2.3 11.1-8 12.3-5.4 1.1-10.9-2.3-12-8-1.1-5.4 2.3-11.1 7.7-12.3 5.4-1.2 11.1 2.3 12.3 8zm143.1 71.4c-6.3 4.6-8 13.4-3.7 20 4.6 6.6 13.4 8.3 20 3.7 6.3-4.6 8-13.4 3.4-20-4.2-6.5-13.1-8.3-19.7-3.7zm-86-462.3c6.3-1.4 10.3-7.7 8.9-14-1.1-6.6-7.4-10.6-13.7-9.1-6.3 1.4-10.3 7.7-9.1 14 1.4 6.6 7.6 10.6 13.9 9.1zM34.4 226.3c-10-6.9-23.7-4.3-30.6 6-6.9 10-4.3 24 5.7 30.9 10 7.1 23.7 4.6 30.6-5.7 6.9-10.4 4.3-24.1-5.7-31.2zm272-170.9c10.6-6.3 13.7-20 7.7-30.3-6.3-10.6-19.7-14-30-7.7s-13.7 20-7.4 30.6c6 10.3 19.4 13.7 29.7 7.4zm-191.1 58c7.7-5.4 9.4-16 4.3-23.7s-15.7-9.4-23.1-4.3c-7.7 5.4-9.4 16-4.3 23.7 5.1 7.8 15.6 9.5 23.1 4.3zm372.3 156c-7.4 1.7-12.3 9.1-10.6 16.9 1.4 7.4 8.9 12.3 16.3 10.6 7.4-1.4 12.3-8.9 10.6-16.6-1.5-7.4-8.9-12.3-16.3-10.9zm39.7-56.8c-1.1-5.7-6.6-9.1-12-8-5.7 1.1-9.1 6.9-8 12.6 1.1 5.4 6.6 9.1 12.3 8 5.4-1.5 9.1-6.9 7.7-12.6zM447 138.9c-8.6 6-10.6 17.7-4.9 26.3 5.7 8.6 17.4 10.6 26 4.9 8.3-6 10.3-17.7 4.6-26.3-5.7-8.7-17.4-10.9-25.7-4.9zm-6.3 139.4c26.3 43.1 15.1 100-26.3 129.1-17.4 12.3-37.1 17.7-56.9 17.1-12 47.1-69.4 64.6-105.1 32.6-1.1.9-2.6 1.7-3.7 2.9-39.1 27.1-92.3 17.4-119.4-22.3-9.7-14.3-14.6-30.6-15.1-46.9-65.4-10.9-90-94-41.1-139.7-28.3-46.9.6-107.4 53.4-114.9C151.6 70 234.1 38.6 290.1 82c67.4-22.3 136.3 29.4 130.9 101.1 41.1 12.6 52.8 66.9 19.7 95.2zm-70 74.3c-3.1-20.6-40.9-4.6-43.1-27.1-3.1-32 43.7-101.1 40-128-3.4-24-19.4-29.1-33.4-29.4-13.4-.3-16.9 2-21.4 4.6-2.9 1.7-6.6 4.9-11.7-.3-6.3-6-11.1-11.7-19.4-12.9-12.3-2-17.7 2-26.6 9.7-3.4 2.9-12 12.9-20 9.1-3.4-1.7-15.4-7.7-24-11.4-16.3-7.1-40 4.6-48.6 20-12.9 22.9-38 113.1-41.7 125.1-8.6 26.6 10.9 48.6 36.9 47.1 11.1-.6 18.3-4.6 25.4-17.4 4-7.4 41.7-107.7 44.6-112.6 2-3.4 8.9-8 14.6-5.1 5.7 3.1 6.9 9.4 6 15.1-1.1 9.7-28 70.9-28.9 77.7-3.4 22.9 26.9 26.6 38.6 4 3.7-7.1 45.7-92.6 49.4-98.3 4.3-6.3 7.4-8.3 11.7-8 3.1 0 8.3.9 7.1 10.9-1.4 9.4-35.1 72.3-38.9 87.7-4.6 20.6 6.6 41.4 24.9 50.6 11.4 5.7 62.5 15.7 58.5-11.1zm5.7 92.3c-10.3 7.4-12.9 22-5.7 32.6 7.1 10.6 21.4 13.1 32 6 10.6-7.4 13.1-22 6-32.6-7.4-10.6-21.7-13.5-32.3-6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="tracking-wide text-lg">
                        Join us on Meetup
                      </span>
                    </a>
                  </div>

                  {/* Secondary Socials */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <p className="text-gray-400 font-semibold tracking-widest uppercase text-xs sm:mr-2">
                      Also Connect On
                    </p>
                    <div className="flex items-center gap-4">
                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/company/awsi2it/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center h-12 w-12 bg-white/[0.05] border border-white/10 rounded-full hover:bg-[#0A66C2] hover:text-white transform hover:-translate-y-1 transition-all duration-300"
                        title="LinkedIn"
                      >
                        <svg
                          className="h-5 w-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>

                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/awsclub.i2it/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center h-12 w-12 bg-white/[0.05] border border-white/10 rounded-full hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transform hover:-translate-y-1 transition-all duration-300"
                        title="Instagram"
                      >
                        <svg
                          className="h-5 w-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right side: Meetup Banner Display */}
                <div
                  className="flex-1 w-full max-w-lg lg:max-w-none mx-auto flex justify-center lg:justify-end relative group/banner cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.meetup.com/aws-cloud-club-at-i2it-pune/",
                      "_blank",
                    )
                  }
                >
                  {/* Subtle glow behind image */}
                  <div className="absolute inset-0 bg-[#F64060]/10 blur-3xl rounded-2xl transition-opacity duration-700 group-hover/banner:opacity-40"></div>

                  {/* Banner Image Container */}
                  <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl transform transition-transform duration-500 ease-out group-hover/banner:scale-[1.02]">
                    <img
                      src="/meetup_banner.jpg"
                      alt="AWS Cloud Clubs Banner"
                      className="w-full h-auto max-h-[320px] object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://secure.meetupstatic.com/photos/event/1/5/5/8/highres_533045464.webp?w=750";
                      }}
                    />

                    {/* Simplified Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                    {/* Banner Overlay Info */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 opacity-0 transform translate-y-2 transition-all duration-300 group-hover/banner:opacity-100 group-hover/banner:translate-y-0 text-white">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </div>
                      <span className="text-sm font-semibold">
                        Join 150+ Cloud Enthusiasts
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
