import AdminLayout from './AdminLayout';
import { Mail, Phone, Calendar, ArrowRight } from 'lucide-react';

const AdminLeads = () => {
  const leads = [
    { name: 'Sarah Jenkins', project: 'Modern Estate', phase: 'Inquiry', budget: '$3M - $5M', date: 'Oct 12' },
    { name: 'Robert Chen', project: 'Waterfront Build', phase: 'Design Phase', budget: '$5M+', date: 'Oct 10' },
    { name: 'Michael Rossi', project: 'Hill Country House', phase: 'Lot Evaluation', budget: '$1.5M - $3M', date: 'Oct 09' },
    { name: 'Elena Gilbert', project: 'Urban Penthouse', phase: 'Contract Signed', budget: '$4M', date: 'Oct 05' },
  ];

  return (
    <AdminLayout>
      <div style={{ marginBottom: '40px' }}>
        <h4 style={{ color: 'var(--accent-copper)', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '8px' }}>CRM</h4>
        <h2 style={{ fontSize: '1.8rem' }}>LEADS INBOX</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
         {['INQUIRY', 'LOT EVALUATION', 'DESIGN PHASE', 'CONTRACT SIGNED'].map(phase => (
            <div key={phase} style={{ 
               backgroundColor: '#eee', 
               padding: '12px 20px', 
               fontSize: '0.7rem', 
               fontWeight: '700', 
               letterSpacing: '1px',
               color: 'rgba(0,0,0,0.5)',
               textAlign: 'center'
            }}>
               {phase}
            </div>
         ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {leads.map((lead, idx) => (
          <div key={idx} style={{ 
            backgroundColor: 'white', 
            padding: '24px 40px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
            borderLeft: lead.phase === 'Contract Signed' ? '6px solid green' : '6px solid var(--accent-copper)'
          }}>
            <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
               <div>
                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>{lead.name}</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>{lead.project}</div>
               </div>
               <div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.4, fontWeight: '700' }}>BUDGET</div>
                  <div style={{ fontSize: '0.85rem' }}>{lead.budget}</div>
               </div>
               <div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.4, fontWeight: '700' }}>SUBMITTED</div>
                  <div style={{ fontSize: '0.85rem' }}>{lead.date}</div>
               </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
               <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={iconBoxStyle}><Mail size={16} /></div>
                  <div style={iconBoxStyle}><Phone size={16} /></div>
               </div>
               <button style={{ 
                 backgroundColor: 'transparent', 
                 border: '1px solid #eee', 
                 padding: '10px 20px', 
                 fontSize: '0.75rem',
                 fontWeight: '700',
                 display: 'flex',
                 alignItems: 'center',
                 gap: '10px'
               }}>
                 MANAGE LEAD <ArrowRight size={14} />
               </button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

const iconBoxStyle = {
   width: '36px',
   height: '36px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#f9f9f9',
   color: 'var(--accent-black)',
   cursor: 'pointer'
};

export default AdminLeads;
