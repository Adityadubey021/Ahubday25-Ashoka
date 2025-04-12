
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Coordinators from '@/components/Coordinators';
import FacultyCoordinators from '@/components/FacultyCoordinators';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import Schedule from '@/components/Schedule';

const Index: React.FC = () => {
  return (
    <div className="font-poppins min-h-screen bg-[#121621] text-white">
      <Navbar />
      <Hero />
      <Sponsors />
      <Schedule />
      <Events />
      <FacultyCoordinators />
      <Coordinators />
      <Footer />
    </div>
  );
};

export default Index;
