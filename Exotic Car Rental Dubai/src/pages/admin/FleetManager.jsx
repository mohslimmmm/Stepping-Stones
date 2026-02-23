import React, { useState } from 'react';
import { Search, Filter, Edit, Trash2, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import './FleetManager.css';

const FleetManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const fleetData = [
    { id: 'REV1', model: 'Lamborghini Revuelto', plate: 'D 5001', status: 'Available', rate: 8500 },
    { id: 'SF90', model: 'Ferrari SF90 Stradale', plate: 'D 999', status: 'Rented', rate: 9000 },
    { id: 'CUL2', model: 'Rolls-Royce Cullinan', plate: 'A 77', status: 'Maintenance', rate: 6000 },
    { id: 'GT1', model: 'Bentley Continental GT', plate: 'E 444', status: 'Available', rate: 4000 },
    { id: '911T', model: 'Porsche 911 Turbo S', plate: 'P 911', status: 'Rented', rate: 4500 },
  ];

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1 className="neon-text">FLEET MATRIX</h1>
          <p className="text-muted">Manage vehicle inventory and dynamic pricing.</p>
        </div>
        <Link to="/admin/fleet/new" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={18} /> Add Vehicle
        </Link>
      </div>

      <div className="table-controls glass-panel">
        <div className="search-input">
          <Search size={18} className="text-muted" />
          <input 
            type="text" 
            placeholder="Search by Model or Plate..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Filter size={18} /> Filter Status
        </button>
      </div>

      <div className="table-container glass-panel">
        <table className="fleet-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Vehicle Model</th>
              <th>Plate Number</th>
              <th>Daily Rate</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fleetData.map((car, idx) => (
              <tr key={idx}>
                <td className="car-id-col">{car.id}</td>
                <td className="font-bold">{car.model}</td>
                <td className="plate-col">
                  <span className="plate">{car.plate}</span>
                </td>
                <td className="rate-col">
                  <span className="text-accent">AED {car.rate.toLocaleString()}</span>
                </td>
                <td>
                  <span className={`status-badge ${car.status.toLowerCase()}`}>
                    {car.status}
                  </span>
                </td>
                <td className="actions-col">
                  <button className="icon-btn edit-btn"><Edit size={16} /></button>
                  <button className="icon-btn delete-btn"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FleetManager;
