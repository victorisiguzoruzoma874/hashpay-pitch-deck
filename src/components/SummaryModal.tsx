import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SummaryModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 overflow-hidden shadow-[0_0_100px_rgba(6,182,212,0.15)]"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-colors text-white/40 hover:text-white"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative z-10">
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-6 block">The HashPay Advantage</span>
              <h3 className="text-3xl font-bold mb-8">Executive Deep Dive</h3>
              
              <div className="space-y-6 text-white/50 leading-relaxed overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
                <p>
                  HashPay is a <strong>next-generation fintech infrastructure</strong> built natively on the SUI network. Our mission is to bridge the gap between traditional finance (TradFi) and the decentralized economy through <strong>user-centric design</strong> and <strong>AI abstraction</strong>.
                </p>
                
                <h4 className="text-white font-bold text-lg mt-8">The AI-Centric Experience</h4>
                <p>
                  By integrating <strong>Google Gemini</strong>, HashPay removes the complexity of interacting with blockchain addresses and gas fees. Users can perform sophisticated DeFi operations—swaps, escrow creation, and cross-border sent—using only their voice or natural language commands.
                </p>

                <h4 className="text-white font-bold text-lg">Unrivaled Technical Foundations</h4>
                <p>
                  Leveraging SUI's <strong>Programmable Transaction Blocks (PTB)</strong> and object-centric data model, HashPay achieves sub-second finality and near-zero cost. This allows for complex financial instruments like <strong>Smart Escrow</strong> to be executed with the same ease as a simple P2P transfer.
                </p>

                <h4 className="text-white font-bold text-lg">Institutional Security for All</h4>
                <p>
                  Our <strong>Vault</strong> architecture provides institutional-grade custody for retail users. Combined with <strong>Offline Mode</strong>, HashPay ensures that transactions are resilient to network interruptions, making it the ideal choice for markets with unstable connectivity.
                </p>

                <div className="pt-8 border-t border-white/5 flex gap-4">
                  <div className="px-4 py-2 rounded-lg bg-cyan-400/10 text-cyan-400 text-sm font-mono font-bold">PTB: Enabled</div>
                  <div className="px-4 py-2 rounded-lg bg-cyan-400/10 text-cyan-400 text-sm font-mono font-bold">AI: Gemini-1.5</div>
                  <div className="px-4 py-2 rounded-lg bg-cyan-400/10 text-cyan-400 text-sm font-mono font-bold">SUI: Ready</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SummaryModal;
