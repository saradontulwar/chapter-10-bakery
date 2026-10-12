import React, { useState } from 'react';
import { X, Sparkles, Send, Copy, Check, Cake } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BUSINESS_INFO } from '../data/bakeryData';

export default function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    occasion: 'Birthday Celebration',
    date: '',
    size: '1 kg (~6-8 servings)',
    notes: '',
  });

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formattedInquiry = `Hi Chapter Ten Bakery Kitchen! ♡\n\nI'd like to inquire about a custom cake order:\n• Name: ${formData.name || 'A Cake Lover'}\n• Occasion: ${formData.occasion}\n• Date Needed: ${formData.date || 'Upcoming'}\n• Size/Guest Count: ${formData.size}\n• Notes/Flavours: ${formData.notes || 'Please share your available flavours and designs!'}\n\nCould you please let me know availability and pricing? Thank you!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedInquiry);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenInstagram = () => {
    window.open(BUSINESS_INFO.instagram.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="inquiry-modal" onClick={onClose} role="dialog" aria-modal="true">
      <div className="inquiry-card" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ background: 'var(--c-blush-pink)', padding: '0.4rem', borderRadius: '50%', color: 'var(--c-chocolate-brown)' }}>
              <Cake size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--c-chocolate-brown)' }}>Custom Cake Inquiry</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--c-chocolate-soft)' }}>
                Bespoke designs & celebration orders
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '0.4rem',
              color: 'var(--c-chocolate-brown)',
              borderRadius: '50%',
              background: 'rgba(105, 68, 56, 0.08)'
            }}
            aria-label="Close custom order modal"
          >
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--c-chocolate-soft)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          Fill in your celebration details below. You can copy the generated request or reach out directly to our kitchen team via Instagram (<strong>{BUSINESS_INFO.instagram.handle}</strong>).
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label className="form-label" htmlFor="inquiry-name">Your Name</label>
            <input
              id="inquiry-name"
              name="name"
              type="text"
              placeholder="e.g. Radhika / Rohan"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="inquiry-occasion">Occasion</label>
              <select
                id="inquiry-occasion"
                name="occasion"
                className="form-select"
                value={formData.occasion}
                onChange={handleChange}
              >
                <option value="Birthday Celebration">Birthday Celebration</option>
                <option value="Wedding / Engagement">Wedding / Engagement</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Baby Shower">Baby Shower</option>
                <option value="High Tea / Party">High Tea / Party</option>
                <option value="Just Because">Just Because ♡</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="inquiry-date">Required Date</label>
              <input
                id="inquiry-date"
                name="date"
                type="date"
                className="form-input"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="inquiry-size">Estimated Size / Servings</label>
            <select
              id="inquiry-size"
              name="size"
              className="form-select"
              value={formData.size}
              onChange={handleChange}
            >
              <option value="1 kg (~6-8 servings)">1 kg (~6-8 servings)</option>
              <option value="1.5 kg (~10-12 servings)">1.5 kg (~10-12 servings)</option>
              <option value="2 kg (~15-18 servings)">2 kg (~15-18 servings)</option>
              <option value="Two-Tier Celebration Cake">Two-Tier Celebration Cake</option>
              <option value="Assorted Dessert Box / High Tea">Assorted Dessert Box / High Tea</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="inquiry-notes">Flavours or Design Notes</label>
            <textarea
              id="inquiry-notes"
              name="notes"
              rows={3}
              placeholder="e.g. Vintage pastel pink piping, fresh strawberry filling, Belgian dark chocolate, gluten sensitivity notes..."
              className="form-textarea"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button
              type="button"
              className="btn-primary"
              style={{ flex: '1 1 auto' }}
              onClick={handleCopy}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'Inquiry Copied to Clipboard!' : 'Copy Order Details'}</span>
            </button>

            <button
              type="button"
              className="btn-secondary"
              style={{ flex: '1 1 auto' }}
              onClick={handleOpenInstagram}
            >
              <InstagramIcon size={16} />
              <span>DM on Instagram</span>
            </button>
          </div>

          <p style={{ fontSize: '0.78rem', color: 'var(--c-chocolate-soft)', textAlign: 'center', marginTop: '1rem' }}>
            ✨ All custom orders are confirmed directly with our kitchen to ensure personalized design, fresh ingredients, and timely collection.
          </p>
        </form>
      </div>
    </div>
  );
}
