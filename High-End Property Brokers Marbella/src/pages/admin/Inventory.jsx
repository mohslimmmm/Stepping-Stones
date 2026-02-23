import { useState } from 'react';
import { Search, Filter, Edit, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const properties = [
    { id: 'villa-aloha', ref: 'V-ALOHA-01', name: 'Villa Aloha', zone: 'Nueva Andalucía', type: 'Villa', price: '€4,950,000', status: 'Active' },
    { id: 'villa-sierra', ref: 'V-SIERR-02', name: 'Villa Sierra Blanca', zone: 'Golden Mile', type: 'Villa', price: '€8,500,000', status: 'Active' },
    { id: 'penthouse-marina', ref: 'P-MARIN-03', name: 'Marina Penthouse', zone: 'Puerto Banús', type: 'Penthouse', price: '€3,200,000', status: 'Under Offer' },
    { id: 'villa-los-naranjos', ref: 'V-NARAN-04', name: 'Los Naranjos Estate', zone: 'Golf Valley', type: 'Villa', price: '€6,700,000', status: 'Active' },
    { id: 'golden-mile-mansion', ref: 'V-PALAC-05', name: 'Palacio de Oro', zone: 'Golden Mile', type: 'Villa', price: '€14,000,000', status: 'Off-Market (Pocket)' },
    { id: 'golf-apartment', ref: 'A-BRISA-06', name: 'Las Brisas View', zone: 'Golf Valley', type: 'Apartment', price: '€1,450,000', status: 'Sold' },
  ];

  const filteredProperties = properties.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.ref.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.zone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Under Offer': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Sold': return 'bg-slate-100 text-slate-800 border-slate-200';
      case 'Off-Market (Pocket)': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="fade-in max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-header text-dark-slate mb-2">Property Portfolio</h2>
          <p className="text-dark-slate opacity-80 font-body">Manage all mandates, update status, and track pricing.</p>
        </div>
        <Link to="/admin/edit" className="btn-primary hover-lift">
          Add New Mandate
        </Link>
      </div>

      <div className="bg-white rounded border border-dark-slate/10 shadow-sm overflow-hidden flex flex-col">
        {/* Controls */}
        <div className="p-4 border-b border-dark-slate/10 bg-warm-white flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-slate opacity-50" size={18} />
            <input 
              type="text" 
              placeholder="Search ref, name, or zone..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-dark-slate/20 rounded focus:outline-none focus:border-terracotta font-body text-sm"
            />
          </div>
          <button className="flex items-center gap-2 btn-secondary py-2 px-4 text-sm w-full sm:w-auto">
            <Filter size={16} /> Filters
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-warm-white-dark/50 border-b border-dark-slate/10">
                <th className="p-4 font-bold text-xs uppercase tracking-widest text-dark-slate opacity-70">Ref Number</th>
                <th className="p-4 font-bold text-xs uppercase tracking-widest text-dark-slate opacity-70">Property Details</th>
                <th className="p-4 font-bold text-xs uppercase tracking-widest text-dark-slate opacity-70">Zone</th>
                <th className="p-4 font-bold text-xs uppercase tracking-widest text-dark-slate opacity-70">Status</th>
                <th className="p-4 font-bold text-xs uppercase tracking-widest text-dark-slate opacity-70">Listing Price</th>
                <th className="p-4 font-bold text-xs uppercase tracking-widest text-dark-slate opacity-70 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-slate/10 align-middle">
              {filteredProperties.map((property) => (
                <tr key={property.id} className="hover:bg-warm-white transition-colors group">
                  <td className="p-4 font-body text-sm font-bold text-dark-slate">{property.ref}</td>
                  <td className="p-4">
                    <p className="font-bold text-dark-slate font-body text-sm mb-1">{property.name}</p>
                    <p className="text-xs text-dark-slate opacity-60 font-body uppercase tracking-wide">{property.type}</p>
                  </td>
                  <td className="p-4 font-body text-sm text-dark-slate">{property.zone}</td>
                  <td className="p-4">
                    <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded border ${getStatusColor(property.status)}`}>
                      {property.status}
                    </span>
                  </td>
                  <td className="p-4 font-body font-bold text-dark-slate">{property.price}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link to={`/listing/${property.id}`} className="p-2 text-dark-slate hover:text-terracotta hover:bg-white rounded transition-colors border border-transparent hover:border-dark-slate/10" title="View Front-end">
                        <Eye size={18} />
                      </Link>
                      <Link to={`/admin/edit?id=${property.id}`} className="p-2 text-dark-slate hover:text-terracotta hover:bg-white rounded transition-colors border border-transparent hover:border-dark-slate/10" title="Edit Listing">
                        <Edit size={18} />
                      </Link>
                      <button className="p-2 text-dark-slate hover:text-red-500 hover:bg-white rounded transition-colors border border-transparent hover:border-dark-slate/10" title="Delete Mandate">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {filteredProperties.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-dark-slate opacity-60 font-body">
                    No properties match your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-dark-slate/10 text-xs font-body text-dark-slate opacity-60 uppercase tracking-widest bg-warm-white">
          Showing {filteredProperties.length} mandates
        </div>
      </div>
    </div>
  );
};

export default Inventory;
