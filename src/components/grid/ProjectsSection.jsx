import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridItem from './GridItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData as PROJECTS } from '../../data/portfolioData';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 60 : -60, opacity: 0 })
  };

  const project = PROJECTS[currentIndex];

  return (
    <GridItem className="col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2 relative overflow-hidden p-0 min-h-[300px] md:min-h-0">
      <div 
        className="p-6 relative z-10 flex flex-col justify-between h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="mt-auto relative z-20">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            >
              <h3 className="text-3xl font-extralight tracking-tight text-[var(--color-text-primary)] mb-2">{project.title}</h3>
              <p className="text-sm font-light text-[var(--color-text-secondary)] line-clamp-1 mb-6 max-w-sm">
                {project.desc}
              </p>
              
              <div className="flex items-center gap-3">
                <div className="flex gap-1 mr-auto">
                    {PROJECTS.map((_, i) => (
                       <span key={i} className={`h-0.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-4 bg-[#0A84FF]' : 'w-2 bg-white/20'}`} />
                    ))}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-[10px] font-mono border border-[var(--color-border)] rounded hover:bg-white/10 transition-colors text-white uppercase tracking-wider">
                    Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-[10px] font-mono bg-[#0A84FF] text-white rounded hover:bg-blue-600 transition-colors uppercase tracking-wider font-bold">
                    Live →
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence mode="wait">
         <motion.div
           key={`bg-${project.id}`}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.5 }}
           className="absolute inset-x-0 bottom-0 h-full z-0 pointer-events-none"
         >
           {project.image && !project.image.includes('unsplash') ? (
             <>
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-base)] via-[var(--color-bg-base)]/80 to-[var(--color-bg-base)]/10 z-10" />
               <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 mix-blend-luminosity transition-transform duration-[15s] ease-linear hover:scale-110" />
             </>
           ) : (
             <>
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-base)] via-[var(--color-bg-base)]/80 to-transparent z-10" />
               <div className="absolute left-10 top-10 opacity-10 font-mono text-[8px] text-[var(--color-text-primary)] whitespace-pre custom-code-bg">
                 {`function initializeProject_${project.id}() {
        console.log("Loading modules...");
        const config = {
          frameworks: ${JSON.stringify(project.tech)},
          deployTarget: "Vercel"
        };
        await build(config);
    }`}
               </div>
             </>
           )}
         </motion.div>
      </AnimatePresence>

      <div className="absolute inset-y-0 left-0 right-0 z-50 flex items-center justify-between px-4 pointer-events-none opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
        <button onClick={handlePrev} className="p-3 bg-black/50 border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all cursor-pointer text-white pointer-events-auto backdrop-blur-md">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={handleNext} className="p-3 bg-black/50 border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all cursor-pointer text-white pointer-events-auto backdrop-blur-md">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </GridItem>
  );
};

export default ProjectsSection;
