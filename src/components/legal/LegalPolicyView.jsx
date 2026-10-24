import React, { useEffect } from 'react';
import { LEGAL_POLICIES } from '../../data/legalPolicies';
import { Shield, ArrowLeft, Clock, FileText, AlertCircle, CheckCircle } from 'lucide-react';

export const LegalPolicyView = ({ policyId = 'privacy-policy', onSelectPolicy, onBackToStore }) => {
  const policyKeys = Object.keys(LEGAL_POLICIES);
  const currentPolicy = LEGAL_POLICIES[policyId] || LEGAL_POLICIES['privacy-policy'];

  // Scroll to top of policy view when opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [policyId]);

  return (
    <div className="py-12 sm:py-16 bg-ivory min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={onBackToStore}
            className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal hover:text-forest-700 bg-ivory-subtle border border-ivory-border rounded-lg px-3.5 py-2 shadow-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Store</span>
          </button>
        </div>

        {/* Header Block */}
        <div className="border-b border-ivory-border pb-8 mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-700 bg-forest-50 px-2.5 py-0.5 rounded-full border border-forest-100">
              {currentPolicy.category}
            </span>
            <span className="text-xs text-charcoal-light flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5" />
              {currentPolicy.lastUpdated}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            {currentPolicy.title}
          </h1>

          <p className="text-sm text-charcoal-muted mt-2 max-w-2xl leading-relaxed">
            {currentPolicy.summary}
          </p>

          {/* Policy Notice Callout */}
          <div className="mt-4 p-3.5 bg-ivory-subtle rounded-xl border border-ivory-border flex items-start gap-2.5 text-xs text-charcoal-muted">
            <AlertCircle className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Template Notice:</strong> Specific legal identifiers marked with brackets (e.g. <code>[Legal Business Name]</code>, <code>[Support Email]</code>) are customizable configuration placeholders for store compliance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Policy Navigation Sidebar */}
          <aside className="lg:col-span-4 space-y-1.5 bg-ivory-subtle p-4 rounded-2xl border border-ivory-border shadow-soft">
            <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-light block px-2 mb-2">
              All Legal Policies
            </span>
            {policyKeys.map((key) => {
              const pol = LEGAL_POLICIES[key];
              const isSelected = pol.id === currentPolicy.id;
              return (
                <button
                  key={key}
                  onClick={() => onSelectPolicy(key)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-editorial flex items-center justify-between ${
                    isSelected
                      ? 'bg-forest-700 text-ivory font-bold shadow-xs'
                      : 'text-charcoal-muted hover:text-charcoal hover:bg-ivory'
                  }`}
                >
                  <span>{pol.title}</span>
                  <FileText className={`w-3.5 h-3.5 ${isSelected ? 'text-ivory' : 'opacity-40'}`} />
                </button>
              );
            })}
          </aside>

          {/* Main Policy Content Sections */}
          <main className="lg:col-span-8 bg-ivory p-6 sm:p-8 rounded-2xl border border-ivory-border shadow-soft space-y-8 max-w-none">
            {currentPolicy.sections.map((sec, idx) => (
              <section key={idx} className="space-y-2.5">
                <h3 className="font-display text-base sm:text-lg font-bold text-charcoal tracking-tight">
                  {sec.heading}
                </h3>
                <div className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-normal whitespace-pre-line">
                  {sec.content}
                </div>
              </section>
            ))}

            <div className="pt-6 border-t border-ivory-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-light">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-forest-700" />
                <span>Verified Paw Buddy Store Policy</span>
              </span>
              <button
                onClick={onBackToStore}
                className="text-forest-700 hover:text-forest-800 font-semibold underline"
              >
                Return to Storefront
              </button>
            </div>
          </main>

        </div>

      </div>
    </div>
  );
};
