import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import FloatingWidget from '../components/FloatingWidget';
import { motion } from 'framer-motion';

const treatments = [
  { id: 'bespoke-laser', name: 'Bespoke Laser Resurfacing', desc: 'Precision skin remodeling using advanced fractional technology.', img: 'https://images.unsplash.com/photo-1616683838428-ec2f207ed457?auto=format&fit=crop&q=80&w=800' },
  { id: 'molecular-hydration', name: 'Molecular Hydration Therapy', desc: 'Deep-tissue dermal replenishment for immediate luminosity.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800' },
  { id: 'cellular-renewal', name: 'Cellular Renewal Peel', desc: 'Medical-grade exfoliation tailored to your unique skin biology.', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800' }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Home = () => {
  return (
    <div className="relative">
      <FloatingWidget />
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center pt-24 pb-24 relative overflow-hidden bg-ivory">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-2/3 h-full bg-ivory-dark transform skew-x-12 translate-x-32" />
        </div>
        
        <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" 
            animate="show" 
            variants={staggerContainer}
            className="max-w-xl"
          >
            <motion.h2 variants={fadeUp} className="font-body text-xs tracking-widest text-slate-grey-light uppercase mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-slate-grey-light"></span> Harley Street, London
            </motion.h2>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-header leading-[1.05] text-slate-dark mb-8">
              The Science <br/><span className="italic text-slate-grey font-light">of Esthétique.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-slate-grey mb-12 leading-relaxed">
              Bespoke dermatological protocols bridging profound clinical expertise with unparalleled British elegance.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link to="/contact" className="btn-primary">Book Consultation</Link>
              <Link to="/discovery" className="btn-secondary">Explore Treatments</Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] md:h-[700px] hover-lift group mt-12 md:mt-0"
          >
            <div className="absolute -inset-4 bg-soft-blush opacity-30 transform -rotate-2 transition-transform duration-700 group-hover:rotate-0" />
            <img 
              src="https://images.unsplash.com/photo-1600334129128-68505d1115b8?auto=format&fit=crop&q=80&w=1000" 
              alt="Clinical elegance" 
              className="w-full h-full object-cover relative z-10 grayscale-[0.8] hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-slate-dark text-ivory text-center relative overflow-hidden">
        {/* Abstract shapes for luxury feel */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-ivory transform rotate-45 blur-[100px]" />
        </div>
        
        <div className="container max-w-3xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-10">
              <Sparkles className="text-soft-blush" size={32} strokeWidth={1} />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-5xl font-header mb-8 tracking-wide leading-tight">
              A tailored approach <br /> <span className="italic text-soft-blush-dark font-light">to dermal longevity.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-lg text-ivory opacity-80 leading-relaxed max-w-2xl mx-auto">
              At Harley Street Skin Bespoke, we reject the notion of standardized care. Every patient receives a comprehensive biometric assessment, resulting in a meticulously architected treatment protocol designed to halt and reverse cellular aging.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Renowned Treatments */}
      <section className="py-32 container bg-ivory">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <motion.h2 variants={fadeUp} className="text-xs font-body tracking-widest text-slate-grey-light uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-slate-grey-light"></span> Our Protocols
            </motion.h2>
            <motion.h3 variants={fadeUp} className="text-5xl font-header text-slate-dark">Renowned Treatments</motion.h3>
          </div>
          <motion.div variants={fadeUp}>
            <Link to="/discovery" className="flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-slate-dark hover:text-soft-blush-dark transition-colors link-underline pb-1">
              Explore All <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {treatments.map((t, index) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/treatment/${t.id}`} className="group block h-full">
                <div className="relative overflow-hidden mb-8 h-[450px]">
                  <div className="absolute inset-0 bg-slate-dark/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={t.img} 
                    alt={t.name}
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                  />
                </div>
                <h4 className="font-header text-2xl mb-4 text-slate-dark group-hover:text-soft-blush-dark transition-colors">{t.name}</h4>
                <p className="text-base text-slate-grey opacity-80 leading-relaxed font-body">{t.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-slate-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-4 group-hover:translate-x-0">
                  Discover <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
