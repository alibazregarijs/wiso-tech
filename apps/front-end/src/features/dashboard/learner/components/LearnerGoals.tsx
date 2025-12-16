'use client';
import React from 'react';

import Text from '@src/shared/components/ui/atoms/Text/Text';
import ProgressBar from '@src/shared/components/ui/molecules/ProgressBar/ProgressBar';

const LearnerGoals = () => {
  return (
    <div className="bg-green-dark-200 mt-6 flex flex-col gap-6 rounded-lg p-6">
      <div className="flex">
        <Text as="h2" className="text-2xl font-bold text-white">
          My Goals
        </Text>
      </div>
      <div className="flex flex-col gap-2">
        <Text as="p" className="font-lg text-white">
          Master React Hooks
        </Text>
        <ProgressBar>
          <ProgressBar.Footer value={80} text="Modules Completed" />
        </ProgressBar>
      </div>

      <div className="flex flex-col gap-2">
        <Text as="p" className="font-lg text-white">
          Prepare for Certification Exam
        </Text>
        <ProgressBar>
          <ProgressBar.Footer value={80} text="Modules Completed" />
        </ProgressBar>
      </div>
      <div />
    </div>
  );
};

export default LearnerGoals;
