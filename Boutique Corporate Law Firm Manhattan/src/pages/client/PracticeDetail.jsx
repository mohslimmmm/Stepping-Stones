import { ArrowLeft, ExternalLink, User, Download, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeDetail = () => {
  const transactions = [
    { title: 'Project Helios', value: '$4.2B', desc: 'Acquisition of European FinTech leader by US conglomerate.' },
    { title: 'Nexus Pharma Merger', value: '$850M', desc: 'Full stock-for-stock merger of mid-cap pharmaceutical entities.' },
    { title: 'Stellar Energy Buyout', value: '$1.5B', desc: 'Private equity-led leveraged buyout of renewable energy provider.' }
  ];

  return (
    <div className="practice-detail-page">
      <div style={{ backgroundColor: 'white', borderBottom: '1px solid #eee' }}>
        <div className="container">
          <div style={{ padding: '20px 0' }}>
            <Link to="/practice-areas" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-charcoal)', opacity: 0.6 }}>
              <ArrowLeft size={16} /> BACK TO PRACTICE AREAS
            </Link>
          </div>
        </div>
      </div>

      <section className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px', alignItems: 'start', position: 'relative' }}>
        <div className="content">
          <div className="accent-oxblood" style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>PRACTICE AREA DEPTH</div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '32px' }}>Mergers &<br />Acquisitions</h1>
          
          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8, marginBottom: '60px' }}>
            <p style={{ marginBottom: '24px' }}>
              Vanguard & Shield’s M&A practice is the cornerstone of our firm. We represent a broad range of clients, from Fortune 500 corporations to private equity sponsors and emerging growth companies, in their most sophisticated and transformational transactions.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Our approach is defined by commercial awareness. We don't just identify legal risks; we identify paths to closure that preserve value and mitigate future liabilities. Our Manhattan-based team brings a distinctive "big law" pedigree with the agility and senior-level attention of a boutique firm.
            </p>
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '1px' }}>Representative Transactions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {transactions.map(t => (
              <div key={t.title} style={{ padding: '30px', backgroundColor: 'white', border: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ marginBottom: '8px' }}>{t.title}</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>{t.desc}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'var(--accent-oxblood)', fontWeight: 700, fontSize: '1.25rem' }}>{t.value}</div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.5 }}>Transaction Value</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Widgets */}
        <aside style={{ position: 'sticky', top: '120px' }}>
          {/* Partner Bio Widget */}
          <div className="glass" style={{ padding: '30px', border: '1px solid rgba(54,69,79,0.1)', marginBottom: '30px' }}>
            <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', opacity: 0.5, marginBottom: '20px' }}>Lead Partner</h4>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--accent-charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={40} color="var(--bg-platinum)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Arthur Sterling</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>Managing Partner, M&A</p>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.6 }}>
              Recognized as a "Super Lawyer" for 12 consecutive years. Arthur has spearheaded cross-border deals exceeding $100B in aggregate value.
            </p>
            <Link to="/about" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-oxblood)', display: 'flex', alignItems: 'center', gap: '5px' }}>
              FULL BIO <ExternalLink size={12} />
            </Link>
          </div>

          {/* Sticky Retain Us Widget */}
          <div style={{ padding: '40px', backgroundColor: 'var(--accent-charcoal)', color: 'white', borderRadius: 'var(--radius-strong)' }}>
            <h3 style={{ color: 'var(--bg-platinum)', marginBottom: '16px' }}>Retain Our Counsel</h3>
            <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '32px' }}>
              Initiate a confidential conflict-check and consultation request. Our partners respond to priority inquiries within 4 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={14} color="var(--accent-oxblood)" /> Conflict Check Required</div>
              <div style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={14} color="var(--accent-oxblood)" /> Encrypted Communication</div>
              <div style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}><CheckCircle size={14} color="var(--accent-oxblood)" /> Professional Indemnity Secured</div>
            </div>
            <button className="btn-primary" style={{ width: '100%', backgroundColor: 'var(--accent-oxblood)', borderColor: 'var(--accent-oxblood)' }}>
              Inquiry / Intake
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default PracticeDetail;
