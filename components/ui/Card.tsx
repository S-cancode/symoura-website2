'use client';

import React, { useRef } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Lift + cursor-follow glow on hover. Turn off for large static content blocks. */
  interactive?: boolean;
}

export default function Card({ children, className = '', interactive = true }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={interactive ? handleMouseMove : undefined}
      className={`group/card relative overflow-hidden bg-white/90 rounded-2xl p-8 border border-neutral-light-gray/80 shadow-soft transition-all duration-300 ${
        interactive ? 'hover:-translate-y-1 hover:shadow-lift hover:border-gold/40' : ''
      } ${className}`}
    >
      {interactive && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
          style={{
            background:
              'radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(201, 169, 110, 0.12), transparent 60%)',
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
