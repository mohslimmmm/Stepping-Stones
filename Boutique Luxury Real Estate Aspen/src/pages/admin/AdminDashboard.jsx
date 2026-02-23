import React from 'react';
import { TrendingUp, DollarSign, Home, Users, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard fade-in-up">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back, Jackson. Here's what's happening with your portfolio today.</p>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        <div className="admin-card kpi-card">
          <div className="kpi-icon-wrapper bg-blue-100 text-blue-600">
            <DollarSign size={24} />
          </div>
          <div className="kpi-details">
            <p className="kpi-label">Active Escrow Volume</p>
            <h3 className="kpi-value">$142.5M</h3>
            <p className="kpi-trend positive"><ArrowUpRight size={14} /> +12.5% from last month</p>
          </div>
        </div>

        <div className="admin-card kpi-card">
          <div className="kpi-icon-wrapper bg-green-100 text-green-600">
            <Home size={24} />
          </div>
          <div className="kpi-details">
            <p className="kpi-label">Total Active Listings</p>
            <h3 className="kpi-value">24</h3>
            <p className="kpi-trend positive"><ArrowUpRight size={14} /> +2 this week</p>
          </div>
        </div>

        <div className="admin-card kpi-card">
          <div className="kpi-icon-wrapper bg-purple-100 text-purple-600">
            <Users size={24} />
          </div>
          <div className="kpi-details">
            <p className="kpi-label">Showing Requests</p>
            <h3 className="kpi-value">18</h3>
            <p className="kpi-trend negative"><ArrowDownRight size={14} /> -3 from last week</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Recent Activity */}
        <div className="admin-card activity-feed">
          <div className="card-header">
            <h2>Recent Activity</h2>
            <button className="btn-text">View All</button>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon bg-gray-100"><Clock size={16} /></div>
              <div className="activity-content">
                <p>New showing request for <strong>Red Mountain Peak</strong></p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon bg-green-100 text-green-600"><TrendingUp size={16} /></div>
              <div className="activity-content">
                <p><strong>Snowmass Ski-in</strong> changed to Under Contract</p>
                <span className="activity-time">5 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon bg-blue-100 text-blue-600"><Users size={16} /></div>
              <div className="activity-content">
                <p>New buyer inquiry from <strong>E. Rostova's</strong> network</p>
                <span className="activity-time">1 day ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon bg-gray-100"><Home size={16} /></div>
              <div className="activity-content">
                <p>Listing published: <strong>Downtown Penthouse</strong></p>
                <span className="activity-time">2 days ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Deadlines */}
        <div className="admin-sidebar-content">
          <div className="admin-card quick-actions">
            <div className="card-header">
              <h2>Quick Actions</h2>
            </div>
            <div className="actions-grid">
              <button className="action-btn">List New Property</button>
              <button className="action-btn">Draft Newsletter</button>
              <button className="action-btn">Sync MLS Leads</button>
            </div>
          </div>

          <div className="admin-card expiring-soon">
             <div className="card-header">
              <h2>Upcoming Closing Dates</h2>
            </div>
            <ul className="deadline-list">
              <li>
                <div className="deadline-info">
                  <strong>Woody Creek Ranch</strong>
                  <span>Buyer Inspection</span>
                </div>
                <div className="deadline-date">Nov 12</div>
              </li>
              <li>
                <div className="deadline-info">
                  <strong>Owl Creek Estate</strong>
                  <span>Final Walkthrough</span>
                </div>
                <div className="deadline-date">Nov 15</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
