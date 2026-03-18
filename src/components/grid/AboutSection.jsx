import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridItem from './GridItem';
import { User, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <GridItem 
      className={`cursor-pointer overflow-hidden group/about transition-all duration-300 ${isExpanded ? 'col-span-1 md:col-span-2 row-span-1' : 'col-span-1 md:col-span-1 row-span-1'}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className="p-2 rounded-lg bg-white/5 group-hover/about:bg-[#009A8D]/20 transition-colors">
          <User className="w-5 h-5 text-[#009A8D]" />
        </div>
        <h3 className="text-xl font-bold">About Me</h3>
        <Sparkles className="w-4 h-4 text-gray-500 ml-auto group-hover/about:text-white transition-colors" />
      </div>
      
      <div className="relative z-10">
        <p className="text-gray-300 font-medium line-clamp-2 md:line-clamp-3 leading-relaxed">
          I am a Computer Science undergraduate at Lovely Professional University specializing in the MERN stack. I build scalable applications with real-time capabilities, efficient APIs, and intuitive user experiences.
        </p>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-3 text-sm text-gray-400 font-mono flex flex-col gap-2 border-t border-white/10 pt-3"
            >
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>✦ B.Tech, CSE at LPU</motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>✦ Full-Stack MERN Specialist</motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>✦ System Design Enthusiast</motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle moving background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#009A8D]/10 to-transparent opacity-0 group-hover/about:opacity-100 mix-blend-overlay pointer-events-none"
        animate={{ 
          backgroundPosition: isExpanded ? ['0% 0%', '100% 100%'] : '0% 0%' 
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </GridItem>
  );
};

export default AboutSection;
