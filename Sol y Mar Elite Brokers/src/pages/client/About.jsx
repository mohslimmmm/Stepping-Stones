import React from 'react';
import { Award, ShieldCheck, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      <div className="container section text-center">
        <h1 className="section-title">Our Heritage</h1>
        <p className="about-intro" style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem'}}>
          For 15 years, Sol y Mar Elite Brokers has been the trusted authority in luxury real estate across the Costa del Sol. 
          We believe in a bespoke approach, offering absolute discretion and unparalleled local expertise.
        </p>
      </div>

      <div className="trust-badges section" style={{backgroundColor: 'var(--color-bg)', padding: '4rem 0'}}>
         <div className="container badges-container">
            <div className="badge-item text-center">
               <Award size={48} color="var(--color-accent-gold)" style={{margin: '0 auto 1rem'}}/>
               <h3>15 Years in Marbella</h3>
               <p>Deep-rooted local knowledge and an exclusive network.</p>
            </div>
            <div className="badge-item text-center">
               <ShieldCheck size={48} color="var(--color-accent-terracotta)" style={{margin: '0 auto 1rem'}}/>
               <h3>Absolute Discretion</h3>
               <p>Confidential transactions for VIP clients worldwide.</p>
            </div>
            <div className="badge-item text-center">
               <Globe size={48} color="var(--color-text)" style={{margin: '0 auto 1rem'}}/>
               <h3>Multilingual Experts</h3>
               <p>We speak English, Spanish, French, German, and Arabic.</p>
            </div>
         </div>
      </div>

      <div className="container section text-center">
         <h2 className="section-title">Meet The Directors</h2>
         <div className="team-grid">
            <div className="team-member">
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Isabella Santos" className="team-img" />
               <h3>Isabella Santos</h3>
               <p className="team-role">Managing Director</p>
            </div>
            <div className="team-member">
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" alt="Carlos Mendoza" className="team-img" />
               <h3>Carlos Mendoza</h3>
               <p className="team-role">Head of Acquisitions</p>
            </div>
            <div className="team-member">
               <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" alt="Elena Rostova" className="team-img" />
               <h3>Elena Rostova</h3>
               <p className="team-role">International VIP Liaison</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;
