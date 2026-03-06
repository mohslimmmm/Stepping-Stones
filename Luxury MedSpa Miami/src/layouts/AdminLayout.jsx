import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Scissors, Users, LogOut } from 'lucide-react';
import './AdminLayout.css';

const AdminLayout = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Treatments', path: '/admin/treatments', icon: <Scissors size={20} /> },
    { name: 'Leads Inbox', path: '/admin/leads', icon: <Users size={20} /> },
  ];

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>AURA</h2>
          <p>Admin Console</p>
        </div>
        
        <nav className="admin-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`admin-nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        
        <div className="admin-logout">
          <Link to="/" className="admin-nav-item">
            <LogOut size={20} />
            <span>Staff Portal (Exit)</span>
          </Link>
        </div>
      </aside>
      
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
