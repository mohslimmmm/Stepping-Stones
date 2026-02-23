import { motion } from 'framer-motion';
import { Search, Filter, MoreVertical, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectTable = () => {
  const projects = [
    { id: 1, client: 'Julianne Moore', type: 'Residential', phase: 'Procurement', budget: '$180,000', status: 'On Track' },
    { id: 2, client: 'Robert De Niro', type: 'Commercial', phase: 'Concept', budget: '$450,000', status: 'At Risk' },
    { id: 3, client: 'Gwyneth Paltrow', type: 'Residential', phase: 'Installation', budget: '$120,000', status: 'Complete' },
    { id: 4, client: 'Anderson Cooper', type: 'Residential', phase: 'Procurement', budget: '$210,000', status: 'On Track' },
    { id: 5, client: 'Ina Garten', type: 'Commercial', phase: 'Concept', budget: '$300,000', status: 'On Track' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'On Track': return 'text-emerald-600 bg-emerald-50';
      case 'At Risk': return 'text-amber-600 bg-amber-50';
      case 'Complete': return 'text-blue-600 bg-blue-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getPhaseColor = (status) => {
    switch (status) {
      case 'Concept': return 'bg-purple-100 text-purple-700';
      case 'Procurement': return 'bg-orange-100 text-orange-700';
      case 'Installation': return 'bg-cyan-100 text-cyan-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-white rounded-8 border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-8 focus:outline-none focus:ring-2 focus:ring-sand/20 focus:border-sand text-sm"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-slate-200 rounded-8 text-sm font-medium hover:bg-slate-50 transition-colors">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <Link to="/admin/projects/new" className="flex items-center space-x-2 px-4 py-2 bg-sand text-white rounded-8 text-sm font-medium hover:bg-sand/90 transition-colors shadow-sm">
            <Plus size={16} />
            <span>New Project</span>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-widest font-bold text-slate-400">
              <th className="px-6 py-4">Client Name</th>
              <th className="px-6 py-4">Project Type</th>
              <th className="px-6 py-4">Current Phase</th>
              <th className="px-6 py-4">Budget</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {projects.map((p) => (
              <motion.tr 
                key={p.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hover:bg-slate-50/80 transition-colors group"
              >
                <td className="px-6 py-5">
                  <p className="text-sm font-bold text-slate-800">{p.client}</p>
                  <p className="text-[10px] text-slate-400">ID: SL-{2024-p.id}</p>
                </td>
                <td className="px-6 py-5">
                  <span className="text-xs text-slate-600">{p.type}</span>
                </td>
                <td className="px-6 py-5">
                  <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider ${getPhaseColor(p.phase)}`}>
                    {p.phase}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm font-medium text-slate-700">{p.budget}</span>
                </td>
                <td className="px-6 py-5">
                  <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider ${getStatusColor(p.status)}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="text-slate-400 hover:text-sand">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-6 border-t border-slate-100 flex items-center justify-between">
        <p className="text-xs text-slate-400">Showing 5 of 12 active projects</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border border-slate-200 rounded-8 text-xs disabled:opacity-50" disabled>Prev</button>
          <button className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-8 text-xs">1</button>
          <button className="px-3 py-1 border border-slate-200 rounded-8 text-xs">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
