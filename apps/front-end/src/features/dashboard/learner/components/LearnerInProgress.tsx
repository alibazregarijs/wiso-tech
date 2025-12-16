'use client';
import Image from 'next/image';
import React from 'react';

import { inProgressItems } from '@src/features/dashboard/learner/constants';
import Button from '@src/shared/components/ui/atoms/Button/Button';
import Text from '@src/shared/components/ui/atoms/Text/Text';
import ProgressBar from '@src/shared/components/ui/molecules/ProgressBar/ProgressBar';

const LearnerInProgress = () => {
  return (
    <div className="bg-green-dark-200 grid gap-4 rounded-lg p-6">
      <Text as="h1" className="font-inter text-2xl font-bold text-white">
        In Progress
      </Text>
      <div className="grid grid-cols-2">
        {inProgressItems.map((item) => (
          <div
            key={item.id}
            className="col-span-1 flex flex-col gap-4 rounded-md border-[0.1px] border-gray-600 p-4"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
              <Image
                src={item.image}
                alt="Picture of the author"
                fill={true}
                className="object-cover"
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-col">
              <Text as="h2" className="font-inter text-xl font-bold text-white">
                {item.title}
              </Text>
              <Text as="p" className="font-inter text-gray-light-100 text-sm">
                {item.author}
              </Text>
            </div>
            <div>
              <ProgressBar>
                <ProgressBar.Footer
                  value={item.progress}
                  text={item.completed ? 'Completed' : 'In Progress'}
                />
              </ProgressBar>
            </div>
            <div className="flex w-full flex-col">
              <Button variant="regular">Continue Learning</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnerInProgress;
