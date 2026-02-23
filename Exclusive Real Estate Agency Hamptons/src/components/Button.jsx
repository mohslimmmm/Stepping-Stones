import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 font-body tracking-wider uppercase text-sm transition-all duration-300 ease-in-out font-medium focus:outline-none focus:ring-2 focus:ring-accentBlue focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-background hover:bg-accentBlue",
    secondary: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-background",
    accent: "bg-accentGreen text-primary hover:opacity-90",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
