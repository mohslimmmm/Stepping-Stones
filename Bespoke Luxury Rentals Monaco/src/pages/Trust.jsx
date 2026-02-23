import React, { useEffect } from 'react';
import { ShieldCheck, Award, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import './Trust.css';

const TESTIMONIALS = [
  {
    quote: "Riviera Royale provided an unparalleled level of discretion and service. The villa exceeded all expectations, and the concierge preemptively handled every detail of our stay.",
    author: "Global Tech CEO",
    role: "Silicon Valley"
  },
  {
    quote: "Our family has used luxury agencies worldwide, but the attention to detail here is unmatched. Finding a private chef who perfectly accommodated our dietary needs on 24 hours' notice was remarkable.",
    author: "International Philanthropist",
    role: "London"
  },
  {
    quote: "The only agency I trust for Grand Prix week. They secured not just the perfect penthouse, but access to the most exclusive after-parties in the principality.",
    author: "F1 Enthusiast & Collector",
    role: "Dubai"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Trust = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="trust-page">
      <div className="trust-hero">
        <div className="trust-hero-bg"></div>
        <motion.div 
          className="trust-hero-content container"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="trust-hero-badge">Excellence Guaranteed</div>
          <h1 className="trust-title">Our Legacy of Trust</h1>
          <p className="trust-subtitle">For over two decades, we have been the trusted custodians of the Mediterranean's most significant properties, serving the world's most discerning individuals with unfaltering grace.</p>
        </motion.div>
      </div>

      <div className="trust-badges-section">
        <motion.div 
          className="container trust-badges-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="trust-badge-item" variants={fadeInUp}>
            <div className="badge-icon-wrapper">
              <ShieldCheck size={36} className="badge-icon" />
            </div>
            <h3>Elite Luxury Travel</h3>
            <p>Proud founding members of the international luxury travel consortium, adhering to impeccably strict standards of excellence.</p>
          </motion.div>
          <motion.div className="trust-badge-item" variants={fadeInUp}>
            <div className="badge-icon-wrapper">
              <Award size={36} className="badge-icon" />
            </div>
            <h3>Vetted Portfolio</h3>
            <p>Every property undergoes a rigorous 150-point quarterly inspection to ensure absolutely flawless standards are maintained.</p>
          </motion.div>
          <motion.div className="trust-badge-item" variants={fadeInUp}>
            <div className="badge-icon-wrapper">
              <Star size={36} className="badge-icon" />
            </div>
            <h3>Uncompromising Discretion</h3>
            <p>We guarantee absolute privacy. Comprehensive NDAs comprehensively cover all staff, contractors, and concierge partners.</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="testimonials-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Client Perspectives</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">While we fiercely protect our clients' identities, a select few have graciously consented to share their experiences anonymously.</p>
          </motion.div>
          
          <motion.div 
            className="testimonials-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div key={idx} className="testimonial-card" variants={fadeInUp}>
                <Quote size={48} className="quote-icon-bg" />
                <div className="testimonial-content">
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <div className="author-line"></div>
                    <div>
                      <h4>{testimonial.author}</h4>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
