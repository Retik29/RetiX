import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GridItem from './GridItem';
import { GraduationCap, MapPin, Calendar, ExternalLink } from 'lucide-react';

const EDUCATION = [
  {
    course: "B.Tech in Computer Science",
    school: "Lovely Professional Univ.",
    year: "2023 - 2027",
    cgpa: "8.03 CGPA",
    details: "Focusing on Full-stack and DSA",
    current: true
  },
  {
    course: "Intermediate (PCM)",
    school: "Bidhan Chandra Institution",
    year: "2021 - 2023",
    cgpa: "78%",
    details: "Science Stream",
    current: false
  },
  {
    course: "Matriculation",
    school: "Assembly Of God Church",
    year: "2019 - 2020",
    cgpa: "92%",
    details: "High School",
    current: false
  }
];

const EducationSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GridItem 
      className={`overflow-hidden group/edu transition-all duration-300 ${isHovered ? 'col-span-1 md:col-span-2 row-span-2' : 'col-span-1 md:col-span-1 row-span-1'}`}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="flex items-center gap-3 mb-6 relative z-20">
        <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover/edu:bg-purple-500/20 group-hover/edu:border-purple-500/50 transition-colors">
          <GraduationCap className="w-5 h-5 text-purple-400 group-hover/edu:text-purple-300" />
        </div>
        <h3 className="text-2xl font-bold">Education Timeline</h3>
      </div>

      <div className="relative pl-6 flex flex-col gap-6 h-full z-10 overflow-y-auto no-scrollbar pb-4 pt-2">
        {/* Timeline Line */}
        <div className="absolute left-[34px] top-6 bottom-4 w-px bg-white/10 z-0 overflow-hidden">
          <motion.div 
            className="w-full bg-gradient-to-b from-purple-500 to-transparent"
            initial={{ height: 0 }}
            animate={{ height: isHovered ? '100%' : '30%' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </div>

        {EDUCATION.map((edu, i) => (
          <div key={i} className="relative z-10 pl-6 group/timeline">
            {/* Timeline Dot */}
            <div className="absolute -left-2 top-1.5 w-3 h-3 rounded-full bg-black border-2 border-purple-500 group-hover/timeline:scale-150 group-hover/timeline:bg-purple-500 transition-all shadow-[0_0_10px_purple]" />
            
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-lg font-bold text-white group-hover/timeline:text-purple-400 transition-colors">
                {edu.course}
              </h4>
              <span className="text-xs font-mono text-gray-400 px-2 py-1 bg-white/5 rounded-md border border-white/10">
                {edu.year}
              </span>
            </div>
            
            <p className="text-sm font-medium text-gray-300 flex items-center gap-1 mb-2">
              <MapPin className="w-3 h-3 text-purple-500" /> {edu.school}
            </p>
            
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                CGPA: {edu.cgpa}
              </span>
              <p className="text-xs text-gray-400 font-mono tracking-tight">{edu.details}</p>
            </div>
            
            {/* Hover details */}
            <motion.div 
               className="overflow-hidden bg-white/5 rounded-lg border border-white/5 mt-3 backdrop-blur-sm relative"
               initial={{ height: 0, opacity: 0 }}
               animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
               transition={{ duration: 0.3 }}
            >
               <div className="p-3">
                 <p className="text-[11px] font-mono text-gray-400 leading-relaxed">
                   <strong>Key Coursework:</strong> <br/>
                   Data Structures, Algorithms, Operating Systems, Database Management Systems, Object Oriented Programming.
                 </p>
               </div>
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Background glow top right */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
    </GridItem>
  );
};

export default EducationSection;
