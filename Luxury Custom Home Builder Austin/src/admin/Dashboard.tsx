import { motion } from 'framer-motion';
import { HardHat, FileText, UserPlus, TrendingUp } from 'lucide-react';
import AdminLayout from './AdminLayout';

const AdminDashboard = () => {
  const kpis = [
    { label: 'ACTIVE BUILDS', value: '12', icon: <HardHat size={24} />, trend: '+2 this month' },
    { label: 'PRE-CONSTRUCTION', value: '08', icon: <FileText size={24} />, trend: '0 pending permit' },
    { label: 'NEW INQUIRIES', value: '24', icon: <UserPlus size={24} />, trend: '+18% vs last week' },
    { label: 'EST. REVENUE', value: '$84M', icon: <TrendingUp size={24} />, trend: 'on track' },
  ];

  return (
    <AdminLayout>
      <div style={{ marginBottom: '40px' }}>
        <h4 style={{ color: 'var(--accent-copper)', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '8px' }}>OVERVIEW</h4>
        <h2 style={{ fontSize: '1.8rem' }}>DASHBOARD</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '40px' }}>
        {kpis.map((kpi, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            style={{ 
              backgroundColor: 'white', 
              padding: '30px', 
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ color: 'var(--accent-copper)' }}>{kpi.icon}</div>
              <span style={{ fontSize: '0.7rem', opacity: 0.4, fontWeight: '700' }}>LIVE DATA</span>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: '700', letterSpacing: '-1px' }}>{kpi.value}</div>
              <div style={{ fontSize: '0.7rem', fontWeight: '700', opacity: 0.6, letterSpacing: '1px' }}>{kpi.label}</div>
            </div>
            <div style={{ fontSize: '0.7rem', color: kpi.trend.includes('+') ? 'green' : 'inherit', opacity: 0.8 }}>
              {kpi.trend}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grid for more charts/lists */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
        <div style={{ backgroundColor: 'white', padding: '30px' }}>
          <h4 style={{ fontSize: '0.8rem', marginBottom: '30px' }}>RECENT SITE PROGRESS</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             {[1,2,3].map(i => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid #f5f5f5' }}>
                   <div style={{ width: '60px', height: '60px', backgroundColor: '#eee' }}></div>
                   <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>The Westlake Residence</div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Milestone: Concrete Pour for infinity pool sub-structure.</div>
                   </div>
                   <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>Just now</div>
                </div>
             ))}
          </div>
        </div>
        <div style={{ backgroundColor: 'white', padding: '30px' }}>
          <h4 style={{ fontSize: '0.8rem', marginBottom: '30px' }}>PENDING PERMITS</h4>
          {/* List placeholder */}
          <div style={{ opacity: 0.3, textAlign: 'center', padding: '60px 0' }}>
             <FileText size={40} style={{ marginBottom: '20px' }} />
             <div>NO CRITICAL ALERTS</div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
