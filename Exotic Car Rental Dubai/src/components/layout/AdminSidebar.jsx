import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, CarFront, Users, ClipboardList, LogOut } from 'lucide-react';
import './AdminSidebar.css';

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar glass-panel">
      <div className="sidebar-header">
        <h2 className="neon-text">APEX ADMIN</h2>
        <span className="badge">v2.0</span>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink to="/admin" end className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <LayoutDashboard size={20} /> Dashboard
        </NavLink>
        <NavLink to="/admin/fleet" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <CarFront size={20} /> Fleet Matrix
        </NavLink>
        <NavLink to="/admin/leads" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <Users size={20} /> VIP Leads
        </NavLink>
        <div className="sidebar-divider"></div>
        <Link to="/" className="sidebar-link return-link">
          <LogOut size={20} /> Exit Admin
        </Link>
      </nav>
      
      <div className="sidebar-footer">
        <div className="agent-info">
          <div className="agent-avatar">A</div>
          <div>
            <p className="agent-name">Agent 007</p>
            <p className="agent-role">System Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
