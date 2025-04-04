
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-festival-light-purple/40 to-white pt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-festival-light-blue rounded-full blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-festival-light-purple rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-festival-orange/20 rounded-full blur-xl opacity-40"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center z-10 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block px-6 py-3 bg-festival-purple/10 text-festival-purple rounded-full text-sm font-semibold">
            MARCH 15-16, 2025
          </div>
          
          <h1 className="font-montserrat font-extrabold text-5xl md:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-festival-purple via-festival-blue to-festival-purple">
            ABHYUDAY 2025
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-700">
            <span className="font-semibold">Where Innovation Meets Creativity!</span>
            <br />
            <span className="text-base md:text-lg">Ashoka Institute of Technology and Management</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={scrollToRegistration}
              size="lg" 
              className="bg-festival-orange hover:bg-orange-600 text-white font-semibold text-lg px-10"
            >
              Register Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-festival-purple text-festival-purple hover:bg-festival-purple/10 font-semibold text-lg px-10"
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Events
            </Button>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg flex items-center justify-center flex-col w-48">
            <div className="text-3xl font-bold text-festival-purple">15+</div>
            <div className="text-gray-600 font-medium">Events</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg flex items-center justify-center flex-col w-48">
            <div className="text-3xl font-bold text-festival-purple">500+</div>
            <div className="text-gray-600 font-medium">Participants</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg flex items-center justify-center flex-col w-48">
            <div className="text-3xl font-bold text-festival-purple">₹50K+</div>
            <div className="text-gray-600 font-medium">Prize Pool</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
