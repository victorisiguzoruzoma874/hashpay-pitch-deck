import React from 'react';
import { motion } from 'framer-motion';

const Market: React.FC<any> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <div className="max-w-4xl w-full text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Market <span className="text-cyan-400">Opportunity</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Global Remittances', value: '$800B+', sub: 'Total Addressable Market' },
            { label: 'DeFi Adoption', value: '45%', sub: 'CAGR (2024-2030)' },
            { label: 'SUI User Growth', value: '1.2M+', sub: 'Monthly Active Wallets' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.3 }}
              className="group"
            >
              <div className="text-5xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {item.value}
              </div>
              <div className="text-lg font-bold mb-1">{item.label}</div>
              <div className="text-sm text-white/40">{item.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 p-8 glass-card bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-white/10"
        >
           <p className="text-xl italic text-white/60">
             "The intersection of AI and Blockchain is the single most transformative shift in the history of finance."
           </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Market;
