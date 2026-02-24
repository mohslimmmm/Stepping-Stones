import { Link, useNavigate } from 'react-router-dom';
import { Shield, Fingerprint } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [authenticating, setAuthenticating] = useState(false);

  const handleSecureLogin = () => {
    setAuthenticating(true);
    setTimeout(() => {
      navigate('/admin');
    }, 2000);
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      
      {/* 3D Abstract Topographic Mesh Background Simulation */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1,
        background: 'radial-gradient(circle at 50% 50%, rgba(13, 14, 18, 0.4) 0%, rgba(13, 14, 18, 1) 100%)',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', width: '200%', height: '200%', top: '-50%', left: '-50%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
          opacity: 0.15,
          animation: 'drift 60s linear infinite',
        }}></div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drift {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <div style={{ marginBottom: '2rem' }} className="animate-fade-in delay-100">
          <Shield size={48} style={{ color: 'var(--accent-emerald)', opacity: 0.8, filter: 'drop-shadow(0 0 10px rgba(0,192,127,0.3))' }} />
        </div>

        <h1 style={{ 
          fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 400, 
          letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.5rem',
          textShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }} className="animate-fade-in delay-200">
          Generational Wealth,<br/><span style={{ color: 'var(--accent-bronze)' }}>Engineered.</span>
        </h1>
        
        <p style={{ 
          fontSize: '1.125rem', color: 'var(--text-slate)', maxWidth: '600px', 
          margin: '0 auto 4rem', letterSpacing: '0.02em', lineHeight: 1.8
        }} className="animate-fade-in delay-300">
          Aegis Swiss Private Wealth operates at the nexus of heritage and highly-secure quantitative structuring. Invite-only access for elite global families.
        </p>

        <div className="animate-fade-in delay-100" style={{ position: 'relative' }}>
          {authenticating ? (
            <div className="glass-panel" style={{ 
               padding: '2rem 4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
               border: '1px solid var(--accent-emerald)', boxShadow: '0 0 20px rgba(0,192,127,0.2)',
               position: 'relative', overflow: 'hidden'
            }}>
               <div style={{ position: 'absolute', left: 0, width: '100%', height: '2px', background: 'var(--accent-emerald)', boxShadow: '0 0 10px var(--accent-emerald)', animation: 'scan 2s linear infinite' }}></div>
               <Fingerprint size={40} style={{ color: 'var(--accent-emerald)' }} />
               <span style={{ fontFamily: 'monospace', color: 'var(--accent-emerald)', letterSpacing: '0.1em' }}>BIOMETRIC AUTHENTICATION...</span>
            </div>
          ) : (
            <button onClick={handleSecureLogin} className="btn-primary" style={{ padding: '1.5rem 3rem', fontSize: '1rem', border: '1px solid var(--accent-emerald)', color: 'var(--accent-emerald)' }}>
              Secure Client Portal
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default Home;
