import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="container py-32 min-h-[90vh]">
      <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }} className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 variants={fadeUp} className="text-6xl font-header text-slate-dark mb-8 tracking-wide">Contact & Booking</motion.h1>
        <motion.p variants={fadeUp} className="font-body text-slate-grey opacity-90 leading-relaxed text-lg">
          Request a private consultation with our clinical specialists. We operate on a strict appointment-only basis to ensure absolute discretion and dedicated time for every patient.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
        
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-ivory border border-slate-grey/10 p-10 md:p-16 shadow-sm"
        >
          {submitted ? (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
               <h3 className="font-header text-4xl text-slate-dark mb-6">Request Received</h3>
               <p className="text-slate-grey opacity-90 font-body text-lg">Our concierge team will contact you shortly to confirm your consultation time.</p>
             </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input required type="text" id="firstName" className="peer w-full border-b border-slate-grey/30 bg-transparent py-3 focus:outline-none focus:border-slate-dark transition-colors font-body text-slate-dark placeholder-transparent" placeholder="First Name" />
                  <label htmlFor="firstName" className="absolute left-0 top-3 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-grey/60 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-slate-dark">First Name</label>
                </div>
                <div className="relative group">
                  <input required type="text" id="lastName" className="peer w-full border-b border-slate-grey/30 bg-transparent py-3 focus:outline-none focus:border-slate-dark transition-colors font-body text-slate-dark placeholder-transparent" placeholder="Last Name" />
                  <label htmlFor="lastName" className="absolute left-0 top-3 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-grey/60 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-slate-dark">Last Name</label>
                </div>
              </div>

              <div className="relative group">
                <input required type="email" id="email" className="peer w-full border-b border-slate-grey/30 bg-transparent py-3 focus:outline-none focus:border-slate-dark transition-colors font-body text-slate-dark placeholder-transparent" placeholder="Email Address" />
                <label htmlFor="email" className="absolute left-0 top-3 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-grey/60 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-slate-dark">Email Address</label>
              </div>

              <div className="relative group">
                <input required type="tel" id="phone" className="peer w-full border-b border-slate-grey/30 bg-transparent py-3 focus:outline-none focus:border-slate-dark transition-colors font-body text-slate-dark placeholder-transparent" placeholder="Phone Number" />
                <label htmlFor="phone" className="absolute left-0 top-3 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-grey/60 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-slate-dark">Phone Number</label>
              </div>

              <div className="relative group pt-4">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-dark font-bold mb-4">Primary Concern / Treatment Interest</label>
                <select className="w-full border-b border-slate-grey/30 bg-transparent py-3 focus:outline-none focus:border-slate-dark transition-colors font-body text-slate-dark opacity-90 cursor-pointer">
                  <option>General Biometric Assessment</option>
                  <option>Cosmetic Dermatology (Lasers, Injectables)</option>
                  <option>Medical Dermatology (Acne, Rosacea)</option>
                  <option>Skin Cancer Screening / Mole Mapping</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="relative group pt-4">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-dark font-bold mb-4">Message (Optional)</label>
                <textarea rows="4" className="w-full border border-slate-grey/30 bg-transparent p-4 focus:outline-none focus:border-slate-dark transition-colors font-body text-slate-dark resize-none placeholder-slate-grey/40" placeholder="Please provide any additional details..."></textarea>
              </div>

              <button type="submit" className="btn-primary w-full mt-6 py-4 tracking-[0.2em]">Request Appointment</button>
            </form>
          )}
        </motion.div>

        {/* Info & Map placeholder */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="space-y-16">
          
          <div>
            <h3 className="font-header text-4xl text-slate-dark mb-10 tracking-wide">Clinic Details</h3>
            <ul className="space-y-10">
              <li className="flex gap-6">
                <div className="mt-1"><MapPin className="text-soft-blush-dark" size={24} strokeWidth={1.5} /></div>
                <div>
                  <strong className="block text-[10px] uppercase tracking-[0.2em] text-slate-dark font-bold mb-2">Address</strong>
                  <span className="font-body text-slate-grey opacity-90 text-lg leading-relaxed">10 Harley Street<br/>Marylebone, London<br/>W1G 9PF</span>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="mt-1"><Phone className="text-soft-blush-dark" size={24} strokeWidth={1.5} /></div>
                <div>
                  <strong className="block text-[10px] uppercase tracking-[0.2em] text-slate-dark font-bold mb-2">Direct Line</strong>
                  <span className="font-body text-slate-grey opacity-90 text-lg">+44 (0) 20 7123 4567</span>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="mt-1"><Mail className="text-soft-blush-dark" size={24} strokeWidth={1.5} /></div>
                <div>
                  <strong className="block text-[10px] uppercase tracking-[0.2em] text-slate-dark font-bold mb-2">Email Concierge</strong>
                  <span className="font-body text-slate-grey opacity-90 text-lg">concierge@harleystreetskin.co.uk</span>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="mt-1"><Clock className="text-soft-blush-dark" size={24} strokeWidth={1.5} /></div>
                <div>
                  <strong className="block text-[10px] uppercase tracking-[0.2em] text-slate-dark font-bold mb-2">Clinical Hours</strong>
                  <span className="font-body text-slate-grey opacity-90 text-lg leading-relaxed">Monday - Friday: 9am — 6pm<br/>Saturday: 10am — 4pm (By Request)</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-grey/5 h-80 border border-slate-grey/10 flex items-center justify-center grayscale relative overflow-hidden group">
             {/* Map Placeholder simulating an elegant map */}
             <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="Harley St Map" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.8] group-hover:scale-105 transition-transform duration-1000" />
             <div className="relative z-10 bg-ivory/90 backdrop-blur px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold shadow-lg flex items-center gap-3 text-slate-dark">
               <MapPin size={16} className="text-soft-blush-dark" strokeWidth={1.5} /> Harley Street Clinic
             </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
