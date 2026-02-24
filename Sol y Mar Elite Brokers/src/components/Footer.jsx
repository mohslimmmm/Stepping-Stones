import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>Sol y Mar Elite Brokers</h3>
          <p className="footer-tagline">15 Years Curating the Marbella Dream</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/discovery">Featured Villas</Link></li>
            <li><Link to="/lifestyle">Relocating to Costa del Sol</Link></li>
            <li><Link to="/lifestyle">Marbella Beach Clubs</Link></li>
            <li><Link to="/about">Our Team</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><MapPin size={16} /> Bulevar Príncipe Alfonso von Hohenlohe, Marbella</li>
            <li><Phone size={16} /> +34 952 000 000</li>
            <li><Mail size={16} /> luxury@solymarbrokers.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} Sol y Mar Elite Brokers. All rights reserved.</p>
          <div className="bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/admin" className="agent-login">Agent Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
