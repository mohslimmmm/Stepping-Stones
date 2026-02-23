import React from 'react';
import { Button } from '../components/Button';

export const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-background pb-24">
      
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-12 mb-20">
        <h1 className="font-heading text-5xl md:text-6xl text-primary mb-6">A Legacy of Discretion</h1>
        <p className="font-body text-xl text-primary/70 leading-relaxed max-w-2xl mx-auto">
          For over 25 years, East End Exclusive Estates has been the trusted advisor to the area's most discerning real estate clients.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* History Image */}
        <div className="relative h-[500px] w-full mb-24 overflow-hidden border border-primary/10">
          <img 
            src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=2000" 
            alt="Historic Office" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-heading text-3xl text-primary mb-6">Founded on Trust</h2>
            <p className="font-body text-lg text-primary/80 leading-relaxed mb-6">
              East End Exclusive Estates was established in 1998 by Alexander Sterling with a simple premise: high-net-worth individuals require a different caliber of real estate service. A service defined by absolute discretion, unparalleled market intelligence, and fierce advocacy.
            </p>
            <p className="font-body text-lg text-primary/80 leading-relaxed">
              Today, our boutique firm handles over $1.2 Billion in annual localized volume, representing some of the most significant architectural properties east of the Shinnecock Canal.
            </p>
          </div>
          <div className="border border-accentBlue/20 bg-white p-12">
            <h3 className="font-heading text-2xl text-primary mb-8 text-center">In The Press</h3>
            <div className="space-y-8">
              <blockquote className="border-l-4 border-accentBlue pl-4">
                <p className="font-heading text-xl text-primary italic mb-2">"The undisputed gatekeepers of the Hamptons' most exclusive listings."</p>
                <footer className="font-body text-sm text-primary/60 uppercase tracking-widest">— The Wall Street Journal</footer>
              </blockquote>
              <blockquote className="border-l-4 border-accentBlue pl-4">
                <p className="font-heading text-xl text-primary italic mb-2">"When an eight-figure compound trades off-market, Sterling's firm is usually involved."</p>
                <footer className="font-body text-sm text-primary/60 uppercase tracking-widest">— The New York Times</footer>
              </blockquote>
              <blockquote className="border-l-4 border-accentBlue pl-4">
                <p className="font-heading text-xl text-primary italic mb-2">"A masterclass in discreet, ultra-luxury brokerage."</p>
                <footer className="font-body text-sm text-primary/60 uppercase tracking-widest">— Architectural Digest</footer>
              </blockquote>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
