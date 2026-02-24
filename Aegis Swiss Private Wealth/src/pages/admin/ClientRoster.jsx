import { Download, Search, Settings } from 'lucide-react';

const ClientRoster = () => {
  const clients = [
    { hash: "XJ-993-ALPHA", risk: "Conservative", aum: "$420.5M", partner: "E. Montbatten", status: "KYC Verified" },
    { hash: "ZETA-404-OMEGA", risk: "Aggressive", aum: "$1.2B", partner: "R. Miller", status: "Review Pending" },
    { hash: "SIGMA-771-KAPPA", risk: "Balanced", aum: "$85.2M", partner: "H. von Klaus", status: "KYC Verified" },
    { hash: "DELTA-002-EPSILON", risk: "Conservative", aum: "$310.8M", partner: "A. Thorne", status: "KYC Verified" },
    { hash: "M1-SECURE-VAULT", risk: "Yield-Focused", aum: "$55.0M", partner: "R. Miller", status: "KYC Verified" }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
       
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-pearl)', fontFamily: 'var(--font-serif)' }}>Encrypted Roster</h2>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
             <div style={{ position: 'relative' }}>
                <Search size={16} color="var(--text-slate)" style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)' }} />
                <input 
                   type="text" 
                   placeholder="Search ID Hash..." 
                   style={{ 
                      background: 'var(--bg-obsidian-light)', border: '1px solid var(--border-metal)',
                      padding: '0.5rem 1rem 0.5rem 2.5rem', fontSize: '0.875rem', color: 'var(--text-pearl)',
                      outline: 'none', borderRadius: 'var(--radius-sharp)'
                   }} 
                />
             </div>
             <button className="btn-primary" style={{ padding: '0.5rem 1rem', display: 'flex', gap: '0.5rem' }}>
                <Download size={14} /> Export CSV
             </button>
          </div>
       </div>

       <div style={{ border: '1px solid var(--border-metal)', background: 'var(--bg-obsidian-light)', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
             <thead>
                <tr style={{ borderBottom: '1px solid var(--border-metal)', color: 'var(--text-slate)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                   <th style={{ padding: '1.5rem', fontWeight: 'normal' }}>Client Hash</th>
                   <th style={{ padding: '1.5rem', fontWeight: 'normal' }}>Risk Tier</th>
                   <th style={{ padding: '1.5rem', fontWeight: 'normal' }}>Assigned Partner</th>
                   <th style={{ padding: '1.5rem', fontWeight: 'normal' }}>Total AUM (USD)</th>
                   <th style={{ padding: '1.5rem', fontWeight: 'normal' }}>KYC/AML Status</th>
                   <th style={{ padding: '1.5rem', fontWeight: 'normal', textAlign: 'right' }}>Actions</th>
                </tr>
             </thead>
             <tbody>
                {clients.map((client, idx) => (
                   <tr key={idx} style={{ borderBottom: '1px solid var(--border-metal)', transition: 'background 0.2s' }}
                      onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                      onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                   >
                      <td style={{ padding: '1.5rem', fontFamily: 'monospace', color: 'var(--text-pearl)', fontSize: '0.875rem' }}>{client.hash}</td>
                      <td style={{ padding: '1.5rem' }}>
                         <span style={{ 
                            display: 'inline-block', padding: '0.25rem 0.75rem', fontSize: '0.75rem',
                            border: \`1px solid \${client.risk === 'Aggressive' ? 'rgba(255,50,50,0.5)' : 'var(--accent-bronze)'}\`,
                            color: client.risk === 'Aggressive' ? '#ff6b6b' : 'var(--accent-bronze)',
                            background: client.risk === 'Aggressive' ? 'rgba(255,50,50,0.1)' : 'rgba(191, 161, 95, 0.05)'
                         }}>{client.risk}</span>
                      </td>
                      <td style={{ padding: '1.5rem', color: 'var(--text-slate)', fontSize: '0.875rem' }}>{client.partner}</td>
                      <td style={{ padding: '1.5rem', color: 'var(--text-pearl)', fontSize: '0.875rem' }}>{client.aum}</td>
                      <td style={{ padding: '1.5rem' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: client.status.includes('Verified') ? 'var(--accent-emerald)' : 'var(--text-slate)' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: client.status.includes('Verified') ? 'var(--accent-emerald)' : 'var(--text-slate)' }}></div>
                            {client.status}
                         </div>
                      </td>
                      <td style={{ padding: '1.5rem', textAlign: 'right' }}>
                         <button style={{ background: 'none', border: 'none', color: 'var(--text-slate)', cursor: 'pointer' }}>
                            <Settings size={16} className="hover:text-accent-bronze transition-colors" />
                         </button>
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
       </div>
    </div>
  );
};

export default ClientRoster;
