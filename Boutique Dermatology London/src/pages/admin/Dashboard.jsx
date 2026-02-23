import { Users, PackageSearch, CalendarCheck, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  // Mock KPIs
  const kpis = [
    { label: 'Daily Clinic Flow', value: '14', change: '+2', icon: <Users className="text-soft-blush-dark" size={24} /> },
    { label: 'Product Waitlist', value: '38', change: '+12%', icon: <PackageSearch className="text-soft-blush-dark" size={24} /> },
    { label: 'Follow-ups Due', value: '9', change: '-3', icon: <CalendarCheck className="text-soft-blush-dark" size={24} /> },
    { label: 'Monthly Revenue', value: '£42.5k', change: '+8%', icon: <TrendingUp className="text-soft-blush-dark" size={24} /> }
  ];

  return (
    <div className="fade-in max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-header text-slate-grey-dark mb-2">Overview</h2>
        <p className="text-slate-grey opacity-80 font-body">Current clinic status and operational metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white p-6 border border-slate-grey/20 shadow-sm hover-lift">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-slate-dark/5 p-3">{kpi.icon}</div>
              <span className={`text-xs font-bold px-2 py-1 ${kpi.change.startsWith('+') ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50' }`}>
                {kpi.change}
              </span>
            </div>
            <h3 className="text-3xl font-header text-slate-grey-dark mb-1">{kpi.value}</h3>
            <p className="text-xs uppercase tracking-widest font-bold text-slate-grey opacity-60">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 bg-white border border-slate-grey/20 shadow-sm p-6">
          <h3 className="font-header text-xl text-slate-grey-dark mb-6 border-b border-slate-grey/10 pb-4">Today's Schedule</h3>
          <div className="space-y-4">
            {[
              { time: '09:00', patient: 'E. Rothschild', procedure: 'Bespoke Laser Resurfacing', status: 'In Progress' },
              { time: '10:30', patient: 'J. Cavendish', procedure: 'Mole Mapping', status: 'Waiting' },
              { time: '11:15', patient: 'A. Sinclair', procedure: 'Cellular Renewal Peel', status: 'Confirmed' },
              { time: '13:00', patient: 'S. Kensington', procedure: 'General Consultation', status: 'Confirmed' }
            ].map((appt, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-slate-grey/10 hover:bg-slate-grey-dark/5 transition-colors">
                <div className="flex gap-6 items-center">
                  <span className="font-header text-lg text-slate-grey-dark w-16">{appt.time}</span>
                  <div>
                    <strong className="block text-slate-grey-dark font-body">{appt.patient}</strong>
                    <span className="text-xs uppercase tracking-widest text-slate-grey opacity-70">{appt.procedure}</span>
                  </div>
                </div>
                <div>
                  <span className={`text-xs px-3 py-1 font-body font-bold border ${appt.status === 'In Progress' ? 'border-soft-blush-dark text-soft-blush-dark' : 'border-slate-grey/30 text-slate-grey opacity-70'}`}>
                    {appt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-dark text-ivory p-6 shadow-sm">
          <h3 className="font-header text-xl mb-6 tracking-wide text-soft-blush-dark">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors font-body text-sm border border-white/10">Add Clinical Note</button>
            <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors font-body text-sm border border-white/10">Review Lab Results (2)</button>
            <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors font-body text-sm border border-white/10">Process Prescription Refills</button>
            <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors font-body text-sm border border-white/10">Update Protocol Database</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
