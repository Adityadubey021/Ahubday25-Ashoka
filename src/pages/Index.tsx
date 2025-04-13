
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Coordinators from '@/components/Coordinators';
import FacultyCoordinators from '@/components/FacultyCoordinators';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import Schedule from '@/components/Schedule';
import PastHighlights from '@/components/PastHighlights';

const Index: React.FC = () => {
  return (
    <div className="font-poppins min-h-screen bg-[#121621] text-white">
      <Navbar />
      <Hero />
      <Sponsors /> {/* Chief Guest section and Entrepreneur Summit */}
      <Schedule />
      <Events />
      <PastHighlights /> {/* Gallery section with all photos */}
      <FacultyCoordinators />
      <Coordinators />
      <Footer />
    </div>
  );
};

export default Index;
