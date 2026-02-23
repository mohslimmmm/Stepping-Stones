import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  LayoutDashboard, 
  Briefcase, 
  Settings, 
  LogOut, 
  Bell, 
  User,
  Inbox
} from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Matters', icon: Briefcase, path: '/admin/matters' },
    { name: 'Leads Inbox', icon: Inbox, path: '/admin/leads' },
    { name: 'Profile Editor', icon: Settings, path: '/admin/editor' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '260px', 
        backgroundColor: 'var(--accent-charcoal)', 
        color: 'var(--bg-platinum)',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh'
      }}>
        <div style={{ padding: '30px 20px', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <Building2 size={24} className="accent-oxblood" />
          <span style={{ fontFamily: 'var(--font-header)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Partner Portal
          </span>
        </div>

        <nav style={{ flex: 1, padding: '20px 0' }}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.name} 
                to={item.path} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  padding: '12px 20px', 
                  color: isActive ? 'var(--bg-platinum)' : 'rgba(255,255,255,0.6)',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                  borderLeft: isActive ? '3px solid var(--accent-oxblood)' : '3px solid transparent',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 500 : 400
                }}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
            <LogOut size={16} />
            Exit Portal
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, marginLeft: '260px', display: 'flex', flexDirection: 'column' }}>
        <header style={{ 
          height: '70px', 
          backgroundColor: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-end', 
          padding: '0 40px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          gap: '20px'
        }}>
          <button style={{ color: 'var(--accent-charcoal)', opacity: 0.6 }}><Bell size={20} /></button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', fontWeight: 500 }}>
            <span>A. Sterling, Managing Partner</span>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--bg-platinum)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
              <User size={18} color="var(--accent-charcoal)" />
            </div>
          </div>
        </header>

        <div style={{ padding: '40px' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
