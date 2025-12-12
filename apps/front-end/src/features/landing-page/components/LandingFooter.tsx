import React from 'react';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import Text from '@src/shared/components/ui/atoms/Text/Text';
import { footerItems } from '@src/features/landing-page/constants';
import Devider from '@src/shared/components/ui/atoms/Devider/Devider';

const LandingFooter = () => {
  return (
    <>
      <Devider className="mx-0! mt-30! opacity-30" />
      <div className="bg-green-dark-200 grid w-full grid-cols-2 gap-4 px-4 py-16 md:grid-cols-4">
        <div className="col-span-1 w-full">
          <div className="flex flex-col-reverse gap-2 md:flex-row md:items-start">
            <HomeFilledIcon fontSize="large" className="text-green-light-100" />
            <Text as="h3" className="text-lg font-bold text-white lg:text-2xl">
              Wiso-Tech
            </Text>
          </div>
        </div>
        {footerItems.map(({ id, title1, title2, title3, title4, title5 }) => (
          <div key={id} className="col-span-1 w-full space-y-4">
            <Text className="font-bold text-white" as="h2">
              {title1}
            </Text>
            <Text as="p" className="text-gray-light-100 text-sm">
              {title2}
            </Text>
            <Text as="p" className="text-gray-light-100 text-sm">
              {title3}
            </Text>
            <Text as="p" className="text-gray-light-100 text-sm">
              {title4}
            </Text>
            <Text as="p" className="text-gray-light-100 text-sm">
              {title5}
            </Text>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingFooter;
