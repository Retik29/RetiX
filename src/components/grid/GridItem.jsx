import React from 'react';
import { motion } from 'framer-motion';

const GridItem = ({ className, children, onClick }) => {
  return (
    <motion.div
      className={`snap-target relative flex flex-col p-6 cursor-pointer border-r border-b border-[var(--color-border)] bg-[var(--color-bg-base)] transition-colors duration-300 overflow-hidden ${className} group/item`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02, 
        zIndex: 50,
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );
};

export default GridItem;
