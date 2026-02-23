import React, { useState } from 'react';
import { Card } from '../components/Card';
import { motion, AnimatePresence } from 'framer-motion';

const PROPERTY_DATA = [
  { id: 1, region: 'easthampton', title: 'Further Lane Estate', subtitle: 'East Hampton, NY • 7 Beds • Oceanfront', price: '$45,000,000', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800' },
  { id: 2, region: 'southampton', title: 'Meadow Lane Compound', subtitle: 'Southampton, NY • 9 Beds • Bay Access', price: '$38,500,000', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 3, region: 'montauk', title: 'Montauk Point Modern', subtitle: 'Montauk, NY • 5 Beds • Cliffside', price: '$22,000,000', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { id: 4, region: 'rentals', title: 'Lily Pond Lane Summer', subtitle: 'East Hampton, NY • 6 Beds • Aug-LD', price: '$450,000 /mo', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
  { id: 5, region: 'southampton', title: 'Gin Lane Historic', subtitle: 'Southampton, NY • 12 Beds • Oceanfront', price: '$55,000,000', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { id: 6, region: 'easthampton', title: 'Georgica Pond Retreat', subtitle: 'East Hampton, NY • 8 Beds • Waterfront', price: '$32,000,000', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const Discovery = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'southampton', label: 'Southampton' },
    { id: 'easthampton', label: 'East Hampton' },
    { id: 'montauk', label: 'Montauk' },
    { id: 'rentals', label: 'Summer Rentals' }
  ];

  const filteredProperties = activeTab === 'all' 
    ? PROPERTY_DATA 
    : PROPERTY_DATA.filter(p => p.region === activeTab);

  return (
    <div className="pt-32 min-h-screen bg-background pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="mb-16"
        >
          <motion.h1 variants={fadeUp} className="font-heading text-6xl md:text-7xl text-primary mb-8 tracking-wide">Discovery Portfolio</motion.h1>
          <motion.p variants={fadeUp} className="font-body text-primary/70 text-lg max-w-2xl leading-relaxed">
            Explore our globally curated selection of extraordinary Hamptons properties. From legacy oceanfront compounds to architectural masterpieces.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex overflow-x-auto border-b border-primary/10 mb-20 scrollbar-hide"
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-6 px-8 font-body text-[10px] tracking-[0.2em] uppercase transition-colors relative ${
                activeTab === tab.id ? 'text-primary font-bold' : 'text-primary/50 hover:text-primary transition-all duration-300'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeFilterIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accentBlue"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map(listing => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={listing.id}
              >
                <Card 
                  image={listing.image}
                  title={listing.title}
                  subtitle={listing.subtitle}
                  price={listing.price}
                  linkTo={`/property/${listing.id}`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProperties.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-32 font-body text-primary/40 text-[10px] uppercase tracking-[0.2em] font-bold"
          >
            No properties currently available in this curated collection.
          </motion.div>
        )}
      </div>
    </div>
  );
};
