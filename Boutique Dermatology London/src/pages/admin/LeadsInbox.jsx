import { AlertCircle, Clock, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

export default function LeadsInbox() {
  const leads = [
    { id: 1, name: 'Sophia Sterling', email: 's.sterling@example.com', concern: 'Acne Scarring (TCA Cross)', urgency: 'High', date: 'Just now', status: 'Unread' },
    { id: 2, name: 'James Kensington', email: 'james.k@example.com', concern: 'Skin Cancer Screening (Urgent Review)', urgency: 'Critical', date: '2 hours ago', status: 'Unread' },
    { id: 3, name: 'Olivia Montgomery', email: 'omontgomery@example.co.uk', concern: 'Bespoke Laser Resurfacing Consultation', urgency: 'Normal', date: '1 day ago', status: 'Read' },
    { id: 4, name: 'William Thorne', email: 'w.thorne@example.com', concern: 'Follow-up: Injectables', urgency: 'Normal', date: '1 day ago', status: 'Read' },
    { id: 5, name: 'Isabella Worthington', email: 'bella.w@example.com', concern: 'General Dermatology Inquiry', urgency: 'Low', date: '2 days ago', status: 'Responded' },
  ];

  const getUrgencyColor = (urgency) => {
    switch(urgency) {
      case 'Critical': return 'text-red-600 bg-red-100 border-red-200';
      case 'High': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'Normal': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'Low': return 'text-background/60 bg-background/10 border-background/20';
      default: return 'text-background/60 bg-background/10 border-background/20';
    }
  };

  const getUrgencyIcon = (urgency) => {
    switch(urgency) {
      case 'Critical': return <AlertCircle className="w-4 h-4 mr-1 text-red-600" />;
      case 'High': return <Clock className="w-4 h-4 mr-1 text-orange-600" />;
      default: return null;
    }
  };

  return (
    <div className="bg-foreground text-background shadow-sm border border-foreground/10 min-h-[80vh] flex">
      {/* Sidebar List */}
      <div className="w-1/3 border-r border-background/10 flex flex-col">
        <div className="p-4 border-b border-background/10 bg-background/5">
          <h2 className="font-serif text-xl mb-4">Inbox (2 New)</h2>
          <div className="flex space-x-2">
            <select title="filter" className="bg-transparent border border-background/20 text-sm px-2 py-1 focus:outline-none flex-1 font-light">
              <option>All Urgencies</option>
              <option>Critical Only</option>
              <option>High Priority</option>
            </select>
            <select title="status" className="bg-transparent border border-background/20 text-sm px-2 py-1 focus:outline-none w-24 font-light">
              <option>Unread</option>
              <option>All</option>
            </select>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {leads.map((lead) => (
            <div 
              key={lead.id} 
              className={clsx(
                "p-4 border-b border-background/5 cursor-pointer hover:bg-background/5 transition-colors",
                lead.status === 'Unread' ? 'bg-background/5' : ''
              )}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={clsx("font-semibold text-sm", lead.status === 'Unread' ? 'text-background' : 'text-background/70')}>{lead.name}</span>
                <span className="text-xs text-background/50">{lead.date}</span>
              </div>
              <p className="text-xs text-background/60 truncate mb-3 font-light">{lead.concern}</p>
              <div className="flex items-center">
                <span className={clsx("inline-flex items-center px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider border", getUrgencyColor(lead.urgency))}>
                  {getUrgencyIcon(lead.urgency)}
                  {lead.urgency}
                </span>
                {lead.status === 'Unread' && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-primary" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Reading Pane */}
      <div className="flex-1 flex flex-col bg-background/5">
        <div className="p-8 border-b border-background/10 bg-foreground flex justify-between items-start">
           <div>
             <h3 className="text-2xl font-serif mb-2">Skin Cancer Screening (Urgent Review)</h3>
             <div className="flex items-center space-x-4 text-sm font-light text-background/70">
               <span className="font-medium text-background">James Kensington</span>
               <span>&lt;james.k@example.com&gt;</span>
               <span>•</span>
               <span>2 hours ago</span>
             </div>
           </div>
           <div className="flex space-x-2">
             <button className="px-4 py-2 border border-background/20 text-xs uppercase tracking-widest font-semibold hover:bg-background/5 transition-colors">
               Mark as Read
             </button>
             <button className="px-4 py-2 bg-primary text-background text-xs uppercase tracking-widest font-semibold hover:bg-primary-hover transition-colors flex items-center">
               <CheckCircle2 className="w-4 h-4 mr-2" />
               Convert to Patient
             </button>
           </div>
        </div>
        
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="prose prose-invert max-w-none text-background/80 font-light text-sm leading-relaxed">
            <p>Dear Clinic Coordination Team,</p>
            <p>I am reaching out to request an urgent consultation and screening. I have a preexisting history of dysplastic naevi and my previous dermatologist advised me to monitor a specific lesion on my left shoulder.</p>
            <p>Over the past four weeks, I have noticed rapid morphological changes in the lesion, specifically irregular borders and a darkening in pigmentation. Given the rapid evolution, I am highly concerned and would appreciate the earliest possible appointment with Dr. Sinclair or a senior consultant for an excision evaluation if deemed necessary.</p>
            <p>I am available at any time this week. Please let me know how quickly I can be seen.</p>
            <p>Kind regards,</p>
            <p>James Kensington<br />+44 7911 123456</p>
          </div>

          <hr className="my-8 border-background/10" />

           <div className="bg-foreground border border-background/10 p-6">
             <h4 className="text-sm font-semibold uppercase tracking-widest mb-4">Quick Reply</h4>
             <textarea className="w-full bg-background/5 border border-background/20 p-4 font-light text-sm focus:outline-none focus:border-primary resize-none mb-4" rows="4" placeholder="Draft your response..."></textarea>
             <div className="flex justify-end">
               <button className="px-6 py-2 bg-background text-foreground text-xs uppercase tracking-widest font-semibold hover:bg-background/90 transition-colors">
                 Send Response
               </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
