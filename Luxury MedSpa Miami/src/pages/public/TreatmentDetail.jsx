import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import './TreatmentDetail.css';

// Placeholder mock data that matches our Discovery page list
const TREATMENT_DETAILS = {
  'morpheus8': {
    name: 'Morpheus8 Advanced RF',
    subtitle: 'Microneedling combined with Radiofrequency for ultimate tissue remodeling.',
    price: 'From $800',
    duration: '60 Minutes',
    heroImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    description: "Morpheus8 is a fractional skin treatment that stimulates collagen production of the underlying layers of the dermis. By targeting the deeper layers of the skin, tissues of the face and body can be remodeled to reveal a more radiant youthful appearance.",
    timeline: [
      { day: 'Day 1-2', event: 'Mild redness and swelling. Strict sun avoidance.', status: 'Recovery' },
      { day: 'Day 3-5', event: 'Possible micro-crusting. Makeup can be applied.', status: 'Healing' },
      { day: 'Day 7-14', event: 'Skin begins to look brighter and smoother.', status: 'Initial Results' },
      { day: 'Week 4-6', event: 'Collagen remodeling peaks. Visible tightening.', status: 'Final Results' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  }
};

const TreatmentDetail = () => {
  const { id } = useParams();
  
  // Use Morpheus8 as the default for any missing route so the prototype looks good
  const treatment = TREATMENT_DETAILS[id] || TREATMENT_DETAILS['morpheus8'];

  return (
    <div className="treatment-detail-page animate-fade-in">
      {/* Hero Section */}
      <div className="td-hero" style={{ backgroundImage: `url(${treatment.heroImage})` }}>
        <div className="td-hero-overlay"></div>
        <div className="container td-hero-content">
          <Link to="/treatments" className="td-back-link">
            <ChevronRight style={{ transform: 'rotate(180deg)' }} size={16} /> Back to Treatments
          </Link>
          <h1>{treatment.name}</h1>
          <p>{treatment.subtitle}</p>
        </div>
      </div>

      <div className="container td-layout">
        {/* Main Content Area */}
        <div className="td-main">
          <section className="td-section">
            <h2>The Treatment</h2>
            <p className="td-description">{treatment.description}</p>
            
            <div className="td-quick-facts">
              <div className="fact">
                <Clock size={24} className="text-accent" />
                <div>
                  <strong>Duration</strong>
                  <span>{treatment.duration}</span>
                </div>
              </div>
              <div className="fact">
                <ShieldCheck size={24} className="text-accent" />
                <div>
                  <strong>Downtime</strong>
                  <span>1-3 Days</span>
                </div>
              </div>
            </div>
          </section>

          {/* Full-Screen style Results Gallery Demo */}
          <section className="td-section">
            <h2>Clinical Results</h2>
            <div className="td-gallery">
              {treatment.gallery.map((img, idx) => (
                <div key={idx} className="td-gallery-item" style={{ backgroundImage: `url(${img})` }}>
                  <div className="td-gallery-label">Before / After</div>
                </div>
              ))}
            </div>
          </section>

          {/* Recovery Timeline Table */}
          <section className="td-section">
            <h2>Recovery Timeline</h2>
            <div className="recovery-table-container">
              <table className="recovery-table">
                <thead>
                  <tr>
                    <th>Timeline</th>
                    <th>What to Expect</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {treatment.timeline.map((item, idx) => (
                    <tr key={idx}>
                      <td><strong>{item.day}</strong></td>
                      <td>{item.event}</td>
                      <td><span className={`status-badge ${item.status.toLowerCase().replace(' ', '-')}`}>{item.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sticky Sidebar Widget */}
        <aside className="td-sidebar-container">
          <div className="td-sticky-widget glass-panel">
            <h3>Request Appointment</h3>
            <div className="widget-price">
              <span>Starting at</span>
              <strong>{treatment.price}</strong>
            </div>
            <ul className="widget-benefits">
              <li>✓ Board-certified providers</li>
              <li>✓ Personalized treatment plan</li>
              <li>✓ Complimentary follow-up</li>
            </ul>
            <Link to="/contact" className="btn-primary widget-cta">
              <Calendar size={18} /> Book Now
            </Link>
            <p className="widget-disclaimer">
              *A $100 deposit is required to secure your booking. Reimbursable against treatment.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TreatmentDetail;
