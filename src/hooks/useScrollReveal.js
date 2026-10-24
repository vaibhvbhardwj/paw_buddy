import { useEffect, useRef, useState } from 'react';

/**
 * Hook to trigger a one-time entrance animation when an element scrolls into view.
 * Respects prefers-reduced-motion and provides safety fallback to prevent content invisibility.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion or no IntersectionObserver, show immediately
    if (
      typeof window === 'undefined' ||
      !window.IntersectionObserver ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) {
      setIsVisible(true);
      return;
    }

    // Safety fallback: ensure element is never stuck hidden on slow mobile viewports
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(safetyTimer);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold ?? 0.02,
        rootMargin: options.rootMargin || '50px 0px 50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      clearTimeout(safetyTimer);
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}
