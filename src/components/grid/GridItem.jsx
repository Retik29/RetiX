import React from 'react';
import { motion } from 'framer-motion';

const GridItem = ({ className, children, onClick }) => {
  return (
    <motion.div
      layout
      className={`glass-card relative flex flex-col p-6 cursor-pointer ${className} group/item`}
      whileHover={{ scale: 1.02, zIndex: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onClick={onClick}
    >
      {children}
      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(255,255,255,0.05)] to-transparent opacity-0 group-hover/item:opacity-100 pointer-events-none transition-opacity duration-300" />
    </motion.div>
  );
};

export default GridItem;
