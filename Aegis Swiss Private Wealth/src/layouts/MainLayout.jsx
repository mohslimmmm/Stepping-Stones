import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header className="glass-panel" style={{ 
        position: 'sticky', top: 0, zIndex: 50, padding: '1.5rem 2rem', 
        borderBottom: '1px solid var(--border-metal)',
        borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderRadius: 0
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '40px', height: '40px', 
              background: 'var(--text-pearl)', 
              color: 'var(--bg-obsidian)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 'bold'
            }}>A</div>
            <span style={{ 
              fontFamily: 'var(--font-serif)', fontSize: '1.25rem', letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>Aegis Wealth</span>
          </Link>
          
          <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <Link to="/services" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', color: 'var(--text-slate)' }}>Expertise</Link>
            <Link to="/insights" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', color: 'var(--text-slate)' }}>The Vault</Link>
            <Link to="/trust" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', color: 'var(--text-slate)' }}>Heritage</Link>
            <Link to="/contact" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', color: 'var(--text-slate)' }}>Contact</Link>
          </nav>
          
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/admin" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-slate)' }}>Partner Login</Link>
            <Link to="/admin" className="btn-primary">Secure Client Portal</Link>
          </div>
          
        </div>
      </header>

      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>

      <footer style={{ 
        borderTop: '1px solid var(--border-metal)', 
        padding: '4rem 0', marginTop: '4rem',
        background: 'var(--bg-obsidian-light)'
      }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          <div style={{ gridColumn: 'span 2' }}>
             <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-pearl)' }}>Aegis Swiss Private Wealth</h4>
             <p style={{ color: 'var(--text-slate)', fontSize: '0.875rem', maxWidth: '300px' }}>
               Bahnhofstrasse 45, 8001 Zurich, Switzerland. Generational Wealth, Engineered.
             </p>
          </div>
          <div>
            <h5 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-slate)', marginBottom: '1rem' }}>Regulation</h5>
            <p style={{ color: 'var(--text-slate)', fontSize: '0.875rem' }}>Regulated by FINMA</p>
            <p style={{ color: 'var(--text-slate)', fontSize: '0.875rem' }}>Audit by PwC</p>
          </div>
          <div>
            <h5 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-slate)', marginBottom: '1rem' }}>Secure Channels</h5>
            <p style={{ color: 'var(--text-slate)', fontSize: '0.875rem' }}>PGP Public Key</p>
            <p style={{ color: 'var(--text-slate)', fontSize: '0.875rem' }}>Client Protocol</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
