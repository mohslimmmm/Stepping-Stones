import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, FlaskConical, CalendarClock } from 'lucide-react';
import FloatingWidget from '../components/FloatingWidget';

const DetailTemplate = () => {
  const { id } = useParams();
  
  // Simulated fetched data
  const treatmentName = id ? id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Bespoke Laser Resurfacing';

  return (
    <div className="relative fade-in">
      <FloatingWidget />
      
      {/* Hero */}
      <div className="h-[60vh] relative flex items-end pb-16">
        <img 
          src="https://images.unsplash.com/photo-1616683838428-ec2f207ed457?auto=format&fit=crop&q=80&w=2000" 
          alt="Treatment Hero"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-slate-dark/50 to-transparent" />
        <div className="container relative z-10 text-ivory text-center">
          <Link to="/discovery" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-blush transition-colors mb-6 opacity-80">
            <ArrowLeft size={14} /> Back to Discovery
          </Link>
          <h1 className="text-5xl md:text-6xl font-header tracking-wide max-w-4xl mx-auto">{treatmentName}</h1>
        </div>
      </div>

      <div className="container py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-header text-slate-dark mb-6">Scientific Deep-Dive</h2>
          <p className="text-slate opacity-80 font-body leading-relaxed mb-8">
            This advanced protocol utilizes fractional photothermolysis to induce microscopic zones of thermal injury, stimulating the body's natural wound-healing cascade. The result is accelerated collagen synthesis and epidermal remodeling without the downtime associated with fully ablative procedures.
          </p>
          
          <div className="bg-blush/10 p-8 border-l-4 border-blush mb-12">
            <h3 className="text-sm uppercase tracking-widest text-slate-dark font-bold mb-4 flex items-center gap-2">
              <FlaskConical size={18} className="text-blush" /> Technology Specs
            </h3>
            <ul className="space-y-3 font-body text-sm opacity-90 text-slate">
              <li><strong>Wavelength:</strong> 1550nm Erbium-Glass</li>
              <li><strong>Pulse Energy:</strong> Modulated (4mJ - 70mJ)</li>
              <li><strong>Cooling System:</strong> Contact Sapphire Chilling</li>
            </ul>
          </div>

          <h2 className="text-3xl font-header text-slate-dark mb-6">Clinical Trial Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="border border-slate-grey/20 p-6 text-center">
              <div className="text-4xl font-header text-slate-dark mb-2">92%</div>
              <div className="text-sm font-body uppercase tracking-wider text-slate opacity-70">Improvement in Texture</div>
            </div>
            <div className="border border-slate-grey/20 p-6 text-center">
              <div className="text-4xl font-header text-slate-dark mb-2">87%</div>
              <div className="text-sm font-body uppercase tracking-wider text-slate opacity-70">Reduction in Pigmentation</div>
            </div>
          </div>

          <h2 className="text-3xl font-header text-slate-dark mb-6">The Protocol</h2>
          <ul className="space-y-4">
            {['Comprehensive Biometric Analysis', 'Topical Anesthetic Application', 'Targeted Laser Delivery', 'Cooling & Restorative Mask', 'Post-Care Regimen Design'].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <CheckCircle2 className="text-blush mt-1 flex-shrink-0" size={20} />
                <span className="font-body text-slate opacity-90"><strong>Phase {i+1}:</strong> {step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sticky Widget / Sidebar */}
        <div className="relative">
          <div className="sticky top-32 bg-slate-dark text-ivory p-8">
            <h3 className="font-header text-2xl mb-6">Protocol Outline</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-3">
                <CalendarClock className="text-blush opacity-80" size={24} />
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Duration</div>
                  <div className="font-body opacity-90">60 Minutes</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CalendarClock className="text-blush opacity-80" size={24} />
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Downtime</div>
                  <div className="font-body opacity-90">2-4 Days Mild Redness</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CalendarClock className="text-blush opacity-80" size={24} />
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Results</div>
                  <div className="font-body opacity-90">Visible at 4 Weeks</div>
                </div>
              </div>
            </div>
            
            <Link to="/contact" className="btn-primary w-full bg-ivory text-slate-dark border-ivory hover:bg-slate-dark hover:text-ivory hover:border-ivory text-center">
              Book Assessment
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailTemplate;
