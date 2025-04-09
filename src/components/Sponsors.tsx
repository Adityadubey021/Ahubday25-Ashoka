
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Sponsors: React.FC = () => {
  const partnerCategories = [
    {
      id: "hospitality",
      title: "Hospitality Partner",
      logos: [
        {
          src: "/lovable-uploads/7bc9ad5c-c020-4c7c-977e-9c6ac47c5fc6.png",
          alt: "Hotel Surbhi International",
          width: "full"
        }
      ]
    },
    {
      id: "media",
      title: "Media Partners",
      logos: [
        {
          src: "/lovable-uploads/25cffb13-41e1-4db3-a82e-a7aa7f95b8d8.png",
          alt: "Print & Electronic Media Partners",
          width: "full"
        },
        {
          src: "/lovable-uploads/ab6f3022-8287-424a-9124-442d51020929.png",
          alt: "Radio Partners",
          width: "full"
        }
      ]
    },
    {
      id: "gold",
      title: "Gold Sponsors",
      logos: [
        {
          src: "/lovable-uploads/1606c6f6-bc83-4c8b-8cad-ef83d84695a2.png",
          alt: "Yamaha & Others",
          width: "full"
        },
        {
          src: "/lovable-uploads/fd7b62ef-4ddf-4532-a3a2-4b4ac74e72ca.png",
          alt: "Govind Vastralay",
          width: "full"
        },
        {
          src: "/lovable-uploads/85a7f188-fe69-4e63-974c-995848616a92.png",
          alt: "V Mart",
          width: "full"
        }
      ]
    },
    {
      id: "silver",
      title: "Silver Sponsors",
      logos: [
        {
          src: "/lovable-uploads/ff89fb9f-5873-47d7-bc41-f8c10da58e74.png",
          alt: "Bisleri, Panasonic & Others",
          width: "full"
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-festival-light-purple rounded-full blur-3xl opacity-40 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-festival-orange/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      
      {/* Abhyuday Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <img 
          src="/lovable-uploads/402a0cba-8c65-4177-bcdd-090ce95b7db1.png" 
          alt="Abhyuday Watermark" 
          className="w-3/4 max-w-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Our Sponsors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Proudly supported by leading organizations</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="mb-12">
            <h3 className="text-xl text-center font-semibold text-gray-700 mb-6">Title Sponsor</h3>
            <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/lovable-uploads/1b470e91-c18a-4976-8bc5-84d13d690ef4.png" 
                alt="TECHxVEDA" 
                className="w-full h-auto" 
              />
              <p className="text-center text-gray-500 mt-4 text-sm font-medium">Ab code karega India</p>
            </div>
          </div>

          {/* Partner Categories Tabs */}
          <Tabs defaultValue="hospitality" className="w-full max-w-5xl mt-8">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 bg-festival-light-purple/50 rounded-lg p-1">
              {partnerCategories.map(category => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="text-sm md:text-base data-[state=active]:bg-festival-purple data-[state=active]:text-white"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {partnerCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.logos.map((logo, idx) => (
                    <Card key={idx} className="overflow-hidden shadow-md hover:shadow-lg transition-all">
                      <CardContent className="p-6 flex items-center justify-center bg-white">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className={`w-${logo.width} h-auto max-h-48 object-contain`}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow flex flex-col items-center justify-center text-center">
              <div className="h-16 w-16 bg-festival-light-purple/50 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-festival-purple">MS</span>
              </div>
              <h4 className="font-semibold text-festival-purple">MindSpark Technologies</h4>
              <p className="text-sm text-gray-500 mt-1">Technology Partner</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow flex flex-col items-center justify-center text-center">
              <div className="h-16 w-16 bg-festival-light-purple/50 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-festival-purple">CS</span>
              </div>
              <h4 className="font-semibold text-festival-purple">CodeSprint</h4>
              <p className="text-sm text-gray-500 mt-1">Coding Challenge Partner</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow flex flex-col items-center justify-center text-center">
              <div className="h-16 w-16 bg-festival-light-purple/50 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-festival-purple">TN</span>
              </div>
              <h4 className="font-semibold text-festival-purple">TechNova</h4>
              <p className="text-sm text-gray-500 mt-1">Innovation Partner</p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-500 italic text-center">
              Interested in sponsoring Abhyuday 2025? <a href="#contact" className="text-festival-purple hover:underline">Contact us</a> for sponsorship opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
