import React from 'react';
import { motion } from 'framer-motion';

const GridItem = ({ className, children, onClick }) => {
    return (
    <motion.div
      className={`snap-target relative flex flex-col p-6 cursor-pointer border-r border-b border-[var(--color-border)] bg-[var(--color-bg-base)] transition-colors duration-500 overflow-hidden ${className} group/item`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default GridItem;
