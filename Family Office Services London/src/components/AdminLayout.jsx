import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Inbox, LogOut, Shield } from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/admin' },
    { icon: <Users size={20} />, label: 'Families', path: '/admin/roster' },
    { icon: <FileText size={20} />, label: 'Publications', path: '/admin/edit' },
    { icon: <Inbox size={20} />, label: 'Leads Inbox', path: '/admin/leads' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Sidebar */}
      <aside style={{ width: '280px', background: 'var(--accent-green)', color: 'var(--bg-cream)', padding: '2rem 0', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '0 2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Shield size={30} color="var(--accent-gold)" />
          <h3 style={{ color: 'inherit', margin: 0, fontSize: '1.2rem' }}>OFFICE PORTAL</h3>
        </div>
        
        <nav style={{ flex: 1 }}>
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 2rem',
                color: location.pathname === item.path ? 'var(--accent-gold)' : 'inherit',
                background: location.pathname === item.path ? 'rgba(255,253,208,0.1)' : 'transparent',
                borderLeft: location.pathname === item.path ? '4px solid var(--accent-gold)' : '4px solid transparent',
              }}
            >
              {item.icon}
              <span style={{ fontWeight: 500 }}>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div style={{ padding: '2rem' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.7 }}>
            <LogOut size={20} />
            <span>Public Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
