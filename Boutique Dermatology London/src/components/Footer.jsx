import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const location = useLocation();

  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-slate-dark text-ivory py-24">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="font-header text-2xl mb-4 text-ivory tracking-widest">
              HARLEY STREET<br/>
              <span className="text-xs tracking-widest opacity-80 uppercase font-body text-blush mt-2 block">Skin Bespoke</span>
            </h3>
            <p className="text-sm opacity-80 font-body leading-relaxed mt-6">Classic British elegance meeting modern science.</p>
          </motion.div>
        </div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <h4 className="font-body tracking-widest text-xs uppercase mb-6 text-blush opacity-80">Contact</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><MapPin size={16} strokeWidth={1.5} /> 10 Harley Street, London</li>
            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><Phone size={16} strokeWidth={1.5} /> +44 20 7123 4567</li>
            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><Mail size={16} strokeWidth={1.5} /> concierge@harleystreetskin.co.uk</li>
          </ul>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <h4 className="font-body tracking-widest text-xs uppercase mb-6 text-blush opacity-80">Menu</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><Link to="/discovery" className="hover:text-white transition-colors hover:underline underline-offset-4">Treatments</Link></li>
            <li><Link to="/journal" className="hover:text-white transition-colors hover:underline underline-offset-4">The Skin Journal</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors hover:underline underline-offset-4">Clinicians</Link></li>
          </ul>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <h4 className="font-body tracking-widest text-xs uppercase mb-6 text-blush opacity-80">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="opacity-80 hover:text-blush hover:opacity-100 transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-grey/30">
            <p className="text-xs opacity-60">© {new Date().getFullYear()} Harley Street Skin Bespoke.</p>
            <p className="text-xs opacity-60 mt-2">GMC Registered Specialists.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
