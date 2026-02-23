import React, { useState } from 'react';
import { Upload, Calendar as CalendarIcon, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminEdit = () => {
  const navigate = useNavigate();
  const [staffRequired, setStaffRequired] = useState(true);

  return (
    <div className="admin-edit">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Edit Property</h1>
          <p className="admin-page-subtitle">Update listing details, media, and configurations</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-outline" onClick={() => navigate('/admin/properties')}>Cancel</button>
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* General Information */}
          <div className="admin-card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>General Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>Property Name</label>
                <input type="text" defaultValue="Villa Paloma" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)' }} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>Property Type</label>
                  <select defaultValue="cliffside" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)', backgroundColor: '#fff' }}>
                    <option value="cliffside">Cliffside Villa</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="event">Event Space</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>Base Weekly Rate (€)</label>
                  <input type="text" defaultValue="45,000" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>Description</label>
                <textarea rows="5" defaultValue="Villa Paloma is a masterpiece..." style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)', resize: 'vertical' }}></textarea>
              </div>
            </div>
          </div>

          {/* Configuration */}
          <div className="admin-card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Configuration</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Users size={20} style={{ color: 'var(--color-accent-blue)' }} />
                <div>
                  <div style={{ fontWeight: 500 }}>Mandatory Staff Assignment</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Require concierge, chef, and daily housekeeping</div>
                </div>
              </div>
              <div 
                className={`toggle-switch ${staffRequired ? 'active' : ''}`}
                onClick={() => setStaffRequired(!staffRequired)}
                style={{
                  width: '44px', height: '24px', borderRadius: '12px',
                  backgroundColor: staffRequired ? 'var(--color-accent-blue)' : 'var(--color-border)',
                  position: 'relative', cursor: 'pointer', transition: 'background-color 0.2s'
                }}
              >
                <div style={{
                  position: 'absolute', top: '2px', left: staffRequired ? '22px' : '2px',
                  width: '20px', height: '20px', backgroundColor: '#fff', borderRadius: '50%',
                  transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                }}></div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CalendarIcon size={20} style={{ color: 'var(--color-accent-blue)' }} />
                <div>
                  <div style={{ fontWeight: 500 }}>High Season Surge Pricing</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Automatically apply +20% during Grand Prix & Monaco Yacht Show</div>
                </div>
              </div>
              <div style={{
                  width: '44px', height: '24px', borderRadius: '12px',
                  backgroundColor: 'var(--color-accent-blue)', position: 'relative', cursor: 'pointer'
                }}>
                <div style={{
                  position: 'absolute', top: '2px', left: '22px',
                  width: '20px', height: '20px', backgroundColor: '#fff', borderRadius: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                }}></div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Photos */}
          <div className="admin-card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Media</h3>
            
            <div style={{ 
              border: '2px dashed var(--color-border)', 
              borderRadius: 'var(--radius-primary)', 
              padding: '2rem', 
              textAlign: 'center',
              backgroundColor: 'var(--color-card-bg)',
              cursor: 'pointer',
              marginBottom: '1rem'
            }}>
              <Upload size={32} style={{ color: 'var(--color-text-muted)', margin: '0 auto 1rem' }} />
              <div style={{ fontWeight: 500, marginBottom: '0.25rem' }}>Click to upload or drag & drop</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>High-res photos only. Max 10MB per file.</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <div style={{ position: 'relative', paddingTop: '75%', borderRadius: '4px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" alt="Villa" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'relative', paddingTop: '75%', borderRadius: '4px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80" alt="Villa" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEdit;
