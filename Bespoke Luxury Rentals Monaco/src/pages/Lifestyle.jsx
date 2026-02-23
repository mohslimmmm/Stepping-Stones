import React, { useEffect } from 'react';
import './Lifestyle.css';

const ARTICLES = [
  {
    id: 'grand-prix',
    title: 'The Ultimate Grand Prix Viewing Guide',
    category: 'Events',
    excerpt: 'Experience the Monaco Grand Prix from the most exclusive vantage points, from superyachts in Port Hercules to terraced penthouses on the Sainte Dévote corner.',
    image: 'https://images.unsplash.com/photo-1541344445831-2fbefbde08b0?auto=format&fit=crop&q=80',
  },
  {
    id: 'michelin-dining',
    title: 'Michelin Dining in Monte Carlo',
    category: 'Gastronomy',
    excerpt: 'A curated journey through the principality’s finest culinary establishments, securing tables at Le Louis XV and Blue Bay with our concierge.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80',
  },
  {
    id: 'yacht-charters',
    title: 'Private Yacht Charters: The French Riviera',
    category: 'Experiences',
    excerpt: 'Sail the azure waters of the Mediterranean aboard a fully staffed superyacht. Discover hidden coves from Cap-Ferrat to Saint-Tropez.',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80',
  }
];

const Lifestyle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lifestyle-page">
      <div className="lifestyle-header">
        <div className="container">
          <h1 className="lifestyle-title">Riviera Lifestyle</h1>
          <p className="lifestyle-subtitle">Exclusive guides, curated experiences, and insider access to the Mediterranean\'s most glamorous destinations.</p>
        </div>
      </div>

      <div className="container lifestyle-content">
        <div className="featured-article">
          <div className="featured-img-container">
            <img src={ARTICLES[0].image} alt={ARTICLES[0].title} className="featured-img" />
            <div className="article-category-badge">{ARTICLES[0].category}</div>
          </div>
          <div className="featured-text">
            <h2 className="featured-title">{ARTICLES[0].title}</h2>
            <p className="featured-excerpt">{ARTICLES[0].excerpt}</p>
            <button className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Read Full Guide</button>
          </div>
        </div>

        <div className="article-grid">
          {ARTICLES.slice(1).map((article, idx) => (
            <div key={idx} className="article-card">
              <div className="article-card-img-container">
                <img src={article.image} alt={article.title} className="article-card-img" />
                <div className="article-category-badge">{article.category}</div>
              </div>
              <div className="article-card-content">
                <h3 className="article-card-title">{article.title}</h3>
                <p className="article-card-excerpt">{article.excerpt}</p>
                <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Read Article</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lifestyle-cta">
        <div className="container lifestyle-cta-container">
          <h2>Elevate Your Stay</h2>
          <p>Our dedicated concierge team is ready to curate your entire itinerary, securing access to events and establishments that remain closed to the public.</p>
          <a href="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Contact Our Concierge</a>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
