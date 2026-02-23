import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-primary text-background pt-24 pb-12 border-t border-accentGreen/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20"
        >
          
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="col-span-1 md:col-span-5 pr-0 md:pr-16">
            <Link to="/" className="flex items-center gap-3 mb-8 hover:text-accentGreen transition-colors">
              <Anchor className="h-6 w-6" strokeWidth={1.5} />
              <span className="font-heading text-2xl tracking-wide">East End Exclusive</span>
            </Link>
            <p className="font-body text-base text-background/70 mb-8 leading-relaxed">
              Curating the finest waterfront estates, historic compounds, and modern architectural marvels in the Hamptons since 1998.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-background/50 hover:text-accentGreen transition-colors"><Instagram className="h-5 w-5" strokeWidth={1.5} /></a>
              <a href="#" className="text-background/50 hover:text-accentGreen transition-colors"><Facebook className="h-5 w-5" strokeWidth={1.5} /></a>
              <a href="#" className="text-background/50 hover:text-accentGreen transition-colors"><Twitter className="h-5 w-5" strokeWidth={1.5} /></a>
            </div>
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="md:col-span-2">
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] mb-8 font-bold text-accentGreen/80">Destinations</h4>
            <ul className="space-y-4 font-body text-sm text-background/70">
              <li><Link to="/discovery?tab=southampton" className="hover:text-background transition-colors hover:underline underline-offset-4 decoration-accentGreen/50">Southampton</Link></li>
              <li><Link to="/discovery?tab=easthampton" className="hover:text-background transition-colors hover:underline underline-offset-4 decoration-accentGreen/50">East Hampton</Link></li>
              <li><Link to="/discovery?tab=montauk" className="hover:text-background transition-colors hover:underline underline-offset-4 decoration-accentGreen/50">Montauk</Link></li>
              <li><Link to="/discovery?tab=sagharbor" className="hover:text-background transition-colors hover:underline underline-offset-4 decoration-accentGreen/50">Sag Harbor</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="md:col-span-2">
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] mb-8 font-bold text-accentGreen/80">Agency</h4>
            <ul className="space-y-4 font-body text-sm text-background/70">
              <li><Link to="/about" className="hover:text-background transition-colors hover:underline underline-offset-4 decoration-accentGreen/50">Our History</Link></li>
              <li><Link to="/lifestyle" className="hover:text-background transition-colors hover:underline underline-offset-4 decoration-accentGreen/50">Hamptons Lifestyle</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors hover:underline underline-offset-4 decoration-accentGreen/50">Contact Broker</Link></li>
              <li><Link to="/admin/login" className="hover:text-background transition-colors hover:underline underline-offset-4 decoration-accentGreen/50">Broker Login</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="md:col-span-3">
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] mb-8 font-bold text-accentGreen/80">Headquarters</h4>
            <address className="not-italic font-body text-sm text-background/70 space-y-3">
              <p>66 Newtown Lane</p>
              <p>East Hampton, NY 11937</p>
              <p className="pt-4"><a href="tel:+16315550198" className="hover:text-background transition-colors font-bold tracking-wider">+1 (631) 555-0198</a></p>
              <p><a href="mailto:inquiries@eastend.com" className="hover:text-background transition-colors hover:underline decoration-accentGreen/50">inquiries@eastend.com</a></p>
            </address>
          </motion.div>

        </motion.div>
        
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center font-body text-[10px] uppercase tracking-widest text-background/40">
          <p>&copy; {new Date().getFullYear()} East End Exclusive Estates. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link to="#" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
