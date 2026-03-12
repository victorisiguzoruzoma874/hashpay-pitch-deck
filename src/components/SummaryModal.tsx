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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0052FF]/5"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#f3f3f3] border border-[#0052FF]/10 rounded-3xl p-10 overflow-hidden shadow-2xl shadow-[#0052FF]/20"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0052FF]" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#0052FF]/10 transition-colors text-[#555555] hover:text-[#0052FF]"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative z-10">
              <span className="text-[#0052FF] font-bold uppercase tracking-widest text-xs mb-6 block">The HashPay Advantage</span>
              <h3 className="text-3xl font-bold mb-8 text-[#0a0a0a]">Executive Deep Dive</h3>
              
              <div className="space-y-6 text-[#555555] leading-relaxed overflow-y-auto max-h-[60vh] pr-4 scrollbar-thin scrollbar-thumb-[#0052FF]/20 scrollbar-track-transparent">
                <p>
                  HashPay is a <strong>next-generation fintech infrastructure</strong> built natively on the SUI network. Our mission is to bridge the gap between traditional finance (TradFi) and the decentralized economy through <strong>user-centric design</strong> and <strong>AI abstraction</strong>.
                </p>
                
                <h4 className="text-[#0a0a0a] font-bold text-lg mt-8">The AI-Centric Experience</h4>
                <p>
                  By integrating <strong>Google Gemini</strong>, HashPay removes the complexity of interacting with blockchain addresses and gas fees. Users can perform sophisticated DeFi operations—swaps, escrow creation, and cross-border sent—using only their voice or natural language commands.
                </p>

                <h4 className="text-[#0a0a0a] font-bold text-lg">Unrivaled Technical Foundations</h4>
                <p>
                  Leveraging SUI's <strong>Programmable Transaction Blocks (PTB)</strong> and object-centric data model, HashPay achieves sub-second finality and near-zero cost. This allows for complex financial instruments like <strong>Smart Escrow</strong> to be executed with the same ease as a simple P2P transfer.
                </p>

                <h4 className="text-[#0a0a0a] font-bold text-lg">Institutional Security for All</h4>
                <p>
                  Our <strong>Vault</strong> architecture provides institutional-grade custody for retail users. Combined with <strong>Offline Mode</strong>, HashPay ensures that transactions are resilient to network interruptions, making it the ideal choice for markets with unstable connectivity.
                </p>

                <div className="pt-8 border-t border-[#0052FF]/5 flex flex-col gap-6">
                  <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 rounded-lg bg-white border border-[#0052FF]/10 text-[#0052FF] text-sm font-mono font-bold shadow-sm">PTB: Enabled</div>
                    <div className="px-4 py-2 rounded-lg bg-white border border-[#0052FF]/10 text-[#0052FF] text-sm font-mono font-bold shadow-sm">AI: Gemini-1.5</div>
                    <div className="px-4 py-2 rounded-lg bg-[#0052FF] text-white text-sm font-mono font-bold shadow-lg shadow-[#0052FF]/20">SUI: Ready</div>
                  </div>

                  <a 
                    href="/HashPay_Investor_Deck.pptx" 
                    download
                    className="w-full py-4 bg-[#0a0a0a] text-white text-center font-bold rounded-2xl hover:bg-[#0052FF] transition-colors flex items-center justify-center gap-3 shadow-xl"
                  >
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Full Pitch Deck (.pptx)
                  </a>
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
