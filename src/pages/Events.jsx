import SectionContainer from '../components/SectionContainer';
import EventCard from '../components/EventCard';

const events = [
  {
    id: 1,
    title: "Launch of AWS Cloud Club",
    date: "March 9, 2026",
    time: "3:45 PM - 4:45 PM",
    location: "Convention Center , Academic Block",
    description: "Join us as we break down the complexities of cloud technology, highlight the opportunities available through our club, and outline our vision for exciting journey ahead.",
    image: "https://secure.meetupstatic.com/photos/event/1/5/5/8/highres_533045464.webp?w=750",
    tags: ["Launch Event"],
    isUpcoming: true,
    registrationLink: "https://www.meetup.com/aws-i2it/events/313649260/?eventOrigin=group_events_list&utm_version=v2&member_id=451867731"
  },
];

export default function Events() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <section className="relative py-20 text-center">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 mt-4">
            Upcoming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300">
              Meetups
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto">
            Join us at our next event. Learn, build, and grow your cloud skillset alongside peers.
          </p>
        </div>
      </section>

      <SectionContainer className="flex-grow">
        <div className="max-w-4xl mx-auto space-y-8">
          {events.map((event) => (
             <EventCard key={event.id} event={event} />
          ))}

  
          <div className="relative flex flex-col md:flex-row rounded-2xl bg-white/[0.03] border border-fuchsia-500/20 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-fuchsia-400/40 transition-all duration-500 min-h-[220px]">
           
            <div className="absolute top-0 left-1/3 w-56 h-56 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse"></div>
            
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"></div>
        
            <div className="relative z-10 flex flex-col items-center justify-center w-full p-20 text-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fuchsia-400"></span>
                </span>
                <span className="text-fuchsia-300/90 text-xs font-semibold uppercase tracking-[0.2em]">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300 mb-2">
                New Event Loading...
              </h3>
              <p className="text-gray-400/70 text-sm md:text-base max-w-sm">
                Something exciting is being planned. Stay connected for updates!
              </p>
            </div>
          </div>

          
          <div className="relative flex flex-col md:flex-row rounded-2xl bg-white/[0.03] border border-violet-400/20 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-violet-300/40 transition-all duration-500 min-h-[220px]">
           
            <div className="absolute top-0 right-1/3 w-56 h-56 bg-violet-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse [animation-delay:0.3s]"></div>
           
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-300/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center w-full p-20 text-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-300"></span>
                </span>
                <span className="text-violet-300/90 text-xs font-semibold uppercase tracking-[0.2em]">
                  To Be Announced
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300 mb-2">
                More Events Brewing...
              </h3>
              <p className="text-gray-400/70 text-sm md:text-base max-w-sm">
                Our team is cooking up something amazing. Check back soon!
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
