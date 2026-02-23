import { useState } from 'react';
import { Search, Plus, Filter, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('treatments');

  const treatments = [
    { id: 'TRT-001', name: 'Bespoke Laser Resurfacing', category: 'Laser', price: '£850', duration: '60 min', status: 'Active' },
    { id: 'TRT-002', name: 'Molecular Hydration Therapy', category: 'Injectables', price: '£450', duration: '45 min', status: 'Active' },
    { id: 'TRT-003', name: 'Cellular Renewal Peel', category: 'Chemical', price: '£300', duration: '30 min', status: 'Active' },
    { id: 'TRT-004', name: 'Advanced Mole Mapping', category: 'Diagnostic', price: '£250', duration: '45 min', status: 'Active' },
  ];

  const products = [
    { id: 'PRD-001', name: 'Triple Lipid Restore', brand: 'SkinCeuticals', stock: 12, price: '£135', status: 'Low Stock' },
    { id: 'PRD-002', name: 'C E Ferulic', brand: 'SkinCeuticals', stock: 4, price: '£165', status: 'Reorder' },
    { id: 'PRD-003', name: 'Retinol 0.5 Refining Night Cream', brand: 'SkinCeuticals', stock: 24, price: '£80', status: 'In Stock' },
    { id: 'PRD-004', name: 'TNS Advanced+ Serum', brand: 'SkinMedica', stock: 8, price: '£295', status: 'In Stock' },
  ];

  return (
    <div className="fade-in max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-8 border-b border-slate-grey/20 pb-4">
        <div>
          <h2 className="text-3xl font-header text-slate-grey-dark mb-2">Inventory & Services</h2>
          <p className="text-slate-grey opacity-80 font-body">Manage clinical protocols and premium retail stock.</p>
        </div>
        <Link to="/admin/edit" className="btn-primary flex items-center gap-2">
          <Plus size={16} /> Add New
        </Link>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex border border-slate-grey/20 bg-white">
          <button 
            className={`px-6 py-2 text-sm uppercase tracking-widest font-bold transition-colors ${activeTab === 'treatments' ? 'bg-slate-dark text-ivory' : 'text-slate-grey hover:bg-slate-grey-grey/10'}`}
            onClick={() => setActiveTab('treatments')}
          >
            Treatments
          </button>
          <button 
            className={`px-6 py-2 text-sm uppercase tracking-widest font-bold transition-colors ${activeTab === 'products' ? 'bg-slate-dark text-ivory' : 'text-slate-grey hover:bg-slate-grey-grey/10'}`}
            onClick={() => setActiveTab('products')}
          >
            Retail Products
          </button>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-grey opacity-50" size={16} />
            <input type="text" placeholder={`Search ${activeTab}...`} className="w-full pl-10 pr-4 py-2 border border-slate-grey/20 focus:outline-none focus:border-slate-dark font-body text-sm" />
          </div>
          <button className="p-2 border border-slate-grey/20 text-slate-grey hover:bg-slate-grey-grey/10 transition-colors bg-white">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-grey/20 overflow-x-auto shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-grey/20 bg-slate-grey/5">
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-slate-grey-dark">ID</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-slate-grey-dark">Name</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-slate-grey-dark">{activeTab === 'treatments' ? 'Category' : 'Brand'}</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-slate-grey-dark">{activeTab === 'treatments' ? 'Duration' : 'Stock'}</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-slate-grey-dark">Price</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-slate-grey-dark">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {(activeTab === 'treatments' ? treatments : products).map((item) => (
              <tr key={item.id} className="border-b border-slate-grey/10 hover:bg-slate-grey-grey/5 transition-colors font-body text-sm">
                <td className="p-4 text-slate-grey opacity-70">{item.id}</td>
                <td className="p-4 font-bold text-slate-grey-dark">{item.name}</td>
                <td className="p-4 text-slate-grey">{activeTab === 'treatments' ? item.category : item.brand}</td>
                <td className="p-4 text-slate-grey">{activeTab === 'treatments' ? item.duration : item.stock}</td>
                <td className="p-4 text-slate-grey">{item.price}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs border ${
                    item.status === 'Active' || item.status === 'In Stock' 
                      ? 'border-green-600 text-green-700' 
                      : item.status === 'Reorder' || item.status === 'Low Stock' 
                        ? 'border-red-600 text-red-700' 
                        : 'border-slate-grey text-slate-grey'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-slate-grey opacity-50 hover:opacity-100"><MoreVertical size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
