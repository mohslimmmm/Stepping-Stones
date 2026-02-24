import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Microscope, Activity, ShieldCheck } from 'lucide-react';
import clsx from 'clsx';

const categories = [
  { id: 'medical', name: 'Medical Dermatology', icon: Microscope },
  { id: 'cosmetic', name: 'Cosmetic Dermatology', icon: Sparkles },
  { id: 'acne', name: 'Acne Clinic', icon: Activity },
  { id: 'cancer', name: 'Skin Cancer Screening', icon: ShieldCheck },
];

const treatments = {
  medical: [
    { title: 'Rosacea Management', desc: 'Comprehensive vascular mapping and multi-modality targeting of erythema.' },
    { title: 'Eczema & Psoriasis', desc: 'Biologic therapies and targeted phototherapy for chronic inflammatory modulation.' },
    { title: 'Hyperhidrosis', desc: 'Neuromodulator interventions for excessive sweating disorders.' },
  ],
  cosmetic: [
    { title: 'Bespoke Laser Resurfacing', desc: 'Dual-wavelength technology for profound structural remodeling.', isFeatured: true, href: '/treatment/laser-resurfacing' },
    { title: 'Cellular Injectables', desc: 'Advanced bio-stimulatory injectables to restore architecture.' },
    { title: 'Dermal Volumization', desc: 'Precision placement of hyaluronic acid for subtle, structural support.' },
    { title: 'Collagen Induction', desc: 'Medical micro-needling coupled with autologous growth factors.' },
  ],
  acne: [
    { title: 'Clinical Acne Resolution', desc: 'Systematic dismantling of acneogenic processes using medical interventions.' },
    { title: 'Scar Revision', desc: 'Subcision, TCA CROSS, and ablative fractional lasers for textural restoration.' },
  ],
  cancer: [
    { title: 'Full Body Mapping', desc: 'High-resolution sequential dermoscopy for early melanoma detection.' },
    { title: 'Mole Excision', desc: 'Surgical removal of atypical naevi with meticulous reconstructive closure.' },
  ],
};

export default function Discovery() {
  const [activeTab, setActiveTab] = useState('cosmetic');

  return (
    <div className="bg-background text-foreground min-h-screen pb-24">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
          Discovery & <span className="italic text-primary">Intervention</span>
        </h1>
        <p className="max-w-2xl mx-auto text-foreground/70 font-light leading-relaxed">
          Navigate our comprehensive suite of advanced clinical protocols. Each pathway is tailored to address specific dermatological concerns with unparalleled precision.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={clsx(
                  'flex items-center space-x-2 px-6 py-3 border transition-colors duration-300 font-sans tracking-wide text-sm',
                  isActive 
                    ? 'border-primary bg-primary/10 text-primary' 
                    : 'border-foreground/20 text-foreground/70 hover:border-foreground/50 hover:text-foreground'
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments[activeTab].map((item, idx) => (
            <Link 
              to={item.href || '/contact'} 
              key={idx}
              className="group bg-foreground/5 p-8 border border-transparent hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-1">
                {item.isFeatured && (
                  <div className="mb-4 inline-block bg-primary text-background px-3 py-1 text-[10px] uppercase tracking-widest font-semibold flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-background rounded-full"></span>
                    <span>Signature Protocol</span>
                  </div>
                )}
                <h4 className="text-2xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-foreground/70 font-light text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-primary font-serif italic tracking-wide mt-auto group-hover:pl-2 transition-all">
                <span>{item.href ? 'Explore Protocol' : 'Enquire Now'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
