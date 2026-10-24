import React, { useEffect } from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { X, ArrowRight, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { STORE_CONFIG } from '../../config/storeConfig';

export const MobileNavDrawer = ({
  isOpen,
  onClose,
  navLinks = [],
  activeTab,
  handleNavClick,
  petFilter,
  setPetFilter,
  onOpenQueryModal
}) => {
  // Lock body scroll while drawer is open without layout shift
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
      {/* Semi-transparent backdrop with slight blur */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-charcoal/45 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      {/* Slide-in Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-80 max-w-[88vw] h-full bg-ivory border-l border-ivory-border shadow-drawer flex flex-col justify-between p-6 animate-slide-right overflow-y-auto">
          
          <div>
            {/* Header: Logo & Close Button */}
            <div className="flex items-center justify-between pb-5 border-b border-ivory-border">
              <BrandLogo showSubtitle={false} textClassName="text-xl" />
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-charcoal-muted hover:text-charcoal hover:bg-ivory-subtle border border-ivory-border transition-colors"
                aria-label="Close navigation drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Pet Switcher Segmented Control */}
            <div className="my-5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-light block mb-2">
                Filter by Companion
              </span>
              <div className="grid grid-cols-3 bg-ivory-muted/70 p-1 rounded-xl border border-ivory-border text-xs font-semibold">
                <button
                  onClick={() => {
                    setPetFilter('all');
                  }}
                  className={`py-1.5 rounded-lg transition-editorial text-center ${
                    petFilter === 'all'
                      ? 'bg-ivory text-forest-800 shadow-sm'
                      : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => {
                    setPetFilter('dog');
                  }}
                  className={`py-1.5 rounded-lg transition-editorial text-center ${
                    petFilter === 'dog'
                      ? 'bg-forest-700 text-ivory shadow-sm'
                      : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  Dogs
                </button>
                <button
                  onClick={() => {
                    setPetFilter('cat');
                  }}
                  className={`py-1.5 rounded-lg transition-editorial text-center ${
                    petFilter === 'cat'
                      ? 'bg-forest-700 text-ivory shadow-sm'
                      : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  Cats
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-light block mb-2">
                Navigation
              </span>
              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeTab === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        handleNavClick(link);
                        onClose();
                      }}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-editorial flex items-center justify-between ${
                        isActive
                          ? 'bg-forest-50 text-forest-800 font-bold border border-forest-100'
                          : 'text-charcoal hover:bg-ivory-subtle border border-transparent'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-forest-700' : 'opacity-40'}`} />
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Drawer Footer: WhatsApp Direct Action */}
          <div className="pt-6 border-t border-ivory-border space-y-3">
            <div className="p-3 bg-forest-50/70 border border-forest-100 rounded-xl">
              <div className="flex items-center gap-2 text-forest-800 font-semibold text-xs mb-1">
                <MessageCircle className="w-3.5 h-3.5 text-forest-700" />
                <span>WhatsApp Order Line</span>
              </div>
              <p className="text-[11px] text-charcoal-muted leading-relaxed">
                Connect directly with our Bengaluru care team for order inquiries.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenQueryModal) {
                    onOpenQueryModal('Hello Paw Buddy team!');
                  }
                }}
                className="mt-2 block w-full py-2 px-3 text-center rounded-lg bg-forest-700 hover:bg-forest-800 text-ivory font-semibold text-xs transition-colors cursor-pointer"
              >
                Chat on WhatsApp
              </button>
            </div>

            <p className="text-[10px] text-center text-charcoal-light">
              Complimentary delivery on orders above ₹499
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
