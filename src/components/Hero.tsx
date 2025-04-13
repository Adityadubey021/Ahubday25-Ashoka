import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const openRegistrationForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfd3gaB4TXlIKNanGRxXfiVsnANlwmeRgu4wSESAynpNnawcw/viewform?usp=sharing', '_blank');
  };

  const scrollToChiefGuest = () => {
    // This will scroll to the Chief Guest section
    document.getElementById('chief-guest')?.scrollIntoView({ behavior: 'smooth' });
  };

  return <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* College Building Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/9a673412-b4ae-4e27-943f-5555bceb3882.png" alt="Ashoka Institute Building" className="w-full h-full object-cover brightness-[0.2]" />
      </div>
      
      {/* Enhanced 3D Decorative elements - made more animated and prominent */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-festival-blue rounded-full blur-3xl opacity-40 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-festival-orange rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-festival-purple/30 rounded-full blur-xl opacity-50"></div>
      
      {/* Dynamic moving shapes - added more for enhanced 3D effect */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-festival-orange/30 rounded-full blur-xl opacity-50 animate-float" style={{
        animationDelay: '1s',
        animationDuration: '7s'
      }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-festival-blue/40 rounded-full blur-xl opacity-40 animate-float" style={{
        animationDelay: '2s',
        animationDuration: '8s'
      }}></div>
      <div className="absolute top-1/2 right-1/3 w-36 h-36 bg-festival-purple/20 rounded-full blur-2xl opacity-30 animate-pulse-slow" style={{
        animationDelay: '3s',
        animationDuration: '10s'
      }}></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center z-10 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 flex flex-col justify-center items-center relative">
            <div className="absolute -inset-5 bg-gradient-to-r from-festival-blue/20 via-festival-purple/20 to-festival-orange/20 rounded-full blur-xl animate-pulse-slow opacity-70"></div>
            
            {/* Abhyuday Logo - made larger */}
            <img src="/lovable-uploads/a8c0776c-b911-43b5-8397-fb3075ac7d3d.png" alt="Abhyuday 2025 Logo" className="h-48 md:h-56 relative z-10" />
          </div>
          
          <div className="mb-6 inline-block px-6 py-3 bg-[#1A1F2C]/50 text-festival-orange rounded-full text-sm font-semibold animate-pulse-slow border border-festival-orange/30">
            APRIL 25-26, 2025
          </div>
          
          <h1 className="font-montserrat font-extrabold text-5xl md:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 relative">
            <span style={{
              animationDuration: '6s'
            }} className="animate-float inline-block">STATE LEVEL LIT-TECH FIESTA</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-festival-blue/20 via-festival-purple/20 to-festival-orange/20 rounded-xl blur-md -z-10"></div>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-300">
            <span className="font-semibold">Where Innovation Meets Creativity!</span>
            <br />
            <span className="text-base md:text-lg">Ashoka Institute of Technology and Management, Varanasi</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10 bg-[#1A1F2C]/50 p-6 rounded-xl">
            <img src="/lovable-uploads/9b112e09-6df4-4fba-84d6-17d3eb43a5cc.png" alt="IEEE" className="h-16 bg-white/10 p-2 rounded-lg shadow-sm" />
            <img src="/lovable-uploads/962aa6b0-f073-45eb-9f2b-ddd4a89596b5.png" alt="CSI" className="h-16 bg-white/10 p-2 rounded-lg shadow-sm" />
            <img src="/lovable-uploads/26fd8b4e-ff13-4a73-bad2-23bab1d9c31b.png" alt="IIC" className="h-16 bg-white/10 p-2 rounded-lg shadow-sm" />
            <img src="/lovable-uploads/f6580ef9-d95f-4237-b141-c645952ecfce.png" alt="IE" className="h-16 bg-white/10 p-2 rounded-lg shadow-sm" />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={openRegistrationForm} size="lg" className="bg-festival-orange hover:bg-orange-600 text-white font-semibold text-lg px-10 shadow-lg shadow-orange-700/30 hover:shadow-orange-600/50 transition-all">
              Register Now
            </Button>
            
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-semibold text-lg px-10 shadow-md hover:shadow-lg transition-all" onClick={() => document.getElementById('events')?.scrollIntoView({
              behavior: 'smooth'
            })}>
              Explore Events
            </Button>
          </div>

          {/* CTA for Chief Guest - made more prominent */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button onClick={scrollToChiefGuest} className="text-festival-orange hover:text-white py-2 px-4 rounded-full bg-white/10 hover:bg-festival-orange/20 transition-colors border border-festival-orange/30">
              Meet Our Chief Guest
            </button>
            <button onClick={() => document.getElementById('schedule')?.scrollIntoView({
              behavior: 'smooth'
            })} className="text-festival-orange hover:text-white py-2 px-4 rounded-full bg-white/10 hover:bg-festival-orange/20 transition-colors border border-festival-orange/30">
              View Full Schedule
            </button>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="bg-[#1A1F2C]/70 backdrop-blur p-6 rounded-xl shadow-lg flex items-center justify-center flex-col w-48 hover:shadow-xl transition-all hover:-translate-y-1 border border-white/10">
            <div className="text-3xl font-bold text-festival-orange">15+</div>
            <div className="text-gray-300 font-medium">Events</div>
          </div>
          
          <div className="bg-[#1A1F2C]/70 backdrop-blur p-6 rounded-xl shadow-lg flex items-center justify-center flex-col w-48 hover:shadow-xl transition-all hover:-translate-y-1 border border-white/10">
            <div className="text-3xl font-bold text-festival-orange">200+</div>
            <div className="text-gray-300 font-medium">Participants</div>
          </div>
          
          <div className="bg-[#1A1F2C]/70 backdrop-blur p-6 rounded-xl shadow-lg flex items-center justify-center flex-col w-48 hover:shadow-xl transition-all hover:-translate-y-1 border border-white/10">
            <div className="text-3xl font-bold text-festival-orange">₹50K+</div>
            <div className="text-gray-300 font-medium">Prize Pool</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#121621] to-transparent"></div>
    </section>;
};

export default Hero;
