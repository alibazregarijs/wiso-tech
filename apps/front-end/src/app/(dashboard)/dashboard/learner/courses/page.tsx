import React from 'react';

import LearnerNavbar from '@src/features/dashboard/learner/components/LearnerNavbar';
import Text from '@src/shared/components/ui/atoms/Text/Text';

const page = () => {
  return (
    <div className="bg-green-dark-100 min-h-screen">
      <LearnerNavbar />
      <div className="flex flex-col gap-4">
        <Text as="h1" className="font-inter text-2xl font-bold text-white">
          All Courses
        </Text>
        <Text as="p" className="text-gray-light-100 text-sm">
          Expand your knowledge and skills with our extensive course library.
        </Text>
      </div>
    </div>
  );
};

export default page;
