import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const FloatingWidget = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40 fade-in">
      <Link 
        to="/contact" 
        className="flex items-center gap-3 bg-slate-dark text-ivory px-6 py-4 shadow-2xl hover:bg-blush hover:text-slate-dark transition-all duration-300 group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full bg-ivory group-hover:bg-slate opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 bg-ivory group-hover:bg-slate-dark"></span>
        </span>
        <Calendar size={18} />
        <span className="text-sm tracking-widest uppercase font-semibold">Book Skin Assessment</span>
      </Link>
    </div>
  );
};

export default FloatingWidget;
