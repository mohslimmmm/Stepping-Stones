import { Users, Package, Calendar, ArrowUpRight } from 'lucide-react';

export default function Dashboard() {
  const kpis = [
    { name: 'Daily Clinic Flow', value: '42', metric: 'Patients', icon: Users, trend: '+12%' },
    { name: 'Product Waitlist', value: '156', metric: 'Requests', icon: Package, trend: '+4%' },
    { name: 'Follow-ups Due', value: '18', metric: 'Assessments', icon: Calendar, trend: '-2%' },
  ];

  return (
    <div className="space-y-8">
      {/* Light-themed KPI Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.name} className="bg-foreground text-background p-6 shadow-sm border border-foreground/10">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-primary/20 p-2 rounded-sm">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center text-xs font-semibold text-green-600">
                   {kpi.trend}
                   <ArrowUpRight className="w-3 h-3 ml-1" />
                </div>
              </div>
              <h3 className="text-foreground/50 text-xs uppercase tracking-widest font-semibold mb-1">{kpi.name}</h3>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-serif">{kpi.value}</span>
                <span className="text-sm font-light text-foreground/50">{kpi.metric}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Schedule */}
        <div className="bg-foreground text-background p-6 shadow-sm border border-foreground/10">
          <div className="flex justify-between items-center mb-6">
             <h2 className="font-serif text-xl">Today's Protocol Schedule</h2>
             <button className="text-xs uppercase tracking-widest text-primary font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { time: '09:00 AM', patient: 'Eleanor Vance', protocol: 'Bespoke Laser Resurfacing' },
              { time: '10:30 AM', patient: 'Julian Thorne', protocol: 'Cellular Injectables' },
              { time: '11:45 AM', patient: 'Victoria Sterling', protocol: 'VISIA® Assessment' },
            ].map((apt, idx) => (
              <div key={idx} className="flex justify-between items-center py-3 border-b border-background/10 last:border-0">
                <div className="flex items-center space-x-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-background/50 w-20">{apt.time}</div>
                  <div>
                    <div className="font-medium">{apt.patient}</div>
                    <div className="text-sm text-background/60 font-light">{apt.protocol}</div>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
            ))}
          </div>
        </div>

        {/* Low Inventory Alerts */}
        <div className="bg-foreground text-background p-6 shadow-sm border border-foreground/10">
          <div className="flex justify-between items-center mb-6">
             <h2 className="font-serif text-xl">Retail Inventory Alerts</h2>
             <button className="text-xs uppercase tracking-widest text-primary font-semibold hover:underline">Manage</button>
          </div>
          <div className="space-y-4">
            <div className="p-4 border border-red-200 bg-red-50 text-red-900">
              <div className="font-semibold mb-1">C E Ferulic Serum</div>
              <div className="flex justify-between text-sm">
                <span>Stock: 2 units</span>
                <span className="font-medium text-red-600">Reorder Required</span>
              </div>
            </div>
            <div className="p-4 border border-orange-200 bg-orange-50 text-orange-900">
              <div className="font-semibold mb-1">HA Intensifier</div>
              <div className="flex justify-between text-sm">
                <span>Stock: 5 units</span>
                <span className="font-medium text-orange-600">Low Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
