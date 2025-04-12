
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

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
      'fixed w-full z-50 transition-all duration-500 py-3 px-6 md:px-12',
      scrolled ? 'bg-[#1A1F2C]/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/a15de4f2-1ba0-466c-8068-10aaddbab593.png" 
            alt="Ashoka Institute Logo" 
            className="h-24 md:h-28 mr-3 transition-transform duration-300 hover:scale-105" 
          />
          {/* Removed date that was here */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-white hover:text-festival-orange font-medium transition-all duration-300 hover:scale-105">
            Home
          </button>
          <button onClick={() => scrollToSection('events')} className="text-white hover:text-festival-orange font-medium transition-all duration-300 hover:scale-105">
            Events
          </button>
          <button onClick={() => scrollToSection('schedule')} className="text-white hover:text-festival-orange font-medium transition-all duration-300 hover:scale-105">
            Schedule
          </button>
          <button onClick={() => scrollToSection('faculty-coordinators')} className="text-white hover:text-festival-orange font-medium transition-all duration-300 hover:scale-105">
            Coordinators
          </button>
        </div>

        {/* Register Button */}
        <Button 
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfd3gaB4TXlIKNanGRxXfiVsnANlwmeRgu4wSESAynpNnawcw/viewform?usp=sharing', '_blank')}
          className="hidden md:block bg-festival-orange hover:bg-orange-600 text-white font-medium shadow-lg shadow-orange-700/20 transition-all duration-300 hover:scale-105"
        >
          Register Now
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A1F2C] absolute top-full left-0 right-0 shadow-md p-5">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-festival-orange font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('events')} className="text-white hover:text-festival-orange font-medium">
              Events
            </button>
            <button onClick={() => scrollToSection('schedule')} className="text-white hover:text-festival-orange font-medium">
              Schedule
            </button>
            <button onClick={() => scrollToSection('faculty-coordinators')} className="text-white hover:text-festival-orange font-medium">
              Coordinators
            </button>
            
            <Button 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfd3gaB4TXlIKNanGRxXfiVsnANlwmeRgu4wSESAynpNnawcw/viewform?usp=sharing', '_blank')}
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
