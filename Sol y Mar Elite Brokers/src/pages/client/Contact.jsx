import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Send, Lock } from 'lucide-react';

const Contact = () => {
  const [offMarket, setOffMarket] = useState(false);

  return (
    <div className="min-h-screen bg-alabaster pt-32 pb-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full">
        
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-olive/10 text-olive mb-6"
          >
            <Shield size={20} />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-espresso mb-4"
          >
            Client Registration
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-espresso/70 font-light max-w-lg mx-auto"
          >
            Initiate a discrete dialogue with our senior partners regarding representation, acquisition, or access to our private reserve.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white p-8 md:p-16 rounded-sm shadow-xl border border-olive/10"
        >
          <form className="space-y-10">
            
            {/* Identity */}
            <div className="space-y-8">
              <h2 className="text-sm uppercase tracking-widest text-olive border-b border-olive/20 pb-2">I. Identity</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-espresso/60">Given Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-espresso/20 py-3 outline-none focus:border-olive transition-colors font-serif text-lg text-espresso" placeholder="Enter given name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-espresso/60">Surname</label>
                  <input type="text" className="w-full bg-transparent border-b border-espresso/20 py-3 outline-none focus:border-olive transition-colors font-serif text-lg text-espresso" placeholder="Enter surname" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-espresso/60">Representing Entity (Optional)</label>
                <input type="text" className="w-full bg-transparent border-b border-espresso/20 py-3 outline-none focus:border-olive transition-colors font-serif text-lg text-espresso focus:placeholder-transparent" placeholder="Family Office, Trust, or Corporate Entity" />
              </div>
            </div>

            {/* Communication Preferences */}
            <div className="space-y-8 pt-4">
              <h2 className="text-sm uppercase tracking-widest text-olive border-b border-olive/20 pb-2">II. Communication</h2>
              
              <div className="space-y-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-espresso/60 block mb-4">Preferred Secure Channel</label>
                <div className="flex flex-col sm:flex-row gap-6">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="radio" name="comm_channel" className="w-4 h-4 text-olive bg-alabaster border-espresso/30 focus:ring-olive focus:ring-2" defaultChecked />
                    <span className="text-sm font-medium text-espresso group-hover:text-olive transition-colors">Encrypted Email</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="radio" name="comm_channel" className="w-4 h-4 text-olive bg-alabaster border-espresso/30 focus:ring-olive focus:ring-2" />
                    <span className="text-sm font-medium text-espresso group-hover:text-olive transition-colors">WhatsApp &mdash; Direct</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="radio" name="comm_channel" className="w-4 h-4 text-olive bg-alabaster border-espresso/30 focus:ring-olive focus:ring-2" />
                    <span className="text-sm font-medium text-espresso group-hover:text-olive transition-colors">Telegram</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-semibold uppercase tracking-wider text-espresso/60">Contact Detail</label>
                 <input type="text" className="w-full bg-transparent border-b border-espresso/20 py-3 outline-none focus:border-olive transition-colors font-sans text-lg text-espresso" placeholder="Email address or Phone number with country code" />
              </div>
            </div>

            {/* Intent */}
            <div className="space-y-8 pt-4">
              <h2 className="text-sm uppercase tracking-widest text-olive border-b border-olive/20 pb-2">III. Intent</h2>
              
              <div className="space-y-2">
                 <label className="text-xs font-semibold uppercase tracking-wider text-espresso/60">Brief Inquiry</label>
                 <textarea rows="3" className="w-full bg-transparent border-b border-espresso/20 py-3 outline-none focus:border-olive transition-colors font-serif text-lg text-espresso" placeholder="Describe your parameters or state your interest..."></textarea>
              </div>

              {/* Off-Market Toggle */}
              <div 
                className={`flex items-start space-x-4 p-6 rounded-sm border cursor-pointer transition-all duration-300 ${offMarket ? 'bg-navy border-navy text-alabaster shadow-lg' : 'bg-transparent border-espresso/20 hover:border-olive text-espresso'}`}
                onClick={() => setOffMarket(!offMarket)}
              >
                <div className={`mt-0.5 w-5 h-5 rounded-sm flex items-center justify-center border transition-colors flex-shrink-0 ${offMarket ? 'bg-alabaster border-alabaster' : 'bg-transparent border-espresso/30'}`}>
                  {offMarket && <Shield size={12} className="text-navy" />}
                </div>
                <div className="flex flex-col">
                  <span className={`text-base font-serif mb-1 ${offMarket ? 'text-alabaster' : 'text-espresso'}`}>Request The Private Reserve Access</span>
                  <span className={`text-xs font-light leading-relaxed ${offMarket ? 'text-alabaster/80' : 'text-espresso/60'}`}>
                    I am interested in acquiring off-market Trophy Assets. I understand that proof of funds and NDA execution will be required prior to reviewing sensitive inventory.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button 
                type="button" 
                className="w-full bg-espresso text-alabaster py-5 rounded-sm flex justify-center items-center space-x-3 hover:bg-navy transition-all duration-300 hover-lift group"
              >
                <Lock size={16} className="text-alabaster/50 group-hover:text-alabaster transition-colors" />
                <span className="font-sans text-sm tracking-widest uppercase font-medium">Initiate Secure Transmission</span>
                <Send size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </form>
        </motion.div>
        
        <div className="text-center mt-12">
          <p className="text-xs text-espresso/40 font-mono">
            PGP Encryption Available Upon Request
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
