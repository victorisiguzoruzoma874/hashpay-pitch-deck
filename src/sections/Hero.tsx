import React from 'react';
import { motion } from 'framer-motion';

interface SlideProps {
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const Hero: React.FC<SlideProps> = () => {
  const scrollToSummary = () => {
    document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)] transform rotate-12">
          <span className="text-4xl font-bold text-white -rotate-12">H</span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
      >
        Hash<span className="text-cyan-400">Pay</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl font-light"
      >
        The Next Generation of Global Payments on SUI.
        Fast. Secure. AI-Powered.
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={scrollToSummary}
        className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          Explore the Pitch
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="group-hover:translate-y-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </span>
      </motion.button>
    </div>
  );
};

export default Hero;
