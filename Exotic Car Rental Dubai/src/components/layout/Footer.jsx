import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="neon-text">DESERT APEX</h2>
          <p className="tagline">The Ultimate Driving Experience in Dubai.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/fleet">Our Fleet</Link>
          <Link to="/about">About Us</Link>
          <Link to="/lifestyle">VIP Lifestyle</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><MapPin size={16} /> Dubai Marina, UAE</p>
          <p><Phone size={16} /> +971 50 123 4567</p>
          <p><Mail size={16} /> vip@desertapex.ae</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Desert Apex Exotic Rentals. All rights reserved.</p>
        <p>Highly Exclusive. Fully Insured.</p>
      </div>
    </footer>
  );
};

export default Footer;
