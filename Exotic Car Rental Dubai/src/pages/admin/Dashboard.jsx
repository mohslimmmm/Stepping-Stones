import React from 'react';
import { Activity, CarFront, Wrench, AlertTriangle, TrendingUp, CalendarDays } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="neon-text">TELEMETRY HUB</h1>
          <p className="text-muted">Real-time fleet analytics and active monitoring.</p>
        </div>
        <div className="status-indicator">
          <span className="pulse-dot"></span> System Live: Dubai HQ
        </div>
      </div>

      {/* KPIs Section */}
      <div className="kpi-grid">
        <div className="kpi-card glass-panel">
          <div className="kpi-header">
            <h3>Fleet Utilization</h3>
            <Activity className="text-accent" />
          </div>
          <div className="kpi-value text-accent">84%</div>
          <div className="kpi-trend positive">
            <TrendingUp size={16} /> +5% vs Last Week
          </div>
        </div>

        <div className="kpi-card glass-panel">
          <div className="kpi-header">
            <h3>Active Rentals</h3>
            <CarFront className="text-accent" />
          </div>
          <div className="kpi-value">18 <span className="text-sm text-muted">/ 25</span></div>
          <div className="kpi-trend text-muted">
            <CalendarDays size={16} /> 3 returning today
          </div>
        </div>

        <div className="kpi-card glass-panel">
          <div className="kpi-header">
            <h3>Upcoming Maintenance</h3>
            <Wrench className="text-accent" />
          </div>
          <div className="kpi-value warning-text">4</div>
          <div className="kpi-trend negative">
            <AlertTriangle size={16} /> 1 vehicle overdue
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="dashboard-content">
        <div className="main-panel glass-panel">
          <h3>Live Telemetry Map</h3>
          <div className="map-placeholder">
            <div className="map-bg"></div>
            <div className="tracking-point" style={{ top: '30%', left: '40%' }}>
              <span className="car-id">SF90</span>
            </div>
            <div className="tracking-point" style={{ top: '60%', left: '70%' }}>
              <span className="car-id">REV1</span>
            </div>
            <div className="tracking-point warning" style={{ top: '45%', left: '55%' }}>
              <span className="car-id">CUL2</span>
            </div>
          </div>
        </div>

        <div className="side-panel">
          <div className="glass-panel alert-panel">
            <h3>System Alerts</h3>
            <ul className="alert-list">
              <li className="alert-item warning">
                <AlertTriangle size={16} />
                <span>Rolls-Royce Cullinan (CUL2) approaching mileage limit for service.</span>
              </li>
              <li className="alert-item">
                <CalendarDays size={16} />
                <span>Lamborghini Huracan returning at Terminal 3 in 2 hours.</span>
              </li>
              <li className="alert-item">
                <CarFront size={16} />
                <span>New Booking: Porsche 911 Turbo S (Pending ID Verification).</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel quick-actions mt-6">
            <h3>Quick Actions</h3>
            <div className="action-buttons">
              <button className="btn-outline w-full mb-3 text-left">Dispatch Recovery Team</button>
              <button className="btn-primary w-full text-left">Approve Pending ID</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
