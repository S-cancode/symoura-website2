import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'light' | 'outline' | 'gold';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  /** Show an arrow that slides on hover. */
  arrow?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
  arrow = false,
}: ButtonProps) {
  const baseStyles =
    'group/btn inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-medium transition-all duration-200 text-base active:scale-[0.98]';

  const variantStyles = {
    primary: 'bg-navy text-white hover:text-white hover:bg-navy-dark shadow-soft hover:shadow-lift hover:-translate-y-0.5',
    secondary: 'border border-navy/25 bg-white/70 text-navy hover:text-navy hover:border-navy hover:bg-white backdrop-blur',
    light: 'bg-blue text-white hover:text-white hover:bg-blue-dark shadow-md hover:shadow-lg',
    outline: 'border border-white/40 text-white hover:text-navy hover:bg-white hover:border-white',
    gold: 'bg-gold text-white hover:text-white hover:bg-gold-dark shadow-soft hover:shadow-gold hover:-translate-y-0.5',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {content}
    </button>
  );
}
