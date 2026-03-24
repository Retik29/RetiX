import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GridItem from './GridItem';
import { personalData } from '../../data/portfolioData';

const HeroSection = () => {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  return (
    <GridItem className="col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2 flex flex-col justify-between overflow-hidden">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <span className="w-2 h-2 bg-[#009A8D]" />
            <span className="text-[10px] font-mono text-[#009A8D] font-bold uppercase tracking-[0.2em] leading-none">OPEN TO WORK</span>
          </div>
          <p className="text-[12px] font-mono text-[var(--color-text-muted)] mb-1 opacity-40">
             text-8xl font-extralight tracking-tighter text-balance
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tighter text-[var(--color-text-primary)] leading-[0.9] text-balance relative">
            {personalData.firstName} <br /> {personalData.lastName}
          </h1>
        </div>

        <div 
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-shrink-0 relative cursor-pointer"
          onMouseEnter={() => setIsAvatarHovered(true)}
          onMouseLeave={() => setIsAvatarHovered(false)}
        >
          <motion.div
            initial={false}
            animate={{ 
               opacity: isAvatarHovered ? 0 : 1,
               scale: isAvatarHovered ? 0.8 : 1,
               filter: isAvatarHovered ? 'blur(8px)' : 'blur(0px)'
            }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 bg-[var(--color-bg-elevated)] rounded-xl border border-[var(--color-border)] overflow-hidden z-20"
          >
             <img src="/Avatar.jpg" alt="Avatar" className="w-full h-full object-cover grayscale opacity-90" />
          </motion.div>

          <motion.div
            initial={false}
            animate={{ 
               opacity: isAvatarHovered ? 1 : 0,
               scale: isAvatarHovered ? 1 : 0.8,
               filter: isAvatarHovered ? 'blur(0px)' : 'blur(8px)'
            }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 bg-[var(--color-bg-elevated)] rounded-xl border border-white/20 overflow-hidden z-10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
             <img src="/Photo.png" alt="Real Photo" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-[var(--color-border)] border-dashed opacity-100">
        <p className="text-lg font-semibold uppercase text-teal-400">
          {personalData.role}
        </p>
      </div>
    </GridItem>
  );
};

export default HeroSection;
