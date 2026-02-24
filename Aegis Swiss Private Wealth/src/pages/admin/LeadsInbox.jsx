import { Lock, FileText, CheckCircle2 } from 'lucide-react';

const LeadsInbox = () => {
  const leads = [
    { id: "REF-0012A", alias: "Omega Protocol", status: "Encrypted Inquiry", date: "2 Hours ago", action: "Decrypt Message" },
    { id: "REF-0084B", alias: "Vanguard Trust", status: "KYC Clearance Pending", date: "Yesterday", action: "Review Docs" },
    { id: "REF-0105X", alias: "J. Blackwood", status: "Secure Onboarding", date: "2 Days ago", action: "Initialize Vault" },
    { id: "REF-0042Y", alias: "Albatross Entity", status: "Capital Deployed", date: "1 Week ago", action: "View Ledger" }
  ];

  const getStatusColor = (status) => {
    switch(status) {
       case 'Encrypted Inquiry': return 'var(--text-slate)';
       case 'KYC Clearance Pending': return 'var(--accent-bronze)';
       case 'Secure Onboarding': return '#3b82f6'; // Muted blue
       case 'Capital Deployed': return 'var(--accent-emerald)';
       default: return 'var(--text-slate)';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
       
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-pearl)', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>Encrypted Comm Link</h2>
            <p style={{ color: 'var(--text-slate)', fontSize: '0.875rem' }}>Incoming leads routed via PGP and strict protocols.</p>
          </div>
          <div style={{ display: 'flex', itemsCenter: 'center', gap: '0.5rem', color: 'var(--accent-emerald)', fontSize: '0.75rem', fontFamily: 'monospace' }}>
             <Lock size={14} /> PGP LISTENER ACTIVE
          </div>
       </div>

       <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {leads.map((lead, idx) => (
             <div key={idx} className="glass-panel-dark animate-fade-in" style={{ 
                padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                borderLeft: \`3px solid \${getStatusColor(lead.status)}\`,
                background: 'var(--bg-obsidian-light)', transition: 'transform 0.2s',
                animationDelay: \`\${idx * 100}ms\`
             }}
             onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
             >
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                   
                   <div style={{ 
                      width: '40px', height: '40px', background: 'var(--bg-obsidian)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid var(--border-metal)'
                   }}>
                      <FileText size={18} color="var(--text-slate)" />
                   </div>

                   <div>
                      <h3 style={{ fontSize: '1.25rem', color: 'var(--text-pearl)', marginBottom: '0.5rem' }}>{lead.alias}</h3>
                      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', color: 'var(--text-slate)' }}>
                         <span>ID: <strong style={{ fontFamily: 'monospace' }}>{lead.id}</strong></span>
                         <span>Received: {lead.date}</span>
                      </div>
                   </div>

                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                   {/* Status Pill */}
                   <span style={{ 
                      padding: '0.5rem 1rem', fontSize: '0.75rem', border: '1px solid',
                      borderRadius: 'var(--radius-sharp)', textTransform: 'uppercase', letterSpacing: '0.05em',
                      borderColor: getStatusColor(lead.status), color: getStatusColor(lead.status),
                      background: \`\${getStatusColor(lead.status)}10\` // 10% opacity via hex fallback approx
                   }}>
                      {lead.status}
                   </span>

                   <button style={{ 
                      background: 'none', border: 'none', color: 'var(--text-pearl)', 
                      fontSize: '0.875rem', cursor: 'pointer', borderBottom: '1px solid var(--accent-bronze)',
                      paddingBottom: '0.25rem', transition: 'color 0.2s'
                   }}
                   onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-bronze)'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-pearl)'}
                   >
                      {lead.action}
                   </button>
                </div>

             </div>
          ))}
       </div>

    </div>
  );
};

export default LeadsInbox;
