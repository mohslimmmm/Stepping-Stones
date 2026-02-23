import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Calendar, Download, Share2, Heart, ArrowLeft } from 'lucide-react';
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();

  // Mock data for the specific property
  const property = {
    id: id,
    title: id === 'red-mountain' ? 'Red Mountain Peak Estate' : 'Luxury Alpine Estate',
    location: 'Red Mountain, Aspen, Colorado',
    price: '$32,500,000',
    description: 'A masterpiece of mountain modern architecture, this newly constructed estate represents the pinnacle of luxury living in Aspen. Floor-to-ceiling glass walls frame iconic views of Aspen Mountain, while rich natural materials create an atmosphere of cozy elegance. Features include a private spa suite, climate-controlled wine room, and an expansive outdoor entertainment deck with infinity pool.',
    beds: 6,
    baths: 8,
    sqft: '12,400',
    acres: '2.5',
    yearBuilt: '2025',
    features: ['Ski-in/Ski-out Access', 'Home Theater', 'Wine Cellar', 'Heated Driveway', 'Smart Home Integration', 'Infinity Pool', 'Guest House'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1628155556209-668b5a03e6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  };

  return (
    <div className="property-detail-page animate-fade-in">
      {/* Hero Gallery */}
      <div className="property-hero">
        <Link to="/discovery" className="back-link"><ArrowLeft size={16} /> Back to Portfolio</Link>
        <div className="main-image">
          <img src={property.images[0]} alt={property.title} />
        </div>
        <div className="side-images">
          <img src={property.images[1]} alt={`${property.title} interior`} />
          <img src={property.images[2]} alt={`${property.title} deck`} />
        </div>
      </div>

      <div className="container property-content">
        <div className="property-main">
          <div className="property-header">
            <div className="title-section">
              <h1>{property.title}</h1>
              <p className="property-location"><MapPin size={18} /> {property.location}</p>
            </div>
            <div className="price-section">
              <div className="property-price">{property.price}</div>
              <div className="action-buttons">
                <button className="icon-btn"><Share2 size={20} /></button>
                <button className="icon-btn"><Heart size={20} /></button>
              </div>
            </div>
          </div>

          <div className="property-stats">
            <div className="stat-item">
              <span className="stat-value"><Bed size={20}/> {property.beds}</span>
              <span className="stat-label">Bedrooms</span>
            </div>
            <div className="stat-item">
              <span className="stat-value"><Bath size={20}/> {property.baths}</span>
              <span className="stat-label">Bathrooms</span>
            </div>
            <div className="stat-item">
              <span className="stat-value"><Square size={20}/> {property.sqft}</span>
              <span className="stat-label">Square Feet</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{property.acres}</span>
              <span className="stat-label">Acres</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{property.yearBuilt}</span>
              <span className="stat-label">Built</span>
            </div>
          </div>

          <div className="property-description">
            <h2>About this Property</h2>
            <p>{property.description}</p>
          </div>

          <div className="property-features">
            <h2>Signature Features</h2>
            <ul className="features-list">
              {property.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="property-video">
            <h2>Cinematic Tour</h2>
            <div className="video-placeholder">
              <img src={property.images[3]} alt="Video Thumbnail" />
              <div className="play-button">▶</div>
            </div>
          </div>
          
          <div className="property-map">
             <h2>Property Boundaries</h2>
             <div className="map-placeholder">
               <MapPin size={48} color="var(--accent-primary)" opacity={0.5} />
               <p>Interactive Map Integration</p>
             </div>
          </div>
        </div>

        {/* Sticky Widget */}
        <div className="property-sidebar">
          <div className="schedule-widget">
            <h3>Private Showing</h3>
            <p>Experience {property.title} in person.</p>
            <form className="schedule-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <div className="date-picker">
                <Calendar size={18} className="input-icon" />
                <input type="date" required />
              </div>
              <textarea placeholder="Additional requests..." rows="3"></textarea>
              <button type="submit" className="btn-primary w-100">Request Showing</button>
            </form>
            <div className="widget-footer">
              <button className="btn-secondary w-100"><Download size={18} /> Download Disclosure</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
