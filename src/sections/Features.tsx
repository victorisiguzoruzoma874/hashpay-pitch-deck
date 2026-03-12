import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC<any> = () => {
  const features = [
    { title: "Voice Liquidity", desc: "Interact with the blockchain using Gemini-powered natural language. 'Send $50 for coffee'—done." },
    { title: "Smart Vaults", desc: "Institutional-grade multi-sig security optimized for regular users. Native SUI object security." },
    { title: "Offline Orbit", desc: "Digital cash that works when the internet doesn't. Bluetooth-le powered local settlement." },
    { title: "Universal Mesh", desc: "Bridging SUI liquidity to any merchant POS system in 2ms via parallelized abstraction." }
  ];

  return (
    <section id="features" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-[#f3f3f3] border border-[#0052FF]/5 hover:border-[#0052FF]/30 transition-all flex flex-col justify-between group h-full"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-[#0052FF] mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-[#0052FF]/20" />
                <h3 className="text-xl font-bold mb-4 text-[#0a0a0a] tracking-tight">{feature.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{feature.desc}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#0052FF]/5 text-[#0052FF] font-mono text-[10px] uppercase tracking-widest">
                System OK // v1.0.4
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
