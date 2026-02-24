import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MoreVertical, Mail, MessageCircle, FileText, CheckCircle2, Navigation, ShieldCheck } from 'lucide-react';

const LeadsInbox = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedLead, setSelectedLead] = useState(null);

  const leads = [
    {
      id: 'L-9042',
      name: 'James Anderson',
      entity: 'Private Individual',
      flag: '🇸🇪', country: 'Sweden',
      status: 'Flying In',
      intent: '€15M+ Frontline Beach',
      broker: 'Sofia Laurent',
      received: '2 hours ago',
      channel: 'WhatsApp',
      notes: 'Requiring helipad access. Viewing scheduled for Thursday PM.',
    },
    {
      id: 'L-9043',
      name: 'Family Office M',
      entity: 'Al-Rashid Holdings',
      flag: '🇦🇪', country: 'UAE',
      status: 'Offer Drafting',
      intent: 'La Zagaleta Estate (Off-Market)',
      broker: 'Mateo Silva',
      received: '1 day ago',
      channel: 'Encrypted Email',
      notes: 'Term sheet finalized. Awaiting legal review from Geneva.',
    },
    {
      id: 'L-9044',
      name: '[Confidential NDA]',
      entity: 'UK Tech Founder',
      flag: '🇬🇧', country: 'United Kingdom',
      status: 'Viewing Set',
      intent: 'Golden Mile Villa (Contemporary)',
      broker: 'Alejandro Vargas',
      received: '2 days ago',
      channel: 'Telegram',
      notes: 'Requires 24/7 security detail integration. Showing 3 properties.',
    },
    {
      id: 'L-9045',
      name: 'Elena Rostova',
      entity: 'Private Individual',
      flag: '🇨🇭', country: 'Switzerland',
      status: 'Pre-Qualified',
      intent: '€5M-€10M Penthouse',
      broker: 'Sofia Laurent',
      received: '3 days ago',
      channel: 'Encrypted Email',
      notes: 'POF verified by UBS Zurich. Seeking panoramic views.',
    },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pre-Qualified': return 'bg-espresso/5 text-espresso border-espresso/10';
      case 'Flying In': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Viewing Set': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Offer Drafting': return 'bg-olive/10 text-olive border-olive/30';
      default: return 'bg-alabaster text-espresso border-espresso/10';
    }
  };

  const filteredLeads = activeFilter === 'All' ? leads : leads.filter(l => l.status === activeFilter);

  return (
    <div className="max-w-7xl mx-auto pb-12 h-[calc(100vh-100px)] flex flex-col">
      <div className="flex justify-between items-end mb-6 border-b border-olive/20 pb-4 shrink-0">
        <div>
          <h1 className="text-3xl font-serif text-espresso">VIP Client CRM</h1>
          <p className="text-sm font-light text-espresso/60 mt-1 uppercase tracking-widest text-[10px]">Secure Lead Intelligence Pipeline</p>
        </div>
        <div className="flex space-x-2">
           {['All', 'Pre-Qualified', 'Flying In', 'Viewing Set', 'Offer Drafting'].map(filter => (
             <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-sm transition-colors ${activeFilter === filter ? 'bg-navy text-alabaster shadow-sm' : 'bg-white text-espresso/60 border border-espresso/10 hover:border-olive/30'}`}
             >
               {filter}
             </button>
           ))}
        </div>
      </div>

      <div className="flex flex-1 gap-6 overflow-hidden">
        
        {/* Leads List */}
        <div className="w-1/2 flex flex-col border border-olive/10 bg-white rounded-sm shadow-sm overflow-hidden">
          <div className="p-4 border-b border-espresso/10 flex items-center justify-between bg-alabaster/50">
            <div className="flex items-center text-espresso/60 bg-white px-3 py-1.5 rounded-sm border border-espresso/10 w-64">
              <Search size={14} className="mr-2" />
              <input type="text" placeholder="Search Identity or ID..." className="bg-transparent border-none outline-none text-xs w-full placeholder-espresso/40" />
            </div>
            <button className="text-espresso/50 hover:text-olive transition-colors delay-75">
               <Filter size={16} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence>
              {filteredLeads.map((lead) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  className={`p-5 border-b border-espresso/5 cursor-pointer transition-colors ${selectedLead?.id === lead.id ? 'bg-olive/5 border-l-2 border-l-olive' : 'hover:bg-alabaster border-l-2 border-l-transparent'}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl" title={lead.country}>{lead.flag}</span>
                      <div>
                        <h3 className="font-serif text-lg text-espresso leading-tight">{lead.name}</h3>
                        <p className="text-[10px] uppercase tracking-widest text-espresso/40 font-semibold">{lead.entity}</p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 text-[9px] uppercase tracking-widest font-bold rounded-sm border ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-end mt-4">
                    <div className="space-y-1">
                      <p className="text-xs text-espresso/80"><strong className="font-medium">Intent:</strong> {lead.intent}</p>
                      <p className="text-[10px] text-espresso/50 flex items-center">
                        {lead.channel === 'WhatsApp' ? <MessageCircle size={10} className="mr-1" /> : <Mail size={10} className="mr-1" />}
                        {lead.channel} &bull; {lead.received}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Lead Detail Pane */}
        <div className="w-1/2 flex flex-col border border-olive/10 bg-white rounded-sm shadow-sm overflow-hidden">
          {selectedLead ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={selectedLead.id}
              className="flex-1 flex flex-col"
            >
              {/* Profile Header */}
              <div className="p-8 border-b border-espresso/10 bg-gradient-to-br from-alabaster to-white">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-espresso text-alabaster rounded-sm flex items-center justify-center text-2xl shadow-lg border border-espresso/10">
                      {selectedLead.flag}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h2 className="text-3xl font-serif text-espresso">{selectedLead.name}</h2>
                        {selectedLead.status === 'Pre-Qualified' && <CheckCircle2 size={16} className="text-olive" />}
                      </div>
                      <p className="text-xs uppercase tracking-[0.2em] text-espresso/50 font-semibold mt-1">{selectedLead.entity}</p>
                    </div>
                  </div>
                  <button className="text-espresso/40 hover:text-espresso transition-colors">
                    <MoreVertical size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-espresso/40 block mb-1">Assigned Partner</span>
                    <span className="text-sm font-medium text-espresso">{selectedLead.broker}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-espresso/40 block mb-1">Status Protocol</span>
                    <span className={`inline-block px-2 py-0.5 text-[10px] uppercase tracking-widest font-bold rounded-sm border ${getStatusColor(selectedLead.status)}`}>
                      {selectedLead.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* CRM Details */}
              <div className="p-8 flex-1 overflow-y-auto space-y-8 bg-white">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-olive border-b border-olive/20 pb-2 mb-4 font-semibold">Acquisition Intent</h3>
                  <div className="bg-alabaster/50 p-4 rounded-sm border border-espresso/5 text-espresso/80 font-serif leading-relaxed text-lg">
                    {selectedLead.intent}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest text-olive border-b border-olive/20 pb-2 mb-4 font-semibold">Intelligence Briefing</h3>
                  <div className="bg-navy/5 p-4 rounded-sm border border-navy/10 text-espresso/70 text-sm leading-relaxed relative">
                    <FileText size={14} className="absolute top-4 right-4 text-navy/40" />
                    <p>{selectedLead.notes}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest text-olive border-b border-olive/20 pb-2 mb-4 font-semibold">Action Center</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-3 bg-alabaster border border-espresso/10 rounded-sm text-xs tracking-widest uppercase font-medium text-espresso hover:border-olive hover:text-olive transition-all flex justify-center items-center">
                       <MessageCircle size={14} className="mr-2" /> Secure Comms
                    </button>
                    <button className="p-3 bg-espresso border border-espresso/10 rounded-sm text-xs tracking-widest uppercase font-medium text-alabaster hover:bg-navy transition-all flex justify-center items-center">
                       <Navigation size={14} className="mr-2" /> Dispatch Portfolio
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-espresso/30 p-8 text-center bg-alabaster/30">
              <ShieldCheck size={48} className="mb-4 opacity-50 text-olive" />
              <p className="text-lg font-serif mb-2 text-espresso/50">Select a VIP Profile</p>
              <p className="text-xs font-light max-w-xs">Access highly sensitive client intent and securely curated portfolios.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadsInbox;
