"use client";

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Gregory Shreve',
    role: 'Homeowner',
    comment: "What can I say. Mike at MDS Painting is a consummate professional. In addition to being a painter of the highest caliber, he is very diligent, has a great work ethic, and is a good communicator. You don't find all these attributes together very often. My house is large, with a lot of detail, and required several weeks to paint. But Mike made me a schedule, kept to it, and the quality never declined from beginning to end. I will be hiring him for another job this year! Highly recommended.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Leah Shaffer',
    role: 'Homeowner',
    comment: "10/10 would recommend. We moved into our house in August and had them paint almost everything. Fast forward to the new year and I called them again to finish a few rooms. They do an amazing job and you don't even notice they are there painting! They get the job done quick too!",
    rating: 5,
  },
  {
    id: 3,
    name: 'Taylor Fitzgerald',
    role: 'Repeat Customer',
    comment: "Mike is professional, personable, efficient, and timely. We have hired him for 4 separate jobs over the last 4 years and each time he's done a great job completing the projects. It's wonderful to have someone you can trust in your home! We look forward to continuing to use Mike for our painting needs.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Michael Lash',
    role: 'Homeowner',
    comment: "He did us a favor and caulked every doorway that led to our hallway as well, something we didn't ask or expect to be done. All in all, this was an excellent experience and I would recommend him to anyone painting their homes.",
    rating: 5,
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstReview = currentIndex === 0;
    const newIndex = isFirstReview ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastReview = currentIndex === reviews.length - 1;
    const newIndex = isLastReview ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="section bg-primary/5" id="reviews">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="max-w-2xl mx-auto text-center mb-12 text-gray-600">
          Don't just take our word for it - hear what our customers have to say about our services.
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 md:-translate-x-16">
            <button 
              onClick={goToPrevious} 
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 md:translate-x-16">
            <button 
              onClick={goToNext} 
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {/* Star Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < (reviews[currentIndex]?.rating || 0)
                          ? 'text-accent fill-accent'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Comment */}
                <blockquote className="text-xl italic mb-6">
                  "{reviews[currentIndex].comment}"
                </blockquote>

                {/* Customer Info */}
                <div className="font-bold text-lg">
                  {reviews[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {reviews[currentIndex].role}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}