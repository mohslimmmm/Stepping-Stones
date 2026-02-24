import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const projects = [
    {
      id: 'amagansett-retreat',
      title: 'Amagansett Retreat',
      category: 'Oceanfront Estates',
      image: '/images/hamptons_oceanfront_estate_1771895629128.png', 
    },
    {
      id: 'bridgehampton-barn',
      title: 'Bridgehampton Barn',
      category: 'Modern Barns',
      image: '/images/hamptons_modern_barn_kitchen_1771895643678.png',
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hamptons_living_room_hero_1771895658346.png" 
            alt="Hamptons Living Room" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight">
              Transform <br /> Your Space
            </h1>
            <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto tracking-wide">
              Bespoke interior design for the most discerning Hamptons homes.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Inquire About Design
              </Link>
              <Link to="/portfolio" className="text-white border-b border-white/40 pb-1 hover:border-white transition-all text-sm uppercase tracking-widest font-medium">
                Curated Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-linen">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="text-sand uppercase tracking-[0.3em] text-xs font-bold mb-4">Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-serif text-deep-grey">Curated Spaces</h2>
            </div>
            <Link to="/portfolio" className="group flex items-center space-x-2 text-deep-grey/60 hover:text-sand transition-colors mt-8 md:mt-0 uppercase text-xs tracking-widest font-bold">
              <span>View All Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <Link to={`/project/${project.id}`}>
                  <div className="aspect-[4/5] overflow-hidden rounded-8 mb-6 relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  <p className="text-sand text-xs uppercase tracking-widest font-bold mb-2">{project.category}</p>
                  <h3 className="text-2xl font-serif text-deep-grey group-hover:text-sand transition-colors">{project.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-8 overflow-hidden">
                <img 
                  src="/images/hamptons_living_room_hero_1771895658346.png" 
                  alt="Design Details" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-linen rounded-8 -z-10"></div>
            </div>
            
            <div className="max-w-xl">
              <p className="text-sand uppercase tracking-[0.3em] text-xs font-bold mb-6">Our Philosophy</p>
              <h2 className="text-4xl md:text-5xl font-serif text-deep-grey mb-8">Light, Texture, <br /> & Timelessness</h2>
              <p className="text-deep-grey/70 text-lg mb-10 leading-relaxed font-light">
                We believe a home should be a sanctuary—a reflection of the soul and a response to the environment. Our designs prioritize natural light, curated textures, and an effortless blend of historic charm and modern living.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-linen flex items-center justify-center text-sand flex-shrink-0">
                    <Star size={18} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Bespoke Sourcing</h4>
                    <p className="text-sm text-deep-grey/60">Every piece is hand-selected from European artisans and local craftsmen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-linen flex items-center justify-center text-sand flex-shrink-0">
                    <Star size={18} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Natural Materials</h4>
                    <p className="text-sm text-deep-grey/60">We celebrate the raw beauty of linen, reclaimed wood, and natural stone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
