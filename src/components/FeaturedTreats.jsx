import React from 'react';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import { FEATURED_TREATS } from '../data/bakeryData';

export default function FeaturedTreats({ onOpenInquiry }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="featured" className="featured-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Heart size={14} fill="var(--c-chocolate-soft)" />
            <span>Handcrafted Delights</span>
          </div>
          <h2 className="section-title">A Few of Our Favourite Things</h2>
          <p className="section-sub">Little treats, big happiness.</p>
        </div>

        {/* Treats Grid */}
        <div className="treats-grid">
          {FEATURED_TREATS.map((item) => (
            <div key={item.id} className="treat-card">
              <div className="treat-card-img-wrap">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span className="treat-tag">{item.tag}</span>
              </div>
              <div className="treat-card-body">
                <h3 className="treat-name">{item.name}</h3>
                <p className="treat-desc">{item.description}</p>
                <div className="treat-card-footer">
                  <span className="treat-badge">{item.priceNote}</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (item.id === 'celebration-two-tier') {
                        onOpenInquiry();
                      } else {
                        scrollTo('#menu');
                      }
                    }}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--c-chocolate-brown)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      textDecoration: 'underline'
                    }}
                  >
                    {item.id === 'celebration-two-tier' ? 'Inquire Cake' : 'View Category'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            className="btn-primary"
            onClick={() => scrollTo('#menu')}
            style={{ backgroundColor: 'var(--c-vanilla-cream)', borderColor: 'var(--c-chocolate-brown)' }}
          >
            <span>See the Full Menu</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
