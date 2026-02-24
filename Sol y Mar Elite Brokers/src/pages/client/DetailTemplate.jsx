import React from 'react';
import { Camera, Map, FileText, PhoneCall, Mail } from 'lucide-react';
import { useParams } from 'react-router-dom';

const DetailTemplate = () => {
  const { id } = useParams();

  return (
    <div className="property-detail-page">
      <div className="detail-hero">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" 
          alt="Villa Aloha Front" 
          className="detail-hero-img"
        />
        <div className="detail-actions">
           <button className="icon-btn"><Camera /> View Photos</button>
           <button className="icon-btn"><FileText /> Architectural Plans</button>
           <button className="icon-btn"><Map /> Virtual Tour</button>
        </div>
      </div>

      <div className="container section detail-grid">
        <div className="detail-main">
          <h1 className="detail-title">Villa Aloha, Nueva Andalucía</h1>
          <p className="detail-price">€4,500,000</p>
          
          <div className="detail-specs-bar">
            <div className="spec-item"><strong>5</strong> Bedrooms</div>
            <div className="spec-item"><strong>6</strong> Bathrooms</div>
            <div className="spec-item"><strong>800 m²</strong> Built Area</div>
            <div className="spec-item"><strong>1,200 m²</strong> Plot</div>
          </div>

          <div className="detail-description">
            <h3>About This Estate</h3>
            <p>
              A magnificent frontline golf estate located in the prestigious area of Nueva Andalucía. 
              This sun-drenched, resort-style luxury villa offers spectacular views, state-of-the-art amenities, 
              and the absolute pinnacle of Marbella living.
            </p>
            <p>
              Featuring expansive open-plan living areas, a gourmet kitchen, and seamless indoor-outdoor flow 
              to the beautifully landscaped Mediterranean gardens and infinity pool.
            </p>
          </div>

          <div className="detail-features">
             <h3>Features & Amenities</h3>
             <ul className="feature-list">
               <li>South Facing</li>
               <li>Infinity Pool</li>
               <li>Home Cinema</li>
               <li>Wine Cellar</li>
               <li>Smart Home System</li>
               <li>Underfloor Heating</li>
             </ul>
          </div>
        </div>

        <div className="detail-sidebar">
          {/* Sticky Inquire Widget */}
          <div className="inquire-widget sticky">
             <h3>Interested in this property?</h3>
             <p>Ref: SYM-{id || '1042'}</p>
             
             <form className="inquire-form">
               <div className="form-group">
                 <input type="text" placeholder="Full Name" className="form-input" />
               </div>
               <div className="form-group">
                 <input type="email" placeholder="Email Address" className="form-input" />
               </div>
               <div className="form-group">
                 <input type="tel" placeholder="Phone / WhatsApp" className="form-input" />
               </div>
               <button type="submit" className="primary-btn submit-btn" style={{width: '100%'}}>
                 Request Viewing
               </button>
             </form>

             <div className="quick-contact">
                <button className="secondary-btn"><PhoneCall size={18} /> Call Us</button>
                <button className="secondary-btn"><Mail size={18} /> Email</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTemplate;
