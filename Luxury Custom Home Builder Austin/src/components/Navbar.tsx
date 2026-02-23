import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Portfolio', path: '/discovery' },
    { name: 'Lifestyle', path: '/lifestyle' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'rgba(228, 229, 224, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(40, 40, 43, 0.1)',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 5%'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ 
            fontFamily: 'var(--font-header)', 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: 'var(--accent-black)',
            letterSpacing: '3px'
          }}>
            IRON & OAK
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              style={{
                fontFamily: 'var(--font-header)',
                fontSize: '0.8rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: location.pathname === link.path ? 'var(--accent-copper)' : 'var(--accent-black)'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/admin" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--accent-black)',
            color: 'white',
            padding: '8px 16px',
            fontSize: '0.7rem',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>
            <LayoutDashboard size={14} />
            Contractor Portal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
