import React from 'react';
import { Sun, Moon, ArrowRight } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <header className="navbar container">
            <div className="logo">RetiX</div>
            <nav>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Works</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="header-actions">
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Let's Talk <ArrowRight size={16} />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
