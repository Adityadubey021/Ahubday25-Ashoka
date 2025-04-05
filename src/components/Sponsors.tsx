
import React from 'react';

const Sponsors: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-festival-purple font-montserrat">Our Sponsors</h2>
          <p className="text-gray-600 mt-2">Proudly supported by leading organizations</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8">
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
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
