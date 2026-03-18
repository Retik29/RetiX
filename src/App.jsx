import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// We will import grid sections here
import HeroSection from './components/grid/HeroSection';
import SocialSection from './components/grid/SocialSection';
import AboutSection from './components/grid/AboutSection';
import SkillsSection from './components/grid/SkillsSection';
import ProjectsSection from './components/grid/ProjectsSection';
import ResumeSection from './components/grid/ResumeSection';
import EducationSection from './components/grid/EducationSection';
import ExperienceSection from './components/grid/ExperienceSection';
import AchievementSection from './components/grid/AchievementSection';
import CertificatesSection from './components/grid/CertificatesSection';
import CPSection from './components/grid/CPSection';
import ContactSection from './components/grid/ContactSection';
import LiveActivitySection from './components/grid/LiveActivitySection';


const App = () => {
  const [easterEgg, setEasterEgg] = useState(false);
  const [keys, setKeys] = useState('');

  // Easter Egg logic
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
    <div className="min-h-screen text-white relative selection:bg-teal-500/30 selection:text-white">
      
      {/* Easter Egg Overlay */}
      {easterEgg && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-md">
          <motion.h1 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            className="text-6xl font-black text-[#009A8D] tracking-tighter"
          >
            HELLO THERE! ✨
          </motion.h1>
        </div>
      )}

      {/* Main Grid Container */}
      <main className="max-w-[1400px] mx-auto p-4 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-6 grid-flow-row-dense">
          
          <HeroSection />
          <SocialSection />
          <AboutSection />
          <LiveActivitySection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <AchievementSection />
          <CertificatesSection />
          <CPSection />
          <ResumeSection />
          <ContactSection />
          
        </div>
      </main>
    </div>
  );
};

export default App;

