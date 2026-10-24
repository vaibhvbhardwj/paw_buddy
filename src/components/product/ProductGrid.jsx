import React, { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { CATEGORIES } from '../../data/products';
import { SlidersHorizontal, RotateCcw, Search, Sparkles, PackageX } from 'lucide-react';

export const ProductGrid = ({
  products,
  onOpenDetails,
  activeCategoryId,
  setActiveCategoryId,
  petFilter,
  setPetFilter,
  searchQuery,
  setSearchQuery,
}) => {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortOption, setSortOption] = useState('featured');
  const [maxPrice, setMaxPrice] = useState(3000);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Extract distinct brands from products
  const availableBrands = useMemo(() => {
    const brands = new Set(products.map((p) => p.brand));
    return ['all', ...Array.from(brands)];
  }, [products]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Pet type filter
        if (petFilter !== 'all' && product.petType !== 'both' && product.petType !== petFilter) {
          return false;
        }

        // Category filter
        if (activeCategoryId !== 'all') {
          if (activeCategoryId === 'food') {
            if (product.categoryId !== 'dog-food' && product.categoryId !== 'cat-food') return false;
          } else if (product.categoryId !== activeCategoryId) {
            return false;
          }
        }

        // Brand filter
        if (selectedBrand !== 'all' && product.brand !== selectedBrand) {
          return false;
        }

        // Max price filter
        const basePrice = product.variants ? product.variants[0].price : product.price;
        if (basePrice > maxPrice) {
          return false;
        }

        // Search text matching
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(query);
          const matchBrand = product.brand.toLowerCase().includes(query);
          const matchDesc = product.description.toLowerCase().includes(query);
          const matchCategory = product.category.toLowerCase().includes(query);
          const matchTags = product.tags
            ? product.tags.some((t) => t.toLowerCase().includes(query))
            : false;
          if (!matchName && !matchBrand && !matchDesc && !matchCategory && !matchTags) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        const priceA = a.variants ? a.variants[0].price : a.price;
        const priceB = b.variants ? b.variants[0].price : b.price;

        if (sortOption === 'price-low') {
          return priceA - priceB;
        }
        if (sortOption === 'price-high') {
          return priceB - priceA;
        }
        if (sortOption === 'rating') {
          return (b.rating || 5) - (a.rating || 5);
        }
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, petFilter, activeCategoryId, selectedBrand, maxPrice, searchQuery, sortOption]);

  const handleResetFilters = () => {
    setActiveCategoryId('all');
    setPetFilter('all');
    setSelectedBrand('all');
    setMaxPrice(3000);
    setSearchQuery('');
    setSortOption('featured');
  };

  const isFiltered =
    activeCategoryId !== 'all' ||
    petFilter !== 'all' ||
    selectedBrand !== 'all' ||
    maxPrice < 3000 ||
    searchQuery.trim() !== '';

  return (
    <section className="py-12 sm:py-16 bg-ivory" id="catalog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-ivory-border">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-forest-700">
                  Pantry & Apothecary
                </span>
                {isFiltered && (
                  <span className="bg-forest-50 text-forest-800 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-forest-100">
                    Filters Active
                  </span>
                )}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-charcoal">
                {activeCategoryId === 'all'
                  ? 'Curated Pantry & Remedies'
                  : CATEGORIES.find((c) => c.id === activeCategoryId)?.name || 'Store Catalog'}
              </h2>
            </div>

            {/* Quick Pet Switcher + Sort Options */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Pet Switcher Buttons */}
              <div className="inline-flex bg-ivory-muted/70 p-1 rounded-full border border-ivory-border text-xs font-semibold">
                <button
                  onClick={() => setPetFilter('all')}
                  className={`px-3 py-1 rounded-full transition-editorial ${
                    petFilter === 'all'
                      ? 'bg-ivory text-forest-800 shadow-sm'
                      : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  All Pets
                </button>
                <button
                  onClick={() => setPetFilter('dog')}
                  className={`px-3 py-1 rounded-full transition-editorial ${
                    petFilter === 'dog'
                      ? 'bg-forest-700 text-ivory shadow-sm'
                      : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  Dogs
                </button>
                <button
                  onClick={() => setPetFilter('cat')}
                  className={`px-3 py-1 rounded-full transition-editorial ${
                    petFilter === 'cat'
                      ? 'bg-forest-700 text-ivory shadow-sm'
                      : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  Cats
                </button>
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-2 bg-ivory-subtle border border-ivory-border rounded-lg px-3 py-1.5 shadow-xs">
                <span className="text-xs font-medium text-charcoal-muted hidden sm:inline">Sort:</span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-charcoal focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured Collection</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFiltersMobile(!showFiltersMobile)}
                className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 bg-ivory-subtle border border-ivory-border rounded-lg text-xs font-semibold text-charcoal shadow-xs"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
              </button>
            </div>
          </div>

        {/* Category Horizontal Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none border-b border-ivory-border/60">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`shrink-0 text-xs font-medium px-4 py-1.5 rounded-full border transition-editorial ${
                  isActive
                    ? 'bg-forest-700 text-ivory border-forest-700 shadow-sm font-semibold'
                    : 'bg-ivory text-charcoal-muted border-ivory-border hover:border-charcoal-light hover:text-charcoal'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Layout: Sidebar Filters + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
          
          {/* Filters Sidebar */}
          <aside className={`lg:block ${showFiltersMobile ? 'block' : 'hidden'} space-y-6`}>
            <div className="bg-ivory-subtle border border-ivory-border rounded-2xl p-5 shadow-soft">
              <div className="flex items-center justify-between pb-3 border-b border-ivory-border mb-5">
                <div className="flex items-center gap-2 text-sm font-bold text-charcoal">
                  <SlidersHorizontal className="w-4 h-4 text-forest-700" />
                  <span>Refine Selection</span>
                </div>
                {isFiltered && (
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center gap-1 text-xs font-medium text-clay-700 hover:text-clay-800"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </button>
                )}
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-2.5">
                  Brand
                </label>
                <div className="space-y-2">
                  {availableBrands.map((b) => (
                    <label
                      key={b}
                      className="flex items-center gap-2 text-xs font-medium text-charcoal cursor-pointer hover:text-forest-700"
                    >
                      <input
                        type="radio"
                        name="brandFilter"
                        checked={selectedBrand === b}
                        onChange={() => setSelectedBrand(b)}
                        className="accent-forest-700"
                      />
                      <span>{b === 'all' ? 'All Brands' : b}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Cap Slider */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-1.5 text-xs">
                  <span className="font-bold uppercase tracking-wider text-charcoal-muted">Price Range</span>
                  <span className="font-semibold text-charcoal">Up to ₹{maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3000"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-forest-700 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-charcoal-light font-mono mt-1">
                  <span>₹200</span>
                  <span>₹3000+</span>
                </div>
              </div>

              {/* Clean Veterinary Advisory Sidebar Callout */}
              <div className="p-3.5 rounded-xl bg-forest-50/70 border border-forest-100 text-xs text-charcoal-muted leading-relaxed">
                <div className="flex items-center gap-1.5 text-forest-800 font-semibold mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-forest-700" />
                  <span>Quality Assurance</span>
                </div>
                <p className="text-[11px]">
                  All formulations are slow-baked or single-origin. For clinical prescriptions, always consult your veterinarian.
                </p>
              </div>
            </div>
          </aside>

          {/* Product Items Grid */}
          <main className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              /* Empty State */
              <div className="bg-ivory-subtle border border-ivory-border rounded-2xl p-12 text-center shadow-soft my-6">
                <div className="w-14 h-14 bg-forest-50 rounded-full flex items-center justify-center mx-auto mb-3.5 text-forest-700">
                  <PackageX className="w-6 h-6 stroke-[1.7]" />
                </div>
                <h3 className="font-display text-lg font-bold text-charcoal mb-1">
                  No products found
                </h3>
                <p className="text-xs text-charcoal-muted max-w-sm mx-auto mb-5 leading-relaxed">
                  No items match your active filters or search terms. Try clearing your filters to view our full collection.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-forest-700 hover:bg-forest-800 text-ivory text-xs font-semibold rounded-lg shadow-xs transition-editorial"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-charcoal-muted mb-4 px-1">
                  <span>
                    Showing <strong className="text-charcoal font-semibold">{filteredProducts.length}</strong> products
                  </span>
                  <span className="hidden sm:inline">WhatsApp order confirmation</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onOpenDetails={onOpenDetails}
                    />
                  ))}
                </div>
              </>
            )}
          </main>

        </div>

      </div>
    </section>
  );
};
