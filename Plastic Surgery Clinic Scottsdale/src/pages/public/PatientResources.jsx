import { Plane, CreditCard, ChevronRight } from 'lucide-react';
import './PatientResources.css';

export default function PatientResources() {
  return (
    <div className="resources-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Patient Resources</h1>
          <p className="page-subtitle">Curated guidance for our bespoke experience.</p>
        </div>
      </div>

      <div className="container section">
        <div className="editorial-layout">
          {/* Fly-in Concierge Section */}
          <article className="editorial-article">
            <div className="article-image-box">
              <img 
                src="https://images.unsplash.com/photo-1542314831-c5a4d407e3d1?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Luxury Scottsdale Resort" 
                className="article-image"
              />
              <div className="article-badge"><Plane size={18} /> Fly-In Surgery</div>
            </div>
            <div className="article-content">
              <h2 className="article-title">The Out-of-Town Patient Experience.</h2>
              <p className="article-text">
                Desert Sculpt is a destination for discerning clientele seeking unparalleled surgical artistry. 
                Our dedicated flight concierge team orchestrates every detail of your journey to Scottsdale.
              </p>
              <ul className="article-list">
                <li><ChevronRight size={16} className="list-icon"/> Coordination of private transport from Phoenix Sky Harbor (PHX) or Scottsdale Airport (SCF).</li>
                <li><ChevronRight size={16} className="list-icon"/> Preferential rates at partnered five-star recovery resorts.</li>
                <li><ChevronRight size={16} className="list-icon"/> 24/7 access to our nursing staff during your initial recovery phase in Scottsdale.</li>
              </ul>
            </div>
          </article>

          {/* Financing Options Section */}
          <article className="editorial-article reverse">
            <div className="article-image-box">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Financing and Consultation" 
                className="article-image"
              />
              <div className="article-badge"><CreditCard size={18} /> Financing Options</div>
            </div>
            <div className="article-content">
              <h2 className="article-title">Investing in You.</h2>
              <p className="article-text">
                We believe that transformative aesthetic care should be accessible. Our patient care coordinators 
                are available to discuss bespoke financing plans designed around your lifestyle.
              </p>
              <div className="finance-options">
                <div className="finance-card">
                  <h3 className="finance-card-title">CareCredit®</h3>
                  <p className="finance-card-text">Special financing options with low minimum monthly payments.</p>
                </div>
                <div className="finance-card">
                  <h3 className="finance-card-title">Alphaeon Credit</h3>
                  <p className="finance-card-text">Exclusive financing for board-certified plastic surgery procedures.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
