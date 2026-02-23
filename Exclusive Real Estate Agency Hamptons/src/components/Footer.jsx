import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-background pt-16 pb-8 border-t border-accentGreen/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 hover:text-accentGreen transition-colors">
              <Anchor className="h-6 w-6" />
              <span className="font-heading text-xl font-bold">East End Exclusive</span>
            </Link>
            <p className="font-body text-sm text-background/70 mb-6 leading-relaxed">
              Curating the finest waterfront estates, historic compounds, and modern architectural marvels in the Hamptons since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-accentGreen"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-background/70 hover:text-accentGreen"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-background/70 hover:text-accentGreen"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg mb-6 font-bold tracking-wide text-accentGreen">Destinations</h4>
            <ul className="space-y-4 font-body text-sm text-background/80">
              <li><Link to="/discovery?tab=southampton" className="hover:text-white transition-colors">Southampton</Link></li>
              <li><Link to="/discovery?tab=easthampton" className="hover:text-white transition-colors">East Hampton</Link></li>
              <li><Link to="/discovery?tab=montauk" className="hover:text-white transition-colors">Montauk</Link></li>
              <li><Link to="/discovery?tab=sagharbor" className="hover:text-white transition-colors">Sag Harbor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-6 font-bold tracking-wide text-accentGreen">Agency</h4>
            <ul className="space-y-4 font-body text-sm text-background/80">
              <li><Link to="/about" className="hover:text-white transition-colors">Our History</Link></li>
              <li><Link to="/lifestyle" className="hover:text-white transition-colors">Hamptons Lifestyle</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Broker</Link></li>
              <li><Link to="/admin/login" className="hover:text-white transition-colors">Broker Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-6 font-bold tracking-wide text-accentGreen">Headquarters</h4>
            <address className="not-italic font-body text-sm text-background/80 space-y-2">
              <p>66 Newtown Lane</p>
              <p>East Hampton, NY 11937</p>
              <p className="mt-4"><a href="tel:+16315550198" className="hover:text-white transition-colors">+1 (631) 555-0198</a></p>
              <p><a href="mailto:inquiries@eastend.com" className="hover:text-white transition-colors">inquiries@eastend.com</a></p>
            </address>
          </div>

        </div>
        
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center font-body text-xs text-background/50">
          <p>&copy; {new Date().getFullYear()} East End Exclusive Estates. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
