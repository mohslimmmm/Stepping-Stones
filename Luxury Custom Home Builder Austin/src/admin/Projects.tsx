import AdminLayout from './AdminLayout';
import { MoreHorizontal, Edit, Trash2, Eye } from 'lucide-react';

const AdminProjects = () => {
  const projects = [
    { name: 'The Westlake Residence', phase: 'Finishing', client: 'J. & S. Miller', budget: '$6.4M', status: 'On Track' },
    { name: 'Barton Springs Waterfront', phase: 'Framing', client: 'L. Thompson', budget: '$4.2M', status: 'Delayed' },
    { name: 'Lost Creek Estate', phase: 'Design', client: 'A. Vanderbilt', budget: '$12M', status: 'On Track' },
    { name: 'Congress Ave Penthouse', phase: 'Permitting', client: 'M. Sterling', budget: '$3.5M', status: 'On Track' },
  ];

  return (
    <AdminLayout>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
        <div>
          <h4 style={{ color: 'var(--accent-copper)', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '8px' }}>MANAGEMENT</h4>
          <h2 style={{ fontSize: '1.8rem' }}>PROJECTS</h2>
        </div>
        <button className="architectural-btn" style={{ padding: '10px 20px', fontSize: '0.75rem' }}>+ ADD PROJECT</button>
      </div>

      <div style={{ backgroundColor: 'white', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>
              <th style={thStyle}>PROJECT NAME</th>
              <th style={thStyle}>PHASE</th>
              <th style={thStyle}>CLIENT</th>
              <th style={thStyle}>BUDGET</th>
              <th style={thStyle}>STATUS</th>
              <th style={thStyle}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f5f5f5' }}>
                <td style={tdStyle}>
                  <div style={{ fontWeight: '700' }}>{proj.name}</div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>Austin, TX</div>
                </td>
                <td style={tdStyle}>
                  <span style={{ 
                    padding: '4px 12px', 
                    backgroundColor: 'var(--bg-color)', 
                    fontSize: '0.7rem', 
                    fontWeight: '700',
                    color: 'var(--accent-black)'
                  }}>
                    {proj.phase.toUpperCase()}
                  </span>
                </td>
                <td style={tdStyle}>{proj.client}</td>
                <td style={tdStyle}>{proj.budget}</td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      backgroundColor: proj.status === 'On Track' ? 'green' : 'orange' 
                    }}></div>
                    <span style={{ fontSize: '0.8rem' }}>{proj.status}</span>
                  </div>
                </td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', gap: '15px', color: 'rgba(0,0,0,0.3)' }}>
                    <Eye size={18} style={{ cursor: 'pointer' }} />
                    <Edit size={18} style={{ cursor: 'pointer' }} />
                    <MoreHorizontal size={18} style={{ cursor: 'pointer' }} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

const thStyle = {
  padding: '20px',
  fontSize: '0.7rem',
  fontWeight: '700',
  opacity: 0.5,
  letterSpacing: '1px'
};

const tdStyle = {
  padding: '20px',
  fontSize: '0.85rem'
};

export default AdminProjects;
