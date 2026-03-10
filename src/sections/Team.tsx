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
              className="group glass-card p-6 border-transparent hover:border-cyan-400/30 transition-all duration-500"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
