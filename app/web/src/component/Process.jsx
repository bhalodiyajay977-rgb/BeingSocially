import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Rocket, Users, TrendingUp } from 'lucide-react';
import ProcessStep from '@/components/ProcessStep.jsx';

const Process = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Understand your business',
      description: 'We learn about your goals, customers, and what makes you unique'
    },
    {
      number: 2,
      icon: FileText,
      title: 'Create a plan',
      description: 'Custom strategy designed specifically for your business needs'
    },
    {
      number: 3,
      icon: Rocket,
      title: 'Design and launch campaigns',
      description: 'Professional content and ads that grab attention and convert'
    },
    {
      number: 4,
      icon: Users,
      title: 'Bring you leads',
      description: 'Real customers who are ready to buy from you'
    },
    {
      number: 5,
      icon: TrendingUp,
      title: 'Optimize and grow',
      description: 'Continuous improvement to maximize your results'
    }
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How we work with you
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, proven process that delivers results
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index} 
              {...step} 
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;