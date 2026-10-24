import React from 'react';
import { ShieldCheck, MessageCircle, HeartHandshake } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const TrustHighlights = () => {
  const highlights = [
    {
      title: 'Carefully Selected Products',
      description: 'Handpicked nutrition recipes, single-ingredient natural chews, and veterinarian-advised remedies without fillers or artificial additives.',
      icon: ShieldCheck,
    },
    {
      title: 'Personal WhatsApp Ordering',
      description: 'Skip impersonal checkouts. Build your cart and connect directly with our team on WhatsApp for personalized availability and dispatch coordination.',
      icon: MessageCircle,
    },
    {
      title: 'Pet-First Service',
      description: 'We care for your companions as our own. Reach out anytime on WhatsApp for dietary questions or sizing guidance for dogs and cats.',
      icon: HeartHandshake,
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-ivory border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-wider uppercase text-forest-700 block mb-1.5">
              Service Standards
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-charcoal">
              The Paw Buddy Standard
            </h2>
            <p className="text-sm text-charcoal-muted mt-2 leading-relaxed">
              Thoughtful pet care built on ingredient integrity and responsive communication.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} delay={index * 90}>
                <div className="flex flex-col space-y-3 p-6 rounded-2xl bg-ivory-subtle border border-ivory-border/80 shadow-soft card-lift h-full">
                  <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="font-display text-base font-bold text-charcoal">
                    {item.title}
                  </h3>

                  <p className="text-xs text-charcoal-muted leading-relaxed font-normal">
                    {item.description}
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
