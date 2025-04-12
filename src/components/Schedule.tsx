
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-white to-festival-light-purple/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-festival-light-blue rounded-full blur-3xl opacity-40 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-festival-orange/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      
      {/* Abhyuday Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <img 
          src="/lovable-uploads/cc24c81f-4e39-450d-b4ab-1c850d241296.png" 
          alt="Abhyuday Watermark" 
          className="w-3/4 max-w-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Event Schedule</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Join us for an exciting two-day event filled with technical competitions, literary events, and more!</p>
        </div>
        
        <Tabs defaultValue="day1" className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-festival-light-purple/50 mb-6">
              <TabsTrigger value="day1" className="text-lg px-8 py-3 data-[state=active]:bg-festival-purple data-[state=active]:text-white">
                Day 1 (25th April)
              </TabsTrigger>
              <TabsTrigger value="day2" className="text-lg px-8 py-3 data-[state=active]:bg-festival-purple data-[state=active]:text-white">
                Day 2 (26th April)
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="day1" className="bg-white rounded-xl shadow-lg p-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-festival-light-purple/30">
                    <TableHead className="font-bold text-festival-purple">Time</TableHead>
                    <TableHead className="font-bold text-festival-purple">Event(s)</TableHead>
                    <TableHead className="font-bold text-festival-purple">Venue(s)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-black">09:00 AM – 10:30 AM</TableCell>
                    <TableCell className="text-black">Opening Ceremony</TableCell>
                    <TableCell className="text-black">Seminar Hall</TableCell>
                  </TableRow>
                  
                  <TableRow className="bg-gray-50">
                    <TableCell colSpan={3} className="font-bold text-festival-purple py-2">Technical Events</TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell className="font-medium text-black">10:30 AM - 12:00 PM</TableCell>
                    <TableCell className="text-black">Robo Sumo</TableCell>
                    <TableCell className="text-black">D-Block</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">12:30 PM - 02:00 PM</TableCell>
                    <TableCell className="text-black">Robo Soccer</TableCell>
                    <TableCell className="text-black">D-Block</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">11:00 AM Onwards</TableCell>
                    <TableCell className="text-black">Hackathon Kickoff & Briefing</TableCell>
                    <TableCell className="text-black">CSE Department (Lab No.1,2 and 3)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">12:00 PM - 1:00 PM</TableCell>
                    <TableCell className="text-black">ThinkInk (Poster Presentation)</TableCell>
                    <TableCell className="text-black">MBA Classes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">11:00 AM - 01:00 PM</TableCell>
                    <TableCell className="text-black">Code Storm</TableCell>
                    <TableCell className="text-black">Language Lab + ECE Computer Lab</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">10:30 AM Onwards</TableCell>
                    <TableCell className="text-black">Core Sync Model Presentation</TableCell>
                    <TableCell className="text-black">Mechanical Workshop Lab</TableCell>
                  </TableRow>
                  
                  <TableRow className="bg-gray-50">
                    <TableCell colSpan={3} className="font-bold text-festival-purple py-2">Literary Events</TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell className="font-medium text-black">10:30 AM - 12:00 PM</TableCell>
                    <TableCell className="text-black">Poetic Battle</TableCell>
                    <TableCell className="text-black">Seminar Hall</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">10:30 AM - 01:00 PM</TableCell>
                    <TableCell className="text-black">Treasure Hunt</TableCell>
                    <TableCell className="text-black">Mechanical Department Computer Lab 5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">11:00 AM – 12:00 PM</TableCell>
                    <TableCell className="text-black">Craft a Tale</TableCell>
                    <TableCell className="text-black">MBA Classes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">12:30 PM - 02:00 PM</TableCell>
                    <TableCell className="text-black">Ad Mad</TableCell>
                    <TableCell className="text-black">Seminar Hall</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">02:00 PM - 03:30 PM</TableCell>
                    <TableCell className="text-black">Declamation</TableCell>
                    <TableCell className="text-black">Seminar Hall</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">03:30 PM – 04:30 PM</TableCell>
                    <TableCell className="text-black">(DAY 01) Prize Distribution</TableCell>
                    <TableCell className="text-black">Seminar Hall</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="day2" className="bg-white rounded-xl shadow-lg p-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-festival-light-purple/30">
                    <TableHead className="font-bold text-festival-purple">Time</TableHead>
                    <TableHead className="font-bold text-festival-purple">Event(s)</TableHead>
                    <TableHead className="font-bold text-festival-purple">Venue(s)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-gray-50">
                    <TableCell colSpan={3} className="font-bold text-festival-purple py-2">Technical Events</TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell className="font-medium text-black">10:00 AM Onwards</TableCell>
                    <TableCell className="text-black">Esports</TableCell>
                    <TableCell className="text-black">Language Lab + ECE Computer Lab</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">10:00 AM Onwards</TableCell>
                    <TableCell className="text-black">Ashoka Startup Showcase Meet</TableCell>
                    <TableCell className="text-black">Seminar Hall</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">10:00 AM – 12:00 PM</TableCell>
                    <TableCell className="text-black">(Interaction with – Srikanth Bolla)</TableCell>
                    <TableCell className="text-black">Seminar Hall</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">12:30 PM - 03:30 PM</TableCell>
                    <TableCell className="text-black">Startup Simulation Challenge</TableCell>
                    <TableCell className="text-black">MBA Classes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">10:00 AM Onwards</TableCell>
                    <TableCell className="text-black">Core Sync Model Presentation</TableCell>
                    <TableCell className="text-black">Mechanical Workshop Lab</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">11:00 AM</TableCell>
                    <TableCell className="text-black">Hackathon Final Submission</TableCell>
                    <TableCell className="text-black">Hackathon Zone</TableCell>
                  </TableRow>
                  
                  <TableRow className="bg-gray-50">
                    <TableCell colSpan={3} className="font-bold text-festival-purple py-2">Literary Events</TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell className="font-medium text-black">10:00 AM – 12:30 PM</TableCell>
                    <TableCell className="text-black">Best Shot on The Spot</TableCell>
                    <TableCell className="text-black">GD Room</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">09:00 AM – 10:30 AM</TableCell>
                    <TableCell className="text-black">Sinking Ship</TableCell>
                    <TableCell className="text-black">MBA Classes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-black">03:00 PM - 04:00 PM</TableCell>
                    <TableCell className="text-black">Closing & Prize Distribution Ceremony</TableCell>
                    <TableCell className="text-black">Seminar Hall</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            *Schedule is subject to minor changes. Please check back for the most updated information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
