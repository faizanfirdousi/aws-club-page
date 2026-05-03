import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const lines = [
  { text: "aws cloudformation deploy \\", delay: 800, isCommand: true },
  { text: "  --template-file template.yml \\", delay: 100, isCommand: true },
  { text: "  --stack-name production-env \\", delay: 100, isCommand: true },
  { text: "  --capabilities CAPABILITY_IAM", delay: 100, isCommand: true },
  { text: "", delay: 500 },
  { text: "Waiting for changeset to be created..", delay: 800, color: "text-gray-400" },
  { text: "Waiting for stack create/update to complete", delay: 1200, color: "text-gray-400" },
  { text: "Successfully created/updated stack - production-env", delay: 500, color: "text-emerald-400" },
];

export default function TerminalMockup() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < lines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, lines[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, lines[currentIndex].delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full max-w-2xl rounded-xl overflow-hidden border border-[var(--border)] shadow-2xl relative group"
      style={{ background: '#080808' }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
        style={{ background: 'radial-gradient(circle at center, rgba(255,153,0,0.08) 0%, transparent 70%)' }} />

      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 border-b border-[var(--border)] bg-[#0C0C0C]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
        <div className="flex-1 text-center text-xs font-mono text-[var(--text-3)] flex items-center justify-center gap-2">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          ubuntu@aws-club-i2it: ~
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed min-h-[220px]">
        {displayedLines.map((line, index) => (
          <div key={index} className="flex mb-1">
            {line.isCommand && <span className="text-[var(--accent)] mr-3 shrink-0">$</span>}
            <span className={line.color || "text-[var(--text-main)]"}>{line.text}</span>
          </div>
        ))}
        {currentIndex < lines.length && (
          <div className="flex items-center h-5">
            {lines[currentIndex].isCommand && <span className="text-[var(--accent)] mr-3">$</span>}
            <span className="w-2 h-4 bg-white/70 animate-pulse"></span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
