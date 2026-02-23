import { motion } from 'framer-motion';
import { Search, Filter, MoreVertical, Shield } from 'lucide-react';

const ClientRoster = () => {
  const clients = [
    { id: 'AS-8291-X', tier: 'Ultra High Net Worth', rm: 'B. Hoffmann', kyc: 'Approved', aum: 'CHF 45.2M' },
    { id: 'AS-7102-Y', tier: 'Family Office', rm: 'J. Dubois', kyc: 'Approved', aum: 'CHF 120.5M' },
    { id: 'AS-6631-Z', tier: 'Private Institutional', rm: 'S. Steiner', kyc: 'Pending', aum: 'CHF 28.0M' },
    { id: 'AS-5501-A', tier: 'High Net Worth', rm: 'M. Vogel', kyc: 'Renewal Required', aum: 'CHF 12.8M' },
    { id: 'AS-4412-B', tier: 'Ultra High Net Worth', rm: 'B. Hoffmann', kyc: 'Approved', aum: 'CHF 62.1M' },
    { id: 'AS-3321-C', tier: 'Family Office', rm: 'J. Dubois', kyc: 'Approved', aum: 'CHF 88.4M' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-light tracking-wide">Client <span className="italic font-normal">Roster</span></h1>
        <div className="flex gap-4">
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-silver/30" size={14} />
              <input type="text" placeholder="Search Anonymized ID..." className="bg-white/5 border border-white/10 pl-10 pr-4 py-2 text-xs rounded-sm focus:outline-none focus:border-deep-indigo transition-all w-64" />
           </div>
           <button className="flex items-center gap-2 bg-deep-indigo text-white px-6 py-2 rounded-sm text-xs tracking-widest uppercase">
              <Filter size={14} />
              Filters
           </button>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10 uppercase text-[8px] tracking-[0.3em] font-bold text-silver/30">
              <th className="px-8 py-6">Client ID (Anonymized)</th>
              <th className="px-8 py-6">Portfolio Tier</th>
              <th className="px-8 py-6">Relationship Mgr</th>
              <th className="px-8 py-6">KYC Status</th>
              <th className="px-8 py-6">Current AUM</th>
              <th className="px-8 py-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {clients.map((client, i) => (
              <motion.tr 
                key={client.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-8 py-5 font-mono text-deep-indigo">{client.id}</td>
                <td className="px-8 py-5 text-silver/70">{client.tier}</td>
                <td className="px-8 py-5 font-medium">{client.rm}</td>
                <td className="px-8 py-5">
                   <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        client.kyc === 'Approved' ? 'bg-green-500' : 
                        client.kyc === 'Pending' ? 'bg-yellow-500' : 
                        'bg-red-500'
                      }`}></div>
                      <span className="opacity-80">{client.kyc}</span>
                   </div>
                </td>
                <td className="px-8 py-5 font-light">
                   {client.aum}
                </td>
                <td className="px-8 py-5 text-right">
                   <button className="text-silver/30 hover:text-white transition-colors">
                      <MoreVertical size={16} />
                   </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        <div className="p-6 border-t border-white/5 flex justify-between items-center">
           <span className="text-[10px] text-silver/30 uppercase tracking-[0.2em]">Showing 6 of 142 total clients</span>
           <div className="flex gap-2">
              <button className="px-3 py-1 bg-white/5 text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">Prev</button>
              <button className="px-3 py-1 bg-white/5 text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">Next</button>
           </div>
        </div>
      </div>

      <div className="flex items-center gap-3 p-6 bg-deep-indigo/10 border border-deep-indigo/20 rounded-sm">
         <Shield className="text-deep-indigo" size={18} />
         <p className="text-[10px] tracking-widest uppercase text-silver/70">
            Client data is obfuscated throughout the system. Direct identity linkage is only available via the vault-level HSM protocols.
         </p>
      </div>
    </div>
  );
};

export default ClientRoster;
