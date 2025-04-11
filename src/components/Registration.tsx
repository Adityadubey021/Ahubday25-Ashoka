
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Check, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Registration: React.FC = () => {
  const { toast } = useToast();
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
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, events: [...prev.events, value] };
      } else {
        return { ...prev, events: prev.events.filter(event => event !== value) };
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

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-white to-festival-light-blue/30">
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
                        <li>Individual Events: ₹300</li>
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
                
                <div className="p-8 lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Register Now</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-festival-purple focus:border-festival-purple" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-festival-purple focus:border-festival-purple" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-festival-purple focus:border-festival-purple" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="college" className="block text-sm font-medium text-gray-700">College/University *</label>
                        <input 
                          type="text" 
                          id="college" 
                          name="college" 
                          value={formData.college}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-festival-purple focus:border-festival-purple" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Events Interested In *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="hackathon" 
                            name="events" 
                            value="Hackathon"
                            checked={formData.events.includes('Hackathon')}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 text-festival-purple focus:ring-festival-purple border-gray-300 rounded" 
                          />
                          <label htmlFor="hackathon" className="ml-2 text-sm text-gray-700">Hackathon</label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="robosumo" 
                            name="events" 
                            value="RoboSumo"
                            checked={formData.events.includes('RoboSumo')}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 text-festival-purple focus:ring-festival-purple border-gray-300 rounded" 
                          />
                          <label htmlFor="robosumo" className="ml-2 text-sm text-gray-700">Robo Sumo</label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="robosoccer" 
                            name="events" 
                            value="RoboSoccer"
                            checked={formData.events.includes('RoboSoccer')}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 text-festival-purple focus:ring-festival-purple border-gray-300 rounded" 
                          />
                          <label htmlFor="robosoccer" className="ml-2 text-sm text-gray-700">Robo Soccer</label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="codestorm" 
                            name="events" 
                            value="CodeStorm"
                            checked={formData.events.includes('CodeStorm')}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 text-festival-purple focus:ring-festival-purple border-gray-300 rounded" 
                          />
                          <label htmlFor="codestorm" className="ml-2 text-sm text-gray-700">Code Storm</label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="startup" 
                            name="events" 
                            value="StartupShowcase"
                            checked={formData.events.includes('StartupShowcase')}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 text-festival-purple focus:ring-festival-purple border-gray-300 rounded" 
                          />
                          <label htmlFor="startup" className="ml-2 text-sm text-gray-700">Startup Showcase</label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="literaryevents" 
                            name="events" 
                            value="LiteraryEvents"
                            checked={formData.events.includes('LiteraryEvents')}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 text-festival-purple focus:ring-festival-purple border-gray-300 rounded" 
                          />
                          <label htmlFor="literaryevents" className="ml-2 text-sm text-gray-700">Literary Events</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Team Name (if applicable)</label>
                        <input 
                          type="text" 
                          id="teamName" 
                          name="teamName" 
                          value={formData.teamName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-festival-purple focus:border-festival-purple" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="teamMembers" className="block text-sm font-medium text-gray-700">Team Members (comma separated)</label>
                        <textarea 
                          id="teamMembers" 
                          name="teamMembers" 
                          value={formData.teamMembers}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-festival-purple focus:border-festival-purple h-20" 
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input 
                          id="terms" 
                          type="checkbox" 
                          className="h-4 w-4 text-festival-purple focus:ring-festival-purple border-gray-300 rounded" 
                          required 
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="terms" className="text-sm text-gray-600">I agree to the terms and conditions *</label>
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-festival-orange hover:bg-orange-600 w-full text-white font-semibold text-lg"
                    >
                      Register Now
                    </Button>
                    
                    <div className="flex items-start mt-4 bg-blue-50 p-3 rounded-lg">
                      <Info size={20} className="text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-blue-800 text-sm">
                        After registration, you will receive a confirmation email with payment instructions. Your registration will be confirmed after successful payment verification.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Registration;
