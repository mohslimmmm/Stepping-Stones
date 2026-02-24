import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Activity, ShieldPlus, ChevronRight } from 'lucide-react';

export default function Detail() {
  return (
    <div className="bg-background min-h-screen text-foreground relative">
       {/* Breadcrumbs */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex text-xs uppercase tracking-widest text-foreground/50 space-x-2 font-sans font-semibold">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/discovery" className="hover:text-primary transition-colors">Treatments</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground/80">Laser Resurfacing</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 flex flex-col lg:flex-row gap-16">
        
        {/* Main Content */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-[1.1]">
            Bespoke Laser <br/><span className="italic text-primary">Resurfacing</span>
          </h1>
          <p className="text-xl text-foreground/80 font-light leading-relaxed mb-12">
            A precision-engineered protocol utilizing dual-wavelength technology for profound structural remodeling, scar attenuation, and global tonal correction.
          </p>

          <div 
            className="aspect-video bg-cover bg-center mb-16 relative overflow-hidden group" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80')" }}
          >
            <div className="absolute inset-0 bg-background/40 z-10 group-hover:bg-background/10 transition-colors duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-background/80 font-serif text-2xl tracking-widest uppercase z-20 mix-blend-overlay font-bold">
              Clinical Assessment
            </div>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-serif mb-6 flex items-center">
                <ShieldPlus className="w-6 h-6 mr-3 text-primary" />
                The Protocol
              </h2>
              <div className="prose prose-invert prose-p:text-foreground/80 prose-p:font-light max-w-none">
                <p>
                  Our bespoke non-ablative and fully ablative laser interventions are tailored to the precise depth required by your skin's pathology. By inducing controlled thermal injury grids, we stimulate an aggressive endogenous healing cascade.
                </p>
                <p>
                  This triggers the expulsion of dyschromic epidermal cells and the robust synthesis of Type I and Type III collagen within the papillary dermis. The result is a profound architectural restoration.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-3 text-primary" />
                Clinical Trial Efficacy
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-foreground/5 p-6 border-l-2 border-primary">
                  <div className="text-4xl font-serif text-primary mb-2">94%</div>
                  <div className="text-sm uppercase tracking-widest text-foreground/70 font-semibold">Improvement in Texture</div>
                  <p className="text-xs text-foreground/50 mt-2 font-light">Observed in cohort after 3 sessions.</p>
                </div>
                <div className="bg-foreground/5 p-6 border-l-2 border-primary">
                  <div className="text-4xl font-serif text-primary mb-2">87%</div>
                  <div className="text-sm uppercase tracking-widest text-foreground/70 font-semibold">Reduction of Dyschromia</div>
                  <p className="text-xs text-foreground/50 mt-2 font-light">Pigmentary clearance measured by spectrophotometry.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif mb-6 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-3 text-primary" />
                Technology Specifications
              </h2>
              <ul className="space-y-4 font-light text-foreground/80">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2mr-3 flex-shrink-0 mr-3"></span>
                  <span><strong>Dual-Wavelength Modulation:</strong> Seamless switching between 1550nm for deep dermal remodeling and 1927nm for epidermal resurfacing.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2mr-3 flex-shrink-0 mr-3"></span>
                  <span><strong>Optical Tracking System:</strong> Ensures uniform energy delivery regardless of handpiece velocity, preventing thermal stacking.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2mr-3 flex-shrink-0 mr-3"></span>
                  <span><strong>Active Cooling Integration:</strong> Continuous epidermal thermoregulation maximizes patient comfort during high-energy passes.</span>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Sticky Widget Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-32 bg-foreground text-background p-8 border-t-4 border-primary shadow-2xl">
            <h3 className="font-serif text-2xl mb-2">Suitability Assessment</h3>
            <p className="text-background/70 font-light text-sm mb-8 leading-relaxed">
              Not all skin types are candidates for ablative interventions. A comprehensive VISIA® skin analysis is mandatory prior to protocol commencement.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm border-b border-background/10 pb-2">
                <span className="font-semibold uppercase tracking-widest text-background/60">Duration</span>
                <span>60 - 90 Minutes</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-background/10 pb-2">
                <span className="font-semibold uppercase tracking-widest text-background/60">Downtime</span>
                <span>3 - 7 Days</span>
              </div>
               <div className="flex justify-between items-center text-sm border-b border-background/10 pb-2">
                <span className="font-semibold uppercase tracking-widest text-background/60">Discomfort</span>
                <span>Moderate (Topical Anaesthesia)</span>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="w-full flex items-center justify-center space-x-2 bg-primary text-background px-6 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-primary-hover transition-colors"
            >
              <span>Book Assessment</span>
              <ArrowRight className="w-4 h-4 block" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
