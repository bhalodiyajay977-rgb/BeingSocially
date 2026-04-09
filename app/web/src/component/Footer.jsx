import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-border bg-background flex items-center justify-center">
                <img
                  src="/company-logo.png"
                  alt="BeingSocially logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-primary font-bold text-xl">BS</span>
              </div>
              <span className="text-xl font-bold">BeingSocially</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping businesses grow faster online with strategic digital marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Quick links</span>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Home
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Services
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Contact us</span>
            <div className="flex flex-col space-y-3">
              <a href="mailto:hello@beingsocially.com" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Mail className="h-4 w-4" />
                <span>hello@beingsocially.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Follow us</span>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} BeingSocially. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;