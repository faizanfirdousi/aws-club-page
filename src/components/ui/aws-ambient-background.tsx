import React from 'react';

export default function AWSAmbientBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #040C18 0%, #060F1F 60%, #040C18 100%)' }}
    >
      {/* AWS Orange orb — top right */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-12%',
          width: '780px',
          height: '780px',
          background:
            'radial-gradient(circle at center, rgba(255,153,0,0.16) 0%, rgba(255,120,0,0.07) 40%, transparent 70%)',
          borderRadius: '50%',
          animation: 'floatOrb1 22s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      {/* Electric blue orb — bottom left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-18%',
          left: '-14%',
          width: '900px',
          height: '900px',
          background:
            'radial-gradient(circle at center, rgba(14,165,233,0.10) 0%, rgba(6,100,200,0.04) 45%, transparent 70%)',
          borderRadius: '50%',
          animation: 'floatOrb2 28s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle purple mid orb */}
      <div
        style={{
          position: 'absolute',
          top: '38%',
          left: '28%',
          width: '560px',
          height: '560px',
          background:
            'radial-gradient(circle at center, rgba(100,60,220,0.07) 0%, transparent 65%)',
          borderRadius: '50%',
          animation: 'floatOrb3 34s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle dot grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px',
          maskImage:
            'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top gradient line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,153,0,0.35) 40%, rgba(14,165,233,0.25) 70%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
