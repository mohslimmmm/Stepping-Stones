import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import './Fleet.css';
import { fleetData } from '../../data/fleet';

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
          {fleetData.map((car) => (
            <div key={car.id} className="car-card aerodynamic-card" style={car.bg ? { background: car.bg } : {}}>
              <div 
                className={`car-image ${car.imageClass}`} 
                style={car.image ? { backgroundImage: `url('${car.image}')` } : {}}
              ></div>
              <div className="car-info">
                <h3>{car.name}</h3>
                <p className="car-specs">{car.specs}</p>
                <div className="car-price">
                  <span className="price-value">{car.priceStr}</span> <span className="price-period">/ day</span>
                </div>
                <Link to={`/fleet/${car.slug}`} className="btn-primary w-full text-center" style={{ display: 'block', marginTop: '15px' }}>Instant Booking</Link>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Fleet;
