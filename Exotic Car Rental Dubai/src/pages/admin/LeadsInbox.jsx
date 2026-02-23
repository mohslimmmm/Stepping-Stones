import React, { useState } from 'react';
import { Search, Filter, MessageSquare, Check, X, Clock, ShieldCheck } from 'lucide-react';
import './LeadsInbox.css';

const LeadsInbox = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const leads = [
    { id: 'REQ-1042', client: 'Alexander M.', vehicle: 'Ferrari SF90', dates: 'Oct 15 - Oct 18', status: 'Pending ID', amount: 'AED 27,000', time: '10 mins ago' },
    { id: 'REQ-1041', client: 'Sarah T.', vehicle: 'Lamborghini Revuelto', dates: 'Oct 12 - Oct 14', status: 'Deposit Paid', amount: 'AED 17,000', time: '2 hours ago' },
    { id: 'REQ-1040', client: 'James H.', vehicle: 'Rolls-Royce Cullinan', dates: 'Oct 10 - Oct 15', status: 'On Road', amount: 'AED 30,000', time: '1 day ago' },
    { id: 'REQ-1039', client: 'Mohammed K.', vehicle: 'Porsche 911 Turbo', dates: 'Oct 20 - Oct 22', status: 'New Lead', amount: 'AED 9,000', time: '1 day ago' },
  ];

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1 className="neon-text">VIP LEADS INBOX</h1>
          <p className="text-muted">Central CRM for handling client inquiries and reservations.</p>
        </div>
        <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={18} /> Run Background Checks
        </button>
      </div>

      <div className="leads-layout">
        {/* Leads List */}
        <div className="leads-list-container glass-panel">
          <div className="leads-controls">
            <div className="search-input w-full" style={{ marginBottom: '15px' }}>
              <Search size={16} className="text-muted" />
              <input type="text" placeholder="Search client or ID..." />
            </div>
            <div className="leads-tabs">
              <button className={`lead-tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All</button>
              <button className={`lead-tab ${activeTab === 'action' ? 'active' : ''}`} onClick={() => setActiveTab('action')}>Needs Action</button>
              <button className={`lead-tab ${activeTab === 'paid' ? 'active' : ''}`} onClick={() => setActiveTab('paid')}>Confirmed</button>
            </div>
          </div>

          <div className="leads-scroll-area">
            {leads.map((lead, idx) => (
              <div key={idx} className={`lead-item ${idx === 0 ? 'selected' : ''}`}>
                <div className="lead-item-header">
                  <span className="lead-client font-bold">{lead.client}</span>
                  <span className="lead-time text-muted text-sm">{lead.time}</span>
                </div>
                <div className="lead-vehicle text-accent">{lead.vehicle}</div>
                <div className="lead-item-footer">
                  <span className={`lead-tag ${lead.status.replace(' ', '-').toLowerCase()}`}>{lead.status}</span>
                  <span className="lead-amount font-bold">{lead.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Detail View */}
        <div className="lead-detail-container glass-panel">
          <div className="lead-detail-header">
            <div>
              <h2 className="neon-text">Alexander M.</h2>
              <p className="text-muted">Request ID: REQ-1042 • VIP Tier: Gold</p>
            </div>
            <div className="lead-actions">
              <button className="icon-btn" title="Contact via WhatsApp"><MessageSquare size={18} color="#25D366" /></button>
            </div>
          </div>

          <div className="lead-detail-body">
            <div className="status-banner pending-id">
              <Clock size={16} /> ACTION REQUIRED: Pending ID & Driving License Verification
            </div>

            <div className="detail-cards-grid mt-6">
              <div className="detail-card">
                <span className="card-label">Requested Vehicle</span>
                <span className="card-value text-accent font-bold">Ferrari SF90 Stradale</span>
              </div>
              <div className="detail-card">
                <span className="card-label">Rental Period</span>
                <span className="card-value">Oct 15 - Oct 18 (3 Days)</span>
              </div>
              <div className="detail-card">
                <span className="card-label">Total Amount</span>
                <span className="card-value">AED 27,000</span>
              </div>
              <div className="detail-card">
                <span className="card-label">Security Deposit</span>
                <span className="card-value">AED 15,000 (Hold)</span>
              </div>
            </div>

            <div className="client-notes mt-6">
              <h3 className="mb-3">Client Requests</h3>
              <div className="note-box">
                <p>"Please arrange for airport pickup at DXB Terminal 3. Arriving on Emirates flight EK002 at 08:30 AM."</p>
              </div>
            </div>

            <div className="action-panel mt-6">
              <h3 className="mb-3">Reservation Actions</h3>
              <div className="flex-actions">
                <button className="btn-primary flex-1" style={{display: 'flex', justifyContent: 'center', gap: '8px'}}>
                  <Check size={18} /> Approve & Send Payment Link
                </button>
                <button className="btn-outline flex-1" style={{borderColor: '#ff4d4d', color: '#ff4d4d', display: 'flex', justifyContent: 'center', gap: '8px'}}>
                  <X size={18} /> Decline Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsInbox;
