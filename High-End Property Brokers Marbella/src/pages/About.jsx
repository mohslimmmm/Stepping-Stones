import { Award, Globe, Shield, Users } from 'lucide-react';

const team = [
  { name: 'Alejandro Vargas', role: 'Managing Director & Founder', languages: 'ES, EN, FR', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Elena Rostova', role: 'Head of International Sales', languages: 'EN, RU, ES', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
  { name: 'Marcus Sterling', role: 'Golden Mile Specialist', languages: 'EN, DE', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
  { name: 'Isabella Silva', role: 'Client Relations Manager', languages: 'ES, EN, PT', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
];

const About = () => {
  return (
    <div className="bg-warm-white fade-in">
      
      {/* Hero */}
      <div className="bg-dark-slate py-24 text-center">
        <div className="container max-w-4xl text-warm-white">
          <h1 className="text-5xl md:text-6xl font-header mb-6 tracking-wide drop-shadow-md">Trust & Expertise</h1>
          <p className="text-lg md:text-xl font-body opacity-90 leading-relaxed">
            Navigating the upper echelons of the Marbella real estate market requires absolute absolute discretion, unwavering integrity, and unmatched local knowledge.
          </p>
        </div>
      </div>

      <div className="container py-24">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Award className="text-gold" size={48} />
              <div className="border-l-2 border-gold pl-4 font-header text-3xl text-dark-slate">15 Years in<br/>Marbella</div>
            </div>
            <h2 className="text-3xl font-header text-dark-slate mb-6">A Legacy of Excellence on the Golden Mile</h2>
            <p className="font-body text-dark-slate opacity-80 leading-relaxed mb-6 text-lg">
              Founded in 2011, Sol y Mar Elite Brokers was established with a singular vision: to elevate the standard of luxury real estate brokerage on the Costa del Sol. We are not a volume agency; we are a boutique consultancy curating only the most exceptional properties.
            </p>
            <p className="font-body text-dark-slate opacity-80 leading-relaxed text-lg">
              Our deeply rooted relationships within the Marbella community provide our clients with exclusive access to off-market opportunities and a network of trusted legal, financial, and architectural professionals.
            </p>
          </div>
          <div className="relative rounded overflow-hidden shadow-2xl h-[500px]">
            <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800" alt="Marbella Coastal View" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-dark-slate/20" />
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-10 rounded shadow-soft text-center group hover:bg-dark-slate transition-colors hover-lift">
            <Globe className="text-terracotta group-hover:text-gold mx-auto mb-6 transition-colors" size={48} />
            <h3 className="font-header text-2xl text-dark-slate group-hover:text-white mb-4 transition-colors">Global Reach</h3>
            <p className="font-body text-dark-slate opacity-80 group-hover:text-white group-hover:opacity-70 transition-colors">Connecting sellers with an elite international buyer database curated over a decade.</p>
          </div>
          <div className="bg-white p-10 rounded shadow-soft text-center group hover:bg-dark-slate transition-colors hover-lift">
            <Shield className="text-terracotta group-hover:text-gold mx-auto mb-6 transition-colors" size={48} />
            <h3 className="font-header text-2xl text-dark-slate group-hover:text-white mb-4 transition-colors">Absolute Discretion</h3>
            <p className="font-body text-dark-slate opacity-80 group-hover:text-white group-hover:opacity-70 transition-colors">Protecting the privacy and confidentiality of our high-net-worth clientele at all times.</p>
          </div>
          <div className="bg-white p-10 rounded shadow-soft text-center group hover:bg-dark-slate transition-colors hover-lift">
            <Users className="text-terracotta group-hover:text-gold mx-auto mb-6 transition-colors" size={48} />
            <h3 className="font-header text-2xl text-dark-slate group-hover:text-white mb-4 transition-colors">Boutique Service</h3>
            <p className="font-body text-dark-slate opacity-80 group-hover:text-white group-hover:opacity-70 transition-colors">Providing highly personalized, end-to-end advisory for seamless transactions.</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-body tracking-widest text-terracotta uppercase mb-4 font-bold">The Advisors</h2>
          <h3 className="text-4xl font-header text-dark-slate">Meet the Elite Brokers Team</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded shadow-soft overflow-hidden group hover-lift">
              <div className="relative h-72 overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-dark-slate/90 to-transparent p-4">
                  <span className="text-xs uppercase tracking-widest font-bold text-warm-white opacity-90">{member.languages}</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-header text-xl text-dark-slate mb-1">{member.name}</h4>
                <p className="font-body text-sm font-bold text-terracotta uppercase tracking-wide">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
