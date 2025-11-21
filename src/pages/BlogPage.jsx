
    import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Edit3, CalendarDays } from 'lucide-react';

const blogPosts = [
  { id: 1, title: 'How to Earn $5K/Month Freelancing', slug: 'how-to-earn-5k-month-freelancing', excerpt: 'A step-by-step guide to achieving a $5,000 monthly income through freelancing, covering client acquisition, pricing, and scaling.', date: '2025-05-15', category: 'Freelancing', imageAlt: 'Upward trending graph with dollar signs' },
  { id: 2, title: 'Top 10 Remote Work Tools for Productivity', slug: 'top-10-remote-work-tools', excerpt: 'Discover the best tools that can significantly boost your productivity and collaboration while working remotely.', date: '2025-05-10', category: 'Remote Work', imageAlt: 'Collection of software logos or tool icons' },
  { id: 3, title: 'Ethical Considerations for Side Hustles', slug: 'ethical-side-hustles', excerpt: 'Navigating the ethical landscape of side hustles to ensure your ventures are both profitable and principled.', date: '2025-05-05', category: 'Side Hustles', imageAlt: 'Scales of justice or a compass symbolizing ethics' },
  { id: 4, title: 'The Future of Freelancing: Trends to Watch', slug: 'future-of-freelancing', excerpt: 'Explore emerging trends in the freelance economy and how to position yourself for future success.', date: '2025-04-28', category: 'Freelancing', imageAlt: 'Futuristic cityscape or abstract technology background' },
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12 bg-gradient-to-r from-primary/5 via-background to-accent/5 rounded-lg shadow-sm"
      >
        <Edit3 className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-foreground mb-4">Academy Blog</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Insights, tips, and strategies on freelancing, remote work, and ethical income generation.
        </p>
      </motion.section>

      {/* Search Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-12"
      >
        <div className="relative max-w-lg mx-auto">
          <Label htmlFor="search-blog" className="sr-only">Search Blog</Label>
          <Input 
            type="text" 
            id="search-blog"
            placeholder="Search articles..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-3 text-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </motion.section>

      {/* Blog Posts Grid Section */}
      <section>
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Card className="h-full flex flex-col transform hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-full h-48 bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                       <img  alt={post.imageAlt} className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                    </div>
                    <CardTitle className="text-primary hover:underline">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <CalendarDays className="h-3 w-3 mr-1.5" />
                      <span>{post.date}</span>
                      <span className="mx-1.5">·</span>
                      <span>{post.category}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80">
                      <Link to={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
            <p className="text-xl text-muted-foreground">No articles match your search.</p>
            <p className="text-foreground/70">Try a different keyword or check back soon for new content!</p>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;
  