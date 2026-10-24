import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { CustomerDetailsModal } from '../common/CustomerDetailsModal';
import {
  ShoppingBag,
  MessageCircle,
  Truck,
  Plus,
  Minus,
  Trash2,
  X,
  AlertCircle,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    subtotal,
    deliveryFee,
    estimatedTotal,
    isFreeDelivery,
    freeDeliveryThreshold,
  } = useCart();

  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  if (!isCartOpen) return null;

  const freeDeliveryProgress = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));
  const amountRemainingForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);

  const handleOpenDetails = () => {
    if (cartItems.length === 0) return;
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      {/* Slide-out Drawer Panel (280ms cubic-bezier transition) */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-8">
        <div className="w-screen max-w-md bg-ivory border-l border-ivory-border shadow-drawer flex flex-col justify-between overflow-hidden animate-drawer-slide">
          
          {/* Header */}
          <div className="p-5 border-b border-ivory-border bg-ivory-subtle flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-forest-700 text-ivory flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-charcoal">
                  Your Pet Bag
                </h3>
                <p className="text-xs text-charcoal-muted">
                  {cartCount} item{cartCount !== 1 ? 's' : ''} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-charcoal-muted hover:text-charcoal hover:bg-ivory border border-transparent hover:border-ivory-border transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Delivery Goal Progress */}
          <div className="bg-forest-50/70 px-5 py-3 border-b border-forest-100 text-xs">
            {isFreeDelivery ? (
              <div className="flex items-center gap-1.5 text-forest-800 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                <span>You’ve unlocked complimentary delivery!</span>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center text-charcoal-muted font-medium mb-1.5">
                  <span>Add ₹{amountRemainingForFreeDelivery} more for free delivery</span>
                  <span className="font-semibold text-charcoal">{freeDeliveryProgress}%</span>
                </div>
                <div className="w-full bg-ivory h-1.5 rounded-full border border-forest-100 overflow-hidden">
                  <div
                    className="bg-forest-700 h-full transition-all duration-300"
                    style={{ width: `${freeDeliveryProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-ivory-border/60">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-12 h-12 rounded-full bg-ivory-subtle border border-ivory-border flex items-center justify-center mx-auto mb-3 text-charcoal-light">
                  <ShoppingBag className="w-5 h-5 stroke-[1.6]" />
                </div>
                <h4 className="font-display text-base font-bold text-charcoal mb-1">
                  Your bag is empty
                </h4>
                <p className="text-xs text-charcoal-muted max-w-xs mx-auto mb-5 leading-relaxed">
                  Discover small-batch recipes, natural chews, and botanicals for your companion.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-4 py-2 bg-forest-700 hover:bg-forest-800 text-ivory text-xs font-semibold rounded-lg shadow-xs transition-editorial"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex gap-3.5 items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl border border-ivory-border bg-ivory-subtle shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-semibold text-charcoal truncate">
                        {item.name}
                      </h5>
                      <p className="text-[11px] text-charcoal-muted mt-0.5">
                        {item.variantName}
                      </p>
                      <div className="mt-1.5 text-xs font-semibold text-charcoal">
                        ₹{item.unitPrice * item.quantity}
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-charcoal-light hover:text-red-700 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center bg-ivory-subtle border border-ivory-border rounded-lg text-xs">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-1.5 py-0.5 hover:bg-ivory text-charcoal transition-colors rounded-l-lg"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-1.5 py-0.5 hover:bg-ivory text-charcoal transition-colors rounded-r-lg"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer & Order Submission */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-ivory-border bg-ivory space-y-3.5 shadow-sm">
              {/* Order Calculations */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-charcoal-muted">
                  <span>Subtotal</span>
                  <span className="font-medium text-charcoal">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-charcoal-muted">
                  <span>Delivery</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-forest-700 font-semibold">Complimentary</span>
                    ) : (
                      <span className="font-medium text-charcoal">₹{deliveryFee}</span>
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-charcoal pt-2 border-t border-ivory-border">
                  <span>Estimated Total</span>
                  <span className="text-base text-forest-800">₹{estimatedTotal}</span>
                </div>
              </div>

              {/* Informative Helper Badge */}
              <div className="bg-forest-50/70 border border-forest-100 rounded-xl p-3 flex items-start gap-2.5 text-[11px] text-charcoal-muted leading-relaxed">
                <AlertCircle className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                <p>
                  No prepayment required. Your curated order opens directly in WhatsApp for personal stock confirmation and delivery coordination.
                </p>
              </div>

              {/* Main CTA: Opens Delivery Details Popup Screen */}
              <button
                onClick={handleOpenDetails}
                className="w-full py-3.5 px-4 rounded-xl bg-forest-700 hover:bg-forest-800 text-ivory text-sm font-semibold transition-editorial shadow-soft hover:shadow-card flex items-center justify-center gap-2 select-none"
              >
                <MessageCircle className="w-4 h-4 text-ivory shrink-0" />
                <span>Order via WhatsApp · ₹{estimatedTotal}</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-charcoal-light">
                <button
                  onClick={clearCart}
                  className="hover:text-red-700 transition-colors"
                >
                  Clear Bag
                </button>
                <span>Direct Human Fulfillment</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Mandatory Customer Details Popup Screen for WhatsApp Ordering */}
      <CustomerDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        mode="order"
        onSuccess={() => {
          setIsDetailsModalOpen(false);
          setIsCartOpen(false);
        }}
      />
    </div>
  );
};
