import React from 'react';
import { motion } from 'framer-motion';
import MetricCard from '@/components/MetricCard.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';

const Results = () => {
  const metrics = [
    { metric: '+300%', label: 'Average engagement increase' },
    { metric: '50+', label: 'Projects completed' },
    { metric: '40+', label: 'Happy clients' }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      businessType: 'E-commerce store owner',
      quote: 'BeingSocially helped us triple our online sales in just 4 months. Their social media strategy brought us customers we never thought we could reach.'
    },
    {
      name: 'Priya Mehta',
      businessType: 'Fitness studio owner',
      quote: 'I was struggling to get new members. Within 60 days of working with BeingSocially, we had a waitlist. Their ads and content are incredible.'
    },
    {
      name: 'Amit Patel',
      businessType: 'Real estate agent',
      quote: 'Finally, a marketing agency that understands my business. The leads are high-quality and the ROI is clear. Best investment I have made.'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real results from real businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our clients have achieved
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} index={index} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;