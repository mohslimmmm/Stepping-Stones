import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Share2, Star, ChevronRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const ProjectDetail = () => {
  const { id } = useParams();
  const [sliderPos, setSliderPos] = useState(50);

  // Mock data for the specific project
  const project = {
    title: 'Amagansett Retreat',
    category: 'Oceanfront Estates',
    location: 'Amagansett, NY',
    year: '2023',
    description: 'A complete overhaul of a 1970s coastal estate, transformed into a light-filled sanctuary for a growing family. We prioritized natural materials, expansive views, and a seamless connection between indoor and outdoor spaces.',
    heroImage: '/assets/oceanfront_estate_1771809815546.png',
    beforeImage: '/assets/hamptons_living_room_hero_1771809798288.png', // Using hero as 'after' for now
    afterImage: '/assets/oceanfront_estate_1771809815546.png',
    sourcing: [
      { item: 'Living Room Sofa', brand: 'Custom by Salt & Light', detail: 'Belgian Linen in Oyster' },
      { item: 'Pendant Lighting', brand: 'Apparatus Studio', detail: 'Brass & Etched Glass' },
      { item: 'Coffee Table', brand: 'Local Artisan', detail: 'Reclaimed Driftwood' },
    ]
  };

  const handleSliderChange = (e) => {
    setSliderPos(e.target.value);
  };

  return (
    <div className="bg-linen min-h-screen pb-32">
      {/* Hero Header */}
      <section className="relative h-[70vh] overflow-hidden">
        <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-20 left-0 w-full">
          <div className="container mx-auto px-6">
            <Link to="/portfolio" className="flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors uppercase text-[10px] tracking-widest font-bold">
              <ArrowLeft size={16} />
              <span>Back to Portfolio</span>
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif text-white mb-4"
            >
              {project.title}
            </motion.h1>
            <p className="text-white/80 uppercase tracking-[0.3em] text-sm font-medium">{project.location}</p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2">
              <p className="text-sand uppercase tracking-widest text-xs font-bold mb-6">The Story</p>
              <h2 className="text-4xl font-serif text-deep-grey mb-8">Modern Coastal Living</h2>
              <p className="text-deep-grey/70 text-xl leading-relaxed font-light mb-12">
                {project.description}
              </p>
              
              {/* Before/After Slider */}
              <div className="mb-20">
                <h3 className="text-xs uppercase tracking-widest font-bold mb-8 text-deep-grey/40">Transformation</h3>
                <div className="relative aspect-[16/9] rounded-8 overflow-hidden group select-none">
                  {/* Before Image */}
                  <img src={project.beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
                  
                  {/* After Image (clipped) */}
                  <div 
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                  >
                    <img src={project.afterImage} alt="After" className="w-full h-full object-cover" />
                  </div>

                  {/* Slider Control */}
                  <div 
                    className="absolute inset-y-0 z-10 w-1 bg-white cursor-ew-resize"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-deep-grey">
                      <ArrowLeft size={12} className="mr-1" />
                      <ChevronRight size={12} />
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={sliderPos}
                    onChange={handleSliderChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/40 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm">Before</div>
                  <div className="absolute bottom-4 right-4 bg-white/40 text-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm">After</div>
                </div>
                <p className="mt-4 text-xs text-deep-grey/40 italic text-center">Slide to see the transformation from 1970s dated to 2023 contemporary.</p>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-1">
              <div className="bg-white p-10 rounded-8 sticky top-32 shadow-sm border border-linen">
                <h3 className="text-sm uppercase tracking-widest font-bold mb-8 pb-4 border-b border-linen">Sourced Fragments</h3>
                <div className="space-y-8">
                  {project.sourcing.map((s, i) => (
                    <div key={i}>
                      <p className="text-xs uppercase tracking-wider text-sand font-bold mb-1">{s.item}</p>
                      <p className="font-serif text-lg text-deep-grey">{s.brand}</p>
                      <p className="text-xs text-deep-grey/60 mt-1">{s.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-linen">
                  <button className="w-full btn-primary mb-4 flex items-center justify-center space-x-2">
                    <Star size={18} />
                    <span>Inquire About Design</span>
                  </button>
                  <button className="w-full border border-sand/30 text-sand p-4 rounded-8 text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 hover:bg-linen transition-colors">
                    <Share2 size={16} />
                    <span>Share Project</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Inquire Widget (for mobile) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <button className="w-full btn-primary shadow-xl flex items-center justify-center space-x-2 py-4">
          <Star size={18} />
          <span>Inquire About Design</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
