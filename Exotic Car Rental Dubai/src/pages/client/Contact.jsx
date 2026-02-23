import React from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1 className="neon-text">VIP CONCIERGE</h1>
        <p>Our dedicated team is ready to orchestrate your perfect driving experience.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info-section">
          <h2>Get In Touch</h2>
          <p className="text-muted mb-8">Whether you have a specific vehicle in mind or require itinerary planning, our concierges are available 24/7.</p>
          
          <div className="info-cards">
            <div className="info-card aerodynamic-card">
              <Phone className="neon-text mb-4" size={32} />
              <h3>Direct Line</h3>
              <p>+971 50 123 4567</p>
              <button className="btn-whatsapp mt-4 w-full">Chat on WhatsApp</button>
            </div>
            
            <div className="info-card aerodynamic-card">
              <Mail className="neon-text mb-4" size={32} />
              <h3>Concierge Desk</h3>
              <p>vip@desertapex.ae</p>
              <p className="text-sm text-muted mt-2">Response time: &lt; 15 minutes</p>
            </div>

            <div className="info-card aerodynamic-card">
              <Clock className="neon-text mb-4" size={32} />
              <h3>Operating Hours</h3>
              <p>Open 24/7</p>
              <p className="text-sm text-muted mt-2">For VIP Clients</p>
            </div>
          </div>

          <div className="location-section mt-12">
            <h2>Our Showroom</h2>
            <div className="showroom-address mb-6">
              <MapPin className="text-accent" /> Platinum Tower, Dubai Marina, UAE
            </div>
            {/* Map Placeholder */}
            <div className="map-container glass-panel">
              <div className="map-overlay">
                <span className="map-marker"><MapPin size={40} className="neon-text" /></span>
                <h3>Desert Apex HQ</h3>
                <p>Dubai Marina</p>
                <button className="btn-outline mt-2">Get Directions</button>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="glass-panel form-container">
            <h2>Fast-Track Reservation</h2>
            <p className="text-muted mb-6">Skip the queue. Submit your requirements and a dedicated agent will contact you within 15 minutes.</p>
            
            <form className="vip-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group w-full">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-group w-full">
                  <label>Phone / WhatsApp</label>
                  <input type="tel" placeholder="+971 50 xxx xxxx" />
                </div>
              </div>
              
              <div className="form-group w-full">
                <label>Email Address</label>
                <input type="email" placeholder="john@company.com" />
              </div>

              <div className="form-row">
                <div className="form-group w-full">
                  <label>Vehicle Preference</label>
                  <select>
                    <option>Any Hypercar</option>
                    <option>Lamborghini Revuelto</option>
                    <option>Ferrari SF90</option>
                    <option>Rolls-Royce Cullinan</option>
                    <option>Other (Specify below)</option>
                  </select>
                </div>
                <div className="form-group w-full">
                  <label>Dates</label>
                  <input type="date" />
                </div>
              </div>

              <div className="form-group w-full">
                <label>Special Requests (Chauffeur, Airport Delivery, Itinerary)</label>
                <textarea rows="4" placeholder="How can we make your experience unforgettable?"></textarea>
              </div>
              
              <button className="btn-primary w-full mt-4 submit-btn">
                <Send size={18} /> Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
