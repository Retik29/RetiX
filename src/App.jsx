import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import CTA from './components/CTA';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Marquee from './components/Marquee';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`portfolio-bg ${theme}-theme`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <Experience />
        <CTA />
        <Portfolio />
        <Testimonials />
        <Marquee />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
