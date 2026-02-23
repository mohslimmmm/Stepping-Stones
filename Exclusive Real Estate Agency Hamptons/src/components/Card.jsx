import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ image, title, subtitle, price, linkTo }) => {
  return (
    <Link to={linkTo} className="group block overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 text-xs font-body tracking-wider uppercase text-primary">
          Exclusive
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-xl text-primary mb-2 line-clamp-1 group-hover:text-accentBlue transition-colors">{title}</h3>
          <p className="font-body text-primary/70 text-sm mb-4">{subtitle}</p>
        </div>
        <div className="font-heading font-bold text-accentBlue text-lg">
          {price}
        </div>
      </div>
    </Link>
  );
};
