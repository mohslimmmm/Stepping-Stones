import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import './Discovery.css';

const MOCK_PROPERTIES = [
  {
    id: 'villa-paloma',
    name: 'Villa Paloma',
    type: 'Cliffside Villas',
    guests: 12,
    price: '€45,000/week',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    features: ['Sea View', 'Helipad', 'Staffed']
  },
  {
    id: 'penthouse-azure',
    name: 'Penthouse Azure',
    type: 'Penthouses',
    guests: 6,
    price: '€28,000/week',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    features: ['Sea View', 'Staffed']
  },
  {
    id: 'estate-grimaldi',
    name: 'Estate Grimaldi',
    type: 'Event Spaces',
    guests: 18,
    price: '€85,000/week',
    image: 'https://images.unsplash.com/photo-1613490908571-9ce224ce340e?auto=format&fit=crop&q=80',
    features: ['Sea View', 'Staffed']
  },
  {
    id: 'villa-monaco',
    name: 'Villa Jardin',
    type: 'Cliffside Villas',
    guests: 14,
    price: '€50,000/week',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    features: ['Sea View', 'Helipad']
  },
  {
    id: 'penthouse-royale',
    name: 'Penthouse Royale',
    type: 'Penthouses',
    guests: 4,
    price: '€22,000/week',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
    features: ['Sea View']
  },
  {
    id: 'chateau-ocean',
    name: 'Château Ocean',
    type: 'Event Spaces',
    guests: 50,
    price: '€110,000/week',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80',
    features: ['Sea View', 'Helipad', 'Staffed']
  }
];

const CATEGORIES = ['All', 'Penthouses', 'Cliffside Villas', 'Event Spaces'];
const FILTERS = ['Sea View', 'Helipad', 'Staffed'];

const Discovery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeFilters, setActiveFilters] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleFilter = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const filteredProperties = MOCK_PROPERTIES.filter(property => {
    // Category match
    if (activeTab !== 'All' && property.type !== activeTab) return false;
    
    // Filter match (must have ALL active filters)
    if (activeFilters.length > 0) {
      return activeFilters.every(filter => property.features.includes(filter));
    }
    
    return true;
  });

  return (
    <div className="discovery-page">
      <div className="discovery-header">
        <div className="container">
          <h1 className="discovery-title">Property Portfolio</h1>
          <p className="discovery-subtitle">Explore our exclusive collection of Mediterranean escapes.</p>
        </div>
      </div>

      <div className="discovery-container container">
        {/* Sidebar Filters */}
        <div className={`discovery-sidebar ${showMobileFilters ? 'open' : ''}`}>
          <div className="filter-header">
            <h3><Filter size={18} /> Filters</h3>
            <button className="close-filters-btn" onClick={() => setShowMobileFilters(false)}>×</button>
          </div>
          
          <div className="filter-section">
            <h4 className="filter-title">Amenities</h4>
            <div className="filter-options">
              {FILTERS.map(filter => (
                <label key={filter} className="filter-checkbox-wrapper">
                  <input 
                    type="checkbox" 
                    checked={activeFilters.includes(filter)}
                    onChange={() => toggleFilter(filter)}
                  />
                  <span className="custom-checkbox"></span>
                  <span className="filter-label">{filter}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="filter-section">
            <h4 className="filter-title">Price Range</h4>
            <label className="filter-checkbox-wrapper">
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              <span className="filter-label">€20k - €40k / week</span>
            </label>
            <label className="filter-checkbox-wrapper">
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              <span className="filter-label">€40k - €80k / week</span>
            </label>
            <label className="filter-checkbox-wrapper">
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              <span className="filter-label">€80k+ / week</span>
            </label>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="discovery-main">
          <div className="discovery-controls">
            <button className="mobile-filter-btn btn btn-outline" onClick={() => setShowMobileFilters(true)}>
              <SlidersHorizontal size={18} /> Filters
            </button>
            
            {/* Tabs */}
            <div className="category-tabs">
              {CATEGORIES.map(category => (
                <button 
                  key={category}
                  className={`tab-btn ${activeTab === category ? 'active' : ''}`}
                  onClick={() => setActiveTab(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="results-count">
            Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
          </div>

          <div className="property-grid">
            {filteredProperties.length > 0 ? (
              filteredProperties.map(property => (
                <Link to={`/property/${property.id}`} key={property.id} className="property-card">
                  <div className="property-image-wrapper">
                    <img src={property.image} alt={property.name} className="property-image" />
                    <div className="property-badge">{property.type}</div>
                  </div>
                  <div className="property-content">
                    <h3 className="property-title">{property.name}</h3>
                    <div className="property-details">
                      <span>{property.guests} Guests</span>
                      <span className="dot-separator">•</span>
                      <span className="property-price">{property.price}</span>
                    </div>
                    <div className="property-features">
                      {property.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="no-results">
                <h3>No properties found</h3>
                <p>Try adjusting your filters to see more results.</p>
                <button 
                  className="btn btn-outline" 
                  onClick={() => { setActiveFilters([]); setActiveTab('All'); }}
                  style={{ marginTop: '1rem' }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
