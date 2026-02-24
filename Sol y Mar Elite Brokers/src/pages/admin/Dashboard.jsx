import { motion } from 'framer-motion';
import { TrendingUp, Users, Building2, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const kpis = [
    { label: "Off-Market Inventory Value", value: "€485.5M", change: "+12.4%", trend: "up", icon: Building2 },
    { label: "Active Escrows", value: "14", change: "+2", trend: "up", icon: TrendingUp },
    { label: "HNWI Arrivals This Week", value: "8", change: "Private Aviation", trend: "neutral", icon: Users },
  ];

  const recentLeads = [
    { id: "L-9042", name: "J. Anderson", intent: "€15M+ Frontline", origin: "Stockholm, SE" },
    { id: "L-9043", name: "Family Office M", intent: "La Zagaleta Estate", origin: "Dubai, AE" },
    { id: "L-9044", name: "Confidential", intent: "Golden Mile Villa", origin: "London, UK" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8 border-b border-olive/20 pb-4">
        <div>
          <h1 className="text-3xl font-serif text-espresso">Executive Overview</h1>
          <p className="text-sm font-light text-espresso/60 mt-1 uppercase tracking-widest text-[10px]">Real-Time Market Pulse</p>
        </div>
        <div className="flex space-x-4">
           <Link to="/admin/listings" className="text-xs uppercase tracking-widest bg-espresso text-alabaster px-4 py-2 hover:bg-navy transition-colors rounded-sm flex items-center">
             <span>New Listing</span>
             <ExternalLink size={14} className="ml-2" />
           </Link>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {kpis.map((kpi, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white p-6 rounded-sm shadow-sm border border-olive/10"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="bg-alabaster p-3 rounded-full text-olive">
                <kpi.icon size={20} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-sm ${kpi.trend === 'up' ? 'text-green-700 bg-green-50' : 'text-espresso/60 bg-alabaster'}`}>
                {kpi.change}
              </span>
            </div>
            <h3 className="text-3xl font-serif text-espresso mb-1">{kpi.value}</h3>
            <p className="text-xs uppercase tracking-widest text-espresso/50 font-semibold">{kpi.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* World Map Snippet Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-white rounded-sm shadow-sm border border-olive/10 p-6 flex flex-col"
        >
          <div className="flex justify-between items-center mb-6">
             <h3 className="font-serif text-xl text-espresso">Global Traffic Heatmap</h3>
             <span className="text-[10px] uppercase tracking-widest text-olive bg-olive/10 px-3 py-1 rounded-sm">Live</span>
          </div>
          <div className="flex-1 bg-espresso/5 relative rounded-sm overflow-hidden flex items-center justify-center min-h-[300px]">
            {/* Map Placeholder Image */}
            <div 
              className="absolute inset-0 opacity-40 bg-center bg-no-repeat bg-contain filter invert"
              style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")' }}
            ></div>
            
            {/* Pulsing Dots */}
            <div className="absolute top-[30%] left-[45%] w-3 h-3 bg-olive rounded-full shadow-[0_0_15px_rgba(126,140,105,0.8)] animate-pulse"></div>
            <div className="absolute top-[40%] left-[55%] w-2 h-2 bg-navy rounded-full shadow-[0_0_10px_rgba(26,54,93,0.8)] animate-pulse" style={{ animationDelay: '0.5s'}}></div>
            <div className="absolute top-[25%] left-[50%] w-4 h-4 bg-olive rounded-full shadow-[0_0_20px_rgba(126,140,105,0.8)] animate-pulse" style={{ animationDelay: '1s'}}></div>
            
            <div className="relative z-10 bg-white/90 backdrop-blur-sm p-4 rounded-sm shadow-lg text-center mx-auto absolute bottom-4 border border-olive/20">
              <div className="flex items-center justify-center space-x-2 text-espresso mb-1">
                <MapPin size={16} className="text-olive" />
                <span className="font-serif font-bold">Concentration: Northern Europe</span>
              </div>
              <p className="text-xs text-espresso/60 font-light">Surge in views for "La Zagaleta Exclusives"</p>
            </div>
          </div>
        </motion.div>

        {/* Incoming Leads */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-sm shadow-sm border border-olive/10 p-6"
        >
          <div className="flex justify-between items-center border-b border-espresso/10 pb-4 mb-4">
             <h3 className="font-serif text-xl text-espresso">VIP Arrivals</h3>
             <Link to="/admin/leads" className="text-xs uppercase tracking-widest text-olive hover:text-navy transition-colors">View All</Link>
          </div>
          
          <div className="space-y-4">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="p-4 bg-alabaster rounded-sm border border-espresso/5 hover:border-olive/30 transition-colors cursor-pointer group">
                 <div className="flex justify-between items-start mb-2">
                   <div className="flex items-center space-x-2">
                     <span className="text-[10px] uppercase font-bold text-espresso/40 bg-white px-2 py-0.5 border border-espresso/10 rounded-sm">{lead.id}</span>
                     <span className="font-serif text-espresso group-hover:text-navy transition-colors">{lead.name}</span>
                   </div>
                   <ArrowRight size={14} className="text-espresso/20 group-hover:text-olive transform group-hover:translate-x-1 transition-all" />
                 </div>
                 <div className="text-xs text-espresso/70 mb-1">{lead.intent}</div>
                 <div className="text-[10px] text-espresso/40 font-mono flex items-center">
                   <MapPin size={10} className="mr-1 inline-block" /> {lead.origin}
                 </div>
              </div>
            ))}
          </div>
          
          <Link to="/admin/leads" className="mt-6 block w-full py-3 text-center border border-dashed border-espresso/20 text-xs tracking-widest uppercase text-espresso hover:bg-espresso hover:text-alabaster transition-all rounded-sm">
            Open CRM
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
