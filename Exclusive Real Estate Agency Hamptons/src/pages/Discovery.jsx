import React, { useState } from 'react';
import { Card } from '../components/Card';

const PROPERTY_DATA = [
  { id: 1, region: 'easthampton', title: 'Further Lane Estate', subtitle: 'East Hampton, NY • 7 Beds • Oceanfront', price: '$45,000,000', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800' },
  { id: 2, region: 'southampton', title: 'Meadow Lane Compound', subtitle: 'Southampton, NY • 9 Beds • Bay Access', price: '$38,500,000', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 3, region: 'montauk', title: 'Montauk Point Modern', subtitle: 'Montauk, NY • 5 Beds • Cliffside', price: '$22,000,000', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { id: 4, region: 'rentals', title: 'Lily Pond Lane Summer', subtitle: 'East Hampton, NY • 6 Beds • Aug-LD', price: '$450,000 /mo', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
  { id: 5, region: 'southampton', title: 'Gin Lane Historic', subtitle: 'Southampton, NY • 12 Beds • Oceanfront', price: '$55,000,000', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { id: 6, region: 'easthampton', title: 'Georgica Pond Retreat', subtitle: 'East Hampton, NY • 8 Beds • Waterfront', price: '$32,000,000', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800' },
];

export const Discovery = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'southampton', label: 'Southampton' },
    { id: 'easthampton', label: 'East Hampton' },
    { id: 'montauk', label: 'Montauk' },
    { id: 'rentals', label: 'Summer Rentals' }
  ];

  const filteredProperties = activeTab === 'all' 
    ? PROPERTY_DATA 
    : PROPERTY_DATA.filter(p => p.region === activeTab);

  return (
    <div className="pt-24 min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <h1 className="font-heading text-5xl text-primary mb-6">Discovery Portfolio</h1>
        <p className="font-body text-primary/70 text-lg max-w-2xl mb-12">
          Explore our globally curated selection of extraordinary Hamptons properties. From legacy oceanfront compounds to architectural masterpieces.
        </p>

        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-primary/20 mb-12 scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-6 font-body text-sm tracking-widest uppercase transition-colors relative ${
                activeTab === tab.id ? 'text-accentBlue font-bold' : 'text-primary/60 hover:text-primary'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accentBlue"></div>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(listing => (
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
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-20 font-body text-primary/50 text-lg">
            No properties currently available in this curated collection.
          </div>
        )}
      </div>
    </div>
  );
};
