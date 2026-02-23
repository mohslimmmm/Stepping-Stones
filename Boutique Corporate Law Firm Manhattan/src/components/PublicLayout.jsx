import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Shield, Menu, X, Phone, Lock } from 'lucide-react';
import { useState } from 'react';

const PublicLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="public-layout">
      {/* Top Banner (Optional, for contact/urgent info) */}
      <div className="top-bar bg-charcoal">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 2rem', fontSize: '12px' }}>
          <span>Manhattan | London | Hong Kong</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Phone size={12} /> +1 (212) 555-0198</span>
            <Link to="/admin" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--bg-platinum)' }}>
              <Lock size={12} /> Partner Portal
            </Link>
          </span>
        </div>
      </div>

      <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Shield size={32} className="accent-oxblood" />
            <div>
              <div style={{ fontFamily: 'var(--font-header)', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Vanguard & Shield</div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-charcoal)' }}>Corporate Counsel</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <Link to="/practice-areas" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Practice Areas</Link>
            <Link to="/insights" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Insights</Link>
            <Link to="/about" style={{ fontWeight: 500, fontSize: '0.9rem' }}>The Firm</Link>
            <Link to="/contact" className="btn-primary">Schedule Consultation</Link>
          </div>

          <button className="mobile-menu-btn" style={{ display: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-charcoal" style={{ padding: '80px 0 20px', marginTop: '80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Shield size={24} style={{ color: 'var(--bg-platinum)' }} />
                <div style={{ fontFamily: 'var(--font-header)', fontWeight: 700, fontSize: '1.1rem' }}>Vanguard & Shield</div>
              </div>
              <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
                Boutique corporate counsel for Manhattan's most disruptive enterprises. 
                Excellence in M&A, Intellectual Property, and Securities.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--bg-platinum)', marginBottom: '20px', fontSize: '1rem', textTransform: 'uppercase' }}>Practice Areas</h4>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem', opacity: 0.7, lineHeight: 2 }}>
                <li><Link to="/practice-detail">Mergers & Acquisitions</Link></li>
                <li><Link to="/practice-areas">Intellectual Property</Link></li>
                <li><Link to="/practice-areas">Securities Regulation</Link></li>
                <li><Link to="/practice-areas">Commercial Litigation</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--bg-platinum)', marginBottom: '20px', fontSize: '1rem', textTransform: 'uppercase' }}>The Firm</h4>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem', opacity: 0.7, lineHeight: 2 }}>
                <li><Link to="/about">Our Partners</Link></li>
                <li><Link to="/insights">Legal Briefs</Link></li>
                <li><Link to="/about">Achievements</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--bg-platinum)', marginBottom: '20px', fontSize: '1rem', textTransform: 'uppercase' }}>Offices</h4>
              <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
                One World Trade Center, Suite 85<br />
                New York, NY 10007<br />
                T: +1 (212) 555-0198
              </p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', fontSize: '0.75rem', opacity: 0.5, textAlign: 'center' }}>
            &copy; 2026 Vanguard & Shield Corporate Counsel LLP. All Rights Reserved. Attorney Advertising. Prior results do not guarantee a similar outcome.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
