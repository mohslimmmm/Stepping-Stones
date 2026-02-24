import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Collection = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ["All", "The Golden Mile", "La Zagaleta Exclusives", "Frontline Beach", "Architectural Modern"];

  const properties = [
    {
      id: "villa-alcuzcuz",
      title: "Villa Alcuzcuz",
      location: "La Zagaleta",
      price: "POA",
      beds: 7, baths: 9, build: 1450,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80",
      category: "La Zagaleta Exclusives",
      span: "md:col-span-2 md:row-span-2" // Large feature card
    },
    {
      id: "mirage-estate",
      title: "Mirage Estate",
      location: "Golden Mile",
      price: "€ 14,900,000",
      beds: 5, baths: 5, build: 850,
      image: "https://images.unsplash.com/photo-1600607687931-cebf1a8c5eb9?auto=format&fit=crop&w=1200&q=80",
      category: "The Golden Mile",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: "palacio-del-mar",
      title: "Palacio del Mar",
      location: "Frontline Beach",
      price: "€ 32,500,000",
      beds: 9, baths: 12, build: 2200,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      category: "Frontline Beach",
      span: "md:col-span-1 md:row-span-2" // Tall feature
    },
    {
      id: "sierra-blanca-heights",
      title: "Sierra Blanca Heights",
      location: "Sierra Blanca",
      price: "€ 8,500,000",
      beds: 5, baths: 6, build: 720,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      category: "Architectural Modern",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: "zen-retreat",
      title: "Zen Retreat",
      location: "Nueva Andalucía",
      price: "€ 5,200,000",
      beds: 4, baths: 4, build: 540,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      category: "Architectural Modern",
      span: "md:col-span-2 md:row-span-1" // Wide feature
    }
  ];

  const filteredProperties = activeTab === 'All' 
    ? properties 
    : properties.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-alabaster pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-espresso mb-6"
          >
            The Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-espresso/70 font-light"
          >
            A meticulously curated selection of the most distinguished properties in Southern Europe.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 px-2 border-b border-olive/20 pb-4 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 font-medium
                ${activeTab === tab 
                  ? 'text-navy border-b-2 border-navy -mb-[18px]' 
                  : 'text-espresso/40 hover:text-espresso'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Asymmetrical Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] md:auto-rows-[400px] gap-6">
          <AnimatePresence>
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`group relative overflow-hidden bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-500 ${property.span || ''}`}
              >
                <Link to={`/property/${property.id}`} className="block w-full h-full">
                  <div className="w-full h-full overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                    />
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-xs font-sans text-alabaster/80 uppercase tracking-widest mb-2 block font-semibold">{property.location}</span>
                        <h2 className="text-3xl font-serif text-alabaster mb-2 drop-shadow-md">{property.title}</h2>
                        <div className="text-lg text-alabaster/90 font-medium">{property.price}</div>
                      </div>
                    </div>
                    
                    {/* Hover Stats Details */}
                    <div className="mt-6 flex space-x-6 text-sm text-alabaster/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border-t border-alabaster/20 pt-4">
                      <span className="flex items-center"><strong className="mr-1">{property.beds}</strong> Beds</span>
                      <span className="flex items-center"><strong className="mr-1">{property.baths}</strong> Baths</span>
                      <span className="flex items-center"><strong className="mr-1">{property.build}</strong> m² Build</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProperties.length === 0 && (
          <div className="py-32 text-center text-espresso/50 font-serif text-xl border border-dashed border-olive/30 bg-white">
            No properties currently available in this collection.
          </div>
        )}

      </div>
    </div>
  );
};

export default Collection;
