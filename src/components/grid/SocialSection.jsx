import React from 'react';
import { motion } from 'framer-motion';
import GridItem from './GridItem';
import { Github, Linkedin, Mail, Globe, ArrowUpRight } from 'lucide-react';

const SocialLink = ({ href, icon: Icon, label }) => {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl relative group hover:bg-white/5 transition-colors overflow-hidden"
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-8 h-8 text-gray-400 group-hover:text-[#009A8D] transition-colors z-10" />
      <span className="text-[10px] mt-2 font-mono text-gray-500 group-hover:text-white uppercase tracking-wider">{label}</span>
      
      {/* Ripple/Glow on hover */}
      <div className="absolute inset-0 bg-[#009A8D]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full z-0 pointer-events-none" />
    </motion.a>
  );
};

const SocialSection = () => {
  return (
    <GridItem className="col-span-1 md:col-span-1 row-span-1 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold">Connect</h3>
        <ArrowUpRight className="w-5 h-5 text-gray-500" />
      </div>
      
      <div className="grid grid-cols-2 gap-2 h-full">
        <SocialLink href="https://github.com/Retik29" icon={Github} label="GitHub" />
        <SocialLink href="http://www.linkedin.com/in/retik-yadav" icon={Linkedin} label="LinkedIn" />
        <SocialLink href="mailto:retiknyadav614@gmail.com" icon={Mail} label="Email" />
        <SocialLink href="https://codolio.com/profile/diedilemma" icon={Globe} label="Codolio" />
      </div>
    </GridItem>
  );
};

export default SocialSection;
