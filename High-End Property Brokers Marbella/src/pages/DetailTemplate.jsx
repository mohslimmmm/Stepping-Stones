import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Bath, Expand, Grid, PlayCircle, FileText, Check } from 'lucide-react';

const DetailTemplate = () => {
  const { id } = useParams();
  
  // Simulated fetched data
  const propertyName = id ? id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Villa Aloha';

  return (
    <div className="bg-warm-white fade-in">
      
      {/* Hero Image Gallery */}
      <div className="h-[60vh] min-h-[500px] relative grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
        <Link to="/discovery" className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white bg-dark-slate/50 hover:bg-dark-slate px-4 py-2 rounded-full backdrop-blur-sm transition-all text-sm uppercase tracking-widest font-bold">
          <ArrowLeft size={16} /> Back to Collection
        </Link>
        <div className="md:col-span-2 overflow-hidden rounded relative group">
          <img 
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=2000" 
            alt="Main View"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-dark-slate/10" />
        </div>
        <div className="hidden md:grid grid-rows-2 gap-2">
          <div className="overflow-hidden rounded relative group">
            <img 
              src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80&w=800" 
              alt="Interior View"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded relative group">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
              alt="Pool View"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-dark-slate/50 flex flex-col justify-center items-center text-white p-4 cursor-pointer hover:bg-terracotta/80 transition-colors">
              <Grid size={32} className="mb-2" />
              <span className="font-bold tracking-widest uppercase text-sm">View All Media</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
        
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="bg-terracotta text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded shadow-sm">Exclusive Mandate</span>
            <span className="flex items-center gap-2 text-dark-slate opacity-70 font-bold"><MapPin size={16} /> Nueva Andalucía, Marbella</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-header text-dark-slate mb-6">{propertyName}</h1>
          <div className="text-3xl font-body font-bold text-dark-slate mb-8 border-b border-dark-slate/10 pb-8">€4,950,000</div>
          
          <div className="flex flex-wrap gap-8 py-6 mb-8 text-dark-slate opacity-80 border-b border-dark-slate/10 pt-4 pb-8">
            <div className="flex items-center gap-3"><Bed className="text-terracotta" size={24} /> <span className="font-bold text-lg">5 Bedrooms</span></div>
            <div className="flex items-center gap-3"><Bath className="text-terracotta" size={24} /> <span className="font-bold text-lg">5 Bathrooms</span></div>
            <div className="flex items-center gap-3"><Expand className="text-terracotta" size={24} /> <span className="font-bold text-lg">680 m² Built</span></div>
            <div className="flex items-center gap-3"><Expand className="text-terracotta" size={24} /> <span className="font-bold text-lg">1,400 m² Plot</span></div>
          </div>

          <h2 className="text-2xl font-header text-dark-slate mb-4">A Masterpiece of Modern Mediterranean Living</h2>
          <p className="font-body text-dark-slate opacity-80 leading-relaxed mb-6 text-lg">
            Situated in the heart of Nueva Andalucía's Golf Valley, {propertyName} represents the pinnacle of contemporary luxury design heavily influenced by classic Andalusian aesthetics. This south-facing property enjoys sunlight throughout the entire day and offers sweeping panoramic views across Los Naranjos Golf Course down to the Mediterranean Sea.
          </p>
          <p className="font-body text-dark-slate opacity-80 leading-relaxed mb-12 text-lg">
            The interior design emphasizes open-plan fluid living, seamlessly connecting the expansive salon, bespoke chef's kitchen, and exterior terraces. A resort-style infinity pool, complete with a sunken fire pit and outdoor kitchen, provides an unparalleled setting for entertaining. Details such as imported Italian stone, custom oak carpentry, and fully integrated smart home technology ensure {propertyName} meets the highest standards of international luxury.
          </p>

          {/* Media Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <button className="flex items-center justify-between p-6 bg-white border border-dark-slate/10 rounded group hover:bg-terracotta hover:border-terracotta hover:text-white transition-all shadow-soft">
              <div className="flex items-center gap-4">
                <PlayCircle size={32} className="text-terracotta group-hover:text-white transition-colors" />
                <div className="text-left">
                  <span className="block font-bold mb-1">Interactive Virtual Tour</span>
                  <span className="text-sm opacity-70 group-hover:text-white">Immersive 3D Walkthrough</span>
                </div>
              </div>
            </button>
            <button className="flex items-center justify-between p-6 bg-white border border-dark-slate/10 rounded group hover:bg-terracotta hover:border-terracotta hover:text-white transition-all shadow-soft">
              <div className="flex items-center gap-4">
                <FileText size={32} className="text-terracotta group-hover:text-white transition-colors" />
                <div className="text-left">
                  <span className="block font-bold mb-1">Architectural Plans</span>
                  <span className="text-sm opacity-70 group-hover:text-white">Download Floor Plans (PDF)</span>
                </div>
              </div>
            </button>
          </div>

          {/* Amenities Features */}
          <h2 className="text-2xl font-header text-dark-slate mb-6">Property Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8 pb-12 border-b border-dark-slate/10">
            {['Infinity Pool', 'Home Cinema', 'Wine Cellar', 'Gaggenau Appliances', 'Underfloor Heating', 'Domotic System', 'Gym & Spa Area', 'South Facing'].map(feature => (
              <div key={feature} className="flex items-center gap-3">
                <Check className="text-terracotta" size={20} />
                <span className="font-body opacity-80 text-dark-slate">{feature}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Sticky Widget / Sidebar */}
        <div className="relative">
          <div className="sticky top-28 bg-white p-8 rounded border border-dark-slate/10 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold opacity-10 rounded-full transform translate-x-12 -translate-y-12"></div>
            <h3 className="font-header text-3xl mb-2 text-dark-slate relative z-10">Inquire About This Property</h3>
            <p className="font-body text-dark-slate opacity-70 mb-8 relative z-10">Our luxury property advisors are ready to arrange a private viewing of {propertyName}.</p>
            
            <form className="space-y-4 relative z-10">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 focus:outline-none focus:border-terracotta font-body" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 focus:outline-none focus:border-terracotta font-body" />
              <input type="tel" placeholder="Phone / WhatsApp" className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 focus:outline-none focus:border-terracotta font-body" />
              <textarea rows="4" placeholder="I am interested in arranging a viewing..." className="w-full px-4 py-3 bg-warm-white border border-dark-slate/20 focus:outline-none focus:border-terracotta font-body resize-none"></textarea>
              <button className="btn-primary w-full shadow-lg">Submit Inquiry</button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-dark-slate/10 flex items-center justify-between text-dark-slate opacity-70 text-sm">
              <span>Ref: V-ALOHA-01</span>
              <a href="#" className="hover:text-terracotta transition-colors font-bold">Share Property</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailTemplate;
