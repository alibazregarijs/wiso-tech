'use client';

import React from 'react';

import { inProgressItems } from '@src/features/learner-dashboard/constants';
import CoursesCard from '@src/shared/components/layouts/CoursesCard';
import Text from '@src/shared/components/ui/atoms/Text/Text';

const LearnerInProgress = () => {
  return (
    <div className="bg-green-dark-200 grid gap-4 rounded-lg p-6">
      <Text as="h1" className="font-inter text-2xl font-bold text-white">
        In Progress
      </Text>
      <CoursesCard courses={inProgressItems.slice(0, 2)} />
    </div>
  );
};

export default LearnerInProgress;
