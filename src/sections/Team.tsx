import React from 'react';
import { motion } from 'framer-motion';

const TEAM_MEMBERS = [
  {
    name: "Asadu Benedict Pascal",
    role: "Chief Executive Officer",
    image: "/assets/team/ceo.png"
  },
  {
    name: "Peter Martins N",
    role: "Chief Technical Lead",
    image: "/assets/team/tech_lead.png"
  },
  {
    name: "Victor Isiguzor Uzoma",
    role: "Chief Product Manager",
    image: "/assets/team/product_manager.png"
  },
  {
    name: "Retyit Watson",
    role: "Chief Marketing and Security Officer",
    image: "/assets/team/marketing_security.png"
  },
  {
    name: "Sheriff Mudasir",
    role: "Chief Audit and Security Manager",
    image: "/assets/team/audit_security.png"
  },
  {
    name: "Yusuf Hussaini",
    role: "Chief Technical Support Officer",
    image: "/assets/team/tech_support.png"
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 px-6 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-[#0a0a0a] tracking-tighter">The Architects</h2>
          <p className="text-[#555555] max-w-2xl mx-auto text-xl font-medium">
            Building the foundation for autonomous, AI-driven global commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-white border border-[#0052FF]/10 shadow-xl shadow-[#0052FF]/5 relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                
                {/* Level Scan Line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0052FF]/10 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none" />
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-[#0a0a0a] mb-1">{member.name}</h3>
                <p className="text-[#0052FF] font-mono text-sm uppercase tracking-widest font-bold">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
