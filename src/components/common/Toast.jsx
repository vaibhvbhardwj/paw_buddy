import React from 'react';
import { useCart } from '../../context/CartContext';
import { Check, ShoppingBag } from 'lucide-react';

export const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-up">
      <div className="bg-charcoal text-ivory px-4 py-3 rounded-xl shadow-lg border border-charcoal-soft/50 flex items-center gap-3 max-w-sm">
        <div className="w-7 h-7 rounded-lg bg-forest-700 text-ivory flex items-center justify-center shrink-0">
          <Check className="w-4 h-4 stroke-[2.5]" />
        </div>
        <p className="text-xs font-medium text-ivory/95 tracking-wide leading-snug">
          {toastMessage.message.replace(/🐾/g, '').trim()}
        </p>
      </div>
    </div>
  );
};
