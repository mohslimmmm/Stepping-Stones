import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Fingerprint, ArrowRight } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-espresso flex items-center justify-center relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-alabaster to-transparent mix-blend-overlay"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-espresso p-12 border border-alabaster/10 relative z-10 shadow-2xl"
      >
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6 text-olive border border-olive/30 w-16 h-16 rounded-sm mx-auto items-center">
            <Fingerprint size={28} />
          </div>
          <h1 className="text-3xl font-serif text-alabaster tracking-wide">Broker Portal</h1>
          <p className="text-xs uppercase tracking-[0.2em] text-alabaster/50 mt-3 font-sans">Authorized Access Only</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-alabaster/60 font-semibold">Broker ID</label>
            <div className="relative">
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-alabaster/20 py-3 outline-none focus:border-olive transition-colors text-alabaster tracking-widest text-center placeholder-alabaster/20" 
                placeholder="SYME-B-1049" 
                required 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-alabaster/60 font-semibold">Security Credential</label>
            <div className="relative flex items-center">
              <input 
                type="password" 
                className="w-full bg-transparent border-b border-alabaster/20 py-3 outline-none focus:border-olive transition-colors text-alabaster tracking-[0.5em] text-center placeholder-alabaster/20" 
                placeholder="••••••••••" 
                required 
              />
              <Lock size={14} className="absolute right-2 text-alabaster/30" />
            </div>
          </div>

          <div className="pt-8">
            <button 
              type="submit" 
              className="w-full bg-alabaster text-espresso py-4 flex justify-center items-center space-x-2 hover:bg-olive hover:text-alabaster transition-all duration-300 group rounded-sm"
            >
              <span className="font-sans text-xs tracking-widest uppercase font-bold">Authenticate</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
        
        <div className="text-center mt-10 border-t border-alabaster/10 pt-6">
          <p className="text-[10px] text-alabaster/30 tracking-widest uppercase">Sol y Mar Elite Brokers</p>
        </div>

      </motion.div>
    </div>
  );
};

export default Login;
