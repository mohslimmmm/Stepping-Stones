import React, { useState } from 'react';
import { UploadCloud, Save, X, Globe } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';

  const [activeLang, setActiveLang] = useState('EN');

  return (
    <div className="admin-edit-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
           <button onClick={() => navigate('/admin/inventory')} style={{ background: 'none', border: 'none', color: 'var(--color-gray-500)', fontSize: '0.875rem', marginBottom: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
             <X size={16} style={{ marginRight: '4px' }}/> Cancel
           </button>
           <h1 className="admin-page-title" style={{ fontSize: '2rem', fontFamily: 'var(--font-header)' }}>
             {isNew ? 'Create New Listing' : `Edit Listing ${id}`}
           </h1>
        </div>
        <button className="primary-btn">
          <Save size={18} style={{ marginRight: '8px' }} /> Save Changes
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
         <div className="edit-main">
            <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
               <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-gray-200)' }}>Core Details</h2>
               
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">Reference Number</label>
                    <input type="text" className="form-input" defaultValue={isNew ? 'SYM-' : id} readOnly={!isNew} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Price (€)</label>
                    <input type="text" className="form-input" placeholder="e.g. 4500000" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Property Type</label>
                    <select className="form-select">
                      <option>Villa</option>
                      <option>Penthouse</option>
                      <option>Apartment</option>
                      <option>Townhouse</option>
                      <option>Plot</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Zone / Area</label>
                    <select className="form-select">
                      <option>Nueva Andalucía</option>
                      <option>Golden Mile</option>
                      <option>Sierra Blanca</option>
                      <option>Puerto Banús</option>
                      <option>Benahavís</option>
                    </select>
                  </div>
               </div>

               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">Beds</label>
                    <input type="number" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Baths</label>
                    <input type="number" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Built (m²)</label>
                    <input type="number" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Plot (m²)</label>
                    <input type="number" className="form-input" />
                  </div>
               </div>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-gray-200)' }}>
                  <h2 style={{ fontSize: '1.25rem' }}>Marketing Description</h2>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {['EN', 'ES', 'FR', 'DE', 'AR'].map(lang => (
                      <button 
                        key={lang}
                        onClick={() => setActiveLang(lang)}
                        style={{
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          border: `1px solid ${activeLang === lang ? 'var(--color-accent-terracotta)' : 'var(--color-gray-300)'}`,
                          backgroundColor: activeLang === lang ? 'var(--color-accent-terracotta)' : 'transparent',
                          color: activeLang === lang ? 'white' : 'var(--color-text)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
               </div>
               
               <div className="form-group">
                 <label className="form-label">Title [{activeLang}]</label>
                 <input type="text" className="form-input" placeholder={`Enter property title in ${activeLang}`} />
               </div>
               
               <div className="form-group">
                 <label className="form-label">Description [{activeLang}]</label>
                 <textarea className="form-textarea" rows="8" placeholder="Craft a compelling luxury description..."></textarea>
               </div>
            </div>
         </div>

         <div className="edit-sidebar">
            <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
               <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-gray-200)' }}>Status & Agent</h2>
               
               <div className="form-group">
                 <label className="form-label">Listing Status</label>
                 <select className="form-select">
                   <option>Active</option>
                   <option>Under Offer</option>
                   <option>Sold</option>
                   <option>Off-Market</option>
                 </select>
               </div>
               
               <div className="form-group">
                 <label className="form-label">Lead Agent</label>
                 <select className="form-select">
                   <option>Isabella Santos</option>
                   <option>Carlos Mendoza</option>
                   <option>Elena Rostova</option>
                 </select>
               </div>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
               <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-gray-200)' }}>Media</h2>
               
               <div style={{ 
                 border: '2px dashed var(--color-gray-300)', 
                 borderRadius: '8px', 
                 padding: '2rem', 
                 textAlign: 'center',
                 cursor: 'pointer',
                 backgroundColor: 'var(--color-off-white)'
               }}>
                 <UploadCloud size={32} color="var(--color-gray-400)" style={{ margin: '0 auto 1rem' }} />
                 <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Upload High-Res Photos</p>
                 <p style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>Drag & drop or click to browse</p>
               </div>

               <div className="form-group" style={{ marginTop: '1.5rem' }}>
                 <label className="form-label">Virtual Tour URL</label>
                 <input type="url" className="form-input" placeholder="e.g. Matterport link" />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default EditForm;
