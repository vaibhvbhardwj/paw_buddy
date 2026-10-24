import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const ReviewsSection = () => {
  const reviews = [
    {
      author: 'Aakash & Bruno',
      petType: 'Golden Retriever, 3 years',
      rating: 5,
      review: 'Ordering directly on WhatsApp is refreshingly simple. Bruno loved the slow-baked chicken recipe, and his coat has shown a noticeable sheen after a few weeks.',
    },
    {
      author: 'Sneha & Mochi',
      petType: 'Persian Cat, 2 years',
      rating: 5,
      review: 'Mochi has always been particular about wet food textures, but the wild salmon pate has been an instant hit. Delivery was punctual and very courteous.',
    },
    {
      author: 'Vikram & Bella',
      petType: 'Indie Rescue, 4 years',
      rating: 5,
      review: 'The lick-safe herbal balm did wonders for Bella’s rough paw pads after our monsoon walks. It feels great to speak directly with real pet-lovers when ordering.',
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-ivory-subtle border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-forest-700 block mb-1.5">
                Customer Experiences · Demo Reviews
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-charcoal">
                Loved by Companion Parents
              </h2>
            </div>
            <p className="text-xs text-charcoal-light mt-2 md:mt-0 font-normal">
              Sample pet parent testimonials highlighting our small-batch pantry and WhatsApp service.
            </p>
          </div>
        </Reveal>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, index) => (
            <Reveal key={index} delay={index * 90}>
              <div className="bg-ivory border border-ivory-border rounded-2xl p-6 sm:p-7 shadow-soft flex flex-col justify-between card-lift h-full">
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-normal mb-6">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-ivory-border flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-charcoal">
                      {rev.author}
                    </h4>
                    <p className="text-[11px] text-charcoal-light mt-0.5">
                      {rev.petType}
                    </p>
                  </div>
                  <Quote className="w-5 h-5 text-forest-100 shrink-0" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
