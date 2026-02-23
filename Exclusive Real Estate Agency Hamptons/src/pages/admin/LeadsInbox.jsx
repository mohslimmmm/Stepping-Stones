import React from 'react';
import { Search, Mail, Phone, Calendar, Clock } from 'lucide-react';
import { Button } from '../../components/Button';
import { motion } from 'framer-motion';

const LEADS = [
  { id: 1, name: 'Eleanor Vance', intent: 'Purchase', property: 'Further Lane Estate', stage: 'Vetted', date: '2h ago', phone: '+1 (212) 555-8932', statusColor: 'bg-accentBlue' },
  { id: 2, name: 'Jonathan Pierce', intent: 'Rental', property: 'Lily Pond Lane', stage: 'Lease Signed', date: '1d ago', phone: '+1 (310) 555-1244', statusColor: 'bg-accentGreen' },
  { id: 3, name: 'Confidential Client', intent: 'Purchase', property: 'General Inquiry ($20M+)', stage: 'Inquiry', date: '3d ago', phone: 'via Rep', statusColor: 'bg-accentBlue/40' },
  { id: 4, name: 'Sarah Kensington', intent: 'Purchase', property: 'Meadow Lane Compound', stage: 'Showing Set', date: '4d ago', phone: '+44 7700 900077', statusColor: 'bg-accentBlue/80' },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

export const LeadsInbox = () => {
  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-heading text-4xl text-primary tracking-wide">Leads & CRM</h1>
          <p className="font-body text-xs text-primary/50 uppercase tracking-[0.2em] font-bold mt-2">Confidential Client Area</p>
        </div>
        <Button variant="secondary" className="px-6 py-3 border-primary/20 hover:border-primary">Export Report</Button>
      </div>

      <div className="bg-white border border-primary/10 shadow-sm flex flex-1 overflow-hidden">
        
        {/* Leads List */}
        <div className="w-1/3 border-r border-primary/10 flex flex-col bg-background/50">
          <div className="p-6 border-b border-primary/10">
            <div className="flex items-center w-full border-b border-primary/20 bg-transparent px-2 py-3 focus-within:border-accentBlue transition-colors">
              <Search className="h-4 w-4 text-primary/40 mr-3" strokeWidth={1.5} />
              <input 
                type="text" 
                placeholder="Search clientele..."
                className="text-sm border-none focus:outline-none w-full font-body bg-transparent text-primary placeholder-primary/40"
              />
            </div>
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
              <span className="px-4 py-1.5 bg-primary text-background text-[10px] uppercase tracking-[0.2em] font-bold cursor-pointer transition-colors">All Active</span>
              <span className="px-4 py-1.5 bg-transparent border border-primary/20 text-primary hover:border-primary text-[10px] uppercase tracking-[0.2em] font-bold cursor-pointer transition-colors">New</span>
              <span className="px-4 py-1.5 bg-transparent border border-primary/20 text-primary hover:border-primary text-[10px] uppercase tracking-[0.2em] font-bold cursor-pointer transition-colors">Showings</span>
            </div>
          </div>

          <motion.div 
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex-1 overflow-y-auto"
          >
            {LEADS.map((lead, idx) => (
              <motion.div 
                key={lead.id} 
                variants={fadeUp}
                className={`p-6 border-b border-primary/5 cursor-pointer transition-colors relative group ${idx === 0 ? 'bg-white' : 'hover:bg-white'}`}
              >
                {idx === 0 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-accentBlue"></div>}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accentBlue/30 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>

                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-heading text-xl text-primary">{lead.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">{lead.date}</span>
                </div>
                <p className="text-sm font-body text-primary/70 mb-4 truncate font-light leading-relaxed">{lead.property}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2 py-1 border border-primary/10 text-[9px] uppercase tracking-[0.2em] font-bold text-primary/60">
                    {lead.intent}
                  </span>
                  <div className="flex items-center text-[10px] font-body text-primary/60 uppercase tracking-widest font-bold">
                    <div className={`w-1.5 h-1.5 ${lead.statusColor} mr-2 rounded-none`}></div>
                    {lead.stage}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Lead Detail */}
        <div className="w-2/3 flex flex-col bg-white">
          {/* Header */}
          <div className="px-10 py-8 border-b border-primary/10 flex justify-between items-start bg-background/30">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <h2 className="font-heading text-4xl text-primary">{LEADS[0].name}</h2>
                <span className="border border-accentBlue text-accentBlue px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em]">Priority Status</span>
              </div>
              <p className="font-body text-primary/70 text-lg font-light leading-relaxed">
                <span className="font-bold text-primary text-sm uppercase tracking-widest mr-2">{LEADS[0].intent} Inquiry:</span> 
                {LEADS[0].property}
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="px-4 py-0 border-primary/20 hover:border-primary hover:bg-transparent hover:text-primary"><Mail className="h-4 w-4" strokeWidth={1.5} /></Button>
              <Button variant="secondary" className="px-4 py-0 border-primary/20 hover:border-primary hover:bg-transparent hover:text-primary"><Phone className="h-4 w-4" strokeWidth={1.5} /></Button>
              <Button className="px-6 py-0">Update Status</Button>
            </div>
          </div>

          {/* Details Body */}
          <div className="flex-1 overflow-y-auto p-10 font-body">
            
            <div className="grid grid-cols-2 gap-10 mb-14">
              <div className="bg-background/50 p-8 border border-primary/5">
                 <h4 className="text-[10px] uppercase tracking-[0.2em] text-primary/40 mb-6 font-bold">Contact Profile</h4>
                 <div className="space-y-4 text-sm text-primary/80 font-light">
                   <p className="flex items-center"><Phone className="h-4 w-4 mr-4 text-primary/40" strokeWidth={1.5} /> {LEADS[0].phone}</p>
                   <p className="flex items-center"><Mail className="h-4 w-4 mr-4 text-primary/40" strokeWidth={1.5} /> e.vance@familyoffice.com</p>
                   <div className="mt-6 pt-4 border-t border-primary/5">
                    <p className="text-primary/60 text-xs italic">Verified UHNW via representation.</p>
                   </div>
                 </div>
              </div>
              
              <div className="bg-background/50 p-8 border border-primary/5">
                 <h4 className="text-[10px] uppercase tracking-[0.2em] text-primary/40 mb-6 font-bold">Inquiry Parameters</h4>
                 <div className="space-y-4 text-sm text-primary/80 font-light">
                   <p><span className="text-primary/40 uppercase tracking-widest text-[10px] font-bold w-24 inline-block">Source:</span> Direct Website</p>
                   <p><span className="text-primary/40 uppercase tracking-widest text-[10px] font-bold w-24 inline-block">Budget:</span> $40M - $50M</p>
                   <p><span className="text-primary/40 uppercase tracking-widest text-[10px] font-bold w-24 inline-block">Timeline:</span> Immediate / Cash</p>
                 </div>
              </div>
            </div>

            {/* Interaction History */}
            <h3 className="font-heading text-2xl text-primary mb-8 border-b border-primary/10 pb-4 tracking-wide">Interaction Timeline</h3>
            
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-[1px] before:bg-gradient-to-b before:from-primary/20 before:to-transparent">
               
               <div className="relative flex items-start group">
                 <div className="flex items-center justify-center w-10 h-10 border border-background bg-accentBlue text-background shadow-sm shrink-0 z-10 mt-1">
                   <Clock className="h-4 w-4" strokeWidth={1.5} />
                 </div>
                 <div className="ml-8 bg-white border border-accentBlue/20 p-6 shadow-sm w-full relative before:absolute before:top-5 before:-left-3 before:w-3 before:h-[1px] before:bg-accentBlue/20">
                   <div className="flex items-center justify-between mb-3 border-b border-primary/5 pb-3">
                     <span className="font-heading text-lg text-primary tracking-wide">Vetting Completed</span>
                     <span className="text-[10px] text-primary/40 uppercase tracking-widest font-bold">Today, 10:30 AM</span>
                   </div>
                   <p className="text-sm text-primary/70 leading-relaxed font-light">Verified proof of funds via family office. Approved for private showing of Further Lane Estate.</p>
                 </div>
               </div>

               <div className="relative flex items-start group">
                 <div className="flex items-center justify-center w-10 h-10 border border-primary/10 bg-background text-primary/50 shrink-0 z-10 mt-1">
                   <Mail className="h-4 w-4" strokeWidth={1.5} />
                 </div>
                 <div className="ml-8 bg-background/30 border border-primary/5 p-6 w-full relative before:absolute before:top-5 before:-left-3 before:w-3 before:h-[1px] before:bg-primary/10">
                   <div className="flex items-center justify-between mb-3 border-b border-primary/5 pb-3">
                     <span className="font-heading text-lg text-primary tracking-wide">Initial Inquiry Received</span>
                     <span className="text-[10px] text-primary/40 uppercase tracking-widest font-bold">Yesterday, 4:15 PM</span>
                   </div>
                   <p className="text-sm text-primary/70 italic leading-relaxed font-light">"Client is highly interested in the Further Lane property. We require a confidential showing schedule for this weekend."</p>
                 </div>
               </div>
               
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
