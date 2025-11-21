import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Zap, CalendarCheck, CreditCard, ExternalLink, HelpCircle, CheckCircle, UserCircle as MentorIcon } from 'lucide-react';

const mentors = [
  { name: 'Shahbaz Ahmed', expertise: 'Freelancing, Scientific Writing, Marketing', imageAlt: 'Professional photo of Shahbaz Ahmed', profileLink: '/our-mentors/shahbaz' },
  { name: 'Gulbaz Ahmed', expertise: 'Remote Work Strategies, Side Hustles', imageAlt: 'Professional photo of Gulbaz Ahmed', profileLink: '#' }, // Update link if Gulbaz gets a profile page
];

const servicesOffered = [
  { title: 'Freelancing Jumpstart', description: 'A comprehensive strategy session for beginners looking to launch their freelance career effectively.' },
  { title: 'Career Transition to Freelancing', description: 'Guidance and support for professionals aiming to switch to a full-time freelancing model.' },
  { title: 'Advanced Skills Mentorship', description: 'Specialized coaching in areas like scientific writing, advanced marketing, and niche skill development.' },
];

const howItWorks = [
  { step: 1, title: 'Choose Your Service', description: 'Select the mentorship package that best fits your needs.', icon: <Zap className="h-8 w-8 text-primary" /> },
  { step: 2, title: 'Book Your Slot', description: 'Pick a convenient time via Calendly (link provided upon service selection).', icon: <CalendarCheck className="h-8 w-8 text-primary" /> },
  { step: 3, title: 'Secure Payment', description: 'Complete your payment securely via PayPal or Stripe.', icon: <CreditCard className="h-8 w-8 text-primary" /> },
];

const platformLinks = [
  { name: 'PeoplePerHour', href: 'https://www.peopleperhour.com/freelancer/yourprofile', imageAlt: 'PeoplePerHour logo' },
  { name: 'Upwork', href: 'https://www.upwork.com/freelancers/yourprofile', imageAlt: 'Upwork logo' },
];

const faqItems = [
  { question: "What’s your success rate with mentees?", answer: "We've successfully guided over 100+ clients globally, with a 90% repeat business rate, indicating high satisfaction and tangible results." },
  { question: "What are your mentorship rates?", answer: "Rates start at $XX/hour. Project-based packages and discounts for longer commitments are available. Please inquire for a custom quote." },
  { question: "How is mentorship delivered?", answer: "Sessions are typically conducted via video call (Zoom, Google Meet). We also provide resources and email support between sessions." },
];

const OurMentorsPage = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-inner"
      >
        <div className="container mx-auto px-4">
          <Users className="h-24 w-24 text-primary mx-auto mb-6" />
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Mentors
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          >
            Accelerate Your Freelancing Career or Side Hustle with Personalized Guidance from Experienced Professionals
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform">
              <Link to="#services">Explore Mentorship Services</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Meet the Mentors Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Meet Your Mentors</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col items-center text-center p-6 transform hover:shadow-2xl transition-shadow duration-300">
                <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4 overflow-hidden border-2 border-primary">
                  <img  alt={mentor.imageAlt} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1575383596664-30f4489f9786" />
                </div>
                <CardTitle className="text-2xl text-primary mb-1">{mentor.name}</CardTitle>
                <CardDescription className="text-foreground/70 mb-3">{mentor.expertise}</CardDescription>
                <Button asChild variant="link" className="text-accent">
                  <Link to={mentor.profileLink}>View Profile</Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Offered Section */}
      <section id="services" className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Mentorship Services Offered</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {servicesOffered.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 * index, duration: 0.4 }}
              >
                <Card className="h-full p-6 bg-background shadow-lg hover:shadow-primary/20 transition-shadow">
                  <CardHeader className="p-0 mb-3">
                    <MentorIcon className="h-10 w-10 text-accent mb-3" />
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-foreground/80">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {howItWorks.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="p-6"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto mb-6 border-2 border-primary">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{item.step}. {item.title}</h3>
              <p className="text-foreground/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Platform Links Section */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-foreground">Hire Our Mentors On Freelancing Platforms</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {platformLinks.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow w-52"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.4 }}
              >
                <div className="w-24 h-12 mb-3 flex items-center justify-center">
                  <img  alt={platform.imageAlt} className="max-h-full max-w-full object-contain" src="https://images.unsplash.com/photo-1643101808019-34feab61ea6a" />
                </div>
                <span className="text-lg font-semibold text-primary">{platform.name}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground ml-1" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.4 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <CardTitle className="text-lg text-accent flex items-center">
                    <HelpCircle className="h-5 w-5 mr-3" /> {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-foreground/80 flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" /> 
                    <span>{item.answer}</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurMentorsPage;