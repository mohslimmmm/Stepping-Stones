import React, { useState } from 'react';
import { Search, Filter, Mail, Star, Clock, Check, MoreVertical, Paperclip, Reply, Calendar } from 'lucide-react';
import './LeadsInbox.css';

const LeadsInbox = () => {
  const [selectedLead, setSelectedLead] = useState(1);

  const leads = [
    { id: 1, name: 'Arthur Pendleton', subject: 'Private Showing Request: Red Mountain Peak', time: '10:42 AM', status: 'New Inquiry', read: false, starred: true },
    { id: 2, name: 'Sofia Lauren', subject: 'Offer Details - Downtown Penthouse', time: 'Yesterday', status: 'Offer Made', read: true, starred: true },
    { id: 3, name: 'Marcus Chen (Agent)', subject: 'Buyer Profile: The Harrison Family', time: 'Yesterday', status: 'Pre-Approved', read: true, starred: false },
    { id: 4, name: 'James Wilson', subject: 'Rescheduling Snowmass Walkthrough', time: 'Oct 15', status: 'Showing Set', read: true, starred: false },
    { id: 5, name: 'Isabella Rossi', subject: 'Inquiry on Off-Market Portfolios', time: 'Oct 12', status: 'New Inquiry', read: true, starred: false },
  ];

  const activeLead = leads.find(l => l.id === selectedLead);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'New Inquiry': return <span className="lead-badge new">New</span>;
      case 'Pre-Approved': return <span className="lead-badge approved">Pre-Approved</span>;
      case 'Showing Set': return <span className="lead-badge showing">Showing Set</span>;
      case 'Offer Made': return <span className="lead-badge offer">Offer Made</span>;
      default: return null;
    }
  };

  return (
    <div className="admin-inbox fade-in-up">
      <div className="inbox-header-container">
        <h1>Leads & Inquiries</h1>
        <p>Manage client communications and showing requests.</p>
      </div>

      <div className="inbox-layout admin-card">
        {/* Sidebar List */}
        <div className="inbox-sidebar">
          <div className="inbox-controls">
            <div className="search-input-wrapper w-100">
               <Search className="search-icon" size={16} />
               <input type="text" placeholder="Search leads..." />
            </div>
            <button className="icon-btn-filter"><Filter size={18} /></button>
          </div>
          
          <div className="inbox-list">
            {leads.map(lead => (
              <div 
                key={lead.id} 
                className={`inbox-item ${selectedLead === lead.id ? 'active' : ''} ${!lead.read ? 'unread' : ''}`}
                onClick={() => setSelectedLead(lead.id)}
              >
                <div className="item-header">
                  <div className="item-name-group">
                    {!lead.read && <span className="unread-dot"></span>}
                    <h4 className="item-name">{lead.name}</h4>
                  </div>
                  <span className="item-time">{lead.time}</span>
                </div>
                <div className="item-subject">{lead.subject}</div>
                <div className="item-footer">
                  {getStatusBadge(lead.status)}
                  <Star size={16} className={`star-icon ${lead.starred ? 'active' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message View */}
        <div className="inbox-view">
          {activeLead ? (
            <>
              <div className="view-header">
                <div className="view-title">
                  <h2>{activeLead.subject}</h2>
                  <div className="view-badges">
                    {getStatusBadge(activeLead.status)}
                    {activeLead.status === 'New Inquiry' && <button className="btn-outline-sm ml-2">Qualify Lead</button>}
                  </div>
                </div>
                <div className="view-actions">
                   <button className="action-icon" title="Print"><Paperclip size={18} /></button>
                   <button className="action-icon" title="Mark Unread"><Mail size={18} /></button>
                   <button className="action-icon"><MoreVertical size={18} /></button>
                </div>
              </div>

              <div className="message-content">
                <div className="message-meta">
                  <div className="sender-avatar">{activeLead.name.charAt(0)}</div>
                  <div className="sender-info">
                    <h4>{activeLead.name} <span>&lt;{activeLead.name.split(' ')[0].toLowerCase()}@example.com&gt;</span></h4>
                    <span className="message-time">{activeLead.time} (2 hours ago)</span>
                  </div>
                </div>

                <div className="message-body">
                  <p>Hello Jackson,</p>
                  <p>I am interested in scheduling a private showing for the Red Mountain Peak Estate listed at $32.5M. My wife and I will be flying into ASE this coming Thursday and are available Friday morning.</p>
                  <p>We are currently pre-approved and working with our trust advisors on a potential acquisition in the area.</p>
                  <p>Please let me know what times work best for your team.</p>
                  <br/>
                  <p>Best regards,<br/>Arthur Pendleton<br/>CEO, Pendleton Capital Partners</p>
                </div>

                {activeLead.id === 1 && (
                  <div className="message-attachments mt-4">
                     <p className="attachment-title"><Paperclip size={14} /> 1 Attachment</p>
                     <div className="attachment-card">
                       <span className="attachment-ext">PDF</span>
                       <div className="attachment-info">
                         <span className="attachment-name">Proof_of_Funds_Pendleton.pdf</span>
                         <span className="attachment-size">2.4 MB</span>
                       </div>
                     </div>
                  </div>
                )}
              </div>

              <div className="reply-box">
                <div className="reply-header">
                  <button className="reply-tab active"><Reply size={16} /> Reply</button>
                  <button className="reply-tab"><Calendar size={16} /> Propose Showing Time</button>
                </div>
                <textarea rows="4" placeholder="Draft your response to Arthur..."></textarea>
                <div className="reply-footer">
                  <button className="action-icon"><Paperclip size={18} /></button>
                  <button className="btn-primary"><Send_Icon /> Send Message</button>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-inbox">
              <Mail size={48} className="text-muted mb-3" />
              <h3>Select a message</h3>
              <p className="text-muted">Choose a lead from the list to view details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Dummy component for icon missing in import
const Send_Icon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;

export default LeadsInbox;
