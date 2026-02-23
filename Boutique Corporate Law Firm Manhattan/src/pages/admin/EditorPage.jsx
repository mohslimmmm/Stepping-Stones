import { Save, UserPlus, Image as ImageIcon, Briefcase, Trash2 } from 'lucide-react';

const EditorPage = () => {
  return (
    <div className="editor-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Content Management</h1>
          <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Update attorney profiles and publish new representative case studies.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-secondary">DISCARD</button>
          <button className="btn-primary" style={{ backgroundColor: 'var(--accent-oxblood)', borderColor: 'var(--accent-oxblood)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Save size={18} /> PUBLISH CHANGES
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: 'var(--radius-strong)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
             <Briefcase size={20} color="var(--accent-oxblood)" /> New Case Study
          </h3>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.6 }}>Matter Title</label>
              <input type="text" style={{ padding: '12px', border: '1px solid #eee', borderRadius: '2px' }} placeholder='e.g., Acquisition of Nexus Tech' />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.6 }}>Transaction Value (USD)</label>
                <input type="text" style={{ padding: '12px', border: '1px solid #eee', borderRadius: '2px' }} placeholder='$1.2B' />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.6 }}>Practice Area</label>
                <select style={{ padding: '12px', border: '1px solid #eee', borderRadius: '2px' }}>
                  <option>Mergers & Acquisitions</option>
                  <option>Intellectual Property</option>
                  <option>Securities</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.6 }}>Matter Summary</label>
              <textarea rows="8" style={{ padding: '12px', border: '1px solid #eee', borderRadius: '2px', resize: 'none' }} placeholder="Provide a detailed overview of the legal strategies employed..."></textarea>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', border: '2px dashed #eee', borderRadius: 'var(--radius-strong)', justifyContent: 'center', color: 'rgba(0,0,0,0.4)' }}>
               <ImageIcon size={24} /> <span>Drag and drop hero image or browse files</span>
            </div>
          </form>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: 'var(--radius-strong)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
               <UserPlus size={20} color="var(--accent-oxblood)" /> Manage Bios
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {['Arthur Sterling', 'Elena Vance', 'Julian Rhodes'].map(name => (
                <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #f5f5f5' }}>
                  <span style={{ fontSize: '0.9rem' }}>{name}</span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={{ fontSize: '0.75rem', color: 'var(--accent-charcoal)', fontWeight: 700 }}>EDIT</button>
                    <button style={{ color: 'var(--accent-oxblood)', opacity: 0.5 }}><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
              <button style={{ marginTop: '10px', width: '100%', padding: '10px', border: '1px dashed #ddd', fontSize: '0.8rem', fontWeight: 600 }}>ADD NEW ATTORNEY</button>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-platinum)', padding: '24px', borderRadius: 'var(--radius-strong)' }}>
             <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Visibility Settings</h4>
             <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <input type="checkbox" id="public" defaultChecked />
                <label htmlFor="public" style={{ fontSize: '0.85rem' }}>Make publicly visible</label>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="checkbox" id="announcement" />
                <label htmlFor="announcement" style={{ fontSize: '0.85rem' }}>Pin to Home News</label>
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default EditorPage;
