import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { stagger, fadeUp, scaleIn } from '../constants/animations';

const Hero = () => {
    return (
        <section className="hero-section container" id="home">
            <motion.div
                className="hero-grid"
                variants={stagger}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="hero-text-block" variants={fadeUp}>
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Hello!
                    </div>
                    <h1 className="hero-title">
                        I'm <span className="accent">Retik,</span>
                    </h1>
                    <h2 className="hero-subtitle">Web Developer</h2>
                    <p className="hero-description">
                        I craft beautiful, high-performance web applications and digital
                        experiences that leave a lasting impression.
                    </p>
                    <div className="hero-stats-row">
                        <div className="hero-stat">
                            <div className="stat-number">10<span className="accent">+</span></div>
                            <div className="stat-label">Projects</div>
                        </div>
                        <div className="hero-stat">
                            <div className="stat-number">125<span className="accent">+</span></div>
                            <div className="stat-label">Contributions</div>
                        </div>
                        <div className="hero-stat">
                            <div className="stat-number">1<span className="accent">+</span></div>
                            <div className="stat-label">Years Exp</div>
                        </div>
                    </div>
                    <div className="hero-buttons">
                        <button className="btn-primary">
                            Portfolio <ArrowRight size={16} />
                        </button>
                        <button className="btn-outline">
                            Hire Me
                        </button>
                    </div>
                </motion.div>

                <motion.div className="hero-image-block" variants={scaleIn}>
                    <div className="hero-img-container">
                        <img src="My_Photo.jpg" alt="Retik Kumar Yadav" />
                    </div>
                    <motion.div
                        className="hero-float-badge"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        <div className="float-number">10+</div>
                        <div className="float-label">Projects</div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
