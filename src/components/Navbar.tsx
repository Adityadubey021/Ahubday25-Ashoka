
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300 py-2 px-6 md:px-12',
      scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/41e5a39c-151c-4f70-ba93-378ff78a6434.png" 
            alt="Ashoka Institute Logo" 
            className="h-16 mr-3" 
          />
          <div className="flex flex-col items-start">
            <img 
              src="/lovable-uploads/2bf9a200-0cb6-4a41-8756-2674b29875c7.png" 
              alt="Abhyuday Logo" 
              className="h-10 mb-1" 
            />
            <div className="text-festival-purple font-bold text-xs">
              25-26 APRIL 2025
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-festival-purple font-medium">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-festival-purple font-medium">
            About the Event
          </button>
          <button onClick={() => scrollToSection('schedule')} className="text-gray-800 hover:text-festival-purple font-medium">
            Schedule
          </button>
          <button onClick={() => scrollToSection('events')} className="text-gray-800 hover:text-festival-purple font-medium">
            Events
          </button>
          <button onClick={() => scrollToSection('registration')} className="text-gray-800 hover:text-festival-purple font-medium">
            Registration
          </button>
          <button onClick={() => scrollToSection('coordinators')} className="text-gray-800 hover:text-festival-purple font-medium">
            Coordinators
          </button>
        </div>

        {/* Register Button */}
        <Button 
          onClick={() => scrollToSection('registration')}
          className="hidden md:block bg-festival-orange hover:bg-orange-600 text-white font-medium"
        >
          Register Now
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md p-5">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-festival-purple font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-festival-purple font-medium">
              About the Event
            </button>
            <button onClick={() => scrollToSection('schedule')} className="text-gray-800 hover:text-festival-purple font-medium">
              Schedule
            </button>
            <button onClick={() => scrollToSection('events')} className="text-gray-800 hover:text-festival-purple font-medium">
              Events
            </button>
            <button onClick={() => scrollToSection('registration')} className="text-gray-800 hover:text-festival-purple font-medium">
              Registration
            </button>
            <button onClick={() => scrollToSection('coordinators')} className="text-gray-800 hover:text-festival-purple font-medium">
              Coordinators
            </button>
            
            <Button 
              onClick={() => scrollToSection('registration')}
              className="bg-festival-orange hover:bg-orange-600 text-white font-medium"
            >
              Register Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
