import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Award, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-alpine-snow">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Abstract Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/aegis_hero_abstract_alps.png" 
            alt="Minimalist Abstract Swiss Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-indigo/40 to-transparent"></div>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
        </div>

        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl px-6 py-12 bg-white/50 backdrop-blur-xl border-l-[1px] border-white/30"
          >
            <h1 className="text-5xl md:text-7xl mb-8 leading-tight">
              Preserving <br />
              <span className="italic font-light">Excellence.</span>
            </h1>
            <p className="text-lg text-dark-slate mb-12 max-w-lg opacity-90 leading-relaxed font-light">
              Bespoke wealth management for individuals who demand discretion, security, and a global perspective. Rooted in Zurich, reaching across continents.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/services" 
                className="group flex items-center justify-center gap-3 bg-deep-indigo text-white px-10 py-4 rounded-[4px] tracking-widest uppercase text-xs transition-all hover:bg-dark-slate"
              >
                Our Philosophy
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center justify-center bg-white/40 border border-white text-dark-slate px-10 py-4 rounded-[4px] tracking-widest uppercase text-xs backdrop-blur-md hover:bg-white/60"
              >
                Inquire
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30"></div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[10px] tracking-[0.4em] uppercase text-silver mb-6">Our Philosophy</h4>
              <h2 className="text-4xl md:text-5xl mb-10 leading-snug">
                Discretion as a <br />Standard, Not a Feature.
              </h2>
              <p className="text-lg text-light-slate mb-8 leading-relaxed font-light">
                At Aegis Swiss, we understand that wealth management is as much about protecting a legacy as it is about growing assets. Our approach is built on three pillars: absolute security, meticulous precision, and uncompromising discretion.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-alpine-snow text-deep-indigo rounded-sm">
                    <ShieldCheck size={20} />
                  </div>
                  <h5 className="text-sm uppercase tracking-widest font-medium">Bespoke Strategies</h5>
                  <p className="text-sm text-silver">Tailored to the unique risk profile and vision of each client.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-alpine-snow text-deep-indigo rounded-sm">
                    <Globe size={20} />
                  </div>
                  <h5 className="text-sm uppercase tracking-widest font-medium">Global Access</h5>
                  <p className="text-sm text-silver">Direct entry to exclusive alternative markets and private equity.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] "
            >
              <div className="absolute inset-0 border border-silver/20 translate-x-6 translate-y-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1000" 
                alt="Zurich City Architecture" 
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute bottom-10 -left-10 bg-deep-indigo p-8 text-white z-20 max-w-xs shadow-2xl">
                <Award className="mb-4 w-8 h-8 opacity-50" />
                <p className="text-sm tracking-wide leading-relaxed font-light italic">
                  "Excellence is not an act, but a habit. We have cultivated this habit across generations of Swiss banking tradition."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Teaser */}
      <section className="py-32 bg-alpine-snow border-t border-silver/10">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl mb-4">Exceptional Portfolios</h2>
            <p className="text-silver tracking-widest uppercase text-[10px]">Precision Asset Allocation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Asset Management', desc: 'Diversified portfolios with a focus on risk mitigation and long-term stability.' },
              { title: 'Estate Planning', desc: 'Secure transitions and generational wealth preservation strategies.' },
              { title: 'Alternative Investments', desc: 'Beyond the traditional: Private Equity, Real Estate, and Digital Assets.' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 border border-silver/10 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="w-12 h-12 flex items-center justify-center text-deep-indigo border border-deep-indigo/10 mb-8">
                  {i + 1}
                </div>
                <h3 className="text-xl mb-4">{service.title}</h3>
                <p className="text-sm text-light-slate opacity-70 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <Link to="/services" className="text-[10px] tracking-widest uppercase flex items-center gap-2 group">
                  Explore <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
