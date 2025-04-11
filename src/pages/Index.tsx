
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
    <div className="font-poppins min-h-screen bg-festival-dark text-white">
      <Navbar />
      <Hero />
      <AboutEvent />
      <Schedule />
      <Events />
      <Coordinators />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
