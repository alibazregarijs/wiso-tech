import React from 'react';

import LearnerNavbar from '@src/features/dashboard/learner/components/LearnerNavbar';
import Devider from '@src/shared/components/ui/atoms/Devider/Devider';
import Text from '@src/shared/components/ui/atoms/Text/Text';

const page = () => {
  return (
    <div className="bg-green-dark-100 min-h-screen">
      <LearnerNavbar />
      <Devider />
      <div className="mt-8 flex flex-col gap-4 px-4">
        <Text as="h1" className="font-lexend text-4xl font-bold text-white">
          All Courses
        </Text>
        <Text as="p" className="text-gray-light-100 text-sm">
          Expand your knowledge and skills with our extensive course library.
        </Text>
      </div>
      <Devider className="mx-4 mt-8" />
    </div>
  );
};

export default page;
