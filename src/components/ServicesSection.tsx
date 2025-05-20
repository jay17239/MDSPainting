"use client";

import { Paintbrush, Home, Building2, PaintBucket } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

const services: ServiceItem[] = [
  {
    title: 'Interior Painting',
    description: 'Transform your living spaces with our professional interior painting services for homes and businesses.',
    icon: Paintbrush,
    href: '/services/interior-painting',
  },
  {
    title: 'Exterior Painting',
    description: 'Protect and beautify your property with our high-quality exterior painting solutions.',
    icon: Home,
    href: '/services/exterior-painting',
  },
  {
    title: 'Commercial Painting',
    description: 'Enhance your business image with our commercial painting services tailored for office spaces, retail, and more.',
    icon: Building2,
    href: '/services/commercial-painting',
  },
  {
    title: 'Cabinet Refinishing',
    description: 'Update your kitchen or bathroom with our cabinet refinishing services without the cost of a full remodel.',
    icon: PaintBucket,
    href: '/services/cabinet-refinishing',
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section bg-gray-50" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="max-w-2xl mx-auto text-center mb-12 text-gray-600">
          We offer a wide range of professional painting services for both residential and commercial properties.
        </p>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service: ServiceItem, index: number) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.href} className="text-primary font-medium hover:text-primary-dark inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 