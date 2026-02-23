import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="heritage-bg-green" style={{ padding: '4rem 0', marginTop: 'auto' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <Shield size={30} color="var(--accent-gold)" />
              <h3 style={{ color: 'var(--bg-cream)', margin: 0 }}>WELLINGTON</h3>
            </div>
            <p style={{ color: 'var(--bg-cream)', opacity: 0.7, fontSize: '0.9rem' }}>
              Established in London, Wellington Heritage Family Office provides bespoke wealth management and lifestyle services to families of significant legacy.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>London Headquarters</h4>
            <p style={{ color: 'var(--bg-cream)', opacity: 0.7, fontSize: '0.9rem' }}>
              15 Berkeley Square<br />
              Mayfair, London W1J 6BQ<br />
              United Kingdom
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>Confidential Contact</h4>
            <p style={{ color: 'var(--bg-cream)', opacity: 0.7, fontSize: '0.9rem' }}>
              T: +44 (0) 20 7946 0000<br />
              E: private@wellingtonheritage.com
            </p>
          </div>
        </div>
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,253,208,0.1)', textAlign: 'center' }}>
          <p style={{ color: 'var(--bg-cream)', opacity: 0.5, fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Wellington Heritage Family Office. Strictly Confidential. Referral Only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
