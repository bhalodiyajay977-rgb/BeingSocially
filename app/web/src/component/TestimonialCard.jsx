import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ name, businessType, quote, index }) => {
  const avatarColors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-orange-500',
    'bg-pink-500'
  ];
  
  const initials = name.split(' ').map(n => n[0]).join('');
  const avatarColor = avatarColors[index % avatarColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl p-6 border border-border h-full flex flex-col"
    >
      <Quote className="h-8 w-8 text-primary mb-4" />
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
        "{quote}"
      </p>
      <div className="flex items-center space-x-3 pt-4 border-t border-border">
        <div className={`w-12 h-12 ${avatarColor} rounded-xl flex items-center justify-center`}>
          <span className="text-white font-semibold">{initials}</span>
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{businessType}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;