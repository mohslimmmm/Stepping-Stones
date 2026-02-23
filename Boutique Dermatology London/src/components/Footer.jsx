import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-slate-dark text-ivory py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-header text-xl mb-4 text-ivory tracking-widest">HARLEY STREET<br/><span className="text-sm opacity-80 uppercase font-body text-ivory">Skin Bespoke</span></h3>
          <p className="text-sm opacity-80 font-body">Classic British elegance meeting modern science.</p>
        </div>
        
        <div>
          <h4 className="font-body tracking-widest text-sm uppercase mb-4 text-blush">Contact</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li className="flex items-center gap-2"><MapPin size={16} /> 10 Harley Street, London</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +44 20 7123 4567</li>
            <li className="flex items-center gap-2"><Mail size={16} /> concierge@harleystreetskin.co.uk</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-body tracking-widest text-sm uppercase mb-4 text-blush">Menu</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/discovery" className="hover:text-blush transition-colors">Treatments</Link></li>
            <li><Link to="/journal" className="hover:text-blush transition-colors">The Skin Journal</Link></li>
            <li><Link to="/about" className="hover:text-blush transition-colors">Clinicians</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-body tracking-widest text-sm uppercase mb-4 text-blush">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="opacity-80 hover:text-blush hover:opacity-100 transition-colors"><Instagram size={20} /></a>
          </div>
          <div className="mt-6">
            <p className="text-xs opacity-60">© {new Date().getFullYear()} Harley Street Skin Bespoke.</p>
            <p className="text-xs opacity-60 mt-1">GMC Registered Specialists.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
