import React from 'react';
import { Heart, BookOpen, Sparkles, Award } from 'lucide-react';

export default function OurStory() {
  return (
    <section id="story" className="story-section">
      <div className="container">
        <div className="story-grid">
          {/* Text Left */}
          <div>
            <div className="section-tag" style={{ background: 'var(--c-blush-pink)' }}>
              <BookOpen size={14} />
              <span>Behind the Kitchen</span>
            </div>

            <h2 className="section-title">Every Place Has a Story.</h2>

            <p style={{ fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              At Chapter Ten – Bakery Kitchen, every recipe starts with a simple belief: the best moments in life deserve something truly delicious to mark them.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem', color: 'var(--c-chocolate-soft)' }}>
              Nestled on the 1st Floor of Sukhwani Castle in Pimpri Colony, Pune, our bakery kitchen was created as a sweet haven. From handcrafted celebration cakes and wedding tiers to flaky breakfast pastries and warm cookies right out of the oven, we take pride in real butter, authentic chocolate, and thoughtful presentation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--c-blush-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Heart size={14} fill="var(--c-chocolate-brown)" color="var(--c-chocolate-brown)" />
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Pure ingredients, crafted in small batches daily</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--c-powder-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Sparkles size={14} color="var(--c-chocolate-deep)" />
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Bespoke cake designs made for your milestone celebrations</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--c-strawberry-milk)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Award size={14} color="var(--c-chocolate-deep)" />
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>5.0-star customer satisfaction in Pimpri-Chinchwad</span>
              </div>
            </div>

            <div style={{ fontStyle: 'italic', color: 'var(--c-chocolate-soft)', fontSize: '0.95rem', borderLeft: '3px solid var(--c-strawberry-milk)', paddingLeft: '1rem' }}>
              “Made for your birthdays, your lazy Sundays, and every little chapter in between.”
            </div>
          </div>

          {/* Image Right with Badge */}
          <div className="story-img-collage">
            <div className="story-badge-card">
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c-chocolate-soft)' }}>
                Welcome to
              </span>
              <h4 style={{ fontSize: '1.2rem', marginTop: '0.2rem', color: 'var(--c-chocolate-brown)' }}>
                Chapter Ten
              </h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--c-chocolate-soft)', marginTop: '0.25rem' }}>
                Pimpri, Pune
              </p>
            </div>

            <div className="story-main-img">
              <img
                src={`${import.meta.env.BASE_URL}images/cafe-corner.jpg`}
                alt="Chapter Ten café corner with cosy armchair and floral arrangement"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
