import React from 'react';
import LandingNavbar from '@src/features/landing-page/components/LandingNavbar';
import LandingHeader from '@features/landing-page/components/LandingHeader';
import LandingMain from '@features/landing-page/components/LandingMain';
import LandingFooter from '@features/landing-page/components/LandingFooter';

const page = () => {
  return (
    <div className="bg-green-dark-100 min-h-screen">
      <LandingNavbar />
      <LandingHeader />
      <LandingMain />
      <LandingFooter />
    </div>
  );
};

export default page;
