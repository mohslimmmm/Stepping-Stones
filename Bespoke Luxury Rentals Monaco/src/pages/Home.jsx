import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Users, MapPin, UtensilsCrossed, Anchor, Flag, Headphones } from "lucide-react";
import "./Home.css";

const EXPERIENCE_SERVICES = [
  {
    icon: UtensilsCrossed,
    title: "Michelin Dining",
    description: "Priority reservations at Monaco's most coveted tables, from Joël Robuchon to Le Louis XV."
  },
  {
    icon: Anchor,
    title: "Yacht Charters",
    description: "Curated fleet of superyachts and day cruisers, crewed and ready for your Mediterranean itinerary."
  },
  {
    icon: Flag,
    title: "Grand Prix Access",
    description: "Exclusive pit-lane tours, paddock passes, and private rooftop viewing suites during race week."
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    description: "A dedicated lifestyle manager available around the clock — no request is too extraordinary."
  }
];

const MOCK_PROPERTIES = [
  {
    id: "villa-paloma",
    name: "Villa Paloma",
    type: "Cliffside Villa",
    guests: 12,
    price: "€45,000/week",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    features: ["Sea View", "Helipad", "Private Chef"],
  },
  {
    id: "penthouse-azure",
    name: "Penthouse Azure",
    type: "Penthouse",
    guests: 6,
    price: "€28,000/week",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    features: ["Panoramic Balcony", "Infinity Pool", "Casino Adjacent"],
  },
  {
    id: "estate-grimaldi",
    name: "Estate Grimaldi",
    type: "Historic Estate",
    guests: 18,
    price: "€85,000/week",
    image:
      "https://images.unsplash.com/photo-1613490908571-9ce224ce340e?auto=format&fit=crop&q=80",
    features: ["Event Space", "Yacht Dock", "Full Staff"],
  },
];

const Home = () => {
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <img
          className="hero-background"
          src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=2000&q=85"
          alt="Monaco luxury waterfront"
        />

        <div className="hero-content">
          <h1 className="hero-title">Riviera Royale</h1>
          <p className="hero-subtitle">
            Discover the pinnacle of Mediterranean exclusivity.
          </p>

          {/* Find Your Retreat Search Widget */}
          <div className="search-widget">
            <h2 className="search-title">Find Your Retreat</h2>
            <div className="search-form">
              <div className="search-input-group">
                <MapPin className="search-icon" size={20} />
                <div className="search-field">
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="Monaco, Monte Carlo"
                    readOnly
                  />
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
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
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
          <p className="section-subtitle">
            Curated estates for the world's most discerning travelers.
          </p>
        </div>

        <div className="property-grid">
          {MOCK_PROPERTIES.map((property) => (
            <Link
              to={`/property/${property.id}`}
              key={property.id}
              className="property-card"
            >
              <div className="property-image-wrapper">
                <img
                  src={property.image}
                  alt={property.name}
                  className="property-image"
                />
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
                    <span key={idx} className="feature-tag">
                      {feature}
                    </span>
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

        {/* Section Header */}
        <div className="exp-header container">
          <span className="exp-label">The Riviera Royale Way</span>
          <h2 className="exp-main-title">Beyond Accommodation</h2>
          <p className="exp-description">
            Every stay is orchestrated by our in-house lifestyle team — so the
            only thing you need to decide is how to spend your day in paradise.
          </p>
        </div>

        {/* Service Cards */}
        <div className="exp-services container">
          {EXPERIENCE_SERVICES.map((service, idx) => (
            <div className="exp-service-card" key={idx}>
              <div className="exp-service-icon">
                <service.icon size={24} />
              </div>
              <h3 className="exp-service-title">{service.title}</h3>
              <p className="exp-service-desc">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bento Image Grid */}
        <div className="exp-bento container">
          <div className="exp-bento-large">
            <img
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=80"
              alt="Monaco bay"
            />
            <div className="exp-bento-caption">Monaco Bay</div>
          </div>
          <div className="exp-bento-stack">
            <div className="exp-bento-small">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
                alt="Fine dining"
              />
              <div className="exp-bento-caption">Private Dining</div>
            </div>
            <div className="exp-bento-small">
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=600&q=80"
                alt="Grand Prix"
              />
              <div className="exp-bento-caption">Grand Prix Season</div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="exp-stats">
          <div className="exp-stat">
            <span className="exp-stat-number">47+</span>
            <span className="exp-stat-label">Exclusive Properties</span>
          </div>
          <div className="exp-stat-divider" />
          <div className="exp-stat">
            <span className="exp-stat-number">12</span>
            <span className="exp-stat-label">Years in Monaco</span>
          </div>
          <div className="exp-stat-divider" />
          <div className="exp-stat">
            <span className="exp-stat-number">98%</span>
            <span className="exp-stat-label">Client Satisfaction</span>
          </div>
          <div className="exp-stat-divider" />
          <div className="exp-stat">
            <span className="exp-stat-number">24/7</span>
            <span className="exp-stat-label">Concierge Service</span>
          </div>
        </div>

        {/* CTA */}
        <div className="exp-cta">
          <Link to="/lifestyle" className="exp-cta-btn">
            Explore the Lifestyle Guide
            <span className="exp-cta-arrow">→</span>
          </Link>
        </div>

      </section>
    </div>
  );
};

export default Home;
