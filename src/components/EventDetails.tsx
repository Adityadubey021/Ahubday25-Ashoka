
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface EventDetailsProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  details: string;
  triggerButton?: React.ReactNode;
}

const EventDetails: React.FC<EventDetailsProps> = ({ 
  title, 
  subtitle, 
  description, 
  price, 
  details,
  triggerButton 
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButton || (
          <Button variant="outline" size="sm" className="border-festival-orange text-festival-orange hover:bg-festival-orange/10">
            View Details
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl text-festival-purple">{title}</DialogTitle>
          <DialogDescription className="text-gray-700 font-medium">{subtitle}</DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4">
            <p className="text-gray-600">{description}</p>
            
            <div className="bg-festival-light-purple/50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Event Details</h4>
              <div className="whitespace-pre-line text-gray-700">{details}</div>
            </div>
            
            <div className="bg-festival-light-blue/30 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Entry Fee</h4>
              <p className="text-festival-purple font-semibold">{price}</p>
            </div>
          </div>
        </ScrollArea>
        
        <DialogFooter className="mt-4">
          <Button
            size="lg"
            className="bg-festival-orange hover:bg-orange-600 w-full text-white font-semibold text-lg"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfd3gaB4TXlIKNanGRxXfiVsnANlwmeRgu4wSESAynpNnawcw/viewform', '_blank')}
          >
            Register this Event
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetails;
