import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['Medical Dermatology', 'Cosmetic Dermatology', 'Acne Clinic', 'Skin Cancer Screening'];

const treatments = [
  { id: 'bespoke-laser', cat: 'Cosmetic Dermatology', name: 'Bespoke Laser Resurfacing', img: 'https://images.unsplash.com/photo-1616683838428-ec2f207ed457?auto=format&fit=crop&q=80&w=800' },
  { id: 'molecular-hydration', cat: 'Cosmetic Dermatology', name: 'Molecular Hydration Therapy', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800' },
  { id: 'cellular-renewal', cat: 'Cosmetic Dermatology', name: 'Cellular Renewal Peel', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800' },
  { id: 'clinical-acne', cat: 'Acne Clinic', name: 'Clinical Acne Management', img: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?auto=format&fit=crop&q=80&w=800' },
  { id: 'mole-mapping', cat: 'Skin Cancer Screening', name: 'Advanced Mole Mapping', img: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80&w=800' },
  { id: 'rosacea', cat: 'Medical Dermatology', name: 'Rosacea & Redness Protocol', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800' },
];

const Discovery = () => {
  const [activeTab, setActiveTab] = useState('Cosmetic Dermatology');

  const filtered = treatments.filter(t => t.cat === activeTab);

  return (
    <div className="container py-24 fade-in">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-5xl font-header text-slate-dark mb-6 tracking-wide">Discovery</h1>
        <p className="font-body text-slate opacity-80 leading-relaxed">
          Explore our spectrum of evidence-based treatments, categorized by clinical focus. Every protocol is bespoke, designed to address the unique physiology of your skin.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-slate-grey/20 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`text-sm tracking-widest uppercase pb-2 transition-all duration-300 ${
              activeTab === cat 
                ? 'text-slate-dark border-b-2 border-blush font-bold opacity-100' 
                : 'text-slate border-b-2 border-transparent hover:opacity-100 opacity-60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((t) => (
          <Link to={`/treatment/${t.id}`} key={t.id} className="group block h-full">
            <div className="relative overflow-hidden mb-6 h-96">
              <img 
                src={t.img} 
                alt={t.name}
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-slate-dark bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-700" />
              <div className="absolute bottom-4 left-4 bg-ivory px-4 py-2">
                <span className="text-xs uppercase tracking-widest text-slate font-bold">Details</span>
              </div>
            </div>
            <h4 className="font-header text-2xl text-slate-dark group-hover:text-blush transition-colors">{t.name}</h4>
          </Link>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="text-center py-24 text-slate opacity-60 font-body italic">
          More treatments coming soon in this category.
        </div>
      )}
    </div>
  );
};

export default Discovery;
