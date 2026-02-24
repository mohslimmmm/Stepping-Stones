import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Key } from 'lucide-react';

const Atelier = () => {
  const brokers = [
    {
      name: "Alejandro Vargas",
      title: "Founding Partner",
      languages: "ESP, ENG, DEU",
      desc: "With over two decades of experience navigating Marbella's most exclusive enclaves, Alejandro specializes in securing assets that never reach the public domain.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Sofia Laurent",
      title: "Director of Ultra-Prime",
      languages: "ENG, FRA, ITA",
      desc: "Sofia curates the portfolios of international family offices, discreetly managing acquisitions across the Golden Mile and La Zagaleta.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mateo Silva",
      title: "Head of Off-Market Intelligence",
      languages: "ESP, ENG, ARA",
      desc: "Mateo leverages an elite global network, connecting Middle Eastern and Northern European capital with generational legacy properties.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-alabaster pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Manifesto */}
        <section className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-16">
          <div className="w-full lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-serif text-espresso leading-none mb-8"
            >
              The Atelier
            </motion.h1>
            
            <div className="flex items-center space-x-4 mb-4 text-olive">
              <ShieldCheck size={24} />
              <span className="text-sm uppercase tracking-[0.2em] font-medium text-espresso">Absolute Discretion</span>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg text-espresso/80 font-light"
            >
              <p className="text-2xl font-serif leading-relaxed mb-6 text-espresso">
                True luxury whispers. We operate beyond the purview of traditional brokerages, specializing in the acquisition and disposition of legacy assets.
              </p>
              <p>
                Our firm was established to serve a highly distinct clientele—those who value privacy above spectacle. The vast majority of our transactions are conducted off-market, uniting generational properties with the world's most discerning individuals through encrypted, direct channels.
              </p>
            </motion.div>
            
            {/* Sales Badge */}
            <div className="mt-12 inline-block border border-olive/30 px-8 py-6 rounded-sm bg-white shadow-sm">
              <span className="text-xs uppercase tracking-widest text-olive block mb-2">Track Record</span>
              <div className="text-4xl font-serif text-espresso">€1B+</div>
              <p className="text-xs uppercase tracking-widest text-espresso/50 mt-1">Career Sales Volume</p>
            </div>
          </div>
        </section>

        {/* The Partners */}
        <section className="mb-32">
          <div className="flex items-center justify-between border-b border-espresso/10 pb-4 mb-16">
            <h2 className="text-3xl font-serif text-espresso">The Partners</h2>
            <Globe className="text-olive" size={24} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            {brokers.map((broker, index) => (
              <motion.div 
                key={broker.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 bg-espresso/5 relative">
                  <img 
                    src={broker.image} 
                    alt={broker.name}
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso via-espresso/50 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2 text-alabaster/80 text-xs tracking-widest uppercase">
                       <Key size={14} />
                       <span>Off-Market Access</span>
                    </div>
                  </div>
                </div>
                
                <div className="px-2">
                  <h3 className="text-2xl font-serif text-espresso mb-1 group-hover:text-navy transition-colors">{broker.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs uppercase tracking-widest text-olive">{broker.title}</span>
                    <span className="text-[10px] uppercase tracking-widest text-espresso/40 border border-espresso/20 px-2 py-1 rounded-sm">{broker.languages}</span>
                  </div>
                  <p className="text-sm font-light text-espresso/70 leading-relaxed">
                    {broker.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Global Reach Matrix Placeholder */}
        <section className="border-y border-olive/20 py-24 text-center">
            <p className="text-xs uppercase tracking-widest text-olive mb-6">Our Global Network</p>
            <h2 className="text-4xl font-serif text-espresso mb-12">Connecting Marbella with the World</h2>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 filter grayscale">
               <div className="text-xl font-serif text-espresso">London</div>
               <div className="text-xl font-serif text-espresso">Dubai</div>
               <div className="text-xl font-serif text-espresso">Geneva</div>
               <div className="text-xl font-serif text-espresso">Riyadh</div>
               <div className="text-xl font-serif text-espresso">Stockholm</div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default Atelier;
