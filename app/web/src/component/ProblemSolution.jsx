import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, BarChart3, HelpCircle, CheckCircle } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Not getting leads?',
      description: 'Your competitors are getting customers while you struggle to find new ones'
    },
    {
      icon: BarChart3,
      title: 'Low engagement?',
      description: 'Your social media posts get few likes and even fewer conversions'
    },
    {
      icon: HelpCircle,
      title: 'Confused about marketing?',
      description: 'Too many options, too much advice, and no clear path forward'
    }
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Problems */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Sound familiar?
            </motion.h2>
            
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border-l-4 border-primary"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <problem.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-primary/5 rounded-2xl p-8 border border-primary/20"
          >
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              We handle everything for you
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Strategy, content, ads, and growth — all managed by experts who understand your business goals.
            </p>
            <ul className="space-y-3">
              {[
                'Clear marketing strategy tailored to your business',
                'Professional content that converts',
                'Targeted ads that bring real customers',
                'Monthly reports showing real growth'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;