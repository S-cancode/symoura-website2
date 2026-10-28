'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/who-its-for', label: "Who It's For" },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/efficiency-assessment', label: 'Free Assessment' },
    { href: '/about', label: 'About' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-neutral-bg/80 backdrop-blur-xl border-b border-neutral-light-gray/80 shadow-soft'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 text-navy hover:text-navy">
            <span className="logo-mark h-8 w-8 text-navy transition-transform duration-500 group-hover:rotate-90" />
            <span className="text-xl font-bold tracking-[0.12em]">SYMOURA</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative whitespace-nowrap px-3.5 py-2 text-[15px] font-medium transition-colors ${
                    active ? 'text-navy' : 'text-neutral-medium-gray hover:text-navy'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-gold"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center ml-auto">
            <Button href="/discovery-call" variant="primary" arrow className="px-6 py-2.5 text-[15px]">
              Book Discovery Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-auto flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-white/70 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 flex flex-col gap-1 border-t border-neutral-light-gray pt-4 pb-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-3 py-2.5 font-medium transition-colors ${
                      pathname === link.href
                        ? 'bg-white/80 text-navy'
                        : 'text-neutral-medium-gray hover:bg-white/60 hover:text-navy'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button href="/discovery-call" variant="primary" arrow className="mt-3 w-full">
                  Book Discovery Call
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
