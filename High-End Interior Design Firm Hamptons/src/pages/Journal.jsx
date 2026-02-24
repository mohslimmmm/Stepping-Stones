import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    {
      id: 'summer-textures',
      title: 'Summer Textures: Bringing the Outside In',
      category: 'Design Trends',
      date: 'June 12, 2024',
      excerpt: 'How to use raw linen, jute, and weathered oak to create a space that breathes with the seasons.',
      image: '/images/hamptons_oceanfront_estate_1771895629128.png',
    },
    {
      id: 'sourcing-antiques',
      title: 'Sourcing Antiques in Europe',
      category: 'Sourcing',
      date: 'May 28, 2024',
      excerpt: 'A travelogue of our recent trip to the flea markets of Paris and the hidden gems of the Italian coast.',
      image: '/assets/historic_renovation_1771809903408.png',
    }
  ];

  return (
    <div className="bg-linen min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-20 max-w-2xl">
          <p className="text-sand uppercase tracking-[0.4em] text-xs font-bold mb-6">Editorial</p>
          <h1 className="text-5xl md:text-6xl font-serif text-deep-grey mb-8">Design Journal</h1>
          <p className="text-deep-grey/60 text-lg font-light leading-relaxed">
            Exploring the intersection of art, architecture, and the effortless lifestyle of the Hamptons.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="aspect-[16/10] rounded-8 overflow-hidden mb-8 shadow-sm">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="text-sand uppercase tracking-widest text-[10px] font-bold mb-4">{post.category} — {post.date}</p>
              <h2 className="text-3xl font-serif text-deep-grey mb-4 group-hover:text-sand transition-colors">{post.title}</h2>
              <p className="text-deep-grey/70 font-light mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <Link to={`/journal/${post.id}`} className="text-deep-grey font-bold text-[10px] uppercase tracking-[0.2em] border-b border-deep-grey/20 pb-1 w-fit hover:border-sand hover:text-sand transition-all">
                Read More
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
