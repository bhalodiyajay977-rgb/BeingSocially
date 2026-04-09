import React from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ metric, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {metric}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
};

export default MetricCard;