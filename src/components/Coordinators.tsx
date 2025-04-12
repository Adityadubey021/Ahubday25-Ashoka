
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import SocialMediaLinks, { SocialLink } from './SocialMediaLinks';

interface CoordinatorProps {
  name: string;
  department: string;
  contact: string;
  socialLinks: SocialLink[];
  imageSrc: string;
}

const CoordinatorCard: React.FC<CoordinatorProps> = ({ name, department, contact, socialLinks, imageSrc }) => {
  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 border-none shadow-lg bg-white">
      <CardContent className="p-6">
        <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-festival-purple">
          <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
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
      imageSrc: "/lovable-uploads/02a20942-650a-4beb-b1cc-b61c3e592759.png",
      socialLinks: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/aditya-dubey-49129a248/' },
        { type: 'instagram', url: 'https://www.instagram.com/aditya__dubey21/' }
      ] as SocialLink[]
    },
    {
      name: "Diwakar Patel",
      department: "B.Tech (CSE-AIML)",
      contact: "9235508350",
      imageSrc: "/lovable-uploads/c9438579-b726-4ee1-9a1e-fb6601f84a00.png",
      socialLinks: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/diwakar-patel-151393277/' },
        { type: 'instagram', url: 'https://www.instagram.com/diwakarpatel453t/' }
      ] as SocialLink[]
    },
    {
      name: "Malay Vishwakarma",
      department: "B.Tech (CSE)",
      contact: "8471059969",
      imageSrc: "/lovable-uploads/ff0804e8-3dfc-45ee-b091-ae6b26c62022.png",
      socialLinks: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/malay-vishwakarma-45a892248/' }
      ] as SocialLink[]
    },
    {
      name: "Sobrat Dayal",
      department: "B.Tech (CSE)",
      contact: "9565676988",
      imageSrc: "/lovable-uploads/b0b4ecd5-180c-465d-8d4d-b182a6cbf3a4.png",
      socialLinks: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/sobrat-dayal/' },
        { type: 'instagram', url: 'https://www.instagram.com/sobratdayal2022/' }
      ] as SocialLink[]
    },
    {
      name: "Swami Charan Singh",
      department: "MBA",
      contact: "8318180062", // Added placeholder contact as it wasn't provided
      imageSrc: "/lovable-uploads/96b27789-e728-469f-8108-632611031cd5.png",
      socialLinks: [
        { type: 'linkedin', url: 'https://www.instagram.com/swami_singh_smartest/' }, // Note: LinkedIn URL is set to Instagram as per your instructions
        { type: 'instagram', url: 'https://www.instagram.com/swami_singh_smartest/' }
      ] as SocialLink[]
    }
    {
      name: "Samarth Rao",
      department: "B.tech (AI&ML)",
      contact: "8318180062", // Added placeholder contact as it wasn't provided
      imageSrc: "/Users/adityadubey/Downloads/WhatsApp Image 2025-04-12 at 13.59.05.jpeg",
      socialLinks: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/samarth-rao-24620a1ab/' }, // Note: LinkedIn URL is set to Instagram as per your instructions
        { type: 'instagram', url: 'https://www.instagram.com/samarthrao34/' }
      ] as SocialLink[]
    }
  ];

  return (
    <section id="coordinators" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Student Organisers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Connect with our student organisers for any queries regarding the events or registration process.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {coordinators.map((coordinator, index) => (
            <CoordinatorCard
              key={index}
              name={coordinator.name}
              department={coordinator.department}
              contact={coordinator.contact}
              socialLinks={coordinator.socialLinks}
              imageSrc={coordinator.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
