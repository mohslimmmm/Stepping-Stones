import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Filter, ChevronDown } from 'lucide-react';
import './Discovery.css';

const Discovery = () => {
  const [activeTab, setActiveTab] = useState('estates');

  const properties = [
    { id: 'red-mountain', title: 'Red Mountain Peak Estate', location: 'Red Mountain, Aspen', price: '$32,500,000', beds: 6, baths: 8, sqft: '12,400', type: 'estates', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', badge: 'Exclusive' },
    { id: 'snowmass', title: 'Snowmass Ski-in Estate', location: 'Snowmass Village', price: '$18,900,000', beds: 5, baths: 6, sqft: '8,200', type: 'estates', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', badge: null },
    { id: 'downtown', title: 'Downtown Aspen Penthouse', location: 'Downtown Aspen', price: '$14,250,000', beds: 4, baths: 4.5, sqft: '4,500', type: 'condos', image: 'https://images.unsplash.com/photo-1628155556209-668b5a03e6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', badge: null },
    { id: 'woody-creek', title: 'Woody Creek Ranch', location: 'Woody Creek', price: '$45,000,000', beds: 8, baths: 10, sqft: '18,000', type: 'ranches', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', badge: 'New' },
    { id: 'off-market-1', title: 'Confidential Listing', location: 'Aspen Highlands', price: 'Upon Request', beds: 5, baths: 5, sqft: '7,500', type: 'off-market', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', badge: 'Private' },
  ];

  const filteredProperties = properties.filter(p => p.type === activeTab);

  return (
    <div className="discovery-page animate-fade-in">
      <div className="discovery-header">
        <div className="container">
          <h1>Property Portfolio</h1>
          <p>Curated luxury real estate across the Roaring Fork Valley.</p>
        </div>
      </div>

      <div className="container discovery-layout">
        {/* Sidebar */}
        <aside className="discovery-sidebar">
          <div className="filter-section">
            <h3 className="filter-title"><Filter size={18} /> Filters</h3>
            
            <div className="filter-group">
              <h4>Lifestyle</h4>
              <label className="checkbox-label">
                <input type="checkbox" /> Ski-in / Ski-out
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> Acreage / Equestrian
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> Downtown Core
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> Riverfront
              </label>
            </div>

            <div className="filter-group">
              <h4>Price Range</h4>
              <select className="filter-select">
                <option>Any Price</option>
                <option>$5M - $10M</option>
                <option>$10M - $20M</option>
                <option>$20M+</option>
              </select>
            </div>

            <button className="btn-primary w-100 mt-4">Apply Filters</button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="discovery-main">
          {/* Tabs */}
          <div className="discovery-tabs">
            {['estates', 'condos', 'ranches', 'off-market'].map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="discovery-grid">
            {filteredProperties.length > 0 ? (
              filteredProperties.map(property => (
                <Link to={`/property/${property.id}`} key={property.id} className="card listing-card">
                  <div className="listing-image-wrapper">
                    <img src={property.image} alt={property.title} className="listing-image" />
                    {property.badge && <div className="listing-badge">{property.badge}</div>}
                  </div>
                  <div className="listing-details">
                    <h3>{property.title}</h3>
                    <p className="listing-location"><MapPin size={14}/> {property.location}</p>
                    <div className="listing-price">{property.price}</div>
                    <div className="listing-specs">
                      <span><Bed size={16}/> {property.beds}</span>
                      <span><Bath size={16}/> {property.baths}</span>
                      <span><Square size={16}/> {property.sqft} sqft</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="no-results">
                <h3>No public listings available in this category.</h3>
                <p>Please contact our team for off-market opportunities.</p>
                <Link to="/contact" className="btn-secondary mt-3">Contact Us</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
