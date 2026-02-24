import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function SkinJournal() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      
      {/* Editorial Header */}
      <div className="py-24 border-b border-foreground/10 text-center px-4">
        <div className="flex justify-center mb-6">
          <BookOpen className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-serif mb-6">
          The Skin <span className="italic text-primary">Journal</span>
        </h1>
        <p className="max-w-xl mx-auto text-foreground/70 font-light leading-relaxed">
          Curated clinical insights, protocol deep-dives, and aesthetic intelligence from the practitioners at Harley Street Skin Bespoke.
        </p>
      </div>

      {/* Featured Article */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-foreground/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-primary font-semibold mb-6">
              <span>Feature</span>
              <span className="w-1 h-1 bg-foreground/20 rounded-full"></span>
              <span className="text-foreground/50">8 Min Read</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              London Pollution Defense: A Clinical Approach to Oxidative Stress
            </h2>
            <p className="text-foreground/80 font-light leading-relaxed mb-10 text-lg">
              Urban particulate matter initiates a devastating cascade of free radical damage, accelerating elastosis and inflammatory dyschromia. Discover our protocol for fortifying the epidermal barrier against metropolitan aggressors.
            </p>
            <Link to="#" className="inline-flex items-center space-x-2 text-primary font-serif italic tracking-wide group hover:opacity-80 transition-opacity text-lg">
              <span>Read Full Analysis</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div 
            className="order-1 lg:order-2 aspect-[4/3] bg-cover bg-center relative overflow-hidden" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533681436852-0bb152ce719b?auto=format&fit=crop&q=80')" }}
          >
            <div className="absolute inset-0 bg-foreground/10 mix-blend-overlay" />
           <div className="absolute bottom-6 right-6 text-background/80 font-sans tracking-widest text-xs uppercase rotate-90 origin-bottom-right z-10">
             Fig 1.1 — Epidermal Barrier
           </div>
          </div>
        </div>
      </article>

      {/* Grid Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          {/* Article 1 */}
          <article className="group cursor-pointer">
            <div 
              className="aspect-[3/2] bg-cover bg-center mb-8 overflow-hidden relative" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6ece?auto=format&fit=crop&q=80')" }}
            >
              <div className="absolute inset-0 bg-background/20 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
            </div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              Seasonal Protocol
            </div>
            <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">
              Navigating Seasonal Skincare: Transitioning to Autumn
            </h3>
            <p className="text-foreground/70 font-light leading-relaxed mb-6">
              As humidity drops, trans-epidermal water loss increases exponentially. Adjusting your active ingredients is critical to preventing compensatory sebum production.
            </p>
             <span className="flex items-center space-x-2 text-primary text-sm uppercase tracking-wider font-medium">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
          </article>

          {/* Article 2 */}
           <article className="group cursor-pointer">
            <div 
              className="aspect-[3/2] bg-cover bg-center mb-8 overflow-hidden relative" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80')" }}
            >
              <div className="absolute inset-0 bg-background/20 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
            </div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              Ingredient Spotlight
            </div>
            <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">
              The Truth About Retinoids: Prescription vs. Cosmetic
            </h3>
            <p className="text-foreground/70 font-light leading-relaxed mb-6">
              Demystifying the vitamin A cascade. Why the molecular structure dictates efficacy, and when to graduate to clinical-strength formulations.
            </p>
            <span className="flex items-center space-x-2 text-primary text-sm uppercase tracking-wider font-medium">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
          </article>

        </div>
      </div>
    </div>
  );
}
