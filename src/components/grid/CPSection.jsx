import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GridItem from './GridItem';
import { Code2, Hash, Terminal } from 'lucide-react';

const CP_STATS = [
  { platform: "Codolio (Aggregated)", rating: "Profile", label: "diedilemma", solved: 300, max: 400, color: "bg-orange-500" },
  { platform: "Data Structures", rating: "DSA", label: "Strong Base", solved: 150, max: 200, color: "bg-blue-500" }
];


const CPSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GridItem 
      className="col-span-1 md:col-span-1 row-span-1 overflow-hidden group/cp"
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="flex items-center gap-2 mb-4 z-20">
        <Terminal className="w-5 h-5 text-green-500" />
        <h3 className="text-xl font-bold">Algorithms</h3>
      </div>
      
      <div className="flex flex-col gap-4 relative z-10">
        {CP_STATS.map((stat, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-bold text-gray-300">{stat.platform}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded font-bold bg-black/50 ${stat.color} bg-clip-text text-transparent`}>
                {stat.label} ({stat.rating})
              </span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className={`absolute top-0 left-0 h-full ${stat.color} shadow-[0_0_10px_currentColor]`}
                initial={{ width: 0 }}
                animate={{ width: isHovered ? `${(stat.solved / stat.max) * 100}%` : '10%' }}
                transition={{ duration: 1, ease: 'easeOut', delay: i * 0.1 }}
              />
            </div>
            <div className="text-[9px] text-gray-500 font-mono self-end w-full flex justify-between">
              <span>0</span>
              <span>{stat.solved}+ Solved</span>
              <span>{stat.max}</span>
            </div>
          </div>
        ))}
      </div>
    </GridItem>
  );
};

export default CPSection;
