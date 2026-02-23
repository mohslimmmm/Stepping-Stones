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

export const About = () => {
  return (
    <div className="pt-32 min-h-screen bg-background pb-32">
      
      {/* Hero */}
      <motion.div 
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="max-w-5xl mx-auto px-4 text-center mt-12 mb-24"
      >
        <motion.p variants={fadeUp} className="font-body text-accentBlue uppercase tracking-[0.2em] text-[10px] font-bold mb-8">Our Heritage</motion.p>
        <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary mb-10 leading-[1.1] tracking-tight">A Legacy of Discretion</motion.h1>
        <motion.p variants={fadeUp} className="font-body text-xl md:text-2xl text-primary/70 leading-relaxed max-w-3xl mx-auto font-light">
          For over 25 years, East End Exclusive Estates has been the trusted advisor to the area's most discerning real estate clients.
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* History Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[600px] lg:h-[700px] w-full mb-32 overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none"></div>
          <img 
            src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=2000" 
            alt="Historic Office" 
            className="w-full h-full object-cover grayscale-[0.2]"
          />
        </motion.div>

        {/* Narrative */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-start"
        >
          <div className="pr-0 md:pr-12">
            <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl text-primary mb-10 tracking-wide">Founded on Trust</motion.h2>
            <motion.p variants={fadeUp} className="font-body text-lg text-primary/80 leading-relaxed mb-8 font-light">
              East End Exclusive Estates was established in 1998 by Alexander Sterling with a simple premise: high-net-worth individuals require a different caliber of real estate service. A service defined by absolute discretion, unparalleled market intelligence, and fierce advocacy.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-lg text-primary/80 leading-relaxed font-light">
              Today, our boutique firm handles over $1.2 Billion in annual localized volume, representing some of the most significant architectural properties east of the Shinnecock Canal.
            </motion.p>
          </div>
          
          <motion.div variants={fadeUp} className="border border-primary/5 bg-white p-12 lg:p-16 shadow-2xl relative">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/20"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/20"></div>
            
            <h3 className="font-heading text-3xl text-primary mb-12 text-center border-b border-primary/10 pb-6">In The Press</h3>
            <div className="space-y-12">
              <blockquote className="border-l-2 border-accentBlue pl-6">
                <p className="font-heading text-2xl text-primary italic mb-4 leading-snug">"The undisputed gatekeepers of the Hamptons' most exclusive listings."</p>
                <footer className="font-body text-[10px] text-primary/50 uppercase tracking-[0.2em] font-bold">— The Wall Street Journal</footer>
              </blockquote>
              <blockquote className="border-l-2 border-accentBlue pl-6">
                <p className="font-heading text-2xl text-primary italic mb-4 leading-snug">"When an eight-figure compound trades off-market, Sterling's firm is usually involved."</p>
                <footer className="font-body text-[10px] text-primary/50 uppercase tracking-[0.2em] font-bold">— The New York Times</footer>
              </blockquote>
              <blockquote className="border-l-2 border-accentBlue pl-6">
                <p className="font-heading text-2xl text-primary italic mb-4 leading-snug">"A masterclass in discreet, ultra-luxury brokerage."</p>
                <footer className="font-body text-[10px] text-primary/50 uppercase tracking-[0.2em] font-bold">— Architectural Digest</footer>
              </blockquote>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};
