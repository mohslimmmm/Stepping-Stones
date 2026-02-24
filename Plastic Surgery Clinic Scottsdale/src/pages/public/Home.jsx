import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import './Home.css';

export default function Home() {
  const featuredProcedures = [
    {
      id: "deep-plane-facelift",
      name: "Signature Deep-Plane Facelift",
      description: "Comprehensive facial rejuvenation designed for natural, enduring results.",
      image: "/images/home_facelift_1771894311782.png"
    },
    {
      id: "rhinoplasty",
      name: "Precision Rhinoplasty",
      description: "Structural refinement utilizing advanced preservation techniques.",
      image: "/images/home_rhinoplasty_1771894326714.png"
    },
    {
      id: "breast-augmentation",
      name: "Bespoke Breast Augmentation",
      description: "Tailored implants with a focus on proportion and sophisticated aesthetic.",
      image: "/images/home_breast_aug_1771894341156.png"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <img 
            src="/images/home_hero_arch_1771894358669.png" 
            alt="Desert Sculpt Clinic Architecture" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-title">Redefining Aesthetic<br/>Architecture.</h1>
          <p className="hero-subtitle">Experience the pinnacle of surgical precision and artistic vision in the heart of Scottsdale.</p>
          <div className="hero-actions">
            <Link className="btn-primary" to="/contact">Request Consultation</Link>
            <Link className="btn-outline-light" to="/discovery">Explore Procedures</Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section section">
        <div className="container philosophy-container">
          <div className="philosophy-text">
            <h2 className="section-title">Sophisticated Minimalism.</h2>
            <p className="section-body">
              At Desert Sculpt, we believe plastic surgery is a pursuit of essential balance. 
              Our approach marries advanced surgical techniques with an artistic understanding 
              of proportion to deliver results that are quietly transformative and undeniably elegant.
            </p>
            <Link to="/about" className="link-with-icon">
              Read Our Philosophy <ArrowRight size={16} />
            </Link>
          </div>
          <div className="philosophy-image-container">
            <img 
              src="/images/home_clinic_detail_1771894374452.png" 
              alt="Clinic Interior Details" 
              className="philosophy-image"
            />
          </div>
        </div>
      </section>

      {/* Featured Procedures */}
      <section className="featured-section section">
        <div className="container">
          <div className="featured-header">
            <h2 className="section-title">Signature Procedures.</h2>
            <Link to="/discovery" className="link-with-icon">
              View All Procedures <ArrowRight size={16} />
            </Link>
          </div>
          <div className="featured-grid">
            {featuredProcedures.map(proc => (
              <Link to={`/procedure/${proc.id}`} key={proc.id} className="procedure-card">
                <div className="procedure-img-wrapper">
                  <img src={proc.image} alt={proc.name} className="procedure-img" />
                </div>
                <div className="procedure-card-content">
                  <h3 className="procedure-card-title">{proc.name}</h3>
                  <p className="procedure-card-desc">{proc.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section className="trust-section section">
        <div className="container trust-container">
          <Star className="trust-icon" size={32} />
          <h2 className="trust-quote">"The experience from walk-in to recovery was nothing short of exceptional. A true mastery of the craft."</h2>
          <p className="trust-author">— S.R., Deep-Plane Facelift Patient</p>
        </div>
      </section>

      {/* Sticky Action Button */}
      <Link to="/contact" className="sticky-action-btn">
        Begin Your Journey
      </Link>
    </div>
  );
}
