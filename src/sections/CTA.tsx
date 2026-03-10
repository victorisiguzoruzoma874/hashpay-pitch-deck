import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC<any> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl"
      >
        <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 block font-bold">THE FUTURE IS HERE</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
          Invest in the <br />
          <span className="text-gradient">Universal Payment Layer.</span>
        </h2>
        
        <p className="text-xl text-white/50 mb-12 max-w-xl mx-auto">
          Join us in redefining global finance. HashPay is currently in private beta and seeking strategic partners.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-10 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300">
            Request Access
          </button>
          <button className="px-10 py-4 glass-card border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300">
            Watch Demo
          </button>
        </div>

        <div className="mt-20 flex justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <div className="text-xl font-black uppercase tracking-tighter">SUI Foundation</div>
           <div className="text-xl font-black uppercase tracking-tighter">Gemini AI</div>
           <div className="text-xl font-black uppercase tracking-tighter">Mysten Labs</div>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
