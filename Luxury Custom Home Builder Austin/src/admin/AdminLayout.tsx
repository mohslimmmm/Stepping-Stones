import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Users, 
  PlusSquare, 
  LogOut, 
  Bell, 
  Search 
} from 'lucide-react';
import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Projects', path: '/admin/projects', icon: <FolderKanban size={20} /> },
    { name: 'Leads', path: '/admin/leads', icon: <Users size={20} /> },
    { name: 'New Project', path: '/admin/projects/new', icon: <PlusSquare size={20} /> },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Sidebar */}
      <aside style={{
        width: '280px',
        backgroundColor: 'var(--accent-black)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        zIndex: 1100
      }}>
        <div style={{ padding: '40px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 style={{ color: 'white', fontSize: '1.2rem', letterSpacing: '2px' }}>CONSTRUCTION PORTAL</h2>
        </div>

        <nav style={{ padding: '40px 20px', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '14px 20px',
                  color: location.pathname === item.path ? 'white' : 'rgba(255,255,255,0.5)',
                  backgroundColor: location.pathname === item.path ? 'rgba(255,255,255,0.05)' : 'transparent',
                  borderLeft: location.pathname === item.path ? '4px solid var(--accent-copper)' : '4px solid transparent',
                  transition: '0.3s',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <div style={{ padding: '40px 20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            padding: '14px 20px',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.9rem'
          }}>
            <LogOut size={20} />
            Exit Portal
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, marginLeft: '280px', display: 'flex', flexDirection: 'column' }}>
        {/* Admin Top Bar */}
        <header style={{
          height: '80px',
          backgroundColor: 'white',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 40px',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }} />
            <input 
              type="text" 
              placeholder="Search projects..." 
              style={{
                width: '100%',
                padding: '10px 15px 10px 45px',
                border: '1px solid #eee',
                backgroundColor: '#f9f9f9',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <Bell size={20} opacity={0.6} />
              <span style={{ 
                position: 'absolute', 
                top: '-5px', 
                right: '-5px', 
                width: '12px', 
                height: '12px', 
                backgroundColor: 'var(--accent-copper)', 
                borderRadius: '50%',
                border: '2px solid white'
              }}></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: '700', fontSize: '0.85rem' }}>E. BLACKWOOD</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>Project Manager</div>
              </div>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--accent-black)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>EB</div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ padding: '40px', flex: 1 }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
