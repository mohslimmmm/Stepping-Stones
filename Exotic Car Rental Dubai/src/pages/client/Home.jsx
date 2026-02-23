import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Car } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [date, setDate] = useState('');
  const [carType, setCarType] = useState('hypercar');

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="video-overlay"></div>
        {/* Placeholder for Cinematic Video */}
        <div className="hero-background"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">CONQUER THE <br/><span className="neon-text">DESERT</span></h1>
          <p className="hero-subtitle">Unleash the ultimate driving experience in Dubai.</p>
          <div className="hero-actions">
            <Link to="/fleet" className="btn-primary">Explore The Fleet <ChevronRight size={18} style={{ display: 'inline', marginBottom: '-4px' }} /></Link>
          </div>
        </div>

        {/* Floating Reservation Bar */}
        <div className="reservation-bar glass-panel">
          <div className="reservation-input">
            <label><Calendar size={16} /> Pickup Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="reservation-divider"></div>
          <div className="reservation-input">
            <label><Car size={16} /> Vehicle Type</label>
            <select value={carType} onChange={(e) => setCarType(e.target.value)}>
              <option value="hypercar">Hypercar</option>
              <option value="suv">Luxury SUV</option>
              <option value="convertible">Convertible</option>
            </select>
          </div>
          <button className="btn-primary reserve-btn">Reserve Your Drive</button>
        </div>
      </section>

      {/* Elite Fleet Section */}
      <section className="elite-fleet-section display-section">
        <div className="section-header text-center">
          <h2 className="neon-text">THE ELITE FLEET</h2>
          <p className="section-subtitle">Curated for those who demand absolute perfection.</p>
        </div>
        
        <div className="fleet-grid">
          {/* Mock Car Card 1 */}
          <div className="car-card aerodynamic-card">
            <div className="car-image lambo-revuelto"></div>
            <div className="car-info">
              <h3>Lamborghini Revuelto</h3>
              <p className="car-specs">V12 Hybrid • 1001 HP • 2.5s 0-100</p>
              <div className="car-price">
                <span className="price-value">AED 8,500</span> <span className="price-period">/ day</span>
              </div>
              <Link to="/fleet/revuelto" className="btn-outline w-full text-center" style={{ display: 'block', marginTop: '15px' }}>View Details</Link>
            </div>
          </div>

          {/* Mock Car Card 2 */}
          <div className="car-card aerodynamic-card">
            <div className="car-image rolls-cullinan"></div>
            <div className="car-info">
              <h3>Rolls-Royce Cullinan</h3>
              <p className="car-specs">V12 Twin-Turbo • 563 HP • Ultimate Luxury</p>
              <div className="car-price">
                <span className="price-value">AED 6,000</span> <span className="price-period">/ day</span>
              </div>
              <Link to="/fleet/cullinan" className="btn-outline w-full text-center" style={{ display: 'block', marginTop: '15px' }}>View Details</Link>
            </div>
          </div>

          {/* Mock Car Card 3 */}
          <div className="car-card aerodynamic-card">
            <div className="car-image sf90"></div>
            <div className="car-info">
              <h3>Ferrari SF90 Stradale</h3>
              <p className="car-specs">V8 Hybrid • 986 HP • 2.5s 0-100</p>
              <div className="car-price">
                <span className="price-value">AED 9,000</span> <span className="price-period">/ day</span>
              </div>
              <Link to="/fleet/sf90" className="btn-outline w-full text-center" style={{ display: 'block', marginTop: '15px' }}>View Details</Link>
            </div>
          </div>
        </div>
        
        <div className="action-center" style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/fleet" className="btn-primary">View Entire Fleet</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
