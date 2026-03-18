import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GridItem from './GridItem';
import { Briefcase } from 'lucide-react';

const EXPERIENCE = [
  {
    role: "Full Stack Web Dev (MERN)",
    company: "Cipher Schools",
    duration: "Jun 2025 - Jul 2025",
    work: "Built dynamic applications using MERN, secured with JWT, and deployed on Vercel/Render. Improved API performance by 30%."
  },
  {
    role: "Freelance / Projects",
    company: "Self-Employed",
    duration: "2023 - Present",
    work: "Developing scalable real-time systems like Lumina and InsightDrive."
  }
];

const ExperienceSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GridItem 
      className={`group/exp overflow-hidden transition-all duration-300 ${isHovered ? 'col-span-1 md:col-span-2 row-span-1' : 'col-span-1 md:col-span-1 row-span-1'}`}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="flex items-center gap-3 mb-4">
        <Briefcase className="w-5 h-5 text-yellow-500" />
        <h3 className="text-xl font-bold">Experience</h3>
      </div>
      
      {/* Horizontal Scroll Area */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory">
        {EXPERIENCE.map((exp, i) => (
          <motion.div 
            key={i} 
            className="min-w-[280px] p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col justify-between snap-center hover:bg-white/10 hover:border-yellow-500/50 hover:shadow-sm transition-all flex-shrink-0 relative overflow-hidden group/card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative z-10">
              <h4 className="font-bold text-yellow-500">{exp.role}</h4>
              <p className="text-sm text-gray-400 font-mono mb-2">{exp.company} • {exp.duration}</p>
              
              <motion.p 
                className="text-sm text-gray-300 leading-relaxed max-h-0 opacity-0 overflow-hidden"
                animate={{ maxHeight: isHovered ? '100px' : '0px', opacity: isHovered ? 1 : 0, marginTop: isHovered ? '8px' : '0px' }}
                transition={{ duration: 0.3 }}
              >
                {exp.work}
              </motion.p>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </GridItem>
  );
};

export default ExperienceSection;
