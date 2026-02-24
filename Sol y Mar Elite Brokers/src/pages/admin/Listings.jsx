import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Eye, EyeOff, Edit2, UploadCloud, Globe, Languages, Wand2, X } from 'lucide-react';

const Listings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [listings, setListings] = useState([
    { id: 'SYME-1024', name: 'Villa Alcuzcuz', zone: 'La Zagaleta', price: 'POA', status: 'Off-Market', isPublic: false, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=300&q=80' },
    { id: 'SYME-1025', name: 'Palacio del Mar', zone: 'Golden Mile', price: '€32.5M', status: 'Public', isPublic: true, image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=300&q=80' },
    { id: 'SYME-1026', name: 'Sierra Blanca Heights', zone: 'Sierra Blanca', price: '€8.5M', status: 'Under Offer', isPublic: true, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80' },
    { id: 'SYME-1027', name: 'Zen Retreat', zone: 'Nueva Andalucía', price: '€5.2M', status: 'Public', isPublic: true, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80' },
  ]);

  const toggleVisibility = (id) => {
    setListings(listings.map(l => {
      if(l.id === id) {
        const newIsPublic = !l.isPublic;
        return { ...l, isPublic: newIsPublic, status: newIsPublic ? 'Public' : 'Off-Market' };
      }
      return l;
    }));
  };

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="flex justify-between items-end mb-8 border-b border-olive/20 pb-4">
        <div>
          <h1 className="text-3xl font-serif text-espresso">Property Inventory</h1>
          <p className="text-sm font-light text-espresso/60 mt-1 uppercase tracking-widest text-[10px]">Manage Public & Off-Market Assets</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-espresso text-alabaster px-6 py-3 hover:bg-navy transition-colors rounded-sm flex items-center shadow-lg"
        >
          <Plus size={16} className="mr-2" />
          <span className="text-xs tracking-widest uppercase font-medium">Add Property</span>
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-sm shadow-sm border border-olive/10 flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-alabaster px-4 py-2 rounded-sm border border-espresso/10">
            <Search size={16} className="text-espresso/40 mr-2" />
            <input type="text" placeholder="Search Reference ID or Name..." className="bg-transparent border-none outline-none text-sm w-64 text-espresso" />
          </div>
          <select className="bg-alabaster border border-espresso/10 px-4 py-2 text-sm text-espresso outline-none rounded-sm">
            <option>All Zones</option>
            <option>La Zagaleta</option>
            <option>Golden Mile</option>
          </select>
          <select className="bg-alabaster border border-espresso/10 px-4 py-2 text-sm text-espresso outline-none rounded-sm">
            <option>All Statuses</option>
            <option>Public</option>
            <option>Off-Market</option>
          </select>
        </div>
        <div className="text-xs text-espresso/50 font-medium">
          Showing {listings.length} assets
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-sm shadow-sm border border-olive/10 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-alabaster border-b border-espresso/10 text-[10px] uppercase tracking-widest text-espresso/50">
              <th className="px-6 py-4 font-semibold">Asset</th>
              <th className="px-6 py-4 font-semibold">Ref ID</th>
              <th className="px-6 py-4 font-semibold">Zone</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((item, idx) => (
              <motion.tr 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={item.id} 
                className="border-b border-espresso/5 hover:bg-alabaster transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-12 rounded-sm overflow-hidden bg-espresso/5 flex-shrink-0 border border-espresso/10">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                    <span className="font-serif text-lg text-espresso">{item.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs font-mono text-espresso/60">{item.id}</span>
                </td>
                <td className="px-6 py-4 text-sm text-espresso/80 font-medium">{item.zone}</td>
                <td className="px-6 py-4 text-sm font-serif text-espresso">{item.price}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-[10px] uppercase tracking-wider font-semibold border ${
                    item.status === 'Public' ? 'bg-olive/10 text-olive border-olive/20' : 
                    item.status === 'Off-Market' ? 'bg-navy border-navy text-alabaster shadow-sm' : 
                    'bg-amber-50 text-amber-700 border-amber-200'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 pb-4 flex justify-end items-center h-full space-x-3 opacity-100 transition-opacity">
                  <button onClick={() => toggleVisibility(item.id)} className="p-2 text-espresso/40 hover:text-olive transition-colors rounded-sm hover:bg-olive/10" title="Toggle SPA Visibility">
                    {item.isPublic ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                  <button className="p-2 text-espresso/40 hover:text-navy transition-colors rounded-sm hover:bg-navy/10" title="Edit Asset">
                    <Edit2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-espresso/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl z-10 p-8"
            >
              <div className="flex justify-between items-center border-b border-espresso/10 pb-4 mb-8 sticky top-0 bg-white z-20">
                <h2 className="text-2xl font-serif text-espresso">Initiate New Asset</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-espresso/40 hover:text-espresso transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Col: Media & Core Info */}
                <div className="space-y-8">
                  <div className="border-2 border-dashed border-espresso/20 rounded-sm p-12 flex flex-col items-center justify-center text-center hover:bg-alabaster transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-olive/10 text-olive rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <UploadCloud size={32} />
                    </div>
                    <h3 className="text-lg font-serif text-espresso mb-1">4K Media Uplink</h3>
                    <p className="text-xs text-espresso/50 uppercase tracking-widest">DRAG & DROP CINEMATOGRAPHY</p>
                  </div>
                  
                  <div className="bg-alabaster p-4 border border-olive/20 rounded-sm flex items-start space-x-4">
                    <div className="mt-1 text-olive"><Wand2 size={20} /></div>
                    <div>
                      <h4 className="text-sm font-semibold text-espresso mb-1">Virtual Staging Active</h4>
                      <p className="text-xs text-espresso/60 leading-relaxed">AI will process raw schematics and apply the "Mediterranean Minimalist" token library to unfurnished spaces.</p>
                      <button className="text-[10px] uppercase tracking-widest font-bold text-navy mt-2 hover:underline">Configure Pipeline</button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-espresso/50">Asset Denomination</label>
                      <input type="text" className="w-full bg-transparent border-b border-espresso/20 py-2 outline-none focus:border-olive transition-colors font-serif text-xl" placeholder="e.g. Villa Cascades" />
                    </div>
                    <div className="flex gap-4">
                      <div className="space-y-1 w-1/2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-espresso/50">Zone</label>
                        <select className="w-full bg-transparent border-b border-espresso/20 py-2 outline-none focus:border-olive transition-colors font-serif text-lg">
                          <option>La Zagaleta</option>
                          <option>Golden Mile</option>
                        </select>
                      </div>
                      <div className="space-y-1 w-1/2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-espresso/50">Valuation</label>
                        <input type="text" className="w-full bg-transparent border-b border-espresso/20 py-2 outline-none focus:border-olive transition-colors font-serif text-lg" placeholder="€ / POA" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Col: Editorial & Localization */}
                <div className="space-y-8">
                  <div className="flex items-center justify-between border-b border-espresso/10 pb-2">
                    <h3 className="text-sm uppercase tracking-widest text-olive font-semibold">Editorial Narrative</h3>
                    <div className="flex space-x-2">
                       <span className="text-[10px] px-2 py-1 bg-navy text-alabaster rounded-sm cursor-pointer">EN</span>
                       <span className="text-[10px] px-2 py-1 border border-espresso/20 text-espresso/60 rounded-sm cursor-pointer hover:bg-alabaster">ES</span>
                       <span className="text-[10px] px-2 py-1 border border-espresso/20 text-espresso/60 rounded-sm cursor-pointer hover:bg-alabaster">DE</span>
                    </div>
                  </div>
                  
                  <textarea 
                    className="w-full h-48 bg-alabaster/50 border border-espresso/10 p-4 outline-none focus:border-olive transition-colors rounded-sm font-light text-espresso leading-relaxed resize-none" 
                    placeholder="Draft the estate's narrative..."
                  ></textarea>

                  <div className="bg-navy/5 p-4 border border-navy/10 rounded-sm flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Languages size={20} className="text-navy" />
                      <div>
                        <h4 className="text-sm font-semibold text-espresso">Auto-Translation Matrix</h4>
                        <p className="text-xs text-espresso/60">Using neural translation tuned for real estate dialect.</p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 bg-navy text-alabaster text-[10px] uppercase tracking-widest rounded-sm hover:bg-espresso transition-colors">Generate All</button>
                  </div>

                  <div className="flex items-center justify-between bg-alabaster p-4 border border-espresso/10 rounded-sm mt-8">
                     <span className="text-sm font-medium text-espresso">Visibility Status</span>
                     <select className="bg-transparent border border-espresso/20 py-1 px-3 outline-none text-sm text-espresso focus:border-olive rounded-sm cursor-pointer">
                        <option>Off-Market (Encrypted)</option>
                        <option>Public SPA Collection</option>
                     </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 border-t border-espresso/10 mt-12 pt-6">
                <button onClick={() => setIsModalOpen(false)} className="px-6 py-3 text-xs uppercase tracking-widest font-bold text-espresso/60 hover:text-espresso transition-colors">Cancel</button>
                <button className="px-8 py-3 bg-espresso text-alabaster text-xs uppercase tracking-widest font-bold hover:bg-navy transition-colors rounded-sm flex items-center">
                  <Globe size={16} className="mr-2" /> Publish Asset
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Listings;
