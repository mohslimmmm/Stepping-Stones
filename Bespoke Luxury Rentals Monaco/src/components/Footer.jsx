import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, PhoneCall, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand-col">
            <h3 className="footer-brand-title">Riviera Royale</h3>
            <p className="footer-brand-desc">
              Bespoke luxury rentals tailored for the world's most discerning travelers. Experience Mediterranean elegance.
            </p>
            <div className="footer-trust-badge">
              <ShieldCheck size={20} className="badge-icon" />
              <span>Members of Elite Luxury Travel</span>
            </div>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-col-title">Explore</h4>
            <Link to="/discovery" className="footer-link">Property Discovery</Link>
            <Link to="/lifestyle" className="footer-link">Lifestyle Guide</Link>
            <Link to="/trust" className="footer-link">Trust & History</Link>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-col-title">VIP Concierge</h4>
            <a href="tel:+37712345678" className="footer-contact">
              <PhoneCall size={18} /> +377 12 34 56 78
            </a>
            <a href="mailto:concierge@rivieraroyale.mc" className="footer-contact">
              <Mail size={18} /> concierge@rivieraroyale.mc
            </a>
            <p className="footer-availability">Available 24/7 for our esteemed guests</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Riviera Royale Monaco. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
