import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const PastHighlights: React.FC = () => {
  const galleryImages = ["/lovable-uploads/789a44d4-c706-45e8-8dbe-a9601944ce45.png", "/lovable-uploads/6d535949-5e2a-42e3-bc09-e17b802ec2c9.png", "/lovable-uploads/6ee2ba58-4bb9-43b1-9f33-3efda114f474.png", "/lovable-uploads/4e8bf57b-c820-460a-9eb9-e6a4527d0dd0.png", "/lovable-uploads/2559af22-4086-4159-b894-cfd4439e9ca5.png", "/lovable-uploads/cecbf07f-2b26-4757-8a35-886f5b6e45bb.png", "/lovable-uploads/1a1b47d7-f59c-443f-b753-0dee0973d6ad.png", "/lovable-uploads/582be96d-890a-4791-a8cb-94b0561cc1fd.png"];
  return <section id="past-highlights" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-festival-light-purple rounded-full blur-3xl opacity-40 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-festival-orange/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      
      {/* Abhyuday Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <img src="/lovable-uploads/cc24c81f-4e39-450d-b4ab-1c850d241296.png" alt="Abhyuday Watermark" className="w-3/4 max-w-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Memorable moments from previous Abhyuday editions</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => <div key={index} className="relative overflow-hidden rounded-lg group h-64 shadow-md">
                <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-sm">Abhyuday Moments</p>
                </div>
              </div>)}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-festival-purple mb-6">Title Sponsor for Abhyuday 2025</h3>
            
          </div>
        </div>
      </div>
    </section>;
};
export default PastHighlights;