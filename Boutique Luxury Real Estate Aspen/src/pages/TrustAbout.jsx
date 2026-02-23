import React from 'react';
import { Award, Shield, Target, Users } from 'lucide-react';
import './TrustAbout.css';

const TrustAbout = () => {
  return (
    <div className="about-page animate-fade-in">
      {/* Hero */}
      <div className="about-hero">
        <div className="container hero-content">
          <h1>Above the Timberline</h1>
          <p>Aspen's premier boutique luxury real estate brokerage.</p>
        </div>
      </div>

      <div className="container">
        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">$1.2B+</div>
              <div className="stat-label">Total Sales Volume</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Top 1%</div>
              <div className="stat-label">Nationwide Brokerage</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years of Local Expertise</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">#1</div>
              <div className="stat-label">In Off-Market Transactions</div>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="narrative-section">
          <div className="narrative-grid">
            <div className="narrative-content">
              <h2>A Legacy of Discretion & Excellence</h2>
              <p>Founded on the principles of absolute discretion, hyper-local expertise, and unparalleled client service, Altitude Alpine Real Estate represents the most significant properties in the Roaring Fork Valley.</p>
              <p>Our boutique approach ensures that every client receives white-glove service, whether navigating a complex off-market acquisition or positioning a legacy ranch for global exposure. We don't just sell real estate; we curate lifestyles.</p>
              
              <div className="values-list">
                <div className="value-item">
                  <Shield className="value-icon" />
                  <div>
                    <h4>Absolute Confidentiality</h4>
                    <p>Protecting our clients' privacy is our highest priority.</p>
                  </div>
                </div>
                <div className="value-item">
                  <Target className="value-icon" />
                  <div>
                    <h4>Precision Marketing</h4>
                    <p>Targeted exposure to global ultra-high-net-worth individuals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="narrative-image">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office Meeting" />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="section-header-about">
            <h2>Our Leadership</h2>
            <p>Guided by industry veterans with deep roots in the community.</p>
          </div>

          <div className="team-grid">
            {/* Broker 1 */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Jackson Hayes" />
              </div>
              <div className="team-info">
                <h3>Jackson Hayes</h3>
                <p className="team-role">Founder & Principal Broker</p>
                <p className="team-bio">With over $500M in personal career sales, Jackson specializes in Red Mountain and Aspen core legacy asserts.</p>
                <a href="mailto:jackson@altitudealpine.com" className="team-contact">jackson@altitudealpine.com</a>
              </div>
            </div>

            {/* Broker 2 */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Elena Rostova" />
              </div>
              <div className="team-info">
                <h3>Elena Rostova</h3>
                <p className="team-role">Managing Partner</p>
                <p className="team-bio">Elena brings an international background and leads our global marketing initiatives and off-market private portfolio.</p>
                <a href="mailto:elena@altitudealpine.com" className="team-contact">elena@altitudealpine.com</a>
              </div>
            </div>
            
            {/* Broker 3 */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Marcus Chen" />
              </div>
              <div className="team-info">
                <h3>Marcus Chen</h3>
                <p className="team-role">Director of Ranch Properties</p>
                <p className="team-bio">An expert in large-acreage parcels, water rights, and equestrian estates throughout the broader Roaring Fork Valley.</p>
                <a href="mailto:marcus@altitudealpine.com" className="team-contact">marcus@altitudealpine.com</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrustAbout;
