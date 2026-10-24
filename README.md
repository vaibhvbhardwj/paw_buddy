# paw Buddy — Premium Pet Nutrition & Wellness Storefront

A refined, editorial e-commerce storefront for **paw Buddy**, crafted for a calm, trustworthy, and modern pet-care shopping experience. Built with **React 19 + Vite + Tailwind CSS**, featuring a warm natural palette, generous whitespace, clean hierarchy, Lucide iconography, scroll reveal animations, and a frictionless **Direct WhatsApp Ordering Flow**.

---

## ✨ System Architecture & Key Upgrades

1. **🌿 Premium Motion System & Scroll Reveals**
   - **Scroll Reveals (`useScrollReveal` & `<Reveal>`):** Hero headlines, copy, CTAs, category tiles, product grids, promo banners, and reviews enter smoothly via native `IntersectionObserver` with 60–90ms stagger (`translateY(16px) → 0`, `opacity: 0 → 1`, cubic-bezier easing). Animations trigger once and never replay repeatedly when scrolling back and forth.
   - **Interaction Design:** Product cards lift 3–4px (`card-lift`), product images scale to 1.02 on hover, and adding an item triggers a single non-looping scale pulse on the cart count indicator.
   - **Accessibility:** Full respect for `prefers-reduced-motion: reduce` across keyframes and transitions.

2. **🔍 Detached Floating Search Panel (Zero Header Layout Shift)**
   - Search trigger is a fixed-size icon button that never changes header width or pushes navigation items.
   - Separate floating panel overlays cleanly beneath the header (`top-20`) with popular suggestion pills (*"Grain-Free Kibble"*, *"Freeze-Dried Chicken"*, *"Hip & Joint"*), live matching product previews, result count, and keyboard `Escape` dismissal.

3. **📱 Slide-In Mobile Navigation Drawer**
   - Replaced vertical accordion that pushed content down with a 320px fixed slide-in side drawer.
   - Covers viewport top-to-bottom with a soft backdrop blur and body scroll lock.
   - Includes pet category switcher, navigation links, and direct WhatsApp contact action.

4. **💬 Direct WhatsApp Ordering Flow (Zero Fake Payment Gateways)**
   - Cart is persisted in `localStorage`.
   - Serializes cart items, variant names, quantities, unit prices, line totals, subtotal, delivery calculation, and optional customer delivery notes into an encoded `wa.me` URL.
   - Direct human order confirmation by pet care specialists.

5. **📜 Comprehensive Legal & Business Policy Suite**
   - Complete starter policy pages accessible from footer and direct URL hashes (`#privacy-policy`, `#terms-and-conditions`, `#shipping-and-delivery`, `#returns-and-refunds`, `#customer-support`, `#wellness-disclaimer`).
   - Clearly marked configuration placeholders: `[Legal Business Name]`, `[Business Address]`, `[Support Email]`, `[WhatsApp Number]`, `[Effective Date]`.
   - Essential veterinary guidance disclaimer explicitly noting product information does not replace clinical veterinary advice.

6. **🚀 Deployment & Production Readiness**
   - **Netlify Configuration:** `netlify.toml` with build commands, SPA fallback routing (`/* -> /index.html 200`), security headers (`X-Frame-Options`, `CSP`, `Referrer-Policy`), and immutable asset caching.
   - **SEO & Discoverability:** Rich Open Graph tags, Twitter Cards, Web Manifest (`site.webmanifest`), `robots.txt`, XML sitemap (`sitemap.xml`), and schema.org JSON-LD structured data (`Organization`, `WebSite`, `Store`, `ItemList`).

---

## 🏃 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18+) and npm installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## ⚙️ Configuration Placeholders Reference

Before final production launch, replace these business placeholders with your verified details:

| File Location | Placeholder | Description |
|---|---|---|
| `src/config/storeConfig.js` | `whatsappNumber` | Official 10-digit WhatsApp business number with country code (e.g. `919876543210`) |
| `src/config/storeConfig.js` | `contactPhone` | Customer service helpline number |
| `src/config/storeConfig.js` | `contactEmail` | Official care email (e.g. `care@pawbuddy.store`) |
| `src/config/storeConfig.js` | `address` | Dispatch warehouse or store address in Bengaluru |
| `src/data/legalPolicies.js` | `[Legal Business Name]` | Registered legal entity name (e.g. Paw Buddy Pet Care Pvt. Ltd.) |
| `src/data/legalPolicies.js` | `[Business Address]` | Registered corporate office address |
| `src/data/legalPolicies.js` | `[Effective Date]` | Official policy effective date |
| `index.html` & `public/robots.txt` & `public/sitemap.xml` | `https://pawbuddy.store` | Live production custom domain |

---

## 🛠️ Tech Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS + Custom Motion & Card Utilities
- **Typography:** Google Fonts (*Plus Jakarta Sans*)
- **Icons:** Lucide React
- **Deployment:** Netlify Ready (`netlify.toml` SPA redirects & headers)
- **State Management:** React Context API + LocalStorage Cart Persistence
