
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface EventProps {
  title: string;
  subtitle: string;
  price: string;
  description: string;
}

const EventCard: React.FC<EventProps> = ({ title, subtitle, price, description }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-t-festival-purple h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-festival-purple">{title}</CardTitle>
        <CardDescription className="text-sm font-medium">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-3 border-t">
        <div className="text-festival-purple font-bold">Entry Fee: {price}</div>
        <Button variant="outline" size="sm" className="border-festival-orange text-festival-orange hover:bg-festival-orange/10">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

const Events = () => {
  const technicalEvents = [
    {
      title: "Robo Sumo – Robo Rumble",
      subtitle: "The Ultimate Showdown",
      price: "₹500",
      description: "Design and build a robot to push the opponent out of the arena. Test your engineering skills and strategic thinking in this exciting competition."
    },
    {
      title: "Robo Soccer – CuberKick",
      subtitle: "Robo Soccer League",
      price: "₹500",
      description: "Program robots to play soccer against each other. Combine robotics with sports in this thrilling event that tests coding skills and teamwork."
    },
    {
      title: "E-Sports – Game On",
      subtitle: "BGMI & FreeFire Championship",
      price: "₹300",
      description: "Compete in popular mobile games BGMI and FreeFire to win exciting prizes. Show off your gaming skills and strategic gameplay."
    },
    {
      title: "C-Coding – Code Storm",
      subtitle: "Programming Challenge",
      price: "₹200",
      description: "Solve complex programming problems in C language under time constraints. Test your coding skills, logic, and efficiency."
    },
    {
      title: "Tech Debate – ByteBattles",
      subtitle: "Tech War of Debate",
      price: "₹200",
      description: "Debate on cutting-edge technology topics with other tech enthusiasts. Showcase your knowledge and communication skills."
    },
    {
      title: "Tech Quiz – Quiz Tech Masters",
      subtitle: "Test Your Tech Knowledge",
      price: "₹150",
      description: "Participate in a quiz covering various aspects of technology, from history to latest innovations. Show off your tech awareness."
    },
    {
      title: "Model Presentation – AI Expo",
      subtitle: "Shaping the Future",
      price: "₹400",
      description: "Present your innovative AI model or concept to judges and attendees. Get feedback and recognition for your innovative ideas."
    },
    {
      title: "Hackathon (24 Hrs)",
      subtitle: "Code Marathon",
      price: "₹1000",
      description: "A 24-hour coding marathon to build solutions for real-world problems. Collaborate, innovate, and create working prototypes."
    }
  ];

  const literaryEvents = [
    {
      title: "Declamation",
      subtitle: "Public Speaking Challenge",
      price: "₹150",
      description: "Deliver a powerful speech on a given topic with conviction and eloquence. Demonstrate your oratory skills and persuasive abilities."
    },
    {
      title: "Ad-Mad",
      subtitle: "Advertisement Madness",
      price: "₹200",
      description: "Create and present an advertisement for a given product in the most creative way. Show your marketing skills and creativity."
    },
    {
      title: "Treasure Hunt",
      subtitle: "Campus-wide Adventure",
      price: "₹300",
      description: "Solve clues and puzzles to find hidden treasures across the campus. Test your problem-solving skills and teamwork."
    },
    {
      title: "Sinking Ship",
      subtitle: "Historical Characters Edition",
      price: "₹150",
      description: "Play the role of a historical character and convince judges why you should be saved from a sinking ship. Combine history knowledge with persuasive skills."
    },
    {
      title: "Poetic Battle",
      subtitle: "Verse vs. Verse",
      price: "₹100",
      description: "Showcase your poetic talent in this head-to-head poetry competition. Express emotions and creativity through words."
    },
    {
      title: "Best Shot on the Spot",
      subtitle: "Impromptu Photography",
      price: "₹250",
      description: "Capture the best moments of the fest with your camera within a time limit. Demonstrate your photography skills and creative eye."
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-festival-purple font-montserrat">Festival Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Participate in our diverse range of technical and literary events designed to challenge your skills and creativity.</p>
        </div>

        <Tabs defaultValue="technical" className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-festival-light-purple/50">
              <TabsTrigger value="technical" className="text-lg px-8 py-3 data-[state=active]:bg-festival-purple data-[state=active]:text-white">
                Technical
              </TabsTrigger>
              <TabsTrigger value="literary" className="text-lg px-8 py-3 data-[state=active]:bg-festival-purple data-[state=active]:text-white">
                Literary
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="technical" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalEvents.map((event, index) => (
                <EventCard
                  key={`tech-${index}`}
                  title={event.title}
                  subtitle={event.subtitle}
                  price={event.price}
                  description={event.description}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="literary" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {literaryEvents.map((event, index) => (
                <EventCard
                  key={`lit-${index}`}
                  title={event.title}
                  subtitle={event.subtitle}
                  price={event.price}
                  description={event.description}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Events;
