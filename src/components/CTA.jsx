import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Why You <span className="italic">Hire Me</span> for<br />
                        Your Next Projects?
                    </h2>
                    <p>
                        Delivering pixel-perfect, performant web solutions with a keen eye
                        for design and commitment to quality code.
                    </p>
                    <div className="cta-stats-row">
                        <div className="cta-stat">
                            <div className="cta-number">800+</div>
                            <div className="cta-label">Hours Coding</div>
                        </div>
                        <div className="cta-stat">
                            <div className="cta-number">98%</div>
                            <div className="cta-label">Satisfaction</div>
                        </div>
                        <div className="cta-stat">
                            <div className="cta-number">24/7</div>
                            <div className="cta-label">Support</div>
                        </div>
                    </div>
                    <button className="btn-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Hire Me <ArrowRight size={16} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
