import { useState } from 'react';
import { Save, X } from 'lucide-react';

const EditForm = () => {
  const [type, setType] = useState('treatment'); // 'treatment' or 'product'

  return (
    <div className="fade-in max-w-4xl mx-auto">
      <div className="mb-8 border-b border-slate-grey/20 pb-4">
        <h2 className="text-3xl font-header text-slate-dark mb-2">Protocol & Product Formulator</h2>
        <p className="text-slate opacity-80 font-body">Add new clinical offerings or update existing regimens and retail products.</p>
      </div>

      <div className="bg-white border border-slate-grey/20 p-8 shadow-sm">
        
        {/* Type Selector */}
        <div className="flex gap-6 mb-8 border-b border-slate-grey/10 pb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="type" 
              value="treatment" 
              checked={type === 'treatment'} 
              onChange={() => setType('treatment')}
              className="accent-slate-dark"
            />
            <span className="font-body text-slate-dark uppercase tracking-widest text-sm font-bold">Clinical Treatment</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="type" 
              value="product" 
              checked={type === 'product'} 
              onChange={() => setType('product')}
              className="accent-slate-dark"
            />
            <span className="font-body text-slate-dark uppercase tracking-widest text-sm font-bold">Retail Product</span>
          </label>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Name</label>
              <input type="text" className="w-full border border-slate-grey/30 bg-white p-3 focus:outline-none focus:border-slate-dark transition-colors font-body" placeholder={`e.g. ${type === 'treatment' ? 'Erbium Laser' : 'C E Ferulic'}`} />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Category / Brand</label>
              <input type="text" className="w-full border border-slate-grey/30 bg-white p-3 focus:outline-none focus:border-slate-dark transition-colors font-body" placeholder={`e.g. ${type === 'treatment' ? 'Laser Resurfacing' : 'SkinCeuticals'}`} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Price (£)</label>
              <input type="number" className="w-full border border-slate-grey/30 bg-white p-3 focus:outline-none focus:border-slate-dark transition-colors font-body" placeholder="0.00" />
            </div>
            {type === 'treatment' ? (
              <div>
                <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Duration (mins)</label>
                <input type="number" className="w-full border border-slate-grey/30 bg-white p-3 focus:outline-none focus:border-slate-dark transition-colors font-body" placeholder="60" />
              </div>
            ) : (
              <div>
                <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Initial Stock</label>
                <input type="number" className="w-full border border-slate-grey/30 bg-white p-3 focus:outline-none focus:border-slate-dark transition-colors font-body" placeholder="10" />
              </div>
            )}
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Status</label>
              <select className="w-full border border-slate-grey/30 bg-white p-3 focus:outline-none focus:border-slate-dark transition-colors font-body">
                <option>Active</option>
                <option>Draft</option>
                <option>Archived</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Description</label>
            <textarea rows="4" className="w-full border border-slate-grey/30 bg-white p-3 focus:outline-none focus:border-slate-dark transition-colors font-body resize-none" placeholder="Detailed clinical description..."></textarea>
          </div>

          {type === 'product' && (
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Key Active Ingredients (Comma separated)</label>
              <input type="text" className="w-full border border-slate-grey/30 bg-white p-3 focus:outline-none focus:border-slate-dark transition-colors font-body" placeholder="e.g. 15% L-ascorbic acid, 1% alpha tocopherol, 0.5% ferulic acid" />
            </div>
          )}

          {type === 'treatment' && (
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate font-bold mb-2">Protocol Steps (One per line)</label>
              <textarea rows="4" className="w-full border border-slate-grey/30 bg-white p-3 focus:outline-none focus:border-slate-dark transition-colors font-body resize-none" placeholder="1. Cleanse&#10;2. Prep&#10;..."></textarea>
            </div>
          )}

          <div className="pt-6 border-t border-slate-grey/10 border-dashed flex justify-end gap-4 mt-8">
            <button type="button" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-grey/30 text-slate hover:bg-slate-grey/5 transition-colors font-body text-sm font-bold uppercase tracking-widest">
              <X size={16} /> Cancel
            </button>
            <button type="button" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-dark text-ivory hover:bg-slate transition-colors font-body text-sm font-bold uppercase tracking-widest">
              <Save size={16} /> Save Item
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditForm;
