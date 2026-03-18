import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GridItem from './GridItem';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  return (
    <GridItem 
      className={`flex flex-col justify-between overflow-visible transition-all duration-300 ${isHovered ? 'col-span-1 md:col-span-2 row-span-2' : 'col-span-1 md:col-span-2 row-span-1'}`}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="flex justify-between items-start">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#009A8D] animate-pulse" />
            <span className="text-xs font-mono text-[#009A8D] uppercase tracking-wider">Available for work</span>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-2"
            layout
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#009A8D]">Retik</span>
          </motion.h1>
          <motion.p className="text-gray-400 mt-4 text-lg font-medium" layout>
            Full Stack MERN Developer
          </motion.p>
        </div>

        {/* Avatar Animation */}
        <div 
          className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 cursor-pointer"
          onMouseEnter={() => setIsAvatarHovered(true)}
          onMouseLeave={() => setIsAvatarHovered(false)}
        >
          <motion.div
            className="w-full h-full relative preserve-3d"
            animate={{ rotateY: isAvatarHovered ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front (Cartoon) */}
            <div 
              className="absolute inset-0 bg-gray-800 rounded-full border-2 border-white/10 flex items-center justify-center overflow-hidden backface-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <img src="/Avatar.jpg" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            {/* Back (Real photo or sleek logo) */}
            <div 
              className="absolute inset-0 bg-[#009A8D] rounded-full border-2 border-[#009A8D] flex items-center justify-center overflow-hidden shadow-sm"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <img src="/My_Photo.jpg" alt="Real Photo" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-gray-500 max-w-sm">
          Building scalable web applications with real-time systems, secure architectures, and performance-driven design.
        </p>
      </div>
    </GridItem>
  );
};

export default HeroSection;
