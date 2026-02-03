import React from 'react';
import Button from '@/components/ui/Button';

interface HeroProps {
  headline: string;
  highlightWord?: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function Hero({
  headline,
  highlightWord,
  subheadline,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  const renderHeadline = () => {
    if (!highlightWord) {
      return <h1 className="text-hero md:text-hero-lg mb-6 capitalize whitespace-pre-line">{headline}</h1>;
    }

    const parts = headline.split(highlightWord);
    return (
      <h1 className="text-hero md:text-hero-lg mb-6 capitalize whitespace-pre-line">
        {parts[0]}
        <span className="text-brown">{highlightWord}</span>
        {parts[1]}
      </h1>
    );
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue/[0.02] via-transparent to-navy/[0.05]"></div>

      <div className="container-custom w-full relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {renderHeadline()}
          <p className="text-lg md:text-xl text-neutral-medium-gray mb-10 leading-relaxed">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={primaryCTA.href} variant="primary">
              {primaryCTA.text}
            </Button>
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="secondary">
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
