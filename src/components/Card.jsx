export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white/[0.05] backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-lg border border-white/10 hover:border-fuchsia-400/50 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
