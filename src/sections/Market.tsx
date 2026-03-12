import React from 'react';
import { motion } from 'framer-motion';

const Market: React.FC<any> = () => {
  const stats = [
    { label: 'Global Remittances', value: '$800B+', sub: 'Total Addressable Market' },
    { label: 'DeFi Adoption', value: '45%', sub: 'CAGR (2024-2030)' },
    { label: 'SUI User Growth', value: '1.2M+', sub: 'Monthly Active Wallets' }
  ];

  return (
    <section id="market" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold mb-6 text-[#0a0a0a] tracking-tight">Market Opportunity</h2>
          <p className="text-[#555555] max-w-xl mx-auto text-lg leading-relaxed">
            The intersection of high-performance blockchain and AI intent processing is the next frontier of global finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 rounded-[2.5rem] bg-[#f3f3f3] border border-[#0052FF]/5 hover:border-[#0052FF]/20 transition-all text-center"
            >
              <div className="text-6xl font-black text-[#0052FF] mb-4 tracking-tighter">
                {item.value}
              </div>
              <div className="text-xl font-bold mb-2 text-[#0a0a0a]">{item.label}</div>
              <div className="text-xs uppercase tracking-widest font-bold text-[#555555]/60">{item.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-12 rounded-[3.5rem] bg-[#0052FF] text-white overflow-hidden relative shadow-2xl shadow-[#0052FF]/30"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:24px_24px]" />
          <p className="text-2xl md:text-3xl italic font-medium leading-relaxed text-center relative z-10">
            "We aren't just capturing market share. We are creating a new category: Autonomous Intent-Driven Commerce."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Market;
