import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
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
    <section id="team" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Minds Behind HashPay</h2>
          <div className="h-1 w-24 bg-cyan-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-card p-6 border-transparent hover:border-cyan-400/30 transition-all duration-500 shadow-xl cursor-pointer"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square border border-white/5 group-hover:border-cyan-400/50 transition-all duration-500 shadow-2xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 brightness-[0.4] group-hover:brightness-110 saturate-[0.8] group-hover:saturate-125 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-cyan-400/40 transition-all duration-500 rounded-2xl" />
                
                {/* Subtle scanning line effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-[10%] w-full top-[-10%] group-hover:top-[110%] transition-all duration-[1.5s] ease-linear pointer-events-none" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors tracking-tight">{member.name}</h3>
              <p className="text-cyan-400/60 text-xs font-bold tracking-[0.1em] uppercase group-hover:text-cyan-300 transition-colors">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
