import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="logo">RetiX</div>
                    <nav>
                        <a href="#home">Home</a>
                        <a href="#services">Services</a>
                        <a href="#portfolio">Works</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">© 2026 RetiX. All rights reserved by Retik29</p>
                    <div className="footer-socials">
                        <a href="https://github.com/Retik29" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                            <Github size={16} />
                        </a>
                        <a href="#" className="footer-social-link" aria-label="LinkedIn">
                            <Linkedin size={16} />
                        </a>
                        <a href="#" className="footer-social-link" aria-label="Twitter">
                            <Twitter size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
