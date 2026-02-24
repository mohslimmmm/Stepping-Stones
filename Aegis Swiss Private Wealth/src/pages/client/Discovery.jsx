import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

const Discovery = () => {
  const tabs = [
    { title: "Quantitative Asset Management", desc: "Algorithmic strategies executing deep-market arb spreads, mitigating downside beta.", path: "/services/quantitative" },
    { title: "Global Estate Structuring", desc: "Multi-jurisdictional tax architecture and trust frameworks protecting sovereign assets.", path: "/services/estate-structuring" },
    { title: "Bespoke Portfolio Management", desc: "Tailored exposure mapping and proprietary risk models.", path: "/services/bespoke-portfolio" },
    { title: "Private Market Alternatives", desc: "Direct access to exclusive secondary shares, pre-IPO liquidity, and rare tangible assets.", path: "/services/private-markets" },
    { title: "Impact Philanthropy", desc: "Structured charitable allocation maximizing intergenerational social legacy.", path: "/services/philanthropy" },
  ];

  return (
    <div style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container">
        
        <div style={{ marginBottom: '6rem', maxWidth: '800px' }} className="animate-fade-in">
          <span style={{ color: 'var(--accent-bronze)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Expertise</span>
          <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', fontWeight: 500 }}>
            Precision across <br/>every asset class.
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }} className="discovery-grid animate-fade-in delay-200">
           {tabs.map((tab, idx) => (
             <Link to={tab.path} key={idx} style={{ textDecoration: 'none' }}>
                <div 
                   className="discovery-row"
                   style={{ 
                     display: 'grid', gridTemplateColumns: '1fr 2fr auto', gap: '2rem', alignItems: 'center',
                     padding: '3rem 0', borderBottom: '1px solid var(--border-metal)',
                     transition: 'all 0.5s ease'
                   }}
                >
                   <h3 style={{ fontSize: '1.5rem', color: 'var(--text-pearl)', margin: 0, fontWeight: 400 }}>{tab.title}</h3>
                   <p style={{ color: 'var(--text-slate)', fontSize: '1rem', margin: 0, maxWidth: '500px' }}>{tab.desc}</p>
                   <div className="discovery-arrow" style={{ 
                      width: '40px', height: '40px', borderRadius: '50%',
                      border: '1px solid var(--border-metal)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease'
                   }}>
                      <ArrowRightIcon size={18} color="var(--accent-bronze)" />
                   </div>
                </div>
             </Link>
           ))}
        </div>

        {/* CSS for hover specific rules */}
         <style dangerouslySetInnerHTML={{__html: `
            .discovery-grid:hover .discovery-row {
               opacity: 0.3;
            }
            .discovery-grid .discovery-row:hover {
               opacity: 1;
               transform: translateX(10px);
            }
            .discovery-grid .discovery-row:hover .discovery-arrow {
               background: var(--accent-bronze);
               border-color: var(--accent-bronze);
            }
            .discovery-grid .discovery-row:hover .discovery-arrow svg {
               color: var(--bg-obsidian) !important;
            }
         `}} />

      </div>
    </div>
  );
};

export default Discovery;
