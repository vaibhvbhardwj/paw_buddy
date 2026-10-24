# paw Buddy — Website Build Brief for Codex

## Project Overview
Build a polished, responsive e-commerce-style website for **paw Buddy**, a store selling food, treats, accessories, and medicines for dogs and cats.

Use **https://stores.zigly.com/** as a design and user-experience reference for a modern pet-care shopping experience. Treat it as inspiration only: do not copy its branding, text, assets, or exact layout. Create a distinct paw Buddy identity.

**Most important requirement:** customers must be able to build an order on the website and place it by sending the complete order to the business through **WhatsApp**. Do not implement a pawment gateway or pretend that an order is confirmed before the business confirms it on WhatsApp.

## Instructions for Codex
1. First inspect the existing repository, framework, installed packages, and project structure.
2. If a working project already exists, preserve its conventions and build on it. Do not unnecessarily replace the stack or delete existing functionality.
3. If the repository is empty, create a modern frontend using **React + Vite**, with clean reusable components and CSS (or the styling system already configured).
4. Implement the website—not just a mockup, plan, or static screenshot. All key navigation, filters, cart controls, and WhatsApp order actions must work.
5. Use sensible sample product data and local placeholder imagery if real product assets are unavailable. Keep product data in a structured file so it can be replaced easily.
6. Ensure the app runs using the repository's normal development command. At the end, report what was implemented and how to run it.

## Brand and Visual Direction
- Brand name: **paw Buddy**
- Brand personality: friendly, caring, trustworthy, modern, approachable, pet-loving.
- Design direction: premium pet-care storefront, inspired by the clarity and shopping flow of Zigly, but with original paw Buddy styling.
- Suggested palette:
  - Warm off-white / cream backgrounds
  - Deep forest green or teal for primary actions
  - Soft orange or coral accents
  - Charcoal text and subtle neutral borders
- Use rounded cards, clean spacing, clear typography, tasteful shadows, and high-quality dog/cat imagery.
- The site must feel professional and easy to use, not overly childish.
- Make the design mobile-first and fully responsive across phone, tablet, laptop, and desktop.
- Use accessible contrast, semantic HTML, keyboard-friendly controls, descriptive image alt text, and visible focus states.

## Pages and Main Sections

### 1. Home Page
Create a welcoming homepage with:
- Announcement strip for delivery / store updates (editable sample text).
- Header with paw Buddy logo/wordmark, search, account placeholder if useful, and cart indicator.
- Main navigation: Home, Dogs, Cats, Food, Medicines, Offers, Contact.
- Hero section with a strong headline such as **“A happier, healthier life for your pets.”**
- Main CTA buttons: **Shop Dog Essentials**, **Shop Cat Essentials**.
- Category tiles for:
  - Dog Food
  - Cat Food
  - Treats
  - Medicines & Wellness
  - Grooming
  - Toys & Accessories
- Best sellers / featured products.
- Promotional banner, e.g. “Everything your best friend needs, in one place.”
- Trust highlights such as “Carefully selected products,” “Easy WhatsApp ordering,” and “Pet-first service.” Do not invent certifications or guarantees.
- Customer reviews section with clearly marked sample/demo reviews, or omit it if no real reviews are available.
- Footer with contact details placeholders, store hours placeholder, social links placeholders, and navigation links.

### 2. Shop / Category Listing
Create a reusable product listing view for Dog, Cat, Food, Medicines, and other categories.
Include:
- Product grid with product image, name, pet type, brand, size/variant, price, optional original price/discount, and stock status.
- Search field.
- Filters for pet type, category, brand, price range, and product format where relevant.
- Sort options: Featured, Price: Low to High, Price: High to Low, Newest.
- Clear-filters control and helpful empty state.
- Category selection should work through navigation and category cards.

### 3. Product Details
When a customer opens a product, show:
- Product images, name, brand, price, size/variant, description, key features, and availability.
- Variant selector if applicable.
- Quantity selector.
- Add to Cart button.
- Related products.
- For medicines, show a visible note that product information is general and customers should follow a veterinarian's advice and the product label. Do not provide diagnosis, dosage recommendations, or claims that a medicine cures a condition.

### 4. Cart
Build a functional cart:
- Add, remove, and update item quantities.
- Show product variant, unit price, quantity, line total, subtotal, and order total.
- Persist cart state across refreshes using localStorage.
- Validate that the cart is not empty before WhatsApp order submission.
- Provide a clear **Order on WhatsApp** button.
- The cart must work on mobile and desktop.

### 5. Contact / Store Information
Create a simple contact section/page with editable placeholders for:
- WhatsApp number
- Phone number
- Email
- Address / service area
- Business hours
Do not invent real business contact information. Put these values in one configuration file and use clearly marked placeholders until the owner supplies them.

## WhatsApp Ordering — Required Functional Flow
This is the key conversion feature. Implement it carefully.

