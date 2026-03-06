import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Filter } from 'lucide-react';
import './Discovery.css';

const TREATMENTS_DATA = [
  { id: 'morpheus8', name: 'Morpheus8 Advanced RF', category: 'Laser Therapies', price: 'From $800', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Deep tissue remodeling for unmatched skin tightening.' },
  { id: 'facial-balancing', name: 'Facial Balancing', category: 'Injectables', price: 'Custom', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Strategic filler placement for harmony.' },
  { id: 'botox', name: 'Neuromodulators (Botox/Dysport)', category: 'Injectables', price: '$14 / unit', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Smooth fine lines and prevent deep wrinkles.' },
  { id: 'sculptra', name: 'Sculptra Aesthetic', category: 'Injectables', price: 'From $900', image: 'https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Collagen stimulator for gradual, natural volume.' },
  { id: 'bbl-hero', name: 'BBL Hero', category: 'Laser Therapies', price: 'From $500', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Advanced light therapy for pigmentation.' },
  { id: 'coolsculpting', name: 'CoolSculpting Elite', category: 'Body Contouring', price: 'Consultation Required', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Non-invasive fat reduction technology.' },
  { id: 'emsculpt', name: 'Emsculpt NEO', category: 'Body Contouring', price: 'From $1,000', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Build muscle and burn fat simultaneously.' },
  { id: 'myers', name: 'Myer\'s Cocktail IV', category: 'Wellness IVs', price: '$250', image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Ultimate hydration and vitamin infusion.' },
  { id: 'nad', name: 'NAD+ Therapy', category: 'Wellness IVs', price: 'From $400', image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYXxlbnwwfHwwfHx8MA%3D%3D', description: 'Cellular regeneration and anti-aging boost.' },
];

const CATEGORIES = ['All', 'Injectables', 'Laser Therapies', 'Body Contouring', 'Wellness IVs'];

const Discovery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredTreatments = activeCategory === 'All' 
    ? TREATMENTS_DATA 
    : TREATMENTS_DATA.filter(t => t.category === activeCategory);

  return (
    <div className="discovery-page animate-fade-in">
      <div className="discovery-header">
        <div className="container">
          <h1>Treatment Portfolio</h1>
          <p>Discover our curated collection of aesthetic enhancements.</p>
        </div>
      </div>

      <div className="container discovery-layout">
        {/* Sidebar Filters */}
        <aside className="discovery-sidebar">
          <div className="sidebar-header">
            <h3>Categories</h3>
            <button className="mobile-filter-btn" onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}>
              <Filter size={20} />
            </button>
          </div>
          
          <ul className={`sidebar-menu ${isMobileFilterOpen ? 'open' : ''}`}>
            {CATEGORIES.map(category => (
              <li key={category}>
                <button 
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(category);
                    setIsMobileFilterOpen(false);
                  }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* 3-Column Grid */}
        <main className="discovery-main">
          <div className="treatments-grid-3">
            {filteredTreatments.map(treatment => (
              <div key={treatment.id} className="treatment-card hover-lift">
                <div className="card-image" style={{ backgroundImage: `url(${treatment.image})` }}></div>
                <div className="card-content">
                  <div className="card-meta">
                    <span className="treatment-category">{treatment.category}</span>
                    <span className="treatment-price">{treatment.price}</span>
                  </div>
                  <h3>{treatment.name}</h3>
                  <p>{treatment.description}</p>
                  {/* Critical: Link correctly to the detail template */}
                  <Link to={`/treatments/${treatment.id}`} className="card-link">
                    View Details <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
            
            {filteredTreatments.length === 0 && (
              <div className="no-results">
                <p>No treatments found in this category.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Discovery;
