import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-dark-slate text-warm-white py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-header text-warm-white leading-none block mb-4">
            Sol y Mar<br/><span className="text-sm tracking-widest text-gold uppercase font-body font-bold">Elite Brokers</span>
          </Link>
          <p className="text-sm opacity-80 font-body mb-6">Curating Marbella's most exclusive properties for an international clientele.</p>
          <div className="flex gap-4">
            <a href="#" className="opacity-80 hover:text-gold hover:opacity-100 transition-colors bg-white/10 p-2 rounded-full"><Instagram size={18} /></a>
            <a href="#" className="opacity-80 hover:text-gold hover:opacity-100 transition-colors bg-white/10 p-2 rounded-full"><Facebook size={18} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-header text-xl mb-4 text-white">Collections</h4>
          <ul className="space-y-2 text-sm opacity-80 font-body">
            <li><Link to="/discovery" className="hover:text-gold transition-colors">The Golden Mile</Link></li>
            <li><Link to="/discovery" className="hover:text-gold transition-colors">Nueva Andalucía</Link></li>
            <li><Link to="/discovery" className="hover:text-gold transition-colors">Frontline Beach</Link></li>
            <li><Link to="/discovery" className="hover:text-gold transition-colors">Golf Valley</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-header text-xl mb-4 text-white">Company</h4>
          <ul className="space-y-2 text-sm opacity-80 font-body">
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">The Team</Link></li>
            <li><Link to="/lifestyle" className="hover:text-gold transition-colors">Marbella Lifestyle</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-header text-xl mb-4 text-white">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80 font-body">
            <li className="flex items-start gap-3"><MapPin size={18} className="text-terracotta mt-1 flex-shrink-0" /> Bulevar Príncipe Alfonso von Hohenlohe, s/n, 29602 Marbella, Málaga</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-terracotta flex-shrink-0" /> +34 952 000 000</li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-terracotta flex-shrink-0" /> info@solymar.com</li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs opacity-60 font-body">© {new Date().getFullYear()} Sol y Mar Elite Brokers. All rights reserved.</p>
        <div className="flex gap-4 text-xs opacity-60 font-body">
          <Link to="#" className="hover:text-white">Privacy Policy</Link>
          <Link to="#" className="hover:text-white">Legal Notice</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
