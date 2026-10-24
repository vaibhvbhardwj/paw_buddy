import React from 'react';
import { ArrowUpRight, Utensils, Fish, Cookie, Activity, Sparkles, CircleDot } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const CategoryTiles = ({ onSelectCategory, activeCategoryId }) => {
  const categories = [
    {
      id: 'dog-food',
      name: 'Dog Food',
      descriptor: 'Slow-baked kibble & bone broths',
      icon: Utensils,
      pet: 'dog'
    },
    {
      id: 'cat-food',
      name: 'Cat Food',
      descriptor: 'Wild seafood pates & raw morsels',
      icon: Fish,
      pet: 'cat'
    },
    {
      id: 'treats',
      name: 'Treats & Chews',
      descriptor: 'Single-ingredient hearts & yak bars',
      icon: Cookie,
      pet: 'both'
    },
    {
      id: 'medicines',
      name: 'Wellness & Care',
      descriptor: 'Veterinarian-guided joint & gut remedies',
      icon: Activity,
      pet: 'both'
    },
    {
      id: 'grooming',
      name: 'Grooming & Spa',
      descriptor: 'Colloidal oat washes & lick-safe balms',
      icon: Sparkles,
      pet: 'both'
    },
    {
      id: 'toys',
      name: 'Play & Essentials',
      descriptor: 'Cotton canvas toys & ceramic dishes',
      icon: CircleDot,
      pet: 'both'
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-ivory-subtle border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-forest-700 block mb-1.5">
                Curated Collections
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-charcoal">
                Explore by Category
              </h2>
            </div>
            <p className="text-sm text-charcoal-muted mt-2 md:mt-0 max-w-md">
              Wholesome small-batch nutrition and responsibly formulated wellness supplies for dogs and cats.
            </p>
          </div>
        </Reveal>

        {/* Categories Grid with 60–90ms Staggered Reveal and Gentle Hover Lift */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = activeCategoryId === cat.id;

            return (
              <Reveal key={cat.id} delay={idx * 75}>
                <div
                  onClick={() => onSelectCategory(cat.id, cat.pet)}
                  className={`group cursor-pointer p-5 rounded-2xl border transition-editorial select-none flex flex-col justify-between card-lift h-full ${
                    isSelected
                      ? 'bg-ivory border-forest-700 ring-1 ring-forest-700 shadow-card'
                      : 'bg-ivory hover:bg-ivory border-ivory-border hover:border-ivory-border/80 shadow-soft'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-forest-700 text-ivory'
                            : 'bg-forest-50 text-forest-700 group-hover:bg-forest-100'
                        }`}
                      >
                        <Icon className="w-5 h-5 stroke-[1.8] group-hover:-translate-y-0.5 transition-transform" />
                      </div>

                      <ArrowUpRight className="w-4 h-4 text-charcoal-light group-hover:text-forest-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <h3 className="font-display text-base font-bold text-charcoal group-hover:text-forest-700 transition-colors mb-1">
                      {cat.name}
                    </h3>
                  </div>

                  <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed mt-2 font-normal">
                    {cat.descriptor}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
