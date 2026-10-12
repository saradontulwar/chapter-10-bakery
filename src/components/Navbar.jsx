import React, { useState } from 'react';
import { Sparkles, Menu as MenuIcon, X, MapPin, Heart, Cake } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export default function Navbar({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Treats', href: '#featured' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#visit' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Announcement Strip */}
      <div className="announcement-bar" role="banner">
        <span>A little sweetness for your everyday moments ♡</span>
        <span className="announcement-badge">
          <MapPin size={12} /> Pimpri, Pune
        </span>
      </div>

      {/* Main Navigation */}
      <header className="header-sticky">
        <div className="container">
          <div className="nav-inner">
            {/* Brand Wordmark */}
            <a href="#home" className="brand-wordmark" onClick={(e) => handleLinkClick(e, '#home')}>
              <span className="brand-main">CHAPTER TEN</span>
              <span className="brand-sub">Bakery Kitchen • Pune</span>
            </a>

            {/* Desktop Navigation */}
            <ul className="nav-links-desktop">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="nav-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={onOpenInquiry}
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
              >
                <Cake size={16} />
                <span>Custom Order</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                className="mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
              >
                <MenuIcon size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className="mobile-drawer-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div className="brand-wordmark">
              <span className="brand-main" style={{ fontSize: '1.4rem' }}>CHAPTER TEN</span>
              <span className="brand-sub">Bakery Kitchen</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '0.5rem', color: 'var(--c-chocolate-brown)' }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: 'auto' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 600,
                  color: 'var(--c-chocolate-brown)',
                  borderBottom: '1px dashed rgba(105, 68, 56, 0.12)',
                  paddingBottom: '0.75rem'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div style={{ paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <button
              type="button"
              className="btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
            >
              <Cake size={18} />
              <span>Inquire Custom Cake</span>
            </button>

            <a
              href={BUSINESS_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: '100%', fontSize: '0.88rem' }}
            >
              Follow {BUSINESS_INFO.instagram.handle}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
