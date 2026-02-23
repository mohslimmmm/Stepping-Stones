import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-warm-white fade-in pb-24">
      
      {/* Header */}
      <div className="bg-dark-slate text-warm-white py-24 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-header mb-6 tracking-wide drop-shadow-md">Contact Our Advisors</h1>
          <p className="text-lg md:text-xl font-body max-w-2xl mx-auto drop-shadow-md opacity-90">
            Begin your journey toward owning a piece of the Costa del Sol. Our multilingual team is available for private consultations.
          </p>
        </div>
      </div>

      <div className="container mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-header text-dark-slate mb-8">Marbella Headquarters</h2>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded shadow-soft text-terracotta shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-header text-xl text-dark-slate mb-1">Office Location</h4>
                <p className="font-body text-dark-slate opacity-80 leading-relaxed">
                  Bulevar Príncipe Alfonso von Hohenlohe, s/n<br/>
                  29602 Marbella, Málaga, Spain<br/>
                  (Appointments highly recommended)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded shadow-soft text-terracotta shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-header text-xl text-dark-slate mb-1">Direct Lines</h4>
                <p className="font-body text-dark-slate opacity-80">General: +34 952 000 000</p>
                <p className="font-body text-dark-slate opacity-80">International: +44 20 1234 5678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded shadow-soft text-terracotta shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-header text-xl text-dark-slate mb-1">Email Connect</h4>
                <p className="font-body text-dark-slate opacity-80">info@solymar.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded shadow-soft text-terracotta shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-header text-xl text-dark-slate mb-1">Business Hours</h4>
                <p className="font-body text-dark-slate opacity-80">Mon - Fri: 10:00 - 19:00 (CET)</p>
                <p className="font-body text-dark-slate opacity-80">Weekend: By private arrangement only</p>
              </div>
            </div>
          </div>

        </div>

        {/* Lead Form */}
        <div className="bg-white p-8 md:p-12 rounded shadow-xl relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold opacity-[0.03] rounded-bl-full pointer-events-none"></div>
          
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center fade-in py-16">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-3xl font-header text-dark-slate mb-4">Inquiry Received</h3>
              <p className="font-body text-dark-slate opacity-80">A senior advisor will contact you within the next 24 business hours to discuss your requirements discreetly.</p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-header text-dark-slate mb-2">Request a Private Consultation</h3>
              <p className="font-body text-dark-slate opacity-70 mb-8 text-sm">Please provide your details and an advisor will align with your preferences.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-2 opacity-70">First Name *</label>
                    <input required type="text" className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 focus:outline-none focus:border-terracotta font-body rounded transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-2 opacity-70">Last Name *</label>
                    <input required type="text" className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 focus:outline-none focus:border-terracotta font-body rounded transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-2 opacity-70">Email Address *</label>
                    <input required type="email" className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 focus:outline-none focus:border-terracotta font-body rounded transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-2 opacity-70">Phone Number *</label>
                    <input required type="tel" className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 focus:outline-none focus:border-terracotta font-body rounded transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-2 opacity-70">Preferred Contact Method</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="contact" defaultChecked className="accent-terracotta w-4 h-4 cursor-pointer" />
                      <span className="font-body text-sm text-dark-slate group-hover:text-terracotta transition-colors flex items-center gap-1"><Phone size={14}/> Phone Call</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="contact" className="accent-terracotta w-4 h-4 cursor-pointer" />
                      <span className="font-body text-sm text-dark-slate group-hover:text-terracotta transition-colors flex items-center gap-1"><MessageCircle size={14}/> WhatsApp</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="contact" className="accent-terracotta w-4 h-4 cursor-pointer" />
                      <span className="font-body text-sm text-dark-slate group-hover:text-terracotta transition-colors flex items-center gap-1"><Mail size={14}/> Email</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-2 opacity-70">Inquiry Details</label>
                  <textarea rows="4" placeholder="How can we assist you? (e.g., Interested in Golden Mile villas...)" className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 focus:outline-none focus:border-terracotta font-body rounded resize-none transition-colors"></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="btn-primary w-full shadow-lg">Submit Confidential Request</button>
                  <p className="text-center font-body text-xs text-dark-slate opacity-50 mt-4">Your information is handled with the utmost privacy.</p>
                </div>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;
