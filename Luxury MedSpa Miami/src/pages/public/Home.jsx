import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Cinematic Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          {/* Using a high-quality static image as a placeholder for the cinematic video */}
          <div className="hero-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}></div>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-content">
          <h1 className="hero-title">Refined Aesthetics,<br/>Quiet Luxury.</h1>
          <p className="hero-subtitle">Experience Miami's premier destination for advanced skin science and facial balancing.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary hover-lift" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={18} />
              Book Consultation
            </Link>
            <Link to="/treatments" className="btn-secondary" style={{ color: 'white', borderColor: 'white' }}>
              View Treatments
            </Link>
          </div>
        </div>

        {/* Floating Booking Widget */}
        <div className="floating-booking-widget glass-panel">
          <div className="widget-info">
            <span className="widget-label">Next Available:</span>
            <span className="widget-date">Tomorrow, 10:00 AM</span>
          </div>
          <Link to="/contact" className="widget-btn">
            Secure Time <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Signature Treatments Section */}
      <section className="signature-treatments container section-spacing">
        <div className="section-header">
          <div>
            <h2 className="section-title">Signature Treatments</h2>
            <p className="section-subtitle">Curated protocols for exceptional results.</p>
          </div>
          <Link to="/treatments" className="view-all-link">
            Explore All <ChevronRight size={16} />
          </Link>
        </div>

        <div className="treatments-grid">
          {/* Treatment Card 1 */}
          <div className="treatment-card hover-lift">
            <div className="card-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}></div>
            <div className="card-content">
              <span className="treatment-category">Advanced RF</span>
              <h3>Morpheus8</h3>
              <p>Deep tissue remodeling for unmatched skin tightening and contouring.</p>
              <Link to="/treatments/morpheus8" className="card-link">
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Treatment Card 2 */}
          <div className="treatment-card hover-lift">
            <div className="card-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}></div>
            <div className="card-content">
              <span className="treatment-category">Injectables</span>
              <h3>Facial Balancing</h3>
              <p>Strategic filler placement to restore harmony and youthfulness.</p>
              <Link to="/treatments/facial-balancing" className="card-link">
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Treatment Card 3 */}
          <div className="treatment-card hover-lift">
            <div className="card-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}></div>
            <div className="card-content">
              <span className="treatment-category">Laser Therapy</span>
              <h3>BBL Hero</h3>
              <p>BroadBand Light therapy to obliterate pigmentation and redness.</p>
              <Link to="/treatments/bbl-hero" className="card-link">
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Mini-Section */}
      <section className="trust-banner glass-panel">
        <div className="container trust-container">
          <div className="trust-item">
            <Star size={24} className="text-accent" />
            <span>Award-Winning Clinic</span>
          </div>
          <div className="trust-item">
            <Star size={24} className="text-accent" />
            <span>Board-Certified Providers</span>
          </div>
          <div className="trust-item">
            <Star size={24} className="text-accent" />
            <span>Over 10,000 Lives Transformed</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
