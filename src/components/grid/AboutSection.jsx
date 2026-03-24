import React from 'react';
import GridItem from './GridItem';
import { personalData } from '../../data/portfolioData';

const AboutSection = () => {
  return (
    <GridItem className="col-span-1 sm:col-span-2 md:col-span-2 row-span-1 flex flex-col justify-between">
      <div>
        <h2 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#666] mb-8">ABOUT.ME</h2>
      </div>
      
      <div className="relative z-10">
        <p className="text-[var(--color-text-secondary)] font-light max-w-2xl text-sm leading-relaxed mb-6">
          {personalData.about}
        </p>
        
        <div className="flex flex-wrap gap-2 text-[9px] font-mono text-[#888] tracking-widest uppercase">
          <div className="px-3 py-1.5 border border-[var(--color-border)] rounded-sm hover:text-white transition-colors">MERN STACK</div>
          <div className="px-3 py-1.5 border border-[var(--color-border)] rounded-sm hover:text-white transition-colors">ARCHITECTURE</div>
          <div className="px-3 py-1.5 border border-[var(--color-border)] rounded-sm hover:text-white transition-colors">SYSTEM DESIGN</div>
        </div>
      </div>
    </GridItem>
  );
};

export default AboutSection;
