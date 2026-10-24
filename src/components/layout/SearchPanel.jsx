import React, { useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

export const SearchPanel = ({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  products = [],
  onOpenProductDetails,
  onViewAllInCatalog
}) => {
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Close on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter matching preview products (up to 4)
  const query = searchQuery.trim().toLowerCase();
  const matchingProducts = query
    ? products.filter((p) => {
        return (
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          (p.tags && p.tags.some((t) => t.toLowerCase().includes(query)))
        );
      })
    : [];

  const popularSearches = [
    'Grain-Free Kibble',
    'Freeze-Dried Chicken',
    'Salmon Pate',
    'Hip & Joint',
    'Probiotics',
    'Organic Catnip',
  ];

  return (
    <>
      {/* Semi-transparent Backdrop positioned below the sticky header (top-20 = 80px) */}
      <div
        onClick={onClose}
        className="fixed inset-0 top-20 bg-charcoal/25 backdrop-blur-xs z-30 transition-opacity animate-fade-in"
      />

      {/* Detached Floating Search Panel */}
      <div className="fixed top-20 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div
          ref={panelRef}
          className="max-w-4xl mx-auto mt-3 bg-ivory rounded-2xl border border-ivory-border shadow-modal p-5 sm:p-6 pointer-events-auto animate-search-dropdown"
        >
          {/* Main Search Input Row */}
          <div className="flex items-center gap-3 pb-4 border-b border-ivory-border">
            <Search className="w-5 h-5 text-forest-700 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search food, treats, remedies, or ingredients..."
              className="w-full bg-transparent text-sm sm:text-base font-medium text-charcoal placeholder:text-charcoal-light focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs font-semibold text-charcoal-light hover:text-charcoal px-2 py-1 rounded hover:bg-ivory-subtle transition-colors"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-charcoal-light hover:text-charcoal hover:bg-ivory-subtle transition-colors"
              aria-label="Close search panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Suggested / Popular Searches */}
          {!query && (
            <div className="pt-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-light block mb-2.5">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchQuery(term);
                    }}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-ivory-subtle hover:bg-forest-50 hover:text-forest-800 border border-ivory-border text-charcoal-muted transition-colors flex items-center gap-1.5"
                  >
                    <span>{term}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Live Matching Results Preview */}
          {query && (
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-charcoal-muted font-medium">
                <span>
                  Found <strong>{matchingProducts.length}</strong> matching item{matchingProducts.length !== 1 ? 's' : ''}
                </span>
                {matchingProducts.length > 0 && (
                  <button
                    onClick={() => {
                      onViewAllInCatalog();
                      onClose();
                    }}
                    className="text-forest-700 hover:text-forest-800 font-semibold flex items-center gap-1 hover:underline"
                  >
                    <span>View all in catalogue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {matchingProducts.length === 0 ? (
                <div className="py-6 text-center">
                  <p className="text-xs text-charcoal-muted">
                    No products matched "<span className="text-charcoal font-semibold">{searchQuery}</span>".
                  </p>
                  <p className="text-[11px] text-charcoal-light mt-1">
                    Try searching for ingredients like "salmon", "chicken", "chews", or "joint".
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 max-h-72 overflow-y-auto">
                  {matchingProducts.slice(0, 4).map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        onOpenProductDetails(p);
                        onClose();
                      }}
                      className="flex items-center gap-3 p-2.5 rounded-xl border border-ivory-border bg-ivory-subtle hover:bg-forest-50/60 hover:border-forest-200 transition-colors cursor-pointer group"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-12 h-12 rounded-lg object-cover border border-ivory-border shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-semibold text-charcoal truncate group-hover:text-forest-700 transition-colors">
                          {p.name}
                        </h4>
                        <div className="flex items-center justify-between text-[11px] text-charcoal-muted mt-0.5">
                          <span>{p.category}</span>
                          <span className="font-semibold text-charcoal">₹{p.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </>
  );
};
