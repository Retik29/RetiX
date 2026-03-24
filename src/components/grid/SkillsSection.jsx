import React from 'react';
import { motion } from 'framer-motion';
import GridItem from './GridItem';
import { skillsData as SKILLS } from '../../data/portfolioData';

const SkillsSection = () => {
  const loopedSkills = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <GridItem className="col-span-1 sm:col-span-2 md:col-span-2 row-span-1 flex flex-col justify-between overflow-hidden">
      <div className="flex justify-between items-start mb-6 z-10">
        <h2 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#666]">TECH.STACK</h2>
      </div>

      <div className="relative flex-1 z-0 flex items-center w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-bg-base)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-bg-base)] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-16 min-w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 60, repeat: Infinity }}
        >
          {loopedSkills.map((skill, index) => (
             <div key={index} className="flex items-center justify-center p-2 rounded hover:bg-white/5 transition-colors cursor-default custom-tech-glow relative group">
               <img src={skill.url} className="w-12 h-12 object-contain opacity-50 group-hover:opacity-100 transition-all duration-300" alt={skill.name} title={skill.name} />
               <span className="absolute -bottom-6 text-[8px] font-mono tracking-widest text-[#888] opacity-0 group-hover:opacity-100 transition-opacity uppercase">{skill.name}</span>
             </div>
          ))}
        </motion.div>
      </div>
    </GridItem>
  );
};

export default SkillsSection;
