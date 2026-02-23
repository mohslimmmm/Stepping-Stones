import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div style={{ paddingTop: '160px', backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      <div style={{ padding: '0 5%', display: 'grid', gridTemplateColumns: 'minmax(300px, 450px) 1fr', gap: '100px' }}>
        {/* Info Column */}
        <div>
          <h4 style={{ color: 'var(--accent-copper)', letterSpacing: '2px', marginBottom: '20px' }}>INQUIRY</h4>
          <h1 style={{ fontSize: '3rem', marginBottom: '40px' }}>START YOUR BUILD</h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.7, marginBottom: '60px', lineHeight: '1.8' }}>
            Ready to bring your vision to life? Fill out the form below or reach out directly to our Austin studio.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ backgroundColor: 'var(--accent-black)', padding: '15px', display: 'flex' }}>
                <Mail color="var(--accent-copper)" size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.7rem', opacity: 0.5 }}>EMAIL US</h4>
                <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>build@ironandoak.com</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ backgroundColor: 'var(--accent-black)', padding: '15px', display: 'flex' }}>
                <Phone color="var(--accent-copper)" size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.7rem', opacity: 0.5 }}>CALL US</h4>
                <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>(512) 555-0198</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ backgroundColor: 'var(--accent-black)', padding: '15px', display: 'flex' }}>
                <MapPin color="var(--accent-copper)" size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.7rem', opacity: 0.5 }}>STUDIO</h4>
                <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>1201 E 6th St, Austin, TX</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div style={{ backgroundColor: 'white', padding: '60px' }}>
          <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1px' }}>NAME</label>
              <input type="text" placeholder="Your Name" style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1px' }}>EMAIL</label>
              <input type="email" placeholder="email@example.com" style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1px' }}>LOT OWNED?</label>
              <select style={inputStyle}>
                <option>Yes, I have a site</option>
                <option>No, I need assistance</option>
                <option>I'm in the process</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1px' }}>BUDGET RANGE</label>
              <select style={inputStyle}>
                <option>$1.5M - $3M</option>
                <option>$3M - $5M</option>
                <option>$5M+</option>
              </select>
            </div>
            <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1px' }}>PROJECT VISION</label>
              <textarea placeholder="Tell us about your dream home..." style={{ ...inputStyle, height: '150px', resize: 'none' }} />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <button className="architectural-btn" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
                Send Inquiry <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '15px',
  border: '1px solid rgba(0,0,0,0.1)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  borderRadius: '0px',
  outline: 'none',
  transition: '0.3s'
};

export default Contact;
