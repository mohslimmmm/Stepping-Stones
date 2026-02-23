import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Scissors, Image as ImageIcon, Users, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './AdminLayout.css';

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/admin/procedures', icon: <Scissors size={20} />, label: 'Procedures' },
    { path: '/admin/gallery', icon: <ImageIcon size={20} />, label: 'Gallery Edit' },
    { path: '/admin/leads', icon: <Users size={20} />, label: 'Leads Inbox' },
  ];

  return (
    <div className="admin-layout">
      {/* Mobile Header */}
      <div className="admin-mobile-header">
        <span className="admin-logo">Desert Sculpt Admin</span>
        <button className="admin-menu-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="admin-logo">Admin Console</h2>
          <p className="admin-sublogo">Desert Sculpt</p>
        </div>
        
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsSidebarOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link text-danger">
            <LogOut size={20} />
            <span>Public Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <div className="admin-topbar">
          <div className="admin-user-info">
            <div className="avatar">DR</div>
            <div>
              <p className="user-name">Dr. Alexander</p>
              <p className="user-role">Lead Surgeon</p>
            </div>
          </div>
        </div>
        
        <div className="admin-content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
