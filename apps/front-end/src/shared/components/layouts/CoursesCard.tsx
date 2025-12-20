import Image from 'next/image';
import React from 'react';

import Button from '@src/shared/components/ui/atoms/Button/Button';
import Text from '@src/shared/components/ui/atoms/Text/Text';
import ProgressBar from '@src/shared/components/ui/molecules/ProgressBar/ProgressBar';
import { coursesProps } from '@src/shared/types';

const CoursesCard = ({ courses }: coursesProps) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        {courses.map((item) => (
          <div
            key={item.id}
            className="col-span-1 flex flex-col gap-6 rounded-md border-[0.1px] border-gray-600 p-4"
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

            <div className="flex flex-col gap-2">
              <Text as="h2" className="font-inter text-xl font-bold text-white">
                {item.title}
              </Text>
              <Text as="p" className="font-inter text-gray-light-100 text-sm">
                {item.author}
              </Text>
            </div>

            <div>
              <ProgressBar className={`${item.progress === 0 ? 'invisible' : ''}`}>
                <ProgressBar.Footer
                  value={item.progress}
                  text={item.completed ? 'Completed' : 'In Progress'}
                />
              </ProgressBar>
            </div>
            <div className="flex w-full flex-col">
              <Button variant="regular">
                {item.progress === 0 ? 'Start Learning' : 'Continue Learning'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesCard;
