import { useState } from 'react';
import { UploadCloud, Image as ImageIcon, Save, X } from 'lucide-react';

const EditForm = () => {
  const [activeLang, setActiveLang] = useState('en');

  return (
    <div className="fade-in max-w-5xl mx-auto pb-24">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-header text-dark-slate mb-2">Property Mandate</h2>
          <p className="text-dark-slate opacity-80 font-body">Add a new elite property to the Sol y Mar portfolio.</p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary">Cancel</button>
          <button className="btn-primary flex items-center gap-2"><Save size={18} /> Save Mandate</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-white p-8 rounded shadow-sm border border-dark-slate/10">
            <h3 className="text-xl font-header text-dark-slate font-bold mb-6 border-b border-dark-slate/10 pb-4">Core Information</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-2 opacity-70">Property Title</label>
                <input type="text" placeholder="e.g., Villa Aloha" className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 rounded focus:outline-none focus:border-terracotta font-body" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-2 opacity-70">Internal Ref Number</label>
                  <input type="text" placeholder="V-ALOHA-01" className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 rounded focus:outline-none focus:border-terracotta font-body" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-2 opacity-70">Listing Price (€)</label>
                  <input type="text" placeholder="4,950,000" className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 rounded focus:outline-none focus:border-terracotta font-body" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-2 opacity-70">Property Type</label>
                  <select className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 rounded focus:outline-none focus:border-terracotta font-body cursor-pointer">
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Apartment</option>
                    <option>Townhouse</option>
                    <option>Plot</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-2 opacity-70">Marbella Zone</label>
                  <select className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 rounded focus:outline-none focus:border-terracotta font-body cursor-pointer">
                    <option>Golden Mile</option>
                    <option>Nueva Andalucía</option>
                    <option>Golf Valley</option>
                    <option>Frontline Beach</option>
                    <option>Puerto Banús</option>
                    <option>Sierra Blanca</option>
                    <option>La Zagaleta</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded shadow-sm border border-dark-slate/10">
            <div className="flex justify-between items-center mb-6 border-b border-dark-slate/10 pb-4">
              <h3 className="text-xl font-header text-dark-slate font-bold">Marketing Description</h3>
              <div className="flex bg-warm-white rounded-lg p-1 border border-dark-slate/10">
                <button 
                  onClick={() => setActiveLang('en')}
                  className={`px-4 py-1 text-sm font-bold rounded-md transition-colors ${activeLang === 'en' ? 'bg-white shadow text-terracotta' : 'text-dark-slate opacity-60'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => setActiveLang('es')}
                  className={`px-4 py-1 text-sm font-bold rounded-md transition-colors ${activeLang === 'es' ? 'bg-white shadow text-terracotta' : 'text-dark-slate opacity-60'}`}
                >
                  Español
                </button>
              </div>
            </div>
            
            <textarea 
              rows="8" 
              placeholder={activeLang === 'en' ? "Enter full compelling property description..." : "Introduzca la descripción completa de la propiedad..."}
              className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 rounded focus:outline-none focus:border-terracotta font-body resize-y"
            ></textarea>
          </div>

        </div>

        {/* Sidebar Settings */}
        <div className="space-y-8">
          
          <div className="bg-white p-6 rounded shadow-sm border border-dark-slate/10">
            <h3 className="text-lg font-header text-dark-slate font-bold mb-4">Specs & Metrics</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-1 opacity-70">Bedrooms</label>
                <input type="number" className="w-full px-3 py-2 bg-warm-white border border-dark-slate/20 rounded focus:outline-none focus:border-terracotta font-body" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-1 opacity-70">Bathrooms</label>
                <input type="number" className="w-full px-3 py-2 bg-warm-white border border-dark-slate/20 rounded focus:outline-none focus:border-terracotta font-body" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-1 opacity-70">Built Area (m²)</label>
                <input type="number" className="w-full px-3 py-2 bg-warm-white border border-dark-slate/20 rounded focus:outline-none focus:border-terracotta font-body" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-dark-slate mb-1 opacity-70">Plot Size (m²)</label>
                <input type="number" className="w-full px-3 py-2 bg-warm-white border border-dark-slate/20 rounded focus:outline-none focus:border-terracotta font-body" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow-sm border border-dark-slate/10">
            <h3 className="text-lg font-header text-dark-slate font-bold mb-4">Media Assets</h3>
            
            <div className="border-2 border-dashed border-dark-slate/20 rounded-lg p-8 text-center bg-warm-white hover:bg-white hover:border-terracotta transition-colors cursor-pointer mb-4">
              <UploadCloud size={32} className="mx-auto mb-2 text-terracotta" />
              <p className="text-sm font-bold text-dark-slate mb-1">Click to upload imagery</p>
              <p className="text-xs text-dark-slate opacity-60">High-res JPG/PNG, Virtual Tour Links, or PDF Floor Plans.</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-warm-white border border-dark-slate/10 rounded">
                <div className="flex items-center gap-2">
                  <ImageIcon size={16} className="text-dark-slate opacity-60" />
                  <span className="text-sm text-dark-slate">hero_exterior_1.jpg</span>
                </div>
                <button className="text-red-500 hover:text-red-700"><X size={16} /></button>
              </div>
              <div className="flex items-center justify-between p-2 bg-warm-white border border-dark-slate/10 rounded">
                <div className="flex items-center gap-2">
                  <ImageIcon size={16} className="text-dark-slate opacity-60" />
                  <span className="text-sm text-dark-slate">living_room_main.jpg</span>
                </div>
                <button className="text-red-500 hover:text-red-700"><X size={16} /></button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow-sm border border-dark-slate/10">
             <h3 className="text-lg font-header text-dark-slate font-bold mb-4">Listing Status</h3>
             <select className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 rounded focus:outline-none focus:border-terracotta font-body cursor-pointer font-bold">
                <option value="active">Active (Public)</option>
                <option value="pocket">Off-Market (Pocket Listing)</option>
                <option value="offer">Under Offer</option>
                <option value="sold">Sold</option>
                <option value="draft">Draft / Coming Soon</option>
              </select>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EditForm;
