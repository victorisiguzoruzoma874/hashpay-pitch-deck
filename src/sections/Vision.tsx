import React from 'react';
import { motion } from 'framer-motion';

const Vision: React.FC<any> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <div className="max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            To build the financial layer for the AI-driven world, where assets flow at the speed of thought and complexity is abstracted away by intelligent agents.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3 }}
            className="p-8 glass-card border-white/5 bg-gradient-to-br from-cyan-500/5 to-transparent"
          >
             <h4 className="text-xl font-bold mb-4 text-cyan-400">Phase 1: Foundation</h4>
             <p className="text-sm text-white/40 leading-relaxed">Launching the core SUI wallet with AI voice integration and smart escrow for the global remittance market.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.5 }}
            className="p-8 glass-card border-white/5 bg-gradient-to-br from-purple-500/5 to-transparent"
          >
             <h4 className="text-xl font-bold mb-4 text-purple-400">Phase 2: Expansion</h4>
             <p className="text-sm text-white/40 leading-relaxed">Integrating institutional custody, cross-chain bridges, and advanced AI-powered trading agents for high-net-worth individuals.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
