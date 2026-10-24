import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { BrandLogo } from '../common/BrandLogo';
import { SearchPanel } from './SearchPanel';
import { MobileNavDrawer } from './MobileNavDrawer';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

export const Navbar = ({
  activeTab,
  setActiveTab,
  petFilter,
  setPetFilter,
  searchQuery,
  setSearchQuery,
  onOpenProductDetails,
  onViewAllInCatalog,
  onOpenQueryModal
}) => {
  const { cartCount, setIsCartOpen, cartPulse } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'dogs', label: 'Dogs', filterPet: 'dog' },
    { id: 'cats', label: 'Cats', filterPet: 'cat' },
    { id: 'food', label: 'Food & Nutrition', categoryId: 'food' },
    { id: 'treats', label: 'Treats', categoryId: 'treats' },
    { id: 'medicines', label: 'Wellness & Care', categoryId: 'medicines' },
    { id: 'contact', label: 'Contact & Orders' },
  ];

  const handleNavClick = (link) => {
    setActiveTab(link.id);
    if (link.filterPet) {
      setPetFilter(link.filterPet);
    } else if (link.id === 'home') {
      setPetFilter('all');
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-ivory-border transition-editorial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Brand Logo */}
            <div
              onClick={() => {
                setActiveTab('home');
                setPetFilter('all');
              }}
              className="cursor-pointer"
            >
              <BrandLogo />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link)}
                    className={`text-sm font-medium transition-editorial py-1 relative ${
                      isActive
                        ? 'text-forest-700 font-semibold'
                        : 'text-charcoal-muted hover:text-charcoal'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest-700 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Controls: Pet Switcher, Search Button, Cart, Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Subtle Pet Switcher Segmented Control */}
              <div className="hidden sm:inline-flex items-center bg-ivory-muted/70 p-1 rounded-full border border-ivory-border">
                <button
                  onClick={() => setPetFilter('all')}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-editorial ${
                    petFilter === 'all'
                      ? 'bg-ivory text-forest-800 shadow-sm'
                      : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setPetFilter('dog')}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-editorial ${
                    petFilter === 'dog'
                      ? 'bg-forest-700 text-ivory shadow-sm'
                      : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  Dogs
                </button>
                <button
                  onClick={() => setPetFilter('cat')}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-editorial ${
                    petFilter === 'cat'
                      ? 'bg-forest-700 text-ivory shadow-sm'
                      : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  Cats
                </button>
              </div>

              {/* Fixed-Size Search Trigger Icon Button (Never expands or shifts header layout) */}
              <button
                onClick={() => setIsSearchPanelOpen(!isSearchPanelOpen)}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-editorial ${
                  isSearchPanelOpen
                    ? 'bg-forest-50 border-forest-300 text-forest-800'
                    : 'bg-ivory-subtle border-ivory-border text-charcoal-muted hover:bg-ivory-muted/70 hover:text-charcoal'
                }`}
                aria-label="Open search panel"
                aria-expanded={isSearchPanelOpen}
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Cart Trigger with Smooth Single Scale Pulse */}
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2.5 rounded-full bg-ivory-subtle hover:bg-ivory-muted/70 text-charcoal border border-ivory-border transition-editorial select-none flex items-center justify-center ${
                  cartPulse ? 'animate-cart-pulse' : ''
                }`}
                aria-label={`Shopping bag with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5 text-charcoal-soft" />
                {cartCount > 0 && (
                  <span
                    className={`absolute -top-1 -right-1 bg-forest-700 text-ivory font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-sm ${
                      cartPulse ? 'scale-110' : ''
                    }`}
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-charcoal rounded-lg hover:bg-ivory-subtle border border-transparent hover:border-ivory-border transition-colors"
                aria-label="Open mobile navigation"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Detached Search Panel Overlay positioned below the header */}
      <SearchPanel
        isOpen={isSearchPanelOpen}
        onClose={() => setIsSearchPanelOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        products={PRODUCTS}
        onOpenProductDetails={onOpenProductDetails}
        onViewAllInCatalog={() => {
          if (onViewAllInCatalog) onViewAllInCatalog();
        }}
      />

      {/* Mobile Side Drawer Navigation */}
      <MobileNavDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeTab={activeTab}
        handleNavClick={handleNavClick}
        petFilter={petFilter}
        setPetFilter={setPetFilter}
        onOpenQueryModal={onOpenQueryModal}
      />
    </>
  );
};
