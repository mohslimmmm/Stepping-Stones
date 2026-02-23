import React, { useState } from 'react';
import { UploadCloud, CheckCircle } from 'lucide-react';
import { Button } from '../../components/Button';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const FloatingLabelInput = ({ label, type = "text", value: propValue, className = "", ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(propValue || '');

  const isActive = isFocused || value !== '';

  return (
    <div className={`relative pt-6 ${className}`}>
      <label 
        className={`absolute left-0 transition-all duration-300 font-body uppercase tracking-[0.2em] pointer-events-none ${
          isActive ? 'top-0 text-[9px] text-accentBlue font-bold' : 'top-6 text-[11px] text-primary/50'
        }`}
      >
        {label}
      </label>
      <input 
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if(props.onChange) props.onChange(e);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full border-b border-primary/20 pb-3 font-body text-primary focus:outline-none focus:border-accentBlue transition-colors bg-transparent"
        {...props}
      />
    </div>
  );
};

const FloatingLabelSelect = ({ label, children, ...props }) => {
  return (
    <div className="relative pt-6 w-full">
      <label className="absolute left-0 top-0 text-[9px] font-body uppercase tracking-[0.2em] text-accentBlue font-bold pointer-events-none">
        {label}
      </label>
      <select 
        className="w-full border-b border-primary/20 pb-3 font-body text-primary focus:outline-none focus:border-accentBlue transition-colors bg-transparent appearance-none cursor-pointer"
        {...props}
      >
        {children}
      </select>
    </div>
  );
};

const FloatingLabelTextarea = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const isActive = isFocused || value !== '';

  return (
    <div className="relative pt-6">
      <label 
        className={`absolute left-0 transition-all duration-300 font-body uppercase tracking-[0.2em] pointer-events-none ${
          isActive ? 'top-0 text-[9px] text-accentBlue font-bold' : 'top-6 text-[11px] text-primary/50'
        }`}
      >
        {label}
      </label>
      <textarea 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full border-b border-primary/20 pb-3 font-body text-primary focus:outline-none focus:border-accentBlue transition-colors bg-transparent resize-none leading-relaxed"
        {...props}
      />
    </div>
  );
};

