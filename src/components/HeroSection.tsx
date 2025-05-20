"use client";

import Link from 'next/link';
import { Phone, Calendar, Image } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 pt-28 pb-16">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Northeast Ohio's Trusted Residential & Commercial Painting Experts
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Professional painting services with attention to detail, quality materials, and experienced painters.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-accent btn">
              <Calendar className="w-5 h-5 mr-2" />
              Get Free Estimate
            </Link>
            <a href="tel:+12169653804" className="btn">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <Link href="/gallery" className="btn bg-white text-primary hover:bg-gray-100">
              <Image className="w-5 h-5 mr-2" />
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 