import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import './App.css';
import SnapCursor from './components/SnapCursor';

import HeroSection from './components/grid/HeroSection';
import SocialSection from './components/grid/SocialSection';
import AboutSection from './components/grid/AboutSection';
import SkillsSection from './components/grid/SkillsSection';
import ProjectsSection from './components/grid/ProjectsSection';
import ResumeSection from './components/grid/ResumeSection';
import EducationSection from './components/grid/EducationSection';
import CertificatesSection from './components/grid/CertificatesSection';
import ContactSection from './components/grid/ContactSection';

const App = () => {
  const [easterEgg, setEasterEgg] = useState(false);
  const [keys, setKeys] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys((prev) => {
        const newKeys = (prev + e.key).slice(-5);
        if (newKeys.toLowerCase() === 'hello') {
          setEasterEgg(true);
          setTimeout(() => setEasterEgg(false), 3000);
        }
        return newKeys;
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen text-white relative selection:bg-white/20 selection:text-white cursor-none">
      <SnapCursor />
      
      {easterEgg && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-md">
          <motion.h1 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            className="text-6xl font-black text-white tracking-tighter"
          >
            HELLO THERE! ✨
          </motion.h1>
        </div>
      )}

      <header className="w-full border-b border-[var(--color-border)] relative flex justify-center bg-hatch">
        <div className="max-w-[1400px] w-full px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between border-x border-[var(--color-border)] relative bg-[var(--color-bg-base)] z-20">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-[var(--color-text-primary)]" />
             <span className="text-[10px] uppercase font-mono tracking-[0.3em] font-bold text-[var(--color-text-primary)]">RETIK.SYSTEMS</span>
          </div>
          
          <div className="flex items-center gap-4 z-50">
             <a
               href="/RetikYadav-12322762.pdf"
               download
               className="flex items-center gap-2 px-4 py-1.5 border border-[var(--color-border)] text-[9px] font-mono tracking-widest uppercase hover:bg-[var(--color-bg-elevated)] transition-colors cursor-pointer text-[var(--color-text-primary)] font-bold group"
             >
               <span>RESUME</span>
               <FileDown className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
             </a>
          </div>

          <span className="absolute -bottom-2.5 left-8 text-[10px] font-mono text-[var(--color-text-muted)] bg-[var(--color-bg-base)] px-2 z-10">&lt;Document.Root /&gt;</span>
        </div>
      </header>

      <main className="w-full relative flex justify-center border-b border-[var(--color-border)] bg-hatch">
        <div className="absolute inset-x-0 top-1/2 h-px bg-[var(--color-border)] opacity-20 pointer-events-none" />
        <div className="absolute inset-x-0 top-[25%] h-px bg-[var(--color-border)] opacity-20 pointer-events-none" />
        <div className="absolute inset-x-0 top-[75%] h-px bg-[var(--color-border)] opacity-20 pointer-events-none" />

        <div className="max-w-[1400px] w-full p-4 md:p-8 lg:p-12 min-h-screen border-x border-[var(--color-border)] relative bg-[var(--color-bg-base)]">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-auto md:auto-rows-[220px] gap-0 border-l border-t border-[var(--color-border)] z-10 relative shadow-2xl">
            
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <EducationSection />
            <SocialSection />
            <CertificatesSection />
            <ResumeSection />
            <ContactSection />
            
          </div>
        </div>
      </main>

      <footer className="w-full relative flex justify-center bg-hatch">
        <div className="max-w-[1400px] w-full px-4 md:px-8 lg:px-12 h-24 flex items-center justify-between border-x border-[var(--color-border)] relative bg-[var(--color-bg-base)]">
          <span className="absolute -top-2.5 right-8 text-[10px] font-mono text-[var(--color-text-muted)] bg-[var(--color-bg-base)] px-2 z-10">&lt;/Document.Root&gt;</span>
          <div className="flex flex-col gap-1">
            <p className="text-[9px] font-mono text-[var(--color-text-muted)] tracking-widest uppercase">COORD: 23.5204° N, 87.3119° E</p>
            <p className="text-[9px] font-mono text-[var(--color-text-muted)] tracking-widest uppercase">© 2026 RETIK YADAV · ALL RIGHTS RESERVED</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-[9px] font-mono text-[var(--color-text-muted)] tracking-widest uppercase">TERMINAL.V1.4.2</p>
            <p className="text-[9px] font-mono text-white tracking-widest uppercase font-bold text-shadow-glow">BUILT WITH PRECISION</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
