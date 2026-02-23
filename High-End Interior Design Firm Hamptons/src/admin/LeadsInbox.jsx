import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, CheckCircle2, Clock, Trash2 } from 'lucide-react';

const LeadsInbox = () => {
  const leads = [
    { id: 1, name: 'Julianne Moore', email: 'jule@cinema.com', phone: '631-555-0100', status: 'New Lead', date: '2h ago', project: 'Montauk Estate' },
    { id: 2, name: 'Robert De Niro', email: 'rob@tribeca.com', phone: '212-555-0200', status: 'Consult Scheduled', date: '5h ago', project: 'Water Mill Barn' },
    { id: 3, name: 'Gwyneth Paltrow', email: 'g@goop.com', phone: '310-555-0300', status: 'Proposal Sent', date: 'Yesterday', project: 'Amagansett Retreat' },
    { id: 4, name: 'Anderson Cooper', email: 'anderson@cnn.com', phone: '212-555-0400', status: 'Active Project', date: '2 days ago', project: 'Quogue Loft' },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'New Lead': return 'bg-linen text-sand border-sand/20';
      case 'Consult Scheduled': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Proposal Sent': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Active Project': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-serif text-slate-800">Leads Inbox</h2>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">Managed inquiries and consultation pipelines</p>
        </div>
        <div className="flex bg-white rounded-8 border border-slate-200 p-1">
          <button className="px-4 py-2 bg-slate-100 text-slate-800 rounded-8 text-xs font-bold uppercase tracking-widest transition-all">All</button>
          <button className="px-4 py-2 text-slate-400 hover:text-slate-600 rounded-8 text-xs font-bold uppercase tracking-widest transition-all">New</button>
          <button className="px-4 py-2 text-slate-400 hover:text-slate-600 rounded-8 text-xs font-bold uppercase tracking-widest transition-all">Active</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {leads.map((lead) => (
          <motion.div
            key={lead.id}
            whileHover={{ scale: 1.005 }}
            className="bg-white p-6 rounded-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-full bg-linen flex items-center justify-center text-sand font-serif text-2xl shadow-inner">
                {lead.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <h3 className="text-lg font-bold text-slate-800">{lead.name}</h3>
                  <span className={`text-[9px] px-2 py-1 rounded-full border font-bold uppercase tracking-widest ${getStatusStyle(lead.status)}`}>
                    {lead.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 flex items-center space-x-3">
                  <span className="flex items-center space-x-1"><Mail size={12} /> <span>{lead.email}</span></span>
                  <span className="flex items-center space-x-1"><Phone size={12} /> <span>{lead.phone}</span></span>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:items-end space-y-3">
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Interested Project</p>
                  <p className="text-sm font-medium text-slate-700">{lead.project}</p>
                </div>
                <div className="h-10 w-[1px] bg-slate-100 mx-2"></div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Received</p>
                  <p className="text-sm font-medium text-slate-700">{lead.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-8 transition-all" title="Schedule Consultation">
                  <Calendar size={18} />
                </button>
                <button className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-8 transition-all" title="Mark as Active">
                  <CheckCircle2 size={18} />
                </button>
                <button className="p-2 text-slate-400 hover:text-amber-500 hover:bg-amber-50 rounded-8 transition-all" title="Set Reminder">
                  <Clock size={18} />
                </button>
                <div className="w-[1px] h-6 bg-slate-100 mx-1"></div>
                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-8 transition-all" title="Archive">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-sand transition-colors">
          View Archived Inquiries
        </button>
      </div>
    </div>
  );
};

export default LeadsInbox;
