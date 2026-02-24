const Insights = () => {
  const articles = [
    {
      title: "The Fragmentation of Globalization: Hedging Sovereign Risk",
      category: "Global Macroeconomic Outlook",
      date: "Q3 2026",
      readTime: "12 Min Read",
      excerpt: "As multipolar trade corridors calcify, traditional 60/40 correlations face structural breakdown. Aegis examines jurisdictional reallocation strategies."
    },
    {
      title: "Private Credit as the New Sovereign Yield",
      category: "Alternative Fixed Income",
      date: "Q2 2026",
      readTime: "8 Min Read",
      excerpt: "Bank disintermediation continues accelerating. Direct lending presents the only viable risk-adjusted yield for generational capital."
    },
    {
      title: "Digital scarcity vs. The M2 Money Supply",
      category: "Quantitative Hard Assets",
      date: "Q1 2026",
      readTime: "15 Min Read",
      excerpt: "Evaluating the mathematical necessity of cryptographic bearer assets within trust and foundation wrappers."
    }
  ];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }} className="animate-fade-in">
           <span style={{ color: 'var(--accent-bronze)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>The Vault</span>
           <h1 style={{ fontSize: '4rem', marginTop: '1rem', fontWeight: 500 }}>Editorial Intelligence.</h1>
           <p style={{ color: 'var(--text-slate)', fontSize: '1.125rem', marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto 0' }}>
             Unfiltered, quantitative perspectives on macroscopic shifts. Reserved for clients of Aegis.
           </p>
        </div>

        {/* Featured Article layout */}
        <div className="animate-fade-in delay-100" style={{ 
          marginBottom: '6rem', 
          borderBottom: '1px solid var(--border-metal)',
          paddingBottom: '4rem'
        }}>
           <div style={{ 
             width: '100%', height: '400px', background: 'var(--bg-obsidian-light)', 
             marginBottom: '3rem', position: 'relative', overflow: 'hidden',
             display: 'flex', alignItems: 'center', justifyContent: 'center'
           }}>
              {/* Mock Moody Photography */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(45deg, rgba(7,30,61,0.2) 0%, rgba(13,14,18,0.8) 100%)',
                zIndex: 1
              }}></div>
              <div style={{
                position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%',
                background: 'radial-gradient(circle, var(--text-slate) 0%, transparent 60%)',
                opacity: 0.05, filter: 'blur(10px)'
              }}></div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '10rem', color: 'rgba(255,255,255,0.02)' }}>A</span>
           </div>

           <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end', justifyContent: 'space-between' }}>
             <div style={{ maxWidth: '600px' }}>
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-bronze)' }}>
                   <span>{articles[0].category}</span>
                   <span style={{ color: 'var(--text-slate)' }}>{articles[0].date}</span>
                </div>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--text-pearl)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                   {articles[0].title}
                </h2>
                
                {/* Drop Cap Example */}
                <p style={{ color: 'var(--text-slate)', fontSize: '1.125rem', lineHeight: 1.8 }}>
                   <span style={{ 
                     float: 'left', fontSize: '4.5rem', lineHeight: '0.8', 
                     paddingRight: '0.75rem', paddingBottom: '0.5rem',
                     fontFamily: 'var(--font-serif)', color: 'var(--text-pearl)',
                     fontWeight: 'bold'
                   }}>
                     A
                   </span>
                   s multipolar trade corridors calcify, traditional 60/40 correlations face structural breakdown. Aegis examines jurisdictional reallocation strategies designed to aggressively insulate core operating reserves...
                </p>
             </div>
             <button className="btn-primary" style={{ shrink: 0 }}>Read Dispatch</button>
           </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }} className="animate-fade-in delay-200">
           {articles.slice(1).map((article, idx) => (
             <div key={idx} style={{ 
               padding: '3rem 0', 
               borderBottom: '1px solid var(--border-metal)',
               display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
               transition: 'background 0.3s ease'
             }}
             onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
             onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
             >
                <div style={{ maxWidth: '600px' }}>
                   <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-bronze)' }}>
                      <span>{article.category}</span>
                      <span style={{ color: 'var(--text-slate)' }}>{article.date}</span>
                   </div>
                   <h3 style={{ fontSize: '1.75rem', color: 'var(--text-pearl)', marginBottom: '1rem' }}>{article.title}</h3>
                   <p style={{ color: 'var(--text-slate)', lineHeight: 1.6 }}>{article.excerpt}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                   <span style={{ fontSize: '0.75rem', color: 'var(--text-slate)', letterSpacing: '0.1em' }}>{article.readTime}</span>
                </div>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default Insights;
