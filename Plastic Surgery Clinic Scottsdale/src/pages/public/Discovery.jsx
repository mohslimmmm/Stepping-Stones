import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ArrowRight } from 'lucide-react';
import './Discovery.css';

export default function Discovery() {
  const [activeTab, setActiveTab] = useState('Face');
  
  const tabs = ['Face', 'Breast', 'Body', 'Non-Surgical'];
  
  const procedures = [
    { id: 'deep-plane-facelift', category: 'Face', name: 'Signature Deep-Plane Facelift', desc: 'Comprehensive facial rejuvenation', time: '4-6 hours', recovery: '2 weeks' },
    { id: 'rhinoplasty', category: 'Face', name: 'Precision Rhinoplasty', desc: 'Structural refinement', time: '2-4 hours', recovery: '1-2 weeks' },
    { id: 'blepharoplasty', category: 'Face', name: 'Blepharoplasty', desc: 'Eyelid rejuvenation', time: '1-2 hours', recovery: '1 week' },
    { id: 'breast-augmentation', category: 'Breast', name: 'Bespoke Breast Augmentation', desc: 'Tailored implants', time: '1-2 hours', recovery: '1 week' },
    { id: 'breast-lift', category: 'Breast', name: 'Mastopexy (Breast Lift)', desc: 'Restoring youthful contour', time: '2-3 hours', recovery: '2 weeks' },
    { id: 'liposuction', category: 'Body', name: 'High-Definition Liposuction', desc: 'Targeted body sculpting', time: '2-4 hours', recovery: '1-2 weeks' },
    { id: 'tummy-tuck', category: 'Body', name: 'Abdominoplasty', desc: 'Core restoration', time: '3-4 hours', recovery: '2-3 weeks' },
    { id: 'botox', category: 'Non-Surgical', name: 'Neuromodulators', desc: 'Wrinkle relaxation', time: '30 mins', recovery: 'None' },
    { id: 'fillers', category: 'Non-Surgical', name: 'Dermal Fillers', desc: 'Volume restoration', time: '45 mins', recovery: 'Minimal' },
  ];

  const filteredProcedures = procedures.filter(p => p.category === activeTab);

  return (
    <div className="discovery-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Procedures</h1>
          <p className="page-subtitle">Refining your natural architecture.</p>
        </div>
      </div>

      <div className="container discovery-layout section">
        {/* Sidebar Filtering */}
        <aside className="discovery-sidebar">
          <div className="sidebar-header-box">
            <h3 className="sidebar-title"><Filter size={18} /> Categories</h3>
          </div>
          <ul className="sidebar-menu">
            {tabs.map(tab => (
              <li key={tab}>
                <button 
                  className={`sidebar-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Area */}
        <main className="discovery-content">
          <div className="tab-header">
            <h2 className="tab-title">{activeTab} Procedures</h2>
            <span className="results-count">{filteredProcedures.length} Procedures</span>
          </div>

          <div className="procedures-grid">
            {filteredProcedures.map((proc, index) => (
              <Link to={`/procedure/${proc.id}`} key={proc.id} className="procedure-list-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="proc-card-header">
                  <h3 className="proc-name">{proc.name}</h3>
                  <ArrowRight className="proc-arrow" size={20} />
                </div>
                <p className="proc-desc">{proc.desc}</p>
                <div className="proc-meta">
                  <span className="meta-item"><strong>Duration:</strong> {proc.time}</span>
                  <span className="meta-item"><strong>Recovery:</strong> {proc.recovery}</span>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
