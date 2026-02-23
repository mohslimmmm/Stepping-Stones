import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container py-24 fade-in">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-5xl font-header text-slate-dark mb-6 tracking-wide">Contact & Booking</h1>
        <p className="font-body text-slate opacity-80 leading-relaxed">
          Request a private consultation with our clinical specialists. We operate on a strict appointment-only basis to ensure absolute discretion and dedicated time for every patient.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Contact Form */}
        <div className="bg-ivory border border-slate-grey/20 p-8 md:p-12">
          {submitted ? (
             <div className="text-center py-16">
               <h3 className="font-header text-2xl text-slate-dark mb-4">Request Received</h3>
               <p className="text-slate opacity-80 font-body">Our concierge team will contact you shortly to confirm your consultation time.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">First Name</label>
                  <input required type="text" className="w-full border-b border-slate-grey/40 bg-transparent py-2 focus:outline-none focus:border-slate-dark transition-colors font-body" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Last Name</label>
                  <input required type="text" className="w-full border-b border-slate-grey/40 bg-transparent py-2 focus:outline-none focus:border-slate-dark transition-colors font-body" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Email Address</label>
                <input required type="email" className="w-full border-b border-slate-grey/40 bg-transparent py-2 focus:outline-none focus:border-slate-dark transition-colors font-body" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Phone Number</label>
                <input required type="tel" className="w-full border-b border-slate-grey/40 bg-transparent py-2 focus:outline-none focus:border-slate-dark transition-colors font-body" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Primary Concern / Treatment Interest</label>
                <select className="w-full border-b border-slate-grey/40 bg-transparent py-2 focus:outline-none focus:border-slate-dark transition-colors font-body opacity-80">
                  <option>General Biometric Assessment</option>
                  <option>Cosmetic Dermatology (Lasers, Injectables)</option>
                  <option>Medical Dermatology (Acne, Rosacea)</option>
                  <option>Skin Cancer Screening / Mole Mapping</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Message (Optional)</label>
                <textarea rows="4" className="w-full border border-slate-grey/40 bg-transparent p-3 focus:outline-none focus:border-slate-dark transition-colors font-body resize-none"></textarea>
              </div>

              <button type="submit" className="btn-primary w-full mt-4">Submit Request</button>
            </form>
          )}
        </div>

        {/* Info & Map placeholder */}
        <div className="space-y-12">
          
          <div>
            <h3 className="font-header text-2xl text-slate-dark mb-6 tracking-wide">Clinic Details</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-blush flex-shrink-0" />
                <div>
                  <strong className="block text-sm uppercase tracking-widest text-slate font-bold mb-1">Address</strong>
                  <span className="font-body text-slate opacity-80">10 Harley Street<br/>Marylebone, London<br/>W1G 9PF</span>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="text-blush flex-shrink-0" />
                <div>
                  <strong className="block text-sm uppercase tracking-widest text-slate font-bold mb-1">Direct Line</strong>
                  <span className="font-body text-slate opacity-80">+44 (0) 20 7123 4567</span>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="text-blush flex-shrink-0" />
                <div>
                  <strong className="block text-sm uppercase tracking-widest text-slate font-bold mb-1">Email Concierge</strong>
                  <span className="font-body text-slate opacity-80">concierge@harleystreetskin.co.uk</span>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="text-blush flex-shrink-0" />
                <div>
                  <strong className="block text-sm uppercase tracking-widest text-slate font-bold mb-1">Clinical Hours</strong>
                  <span className="font-body text-slate opacity-80">Monday - Friday: 9am — 6pm<br/>Saturday: 10am — 4pm (By Request)</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-grey/10 h-64 border border-slate-grey/20 flex items-center justify-center grayscale relative overflow-hidden">
             {/* Map Placeholder simulating an elegant map */}
             <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="Harley St Map" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" />
             <div className="relative z-10 bg-ivory px-4 py-2 text-xs uppercase tracking-widest font-bold shadow-lg flex items-center gap-2">
               <MapPin size={14} className="text-blush" /> Harley Street
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
