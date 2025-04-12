
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

interface FacultyCoordinatorProps {
  name: string;
  role: string;
  contact: string;
}

const FacultyCoordinatorCard: React.FC<FacultyCoordinatorProps> = ({ name, role, contact }) => {
  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 border-none shadow-lg bg-[#1A1F2C]/80 text-white">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-center text-gray-100 mb-1">{name}</h3>
        <p className="text-gray-300 text-center text-sm mb-4">{role}</p>
        <div className="flex items-center justify-center space-x-2 bg-festival-orange/20 py-2 px-4 rounded-full">
          <Phone size={16} className="text-festival-orange" />
          <span className="text-festival-orange font-medium">{contact}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const FacultyCoordinators: React.FC = () => {
  const facultyCoordinators = [
    {
      name: "Er. Sajjad Ali",
      role: "Faculty Coordinator (IIC), SAC President",
      contact: "+91 9695128786"
    },
    {
      name: "Dr. Sharmila Singh",
      role: "Faculty Coordinator",
      contact: "+91 7619944494"
    },
    {
      name: "Mr. Arvind Kumar",
      role: "Faculty Coordinator (Technical)",
      contact: "+91 8317066128"
    },
    {
      name: "Er. Avinash Prasad",
      role: "Faculty Coordinator (Literary)",
      contact: "+91 9415555413"
    },
    {
      name: "Dr. Pallavi Singh",
      role: "Faculty Coordinator",
      contact: "+91 8881279991"
    }
  ];

  return (
    <section id="faculty-coordinators" className="py-16 bg-[#121621]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-festival-orange font-montserrat">Faculty Coordinators</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Meet our dedicated faculty coordinators leading Abhyuday 2025</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {facultyCoordinators.map((coordinator, index) => (
            <FacultyCoordinatorCard
              key={index}
              name={coordinator.name}
              role={coordinator.role}
              contact={coordinator.contact}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyCoordinators;
