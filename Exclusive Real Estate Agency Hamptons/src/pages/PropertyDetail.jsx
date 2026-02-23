import React from 'react';
import { Button } from '../components/Button';
import { MapPin, Bed, Bath, Square, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PropertyDetail = () => {
  return (
    <div className="bg-background min-h-screen relative pb-20">
      {/* Aerial Drone Gallery - Hero */}
      <div className="h-[70vh] w-full relative group">
        <img 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000" 
          alt="Further Lane Estate Aerial" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <Link to="/discovery" className="absolute top-24 left-8 text-white flex items-center hover:text-accentBlue transition-colors font-body uppercase text-sm tracking-widest">
          <ChevronLeft className="mr-2 h-5 w-5" /> Back to Portfolio
        </Link>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
          <div className="inline-block bg-accentBlue px-3 py-1 text-white font-body text-xs tracking-widest uppercase mb-4">
            Exclusive Listing
          </div>
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-4">Further Lane Estate</h1>
          <p className="font-body text-xl text-white/90">East Hampton, New York</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-8 py-8 border-y border-primary/10 mb-12">
               <div className="flex items-center text-primary/80">
                 <Bed className="h-5 w-5 mr-3 text-accentBlue" />
                 <span className="font-body text-lg">7 Bedrooms</span>
               </div>
               <div className="flex items-center text-primary/80">
                 <Bath className="h-5 w-5 mr-3 text-accentBlue" />
                 <span className="font-body text-lg">9 Bathrooms</span>
               </div>
               <div className="flex items-center text-primary/80">
                 <Square className="h-5 w-5 mr-3 text-accentBlue" />
                 <span className="font-body text-lg">12,500 Sq Ft</span>
               </div>
               <div className="flex items-center text-primary/80">
                 <MapPin className="h-5 w-5 mr-3 text-accentBlue" />
                 <span className="font-body text-lg">Oceanfront</span>
               </div>
            </div>

            <div className="prose max-w-none text-primary/80 font-body text-lg leading-relaxed mb-16">
              <h2 className="font-heading text-3xl text-primary mb-6">Historic East Hampton Grandeur</h2>
              <p className="mb-6">
                Positioned on one of the most coveted stretches of the Atlantic Ocean, the Further Lane Estate represents a once-in-a-generation opportunity. Originally designed in 1895 and meticulously restored, this legacy compound seamlessly blends historic Gilded Age elegance with state-of-the-art modern amenities.
              </p>
              <p>
                The property spans over 4 acres of pristine oceanfront, featuring formal sunken gardens, a 50-foot heated gunite pool echoing the horizon, and a private pathway directly to the white sands of East Hampton beach. The interiors boast hand-carved millwork, six original fireplaces, and soaring dual-height ceilings in the main reception hall.
              </p>
            </div>

            {/* Gallery Grid */}
            <h3 className="font-heading text-2xl text-primary border-b border-primary/10 pb-4 mb-8">Image Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" alt="Interior" className="w-full h-80 object-cover" />
               <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800" alt="Pool" className="w-full h-80 object-cover" />
               <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" alt="Living Room" className="w-full h-80 object-cover col-span-2" />
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white p-8 shadow-sm border border-primary/5">
              <h3 className="font-heading text-3xl text-primary mb-2">$45,000,000</h3>
              <p className="font-body text-primary/60 mb-8 uppercase tracking-widest text-sm">Sale Price</p>
              
              <div className="space-y-6">
                <Button className="w-full text-center block">Schedule a Private Showing</Button>
                <Button variant="secondary" className="w-full text-center block">Request Confidential Dossier</Button>
              </div>

              <div className="mt-12 pt-8 border-t border-primary/10">
                <p className="font-body text-sm uppercase tracking-widest text-primary/50 mb-4">Listing Broker</p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full overflow-hidden mr-4">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Broker" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-primary">Alexander Sterling</h4>
                    <p className="font-body text-sm text-accentBlue">Senior Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
