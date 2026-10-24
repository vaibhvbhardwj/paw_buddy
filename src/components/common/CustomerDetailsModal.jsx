import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { STORE_CONFIG } from '../../config/storeConfig';
import {
  X,
  MapPin,
  Navigation,
  MessageCircle,
  AlertCircle,
  CheckCircle,
  Loader2,
  FileText,
  User,
  ShoppingBag
} from 'lucide-react';

export const CustomerDetailsModal = ({
  isOpen,
  onClose,
  mode = 'order', // 'order' or 'query'
  initialQuery = '',
  onSuccess
}) => {
  const {
    customerDetails,
    updateCustomerField,
    cartItems,
    subtotal,
    deliveryFee,
    estimatedTotal,
    isFreeDelivery,
    activeWhatsappNumber
  } = useCart();

  const [name, setName] = useState(customerDetails.name || '');
  const [address, setAddress] = useState(customerDetails.address || '');
  const [notes, setNotes] = useState(customerDetails.notes || initialQuery || '');
  const [mapLocationUrl, setMapLocationUrl] = useState(customerDetails.mapLocationUrl || '');
  const [locationStatus, setLocationStatus] = useState('idle'); // 'idle' | 'detecting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Sync state when modal opens
  useEffect(() => {
    if (isOpen) {
      setName(customerDetails.name || '');
      setAddress(customerDetails.address || '');
      setNotes(initialQuery || customerDetails.notes || '');
      setMapLocationUrl(customerDetails.mapLocationUrl || '');
      setLocationStatus(customerDetails.mapLocationUrl ? 'success' : 'idle');
      setErrorMessage('');
    }
  }, [isOpen, customerDetails, initialQuery]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Auto-pickup location handler using browser Geolocation API + Nominatim Reverse Geocoding
  const handleAutoPickupLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('error');
      setErrorMessage('Geolocation is not supported by your browser.');
      return;
    }

    setLocationStatus('detecting');
    setErrorMessage('');

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        const googleMapsLink = `https://maps.google.com/?q=${latitude},${longitude}`;
        setMapLocationUrl(googleMapsLink);

        // Attempt reverse geocoding to human-readable address
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
            {
              headers: {
                'Accept-Language': 'en',
              },
            }
          );
          if (res.ok) {
            const data = await res.json();
            if (data && data.display_name) {
              // If user already typed something, don't completely overwrite if they had flat/house number
              const detectedAddr = data.display_name;
              setAddress((prev) => (prev.trim() ? `${prev.trim()} (${detectedAddr})` : detectedAddr));
            } else {
              setAddress((prev) => prev.trim() || `GPS: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
            }
          } else {
            setAddress((prev) => prev.trim() || `GPS: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
          }
        } catch (e) {
          // Fallback if offline/blocked
          setAddress((prev) => prev.trim() || `GPS: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
        }

        setLocationStatus('success');
      },
      (err) => {
        setLocationStatus('error');
        if (err.code === 1) {
          setErrorMessage('Location permission denied. Please enter your address manually.');
        } else if (err.code === 2) {
          setErrorMessage('Position unavailable. Please enter your address manually.');
        } else {
          setErrorMessage('Location request timed out. Please enter address manually.');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 30000,
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In order mode: Address is COMPULSORY
    if (mode === 'order') {
      if (!address.trim()) {
        setErrorMessage('Delivery address is required so we can calculate dispatch timing.');
        return;
      }
    }

    // Save to context
    updateCustomerField('name', name);
    updateCustomerField('address', address);
    updateCustomerField('notes', notes);
    updateCustomerField('mapLocationUrl', mapLocationUrl);

    const cleanNumber = activeWhatsappNumber.replace(/\D/g, '');

    if (mode === 'order') {
      // Build order WhatsApp message
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

      lines.push(`Name: ${name.trim() || '[Not specified]'}`);
      lines.push(`Delivery Address: ${address.trim()}`);
      if (mapLocationUrl) {
        lines.push(`Exact Map Location: ${mapLocationUrl}`);
      }
      lines.push(`Order Notes: ${notes.trim() || '[None]'}`);
      lines.push('');
      lines.push('Please confirm availability, delivery charges, and the final order. Thank you!');

      const fullMessage = lines.join('\n');
      const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(fullMessage)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Build inquiry / query WhatsApp message
      const lines = [
        'Hello paw Buddy team! I have an inquiry:',
        '',
        `Message: ${notes.trim() || initialQuery.trim() || 'I have a question about pet food and supplies.'}`,
        '',
        `Name: ${name.trim() || '[Not specified]'}`
      ];

      if (address.trim()) {
        lines.push(`Location / Area: ${address.trim()}`);
      }
      if (mapLocationUrl) {
        lines.push(`Map Pin: ${mapLocationUrl}`);
      }

      lines.push('');
      lines.push('Looking forward to your guidance. Thank you!');

      const fullMessage = lines.join('\n');
      const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(fullMessage)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }

    if (onSuccess) onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-charcoal/45 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-ivory p-6 sm:p-8 text-left shadow-modal border border-ivory-border transition-all animate-fade-up my-8">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-charcoal-muted hover:text-charcoal hover:bg-ivory-subtle border border-ivory-border transition-colors"
            aria-label="Close details popup"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="flex items-start gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
              {mode === 'order' ? (
                <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              ) : (
                <MessageCircle className="w-5 h-5 stroke-[1.8]" />
              )}
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-forest-700 block">
                {mode === 'order' ? 'Delivery Coordination' : 'Direct Pet Care Support'}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal leading-tight">
                {mode === 'order' ? 'Where should we dispatch your order?' : 'Share details for your inquiry'}
              </h3>
            </div>
          </div>

          {/* Order Summary Pill in Order Mode */}
          {mode === 'order' && (
            <div className="mb-5 p-3 rounded-xl bg-forest-50/70 border border-forest-100 flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-charcoal">
                  {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in bag
                </span>
                <span className="text-charcoal-muted block text-[11px]">
                  {isFreeDelivery ? 'Free doorstep delivery unlocked' : `₹${deliveryFee} delivery charge`}
                </span>
              </div>
              <span className="font-display text-base font-bold text-forest-800">
                ₹{estimatedTotal}
              </span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Customer / Pet Parent Name */}
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1">
                Your Name / Companion Name:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Vaibhav & Milo"
                  className="w-full bg-ivory-subtle border border-ivory-border rounded-xl px-3.5 py-2.5 text-xs text-charcoal placeholder:text-charcoal-light focus:outline-none focus:border-forest-700 transition-colors"
                />
                <User className="w-3.5 h-3.5 text-charcoal-light absolute right-3.5 top-3" />
              </div>
            </div>

            {/* Address Field with Auto-Pickup Location Button */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-charcoal">
                  {mode === 'order' ? (
                    <span>
                      Delivery Address <strong className="text-red-600">* (Compulsory)</strong>
                    </span>
                  ) : (
                    <span>Delivery Area / City (Optional)</span>
                  )}
                </label>

                {/* Auto Pickup Location Action */}
                <button
                  type="button"
                  onClick={handleAutoPickupLocation}
                  disabled={locationStatus === 'detecting'}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-forest-700 hover:text-forest-800 bg-forest-50 hover:bg-forest-100 border border-forest-200 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  title="Detect GPS coordinates to add exact Google Maps pin"
                >
                  {locationStatus === 'detecting' ? (
                    <>
                      <Loader2 className="w-3 h-3 animate-spin text-forest-700" />
                      <span>Detecting...</span>
                    </>
                  ) : locationStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>GPS Attached</span>
                    </>
                  ) : (
                    <>
                      <Navigation className="w-3 h-3 text-forest-700" />
                      <span>Auto-detect GPS Location</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative">
                <textarea
                  rows={2}
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  placeholder={
                    mode === 'order'
                      ? 'e.g. Flat 302, Palm Grove, 100ft Road, Indiranagar, Bengaluru 560038'
                      : 'e.g. Indiranagar, Bengaluru'
                  }
                  required={mode === 'order'}
                  className={`w-full bg-ivory-subtle border rounded-xl px-3.5 py-2.5 text-xs text-charcoal placeholder:text-charcoal-light focus:outline-none transition-colors resize-none leading-relaxed ${
                    errorMessage && !address.trim() && mode === 'order'
                      ? 'border-red-400 focus:border-red-600'
                      : 'border-ivory-border focus:border-forest-700'
                  }`}
                />
              </div>

              {/* GPS Detected Confirmation or Error Notice */}
              {mapLocationUrl && locationStatus === 'success' && (
                <div className="mt-1 flex items-center justify-between text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                  <span className="flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>Exact Map Location Attached:</span>
                    <a
                      href={mapLocationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-mono truncate max-w-[180px]"
                    >
                      {mapLocationUrl}
                    </a>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setMapLocationUrl('');
                      setLocationStatus('idle');
                    }}
                    className="text-charcoal-muted hover:text-red-700 ml-2"
                  >
                    Remove
                  </button>
                </div>
              )}

              {errorMessage && (
                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>

            {/* Notes / Query Input */}
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1">
                {mode === 'order' ? 'Dietary / Delivery Notes (Optional):' : 'Your Message / Inquiry:'}
              </label>
              <textarea
                rows={mode === 'order' ? 2 : 3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={
                  mode === 'order'
                    ? 'e.g. Puppy is 4 months old, ring bell once.'
                    : 'e.g. Hi Paw Buddy, I would like to know if the salmon pate is suitable for sensitive stomach indoor cats...'
                }
                className="w-full bg-ivory-subtle border border-ivory-border rounded-xl px-3.5 py-2.5 text-xs text-charcoal placeholder:text-charcoal-light focus:outline-none focus:border-forest-700 transition-colors resize-none leading-relaxed"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-forest-700 hover:bg-forest-800 text-ivory text-xs font-semibold transition-editorial shadow-soft flex items-center justify-center gap-2 select-none"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {mode === 'order'
                    ? `Confirm & Send Order to WhatsApp · ₹${estimatedTotal}`
                    : 'Open WhatsApp Conversation'}
                </span>
              </button>

              <p className="text-center text-[10px] text-charcoal-light mt-2 leading-relaxed">
                Direct WhatsApp confirmation with our care desk · No prepayment required
              </p>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};
