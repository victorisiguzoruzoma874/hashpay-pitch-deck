import React from 'react';
import { motion } from 'framer-motion';

const Technology: React.FC<any> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Technical Superiority</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                   <span className="font-bold text-cyan-400">SUI</span>
                </div>
                <div>
                   <h4 className="text-xl font-bold mb-2 font-mono">Parallel Execution</h4>
                   <p className="text-white/40 text-sm">297,000 TPS peak throughput with sub-second finality. Scale to millions without congestion.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center">
                   <span className="font-bold text-purple-400">AI</span>
                </div>
                <div>
                   <h4 className="text-xl font-bold mb-2 font-mono">Gemini integration</h4>
                   <p className="text-white/40 text-sm">Advanced semantic understanding for intent-based transactions and anomaly detection.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-400/10 flex items-center justify-center">
                   <span className="font-bold text-pink-400">ZK</span>
                </div>
                <div>
                   <h4 className="text-xl font-bold mb-2 font-mono">Zero-Knowledge Proofs</h4>
                   <p className="text-white/40 text-sm">Private transactions and secure identity verification without compromising user data.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="flex-1 w-full"
          >
             <div className="p-12 glass-card bg-gradient-to-tr from-cyan-900/10 to-transparent border-white/5 relative group overflow-hidden">
                <div className="text-8xl font-black text-white/5 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform duration-700">STACK</div>
                <div className="relative z-10 space-y-4">
                   <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-white/60">Frontend</span>
                      <span className="font-bold text-cyan-400">React + Vite</span>
                   </div>
                   <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-white/60">Blockchain</span>
                      <span className="font-bold text-cyan-400">SUI / Move</span>
                   </div>
                   <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-white/60">AI Engine</span>
                      <span className="font-bold text-cyan-400">Google Gemini</span>
                   </div>
                   <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-white/60">Backend</span>
                      <span className="font-bold text-cyan-400">Node / TypeScript</span>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
