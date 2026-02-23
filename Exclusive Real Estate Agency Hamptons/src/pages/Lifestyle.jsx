import React from 'react';
import { Button } from '../components/Button';

export const Lifestyle = () => {
  return (
    <div className="pt-24 bg-background pb-24">
      
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-16 mb-24">
        <p className="font-body text-accentBlue uppercase tracking-widest text-sm mb-6">Editorial Guide</p>
        <h1 className="font-heading text-5xl md:text-6xl text-primary mb-8 leading-tight">The Hamptons Summer Scene</h1>
        <p className="font-body text-xl text-primary/70 leading-relaxed font-light">
          An insider's perspective on the world's most exclusive summer enclave. Where timeless traditions meet modern luxury.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Article 1 - Equestrian */}
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="font-heading text-4xl text-primary mb-6">Equestrian Excellence in Bridgehampton</h2>
            <p className="font-body text-lg text-primary/80 leading-relaxed mb-6">
              Home to the prestigious Hampton Classic, Bridgehampton remains the undisputed equestrian capital of the East Coast. The properties here are unparalleled, featuring state-of-the-art barns, Olympic-sized riding rings, and rolling pastures that stretch to the horizon.
            </p>
            <p className="font-body text-lg text-primary/80 leading-relaxed mb-8">
              Owning an equestrian estate here is about preserving a heritage. Let our specialized agents guide you through the intricacies of zoning, facility management, and finding the perfect acreage for your stables.
            </p>
            <Button variant="secondary">View Equestrian Estates</Button>
          </div>
          <div className="order-1 lg:order-2">
            <img src="https://images.unsplash.com/photo-1598205260196-857ce79d20c5?auto=format&fit=crop&q=80&w=1000" alt="Equestrian" className="w-full h-[600px] object-cover shadow-sm" />
          </div>
        </article>

        {/* Article 2 - Surf & Sand */}
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <img src="https://images.unsplash.com/photo-1544414594-54fd0d8a59fb?auto=format&fit=crop&q=80&w=1000" alt="Montauk Beach" className="w-full h-[600px] object-cover shadow-sm" />
          </div>
          <div className="pl-0 lg:pl-12">
            <h2 className="font-heading text-4xl text-primary mb-6">The Raw Edge of Montauk</h2>
            <p className="font-body text-lg text-primary/80 leading-relaxed mb-6">
              'The End' has transformed from a sleepy fishing village to the most vibrant cultural hub on the East End, all while retaining its rugged maritime soul. Montauk offers a different paradigm of luxury—one defined by world-class surfing out your backdoor and minimalist cliffside architecture.
            </p>
            <p className="font-body text-lg text-primary/80 leading-relaxed mb-8">
              From the historic properties in the Moorlands to ultra-modern compounds overlooking Ditch Plains, Montauk is for those who seek the ocean's raw power combined with refined living.
            </p>
            <Button variant="secondary">Explore Montauk Real Estate</Button>
          </div>
        </article>
      </div>

      <div className="bg-primary text-white py-24 mt-16 text-center">
        <h2 className="font-heading text-4xl mb-6">Ready to find your place?</h2>
        <p className="font-body text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Our senior partners have decades of experience matching discerning clients with properties that complement their lifestyle perfectly.
        </p>
        <Button className="bg-white text-primary hover:bg-background">Schedule a Consultation</Button>
      </div>
    </div>
  );
};
