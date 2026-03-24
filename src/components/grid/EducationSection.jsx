import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridItem from './GridItem';
import { educationData as EDUCATION } from '../../data/portfolioData';
import { X, Calendar, MapPin, GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Only auto-play if the modal is not open
    if (isModalOpen) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % EDUCATION.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isModalOpen]);

  return (
    <>
      <GridItem 
        className="col-span-1 sm:col-span-2 md:col-span-2 row-span-1 flex flex-col justify-between overflow-hidden p-0 relative group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-6 pb-4 flex justify-between items-start z-10 relative">
          <div className="flex items-center gap-2">
            <h2 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#666]">EDUCATION</h2>
          </div>
          
          {/* Timeline indicators */}
          <div className="flex gap-2 relative z-20" onClick={(e) => e.stopPropagation()}>
            {EDUCATION.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-4 bg-[#0A84FF] shadow-[0_0_8px_#0A84FF]' : 'w-1.5 bg-[#444] hover:bg-[#666]'
                }`}
                aria-label={`Show education ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 relative overflow-hidden bg-[var(--color-bg-base)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-[var(--color-bg-elevated)] to-transparent"
            >
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-[#0A84FF] font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {EDUCATION[currentIndex].year}
                  </h4>
                  {/* Ongoing Indicator for Slideshow */}
                  {EDUCATION[currentIndex].year.toLowerCase().includes('present') && (
                    <div className="relative flex items-center justify-center w-2 h-2 ml-1" title="Ongoing">
                      <span className="absolute inline-flex w-full h-full bg-emerald-400 rounded-full animate-ping opacity-75"></span>
                      <span className="relative inline-flex w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_4px_#10b981]"></span>
                    </div>
                  )}
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-[var(--color-text-primary)] bg-[var(--color-bg-base)] px-2 py-1 rounded border border-[var(--color-border)] shadow-sm">
                  {EDUCATION[currentIndex].score}
                </span>
              </div>

              <h3 className="text-sm sm:text-base md:text-lg font-medium text-[var(--color-text-primary)] leading-tight mb-2">
                {EDUCATION[currentIndex].degree}
              </h3>
              
              <p className="text-[11px] sm:text-xs font-mono text-gray-300 uppercase tracking-wider line-clamp-1">
                {EDUCATION[currentIndex].school}
              </p>
              <p className="text-[10px] sm:text-[11px] font-mono text-[#888] uppercase tracking-wider mt-1.5 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#0A84FF]" />
                {EDUCATION[currentIndex].location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </GridItem>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-zinc-950 border border-white/10 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/40 shadow-sm z-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A84FF] via-purple-500 to-[#0A84FF]" />
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#0A84FF]/20 rounded-lg text-[#0A84FF]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg tracking-tight">Academic Timeline</h3>
                    <p className="text-[10px] font-mono text-[#666] uppercase tracking-widest mt-0.5">Education Journey</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Calendar Timeline Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                <div className="max-w-xl mx-auto space-y-2">
                  {EDUCATION.map((item, idx) => (
                    <div key={idx} className="flex gap-4 sm:gap-6 relative group">
                      
                      {/* Timeline line connection */}
                      {idx !== EDUCATION.length - 1 && (
                        <div className="absolute left-[1.35rem] sm:left-[1.85rem] top-14 bottom-[-1rem] w-px bg-white/10 group-hover:bg-[#0A84FF]/50 transition-colors z-0" />
                      )}

                      {/* Calendar Event Box */}
                      <div className="relative z-10 flex flex-col items-center justify-center w-11 h-12 sm:w-14 sm:h-16 bg-zinc-900 border border-white/10 rounded-lg shadow-md shrink-0 overflow-hidden transform group-hover:scale-105 group-hover:border-[#0A84FF]/30 transition-all">
                        <div className="w-full bg-[#0A84FF] h-3 sm:h-4 text-[6px] sm:text-[8px] font-mono font-bold text-white flex items-center justify-center tracking-widest uppercase">
                          {item.year.split(' ')[0]}
                        </div>
                        <div className="flex-1 flex items-center justify-center bg-zinc-950 w-full">
                          <span className="text-xs sm:text-base font-bold text-white leading-none">
                            {item.year.split(' ')[1] ? item.year.split(' ')[1].replace(/['–]/g, '') : item.year.split('-')[0].trim()}
                          </span>
                        </div>
                      </div>

                      {/* Educational Details Card */}
                      <div className="flex-1 pb-8 sm:pb-10">
                        <div className="bg-zinc-900/50 p-4 sm:p-5 rounded-xl border border-white/5 group-hover:border-[#0A84FF]/20 group-hover:bg-zinc-900 transition-colors shadow-sm relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A84FF]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                          
                          <div className="relative z-10">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-sm sm:text-base font-bold text-white leading-tight">{item.degree}</h3>
                                {/* Modal Ongoing Indicator */}
                                {item.year.toLowerCase().includes('present') && (
                                  <div className="relative flex items-center justify-center w-2.5 h-2.5 ml-1 mt-0.5" title="Ongoing">
                                    <span className="absolute inline-flex w-full h-full bg-emerald-400 rounded-full animate-ping opacity-75"></span>
                                    <span className="relative inline-flex w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_6px_#10b981]"></span>
                                  </div>
                                )}
                              </div>
                              <span className="text-[10px] font-mono whitespace-nowrap text-[#0A84FF] bg-[#0A84FF]/10 px-2 py-1 rounded inline-flex w-fit">
                                {item.score}
                              </span>
                            </div>
                            
                            <p className="text-xs sm:text-sm text-gray-300 font-mono uppercase tracking-widest mb-2 leading-relaxed">
                              {item.school}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
                              <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono bg-white/5 w-fit px-2 py-1 rounded">
                                <Calendar className="w-3 h-3 text-gray-500" />
                                {item.year}
                              </div>
                              <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono bg-white/5 w-fit px-2 py-1 rounded">
                                <MapPin className="w-3 h-3 text-gray-500" />
                                {item.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EducationSection;
