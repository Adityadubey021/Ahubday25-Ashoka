
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
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const openRegistrationForm = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfd3gaB4TXlIKNanGRxXfiVsnANlwmeRgu4wSESAynpNnawcw/viewform?usp=sharing", "_blank");
  };

  return (
    <nav className={cn('fixed w-full z-50 transition-all duration-300 py-2 px-6 md:px-12', 
      scrolled ? 'bg-festival-dark/90 shadow-md backdrop-blur-sm' : 'bg-transparent')}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img alt="Ashoka Institute Logo" src="/lovable-uploads/3e78fd41-73df-48fd-af89-98e3f1b0480c.png" className="h-20 mr-5" />
          <div className="flex flex-col items-start">
            <img src="/lovable-uploads/2bf9a200-0cb6-4a41-8756-2674b29875c7.png" alt="Abhyuday Logo" className="h-10 mb-1" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('home')} className="text-white hover:text-festival-teal font-medium transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-festival-teal font-medium transition-colors">
            About the Event
          </button>
          <button onClick={() => scrollToSection('schedule')} className="text-white hover:text-festival-teal font-medium transition-colors">
            Schedule
          </button>
          <button onClick={() => scrollToSection('events')} className="text-white hover:text-festival-teal font-medium transition-colors">
            Events
          </button>
          <button onClick={() => scrollToSection('coordinators')} className="text-white hover:text-festival-teal font-medium transition-colors">
            Coordinators
          </button>
        </div>

        {/* Register Button */}
        <Button onClick={openRegistrationForm} className="hidden md:block bg-festival-teal hover:bg-festival-teal/80 text-black font-medium btn-glow">
          Register Now
        </Button>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none" aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-festival-dark/95 backdrop-blur-lg absolute top-full left-0 right-0 shadow-md p-5">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-festival-teal font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-festival-teal font-medium transition-colors">
              About the Event
            </button>
            <button onClick={() => scrollToSection('schedule')} className="text-white hover:text-festival-teal font-medium transition-colors">
              Schedule
            </button>
            <button onClick={() => scrollToSection('events')} className="text-white hover:text-festival-teal font-medium transition-colors">
              Events
            </button>
            <button onClick={() => scrollToSection('coordinators')} className="text-white hover:text-festival-teal font-medium transition-colors">
              Coordinators
            </button>
            
            <Button onClick={openRegistrationForm} className="bg-festival-teal hover:bg-festival-teal/80 text-black font-medium btn-glow">
              Register Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
