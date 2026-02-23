import React from 'react';
import { Search, Filter, MoreHorizontal } from 'lucide-react';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

const LISTINGS = [
  { id: 1, address: 'Further Lane Estate', category: 'Sale', status: 'Active', price: '$45,000,000', listed: 'Oct 12' },
  { id: 2, address: 'Meadow Lane Compound', category: 'Sale', status: 'In Contract', price: '$38,500,000', listed: 'Sep 04' },
  { id: 3, address: 'Lily Pond Summer', category: 'Rental', status: 'Available', price: '$450K /mo', listed: 'Jan 15' },
  { id: 4, address: 'Montauk Point Modern', category: 'Sale', status: 'Active', price: '$22,000,000', listed: 'Nov 22' },
  { id: 5, address: 'Gin Lane Historic', category: 'Sale', status: 'Off Market', price: '$55,000,000', listed: 'Aug 10' },
  { id: 6, address: 'Southampton Village Classic', category: 'Rental', status: 'Leased', price: '$120K /mo', listed: 'Dec 01' },
];

export const ListingsTable = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="font-heading text-3xl text-primary">Property Listings</h1>
        <Link to="/admin/edit">
          <Button className="py-2 px-4 shadow-sm">Add New Property</Button>
        </Link>
      </div>

      <div className="bg-white border border-gray-200 shadow-sm relative overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="flex items-center w-full md:w-auto border border-gray-300 bg-white px-3 py-2">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search address or MLS..."
              className="text-sm border-none focus:outline-none w-full md:w-64 font-body"
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
             <Button variant="secondary" className="py-2 px-3 text-xs flex items-center">
               <Filter className="h-4 w-4 mr-2" /> Filter
             </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="p-4 font-body text-xs text-primary/60 uppercase tracking-widest font-bold">Property Address</th>
                <th className="p-4 font-body text-xs text-primary/60 uppercase tracking-widest font-bold">Category</th>
                <th className="p-4 font-body text-xs text-primary/60 uppercase tracking-widest font-bold">Status</th>
                <th className="p-4 font-body text-xs text-primary/60 uppercase tracking-widest font-bold">Price</th>
                <th className="p-4 font-body text-xs text-primary/60 uppercase tracking-widest font-bold hidden md:table-cell">Listed Date</th>
                <th className="p-4 font-body text-xs text-primary/60 uppercase tracking-widest font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {LISTINGS.map((listing) => (
                <tr key={listing.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="p-4">
                    <div className="font-heading text-primary font-bold">{listing.address}</div>
                    <div className="text-xs text-gray-400 font-body hidden md:block">ID: #{8490 + listing.id}</div>
                  </td>
                  <td className="p-4">
                    <span className="font-body text-sm text-primary">{listing.category}</span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-block px-2 py-1 text-xs font-body font-bold uppercase tracking-wider ${
                      listing.status === 'Active' || listing.status === 'Available' ? 'bg-green-100 text-green-800' :
                      listing.status === 'In Contract' || listing.status === 'Leased' ? 'bg-accentBlue/10 text-accentBlue' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {listing.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="font-heading font-bold text-primary">{listing.price}</span>
                  </td>
                  <td className="p-4 hidden md:table-cell font-body text-sm text-gray-500">
                    {listing.listed}
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-gray-400 hover:text-accentBlue transition-colors p-1">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-gray-200 flex justify-between items-center bg-gray-50/50 font-body text-sm text-gray-500">
          <span>Showing 1 to 6 of 84 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-300 bg-white hover:bg-gray-50 cursor-not-allowed opacity-50">Prev</button>
            <button className="px-3 py-1 border border-primary bg-primary text-white">1</button>
            <button className="px-3 py-1 border border-gray-300 bg-white hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 bg-white hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border border-gray-300 bg-white hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
