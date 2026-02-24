import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Building2, Users, FileEdit, LogOut, Settings } from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Inventory', path: '/admin/inventory', icon: <Building2 size={20} /> },
    { name: 'Leads Inbox', path: '/admin/leads', icon: <Users size={20} /> },
    { name: 'New Listing', path: '/admin/edit/new', icon: <FileEdit size={20} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="admin-layout" style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
      {/* Sidebar */}
      <aside className="admin-sidebar" style={{ 
        width: '260px', 
        backgroundColor: 'var(--color-text)', 
        color: 'var(--color-white)', 
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="admin-brand" style={{ marginBottom: '3rem', paddingLeft: '1rem' }}>
          <h2 style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontFamily: 'var(--font-header)' }}>Sol y Mar</h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', textTransform: 'uppercase', letterSpacing: '1px' }}>Agent Portal</p>
        </div>

        <nav className="admin-nav" style={{ flex: 1 }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name} style={{ marginBottom: '0.5rem' }}>
                  <Link 
                    to={item.path} 
                    style={{
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      color: isActive ? 'var(--color-white)' : 'var(--color-gray-400)',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.icon}
                    <span style={{ fontWeight: 500 }}>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="admin-logout">
          <Link to="/" style={{
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            padding: '10px 16px',
            color: 'var(--color-accent-terracotta)',
            transition: 'opacity 0.3s'
          }}>
            <LogOut size={20} />
            <span>Exit Portal</span>
          </Link>
        </div>
      </aside>

      {/* Main Area */}
      <main className="admin-main" style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
         <div className="admin-header" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
            <div className="admin-user-info" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <span style={{ fontWeight: 600 }}>C. Mendoza</span>
               <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', fontWeight: 'bold' }}>
                 CM
               </div>
            </div>
         </div>
         <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
