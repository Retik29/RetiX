import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridItem from './GridItem';
import { FileDown, FileText, Eye, X } from 'lucide-react';

const ResumeSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <GridItem 
        className="col-span-1 md:col-span-1 row-span-1 flex flex-col items-center justify-center relative overflow-hidden group/resume"
        onClick={() => !isPreviewOpen && setIsExpanded(!isExpanded)}
      >
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none group-hover/resume:scale-125 transition-transform duration-700">
        <FileText className="w-48 h-48" />
      </div>

      <motion.div 
        className="text-center z-10"
        animate={{ y: isExpanded ? -20 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-1">Resume</h3>
        <p className="text-sm text-gray-400">PDF, 150KB</p>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-6 z-20 flex gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); setIsPreviewOpen(true); }}
              className="px-4 py-2 bg-[#2A2A2A] text-white font-medium rounded-full flex items-center gap-2 hover:bg-[#3A3A3A] transition-colors cursor-pointer border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-4 h-4" />
              Preview
            </motion.button>
            <motion.a
              href="/RetikYadav-12322762.pdf"
              download
              className="px-4 py-2 bg-white text-black font-medium rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDown className="w-4 h-4" />
              Download
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 border-[2px] border-white/20 opacity-0 group-hover/resume:opacity-100 scale-95 group-hover/resume:scale-100 transition-all duration-500 rounded-2xl pointer-events-none" />
      </GridItem>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#F9FAFB] w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-gray-200 bg-white shadow-sm z-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-100 rounded-xl border border-gray-200">
                    <FileText className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Resume</h3>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">RETIK</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="/RetikYadav-12322762.pdf"
                    download
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-sm cursor-pointer"
                  >
                    <FileDown className="w-4 h-4" />
                    Download
                  </a>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              {/* Modal Body / iFrame */}
              <div className="flex-1 w-full bg-white relative">
                <iframe 
                  src="/RetikYadav-12322762.pdf" 
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
