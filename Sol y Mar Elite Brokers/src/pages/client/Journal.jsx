import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Journal = () => {
  return (
    <div className="min-h-screen bg-alabaster pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-olive/20 pb-8">
          <div className="w-full md:w-2/3">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-serif text-espresso leading-none mb-6"
            >
              The Marbella<br />Journal
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-espresso/70 font-light max-w-xl"
            >
              Chronicles of high-end real estate, design, and Mediterranean living.
            </motion.p>
          </div>
          <div className="w-full md:w-1/3 text-right mt-8 md:mt-0 font-serif text-espresso/50 italic text-xl">
            Issue °04 — Autumn/Winter
          </div>
        </div>

        {/* Featured Article */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 relative group cursor-pointer overflow-hidden rounded-sm">
            <div className="aspect-[4/5] md:aspect-[16/9] lg:aspect-[4/5] overflow-hidden">
              <img 
                 src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&w=2000&q=80"
                 alt="Marbella Architecture"
                 className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
              />
            </div>
          </div>
          
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-olive font-semibold mb-6 block">Editorial Exclusives</span>
            <h2 className="text-5xl font-serif text-espresso mb-8 leading-tight">Relocating to the Costa del Sol</h2>
            
            <article className="prose prose-lg text-espresso/80 font-light prose-h1:font-serif prose-h2:font-serif">
              <p className="first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-6 first-letter:mt-4 first-letter:text-navy">
                As global uncertainties persist, Northern European ultra-high-net-worth individuals are increasingly making permanent moves to Southern Spain, drawn not just by the climate, but by an evolving infrastructure that supports remote executive living.
              </p>
              
              <blockquote className="border-l-2 border-olive pl-6 my-12 text-2xl font-serif text-espresso italic leading-relaxed">
                "The definition of a primary residence has fundamentally shifted. Marbella is no longer just a summer destination; it is a year-round capital of discreet wealth."
              </blockquote>
              
              <p>
                This paradigm shift has resulted in unprecedented demand for turn-key, hyper-amenitized estates. From private helipads to commercial-grade spa facilities, the requirements of today's buyer are more stringent than ever before.
              </p>
            </article>

            <button className="mt-12 flex items-center space-x-4 text-sm font-medium tracking-wide uppercase text-espresso hover:text-navy transition-colors group">
              <span>Read Full Article</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-olive/20 pt-16">
          
          <article className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden mb-6 rounded-sm">
              <img 
                 src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80"
                 alt="Branded Residences"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-olive font-semibold mb-3 block">Market Analysis</span>
            <h3 className="text-3xl font-serif text-espresso mb-4 group-hover:text-navy transition-colors">The Future of Branded Residences</h3>
            <p className="text-sm text-espresso/70 font-light leading-relaxed mb-6">
              Why luxury hospitality brands are dominating the ultra-prime real estate sector with serviced estates outperforming traditional developments.
            </p>
             <span className="text-xs uppercase tracking-widest border-b border-espresso/30 pb-1 group-hover:border-navy transition-colors">Read More</span>
          </article>
          
          <article className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden mb-6 rounded-sm">
              <img 
                 src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
                 alt="Interior Design Trends"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-olive font-semibold mb-3 block">Design Index</span>
            <h3 className="text-3xl font-serif text-espresso mb-4 group-hover:text-navy transition-colors">Tactile Minimalism</h3>
            <p className="text-sm text-espresso/70 font-light leading-relaxed mb-6">
              Moving away from sterile modernism, top architectural studios are turning to travertine, raw oak, and lime wash to create spaces that feel deeply grounding.
            </p>
            <span className="text-xs uppercase tracking-widest border-b border-espresso/30 pb-1 group-hover:border-navy transition-colors">Read More</span>
          </article>

          <article className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden mb-6 rounded-sm">
              <img 
                 src="https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=800&q=80"
                 alt="La Zagaleta"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-olive font-semibold mb-3 block">Neighborhood Profile</span>
            <h3 className="text-3xl font-serif text-espresso mb-4 group-hover:text-navy transition-colors">Inside La Zagaleta</h3>
            <p className="text-sm text-espresso/70 font-light leading-relaxed mb-6">
              An exclusive look inside Europe's most secure and luxurious country club, where privacy is the ultimate currency.
            </p>
            <span className="text-xs uppercase tracking-widest border-b border-espresso/30 pb-1 group-hover:border-navy transition-colors">Read More</span>
          </article>

        </div>

      </div>
    </div>
  );
};

export default Journal;
