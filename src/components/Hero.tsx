import React from 'react';
import { Button } from '@/components/ui/button';
const Hero: React.FC = () => {
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen bg-gradient-to-b from-festival-light-purple/40 to-white pt-20 overflow-hidden">
      {/* Enhanced 3D Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-festival-light-blue rounded-full blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-festival-light-purple rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-festival-orange/20 rounded-full blur-xl opacity-40"></div>
      
      {/* Dynamic moving shapes */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-festival-blue/20 rounded-full blur-xl opacity-40 animate-float" style={{
      animationDelay: '1s',
      animationDuration: '7s'
    }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-festival-orange/30 rounded-full blur-xl opacity-30 animate-float" style={{
      animationDelay: '2s',
      animationDuration: '8s'
    }}></div>
      
      {/* Abhyuday Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <img src="/lovable-uploads/cc24c81f-4e39-450d-b4ab-1c850d241296.png" alt="Abhyuday Watermark" className="w-3/4 max-w-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center z-10 relative">
        {/* Ashoka Institute Logo - Center Top */}
        <div className="mb-8">
          
        </div>
        
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center relative">
            <div className="absolute -inset-5 bg-gradient-to-r from-festival-blue/20 via-festival-purple/20 to-festival-orange/20 rounded-full blur-xl animate-pulse-slow opacity-70"></div>
            <img src="/lovable-uploads/75970e15-e023-4b7d-812d-23008a3915a0.png" alt="Abhyuday 2025 Logo" className="h-40 md:h-48 relative z-10" />
          </div>
          
          <div className="mb-6 inline-block px-6 py-3 bg-festival-purple/10 text-festival-purple rounded-full text-sm font-semibold animate-pulse-slow">
            APRIL 25-26, 2025
          </div>
          
          <h1 className="font-montserrat font-extrabold text-5xl md:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-festival-purple via-festival-blue to-festival-purple relative">
            <span style={{
            animationDuration: '6s'
          }} className="animate-float inline-block text-amber-600">ABHYUDAY 2025</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-festival-blue/20 via-festival-purple/20 to-festival-orange/20 rounded-xl blur-md -z-10"></div>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-2 font-bold text-[#D4AF37] font-['Playfair_Display']">
            STATE LEVEL LIT-TECH FIESTA
          </p>
          
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-700">
            <span className="font-semibold">Where Innovation Meets Creativity!</span>
            <br />
            <span className="text-base md:text-lg">Ashoka Institute of Technology and Management, Varanasi</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <img src="/lovable-uploads/9b112e09-6df4-4fba-84d6-17d3eb43a5cc.png" alt="IEEE" className="h-16 bg-white p-2 rounded-lg shadow-sm" />
            <img src="/lovable-uploads/962aa6b0-f073-45eb-9f2b-ddd4a89596b5.png" alt="CSI" className="h-16 bg-white p-2 rounded-lg shadow-sm" />
            <img src="/lovable-uploads/26fd8b4e-ff13-4a73-bad2-23bab1d9c31b.png" alt="IIC" className="h-16 bg-white p-2 rounded-lg shadow-sm" />
            <img src="/lovable-uploads/f6580ef9-d95f-4237-b141-c645952ecfce.png" alt="IE" className="h-16 bg-white p-2 rounded-lg shadow-sm" />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={scrollToRegistration} size="lg" className="bg-festival-orange hover:bg-orange-600 text-white font-semibold text-lg px-10 shadow-lg shadow-festival-orange/30 hover:shadow-festival-orange/50 transition-all">
              Register Now
            </Button>
            
            <Button variant="outline" size="lg" className="border-festival-purple text-festival-purple hover:bg-festival-purple/10 font-semibold text-lg px-10 shadow-md hover:shadow-lg transition-all" onClick={() => document.getElementById('events')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Explore Events
            </Button>
          </div>

          {/* CTA for schedule */}
          <div className="mt-6">
            <button onClick={() => document.getElementById('schedule')?.scrollIntoView({
            behavior: 'smooth'
          })} className="text-festival-purple hover:text-festival-blue underline underline-offset-4 transition-colors">
              View Full Schedule
            </button>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg flex items-center justify-center flex-col w-48 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl font-bold text-festival-purple">15+</div>
            <div className="text-gray-600 font-medium">Events</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg flex items-center justify-center flex-col w-48 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl font-bold text-festival-purple">500+</div>
            <div className="text-gray-600 font-medium">Participants</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg flex items-center justify-center flex-col w-48 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl font-bold text-festival-purple">₹50K+</div>
            <div className="text-gray-600 font-medium">Prize Pool</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
};
export default Hero;