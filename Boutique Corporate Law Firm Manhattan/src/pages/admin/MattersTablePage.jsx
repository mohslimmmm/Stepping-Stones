import { Search, Filter, MoreHorizontal, Download } from 'lucide-react';

const MattersTablePage = () => {
  const matters = [
    { client: 'Nexus Holdings LLC', area: 'Mergers & Acquisitions', lead: 'Arthur Sterling', status: 'In Progress', billing: '$45,200' },
    { client: 'Stellar Energy Inc.', area: 'Securities Regulation', lead: 'Julian Rhodes', status: 'Closing', billing: '$12,800' },
    { client: 'Quantum Tech Group', area: 'Intellectual Property', lead: 'Elena Vance', status: 'Conflict Review', billing: '$0' },
    { client: 'Aether Global', area: 'Commercial Litigation', lead: 'Arthur Sterling', status: 'Discovery', billing: '$82,400' },
    { client: 'Blue Marble Co.', area: 'Environment Compliance', lead: 'Marcus Webb', status: 'Retained', billing: '$5,500' },
  ];

  return (
    <div className="matters-table-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Matter Management</h1>
          <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Complete directory of active and historic client engagements.</p>
        </div>
        <button className="btn-primary" style={{ backgroundColor: 'var(--accent-oxblood)', borderColor: 'var(--accent-oxblood)' }}>NEW MATTER</button>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-strong)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #f5f5f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1 }}>
            <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} />
              <input 
                type="text" 
                placeholder="Search clients, partners, or matters..." 
                style={{ width: '100%', padding: '10px 10px 10px 40px', border: '1px solid #eee', borderRadius: 'var(--radius-strong)', fontSize: '0.85rem' }} 
              />
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 15px', border: '1px solid #eee', fontSize: '0.8rem', fontWeight: 500 }}>
              <Filter size={16} /> Filters
            </button>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 15px', border: '1px solid #eee', fontSize: '0.8rem', fontWeight: 500 }}>
            <Download size={16} /> Export CSV
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #eee' }}>
              <th style={{ padding: '16px 20px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', letterSpacing: '0.5px' }}>Client Name</th>
              <th style={{ padding: '16px 20px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', letterSpacing: '0.5px' }}>Practice Area</th>
              <th style={{ padding: '16px 20px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', letterSpacing: '0.5px' }}>Lead Partner</th>
              <th style={{ padding: '16px 20px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', letterSpacing: '0.5px' }}>Status</th>
              <th style={{ padding: '16px 20px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', letterSpacing: '0.5px' }}>Unbilled</th>
              <th style={{ padding: '16px 20px' }}></th>
            </tr>
          </thead>
          <tbody>
            {matters.map((m, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f5f5f5', transition: 'var(--transition-smooth)' }}>
                <td style={{ padding: '20px', fontWeight: 600, fontSize: '0.9rem' }}>{m.client}</td>
                <td style={{ padding: '20px', fontSize: '0.85rem', opacity: 0.7 }}>{m.area}</td>
                <td style={{ padding: '20px', fontSize: '0.85rem' }}>{m.lead}</td>
                <td style={{ padding: '20px' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '2px', 
                    fontSize: '0.7rem', 
                    fontWeight: 700, 
                    backgroundColor: m.status === 'In Progress' ? '#e1f5fe' : m.status === 'Closing' ? '#e8f5e9' : '#fff3e0',
                    color: m.status === 'In Progress' ? '#039be5' : m.status === 'Closing' ? '#2e7d32' : '#f57c00'
                  }}>
                    {m.status.toUpperCase()}
                  </span>
                </td>
                <td style={{ padding: '20px', fontSize: '0.9rem', fontWeight: 500 }}>{m.billing}</td>
                <td style={{ padding: '20px', textAlign: 'right' }}>
                  <button style={{ color: 'rgba(0,0,0,0.3)' }}><MoreHorizontal size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fafafa', fontSize: '0.8rem', opacity: 0.6 }}>
          <span>Showing 1-5 of 42 matters</span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button disabled style={{ padding: '5px 10px', border: '1px solid #eee' }}>Prev</button>
            <button style={{ padding: '5px 10px', border: '1px solid #eee' }}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MattersTablePage;
