import { Edit2, Trash2, Plus } from 'lucide-react';
import './Procedures.css';

export default function Procedures() {
  const procedureData = [
    { id: '1', name: "Signature Deep-Plane Facelift", anesthesia: "Deep IV Sedation", price: "$35,000", status: "Active" },
    { id: '2', name: "Precision Rhinoplasty", anesthesia: "General", price: "$18,500", status: "Active" },
    { id: '3', name: "Upper Blepharoplasty", anesthesia: "Local / IV", price: "$6,500", status: "Active" },
    { id: '4', name: "Bespoke Breast Augmentation", anesthesia: "General", price: "$12,000", status: "Active" },
    { id: '5', name: "Laser Resurfacing C02", anesthesia: "Local", price: "$4,500", status: "Inactive" }
  ];

  return (
    <div className="admin-procedures">
      <div className="admin-page-header flex-header">
        <div>
          <h1 className="admin-h1">Procedure Management</h1>
          <p className="admin-p">Configure public-facing procedure catalogs.</p>
        </div>
        <button className="btn-primary admin-btn"><Plus size={18} /> Add Procedure</button>
      </div>

      <div className="admin-card table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Procedure Name</th>
              <th>Anesthesia Type</th>
              <th>Base Price</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {procedureData.map((item) => (
              <tr key={item.id}>
                <td className="font-medium text-white">{item.name}</td>
                <td>{item.anesthesia}</td>
                <td>{item.price}</td>
                <td>
                  <span className={`status-badge ${item.status === 'Active' ? 'active' : 'inactive'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="actions-cell">
                  <button className="action-btn edit" title="Edit"><Edit2 size={16} /></button>
                  <button className="action-btn delete" title="Delete"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
