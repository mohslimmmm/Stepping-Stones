import { Newspaper, FileText, Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsightsPage = () => {
  const articles = [
    { 
      type: 'LEGAL BRIEF', 
      title: 'AI in the Boardroom: Navigating Fiduciary Duties in the Age of LLMs', 
      date: 'Feb 12, 2026',
      excerpt: 'As corporations integrate large language models into core decision-making, boards must recognize the shifting landscape of liability and oversight.'
    },
    { 
      type: 'MARKET UPDATE', 
      title: '2026 Regulatory Forecast: The SEC New Disclosure Mandates', 
      date: 'Jan 28, 2026',
      excerpt: 'A comprehensive deep-dive into the upcoming changes to climate-related risk disclosures and their impact on IPO timelines.'
    },
    { 
      type: 'WHITE PAPER', 
      title: 'The Resilience of Cross-Border M&A Amidst Geopolitical Volatility', 
      date: 'Jan 15, 2026',
      excerpt: 'How boutique firms are navigating the CFIUS regulatory maze to deliver successful outcomes for international conglomerates.'
    }
  ];

  return (
    <div className="insights-page">
      <section className="bg-charcoal" style={{ padding: '60px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={{ color: 'var(--bg-platinum)', fontSize: '3rem' }}>Insights</h1>
            <p style={{ color: 'var(--bg-platinum)', opacity: 0.7 }}>Thought leadership at the intersection of law and global markets.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', padding: '10px 20px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem' }}>SUBSCRIBE</button>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px' }}>
        <div className="articles">
          <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.5, marginBottom: '32px' }}>Latest Editorial</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {articles.map((art, idx) => (
              <article key={idx} style={{ borderBottom: '1px solid #eee', paddingBottom: '60px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--accent-oxblood)', letterSpacing: '1px' }}>{art.type}</span>
                  <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>|</span>
                  <span style={{ fontSize: '0.7rem', opacity: 0.5, display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={12} /> {art.date}</span>
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '20px', lineHeight: 1.3 }}>{art.title}</h3>
                <p style={{ fontSize: '1rem', opacity: 0.7, marginBottom: '24px', maxWidth: '800px' }}>{art.excerpt}</p>
                <Link to="/" style={{ fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  READ ARTICLE <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>

        <aside>
          <div style={{ backgroundColor: 'white', padding: '40px', border: '1px solid #eee' }}>
            <h4 style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <TrendingUp size={18} color="var(--accent-oxblood)" /> Market Indicators
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <div style={{ fontSize: '0.9rem', marginBottom: '4px' }}>M&A Index (S&P)</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2ecc71' }}>+4.2%</div>
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', marginBottom: '4px' }}>SEC Compliance Cost Arg.</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-oxblood)' }}>+12.8%</div>
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', marginBottom: '4px' }}>Venture Capital Velocity</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>Stable</div>
              </div>
            </div>
            <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #eee' }}>
              <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>Data provided for informational purposes only. Consult with counsel before making strategic decisions.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default InsightsPage;
