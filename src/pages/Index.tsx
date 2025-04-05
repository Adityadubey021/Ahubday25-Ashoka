
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Registration from '@/components/Registration';
import Coordinators from '@/components/Coordinators';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="font-poppins min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Events />
      <Registration />
      <Coordinators />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
