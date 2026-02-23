import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Lifestyle = () => {
  const articles = [
    {
      title: 'The Austin Migration: Designing for the Hill Country',
      excerpt: 'Beyond the city limits, a new architectural language is emerging. We explore how limestone and light are redefining luxury.',
      category: 'ARCHITECTURE',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Sustainable Luxury: High-Performance Estates',
      excerpt: 'Luxury doesn\'t have to be wasteful. Discover our approach to net-zero building and intelligent water management.',
      category: 'SUSTAINABILITY',
      image: 'https://images.unsplash.com/photo-1518005020113-64478f7e914d?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div style={{ paddingTop: '120px', backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      <div style={{ padding: '0 5%', marginBottom: '80px', textAlign: 'center' }}>
        <h4 style={{ color: 'var(--accent-copper)', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '16px' }}>EDITORIAL</h4>
        <h1 style={{ fontSize: '3.5rem' }}>LIFESTYLE GUIDE</h1>
        <p style={{ maxWidth: '600px', margin: '20px auto 0', opacity: 0.7 }}>
          Insights into the intersection of luxury living and Texas heritage.
        </p>
      </div>

      <div style={{ padding: '0 5% 100px' }}>
        {articles.map((article, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: idx % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr', 
              gap: '60px', 
              marginBottom: '100px',
              alignItems: 'center'
            }}
          >
            {idx % 2 !== 0 && (
               <div style={{ height: '500px', overflow: 'hidden' }}>
                <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
            )}
            
            <div style={{ padding: '40px 0' }}>
              <span style={{ color: 'var(--accent-copper)', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px' }}>{article.category}</span>
              <h2 style={{ fontSize: '2.5rem', margin: '24px 0', lineHeight: '1.2' }}>{article.title}</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(0,0,0,0.7)', marginBottom: '40px', lineHeight: '1.8' }}>{article.excerpt}</p>
              <button className="outline-btn" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                Read Article <ArrowUpRight size={18} />
              </button>
            </div>

            {idx % 2 === 0 && (
               <div style={{ height: '500px', overflow: 'hidden' }}>
                <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Lifestyle;
