import { TrendingUp, Users, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="admin-dashboard animate-fade-in">
      <div className="admin-page-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back, Dr. Rostova. Here's what looks like today.</p>
      </div>

      {/* KPI Cards */}
      <div className="dashboard-kpis">
        
        <div className="kpi-card">
          <div className="kpi-icon-wrapper" style={{ backgroundColor: 'rgba(183, 110, 121, 0.1)', color: 'var(--color-accent)' }}>
            <Calendar size={24} />
          </div>
          <div className="kpi-content">
            <span className="kpi-label">Today's Appointments</span>
            <div className="kpi-value-row">
              <span className="kpi-value">14</span>
              <span className="kpi-trend positive">
                <ArrowUpRight size={16} /> 12%
              </span>
            </div>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-wrapper" style={{ backgroundColor: 'rgba(51, 51, 51, 0.05)', color: 'var(--color-text-main)' }}>
            <Users size={24} />
          </div>
          <div className="kpi-content">
            <span className="kpi-label">New Inquiries</span>
            <div className="kpi-value-row">
              <span className="kpi-value">28</span>
              <span className="kpi-trend positive">
                <ArrowUpRight size={16} /> 5%
              </span>
            </div>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-wrapper" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: '#2e7d32' }}>
            <TrendingUp size={24} />
          </div>
          <div className="kpi-content">
            <span className="kpi-label">Monthly Revenue</span>
            <div className="kpi-value-row">
              <span className="kpi-value">$142,500</span>
              <span className="kpi-trend negative">
                <ArrowDownRight size={16} /> 2%
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Recent Activity / Schedule Placeholder */}
      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <h3>Upcoming Schedule</h3>
          <ul className="schedule-list">
            <li className="schedule-item">
              <div className="time">09:00 AM</div>
              <div className="details">
                <strong>Facial Balancing Consult</strong>
                <span>Isabella M.</span>
              </div>
              <span className="status-badge initial-results">Confirmed</span>
            </li>
            <li className="schedule-item">
              <div className="time">10:30 AM</div>
              <div className="details">
                <strong>Morpheus8 Face & Neck</strong>
                <span>Sophia T.</span>
              </div>
              <span className="status-badge initial-results">Confirmed</span>
            </li>
            <li className="schedule-item">
              <div className="time">01:00 PM</div>
              <div className="details">
                <strong>Botox & Filler</strong>
                <span>Marcus L.</span>
              </div>
              <span className="status-badge healing">Pending</span>
            </li>
          </ul>
        </div>
        
        <div className="dashboard-panel">
          <h3>Recent Leads</h3>
          <ul className="leads-mini-list">
            <li className="lead-mini-item">
              <div className="avatar">EC</div>
              <div className="details">
                <strong>Emma Chamberlain</strong>
                <span>Interested in: CoolSculpting</span>
              </div>
              <span className="time-ago">2h ago</span>
            </li>
            <li className="lead-mini-item">
              <div className="avatar">JD</div>
              <div className="details">
                <strong>John Davis</strong>
                <span>Interested in: NAD+ Therapy</span>
              </div>
              <span className="time-ago">4h ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
