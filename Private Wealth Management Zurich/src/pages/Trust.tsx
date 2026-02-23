import { motion } from 'framer-motion';
import { Shield, Award, Landmark, History, CheckCircle2 } from 'lucide-react';

const Trust = () => {
  return (
    <div className="pt-32 pb-32">
      <div className="container">
        {/* Regulation Badges */}
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-silver mb-6">Established 1924</h4>
            <h1 className="text-4xl md:text-6xl mb-8 leading-tight">A Legacy of <br /><span className="italic">Unyielding Security.</span></h1>
            <p className="text-lg text-light-slate opacity-70 font-light">
              Founded in Zurich a century ago, Aegis Swiss has navigated global shifts with a singular focus: the preservation of our clients' sovereign wealth.
            </p>
          </div>
          <div className="flex gap-8 mb-4">
             <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 border-2 border-deep-indigo/10 flex items-center justify-center rounded-full">
                   <Shield className="text-deep-indigo" size={32} />
                </div>
                <span className="text-[8px] tracking-[0.2em] uppercase text-silver font-bold">FINMA Regulated</span>
             </div>
             <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 border-2 border-deep-indigo/10 flex items-center justify-center rounded-full">
                   <Landmark className="text-deep-indigo" size={32} />
                </div>
                <span className="text-[8px] tracking-[0.2em] uppercase text-silver font-bold">Swiss Banking Assoc.</span>
             </div>
          </div>
        </header>

        {/* History Timeline Teaser */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             { year: '1924', event: 'Founding of the Zurich office in Bahnhofstrasse.', icon: <History /> },
             { year: '1970', event: 'Expansion into Global Alternative Markets.', icon: <Award /> },
             { year: '2015', event: 'Full integration of Next-Gen digital custody protocols.', icon: <Landmark /> }
           ].map((item, idx) => (
             <div key={idx} className="p-10 bg-white border border-silver/10">
                <div className="text-deep-indigo mb-6">{item.icon}</div>
                <h3 className="text-2xl mb-4 italic font-light">{item.year}</h3>
                <p className="text-sm text-silver leading-relaxed">{item.event}</p>
             </div>
           ))}
        </section>

        {/* Board of Directors */}
        <section>
          <div className="mb-16">
             <h2 className="text-3xl mb-4">Board of Directors</h2>
             <div className="w-12 h-1 bg-deep-indigo"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: 'Dr. Beatrix Hoffmann', role: 'Chairperson', bio: 'Former FINMA Director with 30 years in risk management.' },
              { name: 'Jean-Pierre Dubois', role: 'Executive Board', bio: 'Expert in Global Private Equity and Mergers & Acquisitions.' },
              { name: 'Sarah Steiner', role: 'Chief Investment Officer', bio: 'Lead strategist for our quantitative asset models.' },
              { name: 'Dr. Markus Vogel', role: 'Compliance & Security', bio: 'Specialist in international tax law and custody security.' }
            ].map((person, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] bg-alpine-snow mb-6 overflow-hidden relative">
                   <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-deep-indigo/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-[10px] text-white opacity-90 leading-relaxed uppercase tracking-wider">{person.bio}</p>
                   </div>
                   <img 
                    src={`https://images.unsplash.com/photo-${1500 + idx}?auto=format&fit=crop&q=80&w=600`} 
                    alt={person.name}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity"
                   />
                </div>
                <h4 className="text-lg font-medium">{person.name}</h4>
                <p className="text-[10px] tracking-widest uppercase text-silver mt-1">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Trust;
