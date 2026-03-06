import SectionContainer from '../components/SectionContainer';

export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <SectionContainer>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Community{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300">
              Moments
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            A visual timeline of our journey, events, and the amazing people who make up the AWS Community at I2IT.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="relative flex items-center justify-center w-full h-[500px] md:h-[600px] rounded-3xl bg-white/[0.03] border border-fuchsia-500/20 backdrop-blur-xl mt-4 shadow-2xl overflow-hidden group hover:border-fuchsia-400/40 transition-all duration-500">
          {/* Subtle glow accents */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse [animation-delay:1s]"></div>

          {/* Accent lines */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"></div>

          <div className="relative text-center p-8 z-10">
            {/* Pulsing dot */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-fuchsia-400"></span>
              </span>
              <span className="text-fuchsia-300/90 text-sm font-semibold uppercase tracking-[0.2em]">
                Under Construction
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300 drop-shadow-lg">
              Coming Soon
            </h2>
            <p className="text-gray-400/80 text-lg md:text-xl max-w-md mx-auto">
              We are curating our best moments. Stay tuned!
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
