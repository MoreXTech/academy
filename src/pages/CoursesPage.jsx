
    import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Filter, Search, BookOpen } from 'lucide-react';

const allCourses = [
  { id: 1, title: 'Freelancing Kickstarter', description: 'Launch your freelance career with proven strategies.', category: 'Freelancing', price: 'Free', imageAlt: 'Abstract design representing new beginnings in freelancing' },
  { id: 2, title: 'Remote Work Mastery', description: 'Excel in a remote environment and boost productivity.', category: 'Remote Work', price: '$49', imageAlt: 'Stylized graphic of a comfortable remote workspace' },
  { id: 3, title: 'Ethical Side Hustles', description: 'Discover profitable and ethical ways to earn extra income.', category: 'Side Hustles', price: '$29', imageAlt: 'Collection of icons symbolizing various ethical income streams' },
  { id: 4, title: 'Advanced Freelance Negotiation', description: 'Master the art of negotiation to maximize your earnings.', category: 'Freelancing', price: '$99', imageAlt: 'Two hands shaking, symbolizing successful negotiation' },
  { id: 5, title: 'Building a Remote Team Culture', description: 'Learn to foster a strong culture in distributed teams.', category: 'Remote Work', price: '$79', imageAlt: 'Network of connected people icons, representing a team' },
  { id: 6, title: 'Passive Income Streams 101', description: 'Explore various passive income models and get started.', category: 'Side Hustles', price: '$59', imageAlt: 'Growing plant symbolizing passive income growth' },
];

const categories = ['All', 'Freelancing', 'Remote Work', 'Side Hustles'];
const priceFilters = ['All', 'Free', 'Paid'];

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesPrice = selectedPrice === 'All' || (selectedPrice === 'Free' && course.price === 'Free') || (selectedPrice === 'Paid' && course.price !== 'Free');
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="space-y-12">
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12 bg-gradient-to-r from-primary/5 via-background to-accent/5 rounded-lg shadow-sm"
      >
        <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-foreground mb-4">Our Courses</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Explore our range of courses designed to help you master freelancing, remote work, and ethical income strategies.
        </p>
      </motion.section>

      {/* Filters and Search Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="p-6 bg-card rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          <div>
            <Label htmlFor="search-courses" className="block text-sm font-medium text-foreground mb-1">Search Courses</Label>
            <div className="relative">
              <Input 
                type="text" 
                id="search-courses"
                placeholder="e.g., Freelancing" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div>
            <Label htmlFor="category-filter" className="block text-sm font-medium text-foreground mb-1">Category</Label>
            <select 
              id="category-filter"
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div>
            <Label htmlFor="price-filter" className="block text-sm font-medium text-foreground mb-1">Price</Label>
            <select 
              id="price-filter"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {priceFilters.map(price => <option key={price} value={price}>{price}</option>)}
            </select>
          </div>
          <Button className="w-full md:w-auto flex items-center justify-center">
            <Filter className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </div>
      </motion.section>

      {/* Courses Grid Section */}
      <section>
        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Card className="h-full flex flex-col transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-full h-48 bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                       <img  alt={course.imageAlt} className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                    </div>
                    <CardTitle className="text-primary">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">Category: {course.category}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-accent">{course.price}</span>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Link to={`/courses/${course.id}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">No courses match your criteria.</p>
            <p className="text-foreground/70">Try adjusting your search or filters.</p>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default CoursesPage;
  