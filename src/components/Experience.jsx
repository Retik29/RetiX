import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import { stagger, fadeUp } from '../constants/animations';

const Experience = () => {
    return (
        <section className="experience-section" id="experience">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="section-label">Experience</span>
                        <h2>My Work <span className="accent">Experience</span></h2>
                    </div>
                </motion.div>

                <motion.div
                    className="experience-grid"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {experiences.map((exp, i) => (
                        <motion.div className="experience-card" key={i} variants={fadeUp}>
                            <div className="exp-marker">
                                <div className="exp-dot"></div>
                                <div className="exp-line"></div>
                            </div>
                            <div className="exp-content">
                                <h3>{exp.role}</h3>
                                <div className="exp-company">{exp.company}</div>
                                <div className="exp-date">{exp.date}</div>
                                <p className="exp-desc">{exp.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
