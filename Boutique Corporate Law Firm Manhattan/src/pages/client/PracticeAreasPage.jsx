import { useState } from 'react';
import { Landmark, ShieldCheck, Scale, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeAreasPage = () => {
  const [activeTab, setActiveTab] = useState('M&A');

  const tabs = [
    { id: 'M&A', title: 'Mergers & Acquisitions', icon: Landmark },
    { id: 'IP', title: 'Intellectual Property', icon: ShieldCheck },
    { id: 'Securities', title: 'Securities & Capital Markets', icon: Scale },
    { id: 'Litigation', title: 'Commercial Litigation', icon: FileText }
  ];

  const content = {
    'M&A': {
      title: 'Strategic Mergers & Acquisitions',
      desc: 'We represent public and private companies, private equity firms, and financial advisors in their most critical transactions. Our team provides end-to-end support for acquisitions, divestitures, joint ventures, and leveraged buyouts.',
      features: ['Cross-Border Transactions', 'Leveraged Buyouts', 'Strategic Divestitures', 'Takeover Defense']
    },
    'IP': {
      title: 'Intellectual Property & Technology',
      desc: 'In an era of relentless disruption, we help clients protect the intangible assets that define their competitive edge. Our practice covers the full spectrum of IP management, licensing, and high-stakes litigation.',
      features: ['Patent Portfolio Management', 'Trade Secret Protection', 'Technology Licensing', 'Data Privacy Compliance']
    },
    'Securities': {
      title: 'Securities & Capital Markets',
      desc: 'Navigating the complex regulatory frameworks of the SEC and global financial regulators requires both precision and foresight. We guide firms through initial public offerings, debt issuances, and constant compliance mandates.',
      features: ['IPOs and Secondary Offerings', 'Debt and Equity Financing', 'SEC Compliance', 'Corporate Governance']
    },
    'Litigation': {
      title: 'Complex Commercial Litigation',
      desc: 'When disputes threaten the core of your business, you need relentless advocacy. Our litigators handle high-stakes corporate disputes with a focus on achieving favorable outcomes without compromising business continuity.',
      features: ['Shareholder Disputes', 'Contractual Breach', 'Antitrust Litigation', 'Internal Investigations']
    }
  };

  return (
    <div className="practice-areas-page">
      <section className="bg-charcoal" style={{ padding: '60px 0' }}>
        <div className="container">
          <h1 style={{ color: 'var(--bg-platinum)', fontSize: '3rem' }}>Practice Areas</h1>
          <p style={{ color: 'var(--bg-platinum)', opacity: 0.7 }}>Tailored legal excellence for the architects of modern commerce.</p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '60px' }}>
        <div style={{ display: 'flex', gap: '2px', marginBottom: '60px' }}>
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: '24px',
                backgroundColor: activeTab === tab.id ? 'white' : 'transparent',
                border: activeTab === tab.id ? '1px solid #eee' : '1px solid transparent',
                borderBottom: activeTab === tab.id ? '2px solid var(--accent-oxblood)' : '1px solid #eee',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                color: activeTab === tab.id ? 'var(--accent-charcoal)' : 'rgba(54,69,79,0.5)'
              }}
            >
              <tab.icon size={24} />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{tab.id}</span>
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>{content[activeTab].title}</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '40px', opacity: 0.8 }}>{content[activeTab].desc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              {content[activeTab].features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 500 }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-oxblood)' }}></div>
                  {f}
                </div>
              ))}
            </div>
            <Link to="/practice-detail" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              Detailed Insights <ArrowRight size={18} />
            </Link>
          </div>
          <div style={{ 
            height: '400px', 
            backgroundColor: 'var(--accent-charcoal)', 
            backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 'var(--radius-strong)'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreasPage;
