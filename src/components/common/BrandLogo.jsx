import React from 'react';

export const BrandLogo = ({ className = 'w-7 h-7', textClassName = 'text-2xl', showSubtitle = true }) => {
  return (
    <div className="flex items-center gap-2.5 select-none group">
      {/* Refined Minimalist Paw Mark */}
      <div className="w-9 h-9 rounded-xl bg-forest-700 text-ivory flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:bg-forest-800">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-ivory"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main paw pad */}
          <path d="M12 11.5C9.5 11.5 7.8 14.2 8.3 17.5C8.7 19.8 10.2 21 12 21C13.8 21 15.3 19.8 15.7 17.5C16.2 14.2 14.5 11.5 12 11.5Z" />
          {/* Left outer toe */}
          <ellipse cx="6.5" cy="11.5" rx="1.8" ry="2.6" transform="rotate(-18 6.5 11.5)" />
          {/* Left inner toe */}
          <ellipse cx="10" cy="8.2" rx="1.8" ry="2.8" transform="rotate(-6 10 8.2)" />
          {/* Right inner toe */}
          <ellipse cx="14" cy="8.2" rx="1.8" ry="2.8" transform="rotate(6 14 8.2)" />
          {/* Right outer toe */}
          <ellipse cx="17.5" cy="11.5" rx="1.8" ry="2.6" transform="rotate(18 17.5 11.5)" />
        </svg>
      </div>

      <div className="leading-tight">
        <div className="flex items-center gap-1">
          <span className={`font-display font-extrabold tracking-tight text-charcoal ${textClassName}`}>
            paw buddy
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-clay-500 inline-block mb-1"></span>
        </div>
        {showSubtitle && (
          <p className="text-[10px] uppercase font-bold tracking-widest text-charcoal-muted -mt-0.5">
            Pet Care & Nutrition
          </p>
        )}
      </div>
    </div>
  );
};
