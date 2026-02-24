import { Link } from 'react-router-dom';
import { Search, MapPin, Bed, Bath, Expand } from 'lucide-react';

const featuredVillas = [
  { id: 'villa-aloha', name: 'Villa Aloha', location: 'Nueva Andalucía', price: '€4,950,000', beds: 5, baths: 5, sqft: '680 m²', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800' },
  { id: 'villa-sierra', name: 'Villa Sierra Blanca', location: 'Golden Mile', price: '€8,500,000', beds: 6, baths: 7, sqft: '1,200 m²', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { id: 'penthouse-marina', name: 'Marina Penthouse', location: 'Puerto Banús', price: '€3,200,000', beds: 3, baths: 3, sqft: '250 m²', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
];

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex justify-center items-center rounded-b-[40px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000" 
          alt="Golden Mile Villa" 
          className="absolute inset-0 w-full h-full object-cover no-rounded"
        />
        <div className="absolute inset-0 bg-dark-slate/40 no-rounded"></div>
        
        <div className="container relative z-10 text-center text-white mt-16">
          <h1 className="text-5xl md:text-7xl font-header mb-6 tracking-wide drop-shadow-md">Discover Your Spanish Dream</h1>
          <p className="text-lg md:text-xl font-body mb-12 max-w-2xl mx-auto drop-shadow-md opacity-90">
            Exclusive access to Marbella's most sought-after properties, from the Golden Mile to Nueva Andalucía.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white p-3 rounded-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-3 shadow-2xl relative z-20">
            <div className="flex-1 px-4 py-2 border-r border-dark-slate/10 flex items-center">
              <input type="text" placeholder="Location, e.g. Golden Mile" className="w-full text-dark-slate outline-none font-body bg-transparent" />
            </div>
            <div className="flex-1 px-4 py-2 border-r border-dark-slate/10 flex items-center">
              <select className="w-full text-dark-slate outline-none font-body bg-transparent cursor-pointer">
                <option value="">Property Type</option>
                <option value="villa">Villa</option>
                <option value="apartment">Apartment</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>
            <div className="flex-1 px-4 py-2 flex items-center">
              <select className="w-full text-dark-slate outline-none font-body bg-transparent cursor-pointer">
                <option value="">Max Price</option>
                <option value="2m">€2,000,000</option>
                <option value="5m">€5,000,000</option>
                <option value="10m">€10,000,000+</option>
              </select>
            </div>
            <button className="bg-terracotta text-white p-4 rounded-lg hover:bg-terracotta-dark transition-colors flex items-center justify-center min-w-[60px]">
              <Search size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-warm-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-sm font-body tracking-widest text-terracotta uppercase mb-4 font-bold">Welcome to Sol y Mar</h2>
          <h3 className="text-4xl md:text-5xl font-header text-dark-slate mb-8 leading-tight">Curating the Costa del Sol's finest real estate portfolio.</h3>
          <p className="font-body text-dark-slate opacity-80 leading-relaxed text-lg">
            For over 15 years, our localized expertise and global reach have connected discerning buyers with extraordinary residences. We don't just sell properties; we facilitate the Marbella lifestyle.
          </p>
        </div>
      </section>

      {/* Featured Villas */}
      <section className="py-24 bg-warm-white-dark/50">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-body tracking-widest text-terracotta uppercase mb-2 font-bold">Exclusive Mandates</h2>
              <h3 className="text-4xl font-header text-dark-slate">Featured Villas</h3>
            </div>
            <Link to="/discovery" className="hidden md:inline-flex btn-secondary bg-transparent">View All Properties</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVillas.map(villa => (
              <Link to={`/listing/${villa.id}`} key={villa.id} className="group card bg-white overflow-hidden shadow-soft hover-lift cursor-pointer block">
                <div className="relative h-64 overflow-hidden">
                  <img src={villa.img} alt={villa.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 font-bold text-xs uppercase tracking-wider text-dark-slate rounded">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-terracotta text-sm mb-3 font-bold">
                    <MapPin size={16} /> {villa.location}
                  </div>
                  <h4 className="font-header text-2xl text-dark-slate mb-2 group-hover:text-terracotta transition-colors">{villa.name}</h4>
                  <p className="text-xl font-body font-bold text-dark-slate mb-6">{villa.price}</p>
                  
                  <div className="flex justify-between items-center text-dark-slate opacity-70 text-sm border-t border-dark-slate/10 pt-4">
                    <div className="flex items-center gap-2"><Bed size={16} /> {villa.beds} Beds</div>
                    <div className="flex items-center gap-2"><Bath size={16} /> {villa.baths} Baths</div>
                    <div className="flex items-center gap-2"><Expand size={16} /> {villa.sqft}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/discovery" className="btn-secondary w-full bg-transparent">View All Properties</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
