'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/who-its-for', label: "Who It's For" },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral-bg border-b border-neutral-light-gray">
      <nav className="container-custom py-4">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-navy hover:opacity-80 transition-opacity">
            SYMOURA
          </Link>

          {/* Desktop Navigation Links (Left Side) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-medium-gray hover:text-navy transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button (Right Side) */}
          <div className="hidden md:flex items-center ml-auto">
            <Button href="/discovery-call" variant="primary">
              Book Discovery Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-neutral-light-gray">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-medium-gray hover:text-navy transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/discovery-call" variant="primary" className="w-full">
                Book Discovery Call
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
