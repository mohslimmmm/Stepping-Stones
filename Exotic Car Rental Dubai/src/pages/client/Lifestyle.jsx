import React from 'react';
import { Map, GlassWater, Sparkles, Navigation } from 'lucide-react';
import './Lifestyle.css';

const Lifestyle = () => {
  return (
    <div className="lifestyle-page">
      <div className="lifestyle-hero">
        <h1 className="neon-text">THE VIP LIFESTYLE</h1>
        <p>Your guide to the ultimate Dubai experience, curated by Desert Apex.</p>
      </div>

      <div className="lifestyle-content">
        <section className="guide-section">
          <div className="section-header">
            <Map className="section-icon neon-text" size={30} />
            <h2>Ultimate UAE Driving Routes</h2>
          </div>
          <div className="cards-grid">
            <div className="guide-card aerodynamic-card">
              <div className="card-image jebel-jais"></div>
              <div className="card-content">
                <h3>Jebel Jais Mountain Pass</h3>
                <p>The UAE's highest peak offers 30km of twisting, ascending roads. Perfect for experiencing the handling of a Lamborghini Revuelto.</p>
                <button className="btn-outline mt-4">View Route Map</button>
              </div>
            </div>
            <div className="guide-card aerodynamic-card">
              <div className="card-image liwa-oasis"></div>
              <div className="card-content">
                <h3>Liwa Oasis Desert Highway</h3>
                <p>An endless ribbon of black asphalt cutting through towering red dunes. The ultimate destination for a grand tourer like the Bentley Continental.</p>
                <button className="btn-outline mt-4">View Route Map</button>
              </div>
            </div>
          </div>
        </section>

        <section className="guide-section mt-12">
          <div className="section-header">
            <GlassWater className="section-icon neon-text" size={30} />
            <h2>Dubai Nightlife VIP Guide</h2>
          </div>
          <div className="cards-grid">
            <div className="guide-card aerodynamic-card">
              <div className="card-image burj-club"></div>
              <div className="card-content">
                <h3>The Burj Club Access</h3>
                <p>Arrive in a Rolls-Royce and enjoy exclusive valet priority at the tallest building in the world.</p>
                <span className="perk-badge"><Sparkles size={14}/> Client Perk: Priority Booking</span>
              </div>
            </div>
            <div className="guide-card aerodynamic-card">
              <div className="card-image palm-jumeirah"></div>
              <div className="card-content">
                <h3>Palm Jumeirah Circuit</h3>
                <p>Cruise the crescent of the Palm Jumeirah at sunset, stopping at five-star beachfront venues.</p>
                <span className="perk-badge"><Navigation size={14}/> Recommended Time: Sunset</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Lifestyle;
