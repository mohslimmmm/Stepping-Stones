import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import './ProcedureDetail.css';

export default function ProcedureDetail() {
  const { id } = useParams();

  // Mock data for the specific Deep-Plane Facelift example or fallback
  const procedure = {
    name: id === 'deep-plane-facelift' ? "Signature Deep-Plane Facelift" : "Procedure Details",
    subtitle: "Advanced structural rejuvenation for enduring, natural elegance.",
    description: "Unlike traditional facelifts that only tighten the skin, the deep-plane technique repositions the underlying muscular framework (SMAS) of the face. This structural approach ensures tension is removed from the skin, resulting in a completely natural, un-pulled appearance that restores the midface, jawline, and neck simultaneously.",
    duration: "4 to 6 Hours",
    anesthesia: "General or Deep IV Sedation",
    recovery: "10 to 14 Days",
    image: "/images/procedure_hero_1771894480921.png"
  };

  return (
    <div className="procedure-detail-page">
      {/* Hero */}
      <div className="proc-hero">
        <img src={procedure.image} alt={procedure.name} className="proc-hero-bg" />
        <div className="proc-hero-overlay"></div>
        <div className="container proc-hero-content">
          <h1 className="proc-hero-title">{procedure.name}</h1>
          <p className="proc-hero-subtitle">{procedure.subtitle}</p>
        </div>
      </div>

      <div className="container proc-layout section">
        {/* Main Content */}
        <div className="proc-main-content">
          <div className="proc-overview-grid">
            <div className="overview-item">
              <Clock className="overview-icon" />
              <div>
                <span className="overview-label">Duration</span>
                <span className="overview-value">{procedure.duration}</span>
              </div>
            </div>
            <div className="overview-item">
              <ShieldCheck className="overview-icon" />
              <div>
                <span className="overview-label">Anesthesia</span>
                <span className="overview-value">{procedure.anesthesia}</span>
              </div>
            </div>
            <div className="overview-item">
              <Calendar className="overview-icon" />
              <div>
                <span className="overview-label">Recovery</span>
                <span className="overview-value">{procedure.recovery}</span>
              </div>
            </div>
          </div>

          <div className="proc-section">
            <h2 className="proc-h2">The Deep-Plane Difference</h2>
            <p className="proc-text">{procedure.description}</p>
            
            {/* 3D Interactive Diagram Area (Simulated) */}
            <div className="diagram-area">
              <div className="diagram-header">
                <h3>Anatomical Focus Array</h3>
                <span className="diagram-badge">Interactive 3D View</span>
              </div>
              <div className="diagram-visual">
                <img 
                  src="/images/procedure_3d_anatomy_1771894495546.png" 
                  alt="3D Facial Anatomy Diagram" 
                  className="diagram-img"
                />
                <div className="diagram-point point-1">
                  <span className="point-pulse"></span>
                  <span className="point-label">SMAS Layer</span>
                </div>
                <div className="diagram-point point-2">
                  <span className="point-pulse"></span>
                  <span className="point-label">Malar Fat Pad</span>
                </div>
                <div className="diagram-point point-3">
                  <span className="point-pulse"></span>
                  <span className="point-label">Platysma Bands</span>
                </div>
              </div>
            </div>
          </div>

          <div className="proc-section">
            <h2 className="proc-h2">Recovery Timeline</h2>
            <div className="recovery-table-wrapper">
              <table className="recovery-table">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>Expectation</th>
                    <th>Activity Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Days 1-3</strong></td>
                    <td>Maximum swelling; bruised appearance. Tightness in neck.</td>
                    <td>Strict rest. Elevated head. Short walks indoors.</td>
                  </tr>
                  <tr>
                    <td><strong>Days 4-7</strong></td>
                    <td>Swelling begins to subside. Sutures removed (if applicable).</td>
                    <td>Light daily activities at home. No bending/lifting.</td>
                  </tr>
                  <tr>
                    <td><strong>Week 2</strong></td>
                    <td>'Social recovery' typically achieved. Bruising fades.</td>
                    <td>Return to desk work. Light socializing.</td>
                  </tr>
                  <tr>
                    <td><strong>Weeks 4-6</strong></td>
                    <td>Residual micro-swelling continues to resolve.</td>
                    <td>Resume full exercise routine.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sticky Sidebar Widget */}
        <aside className="proc-sidebar">
          <div className="sticky-widget">
            <h3 className="widget-title">Private Consultation</h3>
            <p className="widget-text">Take the first step toward your aesthetic goals in our discrete, world-class facility.</p>
            <form className="widget-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="input-field mb-3" />
              <input type="email" placeholder="Email Address" className="input-field mb-3" />
              <input type="tel" placeholder="Phone Number" className="input-field mb-4" />
              <button className="btn-primary widget-btn">Request Availability</button>
            </form>
            <div className="widget-footer">
              <Link to="/contact" className="virtual-consult-link">
                Or submit a Virtual Consult <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
