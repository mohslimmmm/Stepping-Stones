import { motion } from 'framer-motion';
import { Search, MapPin, Compass, Euro } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const trophyAssets = [
    {
      id: "villa-alcuzcuz",
      title: "Villa Alcuzcuz",
      location: "La Zagaleta",
      price: "POA",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      description: "A masterful expression of organic architecture seamlessly integrated into the Andalusian mountainside."
    },
    {
      id: "palacio-del-mar",
      title: "Palacio del Mar",
      location: "Golden Mile",
      price: "€ 32,500,000",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      description: "Frontline beach estate offering uncompromised Mediterranean vistas and uncompromising privacy."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] w-full flex items-end justify-center pb-32">
        <div 
          className="absolute inset-0 z-0 parallax-bg"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-espresso/40"></div>
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-alabaster to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-alabaster tracking-tight text-balance mb-6 drop-shadow-lg">
              The Architecture of Living
            </h1>
            <p className="text-lg md:text-xl text-alabaster/90 font-light max-w-2xl mx-auto tracking-wide">
              Curating Marbella's most exclusive off-market properties for the global elite.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto bg-alabaster/95 backdrop-blur-md p-4 sm:p-6 rounded-sm shadow-2xl flex flex-col md:flex-row items-center gap-4"
          >
            <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-espresso/10 p-2 flex items-center space-x-3">
              <MapPin className="text-olive" size={20} />
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-espresso/50 uppercase tracking-wider">Zone</span>
                <select className="bg-transparent border-none outline-none font-serif text-espresso text-lg appearance-none cursor-pointer">
                  <option>Golden Mile</option>
                  <option>La Zagaleta</option>
                  <option>Sierra Blanca</option>
                  <option>Nueva Andalucía</option>
                </select>
              </div>
            </div>
            
            <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-espresso/10 p-2 flex items-center space-x-3">
              <Compass className="text-olive" size={20} />
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-espresso/50 uppercase tracking-wider">Lifestyle</span>
                <select className="bg-transparent border-none outline-none font-serif text-espresso text-lg appearance-none cursor-pointer">
                  <option>Frontline Beach</option>
                  <option>Golf Valley</option>
                  <option>Mountain Retreat</option>
                  <option>Equestrian Estate</option>
                </select>
              </div>
            </div>

            <div className="flex-1 w-full p-2 flex items-center space-x-3">
              <Euro className="text-olive" size={20} />
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-espresso/50 uppercase tracking-wider">Budget</span>
                <select className="bg-transparent border-none outline-none font-serif text-espresso text-lg appearance-none cursor-pointer">
                  <option>€5M - €10M</option>
                  <option>€10M - €20M</option>
                  <option>€20M+</option>
                  <option>POA / Off-Market</option>
                </select>
              </div>
            </div>

            <button className="w-full md:w-auto bg-espresso text-alabaster px-8 py-4 rounded-sm hover:bg-navy transition-colors flex items-center justify-center space-x-2">
              <Search size={18} />
              <span className="font-medium tracking-wide">Curate</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trophy Assets Section */}
      <section className="py-24 bg-alabaster">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-xs font-sans text-olive uppercase tracking-[0.2em] mb-4">The Collection</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-espresso">Trophy Assets</h3>
            </div>
            <Link to="/collection" className="mt-6 md:mt-0 text-sm border-b border-espresso pb-1 hover:text-navy hover:border-navy transition-colors">
              View Entire Portfolio
            </Link>
          </div>

          <div className="space-y-32">
            {trophyAssets.map((asset, index) => (
              <motion.div 
                key={asset.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
              >
                <div className="w-full md:w-3/5 relative group cursor-pointer overflow-hidden rounded-sm">
                  <Link to={`/property/${asset.id}`}>
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img 
                        src={asset.image} 
                        alt={asset.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                    </div>
                    <div className="absolute inset-0 bg-espresso/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </Link>
                </div>
                
                <div className="w-full md:w-2/5 flex flex-col items-start pr-0 md:pr-12">
                  <span className="text-xs font-sans text-olive uppercase tracking-widest mb-4">{asset.location}</span>
                  <Link to={`/property/${asset.id}`} className="block group">
                    <h4 className="text-4xl font-serif text-espresso mb-6 group-hover:text-navy transition-colors">{asset.title}</h4>
                  </Link>
                  <p className="text-espresso/70 font-light leading-relaxed mb-8 text-lg">
                    {asset.description}
                  </p>
                  <div className="font-serif text-2xl text-espresso mb-8">
                    {asset.price}
                  </div>
                  <Link 
                    to={`/property/${asset.id}`}
                    className="group flex items-center space-x-4 text-sm font-medium tracking-wide uppercase text-espresso hover:text-navy transition-colors"
                  >
                    <span>Discover Estate</span>
                    <span className="w-12 h-[1px] bg-espresso group-hover:w-16 group-hover:bg-navy transition-all duration-300"></span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Off-Market Teaser */}
      <section className="py-32 bg-espresso text-alabaster text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Beyond The Public Eye</h2>
          <p className="text-alabaster/70 font-light text-lg mb-10 text-balance">
            Our most exceptional inventory never reaches the open market. Connect with our dedicated concierge team for discrete access to off-market masterpieces.
          </p>
          <Link to="/atelier" className="inline-block border border-alabaster px-8 py-4 text-sm tracking-widest uppercase hover:bg-alabaster hover:text-espresso transition-colors duration-300">
            Enter The Atelier
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
