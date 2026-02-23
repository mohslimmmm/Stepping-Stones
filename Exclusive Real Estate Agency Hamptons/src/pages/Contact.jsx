import React, { useState } from 'react';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const FloatingLabelInput = ({ label, type = "text", ...props }) => {
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
      <input 
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full border-b border-primary/20 pb-3 font-body text-primary focus:outline-none focus:border-accentBlue transition-colors bg-transparent"
        {...props}
      />
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
          isActive ? 'top-0 text-[10px] text-accentBlue font-bold' : 'top-6 text-xs text-primary/50'
        }`}
      >
        {label}
      </label>
      <textarea 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full border-b border-primary/20 pb-3 font-body text-primary focus:outline-none focus:border-accentBlue transition-colors bg-transparent resize-none"
        {...props}
      />
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="pt-32 min-h-screen bg-background pb-32">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-12">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          
          {/* Info Side */}
          <div className="pr-0 md:pr-12">
            <motion.h1 variants={fadeUp} className="font-heading text-5xl lg:text-7xl text-primary mb-8 tracking-wide">Private Inquiry</motion.h1>
            <motion.p variants={fadeUp} className="font-body text-lg md:text-xl text-primary/70 leading-relaxed mb-16 font-light">
              Whether you are looking to acquire a legacy estate, or discreetly divest a significant property, our senior partners are at your service.
            </motion.p>

            <div className="space-y-12 mb-16">
              <motion.div variants={fadeUp}>
                <h4 className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-accentBlue mb-4">Headquarters</h4>
                <address className="not-italic font-body text-primary/80 text-lg font-light leading-relaxed">
                  <p>66 Newtown Lane</p>
                  <p>East Hampton, New York 11937</p>
                </address>
              </motion.div>
              
              <motion.div variants={fadeUp}>
                <h4 className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-accentBlue mb-4">Direct Contact</h4>
                <div className="font-body text-primary/80 text-lg font-light space-y-2">
                  <p><a href="tel:+16315550198" className="hover:text-accentBlue transition-colors">+1 (631) 555-0198</a></p>
                  <p><a href="mailto:partners@eastend.com" className="hover:text-accentBlue transition-colors link-underline">partners@eastend.com</a></p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="bg-primary text-background p-10 border-l border-accentGreen shadow-2xl">
               <h4 className="font-heading text-2xl mb-4 text-accentGreen tracking-wide">Broker Portal</h4>
               <p className="font-body text-background/80 text-sm mb-8 font-light leading-relaxed">
                 Authorized firm members and trusted partners may access internal systems here.
               </p>
               <Button variant="outlineLight" className="w-full border-background/30">Access Login</Button>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div variants={fadeUp} className="bg-white p-10 lg:p-14 border border-primary/5 shadow-2xl relative mt-12 lg:mt-0">
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accentBlue transform translate-x-2 -translate-y-2"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-accentBlue transform -translate-x-2 translate-y-2"></div>
            
            <h3 className="font-heading text-3xl lg:text-4xl text-primary mb-12 border-b border-primary/10 pb-6 tracking-wide">Client Intake</h3>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FloatingLabelInput label="First Name" required />
                <FloatingLabelInput label="Last Name" required />
              </div>

              <FloatingLabelInput label="Email Address" type="email" required />
              <FloatingLabelInput label="Phone Number" type="tel" />

              <div className="relative pt-6">
                <label className="absolute left-0 top-0 text-[9px] font-body uppercase tracking-[0.2em] text-accentBlue font-bold pointer-events-none">
                  Nature of Inquiry
                </label>
                <select className="w-full border-b border-primary/20 pb-3 font-body text-primary focus:outline-none focus:border-accentBlue transition-colors bg-transparent appearance-none cursor-pointer">
                  <option>Acquiring a Property</option>
                  <option>Selling a Property</option>
                  <option>Summer Rental Inquiry</option>
                  <option>General Representation</option>
                </select>
              </div>

              <FloatingLabelTextarea label="Additional Details" rows="4" />

              <div className="pt-10">
                <Button type="button" className="w-full">Submit Confidential Inquiry</Button>
                <p className="text-center font-body text-[10px] uppercase tracking-[0.2em] text-primary/40 mt-8 font-bold">
                  Information submitted is held in the strictest confidence.
                </p>
              </div>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};
