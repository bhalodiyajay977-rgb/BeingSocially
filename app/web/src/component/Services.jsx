import React from 'react';
import { motion } from 'framer-motion';
import { Share2, TrendingUp, Palette, Code } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard.jsx';

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: 'Social media marketing',
      description: 'Build a strong presence on Instagram, Facebook, and LinkedIn with engaging content and strategic campaigns.',
      result: 'Result: 2-3x more followers and engagement in 90 days'
    },
    {
      icon: TrendingUp,
      title: 'Digital marketing',
      description: 'Get more customers through Google Ads, Facebook Ads, and SEO strategies that actually work.',
      result: 'Result: 5-10 qualified leads per week'
    },
    {
      icon: Palette,
      title: 'Graphic design',
      description: 'Eye-catching designs for social media, ads, brochures, and everything your brand needs to stand out.',
      result: 'Result: Professional brand identity that attracts customers'
    },
    {
      icon: Code,
      title: 'Website development',
      description: 'Fast, mobile-friendly websites that turn visitors into customers with clear calls-to-action.',
      result: 'Result: 40% higher conversion rates'
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services that grow your business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed online, all in one place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;