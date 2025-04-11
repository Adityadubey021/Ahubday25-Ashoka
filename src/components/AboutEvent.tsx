
import React from 'react';
import { MapPin } from 'lucide-react';

const AboutEvent: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">About The Event</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for Abhyuday 2025, the premier state-level technical and literary festival hosted by Ashoka Institute of Technology and Management.
          </p>
        </div>
        
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/3c3c133a-ea15-4eda-9faa-a3a7d94eae6d.png" 
            alt="Ashoka Institute of Technology and Management" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-festival-light-purple to-festival-light-blue p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-festival-purple">What is Abhyuday?</h3>
            <p className="text-gray-700 mb-4">
              Abhyuday is an annual state-level technical and literary extravaganza that brings together talented students from across the region to showcase their skills, creativity, and innovation.
            </p>
            <p className="text-gray-700 mb-4">
              This two-day fest features a diverse range of events including technical competitions, literary showcases, entrepreneurial challenges, and much more.
            </p>
            <p className="text-gray-700">
              Whether you're a coding enthusiast, a robotics expert, a budding entrepreneur, or a literary genius, Abhyuday 2025 has something exciting for everyone!
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-festival-purple">
              <h3 className="text-xl font-bold mb-2 text-festival-purple">Event Highlights</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Startup Showcase Meet</li>
                <li>Hackathon</li>
                <li>Robotics Competitions</li>
                <li>Coding Challenges</li>
                <li>Literary Events</li>
                <li>Entrepreneurship Summit</li>
                <li>Attractive Prize Pool of ₹50,000+</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-festival-orange">
              <h3 className="text-xl font-bold mb-2 text-festival-orange">Venue</h3>
              <div className="flex items-start">
                <MapPin className="text-festival-orange mr-2 mt-1" />
                <address className="not-italic text-gray-700">
                  <strong>Ashoka Institute of Technology and Management</strong><br />
                  NH-31, Mahuli, Varanasi - Prayagraj Highway<br />
                  Varanasi, Uttar Pradesh - 221007
                </address>
              </div>
              <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden shadow">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.7520118558114!2d82.9348223!3d25.3036028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33e6b60f8491%3A0x6c52eae18c60bfaa!2sAshoka%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1649581292865!5m2!1sen!2sin" 
                  className="w-full h-full" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
