import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      <div className="contact-header">
        <div className="container">
          <h1>Request Consultation</h1>
          <p>Begin your journey with our expert providers.</p>
        </div>
      </div>

      <div className="container contact-layout">
        
        {/* Contact Form Details */}
        <div className="contact-form-container glass-panel">
          <div className="privacy-badge">
            <ShieldCheck size={16} />
            <span>HIPAA Compliant & Secure</span>
          </div>
          
          <h2>Your Information</h2>
          <p className="form-subtitle">All inquiries are strictly confidential. A patient coordinator will contact you within 24 hours.</p>

          <form className="lead-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" required placeholder="Elena" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" required placeholder="Smith" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" required placeholder="elena@example.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" required placeholder="(305) 555-0123" />
              </div>
            </div>

            <div className="form-group">
              <label>Area of Interest</label>
              <select defaultValue="" required>
                <option value="" disabled>Select a treatment...</option>
                <option value="injectables">Injectables & Fillers</option>
                <option value="laser">Laser & Light Therapy</option>
                <option value="body">Body Contouring</option>
                <option value="wellness">Wellness IVs</option>
                <option value="general">General Consultation</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message (Optional)</label>
              <textarea rows="4" placeholder="Tell us about your aesthetic goals..."></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Submit Request
            </button>
          </form>
        </div>

        {/* Location Information */}
        <div className="location-info-container">
          <div className="info-card">
            <h3>Contact Details</h3>
            <div className="info-list">
              <div className="info-item">
                <MapPin size={20} className="text-accent" />
                <div>
                  <strong>Brickell Flagship</strong>
                  <span>1000 S Miami Ave, Suite 500<br/>Miami, FL 33130</span>
                </div>
              </div>
              <div className="info-item">
                <Phone size={20} className="text-accent" />
                <div>
                  <strong>Phone</strong>
                  <span>(305) 555-AURA</span>
                </div>
              </div>
              <div className="info-item">
                <Mail size={20} className="text-accent" />
                <div>
                  <strong>Email</strong>
                  <span>concierge@auramedspa.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="map-placeholder glass-panel">
            <div className="map-overlay">
              <span>Interactive Map Placeholder</span>
              <p>Google Maps Integration Here</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
