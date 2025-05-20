"use client";

import { Award, Shield, Clock, ThumbsUp, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: Clock,
    title: '10+ Years Experience',
    description: 'A decade of delivering exceptional painting services to satisfied customers.',
  },
  {
    icon: Shield,
    title: 'Fully Licensed & Insured',
    description: 'We maintain all necessary licenses and insurance for your complete peace of mind.',
  },
  {
    icon: ThumbsUp,
    title: 'Quality Guaranteed',
    description: 'We stand behind our work with a satisfaction guarantee on all projects.',
  },
  {
    icon: Briefcase,
    title: 'Locally Owned',
    description: 'A proud Ohio business dedicated to serving our local community.',
  },
  {
    icon: Award,
    title: 'Professional Team',
    description: 'Our painters are skilled professionals with extensive training and experience.',
  },
];

export default function WhyChooseUs() {
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
    <section className="section bg-white" id="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="max-w-2xl mx-auto text-center mb-12 text-gray-600">
          At MDS Painting, we're committed to excellence in every aspect of our service.
        </p>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-lg flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 