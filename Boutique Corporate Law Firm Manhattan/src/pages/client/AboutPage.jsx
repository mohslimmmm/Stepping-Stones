import { Award, Star, Users, MapPin, Download } from 'lucide-react';

const AboutPage = () => {
  const rankings = [
    { title: 'Chambers & Partners', rank: 'Tier 1 - Corporate/M&A', year: '2026' },
    { title: 'Legal 500', rank: 'Leading Firm - Financial Services', year: '2025' },
    { title: 'Super Lawyers', rank: 'Top 100 Manhattan Counsel', year: '2026' }
  ];

  const partners = [
    { name: 'Arthur Sterling', role: 'Managing Partner, M&A', school: 'Harvard Law', focus: 'Transnational Buyouts' },
    { name: 'Elena Vance', role: 'Head of IP & Tech', school: 'Stanford Law', focus: 'Disruptive IP Strategy' },
    { name: 'Julian Rhodes', role: 'Securities Counsel', school: 'Yale Law', focus: 'Regulatory Interface' }
  ];

  return (
    <div className="about-page">
      <section style={{ padding: '80px 0', borderBottom: '1px solid #eee' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="accent-oxblood" style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>THE FIRM</div>
            <h1 style={{ fontSize: '4rem', marginBottom: '32px' }}>Precision.<br />Integrity. Impact.</h1>
            <p style={{ fontSize: '1.3rem', lineHeight: 1.7, opacity: 0.7 }}>
              Founded in 1998, Vanguard & Shield was established with a singular mission: to provide sophisticated, partner-led counsel to the architects of global commerce. We deliberately maintain a boutique footprint to ensure that every client benefits from the unmitigated attention of our most senior practitioners.
            </p>
          </div>
        </div>
      </section>

      {/* Rankings Section */}
      <section style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {rankings.map(r => (
              <div key={r.title} style={{ padding: '40px', border: '1px solid #eee', textAlign: 'center' }}>
                <Award size={32} color="var(--accent-oxblood)" style={{ marginBottom: '20px' }} />
                <h4 style={{ marginBottom: '8px' }}>{r.title}</h4>
                <p style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>{r.rank}</p>
                <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>{r.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Bios */}
      <section>
        <div className="container">
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Our Leadership</h2>
            <p style={{ opacity: 0.6 }}>A collective of specialized legal talent with a global footprint.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {partners.map(p => (
              <div key={p.name} className="partner-card" style={{ border: '1px solid #eee', backgroundColor: 'white' }}>
                <div style={{ height: '350px', backgroundColor: 'var(--accent-charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users size={80} color="var(--bg-platinum)" style={{ opacity: 0.1 }} />
                </div>
                <div style={{ padding: '30px' }}>
                  <h3 style={{ marginBottom: '4px' }}>{p.name}</h3>
                  <div style={{ color: 'var(--accent-oxblood)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '20px' }}>{p.role}</div>
                  
                  <div style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '24px' }}>
                    <div style={{ marginBottom: '8px' }}><strong>Education:</strong> {p.school}</div>
                    <div><strong>Key Focus:</strong> {p.focus}</div>
                  </div>

                  <button style={{ fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', border: '1px solid #ddd' }}>
                    DOWNLOAD CV <Download size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
