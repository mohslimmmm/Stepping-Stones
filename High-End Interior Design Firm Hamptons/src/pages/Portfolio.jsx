import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Oceanfront Estates', 'Historic Renovations', 'Modern Barns', 'Commercial Spaces'];

  const projects = [
    {
      id: 'amagansett-retreat',
      title: 'Amagansett Retreat',
      category: 'Oceanfront Estates',
      image: '/images/hamptons_oceanfront_estate_1771895629128.png',
    },
    {
      id: 'sag-harbor-cottage',
      title: 'Sag Harbor Cottage',
      category: 'Historic Renovations',
      image: '/assets/historic_renovation_1771809903408.png', 
    },
    {
      id: 'bridgehampton-barn',
      title: 'Bridgehampton Barn',
      category: 'Modern Barns',
      image: '/images/hamptons_modern_barn_kitchen_1771895643678.png',
    },
    {
      id: 'montauk-suites',
      title: 'Montauk Suites',
      category: 'Commercial Spaces',
      image: '/assets/commercial_space_design_1771809919472.png', 
    },
    {
      id: 'southampton-manor',
      title: 'Southampton Manor',
      category: 'Oceanfront Estates',
      image: '/images/hamptons_living_room_hero_1771895658346.png',
    },
    {
      id: 'wainscott-loft',
      title: 'Wainscott Loft',
      category: 'Modern Barns',
      image: '/images/hamptons_modern_barn_kitchen_1771895643678.png',
    }
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="bg-linen min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sand uppercase tracking-[0.4em] text-xs font-bold mb-6"
          >
            Our Work
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-deep-grey mb-12"
          >
            Curated Portfolio
          </motion.h1>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-sand/20 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold transition-all border-b-2 py-2 ${
                  activeTab === cat ? 'border-sand text-deep-grey' : 'border-transparent text-deep-grey/40 hover:text-deep-grey/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <Link to={`/project/${project.id}`}>
                  <div className="aspect-[4/5] overflow-hidden rounded-8 mb-6 card relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-sand/0 group-hover:bg-sand/10 transition-colors pointer-events-none"></div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-sand font-bold mb-1">{project.category}</p>
                      <h3 className="text-xl font-serif text-deep-grey">{project.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-deep-grey/40 font-serif italic text-xl">No projects found in this category. Check back soon for new additions.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
