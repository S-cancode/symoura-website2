import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-bg border-t border-neutral-light-gray">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <span className="text-xl font-bold text-navy">SYMOURA</span>
            </Link>
            <p className="text-neutral-medium-gray text-sm">
              Custom invoice automation for UK SMEs
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-navy mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-neutral-medium-gray hover:text-navy text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/who-its-for" className="text-neutral-medium-gray hover:text-navy text-sm">
                  Who It&apos;s For
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-neutral-medium-gray hover:text-navy text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-medium-gray hover:text-navy text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-navy mb-3">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/discovery-call" className="text-neutral-medium-gray hover:text-navy text-sm">
                  Book Discovery Call
                </Link>
              </li>
              <li>
                <a href="mailto:team@symoura.com" className="text-neutral-medium-gray hover:text-navy text-sm">
                  team@symoura.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-light-gray">
          <p className="text-neutral-medium-gray text-sm text-center">
            © {currentYear} Symoura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
