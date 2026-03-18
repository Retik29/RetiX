import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridItem from './GridItem';
import { ShieldCheck, FileBadge } from 'lucide-react';

const CERTIFICATES = [
  { course: "Oracle Gen AI Prof.", platform: "Oracle", date: "2024", color: "bg-[#FF0000]" },
  { course: "DSA", platform: "GeeksforGeeks", date: "2024", color: "bg-[#009A8D]" },
  { course: "Cloud Computing", platform: "NPTEL", date: "2023", color: "bg-blue-600" }
];

const CertificatesSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GridItem 
      className="col-span-1 md:col-span-1 row-span-1 overflow-visible relative group/certs"
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="flex items-center gap-2 mb-4 z-20">
        <ShieldCheck className="w-5 h-5 text-green-400" />
        <h3 className="text-xl font-bold">Certificates</h3>
      </div>
      
      <div className="relative w-full h-full flex items-center justify-center z-10 pt-8 pb-4">
        {CERTIFICATES.map((cert, i) => {

          return (
            <motion.div
              key={i}
              className="absolute w-full max-w-[200px] aspect-[4/3] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/20 p-4 flex flex-col justify-between overflow-hidden cursor-pointer"
              animate={{
                y: isHovered ? (i - 1) * -15 : i * 5,
                x: isHovered ? (i - 1) * 30 : i * 2,
                rotate: isHovered ? (i - 1) * 15 : i * 3,
                scale: isHovered && i === 1 ? 1.05 : 1,
                zIndex: CERTIFICATES.length - i
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Background solid color based on platform */}
              <div className={`absolute inset-0 opacity-80 backdrop-blur-md ${cert.color}`} />
              
              <div className="relative z-10 text-white">
                <FileBadge className="w-6 h-6 mb-2 opacity-80" />
                <h4 className="font-bold text-sm leading-tight text-shadow-md">{cert.course}</h4>
              </div>
              
              <div className="relative z-10 flex justify-between items-end">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black/30 px-2 py-1 rounded">{cert.platform}</span>
                <span className="text-[9px] font-mono opacity-80">{cert.date}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </GridItem>
  );
};

export default CertificatesSection;
