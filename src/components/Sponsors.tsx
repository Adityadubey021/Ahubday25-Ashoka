import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown } from 'lucide-react';

const Sponsors: React.FC = () => {
  // Partners and sponsors logos
  const partnerLogos = [{
    src: "/lovable-uploads/9b112e09-6df4-4fba-84d6-17d3eb43a5cc.png",
    alt: "IEEE",
    category: "Technical Partner"
  }, {
    src: "/lovable-uploads/962aa6b0-f073-45eb-9f2b-ddd4a89596b5.png",
    alt: "CSI",
    category: "Knowledge Partner"
  }, {
    src: "/lovable-uploads/26fd8b4e-ff13-4a73-bad2-23bab1d9c31b.png",
    alt: "IIC",
    category: "Innovation Partner"
  }, {
    src: "/lovable-uploads/f6580ef9-d95f-4237-b141-c645952ecfce.png",
    alt: "IE",
    category: "Excellence Partner"
  }];
  
  const sponsorCategories = [{
    id: "title",
    title: "Previous Sponsors",
    logos: [{
      src: "/lovable-uploads/2082213f-e96d-4935-ac60-2148f794db68.png",
      alt: "Hotel Surbhi International",
      width: "full"
    }, {
      src: "/lovable-uploads/c7ba7cf9-3b43-4da9-bd75-03be05af6f50.png",
      alt: "Radio Partners",
      width: "full"
    }, {
      src: "/lovable-uploads/e859757b-393b-4a27-a844-2110118a7d0a.png",
      alt: "Print & Electronic Media Partners",
      width: "full"
    }, {
      src: "/lovable-uploads/2822850f-4175-4436-bb6d-0ad8998dd562.png",
      alt: "Bisleri, Panasonic & Other Sponsors",
      width: "full"
    }, {
      src: "/lovable-uploads/c327ce66-383b-4559-9b08-bbfd70c742d5.png",
      alt: "V Mart",
      width: "full"
    }, {
      src: "/lovable-uploads/4f4a0623-8a83-41b8-b1db-0ed22d303d8e.png",
      alt: "Govind Vastralay",
      width: "full"
    }, {
      src: "/lovable-uploads/0fe9e59b-7638-4ce5-ae37-d538b621e54e.png",
      alt: "Yamaha & Other Sponsors",
      width: "full"
    }]
  }];

  return (
    <>
      {/* Chief Guest Section - Full Screen with enhanced animations */}
      <section id="chief-guest" className="py-16 bg-gradient-to-b from-[#121621] to-purple-900 relative overflow-hidden min-h-screen flex items-center">
        {/* Enhanced 3D decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-festival-light-purple rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-festival-orange/20 rounded-full blur-3xl opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-festival-purple/10 rounded-full blur-3xl opacity-20"></div>
        
        {/* Animated Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-4 h-4 bg-white/10 rounded-full blur-sm opacity-60 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
        
        {/* Abhyuday Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <img src="/lovable-uploads/cc24c81f-4e39-450d-b4ab-1c850d241296.png" alt="Abhyuday Watermark" className="w-full max-w-5xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white font-montserrat">Our Special Guest</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-xl">
              Abhyuday 2025 brings you an inspiring leader whose journey will motivate all attendees
            </p>
          </div>
          
          {/* Chief Guest Card - Enhanced with animations and 3D effects */}
          <div className="mb-16 max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 bg-gradient-to-r from-purple-900/80 to-purple-800/80 backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-lg font-medium text-festival-orange mb-2">Chief Guest - Day 2</div>
                  <h3 className="text-3xl font-bold text-white mb-4 animate-pulse-slow">Mr. Srikanth Bolla</h3>
                  <p className="text-gray-200 font-medium mb-4 text-xl">Founder & Chairman, Bollant Industries</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Despite being born blind, Srikanth Bolla became the first international blind student at MIT and later founded Bollant Industries, creating sustainable packaging solutions and employment opportunities for people with disabilities.
                  </p>
                  <div className="inline-block px-6 py-3 bg-festival-purple/30 text-white rounded-lg font-semibold text-md backdrop-blur-sm border border-purple-500/30">
                    Special Talk - April 26, 2025
                  </div>
                </div>
                <div className="relative group overflow-hidden transform transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
                  <img 
                    src="/lovable-uploads/a99f095c-5ce8-4c66-962e-ebf96a8e93ea.png" 
                    alt="Mr. Srikanth Bolla" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Entrepreneur Summit Section - Enhanced highlighted section */}
          <div className="mb-16 max-w-5xl mx-auto mt-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white font-montserrat">Entrepreneur Summit</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mt-2">
                A platform for future entrepreneurs to connect, learn and grow
              </p>
            </div>
            
            <Card className="overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 bg-gradient-to-r from-blue-900/80 to-indigo-800/80 backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="p-8 flex flex-col justify-center md:col-span-3">
                  <div className="text-lg font-medium text-festival-orange mb-2">Special Feature - Day 1 & 2</div>
                  <h3 className="text-3xl font-bold text-white mb-4">Innovation & Entrepreneurship Summit</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    Join us for an engaging session with successful entrepreneurs, investors, and industry experts. Get insights on startup ecosystem, funding opportunities, and the journey from ideation to execution.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <span className="text-white font-semibold">Panel Discussion:</span> 
                      <span className="text-gray-200"> "Building Sustainable Startups in Today's Market"</span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <span className="text-white font-semibold">Pitch Competition:</span> 
                      <span className="text-gray-200"> Present your business ideas and win mentorship opportunities</span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <span className="text-white font-semibold">Workshop:</span> 
                      <span className="text-gray-200"> "From College Project to Profitable Business"</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
                  <img 
                    src="/lovable-uploads/bcb54839-ffb6-461f-8da5-5affb0a961c1.png" 
                    alt="Entrepreneur Summit" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Scroll down indicator */}
          <div className="flex flex-col items-center justify-center mt-10 animate-bounce">
            <p className="text-gray-300 mb-2">Continue exploring Abhyuday 2025</p>
            <ArrowDown className="text-white" />
          </div>
        </div>
      </section>

      {/* Sponsors Section - Changed to "Previous Sponsors" */}
      <section id="previous-sponsors" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-festival-light-purple rounded-full blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-festival-orange/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Previous Sponsors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We thank our previous sponsors for making Abhyuday possible
            </p>
          </div>
        
          {/* Technical Partners */}
          <div className="mb-12 w-full max-w-5xl mx-auto">
            <h3 className="text-xl text-center font-semibold text-gray-700 mb-6">Technical Partners</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {partnerLogos.map((logo, idx) => (
                <Card key={idx} className="overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex flex-col items-center justify-center bg-white">
                    <img src={logo.src} alt={logo.alt} className="h-20 object-contain mb-3" />
                    <p className="text-center text-gray-700 font-medium">{logo.alt}</p>
                    <p className="text-center text-gray-500 text-sm">{logo.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sponsor Categories */}
          <div className="grid grid-cols-1 gap-y-8 max-w-5xl mx-auto w-full">
            {sponsorCategories.map(category => (
              <div key={category.id} className="w-full">
                <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">{category.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.logos.map((logo, idx) => (
                    <Card key={idx} className="overflow-hidden shadow-md hover:shadow-lg transition-all">
                      <CardContent className="p-6 flex items-center justify-center bg-white">
                        <img src={logo.src} alt={logo.alt} className="" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-500 italic text-center">
              Interested in sponsoring Abhyuday 2025? <a href="#contact" className="text-festival-purple hover:underline">Contact us</a> for sponsorship opportunities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
