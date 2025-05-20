"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">MDS Painting</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+12169653804"
            className="flex items-center gap-2 btn ml-4"
          >
            <Phone size={18} />
            <span>216.965.3804</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden py-4 px-6 bg-white border-t">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-3 font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+12169653804"
            className="flex items-center justify-center gap-2 btn mt-4 w-full"
          >
            <Phone size={18} />
            <span>216.965.3804</span>
          </a>
        </nav>
      )}
    </header>
  );
} 