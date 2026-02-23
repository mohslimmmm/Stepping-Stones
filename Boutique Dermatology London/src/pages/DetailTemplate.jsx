import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, FlaskConical, CalendarClock } from 'lucide-react';
import FloatingWidget from '../components/FloatingWidget';
import { motion } from 'framer-motion';

const DetailTemplate = () => {
  const { id } = useParams();
  
  // Simulated fetched data
  const treatmentName = id ? id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Bespoke Laser Resurfacing';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <FloatingWidget />
      
      {/* Hero */}
      <div className="h-[75vh] relative flex items-end pb-24 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1616683838428-ec2f207ed457?auto=format&fit=crop&q=80&w=2000" 
          alt="Treatment Hero"
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-slate-dark/40 to-transparent" />
        <div className="container relative z-10 text-ivory">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <Link to="/discovery" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] hover:text-soft-blush-dark transition-colors mb-8 opacity-80 link-underline pb-1">
              <ArrowLeft size={14} strokeWidth={1.5} /> Return to Discovery
            </Link>
            <h1 className="text-6xl md:text-8xl font-header tracking-wide max-w-5xl leading-[1.1]">{treatmentName}</h1>
          </motion.div>
        </div>
      </div>

      <div className="container py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Main Content */}
        <div className="lg:col-span-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <h2 className="text-4xl font-header text-slate-dark mb-8">Scientific Deep-Dive</h2>
            <p className="text-slate-grey opacity-90 font-body text-lg leading-relaxed">
              This advanced protocol utilizes fractional photothermolysis to induce microscopic zones of thermal injury, stimulating the body's natural wound-healing cascade. The result is accelerated collagen synthesis and epidermal remodeling without the downtime associated with fully ablative procedures.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-ivory-dark/50 p-10 border-l border-soft-blush mb-20">
            <h3 className="text-xs uppercase tracking-[0.15em] text-slate-dark font-bold mb-6 flex items-center gap-3">
              <FlaskConical size={18} strokeWidth={1.5} className="text-soft-blush-dark" /> Technology Specifications
            </h3>
            <ul className="space-y-4 font-body text-base opacity-90 text-slate-dark">
              <li className="flex justify-between border-b border-slate-grey/10 pb-2">
                <span className="font-medium">Wavelength</span> <span className="opacity-80">1550nm Erbium-Glass</span>
              </li>
              <li className="flex justify-between border-b border-slate-grey/10 pb-2">
                <span className="font-medium">Pulse Energy</span> <span className="opacity-80">Modulated (4mJ - 70mJ)</span>
              </li>
              <li className="flex justify-between pb-2">
                <span className="font-medium">Cooling System</span> <span className="opacity-80">Contact Sapphire Chilling</span>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <h2 className="text-4xl font-header text-slate-dark mb-10">Clinical Trial Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-slate-grey/10 p-10 text-center bg-ivory">
                <div className="text-6xl font-header text-slate-dark mb-4 group-hover:text-soft-blush-dark transition-colors">92<span className="text-4xl text-soft-blush-dark">%</span></div>
                <div className="text-xs font-body uppercase tracking-[0.15em] text-slate-grey font-medium">Improvement in Texture</div>
              </div>
              <div className="border border-slate-grey/10 p-10 text-center bg-ivory">
                <div className="text-6xl font-header text-slate-dark mb-4">87<span className="text-4xl text-soft-blush-dark">%</span></div>
                <div className="text-xs font-body uppercase tracking-[0.15em] text-slate-grey font-medium">Reduction in Pigmentation</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-header text-slate-dark mb-10">The Protocol</h2>
            <ul className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-grey/20 before:to-transparent">
              {['Comprehensive Biometric Analysis', 'Topical Anesthetic Application', 'Targeted Laser Delivery', 'Cooling & Restorative Mask', 'Post-Care Regimen Design'].map((step, i) => (
                <li key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-soft-blush bg-ivory text-soft-blush shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="w-2 h-2 rounded-full bg-soft-blush-dark"></span>
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-ivory border border-slate-grey/10 p-6 shadow-sm">
                    <div className="text-xs uppercase tracking-widest text-soft-blush-dark font-bold mb-2">Phase 0{i+1}</div>
                    <div className="font-body text-slate-dark opacity-90 text-lg">{step}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Sticky Widget / Sidebar */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-40 bg-slate-dark text-ivory p-10 shadow-2xl border-t-2 border-soft-blush">
            <h3 className="font-header text-3xl mb-8 tracking-wide">Protocol Outline</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="mt-1"><CalendarClock className="text-soft-blush opacity-80" size={20} strokeWidth={1.5} /></div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-1">Duration</div>
                  <div className="font-body text-lg opacity-90">60 Minutes</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CalendarClock className="text-soft-blush opacity-80" size={20} strokeWidth={1.5} /></div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-1">Downtime</div>
                  <div className="font-body text-lg opacity-90">2-4 Days Mild Redness</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CalendarClock className="text-soft-blush opacity-80" size={20} strokeWidth={1.5} /></div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-1">Results</div>
                  <div className="font-body text-lg opacity-90">Visible at 4 Weeks</div>
                </div>
              </div>
            </div>
            
            <Link to="/contact" className="btn-primary w-full bg-ivory text-slate-dark border-ivory hover:bg-transparent hover:text-ivory hover:border-ivory text-center py-4">
              Book Assessment
            </Link>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default DetailTemplate;
