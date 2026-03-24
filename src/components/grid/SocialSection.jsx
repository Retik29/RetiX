import React from 'react';
import { motion } from 'framer-motion';
import GridItem from './GridItem';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

const SocialLink = ({ href, icon: Icon }) => {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl relative group hover:bg-white/5 transition-colors overflow-hidden"
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-colors z-10" />
      <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full z-0 pointer-events-none" />
    </motion.a>
  );
};

const SocialSection = () => {
  return (
    <GridItem className="col-span-1 sm:col-span-2 md:col-span-2 row-span-1 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#666]">SOCIAL.LINKS</h2>
      </div>
      
      <div className="grid grid-cols-4 gap-2 h-full">
        <SocialLink href={personalData.github} icon={Github} />
        <SocialLink href={personalData.linkedin} icon={Linkedin} />
        <SocialLink href={`mailto:${personalData.email}`} icon={Mail} />
        <SocialLink href="https://codolio.com/profile/diedilemma" icon={Globe} />
      </div>
    </GridItem>
  );
};

export default SocialSection;
