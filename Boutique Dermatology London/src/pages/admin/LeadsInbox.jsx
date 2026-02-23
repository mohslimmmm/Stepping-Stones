import { useState } from 'react';
import { Mail, Clock, AlertTriangle, CheckCircle, Search } from 'lucide-react';

const LeadsInbox = () => {
  const [filter, setFilter] = useState('all');

  const leads = [
    { id: 'L-101', name: 'Eleanor Vance', urgency: 'High', service: 'Bespoke Laser Resurfacing', date: '2 hours ago', status: 'Unread' },
    { id: 'L-102', name: 'James Thorne', urgency: 'Medium', service: 'Mole Mapping', date: '5 hours ago', status: 'Read' },
    { id: 'L-103', name: 'Sophia Sterling', urgency: 'Routine', service: 'General Assessment', date: '1 day ago', status: 'Replied' },
    { id: 'L-104', name: 'Victoria Palmer', urgency: 'High', service: 'Cellular Renewal Peel', date: '1 day ago', status: 'Unread' },
  ];

  const getUrgencyIcon = (urgency) => {
    switch(urgency) {
      case 'High': return <AlertTriangle size={16} className="text-red-600" />;
      case 'Medium': return <Clock size={16} className="text-yellow-600" />;
      default: return <CheckCircle size={16} className="text-slate-grey" />;
    }
  };

  return (
    <div className="fade-in max-w-6xl mx-auto h-full flex flex-col">
      <div className="mb-8 border-b border-slate-grey/20 pb-4">
        <h2 className="text-3xl font-header text-slate-grey-dark mb-2">Leads Inbox</h2>
        <p className="text-slate-grey opacity-80 font-body">Manage and triage patient consultation requests.</p>
      </div>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-8 min-h-0">
        
        {/* Inbox List */}
        <div className="md:col-span-1 bg-white border border-slate-grey/20 flex flex-col shadow-sm">
          <div className="p-4 border-b border-slate-grey/10">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-grey opacity-50" size={16} />
              <input type="text" placeholder="Search leads..." className="w-full pl-10 pr-4 py-2 border border-slate-grey/20 focus:outline-none focus:border-slate-dark font-body text-sm bg-slate-grey/5" />
            </div>
            <div className="flex gap-2 text-xs uppercase tracking-widest font-bold">
              <button 
                className={`flex-1 py-1 text-center border transition-colors ${filter === 'all' ? 'border-slate-dark text-slate-grey-dark' : 'border-transparent text-slate-grey hover:border-slate-grey/20'}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`flex-1 py-1 text-center border transition-colors ${filter === 'unread' ? 'border-slate-dark text-slate-grey-dark' : 'border-transparent text-slate-grey hover:border-slate-grey/20'}`}
                onClick={() => setFilter('unread')}
              >
                Unread
              </button>
            </div>
          </div>

          <div className="overflow-y-auto flex-grow p-2 space-y-2">
            {leads.map((lead) => (
              <div key={lead.id} className={`p-4 border border-slate-grey/10 cursor-pointer hover:bg-slate-grey-grey/5 transition-colors ${lead.status === 'Unread' ? 'bg-white border-l-4 border-l-blush' : 'bg-slate-grey/5'}`}>
                <div className="flex justify-between items-start mb-1">
                  <h4 className={`font-body text-sm ${lead.status === 'Unread' ? 'font-bold text-slate-grey-dark' : 'text-slate-grey'}`}>{lead.name}</h4>
                  <span className="text-xs text-slate-grey opacity-60">{lead.date}</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs uppercase tracking-widest text-slate-grey opacity-80">{lead.service}</span>
                  <div className="flex items-center gap-1" title={lead.urgency}>
                    {getUrgencyIcon(lead.urgency)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Detail View */}
        <div className="md:col-span-2 bg-white border border-slate-grey/20 p-8 shadow-sm flex flex-col">
          <div className="border-b border-slate-grey/10 pb-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-header text-slate-grey-dark mb-1">Eleanor Vance</h3>
                <span className="text-sm font-body text-slate-grey opacity-80 flex items-center gap-2"><Mail size={14} /> eleanor.vance@example.com</span>
              </div>
              <div className="bg-red-50 text-red-700 border border-red-200 px-3 py-1 text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                <AlertTriangle size={14} /> High Urgency
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6 bg-slate-grey/5 p-4 border border-slate-grey/10">
              <div>
                <span className="block text-xs uppercase tracking-widest text-slate-grey opacity-60 font-bold mb-1">Interested In</span>
                <span className="font-body text-slate-grey-dark text-sm">Bespoke Laser Resurfacing</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-slate-grey opacity-60 font-bold mb-1">Phone Number</span>
                <span className="font-body text-slate-grey-dark text-sm">+44 7700 900077</span>
              </div>
            </div>
          </div>

          <div className="flex-grow">
            <h4 className="text-xs uppercase tracking-widest text-slate-grey opacity-60 font-bold mb-3">Message</h4>
            <div className="font-body text-slate-grey leading-relaxed text-sm bg-ivory p-6 border border-slate-grey/10">
              <p>Dear Harley Street Skin Bespoke,</p>
              <br/>
              <p>I am exploring options for advanced laser resurfacing to address severe post-inflammatory hyperpigmentation. I have an important event coming up in 6 weeks and need to understand if the downtime from your Erbium protocols aligns with my schedule.</p>
              <br/>
              <p>I am available for a consultation any time next Tuesday or Thursday afternoon.</p>
              <br/>
              <p>Best regards,<br/>Eleanor</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-grey/10">
            <div className="flex gap-4">
              <button className="btn-primary flex-1 bg-slate-dark text-ivory">Reply to Lead</button>
              <button className="btn-secondary">Mark as Addressed</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeadsInbox;
