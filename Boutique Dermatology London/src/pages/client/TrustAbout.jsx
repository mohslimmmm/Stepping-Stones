import { Award, CheckCircle, ShieldCheck } from 'lucide-react';

export default function TrustAbout() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      
      {/* Header */}
      <div className="py-24 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">
          Uncompromising <span className="italic text-primary">Standards</span>
        </h1>
        <p className="text-xl text-foreground/80 font-light leading-relaxed">
          At Harley Street Skin Bespoke, we operate at the intersection of medical integrity and aesthetic artistry. Our clinicians are globally recognized leaders in dermatologic science.
        </p>
      </div>

      {/* Profiles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className="aspect-[3/4] bg-cover bg-center relative" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594824432258-f5422896da99?auto=format&fit=crop&q=80')" }}
          >
            <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-gradient-to-tr from-background to-foreground/40" />
            <div className="absolute bottom-6 left-6 right-6 border border-foreground/20 p-6 bg-background/90 backdrop-blur-sm">
              <div className="text-primary font-serif italic text-2xl mb-1 flex justify-between items-center">
                <span>Dr. Evelyn Sinclair</span>
                <Award className="w-6 h-6 text-foreground/30" />
              </div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 font-semibold mb-3">
                Medical Director & Founder
              </div>
              <hr className="border-foreground/10 mb-3" />
              <div className="text-sm font-light text-foreground/80">
                GMC Reference: 7192834
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif mb-6">Pioneering Aesthetic Medicine</h2>
              <div className="prose prose-invert prose-p:text-foreground/80 prose-p:font-light">
                <p>
                  Dr. Sinclair trained at the prestigious St. John's Institute of Dermatology before establishing her private practice on Harley Street. She specializes in complex laser interventions and advanced facial profiling.
                </p>
                <p>
                  Recognized internationally, she frequently lectures on the application of bio-stimulatory injectables and serves on the advisory board for leading medical device manufacturers.
                </p>
              </div>
            </div>

            {/* Credentials / Badges */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-6">Credentials & Accreditation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-serif text-lg mb-1">GMC Registered</div>
                    <p className="text-sm text-foreground/60 font-light">
                      All practitioners hold full registration with the General Medical Council.
                    </p>
                  </div>
                </div>
                 <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-serif text-lg mb-1">CQC Regulated</div>
                    <p className="text-sm text-foreground/60 font-light">
                      Our clinical environment strictly adheres to Care Quality Commission standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Press Features */}
      <div className="py-24 bg-foreground/5 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-12">Featured In The Press</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Press Logos - simulated with typography for now */}
            <span className="text-4xl font-serif tracking-widest uppercase">Vogue</span>
            <span className="text-3xl font-serif tracking-widest uppercase italic">Tatler</span>
            <span className="text-2xl font-sans font-bold tracking-tighter uppercase">GQ UK</span>
            <span className="text-3xl font-serif uppercase">Bazaar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
