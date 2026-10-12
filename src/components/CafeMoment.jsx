import React from 'react';
import { Coffee, Sparkles, Heart } from 'lucide-react';

export default function CafeMoment() {
  return (
    <section className="cafe-moment-section">
      <div className="container">
        <div className="moment-grid">
          {/* Visual Side */}
          <div className="moment-gallery-stack">
            <div className="moment-img-main">
              <img
                src={`${import.meta.env.BASE_URL}images/cafe-drinks.jpg`}
                alt="Iced vanilla latte and fresh hibiscus refresher at Chapter Ten café"
                loading="lazy"
              />
            </div>
            <div className="moment-quote-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--c-chocolate-soft)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                <Sparkles size={14} color="var(--c-strawberry-milk)" />
                <span>Slow Living & Sweet Bakes</span>
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--c-chocolate-brown)', lineHeight: 1.4 }}>
                “Coffee, cake & good company — the sweet recipe for any good day.”
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <div className="section-tag" style={{ background: 'rgba(255, 255, 255, 0.45)' }}>
              <Coffee size={14} />
              <span>The Café Atmosphere</span>
            </div>

            <h2 className="section-title" style={{ color: 'var(--c-chocolate-deep)' }}>
              Coffee Dates & Little Delights
            </h2>

            <p style={{ fontSize: '1.12rem', lineHeight: 1.7, marginBottom: '1.5rem', color: 'var(--c-chocolate-deep)' }}>
              Whether you’re catching up with your favourite person, pausing in the afternoon with an iced drink, or picking up a box of freshly baked desserts to share at home, Chapter Ten is designed as a warm, welcoming breath of fresh air.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.6)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.8)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Sip & Unwind</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--c-chocolate-soft)' }}>
                  Cold brews, layered iced lattes, and aromatic teas served with love.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.6)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.8)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Made for Moments</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--c-chocolate-soft)' }}>
                  Cosy seating, pastel aesthetics, and treats made from wholesome ingredients.
                </p>
              </div>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFFFFF', padding: '0.5rem 1.15rem', borderRadius: 'var(--radius-pill)', fontSize: '0.86rem', fontWeight: 700, color: 'var(--c-chocolate-brown)', boxShadow: 'var(--shadow-soft)' }}>
              <Heart size={14} fill="var(--c-strawberry-milk)" color="var(--c-strawberry-milk)" />
              <span>A sweet sanctuary in Pimpri Colony, Pune</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
