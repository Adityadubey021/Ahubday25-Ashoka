
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
      'fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
      scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-festival-purple font-bold text-2xl">
          Abhyuday<span className="text-festival-orange">2025</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-festival-purple font-medium">
            Home
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
