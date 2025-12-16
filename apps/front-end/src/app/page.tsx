import React from 'react';

import LandingFooter from '@features/landing-page/components/LandingFooter';
import LandingHeader from '@features/landing-page/components/LandingHeader';
import LandingMain from '@features/landing-page/components/LandingMain';
import LandingNavbar from '@src/features/landing-page/components/LandingNavbar';
import Devider from '@src/shared/components/ui/atoms/Devider/Devider';

const page = () => {
  return (
    <div className="bg-green-dark-100 min-h-screen">
      <LandingNavbar />
      <Devider className="opacity-30" />
      <LandingHeader />
      <LandingMain />
      <LandingFooter />
    </div>
  );
};

export default page;
