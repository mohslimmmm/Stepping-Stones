import { ArrowRight, ShieldCheck, Scale, Landmark, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const practiceAreas = [
    { title: 'Mergers & Acquisitions', icon: Landmark, desc: 'Sophisticated counsel for complex domestic and cross-border transactions.' },
    { title: 'Intellectual Property', icon: ShieldCheck, iconColor: 'var(--accent-oxblood)', desc: 'Protecting the intangible assets that drive modern market disruption.' },
    { title: 'Securities Regulation', icon: Scale, desc: 'Navigating the intricate landscape of global financial compliance.' },
    { title: 'Commercial Litigation', icon: FileText, desc: 'Rigorous advocacy in high-stakes corporate disputes.' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ 
        height: '85vh', 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: 'var(--accent-charcoal)',
        color: 'var(--bg-platinum)',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(rgba(54, 69, 79, 0.8), rgba(54, 69, 79, 0.9)), url("https://images.unsplash.com/photo-1496871455396-14e56815f1f4?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '24px', color: 'var(--bg-platinum)' }}>
              Unyielding Advocacy. <br />
              <span className="accent-oxblood">Boutique</span> Precision.
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '40px', opacity: 0.9, maxWidth: '600px' }}>
              Vanguard & Shield provides elite corporate counsel for the architects of the new Manhattan economy. 
              We don't just solve legal problems; we engineer strategic advantages.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Link to="/contact" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'var(--accent-oxblood)', borderColor: 'var(--accent-oxblood)' }}>
                Schedule Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/practice-areas" className="btn-secondary" style={{ borderColor: 'var(--bg-platinum)', color: 'var(--bg-platinum)' }}>
                Explore Practice Areas
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div style={{ 
          position: 'absolute', 
          bottom: '0', 
          right: '5%', 
          width: '30%', 
          height: '100%', 
          borderLeft: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '40px',
          backgroundColor: 'rgba(0,0,0,0.2)',
          backdropFilter: 'blur(5px)'
        }}>
          <div style={{ fontSize: '3rem', fontWeight: 900, opacity: 0.1, marginBottom: '20px' }}>NYC</div>
          <div style={{ fontSize: '0.9rem', opacity: 0.6, letterSpacing: '1px' }}>
            STRATEGIC PARTNERSHIP SINCE 1998
          </div>
        </div>
      </section>

      {/* Stats/Badge Section */}
      <div style={{ backgroundColor: 'white', padding: '40px 0', borderBottom: '1px solid #eee' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-header)' }}>$50B+</div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6 }}>Transaction Volume</div>
          </div>
          <div style={{ width: '1px', height: '40px', backgroundColor: '#eee' }}></div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-header)' }}>Ranked Tier 1</div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6 }}>Chambers & Partners</div>
          </div>
          <div style={{ width: '1px', height: '40px', backgroundColor: '#eee' }}></div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-header)' }}>98%</div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6 }}>Client Retention</div>
          </div>
        </div>
      </div>

      {/* Practice Areas Highlights */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Core Practice Areas</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-oxblood)', margin: '0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {practiceAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div key={idx} className="glass" style={{ padding: '40px', border: '1px solid rgba(54,69,79,0.1)', transition: 'var(--transition-smooth)' }}>
                  <Icon size={40} strokeWidth={1} style={{ marginBottom: '24px', color: area.iconColor || 'var(--accent-charcoal)' }} />
                  <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>{area.title}</h3>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '24px' }}>{area.desc}</p>
                  <Link to="/practice-detail" style={{ fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    VIEW DETAILS <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="bg-charcoal" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--bg-platinum)', marginBottom: '32px', fontSize: '2.5rem' }}>Ready for Sophisticated Counsel?</h2>
          <p style={{ color: 'var(--bg-platinum)', opacity: 0.8, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
            Contact us for a confidential conflict-check and consultation regarding your corporate legal requirements.
          </p>
          <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'var(--accent-oxblood)', borderColor: 'var(--accent-oxblood)', padding: '16px 40px' }}>
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
