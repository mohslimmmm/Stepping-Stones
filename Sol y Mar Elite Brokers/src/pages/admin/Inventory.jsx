import React, { useState } from 'react';
import { Search, Filter, Plus, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const listings = [
    { id: 'SYM-1042', title: 'Villa Aloha', zone: 'Nueva Andalucía', price: '€4,500,000', status: 'Active', agent: 'C. Mendoza' },
    { id: 'SYM-901', title: 'Los Monteros Penthouse', zone: 'Frontline Beach', price: '€2,950,000', status: 'Under Offer', agent: 'I. Santos' },
    { id: 'SYM-893', title: 'La Zagaleta Mansion', zone: 'Benahavís', price: 'POA', status: 'Active', agent: 'C. Mendoza' },
    { id: 'SYM-1105', title: 'Sierra Blanca Estate', zone: 'Golden Mile', price: '€8,200,000', status: 'Active', agent: 'E. Rostova' },
    { id: 'SYM-744', title: 'Puerto Banús Marina Apt', zone: 'Puerto Banús', price: '€1,850,000', status: 'Sold', agent: 'I. Santos' },
  ];

  return (
    <div className="admin-inventory-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="admin-page-title" style={{ fontSize: '2rem', fontFamily: 'var(--font-header)' }}>Property Inventory</h1>
        <Link to="/admin/edit/new" className="primary-btn" style={{ fontSize: '0.875rem' }}>
          <Plus size={18} style={{ marginRight: '8px' }} /> Add Listing
        </Link>
      </div>

      <div className="card p-4" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
           <div className="search-input-group" style={{ flex: 1, display: 'flex', alignItems: 'center', border: '1px solid var(--color-gray-300)', borderRadius: '8px', padding: '0.5rem 1rem' }}>
              <Search size={18} color="var(--color-gray-500)" style={{ marginRight: '8px' }}/>
              <input 
                 type="text" 
                 placeholder="Search by Ref, Title, or Zone..." 
                 className="form-input" 
                 style={{ border: 'none', padding: 0, outline: 'none', boxShadow: 'none' }}
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           <button className="secondary-btn" style={{ padding: '0.5rem 1rem' }}>
              <Filter size={18} style={{ marginRight: '8px' }} /> Filters
           </button>
        </div>

        <div className="table-responsive" style={{ width: '100%', overflowX: 'auto' }}>
           <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                 <tr style={{ borderBottom: '1px solid var(--color-gray-200)', color: 'var(--color-gray-500)', fontSize: '0.875rem' }}>
                    <th style={{ padding: '1rem' }}>Ref</th>
                    <th style={{ padding: '1rem' }}>Property</th>
                    <th style={{ padding: '1rem' }}>Zone</th>
                    <th style={{ padding: '1rem' }}>Price</th>
                    <th style={{ padding: '1rem' }}>Status</th>
                    <th style={{ padding: '1rem' }}>Agent</th>
                    <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
                 </tr>
              </thead>
              <tbody>
                 {listings.map(listing => (
                   <tr key={listing.id} style={{ borderBottom: '1px solid var(--color-gray-100)', transition: 'background-color 0.2s', '&:hover': { backgroundColor: 'var(--color-off-white)' } }}>
                      <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--color-accent-terracotta)' }}>{listing.id}</td>
                      <td style={{ padding: '1rem', fontWeight: 500 }}>{listing.title}</td>
                      <td style={{ padding: '1rem', color: 'var(--color-gray-500)' }}>{listing.zone}</td>
                      <td style={{ padding: '1rem', fontWeight: 500 }}>{listing.price}</td>
                      <td style={{ padding: '1rem' }}>
                         <span style={{ 
                           padding: '0.25rem 0.75rem', 
                           borderRadius: '12px', 
                           fontSize: '0.75rem', 
                           fontWeight: 600,
                           backgroundColor: listing.status === 'Active' ? '#dcfce7' : listing.status === 'Under Offer' ? '#fef08a' : '#f3f4f6',
                           color: listing.status === 'Active' ? '#166534' : listing.status === 'Under Offer' ? '#854d0e' : '#374151'
                         }}>
                           {listing.status}
                         </span>
                      </td>
                      <td style={{ padding: '1rem', color: 'var(--color-gray-500)' }}>{listing.agent}</td>
                      <td style={{ padding: '1rem', textAlign: 'right' }}>
                         <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                            <Link to={`/admin/edit/${listing.id}`} style={{ color: 'var(--color-gray-500)' }}><Edit size={18} /></Link>
                            <button style={{ background: 'none', border: 'none', color: 'var(--color-accent-terracotta)', cursor: 'pointer' }}><Trash2 size={18} /></button>
                         </div>
                      </td>
                   </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
