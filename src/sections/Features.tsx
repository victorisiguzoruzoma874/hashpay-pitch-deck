import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "AI Voice Assistant",
    desc: "Natural language interface for complex DeFi operations. Just say 'Send 50 SUI to Alice' and let Gemini handle the rest.",
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    title: "Smart Escrow",
    desc: "Conditional payments that only release funds when predefined milestones are met, secured by SUI smart contracts.",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Offline Mode",
    desc: "Queue transactions locally and sync automatically when connectivity is restored, ensuring you never miss a beat.",
    icon: (
      <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-3.536 4.978 4.978 0 011.414-3.536m0 0L4.243 4.243m4.243 4.243L12 12" />
      </svg>
    )
  },
  {
    title: "Multi-Asset Vault",
    desc: "High-security storage for all SUI network assets with granular permissions and institutional-grade protection.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 01-6.001 0M18 7l-3 9m3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  }
];

const Features: React.FC<any> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Ecosystem</h2>
        <p className="text-white/40 max-w-xl mx-auto">Reimagining financial interaction through cutting-edge technology.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
            className="p-8 glass-card border-transparent transition-all duration-300"
          >
            <div className="mb-4 p-3 w-fit rounded-2xl bg-white/5">{f.icon}</div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
