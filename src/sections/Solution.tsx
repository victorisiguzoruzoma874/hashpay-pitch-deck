import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Solution: React.FC<any> = () => {
  // Use useMemo to ensure random bounce values don't change on every render
  const letters = useMemo(() => [
    // Top row: "Hash"
    { char: 'H', bg: '#ffffff', text: '#0052FF', size: 90, targetX: -135, targetY: 50, delay: 0.1 },
    { char: 'a', bg: '#111111', text: '#ffffff', size: 90, targetX: -45, targetY: 50, delay: 0.3 },
    { char: 's', bg: '#ffffff', text: '#0052FF', size: 90, targetX: 45, targetY: 50, delay: 0.2 },
    { char: 'h', bg: '#111111', text: '#ffffff', size: 90, targetX: 135, targetY: 50, delay: 0.4 },
    // Bottom row: "Pay"
    { char: 'P', bg: '#ffffff', text: '#0052FF', size: 90, targetX: -90, targetY: -40, delay: 0.5 },
    { char: 'a', bg: '#111111', text: '#ffffff', size: 90, targetX: 0, targetY: -40, delay: 0.6 },
    { char: 'y', bg: '#ffffff', text: '#0052FF', size: 90, targetX: 90, targetY: -40, delay: 0.7 },
  ].map(letter => ({
    ...letter,
    // Pre-calculate random bounce intermediate points with wide horizontal movement
    bounceX: [
      Math.random() * 600 - 300, // Move far left/right
      Math.random() * 400 - 200, 
      Math.random() * 200 - 100, 
      letter.targetX
    ],
    bounceY: [
      -600, 
      Math.random() * -300 - 100, 
      Math.random() * 150, 
      -letter.targetY
    ]
  })), []);

  return (
    <section id="solution" className="py-32 px-6 bg-[#f3f3f3]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-left">
          <span className="text-[#0052FF] font-bold text-sm tracking-widest uppercase mb-4 block">The Infrastructure</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#0a0a0a] tracking-tight leading-[0.9]">Hybrid Liquidity <br/>Architecture.</h2>
          <p className="text-xl text-[#555555] mb-10 leading-relaxed font-medium">
            HashPay is the intelligent bridge between traditional fiat banking and the decentralized economy. 
            Our real-time conversion engine handles cross-border exchange at institutional rates, automatically.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#0052FF]/10 shadow-sm">
              <div className="w-10 h-10 bg-[#0052FF]/10 rounded-xl flex items-center justify-center shrink-0">
                <div className="w-2 h-2 bg-[#0052FF] rounded-full animate-ping" />
              </div>
              <div>
                <h4 className="font-bold text-[#0a0a0a]">Intelligent Real-time Conversion</h4>
                <p className="text-sm text-[#555555]">Automated Naira to Cedi (and 150+ corridors) at institutional-grade rates.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full flex items-center justify-center">
          <div className="relative w-full max-w-[500px] aspect-square bg-[#0052FF] rounded-[4rem] shadow-2xl shadow-[#0052FF]/40 overflow-hidden flex items-center justify-center">
            
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-0" />
            
            <div className="relative w-full h-full z-10">
              {letters.map((ball, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    x: ball.bounceX, 
                    y: ball.bounceY,
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 3.5, 
                    times: [0, 0.3, 0.7, 1],
                    ease: "easeOut",
                    delay: ball.delay + 0.3
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    zIndex: 100,
                    y: [-ball.targetY, -ball.targetY - 25, -ball.targetY],
                    transition: { 
                      y: { repeat: Infinity, duration: 0.6, ease: "easeInOut" },
                      scale: { duration: 0.2 }
                    }
                  }}
                  className="absolute cursor-pointer flex items-center justify-center"
                  style={{ 
                    width: ball.size, 
                    height: ball.size,
                    backgroundColor: ball.bg,
                    borderRadius: '50%',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontFamily: '"Arial Black", Arial, sans-serif',
                    fontWeight: 900,
                    color: ball.text,
                    fontSize: ball.size * 0.45,
                    boxShadow: 'inset -5px -5px 15px rgba(0,0,0,0.4), inset 5px 5px 15px rgba(255,255,255,0.4), 0 10px 20px rgba(0,0,0,0.3)',
                    marginLeft: -ball.size / 2,
                    marginTop: -ball.size / 2,
                    zIndex: 20 + i
                  }}
                >
                  <span className="relative z-10 leading-none">{ball.char}</span>
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,_rgba(255,255,255,0.4),_transparent)] pointer-events-none" />
                </motion.div>
              ))}
            </div>

            <div className="absolute inset-0 border-[16px] border-white/5 rounded-[4rem] pointer-events-none z-40" />
          </div>

          {/* <div className="absolute -top-6 -right-6 bg-white border-2 border-[#0052FF] text-[#0052FF] px-6 py-3 font-mono text-xs font-black shadow-2xl z-50 transform rotate-6">
            CORE_RELIABLE_v6.4
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Solution;
