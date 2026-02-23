const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111', color: '#fff', padding: '4rem 0', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ fontFamily: 'var(--font-header)', letterSpacing: '0.15em', marginBottom: '1rem', color: 'var(--color-primary)' }}>AURA</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
            Elevating aesthetics with quiet luxury. Based in Brickell, Miami.
          </p>
        </div>
        
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-accent)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Clinic Hours</h4>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Mon - Fri: 9:00 AM - 7:00 PM</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Sat: 10:00 AM - 4:00 PM</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Sun: Closed</p>
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-accent)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Connect</h4>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Instagram</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>info@auramedspa.com</p>
        </div>
      </div>
      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '3rem', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
        <p>&copy; {new Date().getFullYear()} Aura Aesthetics. All rights reserved.</p>
        <div>
          <a href="/admin" style={{ color: 'inherit', textDecoration: 'none' }}>Staff Portal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
