import { Calendar, Activity, TrendingUp, Users } from 'lucide-react';
import './Dashboard.css';

export default function Dashboard() {
  const kpis = [
    { label: "Consultations Scheduled", value: "24", trend: "+12%", icon: <Calendar className="kpi-icon" /> },
    { label: "Surgery Pipeline", value: "$420k", trend: "+5%", icon: <Activity className="kpi-icon" /> },
    { label: "Lead Conversion Rate", value: "68%", trend: "+2.4%", icon: <TrendingUp className="kpi-icon" /> },
    { label: "New Inquiries", value: "14", trend: "-2%", icon: <Users className="kpi-icon negative" /> }
  ];

  return (
    <div className="admin-dashboard">
      <div className="admin-page-header">
        <h1 className="admin-h1">Facility Overview</h1>
        <p className="admin-p">Key performance metrics for Desert Sculpt Clinic.</p>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="admin-card kpi-card">
            <div className="kpi-header">
              <span className="kpi-label">{kpi.label}</span>
              {kpi.icon}
            </div>
            <div className="kpi-body">
              <span className="kpi-value">{kpi.value}</span>
              <span className={`kpi-trend ${kpi.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                {kpi.trend} this month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for Charts / Recent Activity */}
      <div className="dashboard-content-grid">
        <div className="admin-card dashboard-chart-area">
          <h2 className="admin-h2">Consultation Volume</h2>
          <div className="chart-placeholder">
            <div className="chart-bar" style={{height: '40%'}}></div>
            <div className="chart-bar" style={{height: '60%'}}></div>
            <div className="chart-bar" style={{height: '50%'}}></div>
            <div className="chart-bar" style={{height: '80%'}}></div>
            <div className="chart-bar" style={{height: '70%'}}></div>
            <div className="chart-bar active" style={{height: '90%'}}></div>
            <div className="chart-bar" style={{height: '65%'}}></div>
          </div>
        </div>

        <div className="admin-card dashboard-feed-area">
          <h2 className="admin-h2">Recent Activity</h2>
          <ul className="activity-list">
            <li className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-details">
                <span className="activity-text">New Virtual Consult submitted by <strong>Emma W.</strong></span>
                <span className="activity-time">10 mins ago</span>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-details">
                <span className="activity-text">Surgery scheduled: Rhinoplasty for <strong>Michael T.</strong></span>
                <span className="activity-time">1 hour ago</span>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-details">
                <span className="activity-text">Gallery updated for Deep-Plane Facelift</span>
                <span className="activity-time">3 hours ago</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
