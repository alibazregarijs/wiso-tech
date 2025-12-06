import React from 'react';
import LandingNavbar from '@src/features/landing-page/components/LandingNavbar';
import LandingHeader from '@features/landing-page/components/LandingHeader';

const page = () => {
  return (
    <div className="bg-green-dark-100 min-h-screen">
      <LandingNavbar />
      <LandingHeader />
    </div>
  );
};

export default page;
