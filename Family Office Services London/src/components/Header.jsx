import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="heritage-bg-green" style={{ padding: '1.5rem 0', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--bg-cream)' }}>
          <Shield size={40} color="var(--accent-gold)" />
          <div>
            <h2 style={{ color: 'inherit', margin: 0, fontSize: '1.5rem', letterSpacing: '2px' }}>WELLINGTON HERITAGE</h2>
            <p style={{ fontSize: '0.8rem', fontStyle: 'italic', opacity: 0.8 }}>London</p>
          </div>
        </Link>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
            <li><Link to="/discovery" className="heritage-text-gold">Services</Link></li>
            <li><Link to="/insights" className="heritage-text-gold">Insights</Link></li>
            <li><Link to="/about" className="heritage-text-gold">Trust</Link></li>
            <li><Link to="/contact" className="heritage-text-gold">Inquiry</Link></li>
            <li><Link to="/admin" style={{ border: '1px solid var(--accent-gold)', padding: '0.5rem 1rem', color: 'var(--accent-gold)' }}>Office Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
