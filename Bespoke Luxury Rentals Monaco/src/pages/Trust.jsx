import React, { useEffect } from 'react';
import { ShieldCheck, Award, Star, Quote } from 'lucide-react';
import './Trust.css';

const TESTIMONIALS = [
  {
    quote: "Riviera Royale provided an unparalleled level of discretion and service. The villa exceeded all expectations, and the concierge preemptively handled every detail of our stay.",
    author: "Global Tech CEO",
    role: "Silicon Valley"
  },
  {
    quote: "Our family has used luxury agencies worldwide, but the attention to detail here is unmatched. Finding a private chef who perfectly accommodated our dietary needs on 24 hours' notice was remarkable.",
    author: "International Philanthropist",
    role: "London"
  },
  {
    quote: "The only agency I trust for Grand Prix week. They secured not just the perfect penthouse, but access to the most exclusive after-parties in the principality.",
    author: "F1 Enthusiast & Collector",
    role: "Dubai"
  }
];

const Trust = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="trust-page">
      <div className="trust-hero">
        <div className="trust-hero-bg"></div>
        <div className="trust-hero-content container">
          <h1 className="trust-title">Our Legacy of Excellence</h1>
          <p className="trust-subtitle">For over two decades, Riviera Royale has been the trusted custodian of the Mediterranean's most significant properties and the preferred partner for the world's most discerning individuals.</p>
        </div>
      </div>

      <div className="trust-badges-section">
        <div className="container trust-badges-grid">
          <div className="trust-badge-item">
            <ShieldCheck size={48} className="badge-icon-large" />
            <h3>Elite Luxury Travel</h3>
            <p>Proud founding members of the international luxury travel consortium, adhering to strict standards of excellence.</p>
          </div>
          <div className="trust-badge-item">
            <Award size={48} className="badge-icon-large" />
            <h3>Vetted Portfolio</h3>
            <p>Every property undergoes a rigorous 150-point inspection quarterly to ensure flawless standards.</p>
          </div>
          <div className="trust-badge-item">
            <Star size={48} className="badge-icon-large" />
            <h3>Uncompromising Discretion</h3>
            <p>We guarantee absolute privacy. Our NDAs cover all staff, contractors, and concierge partners.</p>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Perspectives</h2>
            <p className="section-subtitle">While we fiercely protect our clients' identities, a select few have consented to share their experiences anonymously.</p>
          </div>
          
          <div className="testimonials-grid">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <Quote size={32} className="quote-icon-bg" />
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.author}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
