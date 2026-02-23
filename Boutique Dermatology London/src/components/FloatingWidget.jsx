import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWidget = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-8 right-8 z-40"
    >
      <Link 
        to="/contact" 
        className="flex items-center gap-4 bg-slate-dark text-ivory px-8 py-5 shadow-[0_20px_40px_rgba(26,36,47,0.15)] hover:bg-soft-blush hover:text-slate-dark transition-all duration-500 group"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full bg-ivory group-hover:bg-slate-dark opacity-100"></span>
          <span className="relative inline-flex h-2 w-2 bg-ivory group-hover:bg-slate-dark"></span>
        </span>
        <Calendar size={18} strokeWidth={1.5} />
        <span className="text-xs tracking-[0.15em] uppercase font-medium">Book Assessment</span>
      </Link>
    </motion.div>
  );
};

export default FloatingWidget;
