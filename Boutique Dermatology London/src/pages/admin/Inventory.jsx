import { Plus, Search, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Inventory() {
  const items = [
    { id: 1, type: 'Protocol', name: 'Bespoke Laser Resurfacing', category: 'Medical Device', status: 'Active', sku: 'PR-LSR-01' },
    { id: 2, type: 'Retail', name: 'Advanced C E Ferulic Formulation', category: 'Antioxidant', status: 'Low Stock', sku: 'SK-CEF-99' },
    { id: 3, type: 'Protocol', name: 'Cellular Injectables', category: 'Biostimulator', status: 'Active', sku: 'PR-INJ-04' },
    { id: 4, type: 'Retail', name: 'Triple Lipid Restore 2:4:2', category: 'Barrier Repair', status: 'In Stock', sku: 'SK-TLR-42' },
    { id: 5, type: 'Protocol', name: 'Clinical Acne Resolution', category: 'Chemical Peel', status: 'Active', sku: 'PR-ACN-02' },
  ];

  return (
    <div className="bg-foreground text-background shadow-sm border border-foreground/10 min-h-[80vh]">
      {/* Header */}
      <div className="p-6 border-b border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="font-serif text-2xl">Inventory & Services</h2>
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-background/40" />
            <input 
              type="text" 
              placeholder="Search registry..." 
              className="w-full sm:w-64 pl-10 pr-4 py-2 bg-background/5 border border-background/20 focus:outline-none focus:border-primary text-sm"
            />
          </div>
          <Link 
            to="/admin/edit" 
            className="flex items-center space-x-2 bg-primary text-background px-4 py-2 hover:bg-primary-hover transition-colors text-sm uppercase tracking-wider font-semibold"
          >
            <Plus className="w-4 h-4" />
            <span>Add New</span>
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-background/5 border-b border-background/10 text-xs uppercase tracking-widest text-background/60">
            <tr>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">SKU / ID</th>
              <th className="px-6 py-4 font-semibold">Type</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-background/10">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-background/5 transition-colors group">
                <td className="px-6 py-4 font-medium">{item.name}</td>
                <td className="px-6 py-4 text-background/60 text-sm font-mono">{item.sku}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold ${item.type === 'Protocol' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                    {item.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-background/80 text-sm">{item.category}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold uppercase tracking-wider ${
                    item.status === 'Active' || item.status === 'In Stock' 
                      ? 'text-green-600' 
                      : 'text-orange-600'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link to={`/admin/edit/${item.id}`} className="text-background/50 hover:text-primary transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </Link>
                    <button className="text-background/50 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="text-background/50 hover:text-background transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination (Static) */}
      <div className="p-4 border-t border-background/10 flex justify-between items-center text-sm text-background/60">
        <span>Showing 1 to 5 of 42 entries</span>
        <div className="flex space-x-1">
          <button className="px-3 py-1 border border-background/20 hover:bg-background/10 disabled:opacity-50" disabled>Prev</button>
          <button className="px-3 py-1 bg-primary text-background font-semibold">1</button>
          <button className="px-3 py-1 border border-background/20 hover:bg-background/10">2</button>
          <button className="px-3 py-1 border border-background/20 hover:bg-background/10">3</button>
          <button className="px-3 py-1 border border-background/20 hover:bg-background/10">Next</button>
        </div>
      </div>
    </div>
  );
}
