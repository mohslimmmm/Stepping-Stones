import React, { useEffect } from 'react';
import { PhoneCall, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <div className="container contact-container">
        <div className="contact-info-col">
          <h1 className="contact-title">Connect with Our Concierge</h1>
          <p className="contact-subtitle">
            Whether you are seeking the perfect cliffside villa or require a last-minute VIP reservation, our team is at your absolute disposal.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <PhoneCall size={24} className="method-icon" />
              <div>
                <h4>Direct Line (24/7)</h4>
                <a href="tel:+37712345678">+377 12 34 56 78</a>
              </div>
            </div>
            
            <div className="contact-method">
              <Mail size={24} className="method-icon" />
              <div>
                <h4>Inquiries</h4>
                <a href="mailto:concierge@rivieraroyale.mc">concierge@rivieraroyale.mc</a>
              </div>
            </div>
            
            <div className="contact-method">
              <MapPin size={24} className="method-icon" />
              <div>
                <h4>Headquarters</h4>
                <span>Avenue Princesse Grace, 98000 Monaco</span>
              </div>
            </div>
            
            <div className="contact-method">
              <Clock size={24} className="method-icon" />
              <div>
                <h4>Availability</h4>
                <span>Global Concierge Desk: 24/7/365</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-col">
          <div className="vip-form-wrapper">
            <h2>VIP Inquiry Form</h2>
            <p>Please provide details of your prospective stay. A senior luxury specialist will respond within 2 hours.</p>
            
            <form className="vip-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name or Representative</label>
                <input type="text" placeholder="Enter name" />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="contact@domain.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number (Optional)</label>
                  <input type="tel" placeholder="+1..." />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Interest</label>
                  <select defaultValue="villa">
                    <option value="villa">Cliffside Villa</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="event">Event Space</option>
                    <option value="yacht">Yacht Charter</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Estimated Dates</label>
                  <input type="text" placeholder="e.g., Late May (Grand Prix)" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Specific Requirements & Preferences</label>
                <textarea rows="5" placeholder="Privacy requirements, staffing needs, dietary preferences..."></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">Submit Confidential Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
