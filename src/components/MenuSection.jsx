import React, { useState } from 'react';
import { Cake, Sparkles, Coffee, Cookie, Utensils, MessageSquare } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/bakeryData';

export default function MenuSection({ onOpenInquiry }) {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  const currentCategoryData = MENU_CATEGORIES.find((cat) => cat.id === activeCategory);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'cakes': return <Cake size={16} />;
      case 'pastries': return <Utensils size={16} />;
      case 'cookies': return <Cookie size={16} />;
      case 'drinks': return <Coffee size={16} />;
      default: return <Sparkles size={16} />;
    }
  };

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Kitchen Offerings</span>
          </div>
          <h2 className="section-title">The Sweet Chapter Menu</h2>
          <p className="section-sub">
            Crafted with European butter, fresh fruits, and Belgian couverture chocolate in our Pimpri kitchen.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="menu-tabs">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`menu-tab-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {getCategoryIcon(category.id)}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Category Note & Transparency Statement */}
        <div className="menu-category-note">
          <div>
            <strong>Category Note: </strong>
            <span>{currentCategoryData?.description}</span>
          </div>
          <button
            type="button"
            className="btn-primary"
            onClick={onOpenInquiry}
            style={{ fontSize: '0.84rem', padding: '0.5rem 1.1rem', backgroundColor: '#FFFFFF' }}
          >
            <MessageSquare size={14} />
            <span>Inquire Custom Cake</span>
          </button>
        </div>

        {/* Menu Items Grid */}
        <div className="menu-items-grid">
          {currentCategoryData?.items.map((item, index) => (
            <div key={index} className="menu-item-row">
              <div className="menu-item-header">
                <h4 className="menu-item-title">{item.name}</h4>
                <span className="menu-item-tag">{item.type}</span>
              </div>
              <p className="menu-item-desc">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Helpful Footnote */}
        <div style={{ marginTop: '2.5rem', textAlign: 'center', background: 'var(--c-surface-warm)', border: '1px dashed var(--c-biscuit-beige)', borderRadius: 'var(--radius-lg)', padding: '1.5rem 2rem' }}>
          <p style={{ fontSize: '0.92rem', color: 'var(--c-chocolate-soft)', maxWidth: '780px', margin: '0 auto' }}>
            <strong>Authentic Kitchen Notice:</strong> Menu items and daily flavours rotate seasonally based on fresh market produce. Custom celebratory cakes (including tier cakes, vintage piping, and florals) are pre-ordered and customized according to guest count and design preferences.
          </p>
        </div>
      </div>
    </section>
  );
}
