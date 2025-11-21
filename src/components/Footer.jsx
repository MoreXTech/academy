
    import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react'; // Added MessageCircle for WhatsApp
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: '#' },
  { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' },
  { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: '#' },
  { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: '#' },
  { name: 'YouTube', icon: <Youtube className="h-5 w-5" />, href: '#' },
  { name: 'WhatsApp', icon: <MessageCircle className="h-5 w-5" />, href: 'https://wa.me/yourphonenumber' }, // Replace with actual WhatsApp link
];

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="bg-foreground text-background/80 py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-lg font-semibold text-background mb-2">More X Tech Academy</p>
            <p className="text-sm">Master Freelancing & Ethical Income Strategies.</p>
          </div>
          <div>
            <p className="text-md font-semibold text-background mb-3">Quick Links</p>
            <ul className="space-y-2">
              <li><Link to="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/hire-me" className="hover:text-primary transition-colors">Hire Me</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-md font-semibold text-background mb-3">Connect With Us</p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} More X Tech | Learn at <a href="https://academy.morextech.com" className="font-semibold hover:text-primary transition-colors">academy.morextech.com</a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
  