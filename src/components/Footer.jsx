import React from 'react';
import { Heart, MapPin, Sparkles, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BUSINESS_INFO } from '../data/bakeryData';

export default function Footer({ onOpenInquiry }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <div className="brand-wordmark">
              <span className="brand-main">CHAPTER TEN</span>
              <span className="brand-sub">Bakery Kitchen</span>
            </div>
            <p>
              Your next little sweet escape in Pimpri Colony, Pune. Handcrafted layer cakes, artisan pastries, fresh bakes, and slow cafe moments.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <a
                href={BUSINESS_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(246, 220, 227, 0.15)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: 'var(--radius-pill)',
                  color: 'var(--c-blush-pink)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: '1px solid rgba(246, 220, 227, 0.25)'
                }}
              >
                <InstagramIcon size={15} />
                <span>{BUSINESS_INFO.instagram.handle}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div>
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}>Home</a></li>
              <li><a href="#featured" onClick={(e) => { e.preventDefault(); scrollTo('#featured'); }}>Favourite Treats</a></li>
              <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('#menu'); }}>Full Menu</a></li>
              <li><a href="#story" onClick={(e) => { e.preventDefault(); scrollTo('#story'); }}>Our Story</a></li>
              <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('#gallery'); }}>Photo Gallery</a></li>
              <li><a href="#visit" onClick={(e) => { e.preventDefault(); scrollTo('#visit'); }}>Visit Bakery</a></li>
            </ul>
          </div>

          {/* Kitchen Offerings */}
          <div>
            <h4 className="footer-col-title">Creations</h4>
            <ul className="footer-links">
              <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('#menu'); }}>Custom Celebration Cakes</a></li>
              <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('#menu'); }}>French Butter Tarts & Éclairs</a></li>
              <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('#menu'); }}>Melted Chocolate Cookies</a></li>
              <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('#menu'); }}>Speciality Café Drinks</a></li>
              <li>
                <button
                  type="button"
                  onClick={onOpenInquiry}
                  style={{ color: 'var(--c-blush-pink)', fontWeight: 700, padding: 0, textAlign: 'left', textDecoration: 'underline' }}
                >
                  Request Custom Cake
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Visit */}
          <div>
            <h4 className="footer-col-title">Find Us</h4>
            <p style={{ color: 'var(--c-biscuit-beige)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>
              <strong>Sukhwani Castle</strong><br />
              1st Floor, Shop No. 22, E Wing,<br />
              Vaibhav Nagar, Opp. Brahma Kumari’s,<br />
              Pimpri Colony, Pune 411017
            </p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--c-powder-blue)',
                fontSize: '0.86rem',
                fontWeight: 600,
                textDecoration: 'underline'
              }}
            >
              <MapPin size={14} />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>© {new Date().getFullYear()} Chapter Ten – Bakery Kitchen.</span>
            <span>All rights reserved.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              Baked with <Heart size={14} fill="var(--c-blush-pink)" color="var(--c-blush-pink)" /> in Pimpri, Pune
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                color: 'var(--c-biscuit-beige)',
                fontSize: '0.85rem'
              }}
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
