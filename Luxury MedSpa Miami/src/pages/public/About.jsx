import { CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <h1>Pioneering Aesthetic Excellence</h1>
          <p>Where advanced science meets quiet luxury.</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        
        {/* Medical Director Section */}
        <section className="director-section glass-panel">
          <div className="director-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}>
            <div className="board-badge">
              <CheckCircle size={20} className="text-accent" />
              <span>Board-Certified</span>
            </div>
          </div>
          <div className="director-content">
            <span className="subtitle">Meet The Medical Director</span>
            <h2>Dr. Elena Rostova, MD</h2>
            <p className="bio-text">
              Dr. Rostova is a double board-certified physician specializing in non-surgical facial rejuvenation and cellular medicine. With over 15 years of experience in aesthetic medicine, she has trained extensively in Paris and Beverly Hills before establishing Aura Aesthetics in Miami.
            </p>
            <p className="bio-text">
              "My philosophy is simple: enhance, preserve, and restore. The best aesthetic outcomes are undetectable to the untrained eye, leaving patients looking remarkably refreshed rather than altered."
            </p>
            
            <div className="credentials">
              <div className="credential-item">
                <strong>Education</strong>
                <span>Harvard Medical School</span>
              </div>
              <div className="credential-item">
                <strong>Specialty</strong>
                <span>Facial Balancing & Advanced Injectables</span>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Experience Slider / Gallery */}
        <section className="clinic-experience">
          <div className="section-header-center">
            <h2>The Clinic Experience</h2>
            <p>Designed to soothe the senses and elevate the standard of care.</p>
          </div>
          
          <div className="experience-gallery">
            <div className="gallery-img g1" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' }}></div>
            <div className="gallery-img g2" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}></div>
            <div className="gallery-img g3" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}></div>
          </div>
        </section>

        {/* Patient Testimonial Slider placeholder */}
        <section className="testimonials-section">
          <div className="testimonial-card glass-panel">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              "I've visited top clinics around the world, but the level of personalized care and the stunning results at Aura are unmatched. Dr. Rostova truly understands the concept of subtle enhancement."
            </p>
            <div className="testimonial-author">
              <strong>Isabella M.</strong>
              <span>Miami Beach, FL</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
