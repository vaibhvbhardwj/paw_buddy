import React from 'react';
import { STORE_CONFIG } from '../../config/storeConfig';
import { BrandLogo } from '../common/BrandLogo';
import { MessageCircle, AlertCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer = ({ onNavigate, onOpenPolicy }) => {
  return (
    <footer className="bg-forest-900 text-ivory/80 pt-16 pb-12 border-t border-forest-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-ivory">
              <BrandLogo showSubtitle={false} textClassName="text-2xl text-ivory" />
            </div>

            <p className="text-ivory/70 leading-relaxed max-w-sm text-xs font-normal">
              A boutique companion-animal storefront dedicated to small-batch nutrition, single-origin natural chews, and responsibly formulated wellness essentials. Dispatched across Bengaluru with personal WhatsApp confirmation.
            </p>

            <div className="pt-1">
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Paw Buddy team!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ivory text-forest-900 hover:bg-forest-50 px-4 py-2 rounded-lg font-semibold text-xs transition-editorial shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Inquiries</span>
              </a>
            </div>
          </div>

          {/* Collections Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-semibold text-ivory tracking-wider uppercase text-[11px]">
              Collections
            </h4>
            <ul className="space-y-2 text-ivory/70">
              <li>
                <button
                  onClick={() => onNavigate('dogs')}
                  className="hover:text-ivory transition-colors"
                >
                  Dog Food & Stews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cats')}
                  className="hover:text-ivory transition-colors"
                >
                  Cat Seafood Pates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('treats')}
                  className="hover:text-ivory transition-colors"
                >
                  Single-Ingredient Chews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('medicines')}
                  className="hover:text-ivory transition-colors"
                >
                  Wellness & Remedies
                </button>
              </li>
            </ul>
          </div>

          {/* Store Schedule Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-semibold text-ivory tracking-wider uppercase text-[11px]">
              Store & Dispatch
            </h4>
            <div className="space-y-2 text-ivory/70 text-xs">
              <p>
                <span className="text-ivory/50 block text-[10px] uppercase font-semibold">Hours:</span>
                {STORE_CONFIG.businessHours}
              </p>
              <p>
                <span className="text-ivory/50 block text-[10px] uppercase font-semibold">Hub:</span>
                {STORE_CONFIG.address}
              </p>
              <p>
                <span className="text-ivory/50 block text-[10px] uppercase font-semibold">Service:</span>
                {STORE_CONFIG.serviceArea}
              </p>
            </div>
          </div>

          {/* Quick Support Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-semibold text-ivory tracking-wider uppercase text-[11px]">
              Help & Orders
            </h4>
            <ul className="space-y-2 text-ivory/70">
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-ivory transition-colors flex items-center gap-1"
                >
                  <span>Customer Support</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${STORE_CONFIG.contactEmail}`}
                  className="hover:text-ivory transition-colors block truncate"
                >
                  {STORE_CONFIG.contactEmail}
                </a>
              </li>
              <li className="font-mono text-[11px] text-ivory/60">
                {STORE_CONFIG.contactPhone}
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Policy Navigation Row */}
        <div className="py-4 border-t border-forest-800/80 my-6">
          <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-6 text-[11px] text-ivory/60">
            <span className="font-semibold text-ivory/80 uppercase tracking-wider text-[10px]">
              Policies:
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              <button
                onClick={() => onOpenPolicy('privacy-policy')}
                className="hover:text-ivory transition-colors"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                onClick={() => onOpenPolicy('terms-and-conditions')}
                className="hover:text-ivory transition-colors"
              >
                Terms & Conditions
              </button>
              <span>·</span>
              <button
                onClick={() => onOpenPolicy('shipping-and-delivery')}
                className="hover:text-ivory transition-colors"
              >
                Shipping & Delivery
              </button>
              <span>·</span>
              <button
                onClick={() => onOpenPolicy('returns-and-refunds')}
                className="hover:text-ivory transition-colors"
              >
                Returns & Refunds
              </button>
              <span>·</span>
              <button
                onClick={() => onOpenPolicy('customer-support')}
                className="hover:text-ivory transition-colors"
              >
                Customer Support Policy
              </button>
              <span>·</span>
              <button
                onClick={() => onOpenPolicy('wellness-disclaimer')}
                className="hover:text-ivory transition-colors"
              >
                Wellness Disclaimer
              </button>
            </div>
          </div>
        </div>

        {/* Veterinary & Regulatory Disclaimer Box */}
        <div className="bg-forest-800/60 border border-forest-700 p-4 rounded-xl mb-8 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-forest-200 shrink-0 mt-0.5" />
          <div className="text-[11px] text-ivory/75 leading-relaxed font-normal">
            <strong className="text-ivory font-semibold block mb-0.5">
              Veterinary & Health Advisory Notice:
            </strong>
            Product information displayed on paw Buddy is intended solely for general dietary guidance and wellness support. Customers should always seek professional advice from a licensed veterinarian for health diagnoses, dosage protocols, and medical conditions. paw Buddy does not claim to diagnose, cure, or prescribe veterinary medications.
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-forest-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ivory/50 gap-3">
          <p>© {new Date().getFullYear()} paw Buddy. Premium Companion Animal Storefront. All rights reserved.</p>
          <p>Bengaluru, India · Dedicated to companion health and longevity</p>
        </div>

      </div>
    </footer>
  );
};
