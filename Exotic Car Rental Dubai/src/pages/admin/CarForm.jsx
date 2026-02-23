import React from 'react';
import { Upload, Save, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CarForm.css';

const CarForm = () => {
  return (
    <div className="admin-page car-form-page">
      <div className="page-header">
        <div>
          <h1 className="neon-text">VEHICLE REGISTRATION</h1>
          <p className="text-muted">Add a new elite vehicle to the fleet matrix.</p>
        </div>
        <div className="header-actions">
          <Link to="/admin/fleet" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <X size={18} /> Cancel
          </Link>
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Save size={18} /> Save Vehicle
          </button>
        </div>
      </div>

      <div className="form-layout">
        <div className="form-main-col">
          <div className="glass-panel form-section">
            <h3>Basic Details</h3>
            <div className="admin-form-group">
              <label>Vehicle Title / Model</label>
              <input type="text" placeholder="e.g. Lamborghini Revuelto" />
            </div>
            
            <div className="admin-form-row">
              <div className="admin-form-group w-full">
                <label>Plate Number</label>
                <input type="text" placeholder="e.g. D 5001" />
              </div>
              <div className="admin-form-group w-full">
                <label>VIN / Chassis Number</label>
                <input type="text" placeholder="Enter 17-character VIN" />
              </div>
            </div>
            
            <div className="admin-form-group">
              <label>Vehicle Description</label>
              <textarea rows="4" placeholder="Enter marketing description for the client portal..."></textarea>
            </div>
          </div>

          <div className="glass-panel form-section mt-6">
            <h3>Performance Specs</h3>
            <div className="admin-form-row">
              <div className="admin-form-group w-full">
                <label>Powertrain</label>
                <input type="text" placeholder="e.g. V12 Hybrid" />
              </div>
              <div className="admin-form-group w-full">
                <label>Horsepower</label>
                <input type="text" placeholder="e.g. 1001 HP" />
              </div>
            </div>
            <div className="admin-form-row">
              <div className="admin-form-group w-full">
                <label>0-100 km/h</label>
                <input type="text" placeholder="e.g. 2.5s" />
              </div>
              <div className="admin-form-group w-full">
                <label>Top Speed</label>
                <input type="text" placeholder="e.g. 350 km/h" />
              </div>
            </div>
          </div>
        </div>

        <div className="form-side-col">
          <div className="glass-panel form-section">
            <h3>Pricing Rules</h3>
            <div className="admin-form-group">
              <label>Base Daily Rate (AED)</label>
              <input type="number" placeholder="8500" className="highlight-input" />
            </div>
            <div className="admin-form-group">
              <label>Security Deposit (AED)</label>
              <input type="number" placeholder="10000" />
            </div>
            <div className="admin-form-group">
              <label>Weekend Premium (%)</label>
              <input type="number" placeholder="15" />
            </div>
            <div className="admin-form-group">
              <label>Status</label>
              <select>
                <option>Available</option>
                <option>Maintenance</option>
                <option>Rented</option>
                <option>Decommissioned</option>
              </select>
            </div>
          </div>

          <div className="glass-panel form-section mt-6">
            <h3>Media Assets</h3>
            <div className="media-uploader">
              <Upload size={32} className="text-muted mb-4" />
              <p>Drag & drop or <span className="text-accent">browse</span></p>
              <p className="text-sm text-muted">Upload 360° Walkaround Videos & Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarForm;
