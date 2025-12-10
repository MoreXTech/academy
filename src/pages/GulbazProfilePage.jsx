import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserCircle, Briefcase, Award, BookOpen, TrendingUp, MessageSquare, Mail, Phone } from 'lucide-react';

const testimonials = [
  { name: 'Idris Musty', quote: 'Shahbaz is a true professional. His guidance was invaluable.', avatarAlt: 'Profile picture of Idris Musty' },
  { name: 'Adrian Kinga', quote: 'Working with Shahbaz accelerated my freelance career significantly.', avatarAlt: 'Profile picture of Adrian Kinga' },
  { name: 'Tim Slesinger', quote: 'His insights into ethical income are game-changing.', avatarAlt: 'Profile picture of Tim Slesinger' },
  { name: 'Fahad Bhutta', quote: 'Shahbaz\'s mentorship helped me navigate complex projects with ease.', avatarAlt: 'Profile picture of Fahad Bhutta' },
];

const careerTimeline = [
  { year: '2009-2011', role: 'Teaching', description: 'Instilled knowledge and passion in students.', icon: <BookOpen className="h-6 w-6 text-primary" /> },
  { year: '2011-2013', role: 'Sales & Marketing', description: 'Developed strategies and drove growth in competitive markets.', icon: <TrendingUp className="h-6 w-6 text-primary" /> },
  { year: '2013-2017', role: 'Academia & Research', description: 'Contributed to scientific advancements as a Physicist.', icon: <Award className="h-6 w-6 text-primary" /> },
  { year: '2017-Present', role: 'Freelancing & Mentorship', description: 'Empowering individuals and businesses globally.', icon: <Briefcase className="h-6 w-6 text-primary" /> },
];

const ShahbazProfilePage = () => {
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
          <UserCircle className="h-24 w-24 text-primary mx-auto mb-6" />
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
          >
            Salam, I’m Shahbaz Ahmed
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-foreground/80 mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
          >
            Freelancer, Mentor & Physicist
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          >
            15+ Years Helping People Earn Ethically Worldwide
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform">
              <Link to="/our-mentors#services">Book a 1:1 Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Bio Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img  alt="Professional headshot of Shahbaz Ahmed" className="rounded-lg shadow-xl mx-auto w-full max-w-sm object-cover aspect-square" src="https://images.unsplash.com/photo-1684262855344-b9da453a7934" />
          </motion.div>
          <motion.div 
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground">About Me</h2>
            <p className="text-foreground/80 leading-relaxed">
              Being a Physicist by training, and Businessman by attitude, I have been helping people earn ethically from all over the world for the last 15+ years. My expertise spans across scientific writing, marketing, freelancing, and mentorship.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/70">
              "The important thing is not to stop questioning. Curiosity has its own reason for existing." - Albert Einstein
            </blockquote>
            <p className="text-foreground/80 font-semibold">
              15 Years of Experience, 10 Awards & Honors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">My Journey</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute top-0 h-full w-1 bg-primary left-1/2 transform -translate-x-1/2 hidden md:block"></div>
            {careerTimeline.map((item, index) => (
              <motion.div
                key={index}
                className="mb-8 flex md:items-center w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <div className={`flex md:flex-row flex-col items-center w-full`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:order-2'}`}>
                    <Card className="shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                           <CardTitle className="text-primary">{item.role}</CardTitle>
                           <div className="md:hidden">{item.icon}</div>
                        </div>
                        <CardDescription className="text-sm">{item.year}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-0 items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary shadow-md">
                    {item.icon}
                  </div>
                   <div className="w-full md:w-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Card className="glassmorphism h-full">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                      <img  alt={testimonial.avatarAlt} className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/flagged/photo-1608632359963-5828fa3b4141" />
                    </div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                  </div>
                  <blockquote className="text-foreground/80 italic flex-grow">"{testimonial.quote}"</blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-foreground">Need Personalized Guidance?</h2>
          <p className="text-foreground/80 mb-8 max-w-xl mx-auto">
            Reach out for a consultation or to discuss your specific needs. I'm here to help you succeed.
          </p>
          <motion.div 
            className="space-y-4 sm:space-y-0 sm:flex sm:flex-wrap sm:justify-center sm:items-center sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
              <a href="mailto:your.email@example.com">
                <Mail className="mr-2 h-5 w-5" /> Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-md">
              <a href="https://wa.me/13132308977" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" /> WhatsApp: +1-313-230-8977
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShahbazProfilePage;
