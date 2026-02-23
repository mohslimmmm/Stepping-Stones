import React from 'react';
import { DollarSign, Home, UserPlus, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const Dashboard = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="max-w-7xl mx-auto"
    >
      <motion.h1 variants={fadeUp} className="font-heading text-4xl text-primary mb-10 tracking-wide">Performance Overview</motion.h1>
      
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        <motion.div variants={fadeUp} className="bg-white p-8 shadow-sm border border-primary/5 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-4 opacity-5 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
            <DollarSign className="w-32 h-32" />
          </div>
          <p className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-accentBlue mb-3">Total Portfolio</p>
          <h3 className="font-heading text-4xl text-primary mb-3">$845.2M</h3>
          <p className="font-body text-xs text-accentGreen flex items-center font-bold">
            <TrendingUp className="w-3 h-3 mr-1.5" strokeWidth={3} /> +12% this quarter
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-white p-8 shadow-sm border border-primary/5 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-4 opacity-5 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
            <Home className="w-32 h-32" />
          </div>
          <p className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-accentBlue mb-3">Active Sales</p>
          <h3 className="font-heading text-4xl text-primary mb-3">24</h3>
          <p className="font-body text-xs text-primary/50">Properties on market</p>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-white p-8 shadow-sm border border-primary/5 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-4 opacity-5 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
             <Home className="w-32 h-32" />
          </div>
          <p className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-accentBlue mb-3">Rental Inventory</p>
          <h3 className="font-heading text-4xl text-primary mb-3">142</h3>
          <p className="font-body text-xs text-primary/50">Available for season</p>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-white p-8 shadow-sm border border-primary/5 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-4 opacity-5 transform group-hover:scale-110 transition-transform duration-500">
            <UserPlus className="w-32 h-32" />
          </div>
          <p className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-accentBlue mb-3">Active Leads</p>
          <h3 className="font-heading text-4xl text-primary mb-3">18</h3>
          <p className="font-body text-xs text-primary/50">Qualified inquiries</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Recent Activity */}
        <motion.div variants={fadeUp} className="bg-white p-8 shadow-sm border border-primary/5">
          <h3 className="font-heading text-2xl text-primary mb-8 border-b border-primary/10 pb-4 tracking-wide">Recent Activity</h3>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-1.5 h-1.5 bg-accentBlue rounded-full mt-2 mr-6 relative before:absolute before:inset-[-4px] before:border before:border-accentBlue/30 before:rounded-full"></div>
              <div>
                <p className="font-body text-sm text-primary leading-relaxed"><span className="font-bold">New Lead:</span> High-net-worth inquiry for Further Lane Estate</p>
                <p className="font-body text-[10px] uppercase tracking-widest text-primary/40 mt-2 font-bold">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1.5 h-1.5 bg-accentGreen rounded-full mt-2 mr-6 relative before:absolute before:inset-[-4px] before:border before:border-accentGreen/30 before:rounded-full"></div>
              <div>
                <p className="font-body text-sm text-primary leading-relaxed"><span className="font-bold">Status Change:</span> Meadow Lane Compound moved to 'In Contract'</p>
                <p className="font-body text-[10px] uppercase tracking-widest text-primary/40 mt-2 font-bold">Yesterday at 4:30 PM</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1.5 h-1.5 bg-primary/20 rounded-full mt-2 mr-6 relative before:absolute before:inset-[-4px] before:border before:border-primary/10 before:rounded-full"></div>
              <div>
                <p className="font-body text-sm text-primary leading-relaxed"><span className="font-bold">Rental Signed:</span> 44 Lily Pond Lane (August)</p>
                <p className="font-body text-[10px] uppercase tracking-widest text-primary/40 mt-2 font-bold">2 days ago</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Top Properties */}
        <motion.div variants={fadeUp} className="bg-white p-8 shadow-sm border border-primary/5">
          <h3 className="font-heading text-2xl text-primary mb-8 border-b border-primary/10 pb-4 tracking-wide">Most Viewed Properties</h3>
           <div className="space-y-6">
             <div className="flex items-center justify-between group hover:bg-background/50 p-2 -mx-2 transition-colors">
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-background overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=100&q=80" alt="prop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div>
                   <p className="font-heading text-lg text-primary mb-1">Further Lane Estate</p>
                   <p className="font-body text-[9px] uppercase tracking-[0.2em] text-primary/60 border border-primary/10 inline-block px-2 py-0.5 font-bold">Sale</p>
                 </div>
               </div>
               <div className="text-right">
                 <p className="font-body text-sm font-bold text-primary">1,204</p>
                 <p className="font-body text-[10px] uppercase tracking-widest text-primary/40 mt-1">Views</p>
               </div>
             </div>
             
             <div className="flex items-center justify-between group hover:bg-background/50 p-2 -mx-2 transition-colors">
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-background overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=100&q=80" alt="prop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div>
                   <p className="font-heading text-lg text-primary mb-1">Lily Pond Summer</p>
                   <p className="font-body text-[9px] uppercase tracking-[0.2em] text-primary/60 border border-primary/10 inline-block px-2 py-0.5 font-bold">Rental</p>
                 </div>
               </div>
               <div className="text-right">
                 <p className="font-body text-sm font-bold text-primary">856</p>
                 <p className="font-body text-[10px] uppercase tracking-widest text-primary/40 mt-1">Views</p>
               </div>
             </div>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
