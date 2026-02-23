import { Award, ShieldCheck, Microscope } from 'lucide-react';

const About = () => {
  return (
    <div className="fade-in">
      {/* Hero */}
      <div className="bg-slate-dark text-ivory py-32 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
           <ShieldCheck size={400} />
        </div>
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-header tracking-wide mb-6">Trust & Clinical Excellence</h1>
          <p className="font-body opacity-80 max-w-2xl mx-auto leading-relaxed text-lg">
            We are a physician-led clinical sanctuary. Every protocol is backed by rigorous scientific evidence and delivered by General Medical Council registered specialists.
          </p>
        </div>
      </div>

      <div className="container py-24">
        
        {/* Clinicians */}
        <div className="mb-24">
          <h2 className="text-sm uppercase tracking-widest text-blush font-bold mb-4 text-center">Our Specialists</h2>
          <h3 className="text-4xl font-header text-slate-dark mb-16 text-center">The Faces of Harley Street</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative h-[600px] overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                 alt="Dr. Alistair Sterling" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-2">
                <h4 className="text-3xl font-header text-slate-dark">Dr. Alistair Sterling</h4>
                <div className="bg-slate-dark text-ivory text-xs px-2 py-1 tracking-widest uppercase">GMC: 7120456</div>
              </div>
              <p className="text-sm uppercase tracking-widest text-blush font-bold mb-6">Medical Director & Consultant Dermatologist</p>
              
              <div className="space-y-6 font-body text-slate opacity-80 leading-relaxed mb-8">
                <p>Educated at Oxford University and clinically trained at St John’s Institute of Dermatology, Dr. Sterling brings over two decades of expertise in complex inflammatory skin disorders and laser medicine.</p>
                <p>His philosophy centers on "preservative dermatology"—optimizing the skin’s native function through cellular regulation rather than aggressive alteration.</p>
              </div>

              <div className="flex gap-4">
                <Award className="text-slate-dark" size={24} />
                <Microscope className="text-slate-dark" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Credentials / Press */}
        <div className="bg-ivory border border-slate-grey/20 p-12 text-center mb-24">
          <h3 className="font-header text-2xl text-slate-dark mb-12">As Featured In</h3>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
            <span className="font-header text-3xl uppercase tracking-widest">VOGUE</span>
            <span className="font-header text-3xl italic">Tatler</span>
            <span className="font-header text-3xl uppercase tracking-widest">GQ</span>
            <span className="font-header text-3xl">Harper's BAZAAR</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