### Customer flow
1. Customer browses products.
2. Customer selects product variants and quantities.
3. Customer adds products to the cart.
4. Customer opens the cart and checks the order summary.
5. Customer clicks **Order on WhatsApp**.
6. The website opens WhatsApp (app or WhatsApp Web) with a pre-filled, readable message containing the complete order.
7. The customer sends the message to the business.
8. The business confirms availability, delivery details, and final order acceptance directly with the customer.

### WhatsApp message format
Generate a message similar to:

Hello paw Buddy! I'd like to place an order:

- Product: [Product Name] | Variant: [Size] | Qty: [Quantity] | Unit Price: ₹[Price] | Line Total: ₹[Line Total]
- Product: [Product Name] | Variant: [Size] | Qty: [Quantity] | Unit Price: ₹[Price] | Line Total: ₹[Line Total]

Subtotal: ₹[Subtotal]
Estimated Total: ₹[Total]

Name: [Optional customer name]
Delivery Address: [Optional address]
Order Notes: [Optional notes]

Please confirm availability, delivery charges, and the final order. Thank you!

### Technical requirements
- Use WhatsApp's click-to-chat URL format: `https://wa.me/<international_number>?text=<URL-encoded-message>`.
- Store the business WhatsApp number in a single configuration constant, formatted with country code and digits only (for example, an India number begins with `91`; do not include `+`, spaces, or hyphens).
- Since the actual number has not yet been provided, use a clearly named placeholder such as `paw_BUDDY_WHATSAPP_NUMBER` and make it easy to configure.
- Build the message dynamically from the current cart. Correctly encode special characters and line breaks.
- Open the link in a new tab/window with safe link attributes where applicable, or use a reliable location redirect.
- Do not claim the WhatsApp message was sent, or that the order is confirmed. The user must press Send in WhatsApp.
- Include optional customer name, address, and notes fields in the cart/order panel. Make these optional unless the business later specifies otherwise.
- Show a clear helper message: **“Your order will be sent to paw Buddy on WhatsApp. The store will confirm availability and delivery details.”**
- If the WhatsApp number is still a placeholder, show a development warning and explain where to configure it rather than opening a broken link.

## Product Data
Create a reusable data structure (for example, `src/data/products.js` or equivalent) with sample products for both dogs and cats.

Include a balanced sample catalog across:
- Dry food
- Wet food
- Treats
- Supplements / wellness
- Medicines
- Grooming and accessories

Each product should have fields similar to:
- `id`
- `name`
- `slug`
- `petType` (`dog`, `cat`, or `both`)
- `category`
- `brand`
- `description`
- `price`
- `originalPrice` (optional)
- `image`
- `images` (optional)
- `variants` (optional)
- `stockStatus`
- `featured`
- `tags`

Use Indian Rupee formatting (`₹`) and realistic-looking sample prices, but make it clear the catalog is demo content that the owner can edit. Do not fabricate real brand endorsements.

## Search, Navigation, and Interaction
- Search should filter product names, brands, and categories.
- Category cards and nav items should route to the appropriate product listing.
- Product cards should link to product detail pages or open a clear detail view.
- Cart count should update immediately.
- Add-to-cart feedback should be visible (toast, mini-cart, or button state).
- All buttons and links must have meaningful actions. Avoid non-functional decorative controls.
- Include loading/empty/error states where appropriate.

## Suggested Component Structure
Adapt this to the existing repository rather than forcing it:

- `Header`
- `AnnouncementBar`
- `Hero`
- `CategoryCard`
- `ProductCard`
- `ProductGrid`
- `ProductFilters`
- `ProductSearch`
- `ProductDetails`
- `CartDrawer` or `CartPage`
- `WhatsAppOrderButton`
- `Footer`

Keep product data and business settings separate from UI components. Keep cart logic reusable (context/store or another lightweight approach).

## Technical Quality and Acceptance Checklist
Before finishing, verify:
- [ ] App starts and builds without errors.
- [ ] Homepage is polished and responsive.
- [ ] Dog and cat shopping categories work.
- [ ] Search, filters, and sorting work.
- [ ] Product details and variants work where included.
- [ ] Cart add/remove/quantity changes work.
- [ ] Cart persists after refresh.
- [ ] WhatsApp message contains every cart item, quantity, variant, prices, subtotal, and optional customer details.
- [ ] WhatsApp message is URL-encoded correctly.
- [ ] The configured WhatsApp number is used consistently.
- [ ] Empty cart cannot be submitted.
- [ ] No pawment gateway is added.
- [ ] The website never falsely states that an order is confirmed.
- [ ] Medicine-related content includes appropriate veterinary guidance and avoids diagnosis/dosage advice.
- [ ] No dead buttons, broken routes, or horizontal overflow on mobile.
- [ ] README or project notes explain how to set the WhatsApp number and edit product data.

## Final Deliverable
Deliver a complete working **paw Buddy** website in the current repository, with a premium pet-store design inspired by Zigly and a reliable WhatsApp-based order placement flow. Prioritize a frictionless customer journey from product discovery to sending the order through WhatsApp.
