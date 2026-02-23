import { Award, Shield } from 'lucide-react';
import './TrustAbout.css';

export default function TrustAbout() {
  const beforeAfterGallery = [
    {
      id: 1,
      procedure: "Signature Deep-Plane Facelift",
      before: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400&h=400",
      after: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400&h=400" // Concept: Showing same base image for placeholder but structured for distinct B/A
    },
    {
      id: 2,
      procedure: "Precision Rhinoplasty",
      before: "https://images.unsplash.com/photo-1506122716200-0df9a7be8e37?auto=format&fit=crop&q=80&w=400&h=400",
      after: "https://images.unsplash.com/photo-1506122716200-0df9a7be8e37?auto=format&fit=crop&q=80&w=400&h=400"
    }
  ];

  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Trust & Artistry</h1>
          <p className="page-subtitle">Meet the visionaries behind Desert Sculpt.</p>
        </div>
      </div>

      {/* Surgeon Bio Section */}
      <section className="surgeon-section section">
        <div className="container surgeon-container">
          <div className="surgeon-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Dr. Alexander Brooks" 
              className="surgeon-image"
            />
            <div className="surgeon-credentials">
              <div className="credential-badge">
                <Shield size={20} className="credential-icon" />
                <span>Board Certified</span>
              </div>
              <div className="credential-badge">
                <Award size={20} className="credential-icon" />
                <span>Top Doctor 2024</span>
              </div>
            </div>
          </div>
          <div className="surgeon-bio">
            <h2 className="surgeon-name">Dr. Alexander Brooks, MD, FACS</h2>
            <p className="surgeon-title">Founder & Lead Surgeon</p>
            
            <div className="bio-content">
              <p>
                Dr. Brooks is a double board-certified facial plastic and reconstructive surgeon renowned for his "invisible" structural approach. With over 15 years of exclusive focus on the face and neck, his techniques are designed not just to tighten, but to fundamentally restore youthful architecture.
              </p>
              <p>
                A frequent lecturer at national symposiums, Dr. Brooks pioneered customized variations of the deep-plane facelift, emphasizing rapid recovery and completely natural dynamic expression. 
              </p>
            </div>
            
            <div className="affiliations">
              <h3 className="affiliations-title">Professional Affiliations</h3>
              <div className="affiliations-grid">
                {/* Simulated Logos with text for prototype */}
                <div className="affiliation-logo">ASPS Member</div>
                <div className="affiliation-logo">FACS</div>
                <div className="affiliation-logo">AAFPRS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy-Focused Before/After Gallery */}
      <section className="bg-gallery section">
        <div className="container">
          <div className="gallery-header">
            <h2 className="section-title">Clinical Outcomes</h2>
            <p className="section-body">
              Hover over images to reveal results. We employ this privacy-first approach out of deep respect for our patients' confidentiality.
            </p>
          </div>

          <div className="ba-grid">
            {beforeAfterGallery.map(item => (
              <div key={item.id} className="ba-card">
                <div className="ba-images">
                  <div className="ba-image-container before">
                    <img src={item.before} alt="Before" className="ba-img blurred-img" />
                    <span className="ba-label">Before</span>
                    <div className="blur-overlay">
                      <span>Hover to View</span>
                    </div>
                  </div>
                  <div className="ba-image-container after">
                    <img src={item.after} alt="After" className="ba-img blurred-img" />
                    <span className="ba-label">After</span>
                    <div className="blur-overlay">
                      <span>Hover to View</span>
                    </div>
                  </div>
                </div>
                <div className="ba-details">
                  <h3 className="ba-procedure">{item.procedure}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
