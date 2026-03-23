import React from 'react';

const Vision: React.FC<any> = () => {
  return (
    <section id="vision" className="py-32 px-6 bg-[#f3f3f3]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[#0052FF] font-bold text-sm tracking-[0.3em] uppercase mb-8 block">The Future</span>
        <h2 className="text-5xl md:text-8xl font-bold mb-10 text-[#0a0a0a] tracking-tighter leading-[0.85]">Liquidity, <br/>Uncontained.</h2>
        <p className="text-2xl text-[#555555] leading-relaxed mb-16 font-medium">
          We aren't just building a wallet. We are building the foundational rails for the next $100T in digital commerce. 
          HashPay is where the chain meets the human.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-3xl bg-white border border-[#0052FF]/10 shadow-sm">
            <div className="text-4xl font-black text-[#0052FF] mb-2">150+</div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#555555]">Global Corridors</div>
          </div>
          <div className="text-center p-8 rounded-3xl bg-white border border-[#0052FF]/10 shadow-sm">
            <div className="text-4xl font-black text-[#0052FF] mb-2">1M+</div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#555555]">Hybrid Users</div>
          </div>
          <div className="text-center p-8 rounded-3xl bg-white border border-[#0052FF]/10 shadow-sm">
            <div className="text-4xl font-black text-[#0052FF] mb-2">$10B</div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#555555]">Cross-Border Flow</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
