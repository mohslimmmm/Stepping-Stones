import { useState } from 'react';
import { Search, Filter, MoreVertical, Mail, Phone, Calendar } from 'lucide-react';
import './Leads.css';

const MOCK_LEADS = [
  { id: 1, name: 'Emma Chamberlain', email: 'emma.c@example.com', phone: '(305) 555-0192', interest: 'CoolSculpting Elite', status: 'New Lead', date: 'Oct 24, 10:30 AM', avatar: 'EC' },
  { id: 2, name: 'John Davis', email: 'jdavis88@example.com', phone: '(786) 555-4321', interest: 'NAD+ Therapy', status: 'Consult Booked', date: 'Oct 24, 08:15 AM', avatar: 'JD' },
  { id: 3, name: 'Sophia Turner', email: 'sophia.turner@example.com', phone: '(305) 555-9988', interest: 'Morpheus8', status: 'Treated', date: 'Oct 23, 04:45 PM', avatar: 'ST' },
  { id: 4, name: 'Michael Chen', email: 'm.chen.arch@example.com', phone: '(786) 555-1122', interest: 'Botox / Dysport', status: 'New Lead', date: 'Oct 23, 02:20 PM', avatar: 'MC' },
  { id: 5, name: 'Olivia Martinez', email: 'olivia.m@example.com', phone: '(305) 555-7733', interest: 'Facial Balancing', status: 'Consult Booked', date: 'Oct 22, 11:00 AM', avatar: 'OM' },
];

const Leads = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredLeads = MOCK_LEADS.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.interest.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case 'New Lead': return 'status-new';
      case 'Consult Booked': return 'status-booked';
      case 'Treated': return 'status-treated';
      default: return '';
    }
  };

  return (
    <div className="admin-leads animate-fade-in">
      <div className="admin-page-header flex-between">
        <div>
          <h1>Leads Inbox</h1>
          <p>CRM overview of patient inquiries and consultation requests.</p>
        </div>
        <div className="leads-stats flex-align-center">
          <div className="stat-pill"><strong>12</strong> New Leads</div>
          <div className="stat-pill"><strong>8</strong> Booked Today</div>
        </div>
      </div>

      <div className="leads-container glass-panel">
        
        {/* Toolbar */}
        <div className="leads-toolbar">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search leads by name or interest..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="table-filters">
            <div className="filter-group">
              <Filter size={16} />
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="All">All Statuses</option>
                <option value="New Lead">New Lead</option>
                <option value="Consult Booked">Consult Booked</option>
                <option value="Treated">Treated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leads List */}
        <div className="leads-list">
          {filteredLeads.map(lead => (
            <div key={lead.id} className="lead-card hover-lift-subtle">
              
              <div className="lead-main-info">
                <div className="avatar lead-avatar">{lead.avatar}</div>
                <div>
                  <h3>{lead.name}</h3>
                  <div className="lead-meta">
                    <span className="flex-align-center"><Mail size={14} /> {lead.email}</span>
                    <span className="flex-align-center"><Phone size={14} /> {lead.phone}</span>
                  </div>
                </div>
              </div>

              <div className="lead-interest">
                <span className="label">Interest</span>
                <strong>{lead.interest}</strong>
              </div>

              <div className="lead-date">
                <span className="label">Received</span>
                <span className="flex-align-center"><Calendar size={14} style={{marginRight: '0.2rem'}} /> {lead.date}</span>
              </div>

              <div className="lead-status-actions">
                <span className={`lead-status-badge ${getStatusClass(lead.status)}`}>
                  {lead.status}
                </span>
                <button className="action-btn"><MoreVertical size={18} /></button>
              </div>

            </div>
          ))}

          {filteredLeads.length === 0 && (
            <div className="no-leads">
              <p>No leads found matching your criteria.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Leads;
