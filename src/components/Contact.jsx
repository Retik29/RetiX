import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section className="connect-section" id="contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="section-label">Contact</span>
                        <h2>Let's <span className="accent">Connect</span> Here</h2>
                    </div>
                </motion.div>

                <motion.div
                    className="connect-grid"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="connect-text">
                        <h2>Have An Awesome Project<br />Idea? <span className="accent">Let's Discuss</span></h2>
                        <p>
                            Whether you need a website, web application, or digital product,
                            I'm here to help bring your vision to life with clean code and
                            stunning design.
                        </p>
                        <div className="social-links">
                            <a href="https://github.com/Retik29" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/retik-yadav/" className="social-link" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://x.com/RetikYadav205" className="social-link" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://instagram.com/ritixig" className="social-link" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="mailto:rk@example.com" className="social-link" aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <form className="connect-form" onSubmit={e => e.preventDefault()}>
                        <div className="form-row">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="form-row">
                            <input type="email" placeholder="Email Address" />
                            <input type="tel" placeholder="Phone Number" />
                        </div>
                        <textarea placeholder="Your Message"></textarea>
                        <button className="btn-primary" type="submit" style={{ alignSelf: 'flex-start' }}>
                            Send Message <Send size={16} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
