import React from 'react';
import { motion } from 'framer-motion';

const ClientSlider = () => {
  const clients = [
    { name: 'Google', logo: 'G', logoSrc: 'https://cdn.simpleicons.org/google' },
    { name: 'Riot Games', logo: 'RG', logoSrc: 'https://cdn.simpleicons.org/riotgames' },
    { name: 'NVIDIA', logo: 'NV', logoSrc: 'https://cdn.simpleicons.org/nvidia' },
    { name: 'Cursor', logo: 'C', logoSrc: '' },
    { name: 'Versal', logo: 'V', logoSrc: '' },
    { name: 'Toyota', logo: 'T', logoSrc: 'https://cdn.simpleicons.org/toyota' }
  ];
  const marqueeClients = [...clients, ...clients];
  const renderClientItems = (suffix) =>
    marqueeClients.map((client, index) => (
      <div
        key={`${client.name}-${suffix}-${index}`}
        className="mx-3 min-w-max rounded-full border border-border bg-card px-5 py-3 text-sm md:text-base font-medium text-foreground flex items-center gap-4"
      >
        <div className="h-12 w-12 rounded-full bg-background border border-border overflow-hidden text-xs font-bold flex items-center justify-center">
          {client.logoSrc ? (
            <img
              src={client.logoSrc}
              alt={`${client.name} logo`}
              className="h-full w-full object-contain p-1.5"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
          ) : null}
          <span className={`${client.logoSrc ? 'hidden' : ''} text-primary`}>
            {client.logo}
          </span>
        </div>
        <span>{client.name}</span>
      </div>
    ));

  return (
    <section className="section-padding bg-secondary/40 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Businesses that trusted us before
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="client-slider-track" aria-label="Previous clients marquee">
          <div className="client-slider-group">
            {renderClientItems('a')}
          </div>
          <div className="client-slider-group" aria-hidden="true">
            {renderClientItems('b')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
