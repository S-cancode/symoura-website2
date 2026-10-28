'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

interface HeroProps {
  headline: string;
  highlightWord?: string;
  eyebrow?: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  tertiaryLink?: {
    text: string;
    href: string;
  };
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero({
  headline,
  highlightWord,
  eyebrow,
  subheadline,
  primaryCTA,
  secondaryCTA,
  tertiaryLink,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Soft golden spotlight that follows the cursor
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--hx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--hy', `${e.clientY - rect.top}px`);
  };

  const parts = highlightWord ? headline.split(highlightWord) : [headline];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="min-h-[calc(100vh-72px)] flex items-center relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(600px circle at var(--hx, 50%) var(--hy, 40%), rgba(201, 169, 110, 0.16), transparent 65%)',
        }}
      />

      <div className="container-custom w-full relative z-10 py-24">
        <div className="text-center max-w-6xl mx-auto">
          {eyebrow && (
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="mb-8">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-[40px] sm:text-5xl md:text-hero-lg xl:text-[76px] mb-8 whitespace-pre-line [text-wrap:balance]"
          >
            {parts[0]}
            {highlightWord && <span className="text-gold-gradient">{highlightWord}</span>}
            {parts[1]}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-lg md:text-xl text-neutral-medium-gray mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            {subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href={primaryCTA.href} variant="primary" arrow>
              {primaryCTA.text}
            </Button>
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="secondary">
                {secondaryCTA.text}
              </Button>
            )}
          </motion.div>

          {tertiaryLink && (
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-10">
              <Link
                href={tertiaryLink.href}
                className="group inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold-dark"
              >
                <span className="border-b border-gold/40 group-hover:border-gold-dark transition-colors">
                  {tertiaryLink.text}
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
