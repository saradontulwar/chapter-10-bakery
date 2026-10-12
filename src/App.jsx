import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedTreats from './components/FeaturedTreats';
import CafeMoment from './components/CafeMoment';
import MenuSection from './components/MenuSection';
import OurStory from './components/OurStory';
import GallerySection from './components/GallerySection';
import VisitSection from './components/VisitSection';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <div className="chapter-ten-app">
      {/* Navigation */}
      <Navbar onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenInquiry={() => setInquiryModalOpen(true)} />

        {/* Scalloped Divider to Blush Pink */}
        <div className="scallop-divider to-blush" aria-hidden="true" />

        {/* 2. Featured Treats ("A Few of Our Favourite Things") */}
        <FeaturedTreats onOpenInquiry={() => setInquiryModalOpen(true)} />

        {/* Scalloped Divider to Powder Blue */}
        <div className="scallop-divider to-powder" aria-hidden="true" />

        {/* 3. Café Moment Section ("Coffee Dates & Little Delights") */}
        <CafeMoment />

        {/* Scalloped Divider to Vanilla Cream */}
        <div className="scallop-divider to-cream" aria-hidden="true" />

        {/* 4. Menu Preview & Interactive Categories */}
        <MenuSection onOpenInquiry={() => setInquiryModalOpen(true)} />

        {/* Scalloped Divider to Biscuit Beige */}
        <div className="scallop-divider to-beige" aria-hidden="true" />

        {/* 5. Brand Story ("Every Place Has a Story.") */}
        <OurStory />

        {/* Scalloped Divider to Vanilla Cream */}
        <div className="scallop-divider to-cream" aria-hidden="true" />

        {/* 6. Photo Gallery ("Little Things Worth Looking At") */}
        <GallerySection />

        {/* Scalloped Divider to Blush Pink Light */}
        <div className="scallop-divider to-blush" aria-hidden="true" />

        {/* 7. Visit Section ("Come Over for Something Sweet.") */}
        <VisitSection onOpenInquiry={() => setInquiryModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Custom Order / Celebration Cake Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </div>
  );
}
