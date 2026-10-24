import React, { useState } from 'react';
import { STORE_CONFIG } from '../../config/storeConfig';
import { useCart } from '../../context/CartContext';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const ContactSection = () => {
  const { activeWhatsappNumber } = useCart();
  const [inquiryText, setInquiryText] = useState('');

  const handleSendDirectInquiry = (e) => {
    e.preventDefault();
    const query = inquiryText.trim() || 'Hello Paw Buddy team! I have a question regarding pet nutrition and care.';
    const encoded = encodeURIComponent(query);
    const cleanNumber = activeWhatsappNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-24 bg-ivory" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-wider uppercase text-forest-700 block mb-1.5">
              Support & Orders
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-charcoal">
              Connect with Our Team
            </h2>
            <p className="text-sm text-charcoal-muted mt-2 leading-relaxed">
              Have questions regarding pet dietary allergies or customized feeding plans? Speak directly with our pet care advisors.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Store Details */}
          <div className="lg:col-span-6">
            <Reveal delay={80}>
              <div className="bg-ivory-subtle border border-ivory-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-soft">
                <div className="border-b border-ivory-border pb-4">
                  <h3 className="font-display text-lg font-bold text-charcoal">
                    Store Information
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Centralized dispatch hub and service hours
                  </p>
                </div>

                <div className="space-y-4">
                  {/* WhatsApp Item */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-light block">
                        Official WhatsApp Ordering Line
                      </span>
                      <p className="text-xs font-semibold text-charcoal font-mono">
                        +{activeWhatsappNumber}
                      </p>
                    </div>
                  </div>

                  {/* Phone Item */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-light block">
                        Telephone
                      </span>
                      <p className="text-xs font-semibold text-charcoal font-mono">
                        {STORE_CONFIG.contactPhone}
                      </p>
                    </div>
                  </div>

                  {/* Email Item */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-light block">
                        Email Inquiries
                      </span>
                      <p className="text-xs font-semibold text-charcoal font-mono">
                        {STORE_CONFIG.contactEmail}
                      </p>
                    </div>
                  </div>

                  {/* Address / Service Area */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-light block">
                        Dispatch Hub & Service Coverage
                      </span>
                      <p className="text-xs text-charcoal leading-relaxed font-medium">
                        {STORE_CONFIG.address}
                      </p>
                      <p className="text-[11px] text-charcoal-muted mt-0.5">
                        {STORE_CONFIG.serviceArea}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-light block">
                        Operating Hours
                      </span>
                      <p className="text-xs font-medium text-charcoal">
                        {STORE_CONFIG.businessHours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-ivory-border text-[11px] text-charcoal-light">
                  Store contact details are managed in <code className="bg-ivory px-1.5 py-0.5 rounded border border-ivory-border font-mono text-[10px]">src/config/storeConfig.js</code>.
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Direct WhatsApp Query Form */}
          <div className="lg:col-span-6">
            <Reveal delay={160}>
              <div className="bg-ivory-subtle border border-ivory-border rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="border-b border-ivory-border pb-4 mb-5">
                  <h3 className="font-display text-lg font-bold text-charcoal">
                    Direct WhatsApp Message
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Type your inquiry to start a conversation with our pet specialists
                  </p>
                </div>

                <form onSubmit={handleSendDirectInquiry} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">
                      Your Question:
                    </label>
                    <textarea
                      rows={4}
                      value={inquiryText}
                      onChange={(e) => setInquiryText(e.target.value)}
                      placeholder="e.g. Hello Paw Buddy, I have a 6-month puppy and would like to know if the baked chicken recipe is recommended for his breed..."
                      className="w-full bg-ivory border border-ivory-border rounded-xl p-3.5 text-xs text-charcoal focus:outline-none focus:border-forest-700 transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-forest-700 hover:bg-forest-800 text-ivory text-xs font-semibold transition-editorial shadow-soft flex items-center justify-center gap-2 active:translate-y-px"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Message on WhatsApp</span>
                  </button>

                  <p className="text-center text-[11px] text-charcoal-light font-normal">
                    Opens directly in WhatsApp app or WhatsApp Web with your pre-typed message.
                  </p>
                </form>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};
