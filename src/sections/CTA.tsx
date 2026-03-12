import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC<any> = ({ onPrev }) => {
  return (
    <section id="cta" className="py-40 px-6 bg-white overflow-hidden relative">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0052FF]/5 skew-x-12 translate-x-1/4" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-9xl font-bold mb-12 text-[#0a0a0a] tracking-tighter leading-none">Execute <br/><span className="text-[#0052FF]">Now.</span></h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.button 
            whileHover={{ x: 10 }}
            className="group flex items-center gap-6 px-12 py-6 bg-[#0052FF] text-white rounded-full font-bold text-2xl shadow-2xl shadow-[#0052FF]/30"
          >
            Become a Partner
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-2 transition-transform">
              <path d="M5 12h14m0 0l-7-7m7 7l-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
          
          <div className="max-w-sm">
            <p className="text-[#555555] text-lg font-medium leading-relaxed">
              HashPay is actively seeking strategic partnerships for the 2026 SUI Mainnet rollout. 
              Secure your place in the future of parallel commerce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
