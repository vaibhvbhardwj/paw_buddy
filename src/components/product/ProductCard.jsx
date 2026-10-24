import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Star, Plus, Check, Eye } from 'lucide-react';

export const ProductCard = ({ product, onOpenDetails }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants ? product.variants[0] : null
  );
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const originalPrice = product.originalPrice;
  const discountPercent = originalPrice
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : null;

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1400);
  };

  return (
    <div
      onClick={() => onOpenDetails(product)}
      className="bg-ivory border border-ivory-border rounded-2xl overflow-hidden shadow-soft card-lift cursor-pointer flex flex-col justify-between group"
    >
      {/* Top Image Container with Subtle Quick View Affordance */}
      <div className="relative aspect-[4/3] bg-ivory-subtle overflow-hidden">
        
        {/* Badges (Max two as requested) */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isBestseller && (
            <span className="bg-ivory/95 backdrop-blur-sm text-clay-700 border border-clay-200 text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs">
              Bestseller
            </span>
          )}
          {product.isMedicine && (
            <span className="bg-ivory/95 backdrop-blur-sm text-forest-700 border border-forest-200 text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs">
              Vet Approved
            </span>
          )}
          {!product.isBestseller && !product.isMedicine && discountPercent && discountPercent > 0 && (
            <span className="bg-ivory/95 backdrop-blur-sm text-charcoal border border-ivory-border text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs">
              Save {discountPercent}%
            </span>
          )}
        </div>

        {/* Pet Type Tag on Top Right */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-muted bg-ivory/90 backdrop-blur-sm px-2 py-0.5 rounded-full border border-ivory-border">
            {product.petType === 'both' ? 'Dogs & Cats' : product.petType === 'dog' ? 'Dog' : 'Cat'}
          </span>
        </div>

        {/* Main Product Image with subtle 1.02 scale on hover */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />

        {/* Quick View Button overlay on hover */}
        <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(product);
            }}
            className="px-3.5 py-2 rounded-full bg-ivory/95 backdrop-blur-sm text-charcoal text-xs font-semibold shadow-md border border-ivory-border flex items-center gap-1.5 hover:bg-ivory transition-transform hover:scale-105"
          >
            <Eye className="w-3.5 h-3.5 text-charcoal-muted" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Rating */}
          <div className="flex items-center justify-between text-xs text-charcoal-muted mb-1.5">
            <span className="uppercase tracking-wider font-semibold text-[11px] text-charcoal-light">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-charcoal-soft">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-xs">{product.rating || '4.9'}</span>
              <span className="text-charcoal-light text-[11px]">({product.reviewsCount || 24})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-display text-base font-semibold text-charcoal leading-snug mb-1.5 group-hover:text-forest-700 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed mb-3 font-normal">
            {product.description}
          </p>

          {/* Simplified Variant Selector Pills */}
          {product.variants && product.variants.length > 1 && (
            <div className="flex flex-wrap gap-1.5 mb-3.5">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVariant(v);
                  }}
                  className={`text-[11px] font-medium px-2 py-0.5 rounded-md border transition-editorial ${
                    selectedVariant?.id === v.id
                      ? 'bg-forest-50 border-forest-300 text-forest-800 font-semibold'
                      : 'bg-ivory border-ivory-border text-charcoal-muted hover:border-charcoal-light'
                  }`}
                >
                  {v.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Pricing and Polished Compact Add Button */}
        <div className="pt-3 border-t border-ivory-border flex items-center justify-between mt-auto">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-lg font-bold text-charcoal">
                ₹{currentPrice}
              </span>
              {originalPrice && originalPrice > currentPrice && (
                <span className="text-xs text-charcoal-light line-through">
                  ₹{originalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] text-charcoal-light block">
              Inclusive of taxes
            </span>
          </div>

          <button
            onClick={handleQuickAdd}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-editorial ${
              isAddedRecently
                ? 'bg-forest-700 text-ivory'
                : 'bg-forest-700 hover:bg-forest-800 text-ivory shadow-xs'
            }`}
            aria-label={`Add ${product.name} to bag`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
