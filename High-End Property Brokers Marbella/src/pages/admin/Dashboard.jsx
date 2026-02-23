import { TrendingUp, Users, Home, Euro, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const kpis = [
    { label: 'New Mandates (This Month)', value: '12', change: '+20%', icon: <Home size={24} className="text-terracotta" /> },
    { label: 'Client Viewings Today', value: '8', change: '+3', icon: <Users size={24} className="text-terracotta" /> },
    { label: 'Recent Sales (Q3)', value: '€42.5M', change: '+15%', icon: <Euro size={24} className="text-terracotta" /> },
    { label: 'Active Negotiations', value: '4', change: 'Steady', icon: <TrendingUp size={24} className="text-terracotta" /> },
  ];

  const viewings = [
    { id: 1, time: '10:00 AM', client: 'Mr. & Mrs. Anderson', property: 'Villa Aloha (Nueva Andalucía)', agent: 'Marcus Sterling' },
    { id: 2, time: '12:30 PM', client: 'Family Olsen', property: 'Marina Penthouse (Frontline Beach)', agent: 'Elena Rostova' },
    { id: 3, time: '03:00 PM', client: 'Confidential Client', property: 'Palacio de Oro (Golden Mile)', agent: 'Alejandro Vargas' },
    { id: 4, time: '05:00 PM', client: 'Davies Investment Group', property: 'Los Naranjos Estate (Golf Valley)', agent: 'Marcus Sterling' },
  ];

  return (
    <div className="fade-in max-w-6xl mx-auto">
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white p-6 border border-dark-slate/10 rounded shadow-sm hover-lift relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold opacity-5 rounded-full transform translate-x-12 -translate-y-12"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="bg-warm-white p-3 rounded-full">{kpi.icon}</div>
              <span className={`text-xs font-bold uppercase tracking-widest ${kpi.change.includes('+') ? 'text-green-600' : 'text-dark-slate opacity-60'}`}>
                {kpi.change}
              </span>
            </div>
            <h3 className="text-3xl font-header text-dark-slate mb-1 relative z-10">{kpi.value}</h3>
            <p className="text-sm font-body text-dark-slate opacity-70 relative z-10 uppercase tracking-wide">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Today's Schedule */}
        <div className="lg:col-span-2 bg-white rounded border border-dark-slate/10 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-dark-slate/10 flex justify-between items-center bg-warm-white-dark/20">
            <h3 className="text-xl font-header text-dark-slate font-bold">Today's Viewings</h3>
            <button className="text-terracotta text-sm uppercase tracking-widest font-bold hover:text-dark-slate flex items-center gap-1 transition-colors">
              Full Calendar <ArrowRight size={16} />
            </button>
          </div>
          <div className="p-0">
            {viewings.map((viewing, index) => (
              <div key={viewing.id} className={`p-6 flex items-center justify-between ${index !== viewings.length - 1 ? 'border-b border-dark-slate/5' : ''} hover:bg-warm-white transition-colors cursor-pointer`}>
                <div className="flex gap-6 items-center">
                  <div className="text-lg font-header text-terracotta font-bold w-20">{viewing.time}</div>
                  <div>
                    <p className="font-bold text-dark-slate font-body text-sm mb-1">{viewing.client}</p>
                    <p className="text-xs text-dark-slate opacity-70 font-body uppercase tracking-wide">{viewing.property}</p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-xs uppercase tracking-widest text-dark-slate opacity-60 block mb-1">Assigned To</span>
                  <span className="text-sm font-bold text-dark-slate">{viewing.agent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded border border-dark-slate/10 shadow-sm p-6 relative overflow-hidden">
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-terracotta opacity-[0.03] rounded-full pointer-events-none"></div>
          <h3 className="text-xl font-header text-dark-slate font-bold mb-6">Quick Actions</h3>
          <div className="space-y-4 relative z-10">
            <button className="w-full text-left p-4 bg-warm-white border border-dark-slate/10 rounded hover:border-terracotta hover:bg-white transition-colors group flex justify-between items-center">
              <div>
                <span className="block font-bold text-dark-slate text-sm mb-1">Add New Property Mandate</span>
                <span className="block text-xs uppercase tracking-widest text-dark-slate opacity-60">Listing Generator</span>
              </div>
              <ArrowRight size={16} className="text-terracotta opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
            </button>
            <button className="w-full text-left p-4 bg-warm-white border border-dark-slate/10 rounded hover:border-terracotta hover:bg-white transition-colors group flex justify-between items-center">
              <div>
                <span className="block font-bold text-dark-slate text-sm mb-1">Draft Sales Agreement</span>
                <span className="block text-xs uppercase tracking-widest text-dark-slate opacity-60">Legal Templates</span>
              </div>
              <ArrowRight size={16} className="text-terracotta opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
            </button>
            <button className="w-full text-left p-4 bg-warm-white border border-dark-slate/10 rounded hover:border-terracotta hover:bg-white transition-colors group flex justify-between items-center">
              <div>
                <span className="block font-bold text-dark-slate text-sm mb-1">Review Lead Inbox</span>
                <span className="block text-xs uppercase tracking-widest text-dark-slate opacity-60">4 Unread Inquiries</span>
              </div>
              <ArrowRight size={16} className="text-terracotta opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
