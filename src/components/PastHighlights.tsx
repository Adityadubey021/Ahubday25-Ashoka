
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SponsorProps {
  name: string;
  logo?: string;
  description: string;
}

interface CelebrityProps {
  name: string;
  image: string;
  year: string;
  description: string;
}

const PastHighlights: React.FC = () => {
  const pastSponsors: SponsorProps[] = [
    {
      name: "IndiaTech Solutions",
      description: "Technology Partner (2024)",
    },
    {
      name: "EduFund Academy",
      description: "Education Partner (2024)",
    },
    {
      name: "SparkClothing Inc.",
      description: "Official Merchandise Partner (2023)",
    },
    {
      name: "NexGen Innovations",
      description: "Innovation Partner (2023)",
    },
    {
      name: "CodeCraft Labs",
      description: "Coding Challenge Partner (2023)",
    },
    {
      name: "TechMinds Foundation",
      description: "Knowledge Partner (2022)",
    }
  ];

  const celebrities = [
    {
      name: "Srikanth Bolla",
      image: "/lovable-uploads/b0ddc253-c1b0-43f0-bb0e-6e4dc58b53c4.png",
      year: "2025",
      description: "Founder & Chairman, Bollant Industries"
    },
    {
      name: "Shah Rukh Khan",
      image: "/lovable-uploads/12d7033b-2246-4aa7-b962-0c16c5f0b1b6.png",
      year: "2023",
      description: "Bollywood Superstar"
    },
    {
      name: "Javed Ali",
      image: "/lovable-uploads/0f0850d4-db1d-489d-9e0a-01be865139ee.png",
      year: "2022",
      description: "Renowned Playback Singer"
    },
    {
      name: "Rajpal Yadav",
      image: "/lovable-uploads/fe3ba212-a26c-427f-a623-0b5d3fac242d.png",
      year: "2021",
      description: "Celebrated Actor & Comedian"
    },
    {
      name: "Manoj Bajpayee",
      image: "/lovable-uploads/4b2ae47a-e1a6-4a9f-9d5f-28dc53433972.png",
      year: "2020",
      description: "National Award-Winning Actor"
    }
  ];

  const galleryImages = [
    "/lovable-uploads/789a44d4-c706-45e8-8dbe-a9601944ce45.png",
    "/lovable-uploads/6d535949-5e2a-42e3-bc09-e17b802ec2c9.png",
    "/lovable-uploads/6ee2ba58-4bb9-43b1-9f33-3efda114f474.png",
    "/lovable-uploads/4e8bf57b-c820-460a-9eb9-e6a4527d0dd0.png",
    "/lovable-uploads/2559af22-4086-4159-b894-cfd4439e9ca5.png",
    "/lovable-uploads/cecbf07f-2b26-4757-8a35-886f5b6e45bb.png",
    "/lovable-uploads/1a1b47d7-f59c-443f-b753-0dee0973d6ad.png",
    "/lovable-uploads/582be96d-890a-4791-a8cb-94b0561cc1fd.png",
  ];

  return (
    <section id="past-highlights" className="py-20 bg-white relative">
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
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Past Highlights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Celebrating the legacy of previous Abhyuday editions with our distinguished guests and partners</p>
        </div>
        
        <Tabs defaultValue="celebrities" className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-festival-light-purple/50">
              <TabsTrigger value="celebrities" className="text-lg px-8 py-3 data-[state=active]:bg-festival-purple data-[state=active]:text-white">
                Celebrity Guests
              </TabsTrigger>
              <TabsTrigger value="sponsors" className="text-lg px-8 py-3 data-[state=active]:bg-festival-purple data-[state=active]:text-white">
                Past Sponsors
              </TabsTrigger>
              <TabsTrigger value="gallery" className="text-lg px-8 py-3 data-[state=active]:bg-festival-purple data-[state=active]:text-white">
                Gallery
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="celebrities" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {celebrities.map((celeb, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-t-festival-purple h-full">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={celeb.image}
                      alt={celeb.name}
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold text-festival-purple">{celeb.name}</h3>
                    <p className="text-gray-500 text-sm">{celeb.description}</p>
                    <div className="mt-2 inline-block px-3 py-1 bg-festival-light-purple text-sm text-festival-purple rounded-full">
                      Abhyuday {celeb.year}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sponsors" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastSponsors.map((sponsor, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center">
                  <div className="mb-3 w-16 h-16 bg-festival-light-purple/50 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-festival-purple">{sponsor.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-festival-purple">{sponsor.name}</h3>
                  <p className="text-gray-600 mt-2">{sponsor.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-festival-purple mb-4">Title Sponsor for Abhyuday 2025</h3>
              <div className="bg-white p-8 rounded-xl shadow-md inline-block">
                <img 
                  src="/lovable-uploads/1b470e91-c18a-4976-8bc5-84d13d690ef4.png" 
                  alt="TECHxVEDA" 
                  className="max-w-xs mx-auto"
                />
                <p className="text-gray-600 mt-4 font-medium">Ab code karega India</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg group h-64">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">Abhyuday Moments</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PastHighlights;
