import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Medical Dermatology', 'Cosmetic Dermatology', 'Acne Clinic', 'Skin Cancer Screening'];

const treatments = [
  { id: 'bespoke-laser', cat: 'Cosmetic Dermatology', name: 'Bespoke Laser Resurfacing', img: 'https://images.unsplash.com/photo-1616683838428-ec2f207ed457?auto=format&fit=crop&q=80&w=800' },
  { id: 'molecular-hydration', cat: 'Cosmetic Dermatology', name: 'Molecular Hydration Therapy', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800' },
  { id: 'cellular-renewal', cat: 'Cosmetic Dermatology', name: 'Cellular Renewal Peel', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800' },
  { id: 'clinical-acne', cat: 'Acne Clinic', name: 'Clinical Acne Management', img: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?auto=format&fit=crop&q=80&w=800' },
  { id: 'mole-mapping', cat: 'Skin Cancer Screening', name: 'Advanced Mole Mapping', img: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80&w=800' },
  { id: 'rosacea', cat: 'Medical Dermatology', name: 'Rosacea & Redness Protocol', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Discovery = () => {
  const [activeTab, setActiveTab] = useState('Cosmetic Dermatology');

  const filtered = treatments.filter(t => t.cat === activeTab);

  return (
    <div className="container py-32 min-h-[90vh]">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-header text-slate-dark mb-8 tracking-wide">Discovery</motion.h1>
        <motion.p variants={fadeUp} className="font-body text-slate-grey opacity-80 leading-relaxed text-lg">
          Explore our spectrum of evidence-based treatments, categorized by clinical focus. Every protocol is bespoke, designed to address the unique physiology of your skin.
        </motion.p>
      </motion.div>

      {/* Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20 border-b border-slate-grey/10 pb-4"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`text-xs tracking-widest uppercase pb-4 transition-all duration-300 relative ${
              activeTab === cat 
                ? 'text-slate-dark font-bold' 
                : 'text-slate-grey hover:text-slate-dark opacity-70 hover:opacity-100'
            }`}
          >
            {cat}
            {activeTab === cat && (
              <motion.div 
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-px bg-slate-dark"
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
          {filtered.map((t) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              key={t.id}
            >
              <Link to={`/treatment/${t.id}`} className="group block h-full">
                <div className="relative overflow-hidden mb-6 h-[400px]">
                  <img 
                    src={t.img} 
                    alt={t.name}
                    className="w-full h-full object-cover grayscale-[0.6] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-slate-dark/20 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute bottom-6 left-6 bg-ivory/90 backdrop-blur px-6 py-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[10px] uppercase tracking-widest text-slate-dark font-bold">Protocol Details</span>
                  </div>
                </div>
                <h4 className="font-header text-3xl text-slate-dark group-hover:text-soft-blush-dark transition-colors">{t.name}</h4>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filtered.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-center py-24 text-slate-grey opacity-60 font-body italic"
        >
          More treatments coming soon in this clinical category.
        </motion.div>
      )}
    </div>
  );
};

export default Discovery;
