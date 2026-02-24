import { Shield, Plus } from 'lucide-react';
import { useState } from 'react';

const TrustAbout = () => {
  const [activeYear, setActiveYear] = useState('1892');

  const timeline = {
    '1892': 'Founding of the original private bank in Zurich, serving elite industrial families.',
    '1945': 'Establishing the first discrete cross-border trust framework post-WWII.',
    '1980': 'Integration of early quantitative algorithmic modeling into alternative asset allocation.',
    '2015': 'Re-incorporation as Aegis Swiss Private Wealth. Transition to multi-family office structure.',
    '2026': 'Launch of the proprietary encrypted client protocol.'
  };

  const directors = [
    { name: "Heinrich von Klaus", role: "Chairman of the Board", bio: "Former SNB Governor" },
    { name: "Evelyne Montbatten", role: "Head of Private Markets", bio: "Lead Partner, KKR Alternatives" },
    { name: "Dr. Aris Thorne", role: "Chief Quantitative Officer", bio: "CERN Ph.D. Applied Mathematics" }
  ];

  return (
    <div style={{ paddingTop: '6rem', paddingBottom: '8rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Watermark */}
      <div style={{
        position: 'absolute', top: '10%', right: '-15%',
        opacity: 0.02, color: 'var(--text-pearl)', pointerEvents: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
         <Plus size={800} strokeWidth={0.5} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
         
         <div style={{ maxWidth: '800px', marginBottom: '8rem' }} className="animate-fade-in">
            <span style={{ color: 'var(--accent-bronze)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Heritage</span>
            <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', fontWeight: 500 }}>
               Architects of <br/>Generational Stability.
            </h1>
         </div>

         {/* Regulation Monochome */}
         <div className="glass-panel animate-fade-in delay-100" style={{ 
            padding: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: '8rem', borderLeft: '4px solid var(--accent-emerald)'
         }}>
            <div>
               <h3 style={{ fontSize: '1.5rem', color: 'var(--text-pearl)', marginBottom: '0.5rem' }}>Strictly Regulated</h3>
               <p style={{ color: 'var(--text-slate)', maxWidth: '400px', lineHeight: 1.6 }}>
                  Aegis operates under the direct supervision of the Swiss Financial Market Supervisory Authority.
               </p>
            </div>
            <div style={{ display: 'flex', gap: '4rem', filter: 'grayscale(100%)', opacity: 0.6 }}>
               {/* Mock Monochome Badges */}
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <Shield size={40} style={{ color: 'var(--text-pearl)' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>FINMA</span>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--text-pearl)', border: '2px solid var(--text-pearl)', padding: '0.25rem 0.5rem', lineHeight: 1 }}>SBA</div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>Swiss Bankers</span>
               </div>
            </div>
         </div>

         {/* Interactive Timeline */}
         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '8rem' }} className="animate-fade-in delay-200">
            <div>
               <h2 style={{ fontSize: '2rem', color: 'var(--text-pearl)', marginBottom: '3rem' }}>The Arc of Discretion</h2>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {Object.keys(timeline).map((year) => (
                     <button 
                        key={year}
                        onClick={() => setActiveYear(year)}
                        style={{
                           background: 'none', border: 'none', outline: 'none',
                           textAlign: 'left', padding: '1rem 0',
                           fontSize: '2rem', fontFamily: 'var(--font-serif)',
                           color: activeYear === year ? 'var(--accent-bronze)' : 'var(--text-slate)',
                           opacity: activeYear === year ? 1 : 0.5,
                           transition: 'all 0.3s ease',
                           borderBottom: '1px solid var(--border-metal)',
                           cursor: 'pointer'
                        }}
                     >
                        {year}
                     </button>
                  ))}
               </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', padding: '4rem' }}>
               <div style={{ borderLeft: '1px solid var(--accent-bronze)', paddingLeft: '3rem' }}>
                  <h3 style={{ fontSize: '4rem', color: 'var(--accent-bronze)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>{activeYear}</h3>
                  <p style={{ fontSize: '1.25rem', color: 'var(--text-pearl)', lineHeight: 1.8, minHeight: '120px' }}>
                     {timeline[activeYear]}
                  </p>
               </div>
            </div>
         </div>

         {/* Directors */}
         <div className="animate-fade-in delay-300">
            <h2 style={{ fontSize: '2rem', color: 'var(--text-pearl)', marginBottom: '4rem' }}>Board of Directors</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
               {directors.map((dir, idx) => (
                  <div key={idx} style={{ border: '1px solid var(--border-metal)', padding: '2rem', background: 'var(--bg-obsidian-light)' }}>
                     {/* Mock High Contrast B&W Image via CSS */}
                     <div style={{ 
                        width: '100%', height: '300px', backgroundColor: '#000', marginBottom: '2rem',
                        filter: 'contrast(150%) grayscale(100%)',
                        backgroundImage: 'radial-gradient(circle at center, #333 0%, #000 100%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                     }}>
                        <span style={{ color: 'var(--text-slate)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>[SECURE PORTRAIT]</span>
                     </div>
                     <h3 style={{ fontSize: '1.5rem', color: 'var(--text-pearl)', marginBottom: '0.25rem' }}>{dir.name}</h3>
                     <p style={{ color: 'var(--accent-bronze)', fontSize: '0.875rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{dir.role}</p>
                     <p style={{ color: 'var(--text-slate)', fontSize: '0.875rem' }}>{dir.bio}</p>
                  </div>
               ))}
            </div>
         </div>

      </div>
    </div>
  );
};

export default TrustAbout;
