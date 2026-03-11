import React from 'react';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Features from './sections/Features';
import TeamShowcase from './components/ui/team-showcase';
import Technology from './sections/Technology';
import Market from './sections/Market';
import Vision from './sections/Vision';
import CTA from './sections/CTA';
import SummaryModal from './components/SummaryModal';
import { useState } from 'react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-[#050505] selection:bg-cyan-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full" />
      </div>

      {/* Persistent Navigation / Write-up Trigger */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center font-bold">H</div>
          <span className="text-xl font-bold tracking-tight">Hash<span className="text-cyan-400">Pay</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
          <a href="#problem" className="hover:text-cyan-400 transition-colors">Problem</a>
          <a href="#solution" className="hover:text-cyan-400 transition-colors">Solution</a>
          <a href="#features" className="hover:text-cyan-400 transition-colors">Ecosystem</a>
          <a href="#team" className="hover:text-cyan-400 transition-colors">Team</a>
          <a href="#tech" className="hover:text-cyan-400 transition-colors">Technology</a>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform"
        >
          Pitch Summary
        </button>
      </nav>

      <SummaryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <Hero onNext={() => {}} onPrev={() => {}} isFirst={true} isLast={false} />
        </section>
        
        <div className="max-w-7xl mx-auto px-6 space-y-32 py-32">
          {/* Executive Summary / Write-up Section */}
          <section id="summary" className="glass-card p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-6xl">SYNOPSIS</div>
            <div className="max-w-3xl relative z-10">
              <span className="text-cyan-400 uppercase tracking-widest text-xs font-bold mb-4 block">Executive Briefing</span>
              <h2 className="text-4xl font-bold mb-8">Redefining the Velocity of Global Value.</h2>
              <p className="text-lg text-white/50 leading-relaxed mb-6">
                HashPay is not just a wallet; it's a <strong>universal financial abstraction layer</strong>. By combining SUI's parallel execution with Gemini's semantic intelligence, we solve the two biggest hurdles in DeFi: <strong>technical friction</strong> and <strong>latency</strong>.
              </p>
              <p className="text-lg text-white/50 leading-relaxed">
                Our vision is a world where sending money is as natural as conversation. From instant cross-border settlements to smart escrow services that eliminate legal overhead, HashPay provides the infrastructure for the next billion users to interact with the decentralized economy seamlessly.
              </p>
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

          <section id="team" className="py-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The Minds Behind HashPay</h2>
              <div className="h-1 w-24 bg-cyan-400 mx-auto" />
            </div>
            <TeamShowcase />
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
