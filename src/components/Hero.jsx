import React from 'react';
import { Sparkles, Heart, Compass, Star, ArrowDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export default function Hero({ onOpenInquiry }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Text Content */}
          <div>
            <div className="hero-eyebrow">
              <Sparkles size={14} className="doodle-sparkle" />
              <span>HELLO, SWEET THING ♡</span>
            </div>

            <h1 className="hero-title">
              Your next little <span className="highlight-pink">sweet escape.</span>
            </h1>

            <p className="hero-desc">
              Good coffee, lovely treats, bespoke celebration cakes, and little moments worth slowing down for in Pimpri, Pune.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => scrollTo('#menu')}
              >
                <span>Explore the Menu</span>
                <ArrowDown size={16} />
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => scrollTo('#visit')}
              >
                <Compass size={16} />
                <span>Find Your Way Here</span>
              </button>
            </div>

            {/* Trust and Location Indicators */}
            <div className="hero-trust">
              <div className="rating-pill">
                <Star size={16} fill="var(--c-chocolate-brown)" color="var(--c-chocolate-brown)" />
                <span>5.0 Rating</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--c-chocolate-soft)' }}>
                Loved by dessert lovers across Pimpri-Chinchwad & Pune
              </div>
            </div>
          </div>

          {/* Hero Visual Collage */}
          <div className="hero-image-wrap">
            {/* Top Right Playful Sticker */}
            <div className="sticker-badge top-right">
              <Heart size={14} fill="var(--c-chocolate-brown)" />
              <span>Baked Fresh Daily</span>
            </div>

            {/* Main Featured Photo Frame */}
            <div className="hero-card-frame">
              <img
                src="/images/hero-cake.jpg"
                alt="Chapter Ten signature strawberry shortcake with cream and iced latte"
                loading="eager"
              />
            </div>

            {/* Bottom Left Powder Blue Sticker */}
            <div className="sticker-badge bottom-left">
              <Sparkles size={14} />
              <span>Pimpri Colony, Pune</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
