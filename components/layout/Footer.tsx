import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/who-its-for', label: "Who It's For" },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/about', label: 'About' },
  ];

  const contact = [
    { href: '/discovery-call', label: 'Book Discovery Call' },
    { href: '/efficiency-assessment', label: 'Free Efficiency Assessment' },
  ];

  const linkClass =
    'text-neutral-medium-gray hover:text-navy text-sm transition-colors inline-flex items-center gap-1.5 hover:translate-x-0.5 duration-200';

  return (
    <footer className="relative border-t border-neutral-light-gray/80 bg-white/40 backdrop-blur-sm">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 text-navy hover:text-navy">
              <span className="logo-mark h-7 w-7 text-navy" />
              <span className="text-lg font-bold tracking-[0.12em]">SYMOURA</span>
            </Link>
            <p className="text-neutral-medium-gray text-sm max-w-xs">
              Custom AI automation built around your systems
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark mb-4">Get in Touch</h4>
            <ul className="space-y-2.5">
              {contact.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:shivan@symoura.co.uk" className={linkClass}>
                  shivan@symoura.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-light-gray/80">
          <p className="text-neutral-medium-gray text-sm text-center">
            © {currentYear} Symoura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
