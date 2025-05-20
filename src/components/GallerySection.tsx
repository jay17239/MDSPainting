"use client";

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Sample gallery items - in a real implementation, these would come from a CMS or API
const galleryItems = [
  {
    id: 1,
    title: 'Kitchen Cabinet Refinishing',
    category: 'Interior',
    imageSrc: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 2,
    title: 'Exterior Home Painting',
    category: 'Exterior',
    imageSrc: 'https://images.unsplash.com/photo-1560170412-0f9463da3877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 3,
    title: 'Office Space Renovation',
    category: 'Commercial',
    imageSrc: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 4,
    title: 'Bathroom Refresh',
    category: 'Interior',
    imageSrc: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 5,
    title: 'Deck Staining',
    category: 'Exterior',
    imageSrc: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 6,
    title: 'Retail Store Painting',
    category: 'Commercial',
    imageSrc: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const categories = ['All', 'Interior', 'Exterior', 'Commercial'];
  
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="section bg-white" id="gallery">
      <div className="container">
        <h2 className="section-title">Our Work</h2>
        <p className="max-w-2xl mx-auto text-center mb-8 text-gray-600">
          Browse through our portfolio of completed projects to see the quality of our work.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {filteredItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <div 
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="aspect-w-4 aspect-h-3 relative h-64">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white text-sm mb-1">{item.category}</p>
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/gallery" className="btn">
            View All Projects
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="relative max-w-5xl w-full h-auto">
            {galleryItems.find(item => item.id === selectedImage) && (
              <>
                <Image
                  src={galleryItems.find(item => item.id === selectedImage)!.imageSrc}
                  alt={galleryItems.find(item => item.id === selectedImage)!.title}
                  width={1200}
                  height={800}
                  className="mx-auto max-h-[80vh] w-auto object-contain"
                  priority
                />
                <div className="text-white text-center mt-4">
                  <h3 className="text-xl font-bold">
                    {galleryItems.find(item => item.id === selectedImage)!.title}
                  </h3>
                  <p className="text-gray-300">
                    {galleryItems.find(item => item.id === selectedImage)!.category}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
} 