
    import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AlertTriangle, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4"
    >
      <AlertTriangle className="h-24 w-24 text-destructive mb-8 animate-bounce" />
      <h1 className="text-6xl font-extrabold text-foreground mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-foreground mb-6">Page Not Found</h2>
      <p className="text-lg text-foreground/80 mb-10 max-w-md">
        Oops! The page you're looking for doesn't seem to exist. It might have been moved, deleted, or maybe you mistyped the URL.
      </p>
      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform">
        <Link to="/">
          <Home className="mr-2 h-5 w-5" />
          Go Back to Homepage
        </Link>
      </Button>
      <div className="mt-16">
        <img  alt="Confused robot or a broken link icon" className="w-64 h-auto opacity-75" src="https://images.unsplash.com/photo-1562708581-76d16b2e5732" />
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
  