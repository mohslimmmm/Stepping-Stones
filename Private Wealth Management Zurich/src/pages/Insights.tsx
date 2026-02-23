import { motion } from 'framer-motion';
import { Newspaper, Lock, ShieldCheck, Globe } from 'lucide-react';

const Insights = () => {
  const articles = [
    {
      category: 'Market Intelligence',
      title: 'Global Macroeconomic Outlook: The Case for Neutrality',
      date: 'Feb 15, 2024',
      excerpt: 'Analyzing the shift in central bank policies and the implications for fixed-income portfolios in the coming quarter.',
      image: 'https://images.unsplash.com/photo-1611974717482-4828c3fc35C3?auto=format&fit=crop&q=80&w=1000'
    },
    {
      category: 'Security & Custody',
      title: 'Swiss Banking Security: Beyond Cyber Protocols',
      date: 'Feb 10, 2024',
      excerpt: 'A deep dive into the physical and legal safeguards that make the Swiss financial system a global benchmark for safety.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'
    },
    {
      category: 'Sustainable Wealth',
      title: 'The Evolution of Philanthropy in Digital Wealth',
      date: 'Feb 05, 2024',
      excerpt: 'How blockchain and tokenization are creating new avenues for transparent and impactful global giving.',
      image: 'https://images.unsplash.com/photo-1469571483333-f33f417f39ef?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div className="pt-32 pb-32">
      <div className="container">
        <header className="mb-20">
          <h4 className="text-[10px] tracking-[0.4em] uppercase text-silver mb-6">Insights & Intelligence</h4>
          <h1 className="text-4xl md:text-5xl mb-8">Strategic <span className="italic">Perspectives.</span></h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden mb-8 relative">
                 <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105"
                 />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[8px] tracking-[0.3em] uppercase font-bold text-deep-indigo">
                    {article.category}
                 </div>
              </div>
              <p className="text-[10px] tracking-widest text-silver uppercase mb-4">{article.date}</p>
              <h3 className="text-xl mb-4 group-hover:text-deep-indigo transition-colors">{article.title}</h3>
              <p className="text-sm text-light-slate opacity-70 leading-relaxed font-light mb-6">
                 {article.excerpt}
              </p>
              <div className="h-[1px] w-12 bg-silver/30 group-hover:w-full transition-all duration-500"></div>
            </motion.article>
          ))}
        </div>

        {/* Feature Report Section */}
        <section className="mt-32 bg-dark-slate p-12 md:p-24 text-white rounded-sm overflow-hidden relative">
           <div className="absolute right-[-10%] top-[-20%] opacity-5">
              <Globe size={500} />
           </div>
           <div className="relative z-10 max-w-2xl">
              <Lock className="text-silver mb-8" size={32} />
              <h2 className="text-3xl md:text-4xl mb-8 leading-tight">The 2024 State of Swiss Asset Privacy</h2>
              <p className="text-lg opacity-70 mb-12 font-light leading-relaxed">
                 An exclusive deep-dive available only to mandate holders. This report covers the latest regulatory changes and our proprietary defensive strategies for the upcoming fiscal cycle.
              </p>
              <button className="px-10 py-4 border border-white/30 text-xs tracking-widest uppercase hover:bg-white hover:text-dark-slate transition-all">
                 Download Executive Summary
              </button>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Insights;
