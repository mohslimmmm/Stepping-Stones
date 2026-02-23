import { Mail, Phone, ChevronRight, MessageSquare } from 'lucide-react';
import './Leads.css';

export default function Leads() {
  const leadsData = [
    { id: '1', name: 'Emma Watson', type: 'Virtual Consult', status: 'Inquiry', date: 'Oct 24, 2024', procedure: 'Deep-Plane Facelift' },
    { id: '2', name: 'Michael Thomas', type: 'Direct Book', status: 'Surgery Scheduled', date: 'Oct 23, 2024', procedure: 'Rhinoplasty' },
    { id: '3', name: 'Sarah Jenkins', type: 'Information', status: 'Inquiry', date: 'Oct 22, 2024', procedure: 'Breast Augmentation' },
    { id: '4', name: 'James Larson', type: 'Consultation', status: 'Post-Op', date: 'Oct 15, 2024', procedure: 'Blepharoplasty' },
    { id: '5', name: 'Olivia Bennett', type: 'Virtual Consult', status: 'Virtual Consult', date: 'Oct 14, 2024', procedure: 'Liposuction' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Inquiry': return 'status-inquiry';
      case 'Virtual Consult': return 'status-virtual';
      case 'Surgery Scheduled': return 'status-scheduled';
      case 'Post-Op': return 'status-completed';
      default: return '';
    }
  };

  return (
    <div className="admin-leads">
      <div className="admin-page-header">
        <h1 className="admin-h1">Leads CRM</h1>
        <p className="admin-p">Track inquiries, consultations, and surgical pipelines.</p>
      </div>

      <div className="admin-card table-wrapper">
        <table className="admin-table uppercase-headers">
          <thead>
            <tr>
              <th>Patient Target</th>
              <th>Interest</th>
              <th>Origin</th>
              <th>Status Pipeline</th>
              <th>Received</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {leadsData.map(lead => (
              <tr key={lead.id} className="lead-row">
                <td className="lead-name-cell">
                  <div className="avatar sm">{lead.name.charAt(0)}</div>
                  <span className="font-medium text-white">{lead.name}</span>
                </td>
                <td>{lead.procedure}</td>
                <td>
                  <span className="origin-type">
                    {lead.type === 'Virtual Consult' ? <MessageSquare size={14} /> : lead.type === 'Direct Book' ? <Phone size={14} /> : <Mail size={14} />}
                    {lead.type}
                  </span>
                </td>
                <td>
                  <span className={`crm-badge ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </td>
                <td>{lead.date}</td>
                <td className="actions-cell">
                  <button className="crm-action-btn">
                    Review <ChevronRight size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
