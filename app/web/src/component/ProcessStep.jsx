import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep = ({ number, title, description, icon: Icon, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Connector Line - Desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" style={{ transform: 'translateX(50%)' }} />
      )}
      
      {/* Step Number Circle */}
      <div className="relative z-10 w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4">
        <span className="text-4xl font-bold text-primary-foreground">{number}</span>
      </div>
      
      {/* Icon */}
      <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center mb-3 border border-border">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[250px]">{description}</p>
      
      {/* Connector Line - Mobile */}
      {!isLast && (
        <div className="lg:hidden w-0.5 h-12 bg-border my-4" />
      )}
    </motion.div>
  );
};

export default ProcessStep;