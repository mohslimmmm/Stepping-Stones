import { useState } from 'react';
import { Mail, Phone, MessageCircle, AlertCircle, Clock, CheckCircle } from 'lucide-react';

const LeadsInbox = () => {
  const [filter, setFilter] = useState('New');

  const leads = [
    { id: 'LD-840', name: 'James Sterling', type: 'Buyer', property: 'Villa Aloha', stage: 'New', time: '2 hours ago', contact: 'Email', value: '€5M Budget' },
    { id: 'LD-839', name: 'Sofia Andersson', type: 'Seller', property: 'General Inquiry', stage: 'New', time: '5 hours ago', contact: 'WhatsApp', value: 'Listing Est.' },
    { id: 'LD-838', name: 'The Dubois Family', type: 'Buyer', property: 'Los Naranjos Estate', stage: 'Viewing Booked', time: '1 day ago', contact: 'Phone', value: '€6.7M Listing' },
    { id: 'LD-835', name: 'Richard M.', type: 'Buyer', property: 'Marina Penthouse', stage: 'Negotiation', time: '3 days ago', contact: 'Email', value: '€3.1M Offer' },
    { id: 'LD-831', name: 'InvestCorp SL', type: 'Buyer', property: 'Palacio de Oro', stage: 'Sold', time: '1 week ago', contact: 'Phone', value: '€14M Closed' },
  ];

  const filteredLeads = leads.filter(lead => lead.stage === filter);

  return (
    <div className="fade-in max-w-7xl mx-auto h-full flex flex-col">
      <div className="mb-8 border-b border-dark-slate/10 pb-4">
        <h2 className="text-3xl font-header text-dark-slate mb-2">Leads CRM</h2>
        <p className="text-dark-slate opacity-80 font-body">Manage international client inquiries, viewings, and ongoing negotiations.</p>
      </div>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-6 min-h-0">
        
        {/* CRM Pipeline Sidebar */}
        <div className="bg-white border border-dark-slate/10 rounded shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-warm-white border-b border-dark-slate/10">
            <h3 className="font-bold text-sm uppercase tracking-widest text-dark-slate">Pipeline Stages</h3>
          </div>
          <div className="flex-grow overflow-y-auto p-2 space-y-1">
            {['New', 'Viewing Booked', 'Negotiation', 'Sold'].map(stage => (
              <button
                key={stage}
                onClick={() => setFilter(stage)}
                className={`w-full text-left px-4 py-3 rounded text-sm font-bold transition-colors flex justify-between items-center ${
                  filter === stage 
                    ? 'bg-terracotta text-white shadow' 
                    : 'text-dark-slate hover:bg-warm-white'
                }`}
              >
                {stage}
                <span className={`px-2 py-0.5 rounded-full text-xs ${filter === stage ? 'bg-white/20' : 'bg-dark-slate/10'}`}>
                  {leads.filter(l => l.stage === stage).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Inbox View */}
        <div className="md:col-span-3 bg-white border border-dark-slate/10 rounded shadow-sm flex flex-col overflow-hidden">
          <div className="p-4 border-b border-dark-slate/10 bg-warm-white flex items-center gap-2">
            <span className="font-header text-xl text-dark-slate">{filter} Inquiries</span>
            <span className="text-sm opacity-60">({filteredLeads.length})</span>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {filteredLeads.map(lead => (
              <div key={lead.id} className="border border-dark-slate/10 rounded p-4 hover:border-terracotta transition-colors shadow-sm bg-warm-white/50 cursor-pointer group">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <h4 className="font-bold text-lg text-dark-slate group-hover:text-terracotta transition-colors">{lead.name}</h4>
                    <span className="px-2 py-0.5 bg-white border border-dark-slate/20 rounded text-xs uppercase tracking-widest font-bold text-dark-slate">
                      {lead.type}
                    </span>
                  </div>
                  <span className="text-xs text-dark-slate opacity-60 flex items-center gap-1"><Clock size={12}/> {lead.time}</span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-3 rounded border border-dark-slate/5 text-sm">
                  <div>
                    <span className="block text-xs uppercase tracking-widest opacity-60 mb-1">Interest</span>
                    <span className="font-bold text-dark-slate">{lead.property}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest opacity-60 mb-1">Value Context</span>
                    <span className="font-bold text-dark-slate">{lead.value}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest opacity-60 mb-1">Pref. Contact</span>
                    <span className="flex items-center gap-1 font-bold text-dark-slate">
                      {lead.contact === 'Email' && <Mail size={14}/>}
                      {lead.contact === 'Phone' && <Phone size={14}/>}
                      {lead.contact === 'WhatsApp' && <MessageCircle size={14}/>}
                      {lead.contact}
                    </span>
                  </div>
                  <div className="flex justify-end items-center">
                    <button className="btn-secondary py-1.5 px-3 text-xs">Review Lead</button>
                  </div>
                </div>
              </div>
            ))}

            {filteredLeads.length === 0 && (
              <div className="text-center py-16 text-dark-slate opacity-60">
                <CheckCircle size={48} className="mx-auto mb-4 opacity-50" />
                <p className="font-body text-lg">No leads currently in the "{filter}" stage.</p>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default LeadsInbox;
