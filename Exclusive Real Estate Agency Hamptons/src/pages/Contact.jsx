import React from 'react';
import { Button } from '../components/Button';

export const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-background pb-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h1 className="font-heading text-5xl text-primary mb-6">Private Inquiry</h1>
            <p className="font-body text-lg text-primary/80 leading-relaxed mb-12 max-w-md">
              Whether you are looking to acquire a legacy estate, or discreetly divest a significant property, our senior partners are at your service.
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <h4 className="font-heading text-xl text-primary mb-2">Headquarters</h4>
                <address className="not-italic font-body text-primary/70">
                  <p>66 Newtown Lane</p>
                  <p>East Hampton, New York 11937</p>
                </address>
              </div>
              
              <div>
                <h4 className="font-heading text-xl text-primary mb-2">Direct Contact</h4>
                <div className="font-body text-primary/70">
                  <p className="mb-1"><a href="tel:+16315550198" className="hover:text-accentBlue transition-colors">+1 (631) 555-0198</a></p>
                  <p><a href="mailto:partners@eastend.com" className="hover:text-accentBlue transition-colors">partners@eastend.com</a></p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 border-l-4 border-accentGreen shadow-sm">
               <h4 className="font-heading text-xl mb-4 text-accentGreen">Broker Portal</h4>
               <p className="font-body text-white/80 text-sm mb-6">
                 Authorized firm members and trusted partners may access the internal systems here.
               </p>
               <Button className="bg-background text-primary hover:bg-white w-full">Access Broker Login</Button>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-10 border border-primary/10 shadow-sm relative">
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accentBlue transform translate-x-2 -translate-y-2"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accentBlue transform -translate-x-2 translate-y-2"></div>
            
            <h3 className="font-heading text-3xl text-primary mb-8 border-b border-primary/10 pb-4">Client Intake</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">First Name *</label>
                  <input type="text" className="w-full border-b border-primary/20 p-2 font-body focus:outline-none focus:border-accentBlue transition-colors bg-transparent" required />
                </div>
                <div>
                  <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Last Name *</label>
                  <input type="text" className="w-full border-b border-primary/20 p-2 font-body focus:outline-none focus:border-accentBlue transition-colors bg-transparent" required />
                </div>
              </div>

              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Email Address *</label>
                <input type="email" className="w-full border-b border-primary/20 p-2 font-body focus:outline-none focus:border-accentBlue transition-colors bg-transparent" required />
              </div>

              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Phone Number</label>
                <input type="tel" className="w-full border-b border-primary/20 p-2 font-body focus:outline-none focus:border-accentBlue transition-colors bg-transparent" />
              </div>

              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Nature of Inquiry</label>
                <select className="w-full border-b border-primary/20 p-2 font-body focus:outline-none focus:border-accentBlue transition-colors bg-transparent text-primary">
                  <option>Acquiring a Property</option>
                  <option>Selling a Property</option>
                  <option>Summer Rental Inquiry</option>
                  <option>General Representation</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-primary/60 mb-2">Additional Details</label>
                <textarea rows="4" className="w-full border-b border-primary/20 p-2 font-body focus:outline-none focus:border-accentBlue transition-colors bg-transparent" placeholder="Please provide any specific requirements or properties of interest..."></textarea>
              </div>

              <div className="pt-6">
                <Button type="submit" className="w-full">Submit Confidential Inquiry</Button>
                <p className="text-center font-body text-xs text-primary/40 mt-4">
                  Information submitted is held in the strictest confidence.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
