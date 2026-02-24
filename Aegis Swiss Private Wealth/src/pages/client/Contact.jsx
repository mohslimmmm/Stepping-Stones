import { Fingerprint, Lock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [authing, setAuthing] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthing(true);
    
    // Simulate biometric/PGP submission delay
    setTimeout(() => {
      setAuthing(false);
      setSubmitted(true);
      
      // Simulate mapping to Admin Dashboard for demonstration
      setTimeout(() => {
         navigate('/admin');
      }, 3000);
    }, 2500);
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ width: '100%' }}>
         
         <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '4rem', textAlign: 'center' }} className="animate-fade-in">
               <ShieldIcon />
               <h1 style={{ fontSize: '3rem', fontWeight: 400, marginTop: '2rem' }}>Initiate Contact.</h1>
               <p style={{ color: 'var(--text-slate)', marginTop: '1rem' }}>
                 Discretion is absolute. Please provide your alias and an encrypted coordination method.
               </p>
            </div>

            {submitted ? (
               <div className="glass-panel animate-fade-in" style={{ padding: '4rem', textAlign: 'center', borderColor: 'var(--accent-emerald)', boxShadow: '0 0 30px rgba(0,192,127,0.1)' }}>
                  <CheckCircle2 size={48} style={{ color: 'var(--accent-emerald)', margin: '0 auto 2rem' }} />
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-emerald)', marginBottom: '1rem' }}>Sovereign Inquiry Confirmed</h3>
                  <p style={{ color: 'var(--text-pearl)' }}>End-to-end encryption established. Redirecting to secure perimeter...</p>
               </div>
            ) : (
               <form onSubmit={handleSubmit} className="animate-fade-in delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '3rem', background: 'var(--bg-obsidian-light)', border: '1px solid var(--border-metal)' }}>
                     <div>
                        <label style={{ display: 'block', color: 'var(--text-slate)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Allocated Alias</label>
                        <input type="text" className="brutalist-input" placeholder="Enter assigned pseudonym" required disabled={authing} />
                     </div>
                     <div>
                        <label style={{ display: 'block', color: 'var(--text-slate)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Encrypted Routing (Signal / PGP)</label>
                        <input type="text" className="brutalist-input" placeholder="e.g. signal number or PGP fingerprint" required disabled={authing} />
                     </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                     <div style={{ fontSize: '0.65rem', color: 'var(--text-slate)', fontFamily: 'monospace', letterSpacing: '0.1em', wordBreak: 'break-all', maxWidth: '300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>
                           <Lock size={12} /> PUBLIC KEY IDENTIFIER
                        </div>
                        -----BEGIN PGP PUBLIC KEY BLOCK-----<br/>
                        xqENBGZ/vMwBCAC... (TRUNCATED FOR DISPLAY)<br/>
                        -----END PGP PUBLIC KEY BLOCK-----
                     </div>
                     
                     <div style={{ position: 'relative' }}>
                        {authing ? (
                           <div style={{ 
                              width: '60px', height: '60px', borderRadius: '50%',
                              border: '1px solid var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                              boxShadow: '0 0 20px rgba(0,192,127,0.4)', background: 'rgba(0,192,127,0.1)'
                           }}>
                              <Fingerprint size={28} style={{ color: 'var(--accent-emerald)', animation: 'pulse 1s infinite' }} />
                              <style dangerouslySetInnerHTML={{__html: `
                                 @keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; transform: scale(1.1); } 100% { opacity: 0.5; } }
                              `}} />
                           </div>
                        ) : (
                           <button type="submit" style={{ 
                              background: 'none', border: '1px solid var(--border-metal)',
                              width: '60px', height: '60px', borderRadius: '50%',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              cursor: 'pointer', transition: 'all 0.3s ease',
                              color: 'var(--accent-bronze)'
                           }}
                           onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent-bronze)'; e.currentTarget.style.background = 'var(--accent-bronze)'; e.currentTarget.style.color = '#000'; }}
                           onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-metal)'; e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--accent-bronze)'; }}
                           >
                              <Fingerprint size={28} />
                           </button>
                        )}
                     </div>
                  </div>

               </form>
            )}

         </div>
      </div>
    </div>
  );
};

const ShieldIcon = () => (
   <div style={{ width: '60px', height: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-metal)' }}>
      <Lock size={24} color="var(--text-pearl)" />
   </div>
);

export default Contact;
