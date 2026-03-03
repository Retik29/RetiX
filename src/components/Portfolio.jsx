import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects, filters } from '../data/portfolioData';
import { stagger, fadeUp } from '../constants/animations';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.filter === activeFilter);

    return (
        <section className="projects-section" id="portfolio">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="section-label">Portfolio</span>
                        <h2>Let's Have a Look at<br />my <span className="accent">Portfolio</span></h2>
                    </div>
                    <a href="#" className="btn-outline" style={{ fontSize: '13px', padding: '10px 24px' }}>
                        See All <ArrowUpRight size={14} />
                    </a>
                </motion.div>

                <div className="projects-filter">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <motion.div
                    className="projects-grid"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                className="project-card"
                                key={project.title}
                                variants={fadeUp}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="project-img-wrapper">
                                    <img src={project.img} alt={project.title} />
                                    <div className="project-overlay">
                                        <a href="#" className="project-link">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <div className="project-tag">{project.tag}</div>
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
