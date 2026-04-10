import React from 'react';
import { motion } from 'framer-motion';

interface SlideProps {
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const Hero: React.FC<SlideProps> = ({ onNext, onPrev, isFirst, isLast }) => {
  const scrollToSummary = () => {
    document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="hero" className="h-screen max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px] h-full flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10 max-w-4xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0052FF]/10 text-[#0052FF] text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-[#0052FF]/20">
          World's First Hybrid Payment Fintech
        </span>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-[#0a0a0a]">
          Hash<span className="text-[#0052FF]">Pay</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#555555] mb-12 max-w-2xl mx-auto leading-relaxed">
          The unified ecosystem bridging traditional banking with Web3. 
          Instant global settlement for the next billion users.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="cursor-pointer px-10 py-4 bg-[#0052FF] text-white rounded-full font-bold text-lg shadow-xl shadow-[#0052FF]/30 transition-shadow hover:shadow-[#0052FF]/50"
          >
            Explore Vision
          </motion.button>
          <a
            href="/HashPay_Whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-[#0a0a0a] font-bold text-lg border-b-2 border-transparent hover:border-[#0052FF] transition-all py-2"
          >
            Read Whitepaper
          </a>
        </div>
      </motion.div>

      {/* Subtle ASCII-like Texture element */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none font-mono text-[10px] overflow-hidden leading-tight whitespace-pre">
        {Array(50).fill("H A S H P A Y * $ * S U I * N E T W O R K * A I * V O I C E * A S S I S T A N T * S M A R T * E S C R O W * ").join("\n")}
      </div>
    </section>
  );
};

export default Hero;
