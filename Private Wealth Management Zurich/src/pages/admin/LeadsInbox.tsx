import { motion } from 'framer-motion';
import { Mail, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const LeadsInbox = () => {
  const leads = [
    { id: 'LD-9921', status: 'KYC/AML Check', priority: 'High', source: 'Secure Portal', time: '10m ago' },
    { id: 'LD-9920', status: 'New Lead', priority: 'Medium', source: 'Referral', time: '2h ago' },
    { id: 'LD-9918', status: 'Onboarding', priority: 'Critical', source: 'Secure Portal', time: '5h ago' },
    { id: 'LD-9915', status: 'Active Client', priority: 'Low', source: 'Geneva Office', time: '1d ago' },
  ];

  return (
    <div className="space-y-10">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-light tracking-wide">Encrypted <span className="italic font-normal">CRM</span></h1>
          <p className="text-xs text-silver/30 tracking-widest uppercase mt-2">Leads Pipeline & Onboarding Status</p>
        </div>
        <div className="bg-green-500/10 text-green-500 px-4 py-2 rounded-sm text-[10px] tracking-widest uppercase font-bold flex items-center gap-2">
           <ShieldCheck size={14} />
           All Lead Data PGP Encrypted
        </div>
      </header>

      {/* Pipeline View */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {['New Lead', 'KYC/AML Check', 'Onboarding', 'Active Client'].map((stage, i) => (
          <div key={stage} className="space-y-4">
             <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-silver font-bold">{stage}</h4>
                <span className="text-[10px] text-silver/20">{leads.filter(l => l.status === stage).length}</span>
             </div>
             
             {leads.filter(l => l.status === stage).map((lead) => (
               <motion.div 
                 key={lead.id}
                 layoutId={lead.id}
                 className="p-5 bg-white/5 border border-white/10 rounded-sm hover:border-deep-indigo transition-all cursor-pointer group"
               >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono text-deep-indigo">{lead.id}</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      lead.priority === 'Critical' ? 'bg-red-500' :
                      lead.priority === 'High' ? 'bg-orange-500' :
                      'bg-silver/30'
                    }`}></div>
                  </div>
                  <h5 className={`text-[10px] tracking-widest uppercase mb-1 font-bold ${
                    lead.priority === 'Critical' ? 'text-white' : 'text-silver/70'
                  }`}>Source: {lead.source}</h5>
                  <div className="flex items-center gap-2 text-[8px] text-silver/30 uppercase mt-4">
                    <Clock size={10} />
                    {lead.time}
                  </div>
                  <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                     <ArrowRight size={14} className="text-deep-indigo" />
                  </div>
               </motion.div>
             ))}
             
             <button className="w-full py-3 border border-dashed border-white/5 text-[8px] tracking-[0.3em] uppercase text-silver/20 hover:text-silver/50 hover:bg-white/[0.02] transition-all">
                + Manual Entry
             </button>
          </div>
        ))}
      </div>

      {/* Inbox Teaser */}
      <div className="bg-white/5 border border-white/10 rounded-sm">
         <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <h3 className="text-xs tracking-widest uppercase text-silver">Recent Inquiries</h3>
            <button className="text-[10px] uppercase text-deep-indigo font-bold hover:underline">View All Messages</button>
         </div>
         <div className="divide-y divide-white/5">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-6 flex gap-6 hover:bg-white/[0.01] transition-colors cursor-pointer group">
                 <div className="w-10 h-10 bg-deep-indigo/20 rounded-full flex items-center justify-center text-deep-indigo shrink-0">
                    <Mail size={16} />
                 </div>
                 <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1">
                       <h4 className="text-sm font-medium">Inquiry from Secure Portal #PX{i}92</h4>
                       <span className="text-[10px] text-silver/30 uppercase tracking-widest">3h ago</span>
                    </div>
                    <p className="text-xs text-silver/50 leading-relaxed font-light line-clamp-1">
                       Encryption protocol established. Subject: Inquiry regarding Ultra-High Net Worth Asset Management Mandate for European family office...
                    </p>
                 </div>
                 <div className="self-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                    <ArrowRight size={18} className="text-silver/30" />
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default LeadsInbox;
