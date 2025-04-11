
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import SocialMediaCoordinatorLinks from './SocialMediaCoordinatorLinks';

interface SocialLink {
  type: 'linkedin' | 'instagram';
  url: string;
}

interface CoordinatorProps {
  name: string;
  role: string;
  phone: string;
  imageSrc?: string;
  socialLinks?: SocialLink[];
}

const CoordinatorCard: React.FC<CoordinatorProps> = ({ 
  name, 
  role, 
  phone, 
  imageSrc,
  socialLinks 
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all">
      <CardContent className="p-0">
        <div className="aspect-square bg-gray-200 overflow-hidden">
          <img
            src={imageSrc || "https://via.placeholder.com/300?text=Coordinator"}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-1 text-festival-purple">{name}</h3>
          <p className="text-gray-600 mb-4">{role}</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <Phone size={16} className="text-gray-500 mr-2" />
              <a href={`tel:${phone}`} className="text-sm text-gray-700 hover:text-festival-purple">{phone}</a>
            </div>
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex items-center space-x-2 mt-2">
                <SocialMediaCoordinatorLinks links={socialLinks} />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Coordinators: React.FC = () => {
  const studentCoordinators = [
    {
      name: "Aditya Dubey",
      role: "B.Tech (CSE-AIML)",
      phone: "+91-8932056388",
      imageSrc: "/lovable-uploads/44a2b30a-cc33-4e15-bf3b-16f99c0764ad.png",
      socialLinks: [
        { type: "linkedin", url: "https://www.linkedin.com/in/aditya-dubey-49129a248/" },
        { type: "instagram", url: "https://www.instagram.com/aditya__dubey21/" }
      ]
    },
    {
      name: "Diwakar Patel",
      role: "B.Tech (CSE-AIML)",
      phone: "+91-9235508350",
      imageSrc: "/lovable-uploads/7b1f60f9-503e-422f-b831-a2d8b217ba1a.png",
      socialLinks: [
        { type: "linkedin", url: "https://www.linkedin.com/in/diwakar-patel-151393277/" },
        { type: "instagram", url: "https://www.instagram.com/diwakarpatel453t/" }
      ]
    },
    {
      name: "Swami Charan Singh",
      role: "MBA",
      phone: "+91-8318180062",
      imageSrc: "/lovable-uploads/c5a4b73d-428b-4255-b313-49665349f587.png",
      socialLinks: [
        { type: "linkedin", url: "https://www.instagram.com/swami_singh_smartest/" },
        { type: "instagram", url: "https://www.instagram.com/swami_singh_smartest/" }
      ]
    },
    {
      name: "Malay Vishwakarma",
      role: "B.Tech (CSE)",
      phone: "+91-8471059969",
      imageSrc: "/lovable-uploads/8cba9d73-9b2a-4c9e-88fe-62e91ec6e85a.png",
      socialLinks: [
        { type: "linkedin", url: "https://www.linkedin.com/in/malay-vishwakarma-45a892248/" }
      ]
    },
    {
      name: "Sobrat Dayal",
      role: "B.Tech (CSE)",
      phone: "+91-9565676988",
      imageSrc: "/lovable-uploads/0827b300-8847-4aed-9e8c-2a62a2eb7e53.png",
      socialLinks: [
        { type: "linkedin", url: "https://www.linkedin.com/in/sobrat-dayal/" },
        { type: "instagram", url: "https://www.instagram.com/sobratdayal2022/" }
      ]
    },
  ];

  const facultyCoordinators = [
    {
      name: "Er. Sajjad Ali",
      role: "Faculty Coordinator (IIC)",
      phone: "+91-9695128786",
    },
    {
      name: "Dr. Sharmila Singh",
      role: "SAC President",
      phone: "+91-7619944491",
    },
    {
      name: "Mr. Arvind Kumar",
      role: "SAC President",
      phone: "+91-8317066128",
    },
    {
      name: "Er. Avinash Prasad",
      role: "Faculty Coordinator (Technical)",
      phone: "+91-9415555413",
    },
    {
      name: "Dr. Pallavi Singh",
      role: "Faculty Coordinator (Literary)",
      phone: "+91-8881279991",
    },
  ];

  return (
    <section id="coordinators" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Event Coordinators</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Meet the team behind Abhyuday 2025 and feel free to reach out if you have any questions.</p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-festival-purple border-l-4 border-festival-orange pl-4">Faculty Coordinators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyCoordinators.map((coordinator, index) => (
              <CoordinatorCard
                key={index}
                name={coordinator.name}
                role={coordinator.role}
                phone={coordinator.phone}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 text-festival-purple border-l-4 border-festival-orange pl-4">Student Coordinators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentCoordinators.map((coordinator, index) => (
              <CoordinatorCard
                key={index}
                name={coordinator.name}
                role={coordinator.role}
                phone={coordinator.phone}
                imageSrc={coordinator.imageSrc}
                socialLinks={coordinator.socialLinks}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
