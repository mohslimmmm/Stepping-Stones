import React, { useEffect } from 'react';
import { PhoneCall, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
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

const formVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }
  }
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-hero-bg"></div>
      
      <div className="container contact-container">
        <motion.div 
          className="contact-info-col"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="contact-badge" variants={fadeInUp}>At Your Service</motion.div>
          <motion.h1 className="contact-title" variants={fadeInUp}>Connect with Our Concierge</motion.h1>
          <motion.p className="contact-subtitle" variants={fadeInUp}>
            Whether you are seeking the perfect cliffside villa or require a last-minute VIP reservation, our team is at your absolute disposal.
          </motion.p>
          
          <motion.div className="contact-methods" variants={staggerContainer}>
            <motion.div className="contact-method" variants={fadeInUp}>
              <div className="method-icon-wrapper">
                <PhoneCall size={22} className="method-icon" />
              </div>
              <div className="method-text">
                <h4>Direct Line (24/7)</h4>
                <a href="tel:+37712345678">+377 12 34 56 78</a>
              </div>
            </motion.div>
            
            <motion.div className="contact-method" variants={fadeInUp}>
              <div className="method-icon-wrapper">
                <Mail size={22} className="method-icon" />
              </div>
              <div className="method-text">
                <h4>Inquiries</h4>
                <a href="mailto:concierge@rivieraroyale.mc">concierge@rivieraroyale.mc</a>
              </div>
            </motion.div>
            
            <motion.div className="contact-method" variants={fadeInUp}>
              <div className="method-icon-wrapper">
                <MapPin size={22} className="method-icon" />
              </div>
              <div className="method-text">
                <h4>Headquarters</h4>
                <span>Avenue Princesse Grace, 98000 Monaco</span>
              </div>
            </motion.div>
            
            <motion.div className="contact-method" variants={fadeInUp}>
              <div className="method-icon-wrapper">
                <Clock size={22} className="method-icon" />
              </div>
              <div className="method-text">
                <h4>Availability</h4>
                <span>Global Concierge Desk: 24/7/365</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="contact-form-col"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <div className="vip-form-wrapper">
            <h2>VIP Inquiry Form</h2>
            <p>Please provide details of your prospective stay. A senior luxury specialist will respond within 2 hours.</p>
            
            <form className="vip-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" id="fullName" placeholder="Enter name" required />
                <label htmlFor="fullName">Full Name or Representative</label>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input type="email" id="email" placeholder="contact@domain.com" required />
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="form-group">
                  <input type="tel" id="phone" placeholder="+1..." />
                  <label htmlFor="phone">Phone Number (Optional)</label>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <select id="interest" defaultValue="" required>
                    <option value="" disabled hidden></option>
                    <option value="villa">Cliffside Villa</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="event">Event Space</option>
                    <option value="yacht">Yacht Charter</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  <label htmlFor="interest">Area of Interest</label>
                </div>
                <div className="form-group">
                  <input type="text" id="dates" placeholder="e.g., Late May (Grand Prix)" />
                  <label htmlFor="dates">Estimated Dates</label>
                </div>
              </div>
              
              <div className="form-group">
                <textarea id="requirements" rows="1" placeholder="Privacy requirements, staffing needs, dietary preferences..."></textarea>
                <label htmlFor="requirements">Specific Requirements & Preferences</label>
              </div>
              
              <button type="submit" className="custom-submit-btn">
                <span>Submit Confidential Inquiry</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
