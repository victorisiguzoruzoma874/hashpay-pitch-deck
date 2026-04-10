import React from 'react';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Features from './sections/Features';
import Team from './sections/Team';
import Technology from './sections/Technology';
import Market from './sections/Market';
import Vision from './sections/Vision';
import CTA from './sections/CTA';
import SummaryModal from './components/SummaryModal';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className="relative min-h-screen bg-[#f3f3f3] text-[#0a0a0a] selection:bg-[#0052FF] selection:text-white">
      {/* Level Breathing Vignette */}
      <div className="level-vignette" />

      {/* Persistent Summary Modal Section */}
      <SummaryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Sticky Header / Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[var(--navbar-h)] flex backdrop-blur-md bg-white/70 border-b border-[#0052FF]/10">
        <div className="flex items-center justify-between px-6 max-w-7xl mx-auto w-full gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0052FF] rounded-lg flex items-center justify-center font-bold text-white tracking-tighter shadow-lg shadow-[#0052FF]/20">H</div>
            <span className="text-xl font-bold tracking-tight text-[#0a0a0a]">Hash<span className="text-[#0052FF]">Pay</span></span>
            <span className="ml-3 hidden sm:block px-3 py-1 bg-[#0052FF]/5 border border-[#0052FF]/10 rounded-full text-[10px] font-black uppercase text-[#0052FF] tracking-[0.2em] animate-pulse">Hybrid Fintech</span>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-sm font-semibold text-[#0a0a0a]/70">
            <a href="#hero" className="cursor-pointer hover:text-[#0052FF] transition-colors uppercase tracking-wider">Start</a>
            <a href="#problem" className="cursor-pointer hover:text-[#0052FF] transition-colors uppercase tracking-wider">Problem</a>
            <a href="#solution" className="cursor-pointer hover:text-[#0052FF] transition-colors uppercase tracking-wider">Solution</a>
            <a href="#features" className="cursor-pointer hover:text-[#0052FF] transition-colors uppercase tracking-wider">Ecosystem</a>
            <a href="#team" className="cursor-pointer hover:text-[#0052FF] transition-colors uppercase tracking-wider">Team</a>
            <a href="#tech" className="cursor-pointer hover:text-[#0052FF] transition-colors uppercase tracking-wider">Tech</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer px-6 py-2 bg-[#0052FF] text-white text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-[#0052FF]/20"
            >
              Pitch Summary
            </button>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="cursor-pointer lg:hidden p-2 rounded-lg hover:bg-[#0052FF]/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="text-[#0a0a0a]" size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <div className="fixed inset-0 z-[60] flex">
            {/* Sidebar panel */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', ease: [0.32, 0.72, 0, 1], duration: 0.35 }}
              className="relative w-full sm:w-1/2 sm:max-w-[380px] h-full bg-white flex flex-col shadow-2xl shadow-[#0052FF]/10 z-10"
            >
              {/* Sidebar header */}
              <div className="flex items-center justify-between px-6 h-[var(--navbar-h)] border-b border-[#0052FF]/10 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#0052FF] rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-[#0052FF]/20">H</div>
                  <span className="text-xl font-bold tracking-tight text-[#0a0a0a]">Hash<span className="text-[#0052FF]">Pay</span></span>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="cursor-pointer p-2 rounded-lg hover:bg-[#0052FF]/10 transition-colors text-[#555555] hover:text-[#0052FF]"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {[
                  { label: 'Start', href: '#hero' },
                  { label: 'Problem', href: '#problem' },
                  { label: 'Solution', href: '#solution' },
                  { label: 'Ecosystem', href: '#features' },
                  { label: 'Team', href: '#team' },
                  { label: 'Tech', href: '#tech' },
                  { label: 'Market', href: '#market' },
                  { label: 'Vision', href: '#vision' },
                ].map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setIsSidebarOpen(false)}
                    className="cursor-pointer group flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider text-[#0a0a0a]/60 hover:text-[#0052FF] hover:bg-[#0052FF]/5 active:bg-[#0052FF]/10 transition-all"
                  >
                    <span>{label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#0052FF] text-xs">→</span>
                  </a>
                ))}
              </nav>

              {/* Sidebar footer CTA */}
              <div className="px-6 pb-6 border-t border-[#0052FF]/10 shrink-0">
                <button
                  onClick={() => { setIsModalOpen(true); setIsSidebarOpen(false); }}
                  className="cursor-pointer w-full py-3.5 bg-[#0052FF] text-white text-sm font-bold rounded-2xl hover:bg-[#0037FF] active:scale-95 transition-all shadow-lg shadow-[#0052FF]/20"
                >
                  Pitch Summary
                </button>
                <p className="text-center text-[10px] text-[#555555]/50 font-mono uppercase tracking-widest mt-4">
                  HashPay Protocol © 2026
                </p>
              </div>
            </motion.aside>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setIsSidebarOpen(false)}
              className="cursor-pointer flex-1 bg-black/60 backdrop-blur-sm"
            />
          </div>
        )}
      </AnimatePresence>

      {/* Main Content Sections */}
      <main className="relative z-10 ">
        <section id="hero">
          <Hero onNext={() => {}} onPrev={() => {}} isFirst={true} isLast={false} />
        </section>
        
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {/* Executive Summary / Write-up Section */}
          <section id="summary" className="p-12 rounded-[3rem] bg-white border border-[#0052FF]/10 relative overflow-hidden group shadow-xl shadow-[#0052FF]/5">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] font-black text-9xl text-[#0052FF] pointer-events-none select-none">SYNOPSIS</div>
            <div className="max-w-3xl relative z-10">
              <span className="text-[#0052FF] uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Executive Briefing</span>
              <h2 className="text-5xl font-bold mb-8 text-[#0a0a0a] tracking-tight leading-tight">World's First Hybrid Payment Fintech.</h2>
              <p className="text-xl text-[#555555] leading-relaxed mb-8">
                HashPay is the unified architecture bridging traditional <strong>Web2 local transfers</strong> with <strong>Web3 cryptocurrency transactions</strong>. We eliminate the divide between fiat and digital assets within a single, frictionless ecosystem.
              </p>
              <p className="text-xl text-[#555555] leading-relaxed">
                By combining institutional-grade real-time conversion with SUI's parallel execution, we enable instant cross-border settlement across 150+ corridors. Sending Naira and receiving Ghanaian Cedis is now as seamless as a local transfer, powered by decentralized trust.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="cursor-pointer px-8 py-4 bg-[#0052FF] text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-[#0052FF]/20"
                >
                  View Digital Summary
                </button>
                <a 
                  href="/HashPay_Investor_Deck.pptx" 
                  download
                  className="cursor-pointer px-8 py-4 bg-[#0a0a0a] text-white font-bold rounded-2xl hover:bg-[#0052FF] transition-colors flex items-center gap-3 shadow-xl"
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Investor Deck (.pptx)
                </a>
              </div>
            </div>
          </section>

          <section id="problem">
            <Problem />
          </section>

          <section id="solution">
            <Solution />
          </section>

          <section id="features">
            <Features />
          </section>

          <section id="team">
            <Team />
          </section>

          <section id="tech">
            <Technology />
          </section>

          <section id="market">
            <Market />
          </section>

          <section id="vision">
            <Vision />
          </section>

          <section id="cta">
            <CTA onPrev={() => {}} />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 text-center text-white/30 text-xs">
        &copy; 2026 HashPay Protocol. Powered by SUI & Google Gemini.
      </footer>
    </div>
  );
};

export default App;
