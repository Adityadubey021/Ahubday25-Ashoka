import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Check, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const Registration: React.FC = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    events: [],
    teamName: '',
    teamMembers: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value,
      checked
    } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          events: [...prev.events, value]
        };
      } else {
        return {
          ...prev,
          events: prev.events.filter(event => event !== value)
        };
      }
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.college || formData.events.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Registration Successful!",
      description: "Check your email for confirmation",
      variant: "default"
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      college: '',
      events: [],
      teamName: '',
      teamMembers: ''
    });
  };
  return <section id="registration" className="py-20 bg-gradient-to-b from-white to-festival-light-blue/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Registration</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Sign up for Abhyuday 2025 and be part of the most exciting tech fest at Ashoka Institute of Technology and Management.</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-xl overflow-hidden border-none bg-white/90 backdrop-blur">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-festival-purple p-8 text-white lg:col-span-1">
                  <h3 className="text-2xl font-bold mb-6">Registration Info</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="bg-white/20 p-2 rounded-full">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Registration Deadline</h4>
                        <p className="text-white/80 text-sm">April 20, 2025</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-1">Entry Requirements</h4>
                      <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
                        <li>Valid College/University ID</li>
                        <li>Payment confirmation</li>
                        <li>Registration confirmation email</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-1">Registration Fees</h4>
                      <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
                        <li>Individual Events: ₹30</li>
                        <li>Team Events: ₹500 per team</li>
                        <li>Multiple Events: ₹100 for each additional event</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-1">For Teams</h4>
                      <p className="text-white/80 text-sm">Each team member needs to be registered individually with team name mentioned in the form.</p>
                    </div>
                  </div>
                </div>
                
                
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Registration;