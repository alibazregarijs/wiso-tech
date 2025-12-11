import React from 'react';
import Text from '@src/shared/components/ui/atoms/Text/Text';
import { steps, stepsToturial } from '@features/landing-page/constants';

const LandingMain = () => {
  return (
    <main className="mx-4 mt-30 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <Text as="h1" className="font-inter text-3xl! font-bold text-white">
          How It Works.
        </Text>
        <Text as="p" className="font-lexend text-md text-gray-light-100 text-center">
          Get started in three simple steps and begin your growth journey today.
        </Text>
      </div>

      <div className="relative mt-14 grid w-full grid-cols-3 items-center justify-items-center">
        <div className="border-gray-light-100 absolute top-1/2 left-0 w-full -translate-y-1/2 border-t-2"></div>

        {steps.map((step) => (
          <div
            key={step.id} // ✅ stable key
            className="bg-green-dark-200 border-gray-light-100 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2"
          >
            <Text as="h3" className="font-inter text-green-light-100 text-2xl font-bold">
              {step.label}
            </Text>
          </div>
        ))}
      </div>

      <div className="mt-14 grid w-full grid-cols-3 items-stretch justify-items-center gap-6">
        {stepsToturial.map(({ id, title, description }) => (
          <div
            key={id}
            // 1. h-full: Makes the card fill the grid cell height
            className="flex h-full w-full flex-col items-center gap-3"
          >
            <Text as="h2" className="font-inter text-center text-xl font-bold text-white">
              {title}
            </Text>

            <Text
              as="p"
              className="font-lexend text-gray-light-100 text-md flex w-[90%] flex-1 items-center justify-center text-center"
            >
              {description}
            </Text>
          </div>
        ))}
      </div>
    </main>
  );
};

export default LandingMain;
