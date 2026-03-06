import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300">
              AWS Cloud Club I²IT
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
            A student-driven community at I²IT where you explore AWS, cloud, and modern infrastructure through hands-on workshops, projects, and peer learning.
          </p>
          <div className="flex justify-center gap-4">
            <NavLink
              to="/about"
              className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 text-white font-bold py-3 px-8 rounded-full hover:brightness-110 transition-transform duration-300 hover:-translate-y-1 shadow-lg shadow-fuchsia-500/40"
            >
              Discover Our Mission
            </NavLink>
            <NavLink
              to="/events"
              className="bg-white/5 backdrop-blur-md text-gray-100 font-bold py-3 px-8 rounded-full border border-white/15 hover:border-fuchsia-300/70 hover:bg-white/10 transition-colors duration-300"
            >
              Upcoming Meetups
            </NavLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <SectionContainer>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Us?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Empowering students with industry-relevant cloud skills and a strong network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center group">
            <div className="w-16 h-16 mx-auto bg-white/[0.08] rounded-2xl flex items-center justify-center mb-6 text-fuchsia-300 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Hands-on Labs</h3>
            <p className="text-gray-400">
              Get practical experience with real AWS services. Build projects that matter and learn by doing.
            </p>
          </Card>

          <Card className="text-center group">
            <div className="w-16 h-16 mx-auto bg-white/[0.08] rounded-2xl flex items-center justify-center mb-6 text-fuchsia-300 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Networking</h3>
            <p className="text-gray-400">
              Connect with like-minded students, industry experts, and AWS professionals in our community.
            </p>
          </Card>

          <Card className="text-center group">
            <div className="w-16 h-16 mx-auto bg-white/[0.08] rounded-2xl flex items-center justify-center mb-6 text-fuchsia-300 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Career Growth</h3>
            <p className="text-gray-400">
              Prepare for AWS certifications, get resume reviews, and discover internship opportunities in cloud computing.
            </p>
          </Card>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer>
        <div className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-10 md:p-16 text-center border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-fuchsia-500 opacity-15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 opacity-15 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to start your cloud journey?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
            Learn AWS step by step with peers, apply concepts in small projects, and grow into cloud, DevOps, and modern infrastructure with a supportive community.
          </p>
          <div className="relative z-10">
             <a href="#" className="inline-block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 text-white font-bold py-4 px-10 rounded-full hover:brightness-110 transition-transform duration-300 hover:-translate-y-1 shadow-lg shadow-fuchsia-500/40">
               Join the Community
             </a>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
