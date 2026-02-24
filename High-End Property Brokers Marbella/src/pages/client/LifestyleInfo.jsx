import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Martini, Sun } from 'lucide-react';

const articles = [
  { id: 1, title: 'Relocating to Costa del Sol', excerpt: 'A comprehensive guide to residency, international schools, and the logistics of moving to Marbella.', img: 'https://images.unsplash.com/photo-1559564484-e48b3e040ff4?auto=format&fit=crop&q=80&w=800', icon: <Plane className="text-terracotta" size={24} /> },
  { id: 2, title: 'The Best Marbella Beach Clubs', excerpt: 'From the glamour of Nikki Beach to the sophisticated relaxation of Ocean Club in Puerto Banús.', img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=800', icon: <Martini className="text-terracotta" size={24} /> },
  { id: 3, title: 'Golf Valley Masterclass', excerpt: 'Exploring the prestigious courses of Nueva Andalucía: Las Brisas, Aloha, and Los Naranjos.', img: 'https://images.unsplash.com/photo-1587311919934-8c83a0026e63?auto=format&fit=crop&q=80&w=800', icon: <Sun className="text-terracotta" size={24} /> },
  { id: 4, title: 'Gastronomy on the Golden Mile', excerpt: 'Michelin-starred dining and exclusive culinary experiences along Marbella’s most famous stretch.', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800', icon: <Martini className="text-terracotta" size={24} /> }
];

const LifestyleInfo = () => {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="bg-warm-white fade-in">
      <div className="bg-dark-slate text-warm-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544378120-d3080bfde5da?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-header mb-6 tracking-wide drop-shadow-md text-white">The Marbella Lifestyle</h1>
          <p className="text-lg md:text-xl font-body max-w-3xl mx-auto drop-shadow-md opacity-90">
            Immerse yourself in the vibrant culture, exceptional dining, and year-round sunshine of the Costa del Sol. We don't just find you a home; we introduce you to a new way of living.
          </p>
        </div>
      </div>

      <div className="container py-24">
        {/* Featured Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center bg-white rounded shadow-soft overflow-hidden">
          <div className="relative h-[400px] lg:h-[500px]">
            <img 
              src={featured.img} 
              alt={featured.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 lg:p-12">
            <div className="bg-warm-white p-3 rounded-full inline-block mb-6 shadow-soft">
              {featured.icon}
            </div>
            <h2 className="text-4xl font-header text-dark-slate mb-6">{featured.title}</h2>
            <p className="font-body text-dark-slate opacity-80 leading-relaxed mb-8 text-lg">
              {featured.excerpt}
            </p>
            <Link to="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-terracotta hover:text-dark-slate transition-colors">
              Read Guide <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rest.map((article) => (
            <Link to="#" key={article.id} className="group bg-white rounded shadow-soft overflow-hidden hover-lift block h-full flex flex-col">
              <div className="relative overflow-hidden h-56 shrink-0">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-warm-white p-2 rounded-full shadow-sm text-terracotta">{article.icon}</div>
                  <h3 className="text-2xl font-header text-dark-slate group-hover:text-terracotta transition-colors leading-tight">{article.title}</h3>
                </div>
                <p className="font-body text-dark-slate opacity-80 text-sm leading-relaxed flex-grow">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-terracotta font-bold text-sm uppercase tracking-widest group-hover:text-dark-slate transition-colors">
                  Explore <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifestyleInfo;
