import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'light' | 'outline';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all duration-200 text-base';

  const variantStyles = {
    primary: 'bg-navy text-white hover:bg-navy-dark shadow-sm hover:shadow-md',
    secondary: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
    light: 'bg-blue text-white hover:bg-blue-dark shadow-md hover:shadow-lg',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-navy',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
