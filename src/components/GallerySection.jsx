import React, { useState } from 'react';
import { Camera, ZoomIn, X, Heart } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/bakeryData';

export default function GallerySection() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Camera size={14} />
            <span>Café Visuals</span>
          </div>
          <h2 className="section-title">Little Things Worth Looking At</h2>
          <p className="section-sub">
            A peek inside our ovens, counters, and cozy corners. Tap any photo to enlarge.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => setActivePhoto(item)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActivePhoto(item);
                }
              }}
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div className="gallery-overlay">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <span className="gallery-caption">{item.title}</span>
                  <div style={{ background: '#FFFFFF', borderRadius: '50%', padding: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-chocolate-brown)' }}>
                    <ZoomIn size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activePhoto && (
        <div
          className="lightbox-modal"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-img-wrap">
              <img src={activePhoto.image} alt={activePhoto.alt} />
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--c-chocolate-brown)'
                }}
                aria-label="Close photo preview"
              >
                <X size={20} />
              </button>
            </div>
            <div className="lightbox-details">
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--c-chocolate-brown)' }}>
                  {activePhoto.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--c-chocolate-soft)', marginTop: '0.2rem' }}>
                  Chapter Ten – Bakery Kitchen, Pimpri Pune
                </p>
              </div>
              <span className="treat-badge" style={{ background: 'var(--c-blush-pink)' }}>
                {activePhoto.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
