import React from 'react';

const Lifestyle = () => {
  return (
    <div className="lifestyle-page">
      <div className="page-header" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1544985229-ea91edb6fc72?auto=format&fit=crop&q=80)', color: 'white'}}>
        <div className="container">
          <h1 className="page-title" style={{color: 'white'}}>The Marbella Lifestyle</h1>
          <p className="page-subtitle" style={{color: '#f3f4f6'}}>A guide to the ultimate Mediterranean experience.</p>
        </div>
      </div>
      
      <div className="container section grid-layout-content">
         <article className="lifestyle-article">
            <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80" alt="Marbella Golden Mile" className="article-img" />
            <div className="article-text">
               <h2>Relocating to Costa del Sol</h2>
               <p>
                 Moving to Marbella is about embracing a lifestyle of sunshine, world-class gastronomy, and absolute relaxation.
                 From international schools to healthcare, Costa del Sol provides a seamless transition for expats looking for a 
                 premium living environment. Our relocation experts handle every detail, ensuring your transition is as smooth as
                 the Mediterranean breeze.
               </p>
               <button className="secondary-btn">Read Full Guide</button>
            </div>
         </article>

         <article className="lifestyle-article reverse">
            <img src="https://images.unsplash.com/photo-1533604146059-e93544865fc2?auto=format&fit=crop&q=80" alt="Beach Club" className="article-img" />
            <div className="article-text">
               <h2>Marbella Beach Clubs</h2>
               <p>
                 Discover the finest beach clubs on the coast. Whether you prefer the glamorous parties of Nikki Beach or the 
                 laid-back luxury of Puente Romano's El Chiringuito, Marbella's beach culture is unparalleled. Experience 
                 sunset cocktails, exquisite seafood, and world-renowned DJs set against the backdrop of the sea.
               </p>
               <button className="secondary-btn">Explore Venues</button>
            </div>
         </article>

         <article className="lifestyle-article">
            <img src="https://images.unsplash.com/photo-1587302484666-6b22cce0d6da?auto=format&fit=crop&q=80" alt="Golf Course" className="article-img" />
            <div className="article-text">
               <h2>The Golf Valley</h2>
               <p>
                 Nueva Andalucía, often referred to as the Golf Valley, is home to some of Europe's most prestigious courses including 
                 Las Brisas, Aloha Golf, and Los Naranjos. Perfect for enthusiasts seeking properties with direct fairway access and 
                 exclusive clubhouse master-planned communities.
               </p>
               <button className="secondary-btn">View Golf Properties</button>
            </div>
         </article>
      </div>
    </div>
  );
};

export default Lifestyle;
