import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Card = ({ image, title, subtitle, price, linkTo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link to={linkTo} className="group block h-full flex flex-col bg-background relative border border-transparent hover:border-primary/5 transition-colors duration-500">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ease-out"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="absolute top-4 left-4 bg-background/95 backdrop-blur px-3 py-1.5 text-[9px] font-body tracking-[0.2em] font-bold uppercase text-primary border border-primary/10">
            Exclusive Listing
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/95 backdrop-blur p-4 rounded-full opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 ease-out flex items-center justify-center">
            <ArrowUpRight className="text-primary w-5 h-5" strokeWidth={1.5} />
          </div>
        </div>
        
        <div className="p-6 md:p-8 flex-grow flex flex-col justify-between relative z-10 bg-background transition-transform duration-500 group-hover:-translate-y-2 border-t border-primary/10">
          <div>
            <h3 className="font-heading text-2xl text-primary mb-3 line-clamp-1 group-hover:text-accentBlue transition-colors">{title}</h3>
            <p className="font-body text-primary/60 text-sm mb-6 leading-relaxed line-clamp-2">{subtitle}</p>
          </div>
          <div className="flex justify-between items-end">
            <div className="font-heading text-2xl border-b border-accentGreen pb-1 text-primary">
              {price}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
