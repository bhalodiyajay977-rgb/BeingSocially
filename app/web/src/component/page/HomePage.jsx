import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion } from '@/components/ui/accordion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Hero from '@/components/Hero.jsx';
import ProblemSolution from '@/components/ProblemSolution.jsx';
import Services from '@/components/Services.jsx';
import Process from '@/components/Process.jsx';
import Results from '@/components/Results.jsx';
import ClientSlider from '@/components/ClientSlider.jsx';
import LeadForm from '@/components/LeadForm.jsx';
import FAQItem from '@/components/FAQItem.jsx';
import { Target, Zap, Award, Shield } from 'lucide-react';

const HomePage = () => {
  const whyChooseUs = [
    {
      icon: Target,
      title: 'Results-focused approach',
      description: 'We measure success by your growth, not just likes and followers'
    },
    {
      icon: Zap,
      title: 'Fast turnaround',
      description: 'See your first campaigns live within 7 days of starting'
    },
    {
      icon: Award,
      title: 'Proven track record',
      description: 'Over 40 businesses have grown with our strategies'
    },
    {
      icon: Shield,
      title: 'Transparent reporting',
      description: 'Monthly reports showing exactly what we did and the results we achieved'
    }
  ];

  const faqs = [
    {
      question: 'How quickly will I see results?',
      answer: 'Most clients start seeing increased engagement within 2-3 weeks. Lead generation typically picks up within 30-45 days as we optimize campaigns based on performance data.'
    },
    {
      question: 'Do I need to sign a long-term contract?',
      answer: 'No. We offer flexible month-to-month plans. We believe in earning your business every month through results, not locking you into long contracts.'
    },
    {
      question: 'What makes you different from other agencies?',
      answer: 'We focus on results that matter to your business — leads and sales, not just vanity metrics. Plus, we provide transparent reporting and work as an extension of your team.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Our pricing depends on your specific needs and goals. We offer customized packages starting from affordable monthly retainers. Book a free consultation to get a personalized quote.'
    },
    {
      question: 'Will I have a dedicated account manager?',
      answer: 'Yes. Every client gets a dedicated account manager who understands your business and is available to answer questions and provide updates.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>BeingSocially - Grow your business faster online</title>
        <meta name="description" content="Digital marketing agency helping businesses get more leads, sales, and brand visibility through social media marketing, digital ads, and web development." />
      </Helmet>

      <Header />

      <main>
        <Hero />
        <ClientSlider />
        <ProblemSolution />
        <Services />
        <Process />
        <Results />

        {/* Why Choose Us */}
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
                Why choose BeingSocially
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We are different from other agencies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to grow your business?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Get a free marketing plan customized for your business. No obligations, no sales pressure.
                </p>
                <ul className="space-y-3">
                  {[
                    'Free 30-minute consultation',
                    'Custom marketing strategy',
                    'Clear pricing with no hidden fees',
                    'Start seeing results in 30 days'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground text-sm">✓</span>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <LeadForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                Frequently asked questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem 
                    key={index}
                    value={`item-${index}`}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center border border-primary/20"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's grow your business together
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join 40+ businesses that trust us to handle their digital marketing
              </p>
              <Link to="/contact">
                <Button className="btn-primary text-lg px-8 py-6">
                  Start now
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

export default HomePage;