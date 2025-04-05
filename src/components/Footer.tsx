
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import SocialMediaLinks from './SocialMediaLinks';
import { SocialLink } from './SocialMediaLinks';

const Footer: React.FC = () => {
  const instituteSocialLinks: SocialLink[] = [
    { type: 'linkedin', url: 'https://www.linkedin.com/in/ashokainstitute' },
    { type: 'instagram', url: 'https://www.instagram.com/ashokainstitute/' },
    { type: 'facebook', url: 'https://www.facebook.com/Ashokavaranasi' },
    { type: 'youtube', url: 'https://www.youtube.com/user/ashokainstitute/videos' }
  ];

  return (
    <footer className="bg-festival-purple text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/c196b9c3-f499-4b74-9eba-d49e443f0bac.png" 
                alt="Ashoka Institute Logo" 
                className="h-16 mr-2 bg-white p-1 rounded" 
              />
              <div className="flex flex-col ml-2">
                <h3 className="text-xl font-bold">Abhyuday 2025</h3>
                <p className="text-sm text-white/80">April 25-26, 2025</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Annual Technical Fest of Ashoka Institute of Technology and Management. A platform for innovation, creativity and technical excellence.
            </p>
            <SocialMediaLinks links={instituteSocialLinks} />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#registration" className="hover:text-white transition-colors">Registration</a>
              </li>
              <li>
                <a href="#coordinators" className="hover:text-white transition-colors">Coordinators</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-white/80">
              <p className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+91 8932056388</span>
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>abhyuday@ashoka.edu.in</span>
              </p>
              <address className="not-italic">
                Ashoka Institute of Technology and Management,<br />
                Varanasi Road, Uttar Pradesh
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/80 text-sm mb-4 md:mb-0">
            © 2025 Ashoka Institute of Technology and Management. All rights reserved.
          </div>
          <div className="text-white/80 text-sm text-center">
            <div>Designed for Abhyuday 2025 | Annual Tech Fest</div>
            <div className="font-medium mt-1">Design by @ADITYA DUBEY</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
