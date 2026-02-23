import { motion } from 'framer-motion';
import { TrendingUp, Users, AlertCircle, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const AdminDashboard = () => {
  const kpis = [
    { title: 'AUM (Total)', value: 'CHF 1.24B', change: '+2.4%', icon: <TrendingUp size={24} />, positive: true },
    { title: 'New Onboarding', value: '12', change: '+3', icon: <Users size={24} />, positive: true },
    { title: 'Market Alerts', value: '4', change: 'Critical', icon: <AlertCircle size={24} />, positive: false },
  ];

  return (
    <div>
      <h1 className="text-3xl font-light mb-10 tracking-wide">System <span className="italic font-normal">Overview</span></h1>
      
      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {kpis.map((kpi, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white/5 border border-white/10 rounded-sm"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-deep-indigo rounded-sm text-white">
                {kpi.icon}
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-bold ${kpi.positive ? 'text-green-400' : 'text-red-400'}`}>
                {kpi.change}
                {kpi.positive ? <ArrowUpRight size={12} /> : <AlertCircle size={12} />}
              </div>
            </div>
            <h4 className="text-[10px] tracking-widest uppercase text-silver/50 mb-2">{kpi.title}</h4>
            <p className="text-3xl font-light">{kpi.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
           <h3 className="text-xs tracking-widest uppercase mb-8 text-silver">Portfolio Performance (Aggregated)</h3>
           <div className="h-64 flex items-end gap-1 px-4 relative">
              {[60, 40, 70, 50, 80, 45, 90, 60, 75, 55, 85, 95].map((h, i) => (
                <div key={i} className="flex-grow bg-deep-indigo opacity-40 hover:opacity-100 transition-all rounded-t-sm" style={{ height: `${h}%` }}></div>
              ))}
           </div>
           <div className="flex justify-between mt-6 px-4 text-[8px] tracking-[0.2em] uppercase text-silver/30 font-bold">
              <span>JAN</span>
              <span>MAR</span>
              <span>MAY</span>
              <span>JUL</span>
              <span>SEP</span>
              <span>NOV</span>
           </div>
        </div>

        <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
           <h3 className="text-xs tracking-widest uppercase mb-8 text-silver">Recent Security Events</h3>
           <div className="space-y-6">
              {[
                { event: 'Encryption Key Rotation', time: '2m ago', status: 'Success' },
                { event: 'Bulk Report Generation', time: '1h ago', status: 'Success' },
                { event: 'Unauthorized Access Attempt (IP: 192.x)', time: '3h ago', status: 'Blocked' },
                { event: 'KYC Document Verification - #9281', time: '5h ago', status: 'Pending' }
              ].map((e, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-white/5">
                   <div>
                      <p className="text-xs font-medium">{e.event}</p>
                      <p className="text-[8px] text-silver/30 uppercase mt-1 tracking-widest">{e.time}</p>
                   </div>
                   <span className={`text-[8px] px-2 py-1 rounded-full uppercase tracking-tighter font-bold ${
                     e.status === 'Success' ? 'bg-green-500/10 text-green-500' :
                     e.status === 'Blocked' ? 'bg-red-500/10 text-red-500' :
                     'bg-yellow-500/10 text-yellow-500'
                   }`}>
                      {e.status}
                   </span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
