import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
const Sponsors: React.FC = () => {
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
    title: "Title Sponsors",
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
  return <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-festival-light-purple rounded-full blur-3xl opacity-40 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-festival-orange/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      
      {/* Abhyuday Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <img src="/lovable-uploads/cc24c81f-4e39-450d-b4ab-1c850d241296.png" alt="Abhyuday Watermark" className="w-3/4 max-w-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Our Sponsors & Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Proudly supported by leading organizations</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          

          {/* Technical Partners */}
          <div className="mb-12 w-full max-w-5xl">
            <h3 className="text-xl text-center font-semibold text-gray-700 mb-6">Technical Partners</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {partnerLogos.map((logo, idx) => <Card key={idx} className="overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex flex-col items-center justify-center bg-white">
                    <img src={logo.src} alt={logo.alt} className="h-20 object-contain mb-3" />
                    <p className="text-center text-gray-700 font-medium">{logo.alt}</p>
                    <p className="text-center text-gray-500 text-sm">{logo.category}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Sponsor Categories */}
          <div className="grid grid-cols-1 gap-y-8 max-w-5xl w-full">
            {sponsorCategories.map(category => <div key={category.id} className="w-full">
                <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">{category.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.logos.map((logo, idx) => <Card key={idx} className="overflow-hidden shadow-md hover:shadow-lg transition-all">
                      <CardContent className="p-6 flex items-center justify-center bg-white">
                        <img src={logo.src} alt={logo.alt} className={`w-${logo.width} h-auto max-h-48 object-contain`} />
                      </CardContent>
                    </Card>)}
                </div>
              </div>)}
          </div>

          {/* Chief Guest Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-festival-purple mb-6 text-center">Special Guest - Day 2</h3>
            <Card className="overflow-hidden shadow-lg border-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-4 md:p-6 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-festival-purple mb-2">Mr. Srikanth Bolla</h4>
                  <p className="text-gray-600 font-medium mb-2">Founder & Chairman, Bollant Industries</p>
                  <p className="text-gray-500 text-sm">
                    Despite being born blind, Srikanth Bolla became the first international blind student at MIT and later founded Bollant Industries, creating sustainable packaging solutions and employment opportunities for people with disabilities.
                  </p>
                  <div className="mt-4 inline-block px-4 py-2 bg-festival-light-purple text-festival-purple rounded-lg font-semibold text-sm">
                    Special Talk
                  </div>
                </div>
                <div>
                  <img src="/lovable-uploads/b0ddc253-c1b0-43f0-bb0e-6e4dc58b53c4.png" alt="Mr. Srikanth Bolla" className="w-full h-full object-cover object-center" />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            
            
            
            
            
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-500 italic text-center">
              Interested in sponsoring Abhyuday 2025? <a href="#contact" className="text-festival-purple hover:underline">Contact us</a> for sponsorship opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Sponsors;