import { BarChart3, TrendingUp, Shield, Activity, Anchor } from 'lucide-react';

const ServiceDetail = () => {
  return (
    <div style={{ paddingBottom: '8rem' }}>
      
      {/* Hero */}
      <div style={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'flex-end', paddingBottom: '4rem' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1,
          background: 'linear-gradient(to bottom, rgba(13,14,18,0) 0%, rgba(13,14,18,1) 100%)',
        }}></div>
        {/* Abstract WebGL Spline Mock via CSS */}
        <div style={{
          position: 'absolute', top: '10%', right: '-10%', width: '80%', height: '120%', zIndex: -2,
          opacity: 0.15, filter: 'blur(30px)',
          background: 'conic-gradient(from 180deg at 50% 50%, #BFA15F 0deg, #00C07F 180deg, transparent 360deg)',
          animation: 'spin 30s linear infinite'
        }}></div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin { 100% { transform: rotate(360deg); } }
          @keyframes pulseGlow { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; filter: drop-shadow(0 0 15px rgba(0,192,127,0.8)); } }
          @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        `}} />

        <div className="container animate-fade-in delay-100">
           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ color: 'var(--accent-bronze)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Expertise</span>
              <div style={{ width: '40px', height: '1px', background: 'var(--border-metal)' }}></div>
              <span style={{ color: 'var(--text-slate)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Bespoke Portfolio</span>
           </div>
           
           <h1 style={{ fontSize: '4.5rem', fontWeight: 500, lineHeight: 1, maxWidth: '800px' }}>
             Algorithmic Precision meets Heritage Assets.
           </h1>
        </div>
      </div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', marginTop: '4rem' }}>
        
        {/* Left Content */}
        <div className="animate-fade-in delay-200">
          <p style={{ fontSize: '1.25rem', color: 'var(--text-pearl)', lineHeight: 1.8, marginBottom: '3rem', fontWeight: 300 }}>
             Aegis constructs highly uncorrelated portfolios by sourcing exclusive private market opportunities and blending them with quantitative liquid strategies. We optimize the Sharpe ratio while actively preserving generational sovereignty through advanced trust structures.
          </p>

          <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-pearl)', borderBottom: '1px solid var(--border-metal)', paddingBottom: '1rem' }}>Methodology</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-bronze)', marginTop: '0.25rem' }}><Anchor size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-pearl)' }}>1. Core Sovereignty Isolation</h4>
                <p style={{ color: 'var(--text-slate)', lineHeight: 1.6 }}>Identifying true baseline beta and structurally isolating it from jurisdiction-specific risk loops via Swiss and Lichtenstein foundation constructs.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-bronze)', marginTop: '0.25rem' }}><Activity size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-pearl)' }}>2. Volatility Arbitrage</h4>
                <p style={{ color: 'var(--text-slate)', lineHeight: 1.6 }}>Systematic options writing over core equities, harvesting premium mechanically to smooth drawdowns dynamically during market shocks.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-bronze)', marginTop: '0.25rem' }}><Shield size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-pearl)' }}>3. Tangible Diversification</h4>
                <p style={{ color: 'var(--text-slate)', lineHeight: 1.6 }}>Direct allocation to tier-one commercial real estate and fine art, held distinctly outside traditional monetary ledgers.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '5rem' }}>
             <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-pearl)' }}>Proprietary Risk Modeling</h3>
             {/* Glowing Mock Chart */}
             <div className="glass-panel" style={{ height: '300px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '2rem', gap: '1rem' }}>
                {[30, 45, 25, 60, 40, 75, 55, 90, 65, 80].map((h, i) => (
                  <div key={i} style={{ 
                     width: '100%', height: \`\${h}%\`, 
                     background: i % 3 === 0 ? 'var(--accent-emerald)' : 'var(--border-metal)',
                     boxShadow: i % 3 === 0 ? '0 0 10px rgba(0,192,127,0.5)' : 'none',
                     animation: 'slideUp 1s ease forwards',
                     animationDelay: \`\${i * 0.1}s\`, opacity: 0,
                     borderRadius: 'var(--radius-sharp)'
                  }}></div>
                ))}
             </div>
          </div>
        </div>

        {/* Right Sidebar - Sticky Widget */}
        <div style={{ position: 'relative' }}>
          <div className="glass-panel animate-fade-in delay-300" style={{ 
             position: 'sticky', top: '8rem', padding: '3rem', 
             display: 'flex', flexDirection: 'column', gap: '2rem'
          }}>
             <h3 style={{ fontSize: '1.5rem', color: 'var(--text-pearl)', margin: 0 }}>Request Private Briefing</h3>
             <p style={{ fontSize: '0.875rem', color: 'var(--text-slate)', lineHeight: 1.6 }}>
               Allocate precisely. Initiate an encrypted consultation with our Managing Partners.
             </p>
             <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-pearl)', fontSize: '0.875rem' }}>
                   <BarChart3 size={16} color="var(--accent-bronze)" /> Complete Data Audit
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-pearl)', fontSize: '0.875rem' }}>
                   <TrendingUp size={16} color="var(--accent-bronze)" /> Custom Exposure Blueprint
                </li>
             </ul>
             <button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Initiate Protocol</button>
             
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
                <Shield size={14} style={{ color: 'var(--accent-emerald)', animation: 'pulseGlow 2s infinite' }} />
                <span style={{ fontSize: '0.65rem', color: 'var(--text-slate)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>End-to-End Encrypted</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;
