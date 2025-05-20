"use client";

import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MDS Painting</h3>
            <p className="mb-4">Professional painting services for residential and commercial properties in Northeast Ohio.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-accent" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://instagram.com" className="hover:text-accent" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://linkedin.com" className="hover:text-accent" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/interior-painting" className="hover:text-accent">
                  Interior Painting
                </Link>
              </li>
              <li>
                <Link href="/services/exterior-painting" className="hover:text-accent">
                  Exterior Painting
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-painting" className="hover:text-accent">
                  Commercial Painting
                </Link>
              </li>
              <li>
                <Link href="/services/cabinet-refinishing" className="hover:text-accent">
                  Cabinet Refinishing
                </Link>
              </li>
              <li>
                <Link href="/services/power-washing" className="hover:text-accent">
                  Power Washing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-accent">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Phone: 216.965.3804</li>
              <li>Email: info@mdspainting.com</li>
              <li>
                <address className="not-italic">
                  MDS Painting<br />
                  2534 Grant Ave<br />
                  Cuyahoga Falls, OH 44223
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-primary-dark py-4">
        <div className="container text-center text-sm">
          <p>© {currentYear} MDS Painting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 