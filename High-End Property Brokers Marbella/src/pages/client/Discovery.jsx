import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Expand, SlidersHorizontal } from 'lucide-react';

const regions = ['All Regions', 'Golden Mile', 'Nueva Andalucía', 'Frontline Beach', 'Golf Valley'];

const properties = [
  { id: 'villa-aloha', name: 'Villa Aloha', region: 'Nueva Andalucía', type: 'Villa', price: '€4,950,000', beds: 5, baths: 5, sqft: '680 m²', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800' },
  { id: 'villa-sierra', name: 'Villa Sierra Blanca', region: 'Golden Mile', type: 'Villa', price: '€8,500,000', beds: 6, baths: 7, sqft: '1,200 m²', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { id: 'penthouse-marina', name: 'Marina Penthouse', region: 'Frontline Beach', type: 'Penthouse', price: '€3,200,000', beds: 3, baths: 3, sqft: '250 m²', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 'villa-los-naranjos', name: 'Los Naranjos Estate', region: 'Golf Valley', type: 'Villa', price: '€6,700,000', beds: 5, baths: 6, sqft: '950 m²', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800' },
  { id: 'golden-mile-mansion', name: 'Palacio de Oro', region: 'Golden Mile', type: 'Villa', price: '€14,000,000', beds: 8, baths: 10, sqft: '2,100 m²', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' },
  { id: 'golf-apartment', name: 'Las Brisas View', region: 'Golf Valley', type: 'Apartment', price: '€1,450,000', beds: 2, baths: 2, sqft: '140 m²', img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800' },
];

const Discovery = () => {
  const [activeRegion, setActiveRegion] = useState('All Regions');

  const filtered = activeRegion === 'All Regions' 
    ? properties 
    : properties.filter(p => p.region === activeRegion);

  return (
    <div className="bg-warm-white pb-24 fade-in">
      {/* Header */}
      <div className="bg-dark-slate text-warm-white py-16 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-header mb-4 text-white">Curated Collections</h1>
          <p className="font-body opacity-80 max-w-2xl mx-auto">Explore our exclusive portfolio of luxury real estate across Marbella's most prestigious postcodes.</p>
        </div>
      </div>

      <div className="container mt-12">
        {/* Filters and Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 w-full lg:w-auto">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-5 py-2 font-body text-sm font-bold transition-all rounded-full ${
                  activeRegion === region 
                    ? 'bg-terracotta text-white shadow-md' 
                    : 'bg-white text-dark-slate border border-dark-slate/10 hover:border-terracotta hover:text-terracotta'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 btn-secondary bg-white text-sm py-2 px-6 rounded-full self-end lg:self-auto">
            <SlidersHorizontal size={16} /> Filter Results
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(villa => (
            <Link to={`/listing/${villa.id}`} key={villa.id} className="group card bg-white overflow-hidden shadow-soft hover-lift cursor-pointer block">
              <div className="relative h-64 overflow-hidden">
                <img src={villa.img} alt={villa.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-terracotta text-white font-bold text-xs uppercase tracking-wider px-3 py-1 rounded">
                  {villa.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-terracotta text-sm mb-3 font-bold">
                  <MapPin size={16} /> {villa.region}
                </div>
                <h4 className="font-header text-2xl text-dark-slate mb-2 group-hover:text-terracotta transition-colors">{villa.name}</h4>
                <p className="text-xl font-body font-bold text-dark-slate mb-6">{villa.price}</p>
                
                <div className="flex justify-between items-center text-dark-slate opacity-70 text-sm border-t border-dark-slate/10 pt-4">
                  <div className="flex items-center gap-2"><Bed size={16} /> {villa.beds}</div>
                  <div className="flex items-center gap-2"><Bath size={16} /> {villa.baths}</div>
                  <div className="flex items-center gap-2"><Expand size={16} /> {villa.sqft}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-24 text-dark-slate opacity-60 font-body text-lg">
            No properties currently match this specific criterion. Please adjust your filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default Discovery;
