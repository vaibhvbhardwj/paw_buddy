/**
 * paw Buddy — Sample Product Catalog
 * 
 * Includes realistic sample products across Dogs and Cats for:
 * - Dry Food & Wet Food
 * - Artisan Baked & Single-Ingredient Treats
 * - Medicines & Wellness (with required veterinary advisory notes)
 * - Grooming & Essentials
 * - Toys & Play Accessories
 */

export const CATEGORIES = [
  { id: 'all', name: 'All Collections', icon: 'paw', pet: 'both' },
  { id: 'dog-food', name: 'Dog Food', icon: 'bowl', pet: 'dog' },
  { id: 'cat-food', name: 'Cat Food', icon: 'fish', pet: 'cat' },
  { id: 'treats', name: 'Treats & Chews', icon: 'bone', pet: 'both' },
  { id: 'medicines', name: 'Wellness & Remedies', icon: 'medicine', pet: 'both' },
  { id: 'grooming', name: 'Grooming & Spa', icon: 'sparkle', pet: 'both' },
  { id: 'toys', name: 'Play & Essentials', icon: 'ball', pet: 'both' },
];

export const PRODUCTS = [
  // DOG FOOD
  {
    id: 'df-01',
    name: 'Artisan Oven-Baked Grain-Free Free-Range Chicken Kibble',
    slug: 'artisan-baked-chicken-dog-kibble',
    petType: 'dog',
    category: 'Dog Food',
    categoryId: 'dog-food',
    brand: 'NourishPaw',
    price: 1250,
    originalPrice: 1450,
    rating: 4.9,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Slow-baked in small batches to preserve vital micronutrients and natural crunch. Formulated with real antibiotic-free deboned chicken, sweet potatoes, and gut-healthy prebiotic pumpkin.',
    keyFeatures: [
      '75% fresh protein from free-range chicken',
      'Zero corn, soy, wheat, or artificial preservatives',
      'Infused with cold-pressed coconut oil for glossy coats',
      'Gently slow-baked at 90°C for superior nutrient retention'
    ],
    variants: [
      { id: 'v-1.2kg', name: '1.2 kg Small Bag', price: 1250, inStock: true },
      { id: 'v-3kg', name: '3 kg Medium Pack', price: 2850, inStock: true },
      { id: 'v-10kg', name: '10 kg Breeder Pack', price: 7999, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: true,
    isBestseller: true,
    tags: ['Grain-Free', 'High Protein', 'Slow-Baked', 'Bestseller']
  },
  {
    id: 'df-02',
    name: 'Slow-Simmered Lamb & Brown Rice Wet Stew Pouch',
    slug: 'lamb-brown-rice-wet-stew-dog',
    petType: 'dog',
    category: 'Dog Food',
    categoryId: 'dog-food',
    brand: 'RusticTail',
    price: 240,
    originalPrice: 280,
    rating: 4.8,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=800&auto=format&fit=crop&q=80',
    description: 'Tender meadow-raised lamb simmered with carrots, peas, and wholesome brown rice in a savory bone broth that enticingly rehydrates picky eaters.',
    keyFeatures: [
      'Real pasture-raised lamb in bone broth',
      'Packed with natural moisture and hydration support',
      'No meat by-products or carrageenan thickeners',
      'Ideal as a topper or complete balanced meal'
    ],
    variants: [
      { id: 'v-150g', name: 'Single Pouch (150g)', price: 240, inStock: true },
      { id: 'v-pack6', name: 'Pack of 6 (6 x 150g)', price: 1320, inStock: true },
      { id: 'v-pack12', name: 'Value Box (12 x 150g)', price: 2499, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: false,
    tags: ['Wet Food', 'Hydration', 'Sensitive Tummies']
  },
  {
    id: 'df-03',
    name: 'Wild Salmon & Pumpkin Puppy Growth Recipe',
    slug: 'wild-salmon-puppy-recipe',
    petType: 'dog',
    category: 'Dog Food',
    categoryId: 'dog-food',
    brand: 'NourishPaw',
    price: 1390,
    originalPrice: 1599,
    rating: 5.0,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80',
    description: 'DHA-rich recipe specifically balanced for growing puppy brains and joints. Wild-caught salmon delivers gentle, digestible omega fatty acids.',
    keyFeatures: [
      'Fortified with natural DHA for early cognitive growth',
      'Calcium to phosphorus ratio optimized for puppy bone development',
      'Gentle on tender puppy digestive systems',
      'Smaller easy-chew kibble size'
    ],
    variants: [
      { id: 'v-1kg', name: '1 kg Puppy Starter', price: 1390, inStock: true },
      { id: 'v-3kg', name: '3 kg Growth Pack', price: 3190, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: true,
    tags: ['Puppy', 'Omega 3', 'DHA Brain Boost']
  },

  // CAT FOOD
  {
    id: 'cf-01',
    name: 'Wild Atlantic Salmon & Tuna Pate in Gourmet Gravy',
    slug: 'wild-salmon-tuna-pate-cat',
    petType: 'cat',
    category: 'Cat Food',
    categoryId: 'cat-food',
    brand: 'MeowCraft',
    price: 185,
    originalPrice: 220,
    rating: 4.9,
    reviewsCount: 45,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80',
    description: 'Smooth and silky seafood pate crafted with wild-caught Atlantic salmon and white-meat tuna. Naturally rich in taurine for heart health and sharp feline vision.',
    keyFeatures: [
      'Over 85% real fish muscle meat & broth',
      'Crucial essential Taurine for cardiac and retinal function',
      'High moisture content to safeguard feline kidney health',
      'Zero starch, wheat gluten, or artificial binders'
    ],
    variants: [
      { id: 'v-85g', name: '85g Gourmet Tin', price: 185, inStock: true },
      { id: 'v-pack6', name: 'Pack of 6 Tins', price: 1050, inStock: true },
      { id: 'v-pack12', name: 'Monthly Crate (12 Tins)', price: 1999, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: true,
    isBestseller: true,
    tags: ['Seafood', 'Grain-Free', 'High Hydration', 'Bestseller']
  },
  {
    id: 'cf-02',
    name: 'Farm-Raised Quail & Turkey Freeze-Dried Raw Cat Morsels',
    slug: 'quail-turkey-freeze-dried-cat-raw',
    petType: 'cat',
    category: 'Cat Food',
    categoryId: 'cat-food',
    brand: 'PrimalPaws',
    price: 1450,
    originalPrice: 1650,
    rating: 4.8,
    reviewsCount: 16,
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&auto=format&fit=crop&q=80',
    description: 'Pure biologically appropriate nutrition for obligate carnivores. 98% meat, organs, and bone freeze-dried gently to preserve essential live digestive enzymes.',
    keyFeatures: [
      '98% meat, organs, and natural bone meal',
      'Raw nutrition convenience with simple water rehydration',
      'Supports lean muscle tone and healthy weight management',
      'Single-source poultry proteins for sensitive stomachs'
    ],
    variants: [
      { id: 'v-250g', name: '250g Pouch', price: 1450, inStock: true },
      { id: 'v-500g', name: '500g Value Pouch', price: 2750, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: false,
    tags: ['Freeze-Dried', 'Raw Nutrition', 'Obligate Carnivore']
  },
  {
    id: 'cf-03',
    name: 'Sensitive Digestion Chicken & Cranberry Indoor Cat Kibble',
    slug: 'sensitive-digestion-chicken-cranberry-cat',
    petType: 'cat',
    category: 'Cat Food',
    categoryId: 'cat-food',
    brand: 'MeowCraft',
    price: 980,
    originalPrice: 1150,
    rating: 4.7,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=80',
    description: 'Designed specifically for indoor felines. Cranberries provide urinary tract protection while chicory root prebiotics keep hairballs and litter box odors down.',
    keyFeatures: [
      'Natural cranberry extract for urinary tract pH balance',
      'Hairball reduction with soluble fiber blend',
      'Controlled magnesium levels to prevent struvite stones',
      'Taurine and L-Carnitine for healthy feline weight'
    ],
    variants: [
      { id: 'v-1.2kg', name: '1.2 kg Bag', price: 980, inStock: true },
      { id: 'v-3kg', name: '3 kg Value Bag', price: 2290, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: false,
    tags: ['Indoor Cats', 'Hairball Control', 'Urinary Care']
  },

  // TREATS & CHEWS
  {
    id: 'tr-01',
    name: 'Artisan Freeze-Dried Single-Ingredient Chicken Hearts',
    slug: 'freeze-dried-chicken-hearts-treats',
    petType: 'both',
    category: 'Treats',
    categoryId: 'treats',
    brand: 'PureBites Craft',
    price: 499,
    originalPrice: 599,
    rating: 5.0,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=800&auto=format&fit=crop&q=80',
    description: '100% human-grade chicken hearts and nothing else. Bursting with natural CoQ10, zinc, and iron for vigorous stamina and glossy fur. Dogs and cats go wild for this!',
    keyFeatures: [
      'Single ingredient: 100% pure chicken hearts',
      'Zero glycerol, wheat, salt, or fillers',
      'Naturally high in taurine and bioavailable iron',
      'Loved equally by both dogs and cats as a high-value training treat'
    ],
    variants: [
      { id: 'v-70g', name: '70g Snack Tub', price: 499, inStock: true },
      { id: 'v-180g', name: '180g Big Jar', price: 1199, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: true,
    isBestseller: true,
    tags: ['Single Ingredient', 'Dogs & Cats', 'High-Value Training', 'Bestseller']
  },
  {
    id: 'tr-02',
    name: 'Himalayan Yak Cheese Long-Lasting Hard Chew',
    slug: 'himalayan-yak-cheese-chew-dog',
    petType: 'dog',
    category: 'Treats',
    categoryId: 'treats',
    brand: 'HimalayanPaws',
    price: 550,
    originalPrice: 650,
    rating: 4.8,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&auto=format&fit=crop&q=80',
    description: 'Handmade following centuries-old Himalayan traditions using yak and cow milk. Virtually lactose-free, non-staining, and keeps heavy chewers engaged for hours.',
    keyFeatures: [
      '100% natural yak and cow milk with lime juice',
      'Hours of non-splintering natural chewing entertainment',
      'Removes plaque and tartar build-up organically',
      'Microwave the leftover end piece for 45s for a crunchy puff!'
    ],
    variants: [
      { id: 'v-med', name: 'Medium (For dogs 5-15 kg)', price: 550, inStock: true },
      { id: 'v-large', name: 'Large (For dogs 15-30 kg)', price: 799, inStock: true },
      { id: 'v-jumbo', name: 'Jumbo Giant (Dogs 30+ kg)', price: 1099, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: false,
    tags: ['Long Lasting', 'Dental Health', 'Yak Milk']
  },
  {
    id: 'tr-03',
    name: 'Organic Catnip & Salmon Crunchy Dental Pillows',
    slug: 'catnip-salmon-dental-pillows-cat',
    petType: 'cat',
    category: 'Treats',
    categoryId: 'treats',
    brand: 'MeowCraft',
    price: 320,
    originalPrice: 380,
    rating: 4.9,
    reviewsCount: 27,
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&auto=format&fit=crop&q=80',
    description: 'Crispy outer shell filled with a soft salmon paste and farm-fresh organic catnip. The porous texture gently scrapes tartar as cats crunch through.',
    keyFeatures: [
      'Real organic North American catnip leaf',
      'Dual-texture: crunchy outer shell with creamy salmon core',
      'Helps freshen cat breath and clean teeth',
      'Less than 2 calories per treat'
    ],
    variants: [
      { id: 'v-100g', name: '100g Resealable Pouch', price: 320, inStock: true },
      { id: 'v-250g', name: '250g Party Box', price: 699, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: false,
    tags: ['Organic Catnip', 'Dental Care', 'Low Calorie']
  },

  // MEDICINES & WELLNESS
  {
    id: 'med-01',
    name: 'Veterinary Broad-Spectrum Flea, Tick & Mite Spot-On Pipette',
    slug: 'flea-tick-mite-spot-on-solution',
    petType: 'dog',
    category: 'Medicines & Wellness',
    categoryId: 'medicines',
    brand: 'VetShield Pro',
    price: 680,
    originalPrice: 780,
    rating: 4.8,
    reviewsCount: 39,
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&auto=format&fit=crop&q=80',
    description: 'Fast-acting topical formulation to protect canines against ticks, fleas, flea larvae, and biting lice. Waterproof within 24 hours of application.',
    isMedicine: true,
    dosageDisclaimer: 'VETERINARY ADVISORY: This product is for topical use on canines only. Dosage is determined strictly by the accurate weight of your pet. Please consult your licensed veterinarian before administration and read all product packaging instructions carefully. Do NOT use dog formulation on cats.',
    keyFeatures: [
      'Kills fleas within 12 hours and ticks within 48 hours',
      'Waterfast formula remains effective after swimming or bathing',
      'Helps manage flea allergy dermatitis (FAD) when applied monthly',
      'Pre-measured single-dose safety pipette'
    ],
    variants: [
      { id: 'v-small', name: 'Small Dogs (Up to 10 kg)', price: 680, inStock: true },
      { id: 'v-medium', name: 'Medium Dogs (10 - 20 kg)', price: 790, inStock: true },
      { id: 'v-large', name: 'Large Dogs (20 - 40 kg)', price: 920, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: true,
    tags: ['Veterinary', 'Tick Protection', 'Parasite Care']
  },
  {
    id: 'med-02',
    name: 'Broad-Spectrum Deworming Suspension for Kittens & Puppies',
    slug: 'deworming-suspension-oral-liquid',
    petType: 'both',
    category: 'Medicines & Wellness',
    categoryId: 'medicines',
    brand: 'PetCare Pharma',
    price: 340,
    originalPrice: 399,
    rating: 4.7,
    reviewsCount: 24,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
    description: 'Palatable oral suspension for gentle elimination of common intestinal parasites including roundworms, hookworms, and tapeworms in companion pets.',
    isMedicine: true,
    dosageDisclaimer: 'VETERINARY ADVISORY: Product information is general and not a substitute for clinical diagnosis. Deworming schedules must be supervised by your veterinarian based on pet age and fecal diagnostics. Keep out of reach of children.',
    keyFeatures: [
      'Gentle formula suitable for puppies and kittens older than 2 weeks',
      'Flavored suspension easily administered with included graduated syringe',
      'Supports optimal gastrointestinal parasite control'
    ],
    variants: [
      { id: 'v-30ml', name: '30 ml Bottle with Oral Syringe', price: 340, inStock: true },
      { id: 'v-60ml', name: '60 ml Economy Bottle', price: 580, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: false,
    tags: ['Dewormer', 'Puppies & Kittens', 'Veterinary Guidance']
  },
  {
    id: 'med-03',
    name: 'Herbal Hip & Joint Glucosamine + Chondroitin Chewable Treats',
    slug: 'hip-joint-glucosamine-chondroitin-chews',
    petType: 'dog',
    category: 'Medicines & Wellness',
    categoryId: 'medicines',
    brand: 'NutriPaw Labs',
    price: 1150,
    originalPrice: 1350,
    rating: 4.9,
    reviewsCount: 48,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&auto=format&fit=crop&q=80',
    description: 'Formulated with Glucosamine HCl, Chondroitin Sulfate, MSM, and organic turmeric to maintain joint cartilage, enhance flexibility, and ease stiffness in adult & senior dogs.',
    isMedicine: true,
    dosageDisclaimer: 'WELLNESS ADVISORY: Dietary supplement for dogs. Not intended to cure, diagnose, or replace medical treatment prescribed by a veterinary professional.',
    keyFeatures: [
      '500mg Glucosamine & 200mg Chondroitin per soft chew',
      'Turmeric and MSM to soothe exercise-induced inflammation',
      'Delicious natural roast beef flavor dogs love',
      'Recommended for active sporting breeds and senior companions'
    ],
    variants: [
      { id: 'v-60chews', name: 'Jar of 60 Soft Chews', price: 1150, inStock: true },
      { id: 'v-120chews', name: 'Jar of 120 Soft Chews', price: 2090, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: true,
    tags: ['Joint Support', 'Senior Dogs', 'Glucosamine', 'Bestseller']
  },
  {
    id: 'med-04',
    name: 'Veterinary Probiotic & Digestive Prebiotic Powder',
    slug: 'veterinary-probiotic-digestive-powder',
    petType: 'both',
    category: 'Medicines & Wellness',
    categoryId: 'medicines',
    brand: 'FloraTail Vet',
    price: 620,
    originalPrice: 720,
    rating: 4.8,
    reviewsCount: 33,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&auto=format&fit=crop&q=80',
    description: 'Multi-strain micro-encapsulated beneficial probiotics (5 Billion CFU) to support gut microbiome balance during dietary changes, stress, or post-antibiotic recovery.',
    isMedicine: true,
    dosageDisclaimer: 'VETERINARY ADVISORY: For animal use only. If your pet suffers from persistent diarrhea, lethargy, or vomiting, immediately consult a qualified veterinarian.',
    keyFeatures: [
      '5 Billion active live cultures per sachet',
      'Clinically proven Enterococcus faecium strain',
      'Tasteless powder easily mixes into wet or dry food',
      'Supports healthy stool consistency and reduces bloating'
    ],
    variants: [
      { id: 'v-15sachets', name: 'Box of 15 Daily Sachets', price: 620, inStock: true },
      { id: 'v-30sachets', name: 'Box of 30 Daily Sachets', price: 1120, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: false,
    tags: ['Digestive Care', 'Gut Health', 'Probiotics']
  },

  // GROOMING & SPA
  {
    id: 'gr-01',
    name: 'Artisan Colloidal Oatmeal & Sweet Honey Pet Shampoo',
    slug: 'colloidal-oatmeal-honey-pet-shampoo',
    petType: 'both',
    category: 'Grooming',
    categoryId: 'grooming',
    brand: 'PawPure Herbal',
    price: 590,
    originalPrice: 699,
    rating: 4.9,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=80',
    description: 'Soap-free, hypoallergenic grooming wash crafted with colloidal oatmeal, raw organic honey, and soothing aloe vera. Rehydrates flaky skin and detangles matted fur effortlessly.',
    keyFeatures: [
      'pH balanced specifically for canine & feline dermal layers',
      'Tear-free botanical lather rinses squeaky clean',
      'Soothes itchy seasonal allergies and hot spots',
      'Subtle natural vanilla-honey scent without chemical fragrance'
    ],
    variants: [
      { id: 'v-300ml', name: '300 ml Pump Bottle', price: 590, inStock: true },
      { id: 'v-500ml', name: '500 ml Eco Refill', price: 890, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: true,
    tags: ['Hypoallergenic', 'Oatmeal', 'Sensitive Skin', 'Natural Spa']
  },
  {
    id: 'gr-02',
    name: 'Herbal Healing Paw Butter & Snout Soothing Balm',
    slug: 'healing-paw-butter-snout-balm',
    petType: 'both',
    category: 'Grooming',
    categoryId: 'grooming',
    brand: 'PawPure Herbal',
    price: 390,
    originalPrice: 450,
    rating: 5.0,
    reviewsCount: 56,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=80',
    description: '100% lick-safe organic balm made from shea butter, virgin coconut oil, and calendula extract. Instantly heals rough paw pads, hyperkeratosis, and dry cracked snouts.',
    keyFeatures: [
      '100% lick-safe natural edible ingredients',
      'Protects paws against hot summer pavements and cold floors',
      'Quick absorption without leaving greasy floor residue',
      'Hand-poured in reusable artisan tin'
    ],
    variants: [
      { id: 'v-50g', name: '50g Pocket Tin', price: 390, inStock: true },
      { id: 'v-100g', name: '100g Family Tin', price: 680, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: false,
    tags: ['Lick-Safe', 'Paw Care', 'Handmade', 'Artisan']
  },

  // TOYS & ACCESSORIES
  {
    id: 'ty-01',
    name: 'Hand-Stitched Organic Cotton Squeaky Bone Toy',
    slug: 'hand-stitched-organic-cotton-squeaky-bone',
    petType: 'dog',
    category: 'Toys & Accessories',
    categoryId: 'toys',
    brand: 'DoodleTail Atelier',
    price: 450,
    originalPrice: 520,
    rating: 4.8,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&auto=format&fit=crop&q=80',
    description: 'Double-layered unbleached organic cotton canvas hand-embroidered with playful dog doodles. Features an ultra-durable puncture-resistant internal squeaker.',
    keyFeatures: [
      'Reinforced double-stitched seams for enthusiastic play',
      'Non-toxic plant-based natural dyes',
      'Gentle on dog gums and teeth',
      'Machine washable on gentle cycle'
    ],
    variants: [
      { id: 'v-s', name: 'Small (15 cm)', price: 450, inStock: true },
      { id: 'v-m', name: 'Medium (22 cm)', price: 590, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: true,
    tags: ['Handcrafted', 'Organic Cotton', 'Non-Toxic', 'Squeaky']
  },
  {
    id: 'ty-02',
    name: 'Artisan Glazed Stoneware Pet Food & Water Bowl',
    slug: 'artisan-glazed-stoneware-pet-bowl',
    petType: 'both',
    category: 'Toys & Accessories',
    categoryId: 'toys',
    brand: 'DoodleTail Atelier',
    price: 890,
    originalPrice: 1099,
    rating: 4.9,
    reviewsCount: 34,
    image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=800&auto=format&fit=crop&q=80',
    description: 'Heavyweight hand-thrown ceramic bowl with an anti-whisker-fatigue wide shallow rim. Non-porous food-safe glaze prevents chin acne in cats and messy spills from dogs.',
    keyFeatures: [
      'Heavy weighted base prevents tipping and sliding across floors',
      '100% lead-free, cadmium-free ceramic stoneware',
      'Wide shallow ergonomic design prevents whisker fatigue',
      'Dishwasher and microwave safe'
    ],
    variants: [
      { id: 'v-shallow', name: 'Shallow Cat / Small Dog (400ml)', price: 890, inStock: true },
      { id: 'v-deep', name: 'Large Dog Deep Bowl (1000ml)', price: 1290, inStock: true }
    ],
    stockStatus: 'in_stock',
    featured: false,
    tags: ['Ceramic', 'Whisker-Friendly', 'Heavyweight', 'Artisan']
  }
];
