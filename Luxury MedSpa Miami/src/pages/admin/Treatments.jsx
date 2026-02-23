import { useState } from 'react';
import { Plus, Search, MoreVertical, Edit2, Trash2, Image as ImageIcon, X } from 'lucide-react';
import './Treatments.css';

// Generating mock data to simulate 50+ services
const generateMockData = () => {
  const categories = ['Injectables', 'Laser Therapies', 'Body Contouring', 'Wellness IVs', 'Facials', 'Skincare'];
  const data = [];
  for (let i = 1; i <= 54; i++) {
    const isSpecial = i <= 5;
    data.push({
      id: i,
      name: isSpecial ? ['Morpheus8 Advanced RF', 'Botox / Dysport', 'BBL Hero', 'Lip Filler', 'CoolSculpting'][i-1] : `Advanced Service ${i}`,
      category: categories[i % categories.length],
      price: i % 3 === 0 ? 'Custom' : `$${(i * 50) + 100}`,
      status: i % 8 === 0 ? 'Inactive' : 'Active',
      duration: `${30 + (i % 4) * 15} Min`
    });
  }
  return data;
};

const MOCK_DATA = generateMockData();

const Treatments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Modal Form State
  const [formData, setFormData] = useState({
    name: '', category: 'Injectables', price: '', duration: '', provider: 'dr-rostova'
  });

  const filteredData = MOCK_DATA.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="admin-treatments animate-fade-in">
      
      <div className="admin-page-header flex-between">
        <div>
          <h1>Treatment Management</h1>
          <p>Manage your service menu, pricing, and configurations.</p>
        </div>
        <button className="btn-primary flex-align-center" onClick={handleOpenModal}>
          <Plus size={18} style={{ marginRight: '0.5rem' }} /> Add New Service
        </button>
      </div>

      {/* Table Controls */}
      <div className="table-controls">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search treatments by name or category..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="table-filters">
          <select defaultValue="all">
            <option value="all">All Categories</option>
            <option value="injectables">Injectables</option>
            <option value="laser">Laser Therapies</option>
          </select>
          <select defaultValue="active">
            <option value="all">All Statuses</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0, 15).map((item) => (
              <tr key={item.id} className="table-row hover-lift-subtle">
                <td>
                  <strong>{item.name}</strong>
                  <div className="row-meta">{item.duration}</div>
                </td>
                <td><span className="category-pill">{item.category}</span></td>
                <td>{item.price}</td>
                <td>
                  <span className={`status-dot ${item.status.toLowerCase()}`}></span>
                  {item.status}
                </td>
                <td className="text-right row-actions">
                  <button className="action-btn" title="Edit"><Edit2 size={16} /></button>
                  <button className="action-btn danger" title="Delete"><Trash2 size={16} /></button>
                  <button className="action-btn"><MoreVertical size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="table-footer">
          <span>Showing 1 to 15 of {filteredData.length} entries</span>
          <div className="pagination">
            <button disabled>Previous</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>
      </div>

      {/* Service Edit/Add Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content animate-fade-in">
            <div className="modal-header">
              <h2>Add New Service</h2>
              <button className="close-btn" onClick={handleCloseModal}><X size={24} /></button>
            </div>
            
            <form className="admin-form" onSubmit={(e) => { e.preventDefault(); handleCloseModal(); }}>
              
              <div className="form-row-admin">
                <div className="form-group-admin">
                  <label>Service Name *</label>
                  <input type="text" placeholder="e.g. Morpheus8 Face & Neck" required 
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="form-group-admin">
                  <label>Category *</label>
                  <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} required>
                    <option value="Injectables">Injectables</option>
                    <option value="Laser Therapies">Laser Therapies</option>
                    <option value="Body Contouring">Body Contouring</option>
                    <option value="Wellness IVs">Wellness IVs</option>
                  </select>
                </div>
              </div>

              <div className="form-row-admin">
                <div className="form-group-admin">
                  <label>Price *</label>
                  <input type="text" placeholder="e.g. $800 or Custom" required 
                    value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} />
                </div>
                <div className="form-group-admin">
                  <label>Duration *</label>
                  <input type="text" placeholder="e.g. 60 Min" required 
                    value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} />
                </div>
              </div>

              <div className="form-group-admin">
                <label>Eligible Providers</label>
                <select value={formData.provider} onChange={e => setFormData({...formData, provider: e.target.value})}>
                  <option value="dr-rostova">Dr. Elena Rostova, MD</option>
                  <option value="rn-sarah">Sarah Jenkins, RN</option>
                  <option value="all">All Providers</option>
                </select>
              </div>

              {/* Photo Uploader Component */}
              <div className="form-group-admin">
                <label>Before / After Gallery (Optional)</label>
                <div className="photo-uploader">
                  <ImageIcon size={32} className="uploader-icon" />
                  <p>Click or drag images here to upload.</p>
                  <span>Supports JPG, PNG (Max 5MB)</span>
                  <input type="file" multiple accept="image/*" className="file-input-hidden" />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-secondary" onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="btn-primary">Save Service</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Treatments;
