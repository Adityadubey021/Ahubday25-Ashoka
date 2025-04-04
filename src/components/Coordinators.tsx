
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import SocialMediaLinks from './SocialMediaLinks';

interface CoordinatorProps {
  name: string;
  department: string;
  contact: string;
  socialLinks: {
    type: 'linkedin' | 'instagram' | 'facebook' | 'youtube';
    url: string;
  }[];
}

const CoordinatorCard: React.FC<CoordinatorProps> = ({ name, department, contact, socialLinks }) => {
  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 border-none shadow-lg bg-white">
      <CardContent className="p-6">
        <div className="w-20 h-20 bg-festival-light-purple rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-3xl text-festival-purple font-bold">
            {name.charAt(0)}
          </span>
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-500 text-center text-sm mb-4">{department}</p>
        <div className="flex items-center justify-center space-x-2 bg-festival-light-purple/50 py-2 px-4 rounded-full mb-4">
          <Phone size={16} className="text-festival-purple" />
          <span className="text-festival-purple font-medium">{contact}</span>
        </div>
        <SocialMediaLinks links={socialLinks} className="justify-center" />
      </CardContent>
    </Card>
  );
};

const Coordinators: React.FC = () => {
  const coordinators = [
    {
      name: "Aditya Dubey",
      department: "B.Tech (CSE-AIML)",
      contact: "8932056388",
      socialLinks: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/aditya-dubey-49129a248/' },
        { type: 'instagram', url: 'https://www.instagram.com/aditya__dubey21/' }
      ]
    },
    {
      name: "Diwakar Patel",
      department: "B.Tech (CSE-AIML)",
      contact: "9235508350",
      socialLinks: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/diwakar-patel-151393277/' },
        { type: 'instagram', url: 'https://www.instagram.com/diwakarpatel453t/' }
      ]
    },
    {
      name: "Malay Vishwakarma",
      department: "B.Tech (CSE)",
      contact: "8471059969",
      socialLinks: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/malay-vishwakarma-45a892248/' }
      ]
    },
    {
      name: "Sobrat Dayal",
      department: "B.Tech (CSE)",
      contact: "9565676988",
      socialLinks: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/sobrat-dayal/' },
        { type: 'instagram', url: 'https://www.instagram.com/sobratdayal2022/' }
      ]
    }
  ];

  return (
    <section id="coordinators" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Event Coordinators</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Connect with our event coordinators for any queries regarding the events or registration process.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {coordinators.map((coordinator, index) => (
            <CoordinatorCard
              key={index}
              name={coordinator.name}
              department={coordinator.department}
              contact={coordinator.contact}
              socialLinks={coordinator.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
