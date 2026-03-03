import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/portfolioData';
import { stagger, fadeUp } from '../constants/animations';

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="section-label">Testimonials</span>
                        <h2>Testimonials that<br />Speak to <span className="accent">My Results</span></h2>
                    </div>
                </motion.div>

                <motion.div
                    className="testimonials-grid"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {testimonials.map((t, i) => (
                        <motion.div className="testimonial-card" key={i} variants={fadeUp}>
                            <Quote size={32} className="quote-icon" />
                            <p>"{t.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{t.initials}</div>
                                <div className="author-info">
                                    <h4>{t.name}</h4>
                                    <span>{t.title}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
