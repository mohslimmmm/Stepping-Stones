import React from 'react';
import { Search, Filter, MoreHorizontal } from 'lucide-react';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LISTINGS = [
  { id: 1, address: 'Further Lane Estate', category: 'Sale', status: 'Active', price: '$45,000,000', listed: 'Oct 12' },
  { id: 2, address: 'Meadow Lane Compound', category: 'Sale', status: 'In Contract', price: '$38,500,000', listed: 'Sep 04' },
  { id: 3, address: 'Lily Pond Summer', category: 'Rental', status: 'Available', price: '$450K /mo', listed: 'Jan 15' },
  { id: 4, address: 'Montauk Point Modern', category: 'Sale', status: 'Active', price: '$22,000,000', listed: 'Nov 22' },
  { id: 5, address: 'Gin Lane Historic', category: 'Sale', status: 'Off Market', price: '$55,000,000', listed: 'Aug 10' },
  { id: 6, address: 'Southampton Village Classic', category: 'Rental', status: 'Leased', price: '$120K /mo', listed: 'Dec 01' },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

export const ListingsTable = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-heading text-4xl text-primary tracking-wide">Property Portfolio</h1>
          <p className="font-body text-xs text-primary/50 uppercase tracking-[0.2em] font-bold mt-2">Active & Off-Market Listings</p>
        </div>
        <Link to="/admin/edit">
          <Button className="py-3 px-6 shadow-sm border-primary/20">Add New Property</Button>
        </Link>
      </div>

      <div className="bg-white border border-primary/10 shadow-sm relative overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-primary/10 flex flex-col md:flex-row gap-4 justify-between items-center bg-background/50">
          <div className="flex items-center w-full md:w-auto border-b border-primary/20 bg-transparent px-2 py-2 focus-within:border-accentBlue transition-colors">
            <Search className="h-4 w-4 text-primary/40 mr-3" strokeWidth={1.5} />
            <input 
              type="text" 
              placeholder="Search address or MLS..."
              className="text-sm border-none focus:outline-none w-full md:w-64 font-body text-primary placeholder-primary/40 bg-transparent"
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
             <Button variant="secondary" className="py-2 px-4 shadow-none border-primary/20 hover:border-primary">
               <span className="flex items-center gap-2"><Filter className="h-4 w-4" strokeWidth={1.5} /> Filter Portfolio</span>
             </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-primary/10 bg-background/30">
                <th className="p-6 font-body text-[10px] text-primary/40 uppercase tracking-[0.2em] font-bold">Property Address</th>
                <th className="p-6 font-body text-[10px] text-primary/40 uppercase tracking-[0.2em] font-bold">Category</th>
                <th className="p-6 font-body text-[10px] text-primary/40 uppercase tracking-[0.2em] font-bold">Status</th>
                <th className="p-6 font-body text-[10px] text-primary/40 uppercase tracking-[0.2em] font-bold">Price</th>
                <th className="p-6 font-body text-[10px] text-primary/40 uppercase tracking-[0.2em] font-bold hidden md:table-cell">Listed Date</th>
                <th className="p-6 font-body text-[10px] text-primary/40 uppercase tracking-[0.2em] font-bold text-right">Actions</th>
              </tr>
            </thead>
            <motion.tbody 
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="divide-y divide-primary/5"
            >
              {LISTINGS.map((listing) => (
                <motion.tr variants={fadeUp} key={listing.id} className="hover:bg-background/50 transition-colors group">
                  <td className="p-6">
                    <div className="font-heading text-lg text-primary tracking-wide mb-1 group-hover:text-accentBlue transition-colors">{listing.address}</div>
                    <div className="text-[10px] uppercase tracking-widest text-primary/40 font-body hidden md:block font-bold">Ref: #{8490 + listing.id}</div>
                  </td>
                  <td className="p-6">
                    <span className="font-body text-sm text-primary font-light">{listing.category}</span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center text-[10px] font-body text-primary/70 uppercase tracking-widest font-bold">
                      <div className={`w-1.5 h-1.5 mr-2 rounded-none ${
                        listing.status === 'Active' || listing.status === 'Available' ? 'bg-accentGreen' :
                        listing.status === 'In Contract' || listing.status === 'Leased' ? 'bg-accentBlue' :
                        'bg-primary/20'
                      }`}></div>
                      {listing.status}
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="font-heading text-lg text-primary">{listing.price}</span>
                  </td>
                  <td className="p-6 hidden md:table-cell font-body text-sm text-primary/60 font-light">
                    {listing.listed}
                  </td>
                  <td className="p-6 text-right">
                    <button className="text-primary/40 hover:text-accentBlue transition-colors p-2 rounded-full hover:bg-accentBlue/5">
                      <MoreHorizontal className="h-5 w-5" strokeWidth={1.5} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-6 border-t border-primary/10 flex justify-between items-center bg-background/30 font-body text-xs text-primary/50 uppercase tracking-widest font-bold">
          <span>Showing 1 to 6 of 84 entries</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-primary/20 bg-transparent hover:border-primary transition-colors cursor-not-allowed opacity-50">Prev</button>
            <button className="px-4 py-2 bg-primary text-background transition-colors">1</button>
            <button className="px-4 py-2 border border-primary/20 bg-transparent hover:border-primary text-primary transition-colors">2</button>
            <button className="px-4 py-2 border border-primary/20 bg-transparent hover:border-primary text-primary transition-colors">3</button>
            <button className="px-4 py-2 border border-primary/20 bg-transparent hover:border-primary text-primary transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
