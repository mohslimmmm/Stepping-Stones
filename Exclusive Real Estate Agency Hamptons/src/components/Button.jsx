import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "relative overflow-hidden px-8 py-4 font-body tracking-[0.2em] uppercase text-[10px] sm:text-xs font-bold transition-all duration-500 ease-out focus:outline-none focus:ring-1 focus:ring-accentBlue focus:ring-offset-1 inline-flex items-center justify-center group";
  
  const variants = {
    primary: "bg-primary text-background border border-primary hover:bg-transparent hover:text-primary",
    secondary: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-background",
    accent: "bg-transparent border border-accentGreen text-primary hover:bg-accentGreen hover:text-primary",
    minimal: "bg-transparent text-primary hover:text-accentBlue px-0 py-2 border-b border-transparent hover:border-accentBlue",
    outlineLight: "bg-transparent border border-background/30 text-background hover:bg-background hover:text-primary",
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
