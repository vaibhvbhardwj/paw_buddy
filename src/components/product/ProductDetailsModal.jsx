import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, Check, Star, AlertCircle, ShieldCheck, ShoppingBag } from 'lucide-react';

export const ProductDetailsModal = ({ product, isOpen, onClose }) => {
  const dialogRef = useRef(null);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [addedJustNow, setAddedJustNow] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants ? product.variants[0] : null);
      setQuantity(1);
      setActiveImageIndex(0);
      setAddedJustNow(false);
    }
  }, [product]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && product) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }

    // Modern Web Guidance fallback for light-dismiss if closedby is unsupported
    const handleBackdropClick = (event) => {
      if (event.target === dialog) {
        const rect = dialog.getBoundingClientRect();
        const isContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (!isContent) {
          onClose();
        }
      }
    };

    dialog.addEventListener('click', handleBackdropClick);
    return () => dialog.removeEventListener('click', handleBackdropClick);
  }, [isOpen, product, onClose]);

  if (!product) return null;

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const originalPrice = product.originalPrice;
  const discountPercent = originalPrice
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : null;

  const imagesList = product.images || [product.image];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAddedJustNow(true);
    setTimeout(() => {
      setAddedJustNow(false);
    }, 1800);
  };

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      onClose={onClose}
      className="p-0 bg-transparent max-w-3xl w-[94vw] max-h-[90vh] rounded-2xl overflow-hidden shadow-modal backdrop:bg-charcoal/40 backdrop:backdrop-blur-sm"
      aria-labelledby="productDetailTitle"
    >
      <div className="bg-ivory border border-ivory-border overflow-y-auto max-h-[88vh] p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-ivory-subtle hover:bg-ivory-muted text-charcoal border border-ivory-border transition-editorial"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Visual Gallery */}
          <div>
            <div className="bg-ivory-subtle rounded-xl border border-ivory-border overflow-hidden mb-3 aspect-[4/3] flex items-center justify-center">
              <img
                src={imagesList[activeImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {imagesList.length > 1 && (
              <div className="flex gap-2">
                {imagesList.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-14 rounded-lg overflow-hidden border transition-all ${
                      activeImageIndex === idx
                        ? 'border-forest-700 ring-1 ring-forest-700'
                        : 'border-ivory-border opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quality Commitment Callout */}
            <div className="mt-5 p-3.5 bg-ivory-subtle rounded-xl border border-ivory-border text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-forest-800 font-semibold">
                <ShieldCheck className="w-4 h-4 text-forest-700" />
                <span>Small-Batch Artisan Promise</span>
              </div>
              <p className="text-charcoal-muted leading-relaxed text-[11px]">
                Packed with care in clean, protective packaging. Dispatched same-day across Bengaluru.
              </p>
            </div>
          </div>

          {/* Right Column: Details, Variants, Medicine Notice, Actions */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Pet Type & Brand */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-charcoal-light">
                  {product.brand}
                </span>

                <span className="text-[11px] font-semibold text-forest-800 bg-forest-50 px-2.5 py-0.5 rounded-full border border-forest-100">
                  {product.petType === 'both' ? 'Dogs & Cats' : product.petType === 'dog' ? 'Dog' : 'Cat'}
                </span>
              </div>

              {/* Title */}
              <h2
                id="productDetailTitle"
                className="font-display text-2xl sm:text-3xl font-bold text-charcoal leading-tight mb-2"
              >
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-xs text-charcoal">{product.rating || '4.9'}</span>
                <span className="text-xs text-charcoal-light">({product.reviewsCount || 24} reviews)</span>
              </div>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 mb-4 p-3 rounded-xl bg-ivory-subtle border border-ivory-border">
                <span className="font-display text-2xl font-bold text-charcoal">
                  ₹{currentPrice}
                </span>
                {originalPrice && originalPrice > currentPrice && (
                  <span className="text-xs text-charcoal-light line-through font-medium">
                    ₹{originalPrice}
                  </span>
                )}
                {discountPercent && (
                  <span className="text-[11px] font-semibold text-clay-700 bg-clay-50 px-2 py-0.5 rounded border border-clay-100">
                    Save {discountPercent}%
                  </span>
                )}
                <span className="text-xs text-forest-700 font-medium ml-auto">
                  In Stock
                </span>
              </div>

              {/* Medicine & Wellness Veterinary Advisory */}
              {product.isMedicine && (
                <div className="bg-stone-50 border border-stone-200 p-3.5 rounded-xl mb-4 text-xs text-charcoal-muted leading-relaxed">
                  <div className="flex items-center gap-1.5 text-stone-800 font-semibold mb-1">
                    <AlertCircle className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                    <span>Veterinary & Dietary Advisory</span>
                  </div>
                  <p className="text-[11px] text-stone-700">
                    {product.dosageDisclaimer ||
                      "General Pet Care Notice: Product information is provided for general guidance only. Always consult a licensed veterinarian for medical diagnosis, health conditions, and exact dosage recommendations. paw Buddy does not prescribe or guarantee medical treatments."}
                  </p>
                </div>
              )}

              {/* Description */}
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Key Features */}
              {product.keyFeatures && (
                <div className="mb-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-2">
                    Key Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {product.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-charcoal">
                        <Check className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Variant Selection */}
              {product.variants && product.variants.length > 0 && (
                <div className="mb-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-2">
                    Size / Packaging
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`p-2.5 text-left border rounded-xl transition-editorial ${
                          selectedVariant?.id === variant.id
                            ? 'bg-forest-50 border-forest-700 text-forest-900 font-semibold shadow-xs'
                            : 'bg-ivory border-ivory-border text-charcoal-muted hover:border-charcoal-light'
                        }`}
                      >
                        <p className="text-xs font-semibold leading-tight">{variant.name}</p>
                        <p className="text-[11px] text-charcoal-light mt-0.5">₹{variant.price}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity Stepper & Add to Cart */}
            <div className="pt-4 border-t border-ivory-border mt-4">
              <div className="flex items-center gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center bg-ivory-subtle border border-ivory-border rounded-xl p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-1.5 hover:bg-ivory text-charcoal transition-colors rounded-lg"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-semibold text-charcoal">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-1.5 hover:bg-ivory text-charcoal transition-colors rounded-lg"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart CTA */}
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-5 rounded-xl text-sm font-semibold transition-editorial flex items-center justify-center gap-2 shadow-soft ${
                    addedJustNow
                      ? 'bg-forest-800 text-ivory'
                      : 'bg-forest-700 hover:bg-forest-800 text-ivory'
                  }`}
                >
                  {addedJustNow ? (
                    <>
                      <Check className="w-4 h-4 stroke-[2.5]" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag · ₹{currentPrice * quantity}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] text-charcoal-light mt-2.5 font-normal">
                Complimentary delivery on orders above ₹499. Orders are confirmed via WhatsApp.
              </p>
            </div>

          </div>

        </div>

      </div>
    </dialog>
  );
};
