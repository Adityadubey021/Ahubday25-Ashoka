
import React from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import SocialMediaLinks from './SocialMediaLinks';
import { SocialLink } from './SocialMediaLinks';

const Footer: React.FC = () => {
  const instituteSocialLinks: SocialLink[] = [
    { type: 'instagram', url: 'https://www.instagram.com/ashokainstitute/' },
    { type: 'linkedin', url: 'https://www.linkedin.com/in/ashokainstitute/' },
    { type: 'facebook', url: 'https://www.facebook.com/Ashokavaranasi' },
    { type: 'twitter', url: 'https://twitter.com/aitmvnsz' },
    { type: 'youtube', url: 'https://www.youtube.com/user/ashokainstitute/videos' }
  ];

  const openRegistrationForm = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfd3gaB4TXlIKNanGRxXfiVsnANlwmeRgu4wSESAynpNnawcw/viewform?usp=sharing", "_blank");
  };

  return (
    <footer className="bg-festival-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/41e5a39c-151c-4f70-ba93-378ff78a6434.png" 
                alt="Ashoka Institute Logo" 
                className="h-16 mr-2 bg-white/5 p-1 rounded" 
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
                <a href="#home" className="hover:text-festival-teal transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-festival-teal transition-colors">About the Event</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-festival-teal transition-colors">Schedule</a>
              </li>
              <li>
                <a href="#events" className="hover:text-festival-teal transition-colors">Events</a>
              </li>
              <li>
                <a href="#coordinators" className="hover:text-festival-teal transition-colors">Coordinators</a>
              </li>
              <li>
                <a onClick={openRegistrationForm} className="hover:text-festival-teal transition-colors cursor-pointer">Register Now</a>
              </li>
              <li>
                <a href="https://ashokainstitute.com/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-festival-teal transition-colors">
                  <Globe size={16} className="mr-2" />
                  <span>ashokainstitute.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-white/80">
              <p className="flex items-center">
                <Phone size={16} className="mr-2 text-festival-teal" />
                <span>+91-9198840005, +91-9198840006</span>
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2 text-festival-teal" />
                <span>abhyuday@ashokainstitute.com</span>
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2 text-festival-teal" />
                <span>info@ashokainstitute.com</span>
              </p>
              <address className="not-italic flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-festival-teal" />
                <span>Ashoka Institute of Technology and Management,<br />
                Varanasi, Uttar Pradesh</span>
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 Ashoka Institute of Technology and Management. All rights reserved.
          </div>
          <div className="text-white/60 text-sm text-center">
            <div>Designed for Abhyuday 2025 | State Level Lit-Tech Fiesta</div>
            <div className="mt-1">Design by <a href="#" className="text-festival-teal hover:text-festival-cyan">@TECHxVEDA</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
