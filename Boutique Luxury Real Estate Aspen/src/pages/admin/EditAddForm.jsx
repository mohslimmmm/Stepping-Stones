import React, { useState } from 'react';
import { Upload, Save, Eye, DollarSign, MapPin, CheckCircle, RefreshCw } from 'lucide-react';
import './EditAddForm.css';

const EditAddForm = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [synced, setSynced] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSynced(true);
    }, 2000);
  };

  return (
    <div className="admin-edit-form fade-in-up">
      <div className="form-header-container">
        <div>
          <h1>Add New Listing</h1>
          <p>Create a new property profile or sync from the local Aspen Board of REALTORS® MLS.</p>
        </div>
        <div className="form-actions-top">
           <button className="btn-secondary"><Eye size={18} /> Preview</button>
           <button className="btn-primary"><Save size={18} /> Publish Listing</button>
        </div>
      </div>

      <div className="form-grid">
        {/* Main Content Area */}
        <div className="form-main-col">
          {/* MLS Integration */}
          <div className="admin-card mb-4">
            <div className="card-header pb-0 border-0">
               <h2>Smart MLS Sync</h2>
            </div>
            <div className="mls-sync-container">
               <div className="search-input-wrapper admin-search">
                  <span className="text-muted fw-600 pl-2">MLS #</span>
                  <input type="text" placeholder="Enter AGSMLS ID (e.g. 183921)" defaultValue="183921" />
               </div>
               <button 
                  className={`btn-secondary sync-btn ${synced ? 'synced' : ''}`}
                  onClick={handleSync}
                  disabled={isSyncing || synced}
               >
                 {isSyncing ? (
                   <><RefreshCw className="spin" size={18} /> Syncing Data...</>
                 ) : synced ? (
                   <><CheckCircle size={18} /> Data Synced Successfully</>
                 ) : (
                   <><RefreshCw size={18} /> Pull from MLS</>
                 )}
               </button>
            </div>
            {synced && <p className="sync-success-msg mt-3 text-green-600 text-sm">✓ Synced 12 fields and 42 images from MLS.</p>}
          </div>

          {/* Core Info */}
          <div className="admin-card mb-4">
            <div className="card-header">
               <h2>Core Information</h2>
            </div>
            <div className="form-section">
              <div className="form-group full-width">
                <label>Property Title (Internal & Display)</label>
                <input type="text" placeholder="e.g. Red Mountain Peak Estate" defaultValue={synced ? "Red Mountain Peak Estate" : ""} />
              </div>

              <div className="form-group full-width">
                <label>Street Address</label>
                <div className="search-input-wrapper">
                  <MapPin className="text-muted ml-3" size={18} />
                  <input type="text" placeholder="123 Example St, Aspen, CO" defaultValue={synced ? "720 Red Mountain Rd, Aspen, CO 81611" : ""} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Listing Price</label>
                  <div className="search-input-wrapper">
                    <DollarSign className="text-muted ml-3" size={18} />
                    <input type="text" placeholder="32,500,000" defaultValue={synced ? "32,500,000" : ""} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select>
                    <option>Active</option>
                    <option>Off-Market (Private)</option>
                    <option>Under Contract</option>
                    <option>Sold</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="admin-card mb-4">
            <div className="card-header">
               <h2>Property Specifications</h2>
            </div>
            <div className="form-section">
              <div className="form-row quarter-grid">
                <div className="form-group">
                  <label>Bedrooms</label>
                  <input type="number" min="0" defaultValue={synced ? 6 : ""} />
                </div>
                <div className="form-group">
                  <label>Bathrooms</label>
                  <input type="number" min="0" step="0.5" defaultValue={synced ? 8 : ""} />
                </div>
                <div className="form-group">
                  <label>Square Feet</label>
                  <input type="number" min="0" defaultValue={synced ? 12400 : ""} />
                </div>
                <div className="form-group">
                  <label>Acres</label>
                  <input type="number" min="0" step="0.1" defaultValue={synced ? 2.5 : ""} />
                </div>
              </div>
              
              <div className="form-group full-width mt-4">
                <label>Property Description</label>
                <textarea rows="6" placeholder="A masterpiece of mountain modern architecture..." defaultValue={synced ? "A masterpiece of mountain modern architecture, this newly constructed estate represents the pinnacle of luxury living in Aspen..." : ""}></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Area */}
        <div className="form-sidebar-col">
          {/* Media Uploader */}
          <div className="admin-card mb-4">
            <div className="card-header">
               <h2>Media Showcase</h2>
            </div>
            
            <div className="media-uploader-box">
               <Upload size={32} className="text-muted mb-3" />
               <h4>Drag & Drop High-Res Photos</h4>
               <p className="text-muted text-sm mt-1 mb-4">JPEG, PNG, WEBP up to 20MB</p>
               <button className="btn-secondary pb-2 pt-2">Browse Files</button>
            </div>

            {synced && (
              <div className="synced-media mt-4">
                <p className="text-sm font-medium mb-2">Synced Media (42 files)</p>
                <div className="media-preview-grid">
                   <div className="media-thumbnail"><img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60" alt="thumb1" /></div>
                   <div className="media-thumbnail"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60" alt="thumb2" /></div>
                   <div className="media-thumbnail"><img src="https://images.unsplash.com/photo-1628155556209-668b5a03e6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60" alt="thumb3" /></div>
                   <div className="media-thumbnail more-overlay">+39</div>
                </div>
              </div>
            )}
          </div>

          {/* Visibility */}
          <div className="admin-card">
            <div className="card-header">
               <h2>Publish Settings</h2>
            </div>
            <div className="publish-settings">
               <label className="checkbox-item">
                 <input type="checkbox" defaultChecked />
                 <div>
                   <strong>Publish to Altitude Website</strong>
                   <p className="text-sm text-muted">Feature listing on public portfolio.</p>
                 </div>
               </label>
               
               <label className="checkbox-item mt-3">
                 <input type="checkbox" defaultChecked />
                 <div>
                   <strong>Push to Global Syndication</strong>
                   <p className="text-sm text-muted">Zillow Luxe, Mansion Global, WSJ.</p>
                 </div>
               </label>

               <label className="checkbox-item mt-3">
                 <input type="checkbox" />
                 <div>
                   <strong>Private / Off-Market Flag</strong>
                   <p className="text-sm text-muted">Requires password or direct link.</p>
                 </div>
               </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAddForm;
