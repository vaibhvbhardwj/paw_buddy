import React from 'react';
import { ArrowRight, Leaf, Shield, HeartHandshake } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const PromoBanner = ({ onShopNow }) => {
  return (
    <section className="py-16 sm:py-24 bg-forest-900 text-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-forest-200 block">
                The Paw Buddy Philosophy
              </span>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ivory leading-tight">
                Honest pet care, free from robotic complexity.
              </h2>

              <p className="text-sm sm:text-base text-ivory/80 leading-relaxed font-normal max-w-xl">
                Every meal, chew, and wellness botanical is prepared with human-grade care. We prioritize transparent ingredients, bioavailable omegas, and direct personal communication over automated checkout queues.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-forest-800">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-ivory flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-forest-300" />
                    Whole Proteins
                  </span>
                  <p className="text-[11px] text-ivory/60 leading-relaxed">
                    Grain-free poultry, wild fish, and pasture-raised lamb.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold text-ivory flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-forest-300" />
                    Vet Transparent
                  </span>
                  <p className="text-[11px] text-ivory/60 leading-relaxed">
                    Strict adherence to clinical pet guidelines.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold text-ivory flex items-center gap-1.5">
                    <HeartHandshake className="w-3.5 h-3.5 text-forest-300" />
                    WhatsApp First
                  </span>
                  <p className="text-[11px] text-ivory/60 leading-relaxed">
                    Direct human dispatch confirmation.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onShopNow}
                  className="px-6 py-3.5 bg-ivory text-forest-900 hover:bg-forest-50 text-xs font-semibold rounded-xl transition-editorial inline-flex items-center gap-2 shadow-soft active:translate-y-px"
                >
                  <span>Browse Full Catalogue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-forest-800 shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=800&auto=format&fit=crop&q=80"
                  alt="Companion dog with healthy natural nutrition"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};
