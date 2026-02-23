import { Search, User, Mail, Calendar, CheckSquare, Clock, UserCheck } from 'lucide-react';

const LeadsInboxPage = () => {
  const leads = [
    { id: 1, name: 'Robert Chen', company: 'Titan Quantum', stage: 'New Inquiry', date: '2h ago', matter: 'M&A' },
    { id: 2, name: 'Sarah Miller', company: 'BioGrid inc.', stage: 'Conflict Check Pending', date: '5h ago', matter: 'IP Protection' },
    { id: 3, name: 'David Thorne', company: 'Global Logistics', stage: 'Consultation Set', date: 'Yesterday', matter: 'Securities' },
    { id: 4, name: 'Michael Ross', company: 'Empire Real Estate', stage: 'Retained', date: '2 days ago', matter: 'Litigation' },
  ];

  const getStageColor = (stage) => {
    switch(stage) {
      case 'New Inquiry': return { bg: '#fff7ed', text: '#c2410c' };
      case 'Conflict Check Pending': return { bg: '#fef2f2', text: '#b91c1c' };
      case 'Consultation Set': return { bg: '#ecfdf5', text: '#047857' };
      case 'Retained': return { bg: '#eff6ff', text: '#1d4ed8' };
      default: return { bg: '#f3f4f6', text: '#374151' };
    }
  };

  return (
    <div className="leads-inbox-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Inbox & CRM</h1>
          <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Secure management of all incoming consultations and mandate requests.</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ position: 'relative' }}>
             <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} />
             <input type="text" placeholder="Search leads..." style={{ padding: '10px 10px 10px 40px', border: '1px solid #eee', borderRadius: 'var(--radius-strong)', fontSize: '0.85rem' }} />
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {leads.map(lead => {
          const colors = getStageColor(lead.stage);
          return (
            <div key={lead.id} style={{ backgroundColor: 'white', padding: '24px', borderRadius: 'var(--radius-strong)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ padding: '4px 8px', borderRadius: '2px', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', backgroundColor: colors.bg, color: colors.text }}>
                  {lead.stage}
                </div>
                <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>{lead.date}</div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{lead.name}</h3>
                <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--accent-charcoal)' }}>{lead.company}</p>
                <div style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '8px' }}>Proposed Matter: {lead.matter}</div>
              </div>

              <div style={{ display: 'flex', gap: '10px', paddingTop: '20px', borderTop: '1px solid #f9f9f9' }}>
                <button title="View Details" style={{ flex: 1, padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '2px' }}><Mail size={16} opacity={0.6} /></button>
                <button title="Schedule" style={{ flex: 1, padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '2px' }}><Calendar size={16} opacity={0.6} /></button>
                <button title="Move to Conflict Check" style={{ flex: 1, padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '2px' }}><UserCheck size={16} opacity={0.6} /></button>
                <button title="Approve/Retain" style={{ flex: 1, padding: '10px', backgroundColor: 'var(--accent-oxblood)', borderRadius: '2px' }}><CheckSquare size={16} color="white" /></button>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '40px', padding: '40px', backgroundColor: 'white', borderRadius: 'var(--radius-strong)', textAlign: 'center', border: '1px dashed #ddd' }}>
         <h4 style={{ opacity: 0.5 }}>End of Inbox</h4>
         <p style={{ fontSize: '0.85rem', opacity: 0.4 }}>You have processed all priority leads for today.</p>
      </div>
    </div>
  );
};

export default LeadsInboxPage;
