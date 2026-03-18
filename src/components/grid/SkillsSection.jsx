import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridItem from './GridItem';
import { Code, Box, Wrench, Heart } from 'lucide-react';

const SKILLS = [
  { category: 'Programming', icon: Code, items: ['Java', 'C++', 'Python', 'C', 'JavaScript'] },
  { category: 'Frameworks', icon: Box, items: ['React.js', 'Node.js', 'Express.js'] },
  { category: 'Tools / DB', icon: Wrench, items: ['MongoDB', 'MySQL', 'Git/GitHub', 'Postman', 'Vercel'] },
  { category: 'Core & Soft', icon: Heart, items: ['REST APIs', 'JWT', 'Socket.IO', 'Problem Solving'] },
];


const SkillsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Pouring effect variant
  const dropVariants = {
    hidden: { y: -50, opacity: 0, scale: 0.8 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        type: 'spring',
        bounce: 0.6,
        damping: 12,
        stiffness: 100,
      },
    }),
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <GridItem 
      className={`group/skills overflow-hidden transition-all duration-300 ${isHovered ? 'col-span-1 md:col-span-2 row-span-2' : 'col-span-1 md:col-span-1 row-span-1'}`}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold tracking-tight z-10">Tech Stack</h3>
        <span className="text-xs text-gray-500 font-mono tracking-widest uppercase z-10">Expand on hover</span>
      </div>

      <div className="relative flex-1 z-10 flex flex-col justify-end">
        {!isHovered ? (
          <div className="flex flex-wrap gap-2 mb-4">
            {SKILLS.flatMap((cat) => cat.items).slice(0, 8).map((skill, index) => (
              <span key={index} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 font-medium">
                {skill}
              </span>
            ))}
            <span className="px-3 py-1.5 border border-dashed border-white/20 rounded-full text-sm text-gray-500 font-medium">
              +{SKILLS.flatMap(c => c.items).length - 8} more
            </span>
          </div>
        ) : (
          <div className="absolute inset-x-0 bottom-0 top-[-60px] overflow-y-auto no-scrollbar pb-4 pt-10">
            {SKILLS.map((group, groupIdx) => (
              <div key={group.category} className="mb-4">
                <div className="flex items-center gap-2 mb-2 text-[#009A8D]">
                  <group.icon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">{group.category}</span>
                </div>
                <div className="flex flex-wrap gap-2 relative">
                  <AnimatePresence>
                    {group.items.map((skill, i) => (
                      <motion.div
                        key={skill}
                        custom={groupIdx * 4 + i}
                        variants={dropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-full text-sm text-white font-medium hover:bg-[#009A8D]/20 hover:border-[#009A8D] hover:shadow-sm transition-colors cursor-default"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-0" />
    </GridItem>
  );
};

export default SkillsSection;
