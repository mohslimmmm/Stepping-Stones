import AdminLayout from './AdminLayout';
import { Camera, Save, X } from 'lucide-react';

const AdminProjectForm = () => {
  return (
    <AdminLayout>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
        <div>
          <h4 style={{ color: 'var(--accent-copper)', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '8px' }}>EDITOR</h4>
          <h2 style={{ fontSize: '1.8rem' }}>UPDATE PROJECT SPECS</h2>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
           <button style={{ padding: '10px 20px', fontSize: '0.75rem', border: '1px solid #eee' }}>CANCEL</button>
           <button className="architectural-btn" style={{ padding: '10px 24px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Save size={16} /> SAVE CHANGES
           </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '40px' }}>
         {/* Main Form */}
         <div style={{ backgroundColor: 'white', padding: '40px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
               <div style={inputGroupStyle}>
                  <label style={labelStyle}>PROJECT NAME</label>
                  <input type="text" defaultValue="The Westlake Residence" style={inputStyle} />
               </div>
               <div style={inputGroupStyle}>
                  <label style={labelStyle}>CONSTRUCTION PHASE</label>
                  <select style={inputStyle}>
                     <option>Planning</option>
                     <option>Permitting</option>
                     <option>Framing</option>
                     <option selected>Finishing</option>
                  </select>
               </div>
               <div style={{ ...inputGroupStyle, gridColumn: 'span 2' }}>
                  <label style={labelStyle}>DESCRIPTION</label>
                  <textarea defaultValue="High-performance modern estate featuring cantilevered infinity pool and raw copper exterior panels." style={{ ...inputStyle, height: '120px', resize: 'none' }} />
               </div>
               <div style={inputGroupStyle}>
                  <label style={labelStyle}>CLIENT NAME</label>
                  <input type="text" defaultValue="J. & S. Miller" style={inputStyle} />
               </div>
               <div style={inputGroupStyle}>
                  <label style={labelStyle}>BUDGET</label>
                  <input type="text" defaultValue="$6,450,000" style={inputStyle} />
               </div>
            </div>
         </div>

         {/* Sidebar / Media */}
         <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ backgroundColor: 'white', padding: '30px' }}>
               <h4 style={{ fontSize: '0.7rem', opacity: 0.5, marginBottom: '20px' }}>SITE PROGRESS PHOTOS</h4>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {[1,2,3].map(i => (
                     <div key={i} style={{ position: 'relative', height: '100px', backgroundColor: '#eee' }}>
                        <X size={14} style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer', backgroundColor: 'white' }} />
                     </div>
                  ))}
                  <div style={{ 
                     height: '100px', 
                     border: '1px dashed #ccc', 
                     display: 'flex', 
                     flexDirection: 'column', 
                     alignItems: 'center', 
                     justifyContent: 'center',
                     cursor: 'pointer'
                  }}>
                     <Camera size={20} opacity={0.3} />
                     <span style={{ fontSize: '0.6rem', opacity: 0.4, marginTop: '8px' }}>UPLOAD</span>
                  </div>
               </div>
            </div>

            <div style={{ backgroundColor: 'white', padding: '30px' }}>
               <h4 style={{ fontSize: '0.7rem', opacity: 0.5, marginBottom: '20px' }}>ARCHITECTURAL SPECS</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
                     <span style={{ opacity: 0.6 }}>Main Square Footage</span>
                     <span style={{ fontWeight: '700' }}>8,450</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
                     <span style={{ opacity: 0.6 }}>Estimated Handover</span>
                     <span style={{ fontWeight: '700' }}>Dec 2024</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </AdminLayout>
  );
};

const inputGroupStyle = { display: 'flex', flexDirection: 'column', gap: '10px' };
const labelStyle = { fontSize: '0.65rem', fontWeight: '700', opacity: 0.5, letterSpacing: '1px' };
const inputStyle = {
   padding: '12px',
   border: '1px solid #eee',
   fontSize: '0.9rem',
   outline: 'none',
   backgroundColor: '#fcfcfc'
};

export default AdminProjectForm;
