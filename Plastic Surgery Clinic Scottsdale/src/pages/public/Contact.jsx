import { UploadCloud, CheckCircle, Lock } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Initiate Your Journey</h1>
          <p className="page-subtitle">Schedule a confidential consultation.</p>
        </div>
      </div>

      <div className="container contact-layout section">
        <div className="contact-info">
          <h2 className="contact-h2">Discrete Excellence.</h2>
          <p className="contact-text">
            Our patient care coordinators are dedicated to orchestrating your experience with the utmost privacy and personalized attention. Whether you are inquiring locally or flying in, we are here to assist.
          </p>
          
          <div className="info-block">
            <h3>Clinic Location</h3>
            <p>123 Camelback Road, Suite 200<br/>Scottsdale, AZ 85251</p>
          </div>
          
          <div className="info-block">
            <h3>Direct Contact</h3>
            <p>Phone: (480) 555-0199<br/>Email: concierge@desertsculpt.com</p>
          </div>

          <div className="privacy-note">
            <Lock size={16} />
            <span>All inquiries are entirely confidential and HIPAA compliant.</span>
          </div>
        </div>

        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="success-state">
              <CheckCircle size={48} className="success-icon" />
              <h3>Inquiry Received</h3>
              <p>Our concierge team will contact you within 24 hours to schedule your consultation.</p>
            </div>
          ) : (
            <form className="intake-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Legal Name</label>
                <input type="text" className="input-field" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="input-field" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="input-field" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Areas of Interest</label>
                <select className="input-field">
                  <option value="">Select Procedure...</option>
                  <option value="face">Facial Rejuvenation (Deep-Plane Facelift, Neck)</option>
                  <option value="rhinoplasty">Rhinoplasty</option>
                  <option value="breast">Breast Procedures (Augmentation, Lift)</option>
                  <option value="body">Body Contouring</option>
                  <option value="non-surgical">Non-Surgical (Injectables)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Virtual Consult Photo Upload (Optional)</label>
                <div className="upload-dropzone">
                  <UploadCloud size={32} className="upload-icon" />
                  <p className="upload-text">Drag & drop photos here, or click to browse</p>
                  <span className="upload-hint">Upload front and profile views for a preliminary assessment. Max 5MB per image.</span>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Additional Details</label>
                <textarea className="input-field" rows="4" placeholder="Briefly describe your aesthetic goals..."></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit">Secure Submission</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
