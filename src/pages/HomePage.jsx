
    import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, TrendingUp, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const featuredCourses = [
  { id: 1, title: 'Freelancing Kickstarter', description: 'Launch your freelance career with proven strategies.', imageAlt: 'Laptop with code and coffee', category: 'Freelancing', price: 'Free' },
  { id: 2, title: 'Remote Work Mastery', description: 'Excel in a remote environment and boost productivity.', imageAlt: 'Person working comfortably at home office', category: 'Remote Work', price: 'Free' },
  { id: 3, title: 'Ethical Side Hustles', description: 'Discover profitable and ethical ways to earn extra income.', imageAlt: 'Collection of diverse icons representing side hustles', category: 'Side Hustles', price: 'Free' },
];

const testimonials = [
  { id: 1, name: 'Ahmed K.', quote: 'This academy changed my perspective on freelancing. Highly recommended!', avatarAlt: 'Profile picture of Ahmed K.' },
  { id: 2, name: 'Fatima S.', quote: 'The resources are invaluable. I landed my first remote job thanks to their guidance.', avatarAlt: 'Profile picture of Fatima S.' },
];

const HomePage = () => {
  const { toast } = useToast();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      toast({
        title: "Subscription Successful!",
        description: `Thank you for subscribing with ${email}.`,
        variant: "default",
      });
      e.target.reset();
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

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
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
          >
            More X Tech <span className="text-primary">Academy</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          >
            Master Freelancing & Ethical Income Strategies
          </motion.p>
          <motion.div 
            className="space-x-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform">
              <Link to="/courses">Explore Courses <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 shadow-lg transform hover:scale-105 transition-transform">
              <Link to="/resources">Free Resources</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Courses Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Featured Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-full h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                    <img  alt={course.imageAlt} className="object-cover w-full h-full rounded-t-md" src="https://images.unsplash.com/photo-1696041757866-f19a8e46fab1" />
                  </div>
                  <CardTitle className="text-primary">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">Category: {course.category}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-accent">{course.price}</span>
                  <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
                    <Link to={`/courses/${course.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="link" className="text-primary text-lg">
            <Link to="/courses">View All Courses <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why More X Tech Academy?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />, title: "Expert-Led Content", description: "Learn from industry professionals with real-world experience." },
              { icon: <Users className="h-12 w-12 text-primary mx-auto mb-4" />, title: "Supportive Community", description: "Connect with peers and mentors in our active learning community." },
              { icon: <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />, title: "Career Focused", description: "Gain practical skills and strategies to achieve your income goals." },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="p-6 bg-background rounded-lg shadow-md"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What Our Students Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Card className="glassmorphism">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                      <img  alt={testimonial.avatarAlt} className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                    </div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                  </div>
                  <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-foreground">Stay Updated!</h2>
          <p className="text-foreground/80 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest course updates, free resources, and freelancing tips.
          </p>
          <motion.form 
            onSubmit={handleEmailSubmit} 
            className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Label htmlFor="email-signup" className="sr-only">Email address</Label>
            <Input type="email" name="email" id="email-signup" placeholder="Enter your email address" className="flex-grow" required />
            <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">Subscribe</Button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
  
