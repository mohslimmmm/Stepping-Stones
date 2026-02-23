import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, Edit, Trash2, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ListingsTable.css';

const ListingsTable = () => {
  const [activeTab, setActiveTab] = useState('all');

  const listings = [
    { id: '1', address: 'Red Mountain Peak Estate', agent: 'Jackson Hayes', status: 'Active', price: '$32,500,000', date: 'Oct 12, 2025' },
    { id: '2', address: 'Snowmass Ski-in Estate', agent: 'Elena Rostova', status: 'Under Contract', price: '$18,900,000', date: 'Oct 05, 2025' },
    { id: '3', address: 'Downtown Aspen Penthouse', agent: 'Jackson Hayes', status: 'Active', price: '$14,250,000', date: 'Oct 20, 2025' },
    { id: '4', address: 'Woody Creek Ranch', agent: 'Marcus Chen', status: 'Sold', price: '$45,000,000', date: 'Sep 15, 2025' },
    { id: '5', address: 'Confidential Listing', agent: 'Elena Rostova', status: 'Off-Market', price: 'Upon Request', date: 'Nov 01, 2025' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active': return <span className="status-badge active">Active</span>;
      case 'Under Contract': return <span className="status-badge pending">Under Contract</span>;
      case 'Sold': return <span className="status-badge sold">Sold</span>;
      case 'Off-Market': return <span className="status-badge private">Off-Market</span>;
      default: return <span className="status-badge">Unknown</span>;
    }
  };

  return (
    <div className="admin-listings fade-in-up">
      <div className="table-header-container">
        <div>
          <h1>Listings Management</h1>
          <p>Manage your portfolio and public MLS visibility.</p>
        </div>
        <Link to="/admin/edit" className="btn-primary">Add New Listing</Link>
      </div>

      <div className="admin-card table-card">
        <div className="table-controls">
          <div className="table-tabs">
            <button className={`table-tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All Properties</button>
            <button className={`table-tab ${activeTab === 'active' ? 'active' : ''}`} onClick={() => setActiveTab('active')}>Active</button>
            <button className={`table-tab ${activeTab === 'pending' ? 'active' : ''}`} onClick={() => setActiveTab('pending')}>Under Contract</button>
          </div>
          
          <div className="table-actions">
            <div className="search-input-wrapper admin-search">
              <Search className="search-icon" size={16} />
              <input type="text" placeholder="Search address or agent..." />
            </div>
            <button className="btn-secondary filter-btn"><Filter size={16} /> Filter</button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="listings-table">
            <thead>
              <tr>
                <th>Property Address</th>
                <th>Listing Agent</th>
                <th>Status</th>
                <th>Price</th>
                <th>Listed Date</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing) => (
                <tr key={listing.id}>
                  <td className="fw-500">{listing.address}</td>
                  <td>{listing.agent}</td>
                  <td>{getStatusBadge(listing.status)}</td>
                  <td className="fw-600">{listing.price}</td>
                  <td className="text-muted">{listing.date}</td>
                  <td className="text-right row-actions">
                    <Link to={`/admin/edit/${listing.id}`} className="action-icon" title="Edit"><Edit size={16} /></Link>
                    <a href={`/property/${listing.id}`} target="_blank" rel="noreferrer" className="action-icon" title="View Public Page"><LinkIcon size={16} /></a>
                    <button className="action-icon text-danger" title="Delete"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="table-footer">
          <span className="text-muted">Showing 5 of 24 properties</span>
          <div className="pagination">
            <button disabled>Prev</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsTable;
