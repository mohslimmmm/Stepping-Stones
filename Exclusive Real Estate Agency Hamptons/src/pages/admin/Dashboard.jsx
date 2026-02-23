import React from 'react';
import { DollarSign, Home, UserPlus, TrendingUp } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-heading text-3xl text-primary mb-8">Performance Overview</h1>
      
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        <div className="bg-white p-6 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <DollarSign className="w-24 h-24" />
          </div>
          <p className="text-xs uppercase tracking-widest text-primary/50 mb-2">Total Portfolio Value</p>
          <h3 className="font-heading text-3xl text-primary mb-2">$845.2M</h3>
          <p className="text-sm text-green-600 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" /> +12% this quarter
          </p>
        </div>

        <div className="bg-white p-6 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Home className="w-24 h-24" />
          </div>
          <p className="text-xs uppercase tracking-widest text-primary/50 mb-2">Active Sales</p>
          <h3 className="font-heading text-3xl text-primary mb-2">24</h3>
          <p className="text-sm text-primary/60">Properties on market</p>
        </div>

        <div className="bg-white p-6 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
             <Home className="w-24 h-24" />
          </div>
          <p className="text-xs uppercase tracking-widest text-primary/50 mb-2">Summer Rental Inventory</p>
          <h3 className="font-heading text-3xl text-primary mb-2">142</h3>
          <p className="text-sm text-primary/60">Available for current season</p>
        </div>

        <div className="bg-white p-6 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <UserPlus className="w-24 h-24" />
          </div>
          <p className="text-xs uppercase tracking-widest text-primary/50 mb-2">Active Leads</p>
          <h3 className="font-heading text-3xl text-primary mb-2">18</h3>
          <p className="text-sm text-primary/60">Qualified inquiries</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="font-heading text-xl text-primary mb-6 border-b border-gray-100 pb-4">Recent Activity</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-accentBlue rounded-full mt-2 mr-4"></div>
              <div>
                <p className="text-sm text-primary"><span className="font-bold">New Lead:</span> High-net-worth inquiry for Further Lane Estate</p>
                <p className="text-xs text-primary/50 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-accentGreen rounded-full mt-2 mr-4"></div>
              <div>
                <p className="text-sm text-primary"><span className="font-bold">Status Change:</span> Meadow Lane Compound moved to 'In Contract'</p>
                <p className="text-xs text-primary/50 mt-1">Yesterday at 4:30 PM</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 mr-4"></div>
              <div>
                <p className="text-sm text-primary"><span className="font-bold">Rental Signed:</span> 44 Lily Pond Lane (August)</p>
                <p className="text-xs text-primary/50 mt-1">2 days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Properties */}
        <div className="bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="font-heading text-xl text-primary mb-6 border-b border-gray-100 pb-4">Most Viewed Properties</h3>
           <div className="space-y-4">
             <div className="flex items-center justify-between">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-gray-200">
                   <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=100&q=80" alt="prop" className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-primary">Further Lane Estate</p>
                   <p className="text-xs text-primary/60 border border-primary/20 inline-block px-1 mt-1">Sale</p>
                 </div>
               </div>
               <div className="text-right">
                 <p className="text-sm text-primary">1,204 Views</p>
               </div>
             </div>
             
             <div className="flex items-center justify-between">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=100&q=80" alt="prop" className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-primary">Lily Pond Summer</p>
                   <p className="text-xs text-primary/60 border border-primary/20 inline-block px-1 mt-1">Rental</p>
                 </div>
               </div>
               <div className="text-right">
                 <p className="text-sm text-primary">856 Views</p>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};
