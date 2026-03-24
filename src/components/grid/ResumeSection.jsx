import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridItem from './GridItem';
import { FileDown, X } from 'lucide-react';
import { resumeData } from '../../data/portfolioData';

const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <GridItem 
        className="col-span-1 row-span-1 flex flex-col items-center justify-center relative overflow-hidden group/resume"
      >
        <div className="text-center z-10 w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#666] mb-4">RESUME</h2>
          <h3 className="text-xl font-light tracking-tight text-white group-hover/resume:text-[var(--color-text-secondary)] transition-colors">Résumé & CV</h3>
          
          <button 
             className="mt-6 px-4 py-2 text-[10px] font-mono border border-[var(--color-border)] rounded hover:bg-white/5 transition-colors text-white uppercase tracking-widest flex items-center gap-2 cursor-pointer"
             onClick={(e) => { e.stopPropagation(); setIsPreviewOpen(true); }}
          >
            Open →
          </button>
        </div>
      </GridItem>

      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
            onClick={() => setIsPreviewOpen(false)}
          >
             <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-zinc-900 border border-white/10 w-full max-w-5xl h-[85vh] rounded-xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-black/40 shadow-sm z-10">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="font-bold text-white text-lg tracking-tight">Curriculum Vitae</h3>
                    <p className="text-[10px] font-mono text-[#666] uppercase tracking-widest">Retik Yadav</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={resumeData.pdf}
                    download
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-[10px] font-mono uppercase tracking-widest font-bold rounded hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <FileDown className="w-4 h-4" />
                    Download
                  </a>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 w-full bg-black relative">
                <iframe 
                  src={resumeData.pdf} 
                  className="w-full h-full border-none"
                  title="Resume Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeSection;
