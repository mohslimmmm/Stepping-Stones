import React from 'react';
import { TrendingUp, Users, CalendarCheck, CreditCard, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const KPI_CARDS = [
  {
    title: 'Occupancy Rate',
    value: '84%',
    trend: '+5%',
    trendUp: true,
    icon: <CalendarCheck size={24} />,
    description: 'Current High Season'
  },
  {
    title: 'Pending Deposits',
    value: '€245,000',
    trend: '-2%',
    trendUp: false,
    icon: <CreditCard size={24} />,
    description: 'Awaiting clearance'
  },
  {
    title: 'Concierge Requests',
    value: '38',
    trend: '+12%',
    trendUp: true,
    icon: <Users size={24} />,
    description: 'Active for next 7 days'
  }
];

const RECENT_LEADS = [
  { id: 1, name: 'A. Rothschild', property: 'Villa Paloma', status: 'Contract Sent', value: '€90,000' },
  { id: 2, name: 'S. Al Maktoum', property: 'Penthouse Azure', status: 'Checked-In', value: '€28,000' },
  { id: 3, name: 'Confidential', property: 'Estate Grimaldi', status: 'Vetted', value: '€170,000' },
  { id: 4, name: 'E. Musk', property: 'Château Ocean', status: 'Inquiry', value: '€110,000' },
];

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Dashboard Overview</h1>
          <p className="admin-page-subtitle">Welcome back. Here is the operational summary for Riviera Royale.</p>
        </div>
        <button className="btn btn-primary">+ New Booking</button>
      </div>

      {/* KPI Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {KPI_CARDS.map((kpi, idx) => (
          <div key={idx} className="admin-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
              <span style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{kpi.title}</span>
              <div style={{ color: 'var(--color-accent-blue)' }}>{kpi.icon}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--color-text-navy)', lineHeight: 1 }}>{kpi.value}</span>
              <span style={{ 
                color: kpi.trendUp ? '#10b981' : '#ef4444', 
                fontSize: '0.9rem', 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                {kpi.trendUp ? <TrendingUp size={16}/> : <TrendingUp size={16} style={{ transform: 'scaleY(-1)' }}/>}
                {kpi.trend}
              </span>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{kpi.description}</span>
          </div>
        ))}
      </div>

      {/* Main Grid area */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        {/* Recent Leads Table */}
        <div className="admin-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Active Leads & Bookings</h3>
            <Link to="/admin/leads" style={{ color: 'var(--color-accent-blue)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500 }}>
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)', color: 'var(--color-text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left' }}>
                <th style={{ paddingBottom: '1rem', fontWeight: 600 }}>Client/Rep</th>
                <th style={{ paddingBottom: '1rem', fontWeight: 600 }}>Property</th>
                <th style={{ paddingBottom: '1rem', fontWeight: 600 }}>Status</th>
                <th style={{ paddingBottom: '1rem', fontWeight: 600, textAlign: 'right' }}>Value</th>
              </tr>
            </thead>
            <tbody>
              {RECENT_LEADS.map(lead => (
                <tr key={lead.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1rem 0', fontWeight: 500 }}>{lead.name}</td>
                  <td style={{ padding: '1rem 0', color: 'var(--color-text-muted)' }}>{lead.property}</td>
                  <td style={{ padding: '1rem 0' }}>
                    <span style={{
                      padding: '0.25rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: lead.status === 'Checked-In' ? '#dcfce7' : lead.status === 'Contract Sent' ? '#e0f2fe' : lead.status === 'Vetted' ? '#f3e8ff' : '#f1f5f9',
                      color: lead.status === 'Checked-In' ? '#166534' : lead.status === 'Contract Sent' ? '#075985' : lead.status === 'Vetted' ? '#6b21a8' : '#475569',
                    }}>
                      {lead.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 0', textAlign: 'right', fontWeight: 600 }}>{lead.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="admin-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Quick Actions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/admin/properties/new" className="btn btn-outline" style={{ justifyContent: 'flex-start', borderStyle: 'dashed' }}>
              + Add New Property
            </Link>
            <button className="btn btn-outline" style={{ justifyContent: 'flex-start' }}>
              Assign Concierge Staff
            </button>
            <button className="btn btn-outline" style={{ justifyContent: 'flex-start' }}>
              Generate Financial Report
            </button>
            <button className="btn btn-outline" style={{ justifyContent: 'flex-start' }}>
              Review Vetting Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
