import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/portfolioData';
import { stagger, fadeUp } from '../constants/animations';

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="section-label">Services</span>
                        <h2>My <span className="accent">Services</span></h2>
                    </div>
                    <p>
                        I focus on all areas of web design and development to bring
                        your ideas to life with clean, modern solutions.
                    </p>
                </motion.div>

                <motion.div
                    className="services-grid"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <motion.div className="service-card" key={i} variants={fadeUp}>
                                <div className="service-icon">
                                    <Icon size={24} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
