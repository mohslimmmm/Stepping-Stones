import { UploadCloud, ShieldCheck, AlertCircle, FileLock2 } from 'lucide-react';
import { useState } from 'react';

const ReportForm = () => {
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
    }, 3000); // 3 second malware scan simulation
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
       
       <div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-pearl)', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Secure Document Portal</h2>
          <p style={{ color: 'var(--text-slate)', fontSize: '0.875rem' }}>All uploaded artifacts undergo heuristic threat scanning and AES-256 encryption.</p>
       </div>

       <div className="glass-panel-dark" style={{ 
          padding: '2rem', border: '1px solid var(--border-metal)',
          background: 'var(--bg-obsidian-light)', display: 'flex', flexDirection: 'column', gap: '2rem'
       }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
             <div>
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-slate)', marginBottom: '0.5rem' }}>Client Target Hash</label>
                <input type="text" className="brutalist-input" placeholder="e.g. XJ-993-ALPHA" style={{ background: 'var(--bg-obsidian)', padding: '0.75rem 1rem', border: '1px solid var(--border-metal)' }} />
             </div>
             <div>
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-slate)', marginBottom: '0.5rem' }}>Document Type</label>
                <select className="brutalist-input" style={{ background: 'var(--bg-obsidian)', padding: '0.75rem 1rem', border: '1px solid var(--border-metal)', color: 'var(--text-pearl)' }}>
                   <option>Quarterly Performance Review</option>
                   <option>KYC Renewals</option>
                   <option>Trust Formation Documents</option>
                   <option>Tax Yield Statements</option>
                </select>
             </div>
          </div>

          <div>
             <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-slate)', marginBottom: '1rem' }}>Secure Upload Zone</label>
             
             <div 
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                style={{ 
                   height: '250px', border: '1px dashed var(--text-slate)', 
                   display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem',
                   background: scanning ? 'rgba(0,192,127,0.05)' : 'var(--bg-obsidian)',
                   position: 'relative', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s'
                }}
             >
                {/* Scanner Line */}
                {scanning && (
                   <div style={{
                      position: 'absolute', left: 0, width: '100%', height: '2px',
                      background: 'var(--accent-emerald)', boxShadow: '0 0 10px var(--accent-emerald)',
                      animation: 'scan 2s linear infinite'
                   }}></div>
                )}
                
                <style dangerouslySetInnerHTML={{__html: `
                   @keyframes scan { 0% { top: 0; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
                `}} />

                {scanning ? (
                   <>
                      <ShieldCheck size={48} style={{ color: 'var(--accent-emerald)' }} className="animate-pulse" />
                      <p style={{ color: 'var(--accent-emerald)', fontFamily: 'monospace', letterSpacing: '0.1em' }}>HEURISTIC MALWARE SCAN IN PROGRESS...</p>
                   </>
                ) : scanned ? (
                   <>
                      <FileLock2 size={48} style={{ color: 'var(--accent-bronze)' }} />
                      <p style={{ color: 'var(--text-pearl)' }}>Document.pdf</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)', fontSize: '0.75rem' }}>
                         <CheckCircle2 size={14} /> THREATS NOT DETECTED
                      </div>
                   </>
                ) : (
                   <>
                      <UploadCloud size={48} style={{ color: 'var(--text-slate)' }} />
                      <p style={{ color: 'var(--text-slate)', fontSize: '0.875rem' }}>Drag & Drop encrypted volume here</p>
                      <span style={{ fontSize: '0.75rem', color: 'var(--border-metal)', letterSpacing: '0.05em' }}>MAX SIZE: 100MB</span>
                   </>
                )}
             </div>
          </div>

          <button className="btn-primary" disabled={scanning} style={{ alignSelf: 'flex-start', opacity: scanning ? 0.5 : 1 }}>
             <ShieldCheck size={16} /> Assign to Vault
          </button>
       </div>

    </div>
  );
};

const CheckCircle2 = ({ size }) => (
   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

export default ReportForm;
