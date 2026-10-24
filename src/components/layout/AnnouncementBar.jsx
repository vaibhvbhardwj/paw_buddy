import React, { useState, useEffect } from 'react';
import { STORE_CONFIG } from '../../config/storeConfig';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export const AnnouncementBar = () => {
  const rawAnnouncements = STORE_CONFIG.announcements || [
    'Complimentary doorstep delivery on orders above ₹499',
    'Personal WhatsApp confirmation on every order',
    'Vet-guided nutrition and natural wellness for dogs & cats',
  ];

  // Clean announcements of emoji clutter
  const announcements = rawAnnouncements.map((text) =>
    text.replace(/[✨💬🐾🐶🐱🚚]/g, '').trim()
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
    <div className="bg-forest-900 text-ivory/90 py-2 px-4 border-b border-forest-800 text-[11px] sm:text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center gap-2 text-ivory/60 font-medium tracking-wider uppercase text-[10px]">
          <span>Artisan Boutique</span>
          <span>·</span>
          <span>Bengaluru & Pan-India</span>
        </div>

        <div className="flex-1 flex items-center justify-center text-center px-4 font-medium transition-opacity duration-300">
          <span>{announcements[currentIndex]}</span>
        </div>

        <div className="flex items-center gap-1.5 text-ivory/60">
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length)
            }
            className="p-0.5 hover:text-ivory transition-colors"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] text-ivory/40 font-mono">
            {currentIndex + 1}/{announcements.length}
          </span>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % announcements.length)}
            className="p-0.5 hover:text-ivory transition-colors"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
