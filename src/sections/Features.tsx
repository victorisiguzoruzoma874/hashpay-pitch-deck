import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Landmark, Network } from 'lucide-react';

const Features: React.FC<any> = () => {
  const features = [
    { title: "Hybrid Ecosystem", desc: "A unified application bridging traditional Web2 bank transfers with Web3 crypto assets.", icon: Layers },
    { title: "150+ Corridors", desc: "Instant cross-border settlement across African and global markets with zero manual friction.", icon: Globe },
    { title: "Banking Tools", desc: "Multi-currency accounts, virtual cards, and treasury tools for borderless businesses.", icon: Landmark },
    { title: "Web3 Gateway", desc: "Multi-chain crypto payment gateway with on-chain settlement and full auditability.", icon: Network }
  ];

  return (
    <section id="features" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-[#f3f3f3] border border-[#0052FF]/5 hover:border-[#0052FF]/30 transition-all flex flex-col justify-between group h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#0052FF]/30 mb-8 group-hover:scale-102 transition-transform shadow-lg shadow-[#0052FF]/20 flex items-center justify-center">
                  <feature.icon size={22} className="text-[#0052FF]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0a0a0a] tracking-tight">{feature.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
