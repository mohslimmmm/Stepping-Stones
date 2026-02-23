import { motion } from 'framer-motion';
import { Upload, X, Save, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ProjectForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin/projects');
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <Link to="/admin/projects" className="flex items-center space-x-2 text-slate-400 hover:text-sand mb-8 transition-colors text-xs font-bold uppercase tracking-widest">
        <ArrowLeft size={16} />
        <span>Back to Projects</span>
      </Link>

      <div className="bg-white rounded-8 border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100">
          <h2 className="text-xl font-serif text-slate-800">Add New Project</h2>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Populate the firm's portfolio with high-fidelity media.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-10">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Project Title</label>
              <input type="text" placeholder="e.g. Wainscott Modernist" className="w-full bg-slate-50 border border-slate-200 rounded-8 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sand/20 focus:border-sand text-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Category</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-8 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sand/20 focus:border-sand text-sm">
                <option>Oceanfront Estates</option>
                <option>Historic Renovations</option>
                <option>Modern Barns</option>
                <option>Commercial Spaces</option>
              </select>
            </div>
          </div>

          {/* Media Upload Placeholder */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Portfolio Media (Drag & Drop)</label>
            <div className="border-2 border-dashed border-slate-200 rounded-8 p-12 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <Upload size={24} className="text-slate-400" />
              </div>
              <p className="text-sm text-slate-600 font-medium">Upload high-resolution images</p>
              <p className="text-xs text-slate-400 mt-1">PNG, JPG or WEBP (Max 10MB)</p>
            </div>
            
            {/* Mock Uploaded Images */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-slate-200 rounded-8 relative group overflow-hidden">
                  <img src={`/assets/hamptons_living_room_hero_1771809798288.png`} className="w-full h-full object-cover opacity-60" />
                  <button type="button" className="absolute top-2 right-2 bg-white/80 p-1 rounded-full text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <X size={12} />
                  </button>
                </div>
              ))}
              <div className="aspect-square border border-dashed border-slate-300 rounded-8 flex items-center justify-center text-slate-300">
                <Plus size={24} />
              </div>
            </div>
          </div>

          {/* Sourcing Details */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2">Project Tags & Meta</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Room Type</label>
                <input type="text" placeholder="e.g. Living Room, Patio" className="w-full bg-slate-50 border border-slate-200 rounded-8 px-4 py-2 focus:outline-none text-xs" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Primary Material</label>
                <input type="text" placeholder="e.g. Belgian Linen" className="w-full bg-slate-50 border border-slate-200 rounded-8 px-4 py-2 focus:outline-none text-xs" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Lead Time</label>
                <input type="text" placeholder="e.g. 12 Weeks" className="w-full bg-slate-50 border border-slate-200 rounded-8 px-4 py-2 focus:outline-none text-xs" />
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex justify-end space-x-4">
            <button type="button" onClick={() => navigate('/admin/projects')} className="px-6 py-3 border border-slate-200 rounded-8 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Cancel</button>
            <button type="submit" className="px-8 py-3 bg-sand text-white rounded-8 text-sm font-bold flex items-center space-x-2 hover:bg-sand/90 transition-all shadow-md">
              <Save size={18} />
              <span>Publish Project</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Plus = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default ProjectForm;
