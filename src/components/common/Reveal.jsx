import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Reveal = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  as: Component = 'div',
  ...props
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold });

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Component
      ref={ref}
      style={style}
      className={`reveal-init ${isVisible ? 'reveal-visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
