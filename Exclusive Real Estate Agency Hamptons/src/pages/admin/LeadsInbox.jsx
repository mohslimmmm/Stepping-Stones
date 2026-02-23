import React from 'react';
import { Search, Mail, Phone, Calendar, Clock } from 'lucide-react';
import { Button } from '../../components/Button';

const LEADS = [
  { id: 1, name: 'Eleanor Vance', intent: 'Purchase', property: 'Further Lane Estate', stage: 'Vetted', date: '2h ago', phone: '+1 (212) 555-8932', statusColor: 'bg-accentBlue' },
  { id: 2, name: 'Jonathan Pierce', intent: 'Rental', property: 'Lily Pond Lane', stage: 'Lease Signed', date: '1d ago', phone: '+1 (310) 555-1244', statusColor: 'bg-green-500' },
  { id: 3, name: 'Confidential Client', intent: 'Purchase', property: 'General Inquiry ($20M+)', stage: 'Inquiry', date: '3d ago', phone: 'via Rep', statusColor: 'bg-yellow-500' },
  { id: 4, name: 'Sarah Kensington', intent: 'Purchase', property: 'Meadow Lane Compound', stage: 'Showing Set', date: '4d ago', phone: '+44 7700 900077', statusColor: 'bg-accentBlue/60' },
];

export const LeadsInbox = () => {
  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-heading text-3xl text-primary">Leads & CRM</h1>
        <Button className="px-4 py-2 text-xs">Export CSV</Button>
      </div>

      <div className="bg-white border border-gray-200 shadow-sm flex flex-1 overflow-hidden">
        
        {/* Leads List */}
        <div className="w-1/3 border-r border-gray-200 flex flex-col bg-gray-50/30">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center w-full border border-gray-300 bg-white px-3 py-2">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search leads..."
                className="text-sm border-none focus:outline-none w-full font-body bg-transparent"
              />
            </div>
            <div className="flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-hide">
              <span className="px-3 py-1 bg-primary text-white text-xs font-body font-bold rounded-full whitespace-nowrap">All Active</span>
              <span className="px-3 py-1 bg-white border border-gray-300 text-gray-600 text-xs font-body rounded-full whitespace-nowrap">New Inquiries</span>
              <span className="px-3 py-1 bg-white border border-gray-300 text-gray-600 text-xs font-body rounded-full whitespace-nowrap">Showings</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {LEADS.map((lead, idx) => (
              <div key={lead.id} className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${idx === 0 ? 'bg-accentBlue/5 border-l-4 border-l-accentBlue' : 'hover:bg-gray-50 border-l-4 border-l-transparent'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-heading text-lg font-bold text-primary">{lead.name}</h4>
                  <span className="text-xs text-gray-400 font-body">{lead.date}</span>
                </div>
                <p className="text-sm font-body text-primary/80 mb-2 truncate">{lead.property}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="inline-block px-2 py-1 bg-white border border-gray-200 text-[10px] uppercase tracking-wider font-bold text-gray-600">
                    {lead.intent}
                  </span>
                  <div className="flex items-center text-xs font-body text-gray-500">
                    <div className={`w-2 h-2 rounded-full ${lead.statusColor} mr-2`}></div>
                    {lead.stage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Detail */}
        <div className="w-2/3 flex flex-col bg-white">
          {/* Header */}
          <div className="p-8 border-b border-gray-200 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="font-heading text-4xl text-primary">{LEADS[0].name}</h2>
                <span className="bg-accentBlue/10 text-accentBlue px-2 py-1 text-xs font-bold uppercase tracking-widest">Priority</span>
              </div>
              <p className="font-body text-primary/60 text-lg">{LEADS[0].intent} Inquiry: {LEADS[0].property}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" className="p-2"><Mail className="h-5 w-5" /></Button>
              <Button variant="secondary" className="p-2"><Phone className="h-5 w-5" /></Button>
              <Button className="px-6 py-2">Update Status</Button>
            </div>
          </div>

          {/* Details Body */}
          <div className="flex-1 overflow-y-auto p-8 font-body">
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 border border-gray-100">
                 <h4 className="text-xs uppercase tracking-widest text-primary/50 mb-4 font-bold">Contact Information</h4>
                 <div className="space-y-3 text-sm text-primary/80">
                   <p className="flex items-center"><Phone className="h-4 w-4 mr-3 text-gray-400" /> {LEADS[0].phone}</p>
                   <p className="flex items-center"><Mail className="h-4 w-4 mr-3 text-gray-400" /> e.vance@familyoffice.com</p>
                   <p className="flex items-center text-gray-500 mt-4 text-xs italic">Verified UHNW via representation.</p>
                 </div>
              </div>
              
              <div className="bg-gray-50 p-6 border border-gray-100">
                 <h4 className="text-xs uppercase tracking-widest text-primary/50 mb-4 font-bold">Inquiry Details</h4>
                 <div className="space-y-3 text-sm text-primary/80">
                   <p><span className="text-gray-500 w-24 inline-block">Source:</span> Direct Website</p>
                   <p><span className="text-gray-500 w-24 inline-block">Budget:</span> $40M - $50M</p>
                   <p><span className="text-gray-500 w-24 inline-block">Timeline:</span> Immediate / Cash</p>
                 </div>
              </div>
            </div>

            {/* Interaction History */}
            <h3 className="font-heading text-2xl text-primary mb-6 border-b border-gray-100 pb-2">Interaction Timeline</h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
               
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                 <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-accentBlue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                   <Clock className="h-4 w-4" />
                 </div>
                 <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white border border-accentBlue/20 p-4 shadow-sm">
                   <div className="flex items-center justify-between mb-1">
                     <span className="font-bold text-primary text-sm">Vetting Completed</span>
                     <span className="text-xs text-gray-500 text-right">Today, 10:30 AM</span>
                   </div>
                   <p className="text-sm text-primary/70">Verified proof of funds via family office. Approved for private showing of Further Lane Estate.</p>
                 </div>
               </div>

               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                 <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-200 text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                   <Mail className="h-4 w-4" />
                 </div>
                 <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 border border-gray-200 p-4">
                   <div className="flex items-center justify-between mb-1">
                     <span className="font-bold text-primary text-sm">Initial Inquiry Received</span>
                     <span className="text-xs text-gray-500 text-right">Yesterday, 4:15 PM</span>
                   </div>
                   <p className="text-sm text-primary/70 italic">"Client is highly interested in the Further Lane property. We require a confidential showing schedule for this weekend."</p>
                 </div>
               </div>
               
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
