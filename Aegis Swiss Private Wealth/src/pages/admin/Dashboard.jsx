import { Activity, ShieldAlert, BarChart3, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
       
       {/* High Level KPIs */}
       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          
          <div className="glass-panel-dark" style={{ 
             padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
             borderLeft: '2px solid var(--accent-bronze)', background: 'var(--bg-obsidian-light)'
          }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-slate)' }}>Real-Time AUM</span>
                <BarChart3 size={16} color="var(--accent-bronze)" />
             </div>
             <div style={{ fontSize: '2.5rem', color: 'var(--text-pearl)', fontFamily: 'var(--font-serif)' }}>
                $14.28B
             </div>
             <div style={{ fontSize: '0.875rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <TrendingUp size={14} /> +$125M <span style={{ color: 'var(--text-slate)', fontSize: '0.75rem' }}>Net flows YTD</span>
             </div>
          </div>

          <div className="glass-panel-dark" style={{ 
             padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
             borderLeft: '2px solid var(--text-pearl)', background: 'var(--bg-obsidian-light)'
          }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-slate)' }}>Pending Liquidity</span>
                <Activity size={16} color="var(--text-pearl)" />
             </div>
             <div style={{ fontSize: '2.5rem', color: 'var(--text-pearl)', fontFamily: 'var(--font-serif)' }}>
                3
             </div>
             <div style={{ fontSize: '0.875rem', color: 'var(--text-slate)' }}>
                Active secondary events in motion.
             </div>
          </div>

          <div className="glass-panel-dark" style={{ 
             padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
             borderLeft: '2px solid var(--accent-emerald)', background: 'rgba(0,192,127,0.02)'
          }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-slate)' }}>Global Market Threats</span>
                <ShieldAlert size={16} color="var(--accent-emerald)" />
             </div>
             <div style={{ fontSize: '2.5rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-serif)' }}>
                Low
             </div>
             <div style={{ fontSize: '0.875rem', color: 'var(--text-slate)' }}>
                All sovereign risk parameters within normal range.
             </div>
          </div>

       </div>

       {/* Bloomberg Terminal mock data visualization */}
       <div className="glass-panel-dark" style={{ padding: '2rem', background: 'var(--bg-obsidian-light)', border: '1px solid var(--border-metal)' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-pearl)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <Activity size={16} color="var(--accent-bronze)" /> Arb Spread Overview
          </h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', height: '300px', gap: '2px', borderBottom: '1px solid var(--border-metal)', paddingBottom: '1rem' }}>
             {Array.from({length: 40}).map((_, i) => {
                const height = 20 + Math.random() * 80;
                const isDown = Math.random() > 0.7;
                return (
                   <div key={i} style={{ 
                      flex: 1, height: \`\${height}%\`, 
                      background: isDown ? 'rgba(255,50,50,0.4)' : 'var(--accent-emerald)',
                      opacity: 0.8, transition: 'height 0.5s ease',
                      borderTop: isDown ? 'none' : '1px solid #fff'
                   }}></div>
                );
             })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-slate)', fontFamily: 'monospace' }}>
             <span>-48h</span>
             <span>-24h</span>
             <span>LIVE</span>
          </div>
       </div>

    </div>
  );
};

export default Dashboard;
