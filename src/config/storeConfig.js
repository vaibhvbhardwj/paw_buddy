/**
 * paw Buddy - Store Configuration & Business Settings
 * 
 * Update your official business WhatsApp number, contact information,
 * and service policies here.
 */

export const STORE_CONFIG = {
  storeName: 'paw Buddy',
  tagline: 'Artisan Pet Nutrition, Treats & Care for Dogs & Cats',
  
  // Business WhatsApp number in international format without '+' or spaces.
  // Example for India: 919876543210 (country code 91 + 10-digit number)
  // Current: Development placeholder
  whatsappNumber: '919876543210',
  isPlaceholderNumber: true, // Set to false when official business number is connected
  
  contactPhone: '+91 98765 43210',
  contactEmail: 'care@pawbuddy.store',
  address: 'Indiranagar 100ft Road, Bengaluru, Karnataka 560038',
  serviceArea: 'Express doorstep pet delivery across Bengaluru & Pan-India courier for dry supplies',
  businessHours: 'Monday – Sunday: 8:30 AM – 9:30 PM IST',
  
  // Free delivery threshold in INR
  freeDeliveryThreshold: 499,
  estimatedDeliveryTime: 'Same-day or next-morning dispatch',
  
  // Announcement banner messages
  announcements: [
    'Complimentary doorstep delivery on all orders above ₹499',
    'Personal WhatsApp confirmation with our pet care specialists',
    'Fresh small-batch slow-baked recipes and vet-guided wellness',
    'Prompt doorstep dispatch across Bengaluru and pan-India courier'
  ],

  // Social & community links (placeholders)
  socialLinks: {
    instagram: 'https://instagram.com/pawbuddy.store',
    facebook: 'https://facebook.com/pawbuddystore',
    whatsappCommunity: 'https://chat.whatsapp.com/sample'
  }
};
