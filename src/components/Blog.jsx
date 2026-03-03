import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/portfolioData';
import { stagger, fadeUp } from '../constants/animations';

const Blog = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="section-label">Blog</span>
                        <h2>From my<br /><span className="accent">Blog Post</span></h2>
                    </div>
                </motion.div>

                <motion.div
                    className="blog-grid"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {blogPosts.map((post, i) => (
                        <motion.div className="blog-card" key={i} variants={fadeUp}>
                            <div className="blog-img-wrapper">
                                <img src={post.img} alt={post.title} />
                            </div>
                            <div className="blog-card-content">
                                <div className="blog-date">{post.date}</div>
                                <h3>{post.title}</h3>
                                <p>{post.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
