import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Plus, Filter } from 'lucide-react';

const PROPERTIES_DATA = [
  { id: 'p1', name: 'Villa Paloma', type: 'Cliffside Villa', status: 'Active', rate: '€45,000' },
  { id: 'p2', name: 'Penthouse Azure', type: 'Penthouse', status: 'Active', rate: '€28,000' },
  { id: 'p3', name: 'Estate Grimaldi', type: 'Event Space', status: 'Maintenance', rate: '€85,000' },
  { id: 'p4', name: 'Villa Jardin', type: 'Cliffside Villa', status: 'Active', rate: '€50,000' },
  { id: 'p5', name: 'Château Ocean', type: 'Event Space', status: 'Draft', rate: '€110,000' },
];

const AdminProperties = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="admin-properties">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Property Management</h1>
          <p className="admin-page-subtitle">Manage your portfolio, update pricing, and set availability.</p>
        </div>
        <Link to="/admin/properties/new" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Plus size={18} /> Add Property
        </Link>
      </div>

      <div className="admin-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder="Search properties..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-primary)',
                width: '300px'
              }}
            />
            <button className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.5rem 1rem' }}>
              <Filter size={16} /> Filter
            </button>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ 
              borderBottom: '1px solid var(--color-border)', 
              color: 'var(--color-text-muted)', 
              fontSize: '0.85rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              textAlign: 'left' 
            }}>
              <th style={{ padding: '1rem', fontWeight: 600 }}>Property Name</th>
              <th style={{ padding: '1rem', fontWeight: 600 }}>Type</th>
              <th style={{ padding: '1rem', fontWeight: 600 }}>Status</th>
              <th style={{ padding: '1rem', fontWeight: 600 }}>Weekly Rate</th>
              <th style={{ padding: '1rem', fontWeight: 600, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {PROPERTIES_DATA.map(prop => (
              <tr key={prop.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '1rem', fontWeight: 500 }}>{prop.name}</td>
                <td style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>{prop.type}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    backgroundColor: prop.status === 'Active' ? '#dcfce7' : prop.status === 'Maintenance' ? '#fef08a' : '#f1f5f9',
                    color: prop.status === 'Active' ? '#166534' : prop.status === 'Maintenance' ? '#854d0e' : '#475569',
                  }}>
                    {prop.status}
                  </span>
                </td>
                <td style={{ padding: '1rem', fontWeight: 500 }}>{prop.rate}</td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                    <Link to={`/admin/properties/edit/${prop.id}`} className="icon-btn" title="Edit">
                      <Edit size={16} />
                    </Link>
                    <button className="icon-btn" style={{ color: '#ef4444' }} title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProperties;
