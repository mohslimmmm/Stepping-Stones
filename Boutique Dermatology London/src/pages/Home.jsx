import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import FloatingWidget from '../components/FloatingWidget';

const treatments = [
  { id: 'bespoke-laser', name: 'Bespoke Laser Resurfacing', desc: 'Precision skin remodeling using advanced fractional technology.', img: 'https://images.unsplash.com/photo-1616683838428-ec2f207ed457?auto=format&fit=crop&q=80&w=800' },
  { id: 'molecular-hydration', name: 'Molecular Hydration Therapy', desc: 'Deep-tissue dermal replenishment for immediate luminosity.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800' },
  { id: 'cellular-renewal', name: 'Cellular Renewal Peel', desc: 'Medical-grade exfoliation tailored to your unique skin biology.', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800' }
];

const Home = () => {
  return (
    <div className="relative">
      <FloatingWidget />
      
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center pt-12 pb-24 border-b border-slate-grey/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           {/* Abstract architectural/clinical background hint */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-dark transform skew-x-12 translate-x-32" />
        </div>
        <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-body text-xs tracking-widest text-blush uppercase mb-6">Harley Street, London</h2>
            <h1 className="text-5xl md:text-7xl font-header leading-tight text-slate-dark mb-8">
              The Science <br/><span className="italic text-slate">of Esthétique.</span>
            </h1>
            <p className="text-lg text-slate opacity-80 mb-10 max-w-md leading-relaxed">
              Bespoke dermatological protocols bridging profound clinical expertise with unparalleled British elegance.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary">Book Consultation</Link>
              <Link to="/discovery" className="btn-secondary">Explore Treatments</Link>
            </div>
          </div>
          <div className="relative fade-in hover-lift">
            <div className="absolute -inset-4 bg-blush opacity-20 transform rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1600334129128-68505d1115b8?auto=format&fit=crop&q=80&w=1000" 
              alt="Clinical elegance" 
              className="w-full h-[600px] object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-dark text-ivory text-center">
        <div className="container max-w-3xl">
          <Sparkles className="mx-auto mb-8 text-blush" size={32} />
          <h2 className="text-3xl font-header mb-6 tracking-wide">A tailored approach to dermal longevity.</h2>
          <p className="font-body text-ivory opacity-80 leading-loose">
            At Harley Street Skin Bespoke, we reject the notion of standardized care. Every patient receives a comprehensive biometric assessment, resulting in a meticulously architected treatment protocol designed to halt and reverse cellular aging.
          </p>
        </div>
      </section>

      {/* Renowned Treatments */}
      <section className="py-32 container">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-body tracking-widest text-blush uppercase mb-4">Our Protocols</h2>
            <h3 className="text-4xl font-header text-slate-dark">Renowned Treatments</h3>
          </div>
          <Link to="/discovery" className="hidden md:flex items-center gap-2 text-sm tracking-widest uppercase hover:text-blush transition-colors">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((t) => (
            <Link to={`/treatment/${t.id}`} key={t.id} className="group block h-full">
              <div className="relative overflow-hidden mb-6 h-80">
                <img 
                  src={t.img} 
                  alt={t.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h4 className="font-header text-xl mb-3 text-slate-dark group-hover:text-blush transition-colors">{t.name}</h4>
              <p className="text-sm text-slate opacity-70 leading-relaxed font-body">{t.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
