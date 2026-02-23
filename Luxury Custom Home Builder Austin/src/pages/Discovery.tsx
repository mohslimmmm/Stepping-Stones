import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 'westlake', title: 'The Westlake Residence', category: 'Hill Country Modern', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811' },
  { id: 'waterfront', title: 'Barton Springs Waterfront', category: 'Lake Austin Waterfront', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750' },
  { id: 'penthouse', title: 'Congress Ave Penthouse', category: 'Urban Penthouses', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
  { id: 'hillside', title: 'Lost Creek Estate', category: 'Hill Country Modern', image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6' },
  { id: 'lakehouse', title: 'Lake Travis Retreat', category: 'Lake Austin Waterfront', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde' },
];

const categories = ['All', 'Hill Country Modern', 'Lake Austin Waterfront', 'Urban Penthouses'];

const Discovery = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div style={{ paddingTop: '120px', backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      <div style={{ padding: '0 5%', marginBottom: '60px' }}>
        <h4 style={{ color: 'var(--accent-copper)', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '12px' }}>DISCOVERY</h4>
        <h1 style={{ fontSize: '3rem' }}>PORTFOLIO</h1>
      </div>

      {/* Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        padding: '0 5%', 
        marginBottom: '60px',
        borderBottom: '1px solid rgba(40,40,43,0.1)',
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            style={{
              padding: '15px 0',
              fontSize: '0.8rem',
              fontWeight: '700',
              color: activeTab === cat ? 'var(--accent-black)' : 'rgba(40,40,43,0.4)',
              borderBottom: activeTab === cat ? '2px solid var(--accent-copper)' : '2px solid transparent',
              transition: '0.3s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
        gap: '2px', // Architectural gaps
        padding: '0 5%'
      }}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map(project => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              style={{ position: 'relative', height: '500px', overflow: 'hidden' }}
            >
              <Link to={`/project/${project.id}`}>
                <img 
                  src={`${project.image}?auto=format&fit=crop&q=80&w=800`} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }}
                  className="portfolio-img"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '40px',
                  opacity: 0,
                  transition: '0.4s'
                }} className="portfolio-overlay">
                  <span style={{ color: 'var(--accent-copper)', fontSize: '0.7rem', fontWeight: '700' }}>{project.category}</span>
                  <h3 style={{ color: 'white', marginTop: '10px' }}>{project.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <style>{`
        .portfolio-img:hover {
          transform: scale(1.05);
        }
        div:hover > a > .portfolio-overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Discovery;
