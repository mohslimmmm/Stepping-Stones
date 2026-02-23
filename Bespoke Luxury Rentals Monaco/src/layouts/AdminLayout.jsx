import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Building, Users, Settings, LogOut, Search, Bell } from 'lucide-react';
import './Admin.css';

const AdminLayout = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <h2>Riviera Admin</h2>
          <span className="admin-badge">Secure Portal</span>
        </div>
        
        <nav className="admin-nav">
          <Link to="/admin" className={`admin-nav-item ${path === '/admin' ? 'active' : ''}`}>
            <Home size={20} /> Dashboard
          </Link>
          <Link to="/admin/properties" className={`admin-nav-item ${path.includes('/properties') ? 'active' : ''}`}>
            <Building size={20} /> Properties
          </Link>
          <Link to="/admin/leads" className={`admin-nav-item ${path.includes('/leads') ? 'active' : ''}`}>
            <Users size={20} /> Leads Inbox
          </Link>
          <Link to="#" className="admin-nav-item">
            <Settings size={20} /> Settings
          </Link>
        </nav>
        
        <div className="admin-sidebar-footer">
          <Link to="/" className="admin-nav-item logout-link">
            <LogOut size={20} /> Back to Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="admin-main-wrapper">
        <header className="admin-header">
          <div className="admin-search">
            <Search size={20} className="search-icon" />
            <input type="text" placeholder="Search properties, leads, deposits..." />
          </div>
          <div className="admin-header-actions">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
            <div className="admin-profile">
              <div className="profile-avatar">RR</div>
              <div className="profile-info">
                <span className="profile-name">Concierge Lead</span>
                <span className="profile-role">Admin</span>
              </div>
            </div>
          </div>
        </header>
        
        <main className="admin-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
