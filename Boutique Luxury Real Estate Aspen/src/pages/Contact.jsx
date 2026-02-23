import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="contact-page animate-fade-in">
      <div className="contact-header">
        <div className="container">
          <h1>Connect With Altitude</h1>
          <p>Confidential inquiries for discerning buyers and sellers.</p>
        </div>
      </div>

      <div className="container contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Our Offices</h2>
          <p className="contact-intro">While our reach is global, our roots are firmly planted in the Roaring Fork Valley. We welcome you to our discrete downtown Aspen office for a private consultation.</p>

          <div className="info-grid">
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>Address</h4>
                <p>205 S Mill St, Suite 201<br/>Aspen, CO 81611<br/>(By Appointment Only)</p>
              </div>
            </div>
            
            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>Office: +1 (970) 555-0198<br/>Direct: +1 (970) 555-0199</p>
              </div>
            </div>

            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>inquiries@altitudealpine.com<br/>private@altitudealpine.com</p>
              </div>
            </div>

            <div className="info-item">
              <Clock className="info-icon" />
              <div>
                <h4>Hours</h4>
                <p>Monday - Friday: 9am - 6pm<br/>Weekend: By Appointment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <div className="form-card">
            <h2>Confidential Inquiry</h2>
            <p>Please provide details below. All submitted information is held in strict confidence.</p>

            {formState === 'success' ? (
               <div className="success-message">
                 <div className="success-icon">✓</div>
                 <h3>Inquiry Received</h3>
                 <p>Thank you for reaching out. A senior broker will contact you shortly.</p>
                 <button className="btn-secondary mt-4" onClick={() => setFormState('idle')}>Send Another Message</button>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name*</label>
                    <input type="text" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name*</label>
                    <input type="text" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address*</label>
                    <input type="email" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Inquiry Type</label>
                  <select>
                    <option>Buying</option>
                    <option>Selling</option>
                    <option>General Inquiry</option>
                    <option>Private Office Services</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message*</label>
                  <textarea rows="5" required placeholder="How can we assist you?"></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn-primary w-100 ${formState === 'submitting' ? 'submitting' : ''}`}
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? 'Sending...' : <><Send size={18} /> Send Confidential Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
