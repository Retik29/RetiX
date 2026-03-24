import React from 'react';
import GridItem from './GridItem';
import { educationData as EDUCATION } from '../../data/portfolioData';

const EducationSection = () => {
  return (
    <GridItem className="col-span-1 sm:col-span-2 md:col-span-2 row-span-1 flex flex-col justify-between overflow-hidden p-0">
      <div className="p-6 pb-4 flex justify-between items-start">
        <h2 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#666]">EDUCATION</h2>
      </div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-border)] border-t border-[var(--color-border)]">
        <div className="bg-[var(--color-bg-base)] p-6 flex flex-col justify-end group hover:bg-[var(--color-bg-elevated)] transition-colors relative overflow-hidden">
          <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-[#0A84FF] rounded-full shadow-[0_0_8px_#0A84FF]" />
          <h4 className="text-[9px] uppercase font-mono tracking-widest text-[#666] mb-2">{EDUCATION[0].year}</h4>
          <h3 className="text-sm font-medium text-[var(--color-text-primary)] leading-tight">{EDUCATION[0].degree}</h3>
          <p className="text-[10px] font-mono text-[#888] uppercase tracking-wider mt-2">{EDUCATION[0].school.split(' ')[0]} {EDUCATION[0].school.split(' ')[1]}</p>
        </div>

        <div className="bg-[var(--color-bg-base)] p-6 flex flex-col justify-end group hover:bg-[var(--color-bg-elevated)] transition-colors">
          <h4 className="text-[9px] uppercase font-mono tracking-widest text-[#666] mb-2">{EDUCATION[1].year}</h4>
          <h3 className="text-sm font-medium text-[var(--color-text-primary)] leading-tight">{EDUCATION[1].degree}</h3>
          <p className="text-[10px] font-mono text-[#888] uppercase tracking-wider mt-2">{EDUCATION[1].school.split(' ')[0]} {EDUCATION[1].school.split(' ')[1]}</p>
        </div>
      </div>
    </GridItem>
  );
};

export default EducationSection;
