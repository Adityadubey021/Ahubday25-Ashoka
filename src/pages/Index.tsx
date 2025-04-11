
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Coordinators from '@/components/Coordinators';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import Schedule from '@/components/Schedule';
import AboutEvent from '@/components/AboutEvent';

const Index: React.FC = () => {
  return (
    <div className="font-poppins min-h-screen bg-festival-darker text-white">
      <Navbar />
      <Hero />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-festival-darker to-festival-dark z-0"></div>
        <AboutEvent />
        <Schedule />
        <Events />
        <Coordinators />
        <Sponsors />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
