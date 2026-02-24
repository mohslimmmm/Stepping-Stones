import { Link } from 'react-router-dom';
import { ArrowRight, Star, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-10 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Abstract elegant background element */}
          <div 
            className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-cover bg-center transform translate-x-1/4 skew-x-12 opacity-30 mix-blend-multiply" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80')" }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="inline-flex items-center space-x-2 text-primary font-serif uppercase tracking-widest text-sm mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Harley Street, London</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] mb-8">
              Bespoke Dermatology for the <br />
              <span className="italic text-primary font-serif">Discerning Client</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl font-light leading-relaxed mb-10">
              Where classic British elegance converges with the frontier of modern clinical science. 
              We curate unparalleled skin health protocols uniquely tailored to your genetic signature.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/discovery" 
                className="group flex items-center space-x-3 bg-transparent border-b border-foreground pb-2 hover:border-primary transition-colors text-lg"
              >
                <span className="font-serif italic tracking-wide group-hover:text-primary transition-colors">Discover Our Treatments</span>
                <ArrowRight className="w-5 h-5 group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          {/* Floating Book Skin Assessment Card */}
          <div className="lg:col-span-4 mt-12 lg:mt-0 relative">
            <div className="bg-foreground text-background p-10 shadow-2xl relative z-20 border-t-4 border-primary transform lg:-translate-y-8 hover:-translate-y-10 transition-transform duration-500">
              <h3 className="font-serif text-2xl mb-4 tracking-wide">Consultation</h3>
              <p className="text-background/80 font-light mb-8 leading-relaxed text-sm">
                Begin your bespoke journey. Our clinicians will analyze your skin profile utilizing advanced diagnostic imaging to craft your tailored program.
              </p>
              <Link 
                to="/contact" 
                className="w-full flex items-center justify-between bg-primary text-background px-6 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-primary-hover transition-colors group"
              >
                <span>Book Skin Assessment</span>
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
            {/* Decorative offset block */}
            <div className="absolute top-4 -right-4 w-full h-full border border-foreground/20 z-10 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Renowned Treatments Section */}
      <section className="py-24 bg-foreground/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-primary font-sans mb-3">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-foreground">Renowned <span className="italic">Treatments</span></h3>
            </div>
            <Link to="/discovery" className="hidden md:flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors mt-6 md:mt-0">
              <span className="uppercase text-xs tracking-widest">View All Protocols</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Treatment Card 1 */}
            <Link to="/treatment/laser-resurfacing" className="group bg-foreground/5 p-8 border border-transparent hover:border-primary/30 transition-all duration-300">
              <div 
                className="h-48 mb-6 overflow-hidden relative bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80')" }}
              >
                <div className="absolute inset-0 bg-background/30 group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute bottom-4 left-4 bg-background text-foreground px-3 py-1 text-xs uppercase tracking-widest font-semibold flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  <span>Featured</span>
                </div>
              </div>
              <h4 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">Bespoke Laser Resurfacing</h4>
              <p className="text-foreground/70 font-light text-sm line-clamp-3 mb-6">
                A precision-engineered protocol utilizing dual-wavelength technology for profound structural remodeling and tonal correction.
              </p>
              <div className="flex items-center space-x-2 text-primary text-sm uppercase tracking-wider font-medium relative overflow-hidden">
                <span>Explore Protocol</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Treatment Card 2 */}
            <Link to="/discovery" className="group bg-foreground/5 p-8 border border-transparent hover:border-primary/30 transition-all duration-300">
              <div 
                className="h-48 mb-6 overflow-hidden relative bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612817288484-6f9160012b19?auto=format&fit=crop&q=80')" }}
              >
                 <div className="absolute inset-0 bg-background/30 group-hover:opacity-0 transition-opacity duration-700" />
              </div>
              <h4 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">Cellular Injectables</h4>
              <p className="text-foreground/70 font-light text-sm line-clamp-3 mb-6">
                Advanced bio-stimulatory injectables designed to restore architecture and stimulate endogenous collagen production.
              </p>
              <div className="flex items-center space-x-2 text-primary text-sm uppercase tracking-wider font-medium">
                <span>Explore Protocol</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Treatment Card 3 */}
            <Link to="/discovery" className="group bg-foreground/5 p-8 border border-transparent hover:border-primary/30 transition-all duration-300">
              <div 
                className="h-48 mb-6 overflow-hidden relative bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556228578-8d89b6acd88b?auto=format&fit=crop&q=80')" }}
              >
                 <div className="absolute inset-0 bg-background/30 group-hover:opacity-0 transition-opacity duration-700" />
              </div>
              <h4 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">Clinical Acne Resolution</h4>
              <p className="text-foreground/70 font-light text-sm line-clamp-3 mb-6">
                Medical-grade interventions combined with targeted topicals to systematically dismantle acneogenic processes.
              </p>
              <div className="flex items-center space-x-2 text-primary text-sm uppercase tracking-wider font-medium">
                <span>Explore Protocol</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
          
          <div className="mt-12 md:hidden">
            <Link to="/discovery" className="flex items-center justify-center space-x-2 text-foreground/70 hover:text-primary transition-colors border border-foreground/20 px-6 py-4">
              <span className="uppercase text-sm tracking-widest">View All Protocols</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote / Ethos Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute right-0 bottom-0 text-[20rem] font-serif text-foreground-[0.02] leading-none select-none pointer-events-none -mr-20 -mb-10">
          "
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Star className="w-8 h-8 text-primary mx-auto mb-10" />
          <p className="text-3xl md:text-5xl font-serif leading-tight text-foreground/90 italic tracking-wide">
            "We do not chase trends. We practice evidence-based medical aesthetics to deliver timeless, foundational skin health."
          </p>
          <div className="mt-12 uppercase tracking-widest text-sm font-semibold text-foreground/60">
            Dr. Evelyn Sinclair, Medical Director
          </div>
        </div>
      </section>
    </div>
  );
}
