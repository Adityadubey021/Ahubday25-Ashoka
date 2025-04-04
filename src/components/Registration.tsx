
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-white to-festival-light-blue/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Registration</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Sign up for Abhyuday 2025 and be part of the most exciting tech fest at Ashoka Institute of Technology and Management.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl overflow-hidden border-none bg-white/80 backdrop-blur">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-festival-purple p-8 text-white">
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
                      <h4 className="font-medium mb-1">For Teams</h4>
                      <p className="text-white/80 text-sm">Each team member needs to be registered individually with team name mentioned in the form.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Register Now</h3>
                  
                  <p className="text-gray-600 mb-8">
                    Fill out the registration form by clicking the button below. Make sure to provide all required information for a smooth registration process.
                  </p>
                  
                  <Button
                    size="lg"
                    className="bg-festival-orange hover:bg-orange-600 w-full text-white font-semibold text-lg"
                    onClick={() => window.open('https://forms.google.com/registration-form', '_blank')}
                  >
                    Register Here
                  </Button>
                  
                  <p className="text-gray-500 text-sm mt-4 text-center">
                    Having trouble? Contact any of our coordinators for assistance.
                  </p>
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
