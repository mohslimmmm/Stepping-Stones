import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Users, Maximize, BedDouble, Bath, Wifi, Coffee, Anchor, Info, Calendar } from 'lucide-react';
import './PropertyDetail.css';

const PROPERTY = {
  id: 'villa-paloma',
  name: 'Villa Paloma',
  type: 'Cliffside Villa',
  location: 'Roquebrune-Cap-Martin, near Monaco',
  guests: 12,
  bedrooms: 6,
  bathrooms: 8,
  area: '1,200 m²',
  price: '€45,000',
  description: `Villa Paloma is a masterpiece of contemporary architecture perched on the cliffs overlooking the Mediterranean Sea. Just minutes from the heart of Monte Carlo, this exceptional property offers unparalleled privacy, breathtaking panoramic views, and world-class amenities catered to the most discerning guests.

  The villa features expansive living spaces that seamlessly blend indoor and outdoor living, a state-of-the-art kitchen, a private cinema, and a fully equipped wellness spa. Outside, the infinity pool seems to merge with the sea, surrounded by meticulously landscaped terraced gardens.`,
  images: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80'
  ],
  amenities: [
    { icon: <Wifi size={20} />, label: 'High-Speed WiFi' },
    { icon: <Anchor size={20} />, label: 'Yacht Charter Access' },
    { icon: <Coffee size={20} />, label: 'Private Chef' },
    { icon: <Info size={20} />, label: '24/7 Concierge' },
    { icon: <Info size={20} />, label: 'Helipad' },
    { icon: <Info size={20} />, label: 'Wellness Spa' },
    { icon: <Info size={20} />, label: 'Cinema Room' },
    { icon: <Info size={20} />, label: 'Wine Cellar' }
  ]
};

const PropertyDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="property-detail-page">
      {/* Immersive Gallery */}
      <div className="gallery-section">
        <div className="main-image-container">
          <img src={PROPERTY.images[activeImage]} alt={`${PROPERTY.name} vast view`} className="gallery-main-img" />
        </div>
        <div className="thumbnail-strip">
          {PROPERTY.images.map((img, idx) => (
            <div 
              key={idx} 
              className={`thumbnail-wrapper ${idx === activeImage ? 'active' : ''}`}
              onClick={() => setActiveImage(idx)}
            >
              <img src={img} alt={`Thumbnail ${idx}`} className="gallery-thumb" />
            </div>
          ))}
        </div>
      </div>

      <div className="container property-content-grid">
        {/* Left Column: Details */}
        <div className="property-main-details">
          <div className="property-header">
            <span className="property-type-tag">{PROPERTY.type}</span>
            <h1 className="property-name">{PROPERTY.name}</h1>
            <div className="property-location">
              <MapPin size={18} /> {PROPERTY.location}
            </div>
          </div>

          <div className="property-stats">
            <div className="stat-item">
              <Users size={24} className="stat-icon" />
              <div>
                <span className="stat-value">{PROPERTY.guests}</span>
                <span className="stat-label">Guests</span>
              </div>
            </div>
            <div className="stat-item">
              <BedDouble size={24} className="stat-icon" />
              <div>
                <span className="stat-value">{PROPERTY.bedrooms}</span>
                <span className="stat-label">Bedrooms</span>
              </div>
            </div>
            <div className="stat-item">
              <Bath size={24} className="stat-icon" />
              <div>
                <span className="stat-value">{PROPERTY.bathrooms}</span>
                <span className="stat-label">Bathrooms</span>
              </div>
            </div>
            <div className="stat-item">
              <Maximize size={24} className="stat-icon" />
              <div>
                <span className="stat-value">{PROPERTY.area}</span>
                <span className="stat-label">Area</span>
              </div>
            </div>
          </div>

          <div className="property-section">
            <h2 className="section-heading">About The Property</h2>
            <div className="property-description">
              {PROPERTY.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="property-section">
            <h2 className="section-heading">Amenities</h2>
            <div className="amenities-grid">
              {PROPERTY.amenities.map((amenity, idx) => (
                <div key={idx} className="amenity-item">
                  <span className="amenity-icon">{amenity.icon}</span>
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="property-section">
            <h2 className="section-heading">Floorplans</h2>
            <div className="floorplan-placeholder">
              <div className="floorplan-content">
                <Info size={32} />
                <h3>Detailed Floorplans Available Upon Request</h3>
                <p>For security and privacy, complete architectural blueprints are shared only with screened clients.</p>
                <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Request Plans</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Widget */}
        <div className="property-sidebar">
          <div className="sticky-widget">
            <div className="widget-header">
              <div className="widget-price">
                <span className="price-amount">{PROPERTY.price}</span>
                <span className="price-period">/ week</span>
              </div>
              <p className="widget-note">Excludes taxes and staff fees</p>
            </div>

            <div className="widget-form">
              <div className="widget-input-group">
                <label>Arrival - Departure</label>
                <div className="input-with-icon">
                  <Calendar size={18} className="input-icon" />
                  <input type="text" placeholder="Select dates" />
                </div>
              </div>
              
              <div className="widget-input-group">
                <label>Guests</label>
                <div className="input-with-icon">
                  <Users size={18} className="input-icon" />
                  <select defaultValue="2">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6+">6+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="widget-totals">
                <div className="total-row">
                  <span>Weekly Rate</span>
                  <span>{PROPERTY.price}</span>
                </div>
                <div className="total-row">
                  <span>Concierge Retainer</span>
                  <span>€5,000</span>
                </div>
                <div className="total-row final-total">
                  <span>Estimated Total</span>
                  <span>€50,000</span>
                </div>
              </div>

              <button className="btn btn-primary widget-btn">Request Availability</button>
              
              <p className="widget-footer-text">
                Your request will be confidentially reviewed by our concierge team. No charges are made at this time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
