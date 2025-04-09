
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
