import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './LifestyleGuide.css';

const LifestyleGuide = () => {
  return (
    <div className="lifestyle-page animate-fade-in">
      <div className="lifestyle-header">
        <div className="container">
          <h1>The Aura Journal</h1>
          <p>Elevated insights on aesthetic medicine, wellness, and post-care.</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        {/* Featured Editorial */}
        <article className="featured-article glass-panel">
          <div className="featured-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' }}></div>
          <div className="featured-content">
            <span className="article-tag">Essential Guide</span>
            <h2>Miami Summer Skincare Protocol</h2>
            <p className="article-excerpt">
              Navigating the intense Florida sun requires a strategic approach to medical-grade skincare. Discover our Medical Director's curated protocol for protecting your investment while maintaining a luminous glow.
            </p>
            <Link to="#" className="read-more-link">
              Read the Full Guide <ChevronRight size={16} />
            </Link>
          </div>
        </article>

        <div className="editorial-grid">
          {/* Article 1 */}
          <article className="editorial-card hover-lift">
            <div className="card-image" style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1683134297492-cce5fc6dae31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BhfGVufDB8fDB8fHww")' }}></div>
            <div className="card-content">
              <span className="article-tag">Post-Care</span>
              <h3>The Critical First 48 Hours</h3>
              <p>Everything you need to know about post-treatment care following injectables to minimize bruising and optimize results.</p>
              <Link to="#" className="read-more-link">
                Read More <ChevronRight size={16} />
              </Link>
            </div>
          </article>

          {/* Article 2 */}
          <article className="editorial-card hover-lift">
            <div className="card-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}></div>
            <div className="card-content">
              <span className="article-tag">Wellness</span>
              <h3>IV Therapy: Beyond the Hangover</h3>
              <p>How NAD+ and customized vitamin infusions are revolutionizing cellular aging and cognitive performance.</p>
              <Link to="#" className="read-more-link">
                Read More <ChevronRight size={16} />
              </Link>
            </div>
          </article>

          {/* Article 3 */}
          <article className="editorial-card hover-lift">
            <div className="card-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}></div>
            <div className="card-content">
              <span className="article-tag">Treatment Prep</span>
              <h3>Preparing for Morpheus8</h3>
              <p>A comprehensive guide to preparing your skin for RF microneedling to ensure maximum comfort and efficacy.</p>
              <Link to="#" className="read-more-link">
                Read More <ChevronRight size={16} />
              </Link>
            </div>
          </article>
        </div>
        
        {/* Newsletter Signup (Dummy) */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <h2>Join the Inner Circle</h2>
            <p>Subscribe for exclusive access to VIP events, treatment launches, and expert insights.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LifestyleGuide;
