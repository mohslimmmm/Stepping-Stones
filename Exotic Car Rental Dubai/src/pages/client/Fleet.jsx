import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import './Fleet.css';

const Fleet = () => {
  const [activeTab, setActiveTab] = useState('hypercars');

  const tabs = [
    { id: 'hypercars', label: 'Hypercars' },
    { id: 'suvs', label: 'Luxury SUVs' },
    { id: 'convertibles', label: 'Convertibles' },
    { id: 'chauffeur', label: 'Chauffeur Services' }
  ];

  return (
    <div className="fleet-page">
      <div className="fleet-header">
        <h1 className="neon-text">OUR ELITE FLEET</h1>
        <p>Select your weapon of choice for the Dubai roads.</p>
      </div>

      <div className="fleet-tabs">
        {tabs.map(tab => (
          <button 
            key={tab.id} 
            className={`fleet-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="fleet-container">
        {/* Sidebar Filter */}
        <aside className="fleet-sidebar glass-panel">
          <div className="sidebar-title">
            <Filter size={20} /> FILTERS
          </div>
          
          <div className="filter-group">
            <label>Search</label>
            <div className="search-box">
              <Search size={16} />
              <input type="text" placeholder="e.g. Lamborghini" />
            </div>
          </div>

          <div className="filter-group">
            <label>Brand</label>
            <div className="checkbox-list">
              <label><input type="checkbox" /> Lamborghini</label>
              <label><input type="checkbox" /> Ferrari</label>
              <label><input type="checkbox" /> Rolls-Royce</label>
              <label><input type="checkbox" /> Bentley</label>
              <label><input type="checkbox" /> Porsche</label>
            </div>
          </div>
          
          <div className="filter-group">
            <label>Price Range / Day</label>
            <input type="range" min="1000" max="20000" className="w-full price-slider" />
            <div className="price-labels">
              <span>1k AED</span>
              <span>20k+ AED</span>
            </div>
          </div>
          
          <button className="btn-outline w-full" style={{ width: '100%', marginTop: '20px' }}>Apply Filters</button>
        </aside>

        {/* Fleet Grid */}
        <main className="fleet-grid-main">
          {/* Mock Vehicle 1 */}
          <div className="car-card aerodynamic-card">
            <div className="car-image lambo-revuelto"></div>
            <div className="car-info">
              <h3>Lamborghini Revuelto</h3>
              <p className="car-specs">V12 Hybrid • 1001 HP • 2.5s 0-100</p>
              <div className="car-price">
                <span className="price-value">AED 8,500</span> <span className="price-period">/ day</span>
              </div>
              <Link to="/fleet/revuelto" className="btn-primary w-full text-center" style={{ display: 'block', marginTop: '15px' }}>Instant Booking</Link>
            </div>
          </div>

          {/* Mock Vehicle 2 */}
          <div className="car-card aerodynamic-card">
            <div className="car-image sf90"></div>
            <div className="car-info">
              <h3>Ferrari SF90 Stradale</h3>
              <p className="car-specs">V8 Hybrid • 986 HP • 2.5s 0-100</p>
              <div className="car-price">
                <span className="price-value">AED 9,000</span> <span className="price-period">/ day</span>
              </div>
              <Link to="/fleet/sf90" className="btn-primary w-full text-center" style={{ display: 'block', marginTop: '15px' }}>Instant Booking</Link>
            </div>
          </div>

          {/* Mock Vehicle 3 */}
          <div className="car-card aerodynamic-card" style={{ background: '#1a1a1a' }}>
            <div className="car-image porsche-911" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376712351-1c4392433296?q=80&w=2670&auto=format&fit=crop')" }}></div>
            <div className="car-info">
              <h3>Porsche 911 Turbo S</h3>
              <p className="car-specs">Flat-6 Twin-Turbo • 640 HP • 2.6s 0-100</p>
              <div className="car-price">
                <span className="price-value">AED 4,500</span> <span className="price-period">/ day</span>
              </div>
              <Link to="/fleet/911" className="btn-primary w-full text-center" style={{ display: 'block', marginTop: '15px' }}>Instant Booking</Link>
            </div>
          </div>

          {/* Mock Vehicle 4 */}
          <div className="car-card aerodynamic-card" style={{ background: '#1a1a1a' }}>
            <div className="car-image rolls-cullinan"></div>
            <div className="car-info">
              <h3>Rolls-Royce Cullinan</h3>
              <p className="car-specs">V12 Twin-Turbo • 563 HP • Ultimate Luxury</p>
              <div className="car-price">
                <span className="price-value">AED 6,000</span> <span className="price-period">/ day</span>
              </div>
              <Link to="/fleet/cullinan" className="btn-primary w-full text-center" style={{ display: 'block', marginTop: '15px' }}>Instant Booking</Link>
            </div>
          </div>
          
           {/* Mock Vehicle 5 */}
          <div className="car-card aerodynamic-card" style={{ background: '#1a1a1a' }}>
            <div className="car-image bentley" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620021570779-7a72bb3a19fd?q=80&w=2670&auto=format&fit=crop')" }}></div>
            <div className="car-info">
              <h3>Bentley Continental GT</h3>
              <p className="car-specs">W12 Twin-Turbo • 650 HP • Grand Tourer</p>
              <div className="car-price">
                <span className="price-value">AED 4,000</span> <span className="price-period">/ day</span>
              </div>
              <Link to="/fleet/bentley-gt" className="btn-primary w-full text-center" style={{ display: 'block', marginTop: '15px' }}>Instant Booking</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Fleet;
