import React from 'react';
import { MapPin, Navigation, Clock, Sparkles, Cake, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BUSINESS_INFO } from '../data/bakeryData';

export default function VisitSection({ onOpenInquiry }) {
  return (
    <section id="visit" className="visit-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag" style={{ background: 'var(--c-powder-blue)' }}>
            <MapPin size={14} />
            <span>Finding Chapter Ten</span>
          </div>
          <h2 className="section-title">Come Over for Something Sweet.</h2>
          <p className="section-sub">
            Located on the 1st Floor of Sukhwani Castle in Pimpri Colony. Follow the aroma of butter and sugar!
          </p>
        </div>

        {/* Visit Card Split Container */}
        <div className="visit-card-container">
          {/* Information Panel */}
          <div className="visit-info-panel">
            {/* Address */}
            <div className="visit-detail-item">
              <div className="visit-icon-circle">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="visit-detail-title">Bakery Address</h4>
                <p className="visit-detail-desc" style={{ fontWeight: 600 }}>
                  Chapter Ten – Bakery Kitchen
                </p>
                <p className="visit-detail-desc">
                  {BUSINESS_INFO.address.line1},
                </p>
                <p className="visit-detail-desc">
                  {BUSINESS_INFO.address.landmark},
                </p>
                <p className="visit-detail-desc">
                  {BUSINESS_INFO.address.area},
                </p>
                <p className="visit-detail-desc">
                  {BUSINESS_INFO.address.city} – {BUSINESS_INFO.address.pincode}, {BUSINESS_INFO.address.country}
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="visit-detail-item">
              <div className="visit-icon-circle" style={{ background: 'var(--c-powder-blue)', borderColor: 'var(--c-powder-blue-light)' }}>
                <Clock size={22} />
              </div>
              <div>
                <h4 className="visit-detail-title">Kitchen & Counter Hours</h4>
                <p className="visit-detail-desc">
                  {BUSINESS_INFO.timingsNote}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--c-chocolate-soft)', marginTop: '0.35rem' }}>
                  *For weekend celebration cake pickups, we suggest booking at least 48 hours in advance.
                </p>
              </div>
            </div>

            {/* Social & Contact */}
            <div className="visit-detail-item">
              <div className="visit-icon-circle" style={{ background: 'var(--c-strawberry-milk)', borderColor: 'var(--c-blush-pink)' }}>
                <InstagramIcon size={22} />
              </div>
              <div>
                <h4 className="visit-detail-title">Instagram & Updates</h4>
                <p className="visit-detail-desc">
                  Follow along for daily counter bakes, seasonal flavours, and reel drops.
                </p>
                <a
                  href={BUSINESS_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--c-chocolate-brown)',
                    fontWeight: 700,
                    marginTop: '0.35rem',
                    textDecoration: 'underline'
                  }}
                >
                  <span>{BUSINESS_INFO.instagram.handle}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Navigation size={16} />
                <span>Get Directions in Google Maps</span>
              </a>

              <button
                type="button"
                className="btn-secondary"
                onClick={onOpenInquiry}
              >
                <Cake size={16} />
                <span>Custom Cake Inquiry</span>
              </button>
            </div>
          </div>

          {/* Map Preview Graphic Panel */}
          <div className="visit-map-panel">
            <div className="map-card-graphic">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--c-powder-blue)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-chocolate-deep)' }}>
                <Navigation size={28} />
              </div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                Visiting from Pune or PCMC?
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--c-chocolate-soft)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Conveniently located in Pimpri Colony right opposite the Brahma Kumari’s center at Sukhwani Castle (E Wing, 1st Floor).
              </p>
              <div style={{ background: 'var(--c-vanilla-cream)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', fontWeight: 600 }}>
                📍 Landmark: Opposite Brahma Kumari's, Vaibhav Nagar
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(105, 68, 56, 0.1)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--c-chocolate-soft)', letterSpacing: '0.05em' }}>
                Sweet Reminders
              </span>
              <p style={{ fontSize: '0.86rem', color: 'var(--c-chocolate-brown)', marginTop: '0.35rem' }}>
                Takeaway boxes and gifting packaging are available for all celebration cakes and assorted treats!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
