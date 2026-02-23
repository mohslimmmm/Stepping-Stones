import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Key, Lock, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [pgpEnabled, setPgpEnabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-silver mb-6">Confidential Inquiry</h4>
            <h1 className="text-4xl md:text-6xl mb-10 leading-tight">Private <span className="italic">Correspondence.</span></h1>
            <p className="text-lg text-light-slate opacity-70 font-light leading-relaxed mb-12">
              For initial inquiries or to request a secure link for document submission, please use the portal below. All data is processed through our encrypted private servers in Zurich.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white border border-silver/20 rounded-sm text-deep-indigo">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs tracking-widest uppercase mb-1">Direct Line</h4>
                  <p className="text-lg font-light">+41 44 211 00 00</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white border border-silver/20 rounded-sm text-deep-indigo">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs tracking-widest uppercase mb-1">Email Protocol</h4>
                  <p className="text-lg font-light">inquiry@aegis-swiss.ch</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white border border-silver/20 rounded-sm text-deep-indigo">
                   <Key size={18} />
                </div>
                <div>
                  <h4 className="text-xs tracking-widest uppercase mb-1">Public PGP Key</h4>
                  <p className="text-[10px] font-mono opacity-50 truncate w-64">0x4F92B3C5...1A8E92B1</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 shadow-2xl border border-silver/10 rounded-sm relative">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-alpine-snow rounded-full flex items-center justify-center mx-auto mb-8 border border-deep-indigo/10">
                   <Lock className="text-deep-indigo" size={32} />
                </div>
                <h3 className="text-2xl mb-4">Protocol Initiated</h3>
                <p className="text-sm text-silver max-w-xs mx-auto mb-10">
                  Your inquiry has been encrypted and routed to a Senior Relationship Manager. You will be contacted via your preferred channel within 4 business hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-[10px] tracking-[0.3em] font-bold uppercase text-deep-indigo">
                   Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] tracking-widest uppercase text-silver block mb-3">Full Identity</label>
                    <input type="text" className="w-full bg-alpine-snow border-none p-4 text-sm focus:ring-1 focus:ring-deep-indigo outline-none transition-all" placeholder="Legal Name" required />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-widest uppercase text-silver block mb-3">Communication Channel</label>
                    <input type="text" className="w-full bg-alpine-snow border-none p-4 text-sm focus:ring-1 focus:ring-deep-indigo outline-none transition-all" placeholder="Email or Signal" required />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-silver block mb-3">Service Interest</label>
                  <select className="w-full bg-alpine-snow border-none p-4 text-sm focus:ring-1 focus:ring-deep-indigo outline-none transition-all">
                    <option>Asset Management Mandate</option>
                    <option>Estate or Trust Inquiry</option>
                    <option>Institutional Solutions</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-silver block mb-3">Message (Encrypted)</label>
                  <textarea className="w-full bg-alpine-snow border-none p-4 text-sm h-32 focus:ring-1 focus:ring-deep-indigo outline-none transition-all resize-none" placeholder="Brief overview of requirements..."></textarea>
                </div>

                <div className="flex items-center justify-between py-4 border-y border-silver/10">
                   <div className="flex items-center gap-3">
                      <div 
                        onClick={() => setPgpEnabled(!pgpEnabled)}
                        className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${pgpEnabled ? 'bg-deep-indigo' : 'bg-silver/30'}`}
                      >
                         <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-all ${pgpEnabled ? 'translate-x-5' : 'translate-x-0'}`}></div>
                      </div>
                      <span className="text-[10px] tracking-widest uppercase font-bold text-dark-slate flex items-center gap-2">
                         <Key size={12} />
                         PGP Key Encryption
                      </span>
                   </div>
                   {pgpEnabled && <span className="text-[8px] text-deep-indigo font-bold whitespace-nowrap">KEY 0x4F92... READY</span>}
                </div>

                <button type="submit" className="w-full bg-dark-slate text-white py-5 rounded-[4px] text-xs tracking-[0.4em] uppercase font-bold hover:bg-deep-indigo transition-all flex items-center justify-center gap-4">
                  Send Inquiry
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
