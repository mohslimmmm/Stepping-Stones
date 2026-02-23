import React from 'react';
import { ShieldCheck, Star, Award, Shield } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1 className="neon-text">TRUST & EXCELLENCE</h1>
        <p>Uncompromising quality. Unparalleled service.</p>
      </div>

      <div className="trust-badges-section">
        <div className="trust-badge glass-panel text-center">
          <ShieldCheck size={50} className="neon-text badge-icon" />
          <h3>Fully Insured</h3>
          <p>Comprehensive premium coverage included with every rental for total peace of mind.</p>
        </div>
        <div className="trust-badge glass-panel text-center">
          <Star size={50} className="neon-text badge-icon" />
          <h3>5-Star Trustpilot Rated</h3>
          <p>Over 1,000 flawless reviews from VIP clients worldwide.</p>
        </div>
        <div className="trust-badge glass-panel text-center">
          <Award size={50} className="neon-text badge-icon" />
          <h3>Guaranteed Fleet</h3>
          <p>The car you book is the exact car you drive. No bait and switch. Ever.</p>
        </div>
      </div>

      <section className="testimonials-section">
        <h2 className="text-center neon-text mb-8 text-3xl">CLIENT TESTIMONIALS</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card glass-panel">
            <div className="stars text-accent mb-4">★★★★★</div>
            <p className="quote">"The service was impeccable. From the airport pickup in the Cullinan to the seamless handover of the SF90 at my hotel. Desert Apex is the only agency I use in Dubai."</p>
            <div className="client-info mt-6">
              <div className="client-name font-bold">Alexander M.</div>
              <div className="client-title text-muted text-sm">CEO, Tech Innovations</div>
            </div>
          </div>
          
          <div className="testimonial-card glass-panel">
            <div className="stars text-accent mb-4">★★★★★</div>
            <p className="quote">"Rented the Revuelto for a weekend. The condition of the car was pristine, exactly as shown in the 360 viewer. The recommendations for the mountain driving route made the trip."</p>
            <div className="client-info mt-6">
              <div className="client-name font-bold">Sarah T.</div>
              <div className="client-title text-muted text-sm">International Architect</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="security-banner glass-panel mt-12 w-full text-center p-12">
        <Shield size={60} className="neon-text mx-auto mb-6" style={{ margin: '0 auto 20px' }} />
        <h2 className="text-2xl mb-4">Bank-Grade Security for Your Reservations</h2>
        <p className="text-muted max-w-2xl mx-auto" style={{ margin: '0 auto', maxWidth: '600px' }}>Your deposit and payment information are protected by world-class encryption. We respect your privacy and provide absolute discretion for all our VIP clientele.</p>
      </section>
    </div>
  );
};

export default About;
