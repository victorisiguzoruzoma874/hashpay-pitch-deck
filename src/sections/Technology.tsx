import React from 'react';

const Technology: React.FC<any> = () => {
  return (
    <section id="tech" className="py-32 px-6 bg-white border-y border-[#0052FF]/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold mb-6 text-[#0a0a0a] tracking-tight">The Stack</h2>
          <p className="text-[#555555] max-w-xl mx-auto text-lg leading-relaxed">
            Built on SUI’s native object model for unparalleled speed and Gemini AI for intent-based execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 rounded-[3rem] bg-[#f3f3f3] border border-[#0052FF]/10 hover:border-[#0052FF]/30 transition-all">
            <h3 className="text-3xl font-bold mb-6 text-[#0a0a0a] flex items-center gap-4">
              <span className="w-12 h-12 bg-[#0052FF] rounded-2xl flex items-center justify-center text-white text-xl">S</span>
              SUI Network
            </h3>
            <p className="text-lg text-[#555555] leading-relaxed mb-6">
              Parallel execution and native object state allow for millions of transactions per second, making real-time global commerce possible.
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-widest text-[#0052FF]/60">
              <span>#OBJECT_MODEL</span>
              <span>#PARALLEL_EXEC</span>
              <span>#MOVE_LANG</span>
            </div>
          </div>

          <div className="p-10 rounded-[3rem] bg-[#0052FF] text-white shadow-2xl shadow-[#0052FF]/30 transition-all hover:scale-[1.02]">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0052FF] text-xl">AI</span>
              Gemini AI
            </h3>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Processing intent at the edge. Gemini enables the first truly conversational DeFi experience, abstracting cryptographic complexity.
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-widest text-white/50">
              <span>#LLM_INTENT</span>
              <span>#VOICE_COMMERCE</span>
              <span>#DYNAMIC_UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
