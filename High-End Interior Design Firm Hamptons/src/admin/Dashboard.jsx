import { motion } from 'framer-motion';
import { Briefcase, MessageSquare, TrendingUp, Clock, FileText, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Active Projects', value: '12', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Procurement Pipeline', value: '$240k', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Consultations Booked', value: '8', icon: MessageSquare, color: 'text-sand', bg: 'bg-linen' },
    { label: 'Pending Proposals', value: '4', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <div className="space-y-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-8 border border-slate-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-8`}>
                <stat.icon size={24} />
              </div>
              <span className="text-emerald-500 text-xs font-bold">+12%</span>
            </div>
            <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Leads */}
        <div className="lg:col-span-2 bg-white rounded-8 border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Recent Inquiries</h3>
            <button className="text-sand text-xs font-bold uppercase tracking-widest">View All</button>
          </div>
          <div className="divide-y divide-slate-100">
            {[ 
              { name: 'Julianne Moore', location: 'Montauk', type: 'Full Furnishings', date: '2h ago' },
              { name: 'Robert De Niro', location: 'Water Mill', type: 'Renovation', date: '5h ago' },
              { name: 'Gwyneth Paltrow', location: 'Amagansett', type: 'New Build', date: 'Yesterday' }
            ].map((lead, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                    {lead.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{lead.name}</h4>
                    <p className="text-xs text-slate-400">{lead.location} • {lead.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400 mb-1">{lead.date}</p>
                  <button className="text-xs font-bold text-sand px-3 py-1 bg-linen rounded-full">Review</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-8 border border-slate-200 shadow-sm p-6">
          <h3 className="font-bold text-slate-800 mb-6">Quick Actions</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-8 hover:bg-slate-100 transition-colors group">
              <div className="flex items-center space-x-3">
                <FileText size={18} className="text-slate-400 group-hover:text-sand" />
                <span className="text-sm font-medium text-slate-600">Create Proposal</span>
              </div>
              <ChevronRight size={16} className="text-slate-300" />
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-8 hover:bg-slate-100 transition-colors group">
              <div className="flex items-center space-x-3">
                <TrendingUp size={18} className="text-slate-400 group-hover:text-sand" />
                <span className="text-sm font-medium text-slate-600">Inventory Report</span>
              </div>
              <ChevronRight size={16} className="text-slate-300" />
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-8 hover:bg-slate-100 transition-colors group">
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-slate-400 group-hover:text-sand" />
                <span className="text-sm font-medium text-slate-600">Schedule Consult</span>
              </div>
              <ChevronRight size={16} className="text-slate-300" />
            </button>
          </div>
          
          <div className="mt-10 p-4 border border-dashed border-slate-200 rounded-8 bg-slate-50/50">
            <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Notice</p>
            <p className="text-xs text-slate-500 leading-relaxed">
              3 items in the Amagansett Retreat project are awaiting your approval for procurement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
