import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import HomePage from '@/pages/HomePage.jsx';
import ServicesPage from '@/pages/ServicesPage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';

const IntroAnimation = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.45 } }}
    className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 18 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="flex flex-col items-center gap-4"
    >
      <motion.img
        src="/company-logo.png"
        alt="BeingSocially logo"
        className="h-24 w-24 md:h-28 md:w-28 object-contain"
        animate={{ rotate: [0, -3, 3, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.p
        className="text-white/90 text-sm tracking-[0.24em] uppercase"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, repeat: Infinity, repeatType: 'reverse' }}
      >
        BeingSocially
      </motion.p>
    </motion.div>
  </motion.div>
);

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return !sessionStorage.getItem('intro_seen');
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!showIntro) return;
    const timer = setTimeout(() => {
      setShowIntro(false);
      try {
        sessionStorage.setItem('intro_seen', 'true');
      } catch {
        // Ignore storage failures and continue.
      }
    }, 1800);
    return () => clearTimeout(timer);
  }, [showIntro]);

  return (
    <Router>
      <AnimatePresence>
        {showIntro && <IntroAnimation />}
      </AnimatePresence>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
              <p className="text-xl text-muted-foreground mb-8">Page not found</p>
              <a href="/" className="btn-primary inline-block">Back to home</a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;