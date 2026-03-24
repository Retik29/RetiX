import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridItem from './GridItem';
import { X, ExternalLink } from 'lucide-react';
import { certificatesData as CERTIFICATES } from '../../data/portfolioData';

const CertificatesSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  useEffect(() => {
    if (isPreviewOpen) return;
    const timer = setInterval(() => {
      setCurrentCertIndex(prev => (prev + 1) % CERTIFICATES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPreviewOpen]);

  const activeCertDisplay = CERTIFICATES[currentCertIndex];
  const activeCert = CERTIFICATES[activeIndex];

  return (
    <>
      <GridItem className="col-span-1 row-span-1 flex flex-col justify-between overflow-hidden relative group/cert">
        <div className="flex justify-between items-start relative z-10">
          <h2 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#666]">CERTIFICATES</h2>
        </div>

        <div className="mt-4 relative z-10 w-full flex-1" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentCertIndex}
              initial={{ rotateY: 100, opacity: 0, originX: 0, originY: 1, scale: 0.95, skewY: 5, z: -50 }}
              animate={{ rotateY: 0, opacity: 1, originX: 0, originY: 0, scale: 1, skewY: 0, z: 0 }}
              exit={{ rotateY: -110, opacity: 0, originX: 0, originY: 0, scale: 0.95, skewY: -5, z: 50 }}
              transition={{ type: "tween", duration: 1.5, ease: [0.25, 0.8, 0.25, 1] }}
              style={{ backfaceVisibility: 'hidden' }}
              className="absolute inset-0 p-5 border border-[var(--color-border)] rounded-sm shadow-[2px_4px_16px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex flex-col justify-end group hover:border-[#0A84FF]/50 transition-colors cursor-pointer before:absolute before:inset-y-0 before:left-0 before:w-4 before:bg-gradient-to-r before:from-black/40 before:to-transparent"
              onClick={(e) => { e.stopPropagation(); setActiveIndex(currentCertIndex); setIsPreviewOpen(true); }}
            >
              <h4 className="text-[9px] uppercase font-mono tracking-widest text-[#0A84FF] mb-2 drop-shadow-md">{activeCertDisplay.platform}</h4>
              <div className="flex justify-between items-end relative z-10">
                <h3 className="text-sm font-medium text-gray-200 leading-tight drop-shadow-md">{activeCertDisplay.course}</h3>
              </div>
            </motion.div>
          </AnimatePresence>
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
                    <h3 className="font-bold text-white text-lg tracking-tight">{activeCert.course}</h3>
                    <p className="text-[10px] font-mono text-[#666] uppercase tracking-widest">{activeCert.platform}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={activeCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-[10px] font-mono uppercase tracking-widest font-bold rounded hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify
                  </a>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-1 w-full bg-[#111] relative overflow-hidden">
                <div className="w-56 md:w-64 border-r border-white/10 bg-black/50 p-4 flex flex-col gap-2 overflow-y-auto no-scrollbar">
                   {CERTIFICATES.map((cert, index) => (
                      <button 
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`text-left p-3 rounded border transition-colors cursor-pointer ${activeIndex === index ? 'bg-white/10 border-white/20' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                      >
                         <h4 className="text-[9px] uppercase font-mono tracking-widest text-[#888] mb-1">{cert.platform}</h4>
                         <h3 className={`text-xs font-medium line-clamp-2 ${activeIndex === index ? 'text-[#fff]' : 'text-[#aaa]'}`}>{cert.course}</h3>
                      </button>
                   ))}
                </div>
                
                <div className="flex-1 relative bg-[#0a0a0a]">
                  <iframe 
                    src={`${activeCert.pdf}#view=Fit`} 
                    className="w-full h-full border-none"
                    title="Certificate Preview"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificatesSection;
