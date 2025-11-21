
    import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Briefcase, Mail, ExternalLink } from 'lucide-react';

const HireMePage = () => {
  return (
    <div className="space-y-12">
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12 bg-gradient-to-r from-primary/5 via-background to-accent/5 rounded-lg shadow-sm"
      >
        <Briefcase className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-foreground mb-4">Freelance & Consulting Services</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Leverage my expertise to achieve your business goals. I offer specialized services in [Your Specialization 1], [Your Specialization 2], and [Your Specialization 3].
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="transform hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Why Work With Me?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <p>With [X] years of experience in [Your Field], I bring a wealth of knowledge and a proven track record of delivering results. My approach is collaborative, data-driven, and tailored to your unique needs.</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Expertise in [Key Skill 1]</li>
                <li>Proficiency in [Key Skill 2]</li>
                <li>Commitment to [Your Core Value, e.g., ethical practices, client success]</li>
                <li>Proven results in [Type of projects or outcomes]</li>
              </ul>
              <p>I'm passionate about helping businesses like yours thrive in the digital landscape.</p>
            </CardContent>
          </Card>

          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Services Offered</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-foreground/90">
              <div>
                <h3 className="font-semibold text-lg">1. [Service Name 1, e.g., Web Development Consulting]</h3>
                <p className="text-sm text-foreground/80">Brief description of the service and its benefits.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">2. [Service Name 2, e.g., Digital Strategy Formulation]</h3>
                <p className="text-sm text-foreground/80">Brief description of the service and its benefits.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">3. [Service Name 3, e.g., Freelancer Coaching]</h3>
                <p className="text-sm text-foreground/80">Brief description of the service and its benefits.</p>
              </div>
              <p className="pt-2">Custom packages are available. Let's discuss your specific requirements.</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center py-12"
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Collaborate?</h2>
        <p className="text-lg text-foreground/80 mb-8 max-w-xl mx-auto">
          If you're looking for expert guidance and dedicated support for your next project, I'd love to hear from you.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform">
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-5 w-5" /> Contact Me via Email
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent/10 shadow-lg transform hover:scale-105 transition-transform">
            <a href="https://your-portfolio-website.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" /> View My Portfolio
            </a>
          </Button>
        </div>
        <div className="mt-10">
          <img  alt="Professional workspace with laptop and notebook" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1699843526854-250e2aca1a60" />
        </div>
      </motion.section>
    </div>
  );
};

export default HireMePage;
  