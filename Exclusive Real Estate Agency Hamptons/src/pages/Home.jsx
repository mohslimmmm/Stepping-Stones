import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EXCLUSIVE_LISTINGS = [
  {
    id: 1,
    title: 'Further Lane Estate',
    subtitle: 'East Hampton, NY • 7 Beds • 9 Baths • Oceanfront',
    price: '$45,000,000',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: 'Meadow Lane Compound',
    subtitle: 'Southampton, NY • 9 Beds • 11 Baths • Bay Access',
    price: '$38,500,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'Montauk Point Modern',
    subtitle: 'Montauk, NY • 5 Beds • 6 Baths • Cliffside',
    price: '$22,000,000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200'
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const Home = () => {
  return (
    <div className="w-full bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
            alt="Hamptons Oceanfront" 
            className="w-full h-full object-cover transform origin-center"
          />
          <div className="absolute inset-0 bg-primary/40 transition-colors duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 mt-auto pb-24">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <div className="max-w-4xl">
              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl lg:text-8xl text-background mb-6 leading-[1.1] tracking-tight">
                Find Your Summer Retreat
              </motion.h1>
              <motion.p variants={fadeUp} className="font-body text-lg md:text-xl text-background/80 mb-12 tracking-wide font-light max-w-2xl">
                The East End's most exclusive portfolio of luxury real estate.
              </motion.p>
            </div>
            
            {/* Search Bar */}
            <motion.div variants={fadeUp} className="bg-background/95 backdrop-blur shadow-2xl flex flex-col md:flex-row max-w-5xl border border-primary/10">
              <div className="flex-grow flex items-center px-6 py-5 border-b md:border-b-0 md:border-r border-primary/10 transition-colors focus-within:bg-white">
                <Search className="h-5 w-5 text-primary/40 mr-4" strokeWidth={1.5} />
                <input 
                  type="text" 
                  placeholder="Search Southampton, East Hampton, Montauk..." 
                  className="w-full font-body text-primary focus:outline-none bg-transparent placeholder-primary/40 text-sm md:text-base"
                />
              </div>
              <div className="flex flex-col md:flex-row md:w-[400px]">
                <select className="px-6 py-5 font-body text-primary/70 focus:outline-none bg-transparent cursor-pointer border-b md:border-b-0 md:border-r border-primary/10 text-sm md:text-base appearance-none hover:bg-white transition-colors">
                  <option>Any Price</option>
                  <option>$5M - $10M</option>
                  <option>$10M - $20M</option>
                  <option>$20M+</option>
                </select>
                <button className="flex-grow bg-primary text-background font-body text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase transition-all duration-500 hover:bg-accentBlue py-5 md:py-0">
                  Search Properties
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Exclusive Listings */}
      <section className="py-32 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex flex-col border-b border-primary/10 pb-8 mb-16">
              <motion.p variants={fadeUp} className="font-body text-accentBlue tracking-[0.2em] uppercase text-[10px] font-bold mb-4">Curated Collection</motion.p>
              <div className="flex justify-between items-end">
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl text-primary tracking-wide">Exclusive Listings</motion.h2>
                <motion.div variants={fadeUp}>
                  <Link to="/discovery" className="group font-body text-[10px] font-bold tracking-[0.2em] uppercase text-primary hover:text-accentBlue transition-colors hidden md:flex items-center gap-2">
                    View Entire Portfolio <span className="transform transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </motion.div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {EXCLUSIVE_LISTINGS.map((listing, index) => (
                <motion.div 
                  key={listing.id}
                  variants={fadeUp}
                  custom={index}
                >
                  <Card 
                    image={listing.image}
                    title={listing.title}
                    subtitle={listing.subtitle}
                    price={listing.price}
                    linkTo={`/property/${listing.id}`}
                  />
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-16 text-center md:hidden">
               <Link to="/discovery" className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-primary hover:text-background hover:bg-primary transition-all duration-300 block border border-primary py-4">
                View Entire Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Lifestyle Preview */}
      <section className="py-32 bg-primary text-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
           <motion.div 
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, margin: "-100px" }}
             variants={staggerContainer}
             className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
           >
             <div className="pr-0 md:pr-12">
               <motion.p variants={fadeUp} className="font-body text-accentGreen tracking-[0.2em] uppercase text-[10px] font-bold mb-6">The Experience</motion.p>
               <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-6xl mb-8 leading-[1.1] tracking-wide">The Hamptons Lifestyle</motion.h2>
               <motion.p variants={fadeUp} className="font-body text-background/70 text-base md:text-lg mb-12 leading-relaxed font-light">
                 From world-class equestrian facilities in Bridgehampton to the pristine surfing beaches of Montauk. We don't just sell homes; we curate the quintessential East End experience.
               </motion.p>
               <motion.div variants={fadeUp}>
                 <Button variant="outlineLight">
                   Explore the Guide
                 </Button>
               </motion.div>
             </div>
             
             <div className="grid grid-cols-2 gap-4 md:gap-8 relative">
               <motion.div 
                 variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                 className="relative h-64 md:h-96 mt-12 md:mt-24"
               >
                 <img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="Equestrian" className="w-full h-full object-cover shadow-2xl" />
               </motion.div>
               <motion.div 
                 variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 } } }}
                 className="relative h-64 md:h-96"
               >
                 <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="Beach" className="w-full h-full object-cover shadow-2xl" />
               </motion.div>
             </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
};
