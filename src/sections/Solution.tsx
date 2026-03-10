import React from 'react';
import { motion } from 'framer-motion';

const Solution: React.FC<any> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-sm font-bold mb-6">THE SOLUTION</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Seamless, Instant,<br />
            <span className="text-gradient">Verifiable Payments.</span>
          </h2>
          <p className="text-xl text-white/60 mb-8 leading-relaxed">
            HashPay leverages SUI's unique Object-centric model and Programmable Transaction Blocks (PTB) to deliver high-throughput, low-latency financial infrastructure for everyone.
          </p>
          <ul className="space-y-4">
            {['Direct P2P Settlements', 'Programmable Smart Escrow', 'AI-Driven Security'].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-cyan-400">
                    <path d="M5 13l4 4L19 7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-lg font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card p-4 aspect-[4/3] flex items-center justify-center overflow-hidden">
             <div className="w-full h-full bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-3/4 h-3/4 border-2 border-cyan-400/30 rounded-full animate-pulse" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-1/2 h-1/2 border-2 border-purple-400/30 rounded-full animate-ping" />
                </div>
                <div className="text-center relative z-10">
                   <div className="text-4xl font-bold mb-2">PTB</div>
                   <div className="text-sm text-cyan-400/70">SUI NETWORK POWERED</div>
                </div>
             </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400 blur-3xl opacity-20" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600 blur-3xl opacity-20" />
        </motion.div>
      </div>
    </div>
  );
};

export default Solution;
