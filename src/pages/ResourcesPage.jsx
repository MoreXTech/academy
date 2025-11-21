
    import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Download, FileText, Search, Filter } from 'lucide-react';

const allResources = [
  { id: 1, title: 'Freelance Contract Template', description: 'A comprehensive template for your client agreements.', type: 'Template', category: 'Freelancing', imageAlt: 'Icon of a document or contract' },
  { id: 2, title: 'Remote Work Checklist', description: 'Ensure you have everything set up for successful remote work.', type: 'Checklist', category: 'Remote Work', imageAlt: 'Icon of a checklist' },
  { id: 3, title: 'Side Hustle Idea Generator', description: 'A guide to help you brainstorm profitable side hustles.', type: 'Guide', category: 'Side Hustles', imageAlt: 'Icon of a lightbulb or idea generation' },
  { id: 4, title: 'Client Onboarding Guide', description: 'Streamline your client onboarding process with this guide.', type: 'Guide', category: 'Freelancing', imageAlt: 'Icon representing a smooth process or handshake' },
  { id: 5, title: 'Productivity Tools for Remote Workers', description: 'A curated list of tools to boost remote productivity.', type: 'Tool List', category: 'Remote Work', imageAlt: 'Icon of tools or gears' },
];

const resourceTypes = ['All', 'Template', 'Checklist', 'Guide', 'Tool List'];
const resourceCategories = ['All', 'Freelancing', 'Remote Work', 'Side Hustles'];

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredResources = allResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="space-y-12">
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12 bg-gradient-to-r from-primary/5 via-background to-accent/5 rounded-lg shadow-sm"
      >
        <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-foreground mb-4">Free Resources</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Access our library of downloadable templates, tools, and guides to accelerate your success.
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
            <Label htmlFor="search-resources" className="block text-sm font-medium text-foreground mb-1">Search Resources</Label>
            <div className="relative">
              <Input 
                type="text" 
                id="search-resources"
                placeholder="e.g., Contract Template" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div>
            <Label htmlFor="type-filter" className="block text-sm font-medium text-foreground mb-1">Type</Label>
            <select 
              id="type-filter"
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {resourceTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
          <div>
            <Label htmlFor="category-filter-resources" className="block text-sm font-medium text-foreground mb-1">Category</Label>
            <select 
              id="category-filter-resources"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {resourceCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <Button className="w-full md:w-auto flex items-center justify-center">
            <Filter className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </div>
      </motion.section>

      {/* Resources Grid Section */}
      <section>
        {filteredResources.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Card className="h-full flex flex-col transform hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                  <CardHeader>
                     <div className="w-full h-40 bg-muted rounded-md mb-4 flex items-center justify-center">
                       <img  alt={resource.imageAlt} className="h-20 w-20 text-primary opacity-50" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                    </div>
                    <CardTitle className="text-accent">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Type: {resource.type}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Category: {resource.category}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Download className="mr-2 h-4 w-4" /> Download
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
            <p className="text-xl text-muted-foreground">No resources match your criteria.</p>
            <p className="text-foreground/70">Try adjusting your search or filters, or check back later for new additions!</p>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default ResourcesPage;
  