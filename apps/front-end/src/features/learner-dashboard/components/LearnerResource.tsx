import React from 'react';

import { sharedResourcesItems } from '@src/features/learner-dashboard/constants/index';
import Text from '@src/shared/components/ui/atoms/Text/Text';
import IconBadge from '@src/shared/components/ui/molecules/IconBadge/IconBadge';

const LearnerResource = () => {
  return (
    <div className="bg-green-dark-200 flex h-full flex-col gap-4 space-y-10 rounded-lg p-6 lg:space-y-0">
      <div>
        <Text as="h2" className="font-inter text-xl font-bold text-white">
          Share Resources
        </Text>
      </div>
      {sharedResourcesItems.map((item) => (
        <div key={item.id} className="flex gap-4">
          <IconBadge>
            <item.icon className="text-green-dark-200" />
          </IconBadge>
          <div className="flex flex-col">
            <Text as="p" className="font-inter text-base text-white">
              {item.sharedBy}
            </Text>
            <Text as="p" className="font-inter text-gray-light-100 text-sm">
              {item.title}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearnerResource;
