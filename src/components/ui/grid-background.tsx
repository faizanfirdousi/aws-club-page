import React from 'react';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
      {/* Base Dark Background */}
      <div className="absolute inset-0 bg-[#000000]" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)',
        }}
      />
      
      {/* Extremely subtle ambient glow in the center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF9900] opacity-[0.03] blur-[120px] rounded-full" />
    </div>
  );
}
