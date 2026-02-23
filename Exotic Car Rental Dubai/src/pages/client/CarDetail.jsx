import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap, Gauge, Navigation } from 'lucide-react';
import './CarDetail.css';

const CarDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  // Mock data for the layout
  const car = {
    name: 'Lamborghini Revuelto',
    price: 8500,
    images: [
      'https://images.unsplash.com/photo-1544888252-eb061c0c1cf1?q=80&w=2538&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1627454819213-f56f18ed4085?q=80&w=2670&auto=format&fit=crop',
    ],
    specs: {
      power: '1001 HP',
      accel: '2.5s',
      topSpeed: '350 km/h',
      engine: 'V12 Hybrid',
    },
    features: [
      'Carbon Fiber Monocoque',
      'Active Aerodynamics',
      'Alcantara Interior',
      'Apple CarPlay',
      'Carbon Ceramic Brakes'
    ],
    description: "The Lamborghini Revuelto is the first super sports V12 hybrid plug-in HPEV (High Performance Electrified Vehicle). It defines a new paradigm in terms of performance, sportiness and driving pleasure from its unprecedented new architecture; innovative design; maximum-efficiency aerodynamics; and a new carbon frame concept."
  };

  return (
    <div className="car-detail-page">
      <div className="back-link">
        <Link to="/fleet"><ArrowLeft size={16} /> Back to Fleet</Link>
      </div>

      <div className="detail-header">
        <h1 className="neon-text">{car.name}</h1>
        <p className="subtitle">The Future of Supercars, Realized.</p>
      </div>

      <div className="detail-layout">
        <div className="detail-main">
          {/* 360 Viewer Concept / Image Gallery */}
          <div className="gallery-container glass-panel">
            <div className="main-image" style={{ backgroundImage: `url(${car.images[activeImage]})` }}>
              <div className="viewer-360-badge">
                <Navigation size={16} className="spin-icon" /> 360° View Ready
              </div>
            </div>
            <div className="thumbnail-strip">
              {car.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`thumbnail ${activeImage === idx ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${img})` }}
                  onClick={() => setActiveImage(idx)}
                />
              ))}
            </div>
          </div>

          <div className="tabs-container">
            <div className="detail-tabs">
              <button className="detail-tab active">Overview</button>
              <button className="detail-tab">Specifications</button>
              <button className="detail-tab">Features</button>
            </div>
            
            <div className="tab-content">
              <h3>Vehicle Overview</h3>
              <p>{car.description}</p>
              
              <h3 className="mt-8">Key Performance</h3>
              <div className="performance-grid">
                <div className="perf-item glass-panel">
                  <Zap className="perf-icon" />
                  <div className="perf-value">{car.specs.power}</div>
                  <div className="perf-label">Horsepower</div>
                </div>
                <div className="perf-item glass-panel">
                  <Gauge className="perf-icon" />
                  <div className="perf-value">{car.specs.accel}</div>
                  <div className="perf-label">0-100 km/h</div>
                </div>
                <div className="perf-item glass-panel">
                  <Navigation className="perf-icon" />
                  <div className="perf-value">{car.specs.topSpeed}</div>
                  <div className="perf-label">Top Speed</div>
                </div>
                <div className="perf-item glass-panel">
                  <span className="perf-icon" style={{fontFamily: 'var(--font-header)', fontWeight: 'bold'}}>V12</span>
                  <div className="perf-value">{car.specs.engine}</div>
                  <div className="perf-label">Powertrain</div>
                </div>
              </div>

              <h3 className="mt-8">Included Features</h3>
              <ul className="features-list">
                {car.features.map((feature, idx) => (
                  <li key={idx}><CheckCircle2 size={16} className="text-accent" /> {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky Booking Widget */}
        <aside className="booking-widget-container">
          <div className="booking-widget glass-panel">
            <h2 className="widget-price">AED {car.price.toLocaleString()} <span className="text-muted text-sm">/ day</span></h2>
            
            <div className="trust-badges">
              <span className="badge"><ShieldCheck size={14} /> Fully Insured</span>
              <span className="badge">⭐ 5.0 Rated</span>
            </div>
            
            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Pickup Date & Time</label>
                <input type="datetime-local" />
              </div>
              <div className="form-group">
                <label>Return Date & Time</label>
                <input type="datetime-local" />
              </div>
              <div className="form-group">
                <label>Rental Duration</label>
                <select>
                  <option>1 Day</option>
                  <option>2 Days (10% Off)</option>
                  <option>3 Days (15% Off)</option>
                  <option>1 Week (Custom Rate)</option>
                </select>
              </div>
              
              <div className="price-breakdown">
                <div className="breakdown-row">
                  <span>Rental Rate</span>
                  <span>AED 8,500</span>
                </div>
                <div className="breakdown-row">
                  <span>Security Deposit (Refundable)</span>
                  <span>AED 10,000</span>
                </div>
                <div className="breakdown-row total">
                  <span>Total Due Now</span>
                  <span className="neon-text">AED {car.price.toLocaleString()}</span>
                </div>
              </div>
              
              <button className="btn-primary w-full mt-4">Book Instantly</button>
              <button className="btn-outline w-full mt-2" style={{border: 'none', background: '#25D366', color: '#fff'}}>WhatsApp Inquiry</button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CarDetail;
