import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC<any> = () => {
  const painPoints = [
    { title: "Hybrid Friction", desc: "Traditional banking and crypto remain fundamentally incompatible for daily use." },
    { title: "Liquidity Gaps", desc: "Cross-border friction costs $120B+ annually in delayed settlements." },
    { title: "Access Barriers", desc: "Complexity prevents millions from accessing global financial corridors." }
  ];

  return (
    <section id="problem" className="py-32 px-6 bg-white border-y border-[#0052FF]/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#0a0a0a] tracking-tight">The Liquidity Paradox</h2>
          <p className="text-[#555555] max-w-2xl mx-auto text-lg leading-relaxed">
            Global finance is digital, yet cross-border friction costs $120B annually. 
            The barrier isn't the ledger—it's the abstraction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {painPoints.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-[#f3f3f3] border border-[#0052FF]/5 hover:border-[#0052FF]/20 transition-all shadow-sm"
            >
              <div className="w-16 h-16 bg-[#0052FF] rounded-2xl mb-8 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-[#0052FF]/20">
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0a0a0a] tracking-snug">{item.title}</h3>
              <p className="text-[#555555] leading-relaxed italic">"{item.desc}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
