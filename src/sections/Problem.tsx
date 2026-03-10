import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC<any> = () => {
  const painPoints = [
    { title: "Slow Settlements", desc: "Traditional cross-border payments take 3-5 days." },
    { title: "High Fees", desc: "Intermediaries eat up to 7% of transaction value." },
    { title: "Complexity", desc: "Escrow and complex logic require expensive legal work." },
    { title: "Limited Access", desc: "Billions are still unbanked or underbanked." }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">The Global Payment Crisis</h2>
        <div className="h-1 w-24 bg-cyan-400 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {painPoints.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 + 0.3 }}
            className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-2">{point.title}</h3>
            <p className="text-white/60">{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Problem;
