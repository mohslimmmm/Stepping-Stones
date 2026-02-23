import { TrendingUp, Users, Clock, FileText, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const DashboardPage = () => {
  const stats = [
    { title: 'Active Matters', value: '42', change: '+12%', up: true, icon: FileText },
    { title: 'Billable Hours YTD', value: '18,420', change: '+4.5%', up: true, icon: Clock },
    { title: 'New Inquiries', value: '18', change: '-2%', up: false, icon: Users },
    { title: 'Realized Revenue', value: '$12.4M', change: '+8.1%', up: true, icon: TrendingUp }
  ];

  return (
    <div className="admin-dashboard">
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Partner Overview</h1>
        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Welcome back, Arthur Sterling. Here is the operational status for Vanguard & Shield.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px', marginBottom: '40px' }}>
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} style={{ backgroundColor: 'white', padding: '24px', borderRadius: 'var(--radius-strong)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ padding: '8px', backgroundColor: '#f9f9f9', borderRadius: '2px' }}>
                  <Icon size={20} color="var(--accent-charcoal)" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: stat.up ? '#2ecc71' : 'var(--accent-oxblood)', fontWeight: 700 }}>
                  {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {stat.change}
                </div>
              </div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.5, fontWeight: 700, letterSpacing: '0.5px', marginBottom: '4px' }}>{stat.title}</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
        <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: 'var(--radius-strong)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '24px' }}>Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center', paddingBottom: '20px', borderBottom: i < 4 ? '1px solid #f5f5f5' : 'none' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-oxblood)' }}></div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>Conflict check cleared for "Project Titan"</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>2 hours ago by System</div>
                </div>
                <button style={{ fontSize: '0.75rem', color: 'var(--accent-charcoal)', fontWeight: 700 }}>VIEW</button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: 'var(--radius-strong)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '24px' }}>Lead Partner Distribution</h3>
          <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingBottom: '20px' }}>
            {[60, 85, 45, 90].map((h, i) => (
              <div key={i} style={{ width: '30px', backgroundColor: i === 1 ? 'var(--accent-oxblood)' : 'var(--accent-charcoal)', height: `${h}%`, borderRadius: '2px 2px 0 0' }}></div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.7rem', opacity: 0.5, fontWeight: 700 }}>
            <span>AS</span><span>EV</span><span>JR</span><span>MW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
