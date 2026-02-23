import React from 'react';
import { Calendar, Plane, Map, Coffee } from 'lucide-react';
import './LifestyleGuide.css';

const LifestyleGuide = () => {
  return (
    <div className="lifestyle-page animate-fade-in">
      {/* Hero Section */}
      <div className="lifestyle-hero">
        <div className="hero-content">
          <h1>The Aspen Experience</h1>
          <p>Elevating the art of living in the Roaring Fork Valley.</p>
        </div>
      </div>

      <div className="container lifestyle-content">
        {/* Winter Event Calendar */}
        <section className="guide-section">
          <div className="section-header-lifestyle">
            <Calendar size={32} className="section-icon" />
            <h2>Aspen Winter Event Calendar</h2>
            <p>Curated highlights for the upcoming season.</p>
          </div>
          
          <div className="calendar-grid">
            <div className="event-card">
              <div className="event-date">
                <span className="month">Dec</span>
                <span className="day">12</span>
              </div>
              <div className="event-details">
                <h3>Aspen Mountain Opening Day</h3>
                <p>Kick off the ski season with first tracks and celebration at the Sundeck.</p>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-date">
                <span className="month">Dec</span>
                <span className="day">20</span>
              </div>
              <div className="event-details">
                <h3>12 Days of Aspen</h3>
                <p>Downtown transforms into a winter wonderland with free events, caroling, and ice skating.</p>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <span className="month">Jan</span>
                <span className="day">25</span>
              </div>
              <div className="event-details">
                <h3>Winter X Games Aspen</h3>
                <p>The world's premier winter action sports event returns to Buttermilk Mountain.</p>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <span className="month">Feb</span>
                <span className="day">14</span>
              </div>
              <div className="event-details">
                <h3>Valentine's Day Cloud Nine</h3>
                <p>Exclusive dining experience at Aspen Highlands' most infamous alpine bistro.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Private Aviation Guide */}
        <section className="guide-section">
          <div className="section-header-lifestyle">
            <Plane size={32} className="section-icon" />
            <h2>Private Aviation Guide</h2>
            <p>Seamless arrival to Aspen/Pitkin County Airport (ASE).</p>
          </div>

          <div className="aviation-grid">
            <div className="aviation-info-card">
              <h3>ASE Airport Details</h3>
              <ul className="info-list">
                <li><strong>Elevation:</strong> 7,820 ft (2,384 m)</li>
                <li><strong>Runway:</strong> 8,006 ft x 100 ft</li>
                <li><strong>Curfew:</strong> 11:00 PM to 7:00 AM (Strictly Enforced)</li>
                <li><strong>FBO:</strong> Atlantic Aviation</li>
              </ul>
              <button className="btn-secondary w-100 mt-4">Download FBO Protocol</button>
            </div>
            
            <div className="aviation-image">
              <img src="https://images.unsplash.com/photo-1543781702-0e9e1c2dfc18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Private Jet" />
            </div>
          </div>
        </section>

        {/* Local Curation */}
        <section className="guide-section bg-light-surface rounded-section">
          <div className="section-header-lifestyle">
            <Coffee size={32} className="section-icon" />
            <h2>Altitude Curation: Dining & Leisure</h2>
            <p>Our brokers' personal recommendations for the perfect Aspen weekend.</p>
          </div>

          <div className="curation-grid">
            <div className="curation-card">
              <div className="curation-image-wrapper">
                 <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fine Dining" />
              </div>
              <div className="curation-details">
                <h3>Matsuhisa Aspen</h3>
                <p>Chef Nobu's signature new-style Japanese cuisine set in a 120-year-old Main Street Victorian house.</p>
              </div>
            </div>

            <div className="curation-card">
              <div className="curation-image-wrapper">
                 <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Spa" />
              </div>
              <div className="curation-details">
                <h3>Remède Spa at St. Regis</h3>
                <p>The ultimate alpine sanctuary offering customized treatments and an oxygen lounge.</p>
              </div>
            </div>
            
            <div className="curation-card">
              <div className="curation-image-wrapper">
                 <img src="https://images.unsplash.com/photo-1478148873730-a9cb5c5cd83c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Members Club" />
              </div>
              <div className="curation-details">
                <h3>The Caribou Club</h3>
                <p>Aspen's legendary private membership club for world-class dining and dancing.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LifestyleGuide;
