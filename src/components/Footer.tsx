
import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-festival-purple text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Abhyuday 2025</h3>
            <p className="text-white/80 mb-4">
              Annual Technical Fest of Ashoka Institute of Technology and Management. A platform for innovation, creativity and technical excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:abhyuday@ashoka.edu.in" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Mail size={20} />
              </a>
            </div>
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
          <div className="text-white/80 text-sm">
            Designed for Abhyuday 2025 | Annual Tech Fest
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
