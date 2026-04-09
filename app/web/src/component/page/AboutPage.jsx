import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Target, Users, Zap, Heart } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-driven',
      description: 'We measure success by your growth, not vanity metrics'
    },
    {
      icon: Users,
      title: 'Client-focused',
      description: 'Your success is our success. We work as an extension of your team'
    },
    {
      icon: Zap,
      title: 'Fast execution',
      description: 'We move quickly without compromising quality'
    },
    {
      icon: Heart,
      title: 'Transparent',
      description: 'Clear communication, honest reporting, no hidden fees'
    }
  ];

  const milestones = [
    { year: '2021', event: 'BeingSocially founded with a mission to help small businesses grow online' },
    { year: '2022', event: 'Reached 20 clients and expanded services to include web development' },
    { year: '2023', event: 'Helped clients achieve over 300% average growth in engagement' },
    { year: '2024', event: 'Serving 40+ businesses across multiple industries' }
  ];

  return (
    <>
      <Helmet>
        <title>About us - BeingSocially</title>
        <meta name="description" content="Learn about BeingSocially's mission to help businesses grow online through strategic digital marketing and transparent partnerships." />
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
                We help businesses grow without the confusion
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                BeingSocially was founded on a simple belief: every business deserves clear, effective marketing that actually works
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We started BeingSocially because we saw too many small businesses struggling with digital marketing. They were overwhelmed by options, confused by jargon, and frustrated by agencies that promised the world but delivered little.
                  </p>
                  <p>
                    We knew there had to be a better way. A way that focused on real results, clear communication, and honest partnerships.
                  </p>
                  <p>
                    Today, we work with over 40 businesses across industries, helping them get more leads, more sales, and better brand visibility. Our approach is simple: understand your business, create a clear strategy, and execute with excellence.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h3 className="text-2xl font-semibold mb-6">Our mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To make digital marketing simple, effective, and accessible for every business — no matter the size or budget.
                </p>
                <h3 className="text-2xl font-semibold mb-6">Our vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted digital marketing partner for businesses that want to grow online without the confusion and complexity.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                What drives us every day
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
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
                Our journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our growth
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow pt-3">
                    <p className="text-muted-foreground leading-relaxed">{milestone.event}</p>
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
                Ready to grow with us?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join 40+ businesses that trust us to handle their digital marketing
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

export default AboutPage;