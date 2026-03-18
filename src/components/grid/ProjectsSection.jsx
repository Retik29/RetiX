import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridItem from './GridItem';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'Lumina',
    desc: 'Mental health platform with role-based dashboards, scheduling, and AI chatbot.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    demo: 'https://lumina-peace.vercel.app/',
    github: 'https://lumina-peace.vercel.app/',
    color: '#3b82f6'
  },
  {
    id: 2,
    title: 'InsightDrive',
    desc: 'Fleet feedback & analytics platform with real-time dashboard and tracking.',
    tech: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
    demo: 'https://github.com/Retik29/InsightDrive',
    github: 'https://github.com/Retik29/InsightDrive',
    color: '#8b5cf6'
  },
  {
    id: 3,
    title: 'FixEasy',
    desc: 'Technician-finder platform connecting users with verified service providers.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://github.com/Retik29/FixEasy',
    github: 'https://github.com/Retik29/FixEasy',
    color: '#10b981'
  }
];

const ProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GridItem 
      className={`group/projects relative overflow-hidden transition-all duration-300 ${isHovered ? 'col-span-1 md:col-span-2 row-span-2' : 'col-span-1 md:col-span-1 row-span-1'}`}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="flex justify-between items-center mb-6 relative z-20">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover/projects:bg-[#009A8D]/20 group-hover/projects:border-[#009A8D]/50 transition-colors">
            <FolderGit2 className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold">Featured Projects</h3>
        </div>
        <motion.div 
          animate={{ rotate: isHovered ? 45 : 0 }}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20"
        >
          <ExternalLink className="w-4 h-4" />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col gap-3 h-full overflow-y-auto no-scrollbar pb-4 pr-1">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group/card relative p-4 rounded-xl border border-white/10 bg-black/40 hover:bg-black/60 overflow-hidden"
          >
            {/* Hover Glow Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover/card:border-[#009A8D]/50 rounded-xl transition-colors pointer-events-none" />
            
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-bold text-white group-hover/card:text-[#009A8D] transition-colors">{project.title}</h4>
              <div className="flex gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                <a href={project.github} className="p-1.5 bg-white/10 rounded-md hover:bg-white/20 hover:text-white text-gray-400 transition-colors"><Github className="w-4 h-4" /></a>
                <a href={project.demo} className="p-1.5 bg-white/10 rounded-md hover:bg-[#009A8D] hover:text-white text-gray-400 transition-colors"><ExternalLink className="w-4 h-4" /></a>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.desc}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                  {t}
                </span>
              ))}
            </div>
            
            {/* Overlay Details on Hover (Scale Up) */}
            <motion.div 
              className="absolute inset-0 bg-[#009A8D]/90 backdrop-blur-md p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover/card:opacity-100 transition-opacity"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
            >
               <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
               <p className="text-sm text-white/80 mb-4 px-4">{project.desc}</p>
               <div className="flex gap-4">
                 <a href={project.github} className="flex items-center gap-2 px-4 py-2 bg-black/50 text-white rounded-full hover:bg-black font-medium transition-colors text-sm">
                   <Github className="w-4 h-4" /> Code
                 </a>
                 <a href={project.demo} className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 font-bold transition-colors text-sm">
                   <ExternalLink className="w-4 h-4" /> Live Demo
                 </a>
               </div>
            </motion.div>

          </motion.div>
        ))}
      </div>
    </GridItem>
  );
};

export default ProjectsSection;
