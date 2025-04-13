import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PastHighlights: React.FC = () => {
  const galleryImages = [
    "/lovable-uploads/954a3897-9dde-45a3-ad7d-cafdd7336f08.png",
    "/lovable-uploads/3b3daad0-67ce-4b63-b47a-9cf7b4b6aba7.png",
    "/lovable-uploads/7735f666-c401-440c-b49e-6990132240d3.png",
    "/lovable-uploads/c5f5a74a-d656-4d7b-8cbc-1ec166e7d33a.png",
    "/lovable-uploads/d35501c1-8c9e-4c13-bb28-77b0ef41506e.png",
    "/lovable-uploads/6dbc8a9d-47ca-40ee-a1f6-0c66635c1e2c.png",
    "/lovable-uploads/676ab6da-9af7-45bd-b9b9-c7dfd6b97239.png",
    "/lovable-uploads/7e7bb29d-5fa6-4a99-ab86-eb9204a0e170.png",
    "/lovable-uploads/bcb54839-ffb6-461f-8da5-5affb0a961c1.png",
    "/lovable-uploads/aff0eda8-97d9-4b03-955d-564195059aa3.png",
    "/lovable-uploads/09ee8e0b-774d-4ac6-8b38-04c0edb37219.png",
    "/lovable-uploads/6a449bcb-2056-43f6-ab1e-8f5c3e397989.png"
  ];
  
  return (
    <section id="past-highlights" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-festival-light-purple rounded-full blur-3xl opacity-40 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-festival-orange/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      
      {/* Abhyuday Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <img src="/lovable-uploads/cc24c81f-4e39-450d-b4ab-1c850d241296.png" alt="Abhyuday Watermark" className="w-3/4 max-w-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Previous Events Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Memorable moments from previous Abhyuday editions showcasing innovation and creativity</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group h-64 shadow-md">
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
        </div>
      </div>
    </section>
  );
};

export default PastHighlights;