export const EditForm = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="max-w-5xl mx-auto pb-12"
    >
      <div className="flex justify-between items-start md:items-end mb-10">
        <div>
          <h1 className="font-heading text-4xl text-primary tracking-wide">Property Configuration</h1>
          <p className="font-body text-xs text-primary/50 uppercase tracking-[0.2em] font-bold mt-2">New Prime Listing</p>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" className="px-6 py-3 border-primary/20 hover:border-primary">Save Draft</Button>
          <Button className="px-6 py-3">Publish Listing</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-10">
          
          <motion.div variants={fadeUp} className="bg-white p-10 border border-primary/5 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accentBlue transform translate-x-1 -translate-y-1"></div>
            
            <h3 className="font-heading text-2xl text-primary mb-8 border-b border-primary/10 pb-4 tracking-wide">Editorial Details</h3>
            <div className="space-y-8 form-group">
              
              <FloatingLabelInput label="Property Headline (Internal/Public)" />
              
              <div className="grid grid-cols-2 gap-8">
                <FloatingLabelSelect label="Property Classification">
                  <option>Single Family Estate</option>
                  <option>Equestrian Compound</option>
                  <option>Oceanfront Parcel</option>
                  <option>Luxury Condominium</option>
                </FloatingLabelSelect>
                <FloatingLabelSelect label="Transaction Type">
                  <option>Exclusive Sale</option>
                  <option>Summer Memorial-LD</option>
                  <option>Year-Round Lease</option>
                </FloatingLabelSelect>
              </div>

              <FloatingLabelTextarea label="Narrative Description" rows="6" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-10 border border-primary/5 shadow-2xl relative">
            <h3 className="font-heading text-2xl text-primary mb-8 border-b border-primary/10 pb-4 tracking-wide">Media Assets</h3>
            
            <div className="border border-dashed border-primary/20 bg-background/30 hover:bg-background/80 transition-colors p-14 text-center cursor-pointer mb-8 relative group">
              <UploadCloud className="h-10 w-10 text-primary/40 mx-auto mb-4 group-hover:text-accentBlue transition-colors duration-500" strokeWidth={1.5} />
              <p className="font-body text-primary font-bold mb-2 uppercase tracking-widest text-xs">Drag & Drop High-Res Photography</p>
              <p className="font-body text-[10px] text-primary/50 uppercase tracking-[0.2em] mt-3">Supports JPG, PNG up to 20MB. First image serves as Hero.</p>
            </div>
            
            <div className="grid grid-cols-4 gap-6">
               <div className="aspect-square bg-background relative group overflow-hidden border border-primary/5">
                 <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="thumb" />
                 <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute top-2 left-2 bg-background border border-primary/10 text-primary text-[9px] px-2 py-1 uppercase tracking-[0.2em] font-bold shadow-sm">Hero</div>
               </div>
               <div className="aspect-square bg-background/50 border border-primary/10 flex items-center justify-center text-primary/30 hover:bg-background hover:text-accentBlue cursor-pointer transition-colors group">
                 <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300 font-light">+</span>
               </div>
               <div className="aspect-square bg-background/50 border border-primary/10 flex items-center justify-center text-primary/30 hover:bg-background hover:text-accentBlue cursor-pointer transition-colors group">
                 <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300 font-light">+</span>
               </div>
               <div className="aspect-square bg-background/50 border border-primary/10 flex items-center justify-center text-primary/30 hover:bg-background hover:text-accentBlue cursor-pointer transition-colors group">
                 <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300 font-light">+</span>
               </div>
            </div>
          </motion.div>

        </div>

        {/* Sidebar Configuration */}
        <div className="lg:col-span-1 space-y-10">
          
          <motion.div variants={fadeUp} className="bg-white p-8 border border-primary/5 shadow-2xl relative">
            <h3 className="font-heading text-xl text-primary mb-6 border-b border-primary/10 pb-3 tracking-wide">Financials</h3>
            
            <div className="space-y-6">
              <FloatingLabelSelect label="Market Status">
                 <option>Draft</option>
                 <option>Active Listing</option>
                 <option>Off Market (Pocket)</option>
                 <option>In Contract</option>
              </FloatingLabelSelect>

              <div className="relative pt-6">
                <label className="absolute left-0 top-0 text-[9px] font-body uppercase tracking-[0.2em] text-accentBlue font-bold pointer-events-none">
                  Asking Price
                </label>
                <div className="relative w-full">
                  <span className="absolute left-0 bottom-3 text-primary/50 font-body text-sm">$</span>
                  <input type="text" className="w-full border-b border-primary/20 pb-3 pl-4 font-body text-primary focus:outline-none focus:border-accentBlue transition-colors bg-transparent" placeholder="0.00" />
                </div>
              </div>
              
              <div className="pt-6 mt-4 border-t border-primary/10">
                <label className="block font-body text-[9px] uppercase tracking-[0.2em] font-bold text-accentBlue mb-6">Summer Schedule Rates</label>
                <div className="space-y-4">
                  <div className="flex items-center justify-between group">
                    <span className="font-body text-xs text-primary/70 uppercase tracking-widest group-hover:text-primary transition-colors">MD - LD</span>
                    <div className="relative w-24">
                       <span className="absolute left-0 bottom-2 text-primary/40 font-body text-xs">$</span>
                       <input type="text" className="w-full border-b border-primary/10 pb-2 pl-3 font-body focus:outline-none focus:border-accentBlue bg-transparent text-right text-sm transition-colors text-primary" placeholder="--" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between group">
                    <span className="font-body text-xs text-primary/70 uppercase tracking-widest group-hover:text-primary transition-colors">July Only</span>
                    <div className="relative w-24">
                       <span className="absolute left-0 bottom-2 text-primary/40 font-body text-xs">$</span>
                       <input type="text" className="w-full border-b border-primary/10 pb-2 pl-3 font-body focus:outline-none focus:border-accentBlue bg-transparent text-right text-sm transition-colors text-primary" placeholder="--" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between group">
                    <span className="font-body text-xs text-primary/70 uppercase tracking-widest group-hover:text-primary transition-colors">Aug - LD</span>
                    <div className="relative w-24">
                       <span className="absolute left-0 bottom-2 text-primary/40 font-body text-xs">$</span>
                       <input type="text" className="w-full border-b border-primary/10 pb-2 pl-3 font-body focus:outline-none focus:border-accentBlue bg-transparent text-right text-sm transition-colors text-primary" placeholder="--" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-8 border border-primary/5 shadow-2xl relative">
            <h3 className="font-heading text-xl text-primary mb-6 border-b border-primary/10 pb-3 tracking-wide">Specifications</h3>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
               <FloatingLabelInput label="Beds" type="number" />
               <FloatingLabelInput label="Baths" type="number" />
               <FloatingLabelInput label="Interior Sq Ft" type="number" />
               <FloatingLabelInput label="Lot Acreage" type="number" step="0.1" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-8 border border-primary/5 shadow-2xl relative">
             <h3 className="font-heading text-xl text-primary mb-6 border-b border-primary/10 pb-3 tracking-wide">Access Notes</h3>
             <FloatingLabelTextarea label="Private Instructions" rows="4" />
             <p className="font-body text-[9px] uppercase tracking-widest text-primary/40 mt-3 font-bold">Internal use only. Not public.</p>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};
