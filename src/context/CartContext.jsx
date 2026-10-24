import React, { createContext, useContext, useState, useEffect } from 'react';
import { STORE_CONFIG } from '../config/storeConfig';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // 1. Initialize cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('paw_buddy_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error loading cart from localStorage', e);
      return [];
    }
  });

  // Cart Drawer open/close state
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Customer details for WhatsApp ordering
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
    notes: '',
    mapLocationUrl: ''
  });

  // Custom dev override for WhatsApp number (allows live testing in browser)
  const [activeWhatsappNumber, setActiveWhatsappNumber] = useState(STORE_CONFIG.whatsappNumber);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('paw_buddy_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error persisting cart to localStorage', e);
    }
  }, [cartItems]);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState(null);
  // Single-pulse scale trigger for cart badge
  const [cartPulse, setCartPulse] = useState(false);

  const triggerCartPulse = () => {
    setCartPulse(true);
    setTimeout(() => setCartPulse(false), 380);
  };

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage((prev) => (prev?.message === message ? null : prev));
    }, 3200);
  };

  // Add product with specific variant and quantity
  const addToCart = (product, selectedVariant = null, quantity = 1) => {
    const variant = selectedVariant || (product.variants && product.variants[0]) || {
      id: 'default',
      name: 'Standard',
      price: product.price
    };

    const cartItemId = `${product.id}-${variant.id}`;
    const unitPrice = variant.price || product.price;

    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === cartItemId);
      if (existingItemIndex > -1) {
        const updated = [...prevItems];
        updated[existingItemIndex] = {
          ...updated[existingItemIndex],
          quantity: updated[existingItemIndex].quantity + quantity
        };
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: cartItemId,
            productId: product.id,
            name: product.name,
            brand: product.brand,
            variantName: variant.name,
            variantId: variant.id,
            unitPrice: unitPrice,
            quantity: quantity,
            image: product.image,
            petType: product.petType,
            category: product.category,
            isMedicine: Boolean(product.isMedicine)
          }
        ];
      }
    });

    triggerCartPulse();
    showToast(`Added ${product.name} (${variant.name}) to bag`);
  };

  // Remove single item
  const removeFromCart = (cartItemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  // Update item quantity
  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  // Clear all items
  const clearCart = () => {
    setCartItems([]);
  };

  // Update customer fields
  const updateCustomerField = (field, value) => {
    setCustomerDetails((prev) => ({ ...prev, [field]: value }));
  };

  // Totals & Calculations
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  const freeDeliveryThreshold = STORE_CONFIG.freeDeliveryThreshold;
  const isFreeDelivery = subtotal >= freeDeliveryThreshold;
  const deliveryFee = subtotal === 0 ? 0 : (isFreeDelivery ? 0 : 70);
  const estimatedTotal = subtotal + deliveryFee;

  // WhatsApp Message Builder complying strictly with brief specifications:
  const buildWhatsAppMessage = () => {
    if (cartItems.length === 0) return '';

    const lines = [
      'Hello paw Buddy! I\'d like to place an order:',
      ''
    ];

    cartItems.forEach((item) => {
      const lineTotal = item.unitPrice * item.quantity;
      lines.push(
        `- Product: ${item.name} | Variant: ${item.variantName} | Qty: ${item.quantity} | Unit Price: ₹${item.unitPrice} | Line Total: ₹${lineTotal}`
      );
    });

    lines.push('');
    lines.push(`Subtotal: ₹${subtotal}`);
    if (deliveryFee > 0) {
      lines.push(`Estimated Delivery: ₹${deliveryFee}`);
    } else if (isFreeDelivery) {
      lines.push('Estimated Delivery: FREE (Order above ₹499)');
    }
    lines.push(`Estimated Total: ₹${estimatedTotal}`);
    lines.push('');

    // Customer details
    lines.push(`Name: ${customerDetails.name.trim() || '[Not specified]'}`);
    lines.push(`Delivery Address: ${customerDetails.address.trim() || '[Not specified]'}`);
    if (customerDetails.mapLocationUrl) {
      lines.push(`Exact Map Location: ${customerDetails.mapLocationUrl}`);
    }
    lines.push(`Order Notes: ${customerDetails.notes.trim() || '[None]'}`);
    lines.push('');
    lines.push('Please confirm availability, delivery charges, and the final order. Thank you!');

    return lines.join('\n');
  };

  // WhatsApp Order Submission URL
  const getWhatsAppUrl = () => {
    const rawMessage = buildWhatsAppMessage();
    const encoded = encodeURIComponent(rawMessage);
    const cleanNumber = activeWhatsappNumber.replace(/\D/g, '');
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        deliveryFee,
        estimatedTotal,
        isFreeDelivery,
        freeDeliveryThreshold,
        isCartOpen,
        setIsCartOpen,
        customerDetails,
        updateCustomerField,
        buildWhatsAppMessage,
        getWhatsAppUrl,
        activeWhatsappNumber,
        setActiveWhatsappNumber,
        toastMessage,
        showToast,
        cartPulse
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
