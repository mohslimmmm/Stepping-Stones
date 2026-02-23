import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';

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

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
            alt="Hamptons Oceanfront" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 animate-fade-in-up">
            Find Your Summer Retreat
          </h1>
          <p className="font-body text-lg md:text-xl text-white/90 mb-10 tracking-wide">
            The East End's most exclusive portfolio of luxury real estate.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white p-2 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto shadow-2xl">
            <div className="flex-grow flex items-center px-4 py-3 md:py-0 border md:border-none border-primary/20">
              <Search className="h-5 w-5 text-primary/50 mr-3" />
              <input 
                type="text" 
                placeholder="Search Southampton, East Hampton, Montauk..." 
                className="w-full font-body text-primary focus:outline-none bg-transparent placeholder-primary/50"
              />
            </div>
            <div className="h-px md:h-12 w-full md:w-px bg-primary/10 mx-2 hidden md:block"></div>
            <select className="px-4 py-3 md:py-0 font-body text-primary focus:outline-none bg-transparent cursor-pointer border md:border-none border-primary/20">
              <option>Any Price</option>
              <option>$5M - $10M</option>
              <option>$10M - $20M</option>
              <option>$20M+</option>
            </select>
            <Button variant="primary" className="whitespace-nowrap w-full md:w-auto mt-2 md:mt-0">
              Search Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Exclusive Listings */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 border-b border-primary/10 pb-6">
            <div>
              <h2 className="font-heading text-4xl text-primary mb-2">Exclusive Listings</h2>
              <p className="font-body text-primary/70 tracking-wide uppercase text-sm">Curated Collection</p>
            </div>
            <Link to="/discovery" className="font-body text-sm font-bold tracking-widest uppercase text-accentBlue hover:text-primary transition-colors hidden md:block">
              View All Portfolio &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXCLUSIVE_LISTINGS.map(listing => (
              <Card 
                key={listing.id}
                image={listing.image}
                title={listing.title}
                subtitle={listing.subtitle}
                price={listing.price}
                linkTo={`/property/${listing.id}`}
              />
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
             <Link to="/discovery" className="font-body text-sm font-bold tracking-widest uppercase text-accentBlue hover:text-primary transition-colors block border border-accentBlue py-4">
              View All Portfolio
            </Link>
          </div>
        </div>
      </section>
      
      {/* Lifestyle Preview */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="font-heading text-4xl md:text-5xl mb-6">The Hamptons Lifestyle</h2>
               <p className="font-body text-white/80 text-lg mb-8 leading-relaxed">
                 From world-class equestrian facilities in Bridgehampton to the pristine surfing beaches of Montauk. We don't just sell homes; we curate the quintessential East End experience.
               </p>
               <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-primary">
                 Explore the Guide
               </Button>
             </div>
             <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1598205260196-857ce79d20c5?auto=format&fit=crop&q=80&w=600" alt="Equestrian" className="w-full h-64 object-cover" />
               <img src="https://images.unsplash.com/photo-1544414594-54fd0d8a59fb?auto=format&fit=crop&q=80&w=600" alt="Beach" className="w-full h-64 object-cover mt-8" />
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};
