import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen, Briefcase, Lightbulb, FileText, UserCheck, GraduationCap, Users, UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/', icon: <GraduationCap className="h-5 w-5 mr-2" /> },
  { name: 'Courses', path: '/courses', icon: <BookOpen className="h-5 w-5 mr-2" /> },
  { name: 'Resources', path: '/resources', icon: <FileText className="h-5 w-5 mr-2" /> },
  { name: 'Blog', path: '/blog', icon: <Lightbulb className="h-5 w-5 mr-2" /> },
  { name: 'Our Mentors', path: '/our-mentors', icon: <Users className="h-5 w-5 mr-2" /> },
  { name: 'Hire Me', path: '/hire-me', icon: <UserCheck className="h-5 w-5 mr-2" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const activeLinkClass = "text-primary font-semibold border-b-2 border-primary";
  const inactiveLinkClass = "text-foreground/80 hover:text-primary transition-colors duration-300";

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">More X Tech <span className="text-primary">Academy</span></span>
          </Link>

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `${isActive ? activeLinkClass : inactiveLinkClass} flex items-center py-2 text-sm xl:text-base`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>
          
          <div className="hidden lg:block">
            <Button asChild variant="outline" className="mr-2 border-primary text-primary hover:bg-primary/10">
              <Link to="/courses">Explore Courses</Link>
            </Button>
            <Button asChild>
              <Link to="/resources">Free Resources</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background/95 border-t border-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium flex items-center ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-secondary/10 hover:text-primary'}`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
             {/* Add Shahbaz Profile Link for mobile if needed and distinct from "Our Mentors" main page */}
            <NavLink
                to="/our-mentors/shahbaz"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium flex items-center ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-secondary/10 hover:text-primary'}`
                }
              >
                <UserCircle className="h-5 w-5 mr-2" /> Shahbaz's Profile
            </NavLink>
            <div className="pt-4 pb-2 px-3 space-y-2">
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                <Link to="/courses" onClick={() => setIsOpen(false)}>Explore Courses</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/resources" onClick={() => setIsOpen(false)}>Free Resources</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;