import { Outlet, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './PublicLayout.css';

export default function PublicLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="public-layout">
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <Link to="/" className="logo">
            <span className="logo-text">Desert Sculpt</span>
            <span className="logo-subtext">Plastic Surgery</span>
          </Link>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
             <Link to="/discovery" className="nav-link" onClick={() => setIsMenuOpen(false)}>Procedures</Link>
             <Link to="/resources" className="nav-link" onClick={() => setIsMenuOpen(false)}>Patient Resources</Link>
             <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
             <Link to="/contact" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Book Consult</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-col">
            <h3 className="footer-title">Desert Sculpt</h3>
            <p className="footer-text">Sophisticated surgical artistry in the heart of Scottsdale.</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-subtitle">Contact</h4>
            <p className="footer-text">123 Camelback Rd, Scottsdale, AZ</p>
            <p className="footer-text">(480) 555-0199</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-subtitle">Legal</h4>
            <Link to="/admin" className="footer-link">Physician Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
