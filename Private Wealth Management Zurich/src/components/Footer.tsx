import { Shield, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-silver/30 pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-deep-indigo" strokeWidth={1.5} />
              <span className="text-xl font-medium tracking-widest uppercase text-deep-indigo" style={{ fontFamily: 'var(--header-font)' }}>
                Aegis Swiss
              </span>
            </div>
            <p className="text-sm text-light-slate leading-relaxed mb-6 opacity-80">
              Discreet, secure, and personalized wealth management solutions for the modern global citizen. Founded in the heart of Zurich.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-silver">Our Locations</h4>
            <ul className="space-y-4 text-sm text-dark-slate">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-silver shrink-0 mt-0.5" />
                <span>Bahnhofstrasse 1, 8001 Zurich, Switzerland</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-silver shrink-0 mt-0.5" />
                <span>Rue du Rhône 8, 1204 Geneva, Switzerland</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-silver">Legal & Trust</h4>
            <ul className="space-y-4 text-sm text-dark-slate">
              <li><Link to="/trust" className="hover:text-deep-indigo">FINMA Regulation</Link></li>
              <li><Link to="/trust" className="hover:text-deep-indigo">Banking Security</Link></li>
              <li><Link to="#" className="hover:text-deep-indigo">Data Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-deep-indigo">ESG Commitment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-silver">Direct Inquiry</h4>
            <ul className="space-y-4 text-sm text-dark-slate">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-silver" />
                <span>+41 44 211 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-silver" />
                <span>contact@aegis-swiss.ch</span>
              </li>
              <li className="pt-4">
                <Link to="/contact" className="text-deep-indigo font-medium hover:underline flex items-center gap-2">
                  Secure Communication Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-silver/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-widest uppercase text-silver">
            © 2024 Aegis Swiss Private Wealth Management Ltd.
          </p>
          <div className="flex items-center gap-8">
             <Link to="/admin" className="text-[10px] tracking-widest uppercase text-silver hover:text-deep-indigo">Advisor Portal</Link>
             <div className="h-4 w-[1px] bg-silver/30"></div>
             <div className="flex items-center gap-1">
                <Globe size={12} className="text-silver" />
                <span className="text-[10px] tracking-widest uppercase text-silver">EN / DE / FR</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
