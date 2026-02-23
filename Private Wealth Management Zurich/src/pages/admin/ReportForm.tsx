import { useState } from 'react';
import { FileUp, Shield, Lock, CheckCircle2 } from 'lucide-react';

const ReportForm = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const simulateUpload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-light mb-10 tracking-wide">Report <span className="italic font-normal">Management</span></h1>

      <div className="bg-white/5 border border-white/10 p-10 rounded-sm">
        {success ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
               <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl mb-4">Report Published Successfully</h3>
            <p className="text-sm text-silver/50 mb-10">
               Q4 Fiscal Performance report has been encrypted and distributed to the secure client vaults.
            </p>
            <button onClick={() => setSuccess(false)} className="text-xs tracking-widest uppercase underline underline-offset-8 text-silver hover:text-white">
               Upload Another Document
            </button>
          </div>
        ) : (
          <form className="space-y-8" onSubmit={simulateUpload}>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                   <label className="text-[10px] tracking-widest uppercase text-silver/50 block mb-3">Target Client ID</label>
                   <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:border-deep-indigo outline-none transition-all" placeholder="e.g. AS-8192-X" required />
                </div>
                <div>
                   <label className="text-[10px] tracking-widest uppercase text-silver/50 block mb-3">Report Category</label>
                   <select className="w-full bg-[#001a2c] border border-white/10 p-4 text-sm focus:border-deep-indigo outline-none transition-all">
                      <option>Quarterly Performance</option>
                      <option>Tax Statement</option>
                      <option>Custody Certificate</option>
                      <option>Ad-hoc Strategy Update</option>
                   </select>
                </div>
             </div>

             <div>
                <label className="text-[10px] tracking-widest uppercase text-silver/50 block mb-3">Publication Period</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:border-deep-indigo outline-none transition-all" placeholder="Q4 2024" />
             </div>

             <div className="border-2 border-dashed border-white/10 p-12 text-center rounded-sm hover:border-deep-indigo transition-all cursor-pointer group">
                <FileUp className="mx-auto mb-4 text-silver/30 group-hover:text-deep-indigo transition-colors" size={32} />
                <p className="text-xs tracking-widest uppercase text-silver/50">Drop Secure PDF here or click to browse</p>
                <p className="text-[8px] text-silver/20 uppercase mt-4">Max size: 50MB (AES-256 Encrypted on upload)</p>
             </div>

             <div className="p-6 bg-white/5 border-l-2 border-deep-indigo text-xs text-silver/70 leading-relaxed font-light italic">
                <Lock size={14} className="inline mr-2 text-deep-indigo" />
                Note: Once published, reports cannot be deleted. Any corrections require a superseding version trailing an immutable audit log.
             </div>

             <button 
               type="submit" 
               disabled={isUploading}
               className="w-full bg-white text-dark-slate py-4 rounded-sm text-xs tracking-[0.4em] uppercase font-bold hover:bg-deep-indigo hover:text-white transition-all flex items-center justify-center gap-3"
             >
               {isUploading ? (
                 <>
                   <div className="w-4 h-4 border-2 border-dark-slate/30 border-t-dark-slate rounded-full animate-spin"></div>
                   Encrypting & Uploading...
                 </>
               ) : (
                 <>
                   Publish to Vault
                   <Shield size={16} />
                 </>
               )}
             </button>
          </form>
        )}
      </div>

      <div className="mt-12">
        <h4 className="text-[10px] tracking-widest uppercase text-silver/30 mb-6">Recent Upload Activity</h4>
        <div className="space-y-4">
           {[
             { name: 'Q3_Performance_AS8291.pdf', size: '2.4MB', date: 'Yesterday' },
             { name: 'Tax_Year_2023_Certified.pdf', size: '4.1MB', date: '2 days ago' }
           ].map((file, idx) => (
             <div key={idx} className="flex justify-between items-center p-4 bg-white/5 border border-white/10 rounded-sm">
                <div className="flex items-center gap-3">
                   <FileUp size={16} className="text-silver/30" />
                   <span className="text-xs">{file.name}</span>
                </div>
                <div className="text-[10px] text-silver/30 uppercase tracking-widest">
                   {file.date} • {file.size}
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
