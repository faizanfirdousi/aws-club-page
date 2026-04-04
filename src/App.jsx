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
  date: "April 8, 2026",
  time: "3:45 PM - 4:45 PM",
  location: "PPCRC",
  description: "Join us as we teach how to deploy your website on the cloud.",
  image:
    "https://secure.meetupstatic.com/photos/event/1/5/5/8/highres_533045464.webp?w=750",
  tags: ["Deploy"],
  isUpcoming: true,
  registrationLink:
    "https://www.meetup.com/aws-i2it/events/313649260/?eventOrigin=group_events_list&utm_version=v2&member_id=451867731",
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

        {/* ═══════════════ CTA ═══════════════ */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-16 text-center border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-fuchsia-500 opacity-15 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 opacity-15 rounded-full blur-3xl"></div>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 relative z-10">
                Ready to start your cloud journey?
              </h2>
              <p className="text-base sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                Learn AWS step by step with peers, apply concepts in small
                projects, and grow into cloud, DevOps, and modern
                infrastructure.
              </p>
              <div className="relative z-10">
                <a
                  href="https://www.meetup.com/aws-cloud-club-at-i2it-pune/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black font-semibold py-4 px-10 rounded-full hover:bg-gray-200 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                >
                  Join the Community
                </a>
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
