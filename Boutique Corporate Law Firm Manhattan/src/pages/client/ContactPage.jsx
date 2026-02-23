import { Shield, Lock, Send, AlertTriangle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="bg-charcoal" style={{ padding: '60px 0' }}>
        <div className="container">
          <h1 style={{ color: 'var(--bg-platinum)', fontSize: '3rem' }}>Consultation & Intake</h1>
          <p style={{ color: 'var(--bg-platinum)', opacity: 0.7 }}>Secure communication for sophisticated inquiries.</p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', marginBottom: '80px' }}>
        <aside>
          <div style={{ padding: '40px', backgroundColor: 'var(--accent-charcoal)', color: 'white', borderRadius: 'var(--radius-strong)' }}>
            <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Lock size={20} color="var(--accent-oxblood)" /> Security Notice
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.8, marginBottom: '24px' }}>
              All communications submitted via this form are protected by 256-bit AES encryption. Submitting an inquiry does not establish an attorney-client relationship.
            </p>
            <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.05)', fontSize: '0.8rem', borderLeft: '3px solid var(--accent-oxblood)' }}>
               <strong>CONFLICT CHECK:</strong> We must perform a comprehensive internal conflict-of-interest check before engaging in substantive discussion.
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '20px' }}>Global Headquarters</h4>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: 2 }}>
              One World Trade Center, Suite 85<br />
              New York, NY 10007<br />
              T: +1 (212) 555-0198<br />
              E: intake@vanguardshield.com
            </p>
          </div>
        </aside>

        <div className="form-container">
          <form style={{ display: 'flex', flexDirection: 'column', gap: '30px' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.6 }}>Full Name</label>
                <input type="text" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: 'var(--radius-strong)' }} placeholder="Arthur Sterling" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.6 }}>Corporate Entity</label>
                <input type="text" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: 'var(--radius-strong)' }} placeholder="Nexus Holdings LLC" />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.6 }}>Business Email (Encrypted End-Point)</label>
              <input type="email" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: 'var(--radius-strong)' }} placeholder="m.sterling@nexusholdings.com" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.6 }}>Nature of Inquiry</label>
              <select style={{ padding: '15px', border: '1px solid #ddd', borderRadius: 'var(--radius-strong)', appearance: 'none', backgroundColor: 'white' }}>
                <option>Mergers & Acquisitions</option>
                <option>Intellectual Property Protection</option>
                <option>Securities & Compliance</option>
                <option>Commercial Litigation</option>
                <option>Other / General Corporate</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.6 }}>Brief Description of Matter</label>
              <textarea rows="6" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: 'var(--radius-strong)', resize: 'none' }} placeholder="Please provide only high-level details for conflict review..."></textarea>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '20px', backgroundColor: '#f9f9f9', border: '1px solid #eee' }}>
              <input type="checkbox" style={{ marginTop: '4px' }} id="disclaimer" />
              <label htmlFor="disclaimer" style={{ fontSize: '0.75rem', lineHeight: 1.5, opacity: 0.6 }}>
                I acknowledge that submitting this form does not create an attorney-client relationship. I agree to the <Link to="/" style={{ textDecoration: 'underline' }}>Legal Disclaimer</Link> and <Link to="/" style={{ textDecoration: 'underline' }}>Privacy Policy</Link>.
              </label>
            </div>

            <button className="btn-primary" style={{ alignSelf: 'flex-start', padding: '18px 60px', backgroundColor: 'var(--accent-oxblood)', borderColor: 'var(--accent-oxblood)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              SUBMIT INQUIRY <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
