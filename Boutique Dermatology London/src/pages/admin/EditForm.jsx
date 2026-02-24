import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

export default function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [type, setType] = useState('retail');

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <button 
          onClick={() => navigate('/admin/inventory')}
          className="p-2 border border-foreground/20 hover:bg-foreground/10 transition-colors bg-foreground"
        >
          <ArrowLeft className="w-5 h-5 text-background" />
        </button>
        <div>
          <h2 className="text-2xl font-serif text-background">{isEditing ? 'Edit Registry Item' : 'Add New Item'}</h2>
          <p className="text-background/60 text-sm font-light mt-1">Provide comprehensive details for the clinic system.</p>
        </div>
      </div>

      <div className="bg-foreground text-background shadow-sm border border-foreground/10 p-8">
        <form className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
               <label className="text-xs uppercase tracking-widest font-semibold text-background/60">Item Type</label>
               <select 
                title="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-background/5 border border-background/20 py-3 text-background focus:outline-none focus:border-primary px-4"
               >
                 <option value="retail">Retail Skincare Product</option>
                 <option value="protocol">Clinical Protocol / Treatment</option>
               </select>
            </div>
            <div className="space-y-2">
               <label className="text-xs uppercase tracking-widest font-semibold text-background/60">SKU / Identifier</label>
               <input 
                 title="identifier"
                 type="text" 
                 defaultValue={isEditing ? 'SK-CEF-99' : ''}
                 className="w-full bg-background/5 border border-background/20 py-3 text-background focus:outline-none focus:border-primary px-4"
                 placeholder="e.g. SK-1002"
               />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-background/60">Item Name</label>
            <input 
              title="name"
              type="text" 
              defaultValue={isEditing ? 'Advanced C E Ferulic Formulation' : ''}
              className="w-full bg-transparent border-b border-background/30 py-3 text-background focus:outline-none focus:border-primary transition-colors text-lg font-serif"
              placeholder="Enter comprehensive name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
               <label className="text-xs uppercase tracking-widest font-semibold text-background/60">Category</label>
               <input 
                 title="category"
                 type="text" 
                 defaultValue={isEditing ? 'Antioxidant Serum' : ''}
                 className="w-full bg-transparent border-b border-background/30 py-3 text-background focus:outline-none focus:border-primary transition-colors"
                 placeholder="e.g. Serum, Laser, Peel"
               />
            </div>
            <div className="space-y-2">
               <label className="text-xs uppercase tracking-widest font-semibold text-background/60">{type === 'retail' ? 'Price (£)' : 'Base Price (£)'}</label>
               <input 
                 title="price"
                 type="number" 
                 defaultValue={isEditing ? '165' : ''}
                 className="w-full bg-transparent border-b border-background/30 py-3 text-background focus:outline-none focus:border-primary transition-colors"
                 placeholder="0.00"
               />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-background/60">
              {type === 'retail' ? 'Active Ingredients List' : 'Protocol Specifications'}
            </label>
            <textarea 
              title="details"
              rows="4"
              defaultValue={isEditing && type === 'retail' ? '15% L-ascorbic acid, 1% alpha tocopherol, 0.5% ferulic acid.' : ''}
              className="w-full bg-background/5 border border-background/20 p-4 text-background focus:outline-none focus:border-primary transition-colors resize-none font-light text-sm"
              placeholder={type === 'retail' ? 'Comma separated active ingredients...' : 'Clinical steps, device settings, required downtime...'}
            ></textarea>
          </div>

           <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-background/60">Upload Image / Asset</label>
            <div className="border-2 border-dashed border-background/20 p-8 text-center bg-background/5">
              <span className="text-background/50 font-light text-sm">Drag and drop high-resolution asset here, or click to browse.</span>
            </div>
          </div>

          <div className="pt-6 border-t border-background/10 flex justify-end space-x-4">
            <Link 
              to="/admin/inventory"
              className="px-6 py-3 text-sm uppercase tracking-wider font-semibold text-background/60 hover:text-background transition-colors"
            >
              Cancel
            </Link>
            <button 
              type="button"
              onClick={() => navigate('/admin/inventory')}
              className="flex items-center space-x-2 bg-primary hover:bg-primary-hover text-background px-8 py-3 uppercase tracking-wider text-sm font-semibold transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save Details</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
