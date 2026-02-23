import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--accent-black)',
      color: 'white',
      padding: '80px 5% 40px',
      marginTop: '100px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        marginBottom: '60px'
      }}>
        <div>
          <h3 style={{ color: 'white', marginBottom: '24px', fontSize: '1.2rem' }}>IRON & OAK</h3>
          <p style={{ opacity: 0.7, fontSize: '0.9rem', maxWidth: '300px' }}>
            Austin's premier custom home builder, blending modern industrial aesthetics with Texas heritage.
          </p>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '0.9rem', letterSpacing: '2px' }}>CONTACT</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', opacity: 0.7, fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={16} color="var(--accent-copper)" />
              <span>1201 E 6th St, Austin, TX 78702</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={16} color="var(--accent-copper)" />
              <span>(512) 555-0198</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={16} color="var(--accent-copper)" />
              <span>build@ironandoak.com</span>
            </div>
          </div>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '0.9rem', letterSpacing: '2px' }}>FOLLOW</h4>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Instagram size={20} style={{ cursor: 'pointer', transition: '0.3s' }} className="social-icon" />
            <Facebook size={20} style={{ cursor: 'pointer', transition: '0.3s' }} className="social-icon" />
            <Linkedin size={20} style={{ cursor: 'pointer', transition: '0.3s' }} className="social-icon" />
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '30px',
        textAlign: 'center',
        opacity: 0.5,
        fontSize: '0.8rem',
        fontFamily: 'var(--font-header)'
      }}>
        © {new Date().getFullYear()} IRON & OAK CUSTOM BUILDS. AIA AWARD WINNER.
      </div>

      <style>{`
        .social-icon:hover {
          color: var(--accent-copper);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
