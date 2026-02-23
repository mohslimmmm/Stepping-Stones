import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const CRM_LEADS = [
  { id: '1', date: 'Oct 24, 2023', name: 'A. Rothschild', property: 'Villa Paloma', value: '€90k', status: 'Contract Sent', email: 'a.r***@private.co' },
  { id: '2', date: 'Oct 23, 2023', name: 'S. Al Maktoum', property: 'Penthouse Azure', value: '€28k', status: 'Checked-In', email: 'office@***.ae' },
  { id: '3', date: 'Oct 21, 2023', name: 'Confidential', property: 'Estate Grimaldi', value: '€170k', status: 'Vetted', email: 'legal@***.com' },
  { id: '4', date: 'Oct 20, 2023', name: 'James Morrison', property: 'Château Ocean', value: '€110k', status: 'Inquiry', email: 'j.morrison@***.com' },
  { id: '5', date: 'Oct 19, 2023', name: 'E. Musk', property: 'Villa Paloma', value: '€45k', status: 'Inquiry', email: 'e.m***@tesla.com' },
];

const AdminLeads = () => {
  return (
    <div className="admin-leads">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Leads Inbox</h1>
          <p className="admin-page-subtitle">Track CRM states, vetting status, and active contracts.</p>
        </div>
      </div>

      <div className="admin-card">
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          <button className="btn btn-outline" style={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-text-navy)', color: 'var(--color-text-navy)' }}>All Leads</button>
          <button className="btn btn-outline">Inquiry (2)</button>
          <button className="btn btn-outline">Vetted (1)</button>
          <button className="btn btn-outline">Contract Sent (1)</button>
          <button className="btn btn-outline">Checked-In (1)</button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ 
              borderBottom: '1px solid var(--color-border)', 
              color: 'var(--color-text-muted)', 
              fontSize: '0.85rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              textAlign: 'left' 
            }}>
              <th style={{ padding: '1rem', fontWeight: 600 }}>Date</th>
              <th style={{ padding: '1rem', fontWeight: 600 }}>Lead Identity</th>
              <th style={{ padding: '1rem', fontWeight: 600 }}>Property Interest</th>
              <th style={{ padding: '1rem', fontWeight: 600 }}>Est. Value</th>
              <th style={{ padding: '1rem', fontWeight: 600 }}>CRM Status</th>
              <th style={{ padding: '1rem', fontWeight: 600, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {CRM_LEADS.map(lead => (
              <tr key={lead.id} style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: '#fff', transition: 'background-color 0.2s' }}>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{lead.date}</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ fontWeight: 600, color: 'var(--color-text-navy)' }}>{lead.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{lead.email}</div>
                </td>
                <td style={{ padding: '1rem', fontWeight: 500 }}>{lead.property}</td>
                <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--color-text-navy)' }}>{lead.value}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    backgroundColor: lead.status === 'Checked-In' ? '#dcfce7' : 
                                     lead.status === 'Contract Sent' ? '#e0f2fe' : 
                                     lead.status === 'Vetted' ? '#f3e8ff' : '#f1f5f9',
                    color: lead.status === 'Checked-In' ? '#166534' : 
                           lead.status === 'Contract Sent' ? '#075985' : 
                           lead.status === 'Vetted' ? '#6b21a8' : '#475569',
                    border: `1px solid ${
                      lead.status === 'Checked-In' ? '#bbf7d0' : 
                      lead.status === 'Contract Sent' ? '#bae6fd' : 
                      lead.status === 'Vetted' ? '#e9d5ff' : '#cbd5e1'
                    }`
                  }}>
                    {lead.status}
                  </span>
                </td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                    <button className="icon-btn" title="Email"><Mail size={16} /></button>
                    <button className="icon-btn" title="Log Call"><Phone size={16} /></button>
                    <button className="icon-btn" title="View Full CRM Record"><ExternalLink size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminLeads;
