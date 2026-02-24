import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Send, LogOut, Activity } from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();

  const navItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Terminal View' },
    { path: '/admin/roster', icon: Users, label: 'Client Roster' },
    { path: '/admin/leads', icon: Send, label: 'Encrypted Leads' },
    { path: '/admin/reports', icon: FileText, label: 'Secure Reports' },
  ];

  return (
    <div style={{ 
      minHeight: '100vh', display: 'flex', 
      background: 'var(--bg-obsidian)', color: 'var(--text-pearl)',
      fontFamily: 'var(--font-sans)'
    }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '280px', borderRight: '1px solid var(--border-metal)',
        background: 'var(--bg-obsidian-light)', display: 'flex', flexDirection: 'column'
      }}>
        <div style={{ 
          height: '4rem', display: 'flex', alignItems: 'center', padding: '0 1.5rem',
          borderBottom: '1px solid var(--border-metal)'
        }}>
          <span style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-bronze)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Activity size={16} /> Aegis Secure
          </span>
        </div>
        
        <nav style={{ flex: 1, padding: '2rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '0.75rem 1rem', fontSize: '0.875rem',
                  color: isActive ? 'var(--accent-emerald)' : 'var(--text-slate)',
                  background: isActive ? 'rgba(0, 192, 127, 0.05)' : 'transparent',
                  borderLeft: isActive ? '2px solid var(--accent-emerald)' : '2px solid transparent',
                  transition: 'all 0.2s',
                  textTransform: 'uppercase', letterSpacing: '0.05em'
                }}
                onMouseOver={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-pearl)';
                }}
                onMouseOut={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-slate)';
                }}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-metal)' }}>
           <Link to="/" style={{ 
             display: 'flex', alignItems: 'center', gap: '0.75rem', 
             color: 'var(--text-slate)', fontSize: '0.875rem',
             textTransform: 'uppercase', letterSpacing: '0.05em'
           }}>
             <LogOut size={16} /> Disconnect
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        
        {/* Ticker Tape Topbar */}
        <header style={{ 
          height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 2rem', borderBottom: '1px solid var(--border-metal)',
          background: 'rgba(22, 24, 29, 0.9)', backdropFilter: 'blur(10px)',
          position: 'sticky', top: 0, zIndex: 50
        }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '8px', height: '8px', background: 'var(--accent-emerald)', borderRadius: '50%', boxShadow: '0 0 10px rgba(0,192,127,0.5)' }}></div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-emerald)' }}>Live Terminal</span>
           </div>

           {/* Scrolling Ticker */}
           <div style={{ 
              flex: 1, margin: '0 2rem', overflow: 'hidden', whiteSpace: 'nowrap',
              position: 'relative', height: '100%', display: 'flex', alignItems: 'center'
           }}>
              <div style={{
                display: 'inline-block',
                animation: 'ticker 20s linear infinite',
                fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-slate)'
              }}>
                 <span style={{ marginRight: '3rem' }}>AUM: <span style={{ color: 'var(--text-pearl)' }}>$14.2B USD</span> <span style={{ color: 'var(--accent-emerald)' }}>▲ 1.2%</span></span>
                 <span style={{ marginRight: '3rem' }}>LIQUIDITY EVENT: <span style={{ color: 'var(--text-pearl)' }}>ZURICH HOLDINGS IPO</span> <span style={{ color: 'var(--accent-bronze)' }}>PENDING</span></span>
                 <span style={{ marginRight: '3rem' }}>THREAT LEVEL: <span style={{ color: 'var(--accent-emerald)' }}>LOW</span></span>
                 <span style={{ marginRight: '3rem' }}>FX: <span style={{ color: 'var(--text-pearl)' }}>USD/CHF 0.89</span> <span style={{ color: 'red' }}>▼ 0.05%</span></span>
              </div>
           </div>

           <div style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-slate)' }}>
              128-BIT ENCRYPTED
           </div>
        </header>

        {/* Dynamic Styles for Ticker */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes ticker {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}} />

        <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
           <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="animate-fade-in">
              <Outlet />
           </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
