import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Share2, TrendingUp, Palette, Code, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Share2,
      title: 'Social media marketing',
      description: 'Build a powerful social media presence that attracts and converts your ideal customers.',
      benefits: [
        'Content strategy and calendar planning',
        'Professional post design and copywriting',
        'Community management and engagement',
        'Influencer collaboration and partnerships',
        'Social media advertising campaigns',
        'Monthly analytics and performance reports'
      ],
      pricing: 'Starting from ₹15,000/month',
      results: '2-3x follower growth and engagement in 90 days'
    },
    {
      icon: TrendingUp,
      title: 'Digital marketing',
      description: 'Drive qualified leads and sales through strategic paid advertising and SEO.',
      benefits: [
        'Google Ads campaign setup and management',
        'Facebook and Instagram ad campaigns',
        'Search engine optimization (SEO)',
        'Landing page optimization',
        'Conversion rate optimization',
        'Detailed ROI tracking and reporting'
      ],
      pricing: 'Starting from ₹20,000/month + ad spend',
      results: '5-10 qualified leads per week on average'
    },
    {
      icon: Palette,
      title: 'Graphic design',
      description: 'Create stunning visuals that make your brand stand out and attract customers.',
      benefits: [
        'Social media post designs',
        'Ad creatives and banners',
        'Logo and brand identity design',
        'Brochures and marketing materials',
        'Packaging and product design',
        'Unlimited revisions until perfect'
      ],
      pricing: 'Starting from ₹8,000/month',
      results: 'Professional brand identity that builds trust'
    },
    {
      icon: Code,
      title: 'Website development',
      description: 'Fast, mobile-friendly websites that turn visitors into paying customers.',
      benefits: [
        'Custom responsive website design',
        'Mobile-first development',
        'SEO-optimized structure',
        'Fast loading speeds',
        'Contact forms and lead capture',
        'Easy content management system'
      ],
      pricing: 'Starting from ₹25,000 one-time',
      results: '40% higher conversion rates on average'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our services - BeingSocially</title>
        <meta name="description" content="Comprehensive digital marketing services including social media marketing, digital advertising, graphic design, and website development." />
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
                Services that grow your business
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Everything you need to succeed online, backed by proven strategies and expert execution
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mb-6">
                      <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Expected results</p>
                      <p className="font-medium">{service.results}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Link to="/contact">
                        <Button className="btn-primary">
                          Get started
                        </Button>
                      </Link>
                      <p className="text-sm text-muted-foreground">{service.pricing}</p>
                    </div>
                  </div>

                  <div className={`bg-card rounded-2xl p-8 border border-border ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-xl font-semibold mb-6">What's included</h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Not sure which service you need?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book a free consultation and we'll create a custom plan for your business
              </p>
              <Link to="/contact">
                <Button className="btn-primary text-lg px-8 py-6">
                  Get free consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;