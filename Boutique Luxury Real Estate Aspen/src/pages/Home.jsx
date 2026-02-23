import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight, Bed, Bath, Square } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-video"
          poster="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
          {/* Replace with actual video URL if available. Using an image poster for the prototype. */}
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="hero-title">Elevate Your Altitude</h1>
          <p className="hero-subtitle">Boutique luxury real estate curation in Aspen, Colorado.</p>
          
          <div className="search-bar">
            <div className="search-input-wrapper">
              <MapPin className="search-icon" size={20} />
              <input type="text" placeholder="Discover Aspen (e.g. Red Mountain, Snowmass)..." />
            </div>
            <button className="btn-primary search-btn">
              <Search size={18} /> Search
            </button>
          </div>
        </div>
      </section>

      {/* Signature Listings */}
      <section className="signature-listings container">
        <div className="section-header">
          <h2>Signature Listings</h2>
          <Link to="/discovery" className="view-all-link">View Portfolio <ArrowRight size={18} /></Link>
        </div>

        <div className="listing-grid">
          {/* Listing Card 1 */}
          <Link to="/property/red-mountain" className="card listing-card">
            <div className="listing-image-wrapper">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Red Mountain Peak Estate" className="listing-image" />
              <div className="listing-badge">Exclusive</div>
            </div>
            <div className="listing-details">
              <h3>Red Mountain Peak Estate</h3>
              <p className="listing-location">Red Mountain, Aspen</p>
              <div className="listing-price">$32,500,000</div>
              <div className="listing-specs">
                <span><Bed size={16}/> 6 Beds</span>
                <span><Bath size={16}/> 8 Baths</span>
                <span><Square size={16}/> 12,400 sqft</span>
              </div>
            </div>
          </Link>

          {/* Listing Card 2 */}
          <Link to="/property/snowmass" className="card listing-card">
            <div className="listing-image-wrapper">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Snowmass Ski-in Estate" className="listing-image" />
            </div>
            <div className="listing-details">
              <h3>Snowmass Ski-in Estate</h3>
              <p className="listing-location">Snowmass Village</p>
              <div className="listing-price">$18,900,000</div>
              <div className="listing-specs">
                <span><Bed size={16}/> 5 Beds</span>
                <span><Bath size={16}/> 6 Baths</span>
                <span><Square size={16}/> 8,200 sqft</span>
              </div>
            </div>
          </Link>

          {/* Listing Card 3 */}
          <Link to="/property/downtown" className="card listing-card">
            <div className="listing-image-wrapper">
              <img src="https://images.unsplash.com/photo-1628155556209-668b5a03e6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Downtown Aspen Penthouse" className="listing-image" />
            </div>
            <div className="listing-details">
              <h3>Downtown Aspen Penthouse</h3>
              <p className="listing-location">Downtown Aspen</p>
              <div className="listing-price">$14,250,000</div>
              <div className="listing-specs">
                <span><Bed size={16}/> 4 Beds</span>
                <span><Bath size={16}/> 4.5 Baths</span>
                <span><Square size={16}/> 4,500 sqft</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy bg-white">
        <div className="container overflow-hidden">
          <div className="philosophy-grid">
            <div className="philosophy-content">
              <h2>The Altitude Philosophy</h2>
              <p>We believe that luxury is not just a price point, but an experience. Our curated portfolio represents the pinnacle of Aspen real estate, offering discerning clients access to the most exclusive properties in the Roaring Fork Valley.</p>
              <Link to="/about" className="btn-secondary">Meet Our Team</Link>
            </div>
            <div className="philosophy-image-wrapper">
              <img src="https://images.unsplash.com/photo-1551524164-687a40fb6425?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Aspen mountains" className="philosophy-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
