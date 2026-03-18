import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridItem from './GridItem';
import { Award, Trophy, Star } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: "National Participant",
    desc: "Selected for Adobe India Hackathon 2025.",
    icon: Trophy,
    color: "text-red-500"
  },
  {
    title: "300+ Problems Solved",
    desc: "Consistent problem solver across multiple platforms.",
    icon: Star,
    color: "text-orange-400"
  }
];

const AchievementSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <GridItem className="col-span-1 md:col-span-1 row-span-1 overflow-visible group/achievements">
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <Award className="w-5 h-5 text-yellow-400" />
        <h3 className="text-xl font-bold">Achievements</h3>
      </div>
      
      <div className="relative h-full z-10">
        {ACHIEVEMENTS.map((ach, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 cursor-pointer"
            animate={{ 
              y: hoveredIdx === i ? -10 : i * 15, 
              scale: hoveredIdx === i ? 1.05 : 1 - (i * 0.05),
              zIndex: hoveredIdx === i ? 50 : 10 - i 
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onHoverStart={() => setHoveredIdx(i)}
            onHoverEnd={() => setHoveredIdx(null)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div 
              className="w-full h-[120px] bg-black/60 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-col justify-center shadow-lg relative h-[100px]"
              animate={{ rotateY: hoveredIdx === i ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <div 
                className="absolute inset-0 flex items-center p-4 gap-3 bg-white/5 backface-hidden rounded-xl"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className={`p-3 rounded-full bg-white/10 ${ach.color}`}>
                  <ach.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-md text-white">{ach.title}</h4>
              </div>
              <div 
                className="absolute inset-0 flex flex-col justify-center p-4 bg-yellow-500/20 backface-hidden rounded-xl border border-yellow-500/50 transform rotate-y-180"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <h4 className="font-bold text-yellow-400 text-sm mb-1">{ach.title}</h4>
                <p className="text-xs text-white/90 leading-tight">{ach.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </GridItem>
  );
};

export default AchievementSection;
