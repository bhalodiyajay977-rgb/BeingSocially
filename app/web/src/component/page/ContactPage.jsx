import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import LeadForm from '@/components/LeadForm.jsx';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@beingsocially.com',
      link: 'mailto:hello@beingsocially.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mumbai, India',
      link: null
    },
    {
      icon: Clock,
      title: 'Business hours',
      value: 'Mon-Sat: 10am - 7pm',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact us - BeingSocially</title>
        <meta name="description" content="Get in touch with BeingSocially for a free consultation. We're here to help your business grow online." />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Let's talk about growing your business
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get a free consultation and custom marketing plan. No obligations, no sales pressure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <LeadForm />
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Have questions? We're here to help. Reach out through any of these channels and we'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">
                          {info.title}
                        </p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-foreground hover:text-primary transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-3">What happens next?</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">1.</span>
                      <span>We'll review your information and business needs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">2.</span>
                      <span>Schedule a free 30-minute consultation call</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">3.</span>
                      <span>Create a custom marketing plan for your business</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">4.</span>
                      <span>Start growing your business within 7 days</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-center">Find us</h2>
              <div className="bg-card rounded-2xl overflow-hidden border border-border h-[400px]">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.8777%2C19.0760%2C72.8877%2C19.0860&layer=mapnik&marker=19.0810%2C72.8827"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="BeingSocially location map"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;