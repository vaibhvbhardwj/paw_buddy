import React from 'react';
import { ArrowRight, ShieldCheck, Truck, MessageCircle } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const Hero = ({ onFilterPet }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-ivory-border bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Staggered Fade-Up Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Eyebrow */}
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 border border-forest-100 text-forest-700 text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-700" />
                <span>Small-Batch Pet Nutrition & Care</span>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={80}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal leading-[1.12]">
                A healthier, happier life for your companion.
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={160}>
              <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-xl font-normal">
                Slow-baked whole kibble, savory hydration stews, single-ingredient chews, and veterinarian-advised wellness remedies. Handpicked with integrity, confirmed directly over WhatsApp.
              </p>
            </Reveal>

            {/* Two Refined CTAs */}
            <Reveal delay={240}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <button
                  onClick={() => onFilterPet('dog')}
                  className="px-6 py-3.5 bg-forest-700 hover:bg-forest-800 text-ivory text-sm font-semibold rounded-xl shadow-soft hover:shadow-card transition-editorial flex items-center justify-center gap-2 group active:translate-y-px"
                >
                  <span>Shop for Dogs</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <button
                  onClick={() => onFilterPet('cat')}
                  className="px-6 py-3.5 bg-ivory hover:bg-ivory-subtle text-charcoal text-sm font-semibold rounded-xl border border-ivory-border hover:border-charcoal-light shadow-soft transition-editorial flex items-center justify-center gap-2 active:translate-y-px"
                >
                  <span>Shop for Cats</span>
                </button>
              </div>
            </Reveal>

            {/* Restrained Trust Row */}
            <Reveal delay={320}>
              <div className="pt-8 border-t border-ivory-border/70 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-charcoal-muted">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">Direct WhatsApp order confirmation</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                    <Truck className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">Complimentary delivery over ₹499</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">Vet-guided formulas</span>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Hero Visual with Initial Load Scale-in (1.03 -> 1.0) */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={120}>
              <div className="relative rounded-2xl overflow-hidden border border-ivory-border bg-ivory-subtle shadow-card group">
                <img
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=1000&auto=format&fit=crop&q=80"
                  alt="Companion dog enjoying natural nutrition"
                  className="w-full h-[400px] sm:h-[460px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Understated Editorial Floating Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-ivory/95 backdrop-blur-md border border-ivory-border shadow-soft flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-forest-700 block">
                      Small-Batch Kitchen
                    </span>
                    <p className="text-xs font-semibold text-charcoal">
                      100% Grain-Free & Human-Grade Ingredients
                    </p>
                  </div>
                  <span className="text-xs font-bold text-clay-700 bg-clay-50 px-2 py-1 rounded-md border border-clay-100">
                    Fresh Batch
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
