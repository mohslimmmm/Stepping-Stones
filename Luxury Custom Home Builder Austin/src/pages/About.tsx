import { motion } from 'framer-motion';
import { Award, Hammer, Users, ShieldCheck } from 'lucide-react';

const About = () => {
  const steps = [
    { year: 'Phase 1', title: 'Site Selection & Evaluation', desc: 'Analyzing topography, solar orientation, and soil health.' },
    { year: 'Phase 2', title: 'Architectural Schematics', desc: 'Drafting the vision with our AIA-certified design team.' },
    { year: 'Phase 3', title: 'Structural Framing', desc: 'Our signature steel and timber hybrids take shape.' },
    { year: 'Phase 4', title: 'Artisanal Finishing', desc: 'Raw copper, limestone, and custom millwork integration.' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      {/* Intro */}
      <section style={{ paddingTop: '160px', paddingBottom: '100px', paddingLeft: '5%', paddingRight: '5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
          <div>
            <h4 style={{ color: 'var(--accent-copper)', letterSpacing: '2px', marginBottom: '20px' }}>OUR STORY</h4>
            <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '40px' }}>DEFINING THE TEXAS MODERN AESTHETIC</h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,0.7)', marginBottom: '30px', lineHeight: '1.8' }}>
              Founded in Austin, TX, Iron & Oak was born from a desire to bridge the gap between industrial strength and residential warmth. We don't just build houses; we curate environments that stand as a testament to craftsmanship and permanence.
            </p>
          </div>
          <div style={{ position: 'relative', height: '600px' }}>
             <img src="https://images.unsplash.com/photo-1581439645268-df72ba0c8d45?auto=format&fit=crop&q=80&w=1000" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             <div style={{ 
               position: 'absolute', 
               bottom: '-40px', 
               left: '-40px', 
               backgroundColor: 'var(--accent-black)', 
               color: 'white', 
               padding: '40px',
               width: '300px'
             }}>
                <Award size={40} color="var(--accent-copper)" style={{ marginBottom: '20px' }} />
                <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>AIA AWARD WINNER</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Recognition for Excellence in Custom Home Design 2023.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ backgroundColor: 'white', padding: '100px 5%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '80px' }}>THE LIFECYCLE OF A BUILD</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{ padding: '30px', border: '1px solid rgba(0,0,0,0.05)', backgroundColor: 'var(--bg-color)' }}>
              <span style={{ fontSize: '3rem', fontWeight: '700', color: 'rgba(184, 115, 51, 0.2)', display: 'block', marginBottom: '20px' }}>0{idx + 1}</span>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '15px' }}>{step.title}</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '100px 5%', display: 'flex', justifyContent: 'space-around', backgroundColor: 'var(--accent-black)', color: 'white', flexWrap: 'wrap', gap: '40px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', fontWeight: '700', fontFamily: 'var(--font-header)', color: 'var(--accent-copper)' }}>15+</div>
          <div style={{ fontSize: '0.8rem', letterSpacing: '2px', opacity: 0.6 }}>YEARS OF EXCELLENCE</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', fontWeight: '700', fontFamily: 'var(--font-header)', color: 'var(--accent-copper)' }}>42</div>
          <div style={{ fontSize: '0.8rem', letterSpacing: '2px', opacity: 0.6 }}>CUSTOM ESTATES</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', fontWeight: '700', fontFamily: 'var(--font-header)', color: 'var(--accent-copper)' }}>$200M+</div>
          <div style={{ fontSize: '0.8rem', letterSpacing: '2px', opacity: 0.6 }}>CONSTRUCTION VOLUME</div>
        </div>
      </section>
    </div>
  );
};

export default About;
