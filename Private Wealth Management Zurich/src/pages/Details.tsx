import { motion } from 'framer-motion';
import { Shield, ArrowRight, BarChart3, PieChart, Activity, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Details = () => {
  return (
    <div className="pt-32 pb-32 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <header className="mb-12">
              <Link to="/services" className="text-silver hover:text-deep-indigo text-xs tracking-widest uppercase mb-6 inline-block">
                ← Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl mb-8">Bespoke Portfolio <br /><span className="italic">Management.</span></h1>
              <p className="text-lg text-light-slate font-light leading-relaxed">
                Our flagship discretionary mandate. We take a holistic view of your financial ecosystem, designing a strategy that balances immediate liquidity needs with long-term capital appreciation.
              </p>
            </header>

            <section className="mb-20">
              <h3 className="text-2xl mb-8 flex items-center gap-3">
                <BarChart3 className="text-deep-indigo" />
                Risk & Reward Dynamics
              </h3>
              <div className="bg-alpine-snow p-8 rounded-sm border border-silver/10 mb-8">
                {/* Simulated Chart */}
                <div className="h-64 flex items-end gap-2 px-4 relative">
                   <div className="absolute top-0 right-0 p-4 flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-silver">
                        <div className="w-2 h-2 bg-deep-indigo"></div> Strategy A
                      </div>
                      <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-silver">
                        <div className="w-2 h-2 bg-silver"></div> Benchmark
                      </div>
                   </div>
                   {[40, 60, 45, 80, 55, 90, 75, 95].map((h, i) => (
                     <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        key={i} 
                        className="flex-grow bg-deep-indigo opacity-80"
                     ></motion.div>
                   ))}
                   {[30, 50, 40, 65, 50, 75, 65, 80].map((h, i) => (
                     <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                        key={'b' + i} 
                        className="flex-grow bg-silver opacity-30 absolute w-[5%] mb-[-2px]"
                        style={{ left: `${(i * 12.5) + 3}%` }}
                     ></motion.div>
                   ))}
                </div>
                <div className="flex justify-between mt-4 px-4 text-[10px] tracking-[0.2em] uppercase text-silver font-medium">
                   <span>2019</span>
                   <span>2020</span>
                   <span>2021</span>
                   <span>2022</span>
                   <span>2023</span>
                   <span>2024 (FC)</span>
                </div>
              </div>
              <p className="text-sm text-light-slate opacity-70 italic">
                *Historical performance is not indicative of future results. Simulated projection based on Strategy A model.
              </p>
            </section>

            <section className="mb-20">
               <h3 className="text-2xl mb-8 flex items-center gap-3">
                  <Activity className="text-deep-indigo" />
                  Our Methodology
               </h3>
               <div className="space-y-12">
                  {[
                    { title: 'Quantitative Analysis', desc: 'We leverage proprietary algorithms to scan global markets for inefficiencies, focusing on multi-factor models that minimize drawdown.' },
                    { title: 'Qualitative Assessment', desc: 'Human intelligence remains paramount. Our investment committee meets weekly to overlay macroeconomic insights on our data models.' },
                    { title: 'Global Custody', desc: 'Your assets are held in top-tier Swiss custodian banks, ensuring the highest level of institutional security.' }
                  ].map((m, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="text-silver font-light text-3xl">0{i+1}</div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">{m.title}</h4>
                        <p className="text-light-slate opacity-80 leading-relaxed font-light">{m.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </section>
          </div>

          {/* Sidebar Widget (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-dark-slate p-10 text-white shadow-2xl rounded-sm">
                <Shield className="w-10 h-10 mb-8 text-silver opacity-50" />
                <h3 className="text-2xl mb-6">Begin Your Consultation</h3>
                <p className="text-sm opacity-70 mb-10 leading-relaxed">
                  Request an initial meeting with a Relationship Manager to discuss your specific requirements. All communications are confidential and PGP-encrypted.
                </p>
                
                <div className="space-y-4 mb-10">
                   {['Initial Assessment', 'Risk Profiling', 'Strategic Roadmapping'].map(item => (
                     <div key={item} className="flex items-center gap-3 text-xs tracking-widest underline decoration-silver/20 underline-offset-4">
                        <CheckCircle2 size={14} className="text-silver" />
                        {item}
                     </div>
                   ))}
                </div>

                <Link 
                  to="/contact" 
                  className="w-full py-4 bg-white text-dark-slate text-center block text-xs tracking-widest uppercase font-medium hover:bg-silver transition-colors"
                >
                  Request Meeting
                </Link>
                <p className="text-[10px] text-center mt-6 text-silver uppercase tracking-[0.2em] opacity-40">
                  Response within 4 Swiss business hours
                </p>
              </div>

              <div className="mt-8 p-10 border border-silver/20 rounded-sm">
                 <PieChart className="w-8 h-8 mb-6 text-deep-indigo" />
                 <h4 className="text-sm uppercase tracking-widest mb-4">Minimum Mandate</h4>
                 <p className="text-2xl font-light text-deep-indigo">CHF 5,000,000</p>
                 <p className="text-[10px] text-silver uppercase mt-2">Qualified Investors Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
