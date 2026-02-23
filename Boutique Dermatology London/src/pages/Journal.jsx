import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const articles = [
  { id: 1, category: 'Clinical Insight', title: 'London Pollution Defense', excerpt: 'How urban free radicals compromise dermal integrity, and the bespoke antioxidant protocols to reverse the damage.', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Regenerative Medicine', title: 'The Science of Exosomes', excerpt: 'Beyond PRP: Why stem cell-derived exosomes represent the next frontier in cellular skin regeneration.', img: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Seasonal Skincare', title: 'Winter Lipid Barrier Support', excerpt: 'Prescribing the perfect ceramide-rich formulations for dramatic drops in humidity.', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Treatment Spotlight', title: 'Fractional Mastery', excerpt: 'Understanding the downtime and transformative results of our signature Erbium resurfacing.', img: 'https://images.unsplash.com/photo-1512496015851-a1c8f411b4ba?auto=format&fit=crop&q=80&w=800' }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Journal = () => {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="container py-32 min-h-[90vh]">
      <motion.div initial="hidden" animate="show" variants={staggerContainer} className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-slate-grey/10 pb-12">
        <div className="max-w-2xl">
          <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-header text-slate-dark tracking-wide mb-6">The Skin Journal</motion.h1>
          <motion.p variants={fadeUp} className="font-body text-slate-grey opacity-90 text-lg leading-relaxed">
            Clinical insights, advanced treatment spotlights, and evidence-based dermatological commentary from our Harley Street specialists.
          </motion.p>
        </div>
      </motion.div>

      {/* Featured Article */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center"
      >
        <div className="relative overflow-hidden h-96 lg:h-[600px] hover-lift group">
          <img 
            src={featured.img} 
            alt={featured.title} 
            className="w-full h-full object-cover grayscale-[0.6] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:scale-105"
          />
        </div>
        <div className="lg:pr-12">
          <span className="text-xs uppercase tracking-[0.2em] text-soft-blush-dark font-bold mb-6 block">{featured.category}</span>
          <h2 className="text-5xl font-header text-slate-dark mb-8 leading-[1.1]">{featured.title}</h2>
          <p className="font-body text-slate-grey opacity-90 leading-relaxed mb-10 text-xl">
            {featured.excerpt}
          </p>
          <Link to="#" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-slate-dark hover:text-soft-blush-dark transition-colors link-underline pb-1">
            Read Full Article <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </motion.div>

      {/* Article Grid */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
      >
        {rest.map((article) => (
          <motion.div variants={fadeUp} key={article.id}>
            <Link to="#" className="group block h-full">
              <div className="relative overflow-hidden h-72 mb-8">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale-[0.5] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-soft-blush-dark font-bold mb-4 block">{article.category}</span>
              <h3 className="text-3xl font-header text-slate-dark mb-4 group-hover:text-soft-blush-dark transition-colors">{article.title}</h3>
              <p className="font-body text-slate-grey opacity-80 text-base leading-relaxed mb-6">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-dark opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0">
                Continue Reading <ArrowRight size={14} />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Journal;
