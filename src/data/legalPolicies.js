/**
 * paw Buddy — Legal & Business Policy Documents
 * 
 * Note: These starter business templates are provided for operational transparency
 * and customer trust. Specific legal placeholders are clearly marked with brackets
 * (e.g., [Legal Business Name], [Effective Date]) for the store owner to customize.
 */

export const LEGAL_POLICIES = {
  'privacy-policy': {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    category: 'Data & Privacy',
    lastUpdated: 'October 2026 [Effective Date: October 24, 2026]',
    summary: 'How [Legal Business Name] collects, utilizes, and protects customer information during website browsing and WhatsApp order fulfillment.',
    sections: [
      {
        heading: '1. Information We Collect',
        content: `When you browse our storefront or build an order to transmit over WhatsApp, we collect minimal information necessary to deliver quality service:
• Voluntary Order Information: Companion pet names, dietary notes, delivery addresses, and contact numbers you choose to include in your order summary.
• Local Storage Data: Your active shopping bag contents are stored locally on your device (in your browser's localStorage) so your selections are preserved across page visits.
• Technical Analytics: Standard anonymous device metrics such as browser type, general geographical region, and referral sources to maintain site performance.`
      },
      {
        heading: '2. How Information is Utilized',
        content: `Your data is used strictly for companion animal care operations:
• Fulfilling and coordinating orders transmitted via WhatsApp click-to-chat.
• Providing dietary assistance and product availability updates.
• Improving website speed, layout responsiveness, and catalog relevance.
• We do NOT sell, lease, or monetize customer contact details to third-party marketing brokers.`
      },
      {
        heading: '3. WhatsApp Communication & Third Parties',
        content: `paw Buddy utilizes WhatsApp (Meta Platforms, Inc.) as our direct communication and order confirmation channel. When you click 'Order via WhatsApp', your browser transfers your pre-filled cart text to WhatsApp. Your interactions on WhatsApp are governed by WhatsApp's Privacy Policy and end-to-end encryption standards.`
      },
      {
        heading: '4. Data Retention & Your Rights',
        content: `Because we do not mandate user account registrations or cloud-stored credit card profiles, your data footprint is minimal. You may request the deletion or review of any past WhatsApp order correspondence at any time by messaging our support line at [Support WhatsApp Number: +91 98765 43210] or emailing [Support Email: care@pawbuddy.store].`
      }
    ]
  },

  'terms-and-conditions': {
    id: 'terms-and-conditions',
    title: 'Terms & Conditions',
    category: 'Legal Agreement',
    lastUpdated: 'October 2026 [Effective Date: October 24, 2026]',
    summary: 'The operational terms governing the use of the paw Buddy website, catalog discovery, and WhatsApp order submission.',
    sections: [
      {
        heading: '1. Storefront Nature & Order Acceptance',
        content: `paw Buddy operates as an artisan companion animal storefront. Submitting a shopping cart via WhatsApp does not constitute a legally binding sale until our dispatch team explicitly confirms product batch availability, delivery scheduling, and total pricing directly with you. We reserve the right to decline or modify orders based on ingredient availability or delivery limits.`
      },
      {
        heading: '2. Pricing & Product Descriptions',
        content: `All prices are listed in Indian Rupees (₹) and include applicable taxes unless expressly stated. While we make every effort to display accurate product weights, ingredients, and batch photography, minor packaging revisions by artisan brands may occur between harvest or baking cycles.`
      },
      {
        heading: '3. Intellectual Property',
        content: `The branding, custom typography layouts, curated editorial descriptions, and website design of paw Buddy belong to [Legal Business Name: Paw Buddy Pet Care Private Limited / Sole Proprietorship]. Partner trademarks, logos, and images belong to their respective manufacturers.`
      },
      {
        heading: '4. Limitation of Liability',
        content: `paw Buddy strives for the highest quality in curating small-batch food and wellness remedies. However, pets may experience idiosyncratic allergies or intolerance to novel proteins. Pet owners are advised to introduce new recipes gradually and consult a veterinarian for specialized clinical needs.`
      }
    ]
  },

  'shipping-and-delivery': {
    id: 'shipping-and-delivery',
    title: 'Shipping & Delivery Policy',
    category: 'Fulfillment & Logistics',
    lastUpdated: 'October 2026 [Effective Date: October 24, 2026]',
    summary: 'Delivery timelines, courier zones, same-day dispatch guidelines, and threshold calculations for Bengaluru and Pan-India.',
    sections: [
      {
        heading: '1. Service Coverage & Zones',
        content: `• Bengaluru Urban Express: Same-day or next-morning doorstep delivery across Indiranagar, Koramangala, Whitefield, HSR Layout, JP Nagar, and greater Bengaluru.
• Pan-India Courier: Dry foods, single-ingredient treats, grooming essentials, and wellness chews are shipped via express surface couriers to all serviceable pin codes across India.`
      },
      {
        heading: '2. Delivery Fees & Free Threshold',
        content: `• Complimentary Delivery: Orders with a cart subtotal of ₹499 or higher qualify for FREE standard delivery.
• Nominal Delivery Fee: For orders below ₹499, a flat delivery fee of ₹70 is applied to cover courier and packaging materials.`
      },
      {
        heading: '3. Dispatch Schedules & Packaging',
        content: `Orders confirmed on WhatsApp before 2:00 PM IST on weekdays are processed for same-day dispatch. Perishable wet foods and temperature-sensitive remedies are packed with insulated lining to maintain freshness during transit.`
      },
      {
        heading: '4. Delivery Tracking & Delays',
        content: `Once your order is picked up by our delivery partner or courier, our team sends tracking links or rider contact details directly to your WhatsApp thread. In cases of severe weather, monsoon waterlogging, or courier strikes, our care team will proactively alert you.`
      }
    ]
  },

  'returns-and-refunds': {
    id: 'returns-and-refunds',
    title: 'Returns, Refunds & Cancellations',
    category: 'Customer Satisfaction',
    lastUpdated: 'October 2026 [Effective Date: October 24, 2026]',
    summary: 'Guidelines on returns, damaged package replacements, cancellation policies, and resolution timelines.',
    sections: [
      {
        heading: '1. Order Cancellations',
        content: `You may cancel an order free of charge at any time prior to dispatch confirmation on WhatsApp. Because orders do not require upfront payment gateways, cancellation is as simple as informing our team in the chat thread before the rider is assigned.`
      },
      {
        heading: '2. Damaged or Incorrect Deliveries',
        content: `If a package arrives with broken seals, crushed tins, leakage, or incorrect variant items, please share a clear photo on WhatsApp within 48 hours of delivery. We will arrange a complimentary immediate replacement or initiate a refund.`
      },
      {
        heading: '3. Return Eligibility for Food & Wellness',
        content: `Due to hygiene, temperature safety, and contamination risks for companion animals, opened pet food bags, opened medicine suspensions, and chewed toys cannot be accepted for return once used. Unopened dry supplies in their original factory seal may be returned within 7 days of delivery.`
      },
      {
        heading: '4. Refund Processing',
        content: `Approved refunds are processed via UPI, original bank transfer, or store credit within 3 to 5 business days following product receipt or verification by our team.`
      }
    ]
  },

  'customer-support': {
    id: 'customer-support',
    title: 'Contact & Customer Support Policy',
    category: 'Care Service',
    lastUpdated: 'October 2026 [Effective Date: October 24, 2026]',
    summary: 'Channels of support, operating hours, grievance resolution protocols, and escalation timelines.',
    sections: [
      {
        heading: '1. Primary Support Channels',
        content: `We prioritize responsive human communication over robotic ticketing:
• Official WhatsApp Support: [WhatsApp Number: +91 98765 43210] (Fastest response)
• Email Desk: [Support Email: care@pawbuddy.store]
• Telephone Helpline: [Phone: +91 98765 43210]
• Physical Hub: [Business Address: 100ft Road, Indiranagar, Bengaluru, Karnataka 560038]`
      },
      {
        heading: '2. Operating Hours & Response Times',
        content: `Our customer support and dispatch desk operates Monday through Sunday, 8:30 AM to 9:30 PM IST. WhatsApp messages received during operational hours are typically acknowledged within 15–30 minutes.`
      },
      {
        heading: '3. Grievance Redressal',
        content: `If you have an unresolved service concern or product issue, you may escalate directly to our Senior Care Lead at [Escalation Email: grievances@pawbuddy.store]. All escalations are reviewed within 24 business hours.`
      }
    ]
  },

  'wellness-disclaimer': {
    id: 'wellness-disclaimer',
    title: 'Product & Veterinary Wellness Disclaimer',
    category: 'Regulatory & Health Notice',
    lastUpdated: 'October 2026 [Effective Date: October 24, 2026]',
    summary: 'Vital medical advisory regarding dietary suggestions, veterinary guidance, and animal health safety.',
    sections: [
      {
        heading: '1. Not Veterinary or Medical Advice',
        content: `All information, product write-ups, nutritional values, dosage guidelines, and ingredient benefits displayed on paw Buddy are provided for general educational and dietary guidance only. No content on this website is intended to serve as a veterinary clinical diagnosis, medical prescription, or cure for any animal disease or condition.`
      },
      {
        heading: '2. Mandatory Consultation with Licensed Veterinarians',
        content: `Pet parents must always seek professional counsel from a licensed veterinary practitioner regarding specific medical conditions, prescription medications, post-operative diets, and exact dosage requirements tailored to their pet's weight, age, and blood chemistry. Never disregard or delay seeking veterinary medical advice based on website content.`
      },
      {
        heading: '3. Supplement & Medicine Usage',
        content: `Topical parasite pipettes, deworming suspensions, joint soft chews, and probiotic powders must be administered in strict accordance with packaging manufacturer guidelines and veterinary instructions. Keep all medicines safely out of reach of children and other non-target species (e.g., canine formulations must never be applied to felines).`
      },
      {
        heading: '4. Dietary Transitions',
        content: `When transitioning your companion animal to a new dry food, wet food, or raw recipe, introduce the new meal gradually over a 7-to-10 day period mixed with their current diet to prevent gastrointestinal upset or loose stools.`
      }
    ]
  }
};
