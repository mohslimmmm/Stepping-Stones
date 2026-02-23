import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
  { id: 1, category: 'Clinical Insight', title: 'London Pollution Defense', excerpt: 'How urban free radicals compromise dermal integrity, and the bespoke antioxidant protocols to reverse the damage.', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Regenerative Medicine', title: 'The Science of Exosomes', excerpt: 'Beyond PRP: Why stem cell-derived exosomes represent the next frontier in cellular skin regeneration.', img: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Seasonal Skincare', title: 'Winter Lipid Barrier Support', excerpt: 'Prescribing the perfect ceramide-rich formulations for dramatic drops in humidity.', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Treatment Spotlight', title: 'Fractional Mastery', excerpt: 'Understanding the downtime and transformative results of our signature Erbium resurfacing.', img: 'https://images.unsplash.com/photo-1512496015851-a1c8f411b4ba?auto=format&fit=crop&q=80&w=800' }
];

const Journal = () => {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="container py-24 fade-in">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-grey/20 pb-12">
        <div>
          <h1 className="text-5xl md:text-6xl font-header text-slate-dark tracking-wide">The Skin Journal</h1>
          <p className="font-body text-slate opacity-80 mt-6 max-w-xl leading-relaxed">
            Clinical insights, advanced treatment spotlights, and evidence-based dermatological commentary from our Harley Street specialists.
          </p>
        </div>
      </div>

      {/* Featured Article */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
        <div className="relative overflow-hidden h-96 lg:h-[500px]">
          <img 
            src={featured.img} 
            alt={featured.title} 
            className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105"
          />
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest text-blush font-bold mb-4 block">{featured.category}</span>
          <h2 className="text-4xl font-header text-slate-dark mb-6">{featured.title}</h2>
          <p className="font-body text-slate opacity-80 leading-relaxed mb-8 text-lg">
            {featured.excerpt}
          </p>
          <Link to="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-slate-dark hover:text-blush transition-colors">
            Read Full Article <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {rest.map((article) => (
          <Link to="#" key={article.id} className="group">
            <div className="relative overflow-hidden h-64 mb-6">
              <img 
                src={article.img} 
                alt={article.title} 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            </div>
            <span className="text-xs uppercase tracking-widest text-blush font-bold mb-3 block">{article.category}</span>
            <h3 className="text-2xl font-header text-slate-dark mb-4 group-hover:text-blush transition-colors">{article.title}</h3>
            <p className="font-body text-slate opacity-80 text-sm leading-relaxed">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Journal;
