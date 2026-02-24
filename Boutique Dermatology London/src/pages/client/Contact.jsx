import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      
      {/* Header */}
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto text-center border-b border-foreground/10">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Schedule your <span className="italic text-primary">Consultation</span>
        </h1>
        <p className="max-w-2xl mx-auto text-foreground/70 font-light leading-relaxed">
          Our patient coordination team is available to assist with your bespoke treatment plan. Please use the form below to request an appointment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* Contact Form */}
        <div className="lg:w-7/12">
          <h2 className="text-2xl font-serif mb-8 tracking-wide">Patient Details</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full bg-transparent border-b border-foreground/30 py-3 text-foreground focus:outline-none focus:border-primary transition-colors peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="firstName" 
                  className="absolute left-0 top-3 text-foreground/50 text-sm font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs"
                >
                  First Name
                </label>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full bg-transparent border-b border-foreground/30 py-3 text-foreground focus:outline-none focus:border-primary transition-colors peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="lastName" 
                  className="absolute left-0 top-3 text-foreground/50 text-sm font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs"
                >
                  Last Name
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-foreground/30 py-3 text-foreground focus:outline-none focus:border-primary transition-colors peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-3 text-foreground/50 text-sm font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs"
                >
                  Email Address
                </label>
              </div>
               <div className="relative">
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-transparent border-b border-foreground/30 py-3 text-foreground focus:outline-none focus:border-primary transition-colors peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="phone" 
                  className="absolute left-0 top-3 text-foreground/50 text-sm font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs"
                >
                  Phone Number
                </label>
              </div>
            </div>

            <div className="relative">
              <select 
                id="interest"
                className="w-full bg-transparent border-b border-foreground/30 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none font-light"
              >
                <option value="" disabled selected className="text-background">Primary Interest</option>
                <option value="medical" className="text-background">Medical Dermatology</option>
                <option value="cosmetic" className="text-background">Cosmetic Enhancements</option>
                <option value="acne" className="text-background">Acne Management</option>
                <option value="other" className="text-background">Other / Unsure</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-foreground/50">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            <div className="relative pt-4">
              <textarea 
                id="message" 
                rows="4"
                className="w-full bg-transparent border-b border-foreground/30 py-3 text-foreground focus:outline-none focus:border-primary transition-colors peer resize-none"
                placeholder=" "
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-0 top-6 text-foreground/50 text-sm font-light transition-all peer-focus:-top-1 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-1 peer-valid:text-xs"
              >
                Details or Specific Concerns
              </label>
            </div>

            <button 
              type="button" 
              className="w-full bg-primary text-background py-4 uppercase tracking-widest text-sm font-semibold hover:bg-primary-hover transition-colors"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Info & Map Sidebar */}
        <div className="lg:w-5/12 space-y-12">
          
          <div className="bg-foreground/5 p-10 border-l-4 border-primary">
            <h3 className="font-serif text-2xl mb-8">Clinic Details</h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-4 mt-1 flex-shrink-0" />
                <span className="font-light text-foreground/80 leading-relaxed">
                  112 Harley Street<br />
                  Marylebone, London<br />
                  W1G 7JQ
                </span>
              </li>
              <li className="flex items-center">
                 <Phone className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                 <span className="font-light text-foreground/80">+44 (0) 20 7123 4567</span>
              </li>
              <li className="flex items-center">
                 <Mail className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                 <span className="font-light text-foreground/80">bookings@harleyskinbespoke.com</span>
              </li>
              <li className="flex items-start">
                 <Clock className="w-5 h-5 text-primary mr-4 flex-shrink-0 mt-1" />
                 <div className="font-light text-foreground/80">
                   <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                   <p className="mt-1">Sat: 10:00 AM - 4:00 PM</p>
                   <p className="mt-1">Sun: Closed</p>
                 </div>
              </li>
            </ul>
          </div>

          <div className="h-64 relative border border-foreground/20 overflow-hidden filter grayscale contrast-125 opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9079313200787!2d-0.14918738422971212!3d51.51490211806371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad501cc9381%3A0x6bba6cc03758801d!2sHarley%20St%2C%20London!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none bg-background/20 mix-blend-overlay" />
          </div>

        </div>

      </div>
    </div>
  );
}
