
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

interface CoordinatorProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  imageSrc?: string;
}

const CoordinatorCard: React.FC<CoordinatorProps> = ({ name, role, email, phone, imageSrc }) => {
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
              <Mail size={16} className="text-gray-500 mr-2" />
              <a href={`mailto:${email}`} className="text-sm text-gray-700 hover:text-festival-purple">{email}</a>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="text-gray-500 mr-2" />
              <a href={`tel:${phone}`} className="text-sm text-gray-700 hover:text-festival-purple">{phone}</a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Coordinators: React.FC = () => {
  const studentCoordinators = [
    {
      name: "Aditya Kumar",
      role: "Student Coordinator (Technical Events)",
      email: "aditya.kumar@ashokainstitute.com",
      phone: "+91-9876543210",
    },
    {
      name: "Priya Singh",
      role: "Student Coordinator (Literary Events)",
      email: "priya.singh@ashokainstitute.com",
      phone: "+91-9876543211",
    },
    {
      name: "Rahul Sharma",
      role: "Student Coordinator (Robotics)",
      email: "rahul.sharma@ashokainstitute.com",
      phone: "+91-9876543212",
    },
    {
      name: "Ananya Patel",
      role: "Student Coordinator (Management)",
      email: "ananya.patel@ashokainstitute.com",
      phone: "+91-9876543213",
    },
  ];

  const facultyCoordinators = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Faculty Coordinator (Technical Events)",
      email: "rajesh.kumar@ashokainstitute.com",
      phone: "+91-9876543214",
    },
    {
      name: "Dr. Meera Verma",
      role: "Faculty Coordinator (Literary Events)",
      email: "meera.verma@ashokainstitute.com",
      phone: "+91-9876543215",
    },
    {
      name: "Prof. Sanjeev Mishra",
      role: "Overall Event Coordinator",
      email: "sanjeev.mishra@ashokainstitute.com",
      phone: "+91-9876543216",
    },
    {
      name: "Dr. Anita Singh",
      role: "Faculty Coordinator (Management Events)",
      email: "anita.singh@ashokainstitute.com",
      phone: "+91-9876543217",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyCoordinators.map((coordinator, index) => (
              <CoordinatorCard
                key={index}
                name={coordinator.name}
                role={coordinator.role}
                email={coordinator.email}
                phone={coordinator.phone}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 text-festival-purple border-l-4 border-festival-orange pl-4">Student Coordinators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentCoordinators.map((coordinator, index) => (
              <CoordinatorCard
                key={index}
                name={coordinator.name}
                role={coordinator.role}
                email={coordinator.email}
                phone={coordinator.phone}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
