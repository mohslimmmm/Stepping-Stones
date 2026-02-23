import { UploadCloud, Save, AlertCircle } from 'lucide-react';
import './GalleryForm.css';

export default function GalleryForm() {
  return (
    <div className="admin-gallery-form">
      <div className="admin-page-header">
        <h1 className="admin-h1">Add Clinical Outcome</h1>
        <p className="admin-p">Upload privacy-compliant before & after imagery.</p>
      </div>

      <div className="gallery-form-grid">
        {/* Main Form Area */}
        <div className="admin-card form-main-card">
          <h2 className="card-title">Image Upload</h2>
          
          <div className="upload-container">
            <div className="upload-box">
              <UploadCloud size={32} className="upload-icon-admin" />
              <h3>Before Image</h3>
              <p>Drag & drop or <span>browse</span></p>
              <span className="upload-spec">JPEG/PNG, min 800x800</span>
            </div>
            
            <div className="upload-box">
              <UploadCloud size={32} className="upload-icon-admin" />
              <h3>After Image</h3>
              <p>Drag & drop or <span>browse</span></p>
              <span className="upload-spec">JPEG/PNG, min 800x800</span>
            </div>
          </div>

          <div className="form-settings mt-5">
            <div className="form-group-admin">
              <label>Procedure Category</label>
              <select className="admin-input">
                <option>Face</option>
                <option>Breast</option>
                <option>Body</option>
                <option>Non-Surgical</option>
              </select>
            </div>
            
            <div className="form-group-admin">
              <label>Specific Procedure</label>
              <select className="admin-input">
                <option>Signature Deep-Plane Facelift</option>
                <option>Precision Rhinoplasty</option>
                <option>Upper/Lower Blepharoplasty</option>
              </select>
            </div>

            <div className="form-group-admin">
              <label>Patient Tags (Optional)</label>
              <input type="text" className="admin-input" placeholder="e.g., Early 50s, Revision, 3 Months Post-Op" />
            </div>
          </div>
        </div>

        {/* Sidebar / Meta Area */}
        <div className="admin-card form-meta-card">
          <h2 className="card-title">Compliance & Release</h2>
          
          <div className="compliance-box">
            <AlertCircle size={20} className="alert-icon" />
            <p>Ensure patient consent form (HIPAA Release #4B) is signed and filed before publishing.</p>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="consent" />
            <label htmlFor="consent">I verify digital consent is on file.</label>
          </div>
          
          <div className="checkbox-group">
            <input type="checkbox" id="anonymous" defaultChecked />
            <label htmlFor="anonymous">Apply default hover-to-unblur privacy filter.</label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="tattoos" />
            <label htmlFor="tattoos">Identifying marks/tattoos obscured.</label>
          </div>

          <div className="form-actions mt-5">
            <button className="btn-outline-admin action-btn-full">Save Draft</button>
            <button className="btn-primary-admin action-btn-full"><Save size={16} /> Publish to Gallery</button>
          </div>
        </div>
      </div>
    </div>
  );
}
