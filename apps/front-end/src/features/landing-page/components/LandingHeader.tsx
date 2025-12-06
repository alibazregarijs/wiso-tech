import React from 'react';
import Text from '@shared/components/ui/atoms/Text/Text';
import Button from '@src/shared/components/ui/atoms/Button/Button';
import CardBox from '@src/shared/components/ui/organisms/CardBox/CardBox';
import { cardItems } from '@features/landing-page/constants';

// material-ui icons

const LandingHeader = () => {
  return (
    <div className="mt-30 flex flex-col items-center justify-center gap-6 p-4">
      <div className="w-[80%]">
        <Text
          as="h1"
          className="font-lexend text-center text-6xl font-extrabold text-white"
        >
          Unlock Your Potential. Find Your Mentor.
        </Text>
      </div>
      <div className="w-[45%]">
        <Text
          as="h3"
          className="font-lexend text-md text-gray-light-100 text-center"
        >
          Our platform connects you with experienced professionals to help you
          achieve your goals through personalized guidance and structured
          learning.
        </Text>
      </div>
      <div className="flex justify-between gap-4">
        <Button variant="regular" color="primary">
          Find a Mentor
        </Button>
        <Button
          variant="secondary"
          color="primary"
          className="bg-green-dark-200 border border-white"
        >
          Become a Mentor
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <Text
          as="h3"
          className="font-inter mt-30 text-center text-3xl font-bold text-white"
        >
          Everything You Need to Succeed.
        </Text>
        <Text
          as="p"
          className="font-lexend text-md text-gray-light-100 text-center"
        >
          Explore the core features that make our platform the best place to
          learn and grow.
        </Text>
      </div>

      {/* cards section */}
      <div className="grid w-full grid-cols-1 items-center justify-center gap-6 md:grid-cols-3">
        {/* Card 1 */}
        {cardItems.map(({ title, id, description, icon: Icon }) => {
          return (
            <CardBox
              key={id}
              className="flex flex-col justify-center gap-4 rounded-2xl! p-10"
            >
              <div className="bg-green-dark-100 h-fit w-fit rounded-md p-2">
                <Icon className="text-green-light-100 text-3xl" />
              </div>
              <Text as="h3" className="font-inter text-md font-bold text-white">
                {title}
              </Text>
              <div className="w-[85%]">
                <Text
                  as="p"
                  className="font-lexend text-gray-light-100 text-sm"
                >
                  {description}
                </Text>
              </div>
            </CardBox>
          );
        })}
      </div>
    </div>
  );
};

export default LandingHeader;
