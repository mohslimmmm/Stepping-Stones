import { motion } from 'framer-motion';
import { Send, Calendar, MapPin, Phone, Instagram } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <header className="mb-12">
              <p className="text-sand uppercase tracking-[0.4em] text-xs font-bold mb-6">Inquiries</p>
              <h1 className="text-5xl md:text-6xl font-serif text-deep-grey mb-8">Begin Your <br /> Transformation</h1>
              <p className="text-deep-grey/60 text-lg font-light leading-relaxed max-w-md">
                We accept a limited number of projects each year to ensure the highest level of attention and bespoke service.
              </p>
            </header>

            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-linen rounded-full flex items-center justify-center text-sand flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">The Studio</h3>
                  <p className="text-sm text-deep-grey/60">55 Main Street, Suite 202<br />East Hampton, NY 11937</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-linen rounded-full flex items-center justify-center text-sand flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Connect</h3>
                  <p className="text-sm text-deep-grey/60">631.555.0129<br />studio@saltandlight.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-linen rounded-full flex items-center justify-center text-sand flex-shrink-0">
                  <Instagram size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Instagram</h3>
                  <p className="text-sm text-deep-grey/60">@saltandlightinteriors</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linen p-8 md:p-12 rounded-8">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-sand text-white rounded-full flex items-center justify-center mb-8">
                  <Send size={32} />
                </div>
                <h2 className="text-3xl font-serif text-deep-grey mb-4">Message Sent</h2>
                <p className="text-deep-grey/60 font-light max-w-xs mx-auto mb-8">
                  Thank you for your inquiry. A member of our design team will contact you within 48 hours to schedule a consultation.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-widest font-bold text-sand underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-deep-grey/40">Name</label>
                    <input type="text" required className="w-full bg-transparent border-b border-sand/30 py-2 focus:border-sand outline-none font-light" placeholder="Lula Henderson" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-deep-grey/40">Email</label>
                    <input type="email" required className="w-full bg-transparent border-b border-sand/30 py-2 focus:border-sand outline-none font-light" placeholder="hello@design.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-grey/40">Project Location</label>
                  <select className="w-full bg-transparent border-b border-sand/30 py-2 focus:border-sand outline-none font-light">
                    <option>East Hampton</option>
                    <option>Southampton</option>
                    <option>Bridgehampton</option>
                    <option>Amagansett</option>
                    <option>Montauk</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-grey/40">Scope of Work</label>
                  <select className="w-full bg-transparent border-b border-sand/30 py-2 focus:border-sand outline-none font-light">
                    <option>Full Interior Furnishings</option>
                    <option>Renovation & Interior Architecture</option>
                    <option>New Build Interior Design</option>
                    <option>Styling & Curation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-grey/40">Timeline</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="timeline" className="accent-sand" />
                      <span className="text-sm font-light text-deep-grey/60">Immediate</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="timeline" className="accent-sand" />
                      <span className="text-sm font-light text-deep-grey/60">6-12 Months</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-grey/40">Desired Transformation</label>
                  <textarea rows="4" className="w-full bg-transparent border border-sand/30 rounded-8 p-4 focus:border-sand outline-none font-light text-sm" placeholder="Tell us about your space and your vision..."></textarea>
                </div>

                <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center space-x-2">
                  <span>Request Consultation</span>
                  <Calendar size={18} />
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
