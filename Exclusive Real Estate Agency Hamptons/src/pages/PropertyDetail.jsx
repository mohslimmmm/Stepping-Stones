import React from 'react';
import { Button } from '../components/Button';
import { MapPin, Bed, Bath, Square, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const PropertyDetail = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-background min-h-screen relative pb-32"
    >
      {/* Aerial Drone Gallery - Hero */}
      <div className="h-[85vh] w-full relative group overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000" 
          alt="Further Lane Estate Aerial" 
          className="w-full h-full object-cover origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent"></div>
        <div className="absolute top-32 left-8 md:left-12 z-20">
          <Link to="/discovery" className="text-background/80 flex items-center hover:text-accentBlue transition-colors font-body uppercase text-[10px] tracking-[0.2em] font-bold">
            <span className="transform group-hover:-translate-x-1 transition-transform inline-block mr-3">&larr;</span> Back to Portfolio
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 max-w-7xl mx-auto z-10">
          <motion.div initial="hidden" animate="show" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="inline-block bg-background px-4 py-2 text-primary font-body text-[10px] tracking-[0.2em] uppercase font-bold mb-8 shadow-2xl">
              Exclusive Listing
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl lg:text-8xl text-background mb-6 leading-[1.1] tracking-tight max-w-4xl">Further Lane Estate</motion.h1>
            <motion.p variants={fadeUp} className="font-body text-xl md:text-2xl text-background/80 font-light">East Hampton, New York</motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }} 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-primary/10 mb-16"
            >
               <motion.div variants={fadeUp} className="flex flex-col text-primary">
                 <Bed className="h-6 w-6 mb-4 text-accentBlue opacity-80" strokeWidth={1.5} />
                 <span className="font-body text-lg font-light tracking-wide">7 Bedrooms</span>
               </motion.div>
               <motion.div variants={fadeUp} className="flex flex-col text-primary">
                 <Bath className="h-6 w-6 mb-4 text-accentBlue opacity-80" strokeWidth={1.5} />
                 <span className="font-body text-lg font-light tracking-wide">9 Bathrooms</span>
               </motion.div>
               <motion.div variants={fadeUp} className="flex flex-col text-primary">
                 <Square className="h-6 w-6 mb-4 text-accentBlue opacity-80" strokeWidth={1.5} />
                 <span className="font-body text-lg font-light tracking-wide">12,500 Sq Ft</span>
               </motion.div>
               <motion.div variants={fadeUp} className="flex flex-col text-primary">
                 <MapPin className="h-6 w-6 mb-4 text-accentBlue opacity-80" strokeWidth={1.5} />
                 <span className="font-body text-lg font-light tracking-wide">Oceanfront</span>
               </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }} 
              variants={staggerContainer}
              className="prose max-w-none text-primary/80 font-body text-lg leading-relaxed mb-24"
            >
              <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl text-primary mb-10 tracking-wide">Historic East Hampton Grandeur</motion.h2>
              <motion.p variants={fadeUp} className="mb-8 font-light text-primary/70">
                Positioned on one of the most coveted stretches of the Atlantic Ocean, the Further Lane Estate represents a once-in-a-generation opportunity. Originally designed in 1895 and meticulously restored, this legacy compound seamlessly blends historic Gilded Age elegance with state-of-the-art modern amenities.
              </motion.p>
              <motion.p variants={fadeUp} className="font-light text-primary/70">
                The property spans over 4 acres of pristine oceanfront, featuring formal sunken gardens, a 50-foot heated gunite pool echoing the horizon, and a private pathway directly to the white sands of East Hampton beach. The interiors boast hand-carved millwork, six original fireplaces, and soaring dual-height ceilings in the main reception hall.
              </motion.p>
            </motion.div>

            {/* Gallery Grid */}
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }} 
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeUp} className="font-heading text-3xl text-primary border-b border-primary/10 pb-6 mb-12">The Archives</motion.h3>
              <div className="grid grid-cols-2 gap-6">
                 <motion.div variants={fadeUp} className="overflow-hidden bg-white/50 border border-primary/5 p-2 shadow-sm">
                   <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" alt="Interior" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-1000" />
                 </motion.div>
                 <motion.div variants={fadeUp} className="overflow-hidden bg-white/50 border border-primary/5 p-2 shadow-sm">
                   <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800" alt="Pool" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-1000" />
                 </motion.div>
                 <motion.div variants={fadeUp} className="overflow-hidden col-span-2 bg-white/50 border border-primary/5 p-2 shadow-sm">
                   <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" alt="Living Room" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000" />
                 </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-40 bg-white p-10 shadow-2xl border border-primary/5">
              <h3 className="font-heading text-4xl text-primary mb-4">$45,000,000</h3>
              <p className="font-body text-primary/50 mb-12 uppercase tracking-[0.2em] text-[10px] font-bold">Offer Guideline</p>
              
              <div className="space-y-4">
                <Button className="w-full text-center flex justify-center py-5">Schedule Private Showing</Button>
                <Button variant="secondary" className="w-full text-center flex justify-center py-5">Request Confidential Dossier</Button>
              </div>

              <div className="mt-16 pt-10 border-t border-primary/10">
                <p className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-accentBlue mb-6">Principal Broker</p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary/5 rounded-full overflow-hidden mr-6 shadow-sm border border-primary/10">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Broker" className="w-full h-full object-cover grayscale opacity-90" />
                  </div>
                  <div>
                    <h4 className="font-heading text-2xl text-primary mb-1">Alexander Sterling</h4>
                    <p className="font-body text-xs tracking-wider uppercase text-primary/50">Managing Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
