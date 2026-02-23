import React from 'react';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const Lifestyle = () => {
  return (
    <div className="pt-32 bg-background pb-32">
      
      {/* Editorial Header */}
      <motion.div 
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="max-w-4xl mx-auto px-4 text-center mt-16 mb-32"
      >
        <motion.p variants={fadeUp} className="font-body text-accentBlue uppercase tracking-[0.2em] text-[10px] font-bold mb-8">Editorial Guide</motion.p>
        <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary mb-10 leading-[1.1] tracking-tight">The Hamptons Summer Scene</motion.h1>
        <motion.p variants={fadeUp} className="font-body text-xl md:text-2xl text-primary/70 leading-relaxed font-light max-w-3xl mx-auto">
          An insider's perspective on the world's most exclusive summer enclave. Where timeless traditions meet modern luxury.
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Article 1 - Equestrian */}
        <motion.article 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-40"
        >
          <div className="order-2 lg:order-1 pr-0 lg:pr-12">
            <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl text-primary mb-8 tracking-wide">Equestrian Excellence in Bridgehampton</motion.h2>
            <motion.p variants={fadeUp} className="font-body text-lg text-primary/80 leading-relaxed mb-6 font-light">
              Home to the prestigious Hampton Classic, Bridgehampton remains the undisputed equestrian capital of the East Coast. The properties here are unparalleled, featuring state-of-the-art barns, Olympic-sized riding rings, and rolling pastures that stretch to the horizon.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-lg text-primary/80 leading-relaxed mb-10 font-light">
              Owning an equestrian estate here is about preserving a heritage. Let our specialized agents guide you through the intricacies of zoning, facility management, and finding the perfect acreage for your stables.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button variant="secondary">View Equestrian Estates</Button>
            </motion.div>
          </div>
          <motion.div variants={fadeUp} className="order-1 lg:order-2 overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 transition-opacity duration-500 hover:opacity-0 pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="Equestrian" className="w-full h-[500px] lg:h-[700px] object-cover hover:scale-105 transition-transform duration-1000" />
          </motion.div>
        </motion.article>

        {/* Article 2 - Surf & Sand */}
        <motion.article 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-40"
        >
          <motion.div variants={fadeUp} className="overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 transition-opacity duration-500 hover:opacity-0 pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="Montauk Beach" className="w-full h-[500px] lg:h-[700px] object-cover hover:scale-105 transition-transform duration-1000" />
          </motion.div>
          <div className="pl-0 lg:pl-12">
            <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl text-primary mb-8 tracking-wide">The Raw Edge of Montauk</motion.h2>
            <motion.p variants={fadeUp} className="font-body text-lg text-primary/80 leading-relaxed mb-6 font-light">
              'The End' has transformed from a sleepy fishing village to the most vibrant cultural hub on the East End, all while retaining its rugged maritime soul. Montauk offers a different paradigm of luxury—one defined by world-class surfing out your backdoor and minimalist cliffside architecture.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-lg text-primary/80 leading-relaxed mb-10 font-light">
              From the historic properties in the Moorlands to ultra-modern compounds overlooking Ditch Plains, Montauk is for those who seek the ocean's raw power combined with refined living.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button variant="secondary">Explore Montauk Real Estate</Button>
            </motion.div>
          </div>
        </motion.article>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-primary text-background py-32 mt-20 text-center px-4"
      >
        <motion.p variants={fadeUp} className="font-body text-accentGreen uppercase tracking-[0.2em] text-[10px] font-bold mb-6">Take the Next Step</motion.p>
        <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 tracking-wide">Ready to find your place?</motion.h2>
        <motion.p variants={fadeUp} className="font-body text-lg md:text-xl text-background/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Our senior partners have decades of experience matching discerning clients with properties that complement their lifestyle perfectly.
        </motion.p>
        <motion.div variants={fadeUp}>
          <Button className="bg-background text-primary hover:bg-white border-background hover:border-white">Schedule a Consultation</Button>
        </motion.div>
      </motion.div>
    </div>
  );
};
