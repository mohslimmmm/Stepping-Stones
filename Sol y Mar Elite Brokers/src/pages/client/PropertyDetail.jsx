import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Play, Calendar, Droplet, Maximize, MapPin, Check } from 'lucide-react';
import { useState } from 'react';

const PropertyDetail = () => {
  const { id } = useParams();
  const { scrollY } = useScroll();
  
  // Parallax effects for the hero image
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [activeMaterial, setActiveMaterial] = useState('travertine');

  const materials = {
    travertine: { name: "Italian Travertine", desc: "Hand-selected from Tivoli quarries for exterior cladding and main living areas." },
    wood: { name: "Iroko Wood", desc: "Sustainably sourced African hardwood used throughout the master suite and custom joinery." },
    stone: { name: "Grigio Alpi Stone", desc: "A refined architectural aesthetic complementing the Andalusian light." }
  };

  return (
    <div className="bg-alabaster min-h-screen">
      
      {/* Immersive Hero */}
      <div className="relative h-[90vh] overflow-hidden bg-espresso">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80" 
            alt="Villa Alcuzcuz"
            className="w-full h-full object-cover opacity-80"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-alabaster via-transparent to-transparent"></div>
        
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end pb-24 md:pb-16 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <div className="flex items-center space-x-2 text-olive mb-4">
              <MapPin size={16} />
              <span className="text-xs font-sans uppercase tracking-[0.2em] font-semibold text-espresso">La Zagaleta Exclusives</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-espresso leading-none mb-6">Villa Alcuzcuz</h1>
            <div className="flex space-x-8 text-espresso/70 text-sm tracking-wide font-medium">
              <span className="border-b border-olive/30 pb-1">7 Bedrooms</span>
              <span className="border-b border-olive/30 pb-1">9 Bathrooms</span>
              <span className="border-b border-olive/30 pb-1">1,450 m² Build</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:flex bg-espresso text-alabaster px-8 py-5 rounded-sm items-center space-x-4 cursor-pointer hover:bg-navy transition-colors shadow-2xl"
          >
            <Play size={20} fill="currentColor" />
            <span className="font-sans text-sm tracking-widest uppercase">Cinematic Tour</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row relative">
        
        {/* Main Content (Story-scrolling) */}
        <div className="w-full lg:w-2/3 pr-0 lg:pr-24 space-y-32">
          
          {/* Narrative */}
          <section>
            <h2 className="text-xs text-olive uppercase tracking-[0.2em] mb-8">The Narrative</h2>
            <p className="text-2xl font-serif text-espresso leading-relaxed mb-8">
              A masterful expression of organic architecture, Villa Alcuzcuz sits gracefully on the edge of a pristine reserve, offering uncompromised Mediterranean vistas and absolute privacy.
            </p>
            <div className="prose prose-lg text-espresso/70 font-light">
              <p>
                Designed by award-winning architects, this residence redefines luxury living in Marbella. The transition between interior and exterior spaces is seamless, maximizing the Andalusian light and creating an atmosphere of profound tranquility. 
              </p>
              <p className="mt-6">
                Every detail has been curated to create a tactile, grounding experience, from the water features that greet you at the entrance to the vast zero-edge pool that seemingly spills into the horizon.
              </p>
            </div>
          </section>

          {/* Video Tour Integration */}
          <section>
            <div className="aspect-video bg-espresso/5 w-full relative group cursor-pointer overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Video Thumbnail"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-alabaster/90 backdrop-blur-sm rounded-full flex items-center justify-center text-espresso group-hover:bg-olive group-hover:text-alabaster transition-colors duration-500">
                  <Play size={32} fill="currentColor" className="ml-2" />
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-espresso/50 uppercase tracking-widest mt-6">Press to play 4K Cinematic Tour</p>
          </section>

          {/* Full Bleed Image Gallery Snippet */}
          <section className="grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-[21/9] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1600607687931-cebf1a8c5eb9?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover" alt="Interior" />
            </div>
            <div className="aspect-square overflow-hidden">
               <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover" alt="Bathroom" />
            </div>
            <div className="aspect-square overflow-hidden">
               <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover" alt="Detail" />
            </div>
          </section>

          {/* Interactive Material Highlights */}
          <section className="bg-white p-12 border border-olive/10">
            <h2 className="text-3xl font-serif text-espresso mb-12">The Materials</h2>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/3 flex flex-col space-y-4">
                {Object.keys(materials).map((key) => (
                  <button 
                    key={key}
                    onClick={() => setActiveMaterial(key)}
                    className={`text-left text-sm uppercase tracking-widest py-4 border-b transition-colors ${activeMaterial === key ? 'border-olive text-olive font-semibold' : 'border-espresso/10 text-espresso/40 hover:text-espresso'}`}
                  >
                    {materials[key].name}
                  </button>
                ))}
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <motion.div
                  key={activeMaterial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-serif text-espresso mb-4">{materials[activeMaterial].name}</h3>
                  <p className="text-espresso/70 font-light leading-relaxed">{materials[activeMaterial].desc}</p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        {/* Sticky Sidebar Widget */}
        <div className="w-full lg:w-1/3 mt-16 lg:mt-0 relative">
          <div className="sticky top-32 glass-light p-8 md:p-10 shadow-xl rounded-sm">
            <h3 className="text-xl font-serif text-espresso mb-2">Interested in this estate?</h3>
            <div className="text-3xl font-serif text-navy mb-8">POA</div>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-espresso/50">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-espresso/20 py-2 outline-none focus:border-olive transition-colors font-serif" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-espresso/50">Preferred Contact</label>
                <input type="email" className="w-full bg-transparent border-b border-espresso/20 py-2 outline-none focus:border-olive transition-colors font-serif" placeholder="Email or Phone Number" />
              </div>
              
              <button 
                type="button" 
                className="w-full bg-espresso text-alabaster py-4 mt-4 rounded-sm flex justify-center items-center space-x-2 hover:bg-navy transition-all hover-lift"
              >
                <Calendar size={18} />
                <span className="text-sm tracking-wide">Schedule Private Viewing</span>
              </button>

              <div className="pt-6 mt-6 border-t border-espresso/10">
                <p className="flex items-start text-xs text-espresso/60 mb-2">
                  <Check size={14} className="text-olive mr-2 mt-0.5 flex-shrink-0" />
                  <span>Discrete viewing arrangements</span>
                </p>
                <p className="flex items-start text-xs text-espresso/60 mb-2">
                  <Check size={14} className="text-olive mr-2 mt-0.5 flex-shrink-0" />
                  <span>NDA and proof of funds may be required</span>
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyDetail;
