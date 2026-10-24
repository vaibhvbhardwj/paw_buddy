import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { PRODUCTS } from './data/products';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { CategoryTiles } from './components/home/CategoryTiles';
import { ProductGrid } from './components/product/ProductGrid';
import { PromoBanner } from './components/home/PromoBanner';
import { TrustHighlights } from './components/home/TrustHighlights';
import { ReviewsSection } from './components/home/ReviewsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { ProductDetailsModal } from './components/product/ProductDetailsModal';
import { CustomerDetailsModal } from './components/common/CustomerDetailsModal';
import { Toast } from './components/common/Toast';
import { LegalPolicyView } from './components/legal/LegalPolicyView';

export function PawBuddyApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [petFilter, setPetFilter] = useState('all');
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [activePolicyId, setActivePolicyId] = useState(null);
  const [queryModalConfig, setQueryModalConfig] = useState({ isOpen: false, initialQuery: '' });

  // Check URL hash on initial load and handle direct navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const validPolicies = [
        'privacy-policy',
        'terms-and-conditions',
        'shipping-and-delivery',
        'returns-and-refunds',
        'customer-support',
        'wellness-disclaimer'
      ];
      if (validPolicies.includes(hash)) {
        setActivePolicyId(hash);
      } else if (hash === 'catalog') {
        scrollToCatalog();
      } else if (hash === 'contact') {
        const el = document.getElementById('contact-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Filter pet type and smoothly jump to catalog
  const handleFilterPet = (pet) => {
    setActivePolicyId(null);
    setPetFilter(pet);
    setActiveTab(pet === 'dog' ? 'dogs' : 'cats');
    setActiveCategoryId('all');
    scrollToCatalog();
  };

  // Select category and scroll to catalog
  const handleSelectCategory = (categoryId, pet = 'both') => {
    setActivePolicyId(null);
    setActiveCategoryId(categoryId);
    if (pet !== 'both') {
      setPetFilter(pet);
    }
    setActiveTab('catalog');
    scrollToCatalog();
  };

  const scrollToCatalog = () => {
    setTimeout(() => {
      const el = document.getElementById('catalog-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleOpenProductDetails = (product) => {
    setSelectedProduct(product);
    setIsDetailsOpen(true);
  };

  const handleCloseProductDetails = () => {
    setIsDetailsOpen(false);
    setSelectedProduct(null);
  };

  // Tab switching from navigation links or footer
  const handleNavigate = (tab) => {
    setActivePolicyId(null);
    setActiveTab(tab);
    if (tab === 'dogs') {
      setPetFilter('dog');
      setActiveCategoryId('all');
      scrollToCatalog();
    } else if (tab === 'cats') {
      setPetFilter('cat');
      setActiveCategoryId('all');
      scrollToCatalog();
    } else if (tab === 'food') {
      setActiveCategoryId('food');
      scrollToCatalog();
    } else if (tab === 'medicines') {
      setActiveCategoryId('medicines');
      scrollToCatalog();
    } else if (tab === 'treats') {
      setActiveCategoryId('treats');
      scrollToCatalog();
    } else if (tab === 'contact') {
      const el = document.getElementById('contact-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tab === 'home') {
      setPetFilter('all');
      setActiveCategoryId('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenPolicy = (policyKey) => {
    setActivePolicyId(policyKey);
    window.location.hash = policyKey;
  };

  const handleBackToStore = () => {
    setActivePolicyId(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQueryModal = (initialQuery = '') => {
    setQueryModalConfig({ isOpen: true, initialQuery });
  };

  const handleCloseQueryModal = () => {
    setQueryModalConfig({ isOpen: false, initialQuery: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal selection:bg-forest-100 selection:text-forest-900">
      {/* 1. Global Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Streamlined Sticky Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        petFilter={petFilter}
        setPetFilter={setPetFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenProductDetails={handleOpenProductDetails}
        onViewAllInCatalog={scrollToCatalog}
        onOpenQueryModal={handleOpenQueryModal}
      />

      {/* 3. Main Experience / Policy View */}
      <main className="flex-1">
        {activePolicyId ? (
          <LegalPolicyView
            policyId={activePolicyId}
            onSelectPolicy={handleOpenPolicy}
            onBackToStore={handleBackToStore}
          />
        ) : (
          <>
            {/* Hero Section */}
            {activeTab === 'home' && (
              <>
                <Hero onFilterPet={handleFilterPet} />

                <CategoryTiles
                  onSelectCategory={handleSelectCategory}
                  activeCategoryId={activeCategoryId}
                />
              </>
            )}

            {/* Product Catalog Grid (Preserved full interactivity, search & filters) */}
            <ProductGrid
              products={PRODUCTS}
              onOpenDetails={handleOpenProductDetails}
              activeCategoryId={activeCategoryId}
              setActiveCategoryId={setActiveCategoryId}
              petFilter={petFilter}
              setPetFilter={setPetFilter}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            {/* Brand Philosophy Editorial Block */}
            <PromoBanner onShopNow={() => handleSelectCategory('all')} />

            {/* Restrained Trust Standards */}
            <TrustHighlights />

            {/* Customer Experience Stories */}
            <ReviewsSection />

            {/* Contact & Orders Section */}
            <ContactSection />
          </>
        )}
      </main>

      {/* 4. Structured Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPolicy={handleOpenPolicy}
        onOpenQueryModal={handleOpenQueryModal}
      />

      {/* 5. Drawers, Modals & Floating Overlays */}
      <CartDrawer />

      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isDetailsOpen}
        onClose={handleCloseProductDetails}
      />

      {/* Direct Query Modal for Navigation / Footer WhatsApp Triggers */}
      <CustomerDetailsModal
        isOpen={queryModalConfig.isOpen}
        onClose={handleCloseQueryModal}
        mode="query"
        initialQuery={queryModalConfig.initialQuery}
      />

      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <PawBuddyApp />
    </CartProvider>
  );
}
