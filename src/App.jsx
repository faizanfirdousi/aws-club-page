import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import EventCard from "./components/EventCard";
import MeetUsSection from "./components/MeetUsSection";
import NoiseDarkGradient from "@/components/ui/noise-dark-blue-gradient-with-squares";
import ScrollFAQAccordion from "@/components/ui/scroll-faqaccordion";

const latestEvent = {
  id: 1,
  title: "Launch of AWS Cloud Club",
  date: "March 9, 2026",
  time: "3:45 PM - 4:45 PM",
  location: "Convention Center, Academic Block",
  description:
    "Join us as we break down the complexities of cloud technology, highlight the opportunities available through our club, and outline our vision for an exciting journey ahead.",
  image:
    "https://secure.meetupstatic.com/photos/event/1/5/5/8/highres_533045464.webp?w=750",
  tags: ["Launch Event"],
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
        <section id="why-join" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Join Us?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Empowering students with industry-relevant cloud skills and a
                strong network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center group">
                <div className="w-16 h-16 mx-auto bg-white/[0.08] rounded-2xl flex items-center justify-center mb-6 text-fuchsia-300 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Hands-on Labs
                </h3>
                <p className="text-gray-400">
                  Get practical experience with real AWS services. Build
                  projects that matter and learn by doing.
                </p>
              </Card>

              <Card className="text-center group">
                <div className="w-16 h-16 mx-auto bg-white/[0.08] rounded-2xl flex items-center justify-center mb-6 text-fuchsia-300 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Networking
                </h3>
                <p className="text-gray-400">
                  Connect with like-minded students, industry experts, and AWS
                  professionals in our community.
                </p>
              </Card>

              <Card className="text-center group">
                <div className="w-16 h-16 mx-auto bg-white/[0.08] rounded-2xl flex items-center justify-center mb-6 text-fuchsia-300 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Career Growth
                </h3>
                <p className="text-gray-400">
                  Prepare for AWS certifications, get resume reviews, and
                  discover internship opportunities.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* ═══════════════ EVENTS ═══════════════ */}
        <section id="events" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upcoming Events
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Join us at our next event. Learn, build, and grow your cloud
                skillset alongside peers.
              </p>
            </div>

            <EventCard event={latestEvent} />

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
        </section>

        {/* ═══════════════ MEET US ═══════════════ */}
        <MeetUsSection />

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

            {/* Coming Soon Banner */}
            <div className="relative flex items-center justify-center w-full h-[280px] sm:h-[400px] md:h-[500px] rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-white/20 transition-all duration-500">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"></div>

              <div className="relative text-center p-8 z-10">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-fuchsia-400"></span>
                  </span>
                  <span className="text-fuchsia-300/90 text-sm font-semibold uppercase tracking-[0.2em]">
                    Under Construction
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-widest uppercase mb-4 text-white">
                  Coming Soon
                </h3>
                <p className="text-gray-400/80 text-lg max-w-md mx-auto">
                  We are curating our best moments. Stay tuned!
                </p>
              </div>
            </div>
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
