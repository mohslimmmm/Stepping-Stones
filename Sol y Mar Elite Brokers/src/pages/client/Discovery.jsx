import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Discovery = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const zones = ['All', 'Golden Mile', 'Nueva Andalucía', 'Frontline Beach', 'Golf Valley'];

  return (
    <div className="discovery-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Property Portfolio</h1>
          <p className="page-subtitle">Exclusive listings curated for luxury living.</p>
        </div>
      </div>
      
      <div className="container section">
        <div className="discovery-filters">
          <div className="zone-tabs">
            {zones.map(zone => (
              <button 
                key={zone} 
                className={`zone-tab ${activeTab === zone ? 'active' : ''}`}
                onClick={() => setActiveTab(zone)}
              >
                {zone}
              </button>
            ))}
          </div>
          <div className="advanced-filters">
             <button className="secondary-btn"><Filter size={18} style={{marginRight: '8px'}} /> Filters</button>
          </div>
        </div>

        <div className="property-grid">
           {/* Grid content here, reusing similar cards to Home */}
           {[1, 2, 3, 4, 5, 6].map((item) => (
             <div className="card property-card" key={item}>
              <div className="card-image-wrap">
                <img src={`https://images.unsplash.com/photo-1600596542815-ffad4c1539a${item % 10}?auto=format&fit=crop&q=80`} alt={`Property ${item}`} />
              </div>
              <div className="card-content">
                <h3 className="property-title">{activeTab === 'All' ? 'Luxury Villa' : activeTab} Estate</h3>
                <p className="property-price">€{(item * 1.5).toFixed(1)}M</p>
                <div className="property-specs">
                  <span>{item + 3} Beds</span> • <span>{item + 2} Baths</span>
                </div>
                <Link to={`/property/${item}`} className="secondary-btn view-btn">
                  View Details
                </Link>
              </div>
            </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Discovery;
