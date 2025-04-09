
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Registration from '@/components/Registration';
import Coordinators from '@/components/Coordinators';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import Schedule from '@/components/Schedule';
import PastHighlights from '@/components/PastHighlights';

const Index: React.FC = () => {
  return (
    <div className="font-poppins min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Schedule />
      <Events />
      <PastHighlights />
      <Registration />
      <Coordinators />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
