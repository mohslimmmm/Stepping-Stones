import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Users, MapPin } from 'lucide-react';
import './Home.css';

const MOCK_PROPERTIES = [
  {
    id: 'villa-paloma',
    name: 'Villa Paloma',
    type: 'Cliffside Villa',
    guests: 12,
    price: '€45,000/week',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    features: ['Sea View', 'Helipad', 'Private Chef']
  },
  {
    id: 'penthouse-azure',
    name: 'Penthouse Azure',
    type: 'Penthouse',
    guests: 6,
    price: '€28,000/week',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    features: ['Panoramic Balcony', 'Infinity Pool', 'Casino Adjacent']
  },
  {
    id: 'estate-grimaldi',
    name: 'Estate Grimaldi',
    type: 'Historic Estate',
    guests: 18,
    price: '€85,000/week',
    image: 'https://images.unsplash.com/photo-1613490908571-9ce224ce340e?auto=format&fit=crop&q=80',
    features: ['Event Space', 'Yacht Dock', 'Full Staff']
  }
];

const Home = () => {
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('2');

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        {/* Placeholder for Drone Video. Using a high-quality Monaco aesthetic image as fallback */}
        <div 
          className="hero-background"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540324155970-14e91845bb0b?auto=format&fit=crop&q=80')` }}
        ></div>
        
        <div className="hero-content">
          <h1 className="hero-title">Riviera Royale</h1>
          <p className="hero-subtitle">Discover the pinnacle of Mediterranean exclusivity.</p>
          
          {/* Find Your Retreat Search Widget */}
          <div className="search-widget">
            <h2 className="search-title">Find Your Retreat</h2>
            <div className="search-form">
              <div className="search-input-group">
                <MapPin className="search-icon" size={20} />
                <div className="search-field">
                  <label>Location</label>
                  <input type="text" placeholder="Monaco, Monte Carlo" readOnly />
                </div>
              </div>
              <div className="search-divider"></div>
              <div className="search-input-group">
                <Calendar className="search-icon" size={20} />
                <div className="search-field">
                  <label>Dates</label>
                  <input 
                    type="text" 
                    placeholder="Add dates" 
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                  />
                </div>
              </div>
              <div className="search-divider"></div>
              <div className="search-input-group">
                <Users className="search-icon" size={20} />
                <div className="search-field">
                  <label>Guests</label>
                  <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6+">6+ Guests</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-primary search-btn">
                <Search size={20} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Properties Section */}
      <section className="exclusive-section container">
        <div className="section-header">
          <h2 className="section-title">Exclusive Properties</h2>
          <p className="section-subtitle">Curated estates for the world's most discerning travelers.</p>
        </div>

        <div className="property-grid">
          {MOCK_PROPERTIES.map(property => (
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
          ))}
        </div>
        
        <div className="view-all-container">
          <Link to="/discovery" className="btn btn-outline view-all-btn">
            View All Properties
          </Link>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="experience-section">
        <div className="container experience-container">
          <div className="experience-content">
            <h2 className="experience-title">Beyond Accommodation</h2>
            <p className="experience-text">
              Riviera Royale abstracts the complexities of luxury travel. 
              Our 24/7 concierge secures reservations at Michelin-starred 
              restaurants, arranges private yacht charters, and ensures VIP 
              access to the Grand Prix.
            </p>
            <Link to="/lifestyle" className="btn btn-primary">
              Explore Lifestyle Guide
            </Link>
          </div>
          <div className="experience-image-group">
            <img src="https://images.unsplash.com/photo-1580541743153-9366d71b3e70?auto=format&fit=crop&q=80" alt="Yacht" className="exp-img exp-img-1" />
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" alt="Champagne" className="exp-img exp-img-2" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
