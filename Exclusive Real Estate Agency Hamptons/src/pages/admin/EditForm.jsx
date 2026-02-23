import React from 'react';
import { UploadCloud, CheckCircle } from 'lucide-react';
import { Button } from '../../components/Button';

export const EditForm = () => {
  return (
    <div className="max-w-5xl mx-auto pb-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-heading text-3xl text-primary">Add New Property</h1>
        <div className="flex gap-4">
          <Button variant="secondary" className="px-4 py-2 text-xs">Save Draft</Button>
          <Button className="px-4 py-2 text-xs">Publish Listing</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 className="font-heading text-xl text-primary mb-6 border-b border-gray-100 pb-4">Basic Information</h3>
            <div className="space-y-6 form-group">
              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Property Title (Internal/Headline)</label>
                <input type="text" className="w-full border border-gray-300 p-3 font-body focus:outline-none focus:border-accentBlue" placeholder="e.g. Further Lane Estate" />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Property Type</label>
                  <select className="w-full border border-gray-300 p-3 font-body focus:outline-none focus:border-accentBlue bg-white">
                    <option>Single Family</option>
                    <option>Estate / Compound</option>
                    <option>Vacant Land</option>
                    <option>Condominium</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Transaction Category</label>
                  <select className="w-full border border-gray-300 p-3 font-body focus:outline-none focus:border-accentBlue bg-white">
                    <option>Sale</option>
                    <option>Summer Rental</option>
                    <option>Year-Round Rental</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Description</label>
                <textarea rows="6" className="w-full border border-gray-300 p-3 font-body focus:outline-none focus:border-accentBlue" placeholder="Enter editorial description..."></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 className="font-heading text-xl text-primary mb-6 border-b border-gray-100 pb-4">Media Uploader</h3>
            
            <div className="border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors p-12 text-center cursor-pointer mb-6">
              <UploadCloud className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="font-body text-primary font-bold mb-2">Drag & Drop High-Res Photography</p>
              <p className="font-body text-xs text-gray-500">Supports JPG, PNG up to 20MB. First image will be Hero.</p>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
               <div className="aspect-square bg-gray-200 relative group">
                 <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover" alt="thumb" />
                 <div className="absolute top-2 left-2 bg-accentBlue text-white text-[10px] px-2 py-1 uppercase tracking-wider">Hero</div>
               </div>
               <div className="aspect-square bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-200 cursor-pointer">
                 +
               </div>
               <div className="aspect-square bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-200 cursor-pointer">
                 +
               </div>
               <div className="aspect-square bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-200 cursor-pointer">
                 +
               </div>
            </div>
          </div>

        </div>

        {/* Sidebar Configuration */}
        <div className="lg:col-span-1 space-y-8">
          
          <div className="bg-white p-6 border border-gray-200 shadow-sm">
            <h3 className="font-heading text-lg text-primary mb-4 border-b border-gray-100 pb-2">Pricing Matrix</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Status</label>
                <select className="w-full border border-gray-300 p-2 text-sm font-body focus:outline-none focus:border-accentBlue bg-white">
                  <option>Draft</option>
                  <option>Active</option>
                  <option>Off Market (Pocket)</option>
                  <option>In Contract</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Asking Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                  <input type="text" className="w-full border border-gray-300 p-2 pl-7 text-sm font-body focus:outline-none focus:border-accentBlue" placeholder="e.g. 45,000,000" />
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2 text-accentBlue">Summer Rental Terms</label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-body text-gray-600">Memorial Day - LD</span>
                    <input type="text" className="w-24 border border-gray-300 p-1 font-body focus:outline-none text-right" placeholder="$--" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-body text-gray-600">July</span>
                    <input type="text" className="w-24 border border-gray-300 p-1 font-body focus:outline-none text-right" placeholder="$--" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-body text-gray-600">August - LD</span>
                    <input type="text" className="w-24 border border-gray-300 p-1 font-body focus:outline-none text-right" placeholder="$--" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-gray-200 shadow-sm">
            <h3 className="font-heading text-lg text-primary mb-4 border-b border-gray-100 pb-2">Details & Specifications</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Beds</label>
                <input type="number" className="w-full border border-gray-300 p-2 text-sm font-body focus:outline-none focus:border-accentBlue" />
              </div>
              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Baths</label>
                <input type="number" className="w-full border border-gray-300 p-2 text-sm font-body focus:outline-none focus:border-accentBlue" />
              </div>
              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Sq Ft</label>
                <input type="number" className="w-full border border-gray-300 p-2 text-sm font-body focus:outline-none focus:border-accentBlue" />
              </div>
              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Acreage</label>
                <input type="number" step="0.1" className="w-full border border-gray-300 p-2 text-sm font-body focus:outline-none focus:border-accentBlue" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-gray-200 shadow-sm">
             <h3 className="font-heading text-lg text-primary mb-4 border-b border-gray-100 pb-2">Showing Instructions</h3>
             <textarea rows="4" className="w-full border border-gray-300 p-2 text-sm font-body focus:outline-none focus:border-accentBlue bg-yellow-50/30" placeholder="Internal notes: Gate code, caretaker details, showing notice requirements..."></textarea>
          </div>

        </div>
      </div>
    </div>
  );
};
