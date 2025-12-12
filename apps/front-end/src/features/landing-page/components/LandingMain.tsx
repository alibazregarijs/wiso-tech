import React from 'react';
import Text from '@src/shared/components/ui/atoms/Text/Text';
import { steps, stepsToturial } from '@features/landing-page/constants';
import CheckboxLabel from '@src/shared/components/ui/molecules/CheckboxLabel/CheckboxLabel';
import Image from 'next/image';
import { forLearnersItems } from '@features/landing-page/constants';
import { userMentorsLeanersItems } from '@features/landing-page/constants';
import CardBox from '@src/shared/components/ui/organisms/CardBox/CardBox';
import Button from '@src/shared/components/ui/atoms/Button/Button';

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

      {/* user image in mentoring */}

      {forLearnersItems.map(
        (
          {
            id,
            firstTitle,
            secondTitle,
            description,
            firstCheckBoxLabel,
            secondCheckBoxLabel,
            thirdCheckBoxLabel,
            image,
          },
          index // 1. Get the index here
        ) => (
          <div
            key={id}
            className="mx-4 mt-30 grid w-full grid-cols-1 items-center gap-4 md:grid-cols-2"
          >
            <div className="col-span-1 grid gap-4">
              <Text as="h2" className="text-green-light-100 text-sm font-bold">
                {firstTitle}
              </Text>
              <Text className="text-3xl font-bold text-white" as="h2">
                {secondTitle}
              </Text>
              <Text as="p" className="text-gray-light-100 w-[65%] text-sm">
                {description}
              </Text>
              <div className="mt-4 flex flex-col gap-4">
                <CheckboxLabel fontSize="small">{firstCheckBoxLabel}</CheckboxLabel>
                <CheckboxLabel fontSize="small">{secondCheckBoxLabel}</CheckboxLabel>
                <CheckboxLabel fontSize="small">{thirdCheckBoxLabel}</CheckboxLabel>
              </div>
            </div>

            <div
              className={`col-span-1 h-[400px] w-full rounded-lg bg-white md:w-[90%] ${
                index % 2 !== 0 ? 'md:order-first' : ''
              }`}
            >
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image ?? ''}
                  alt="Mentoring visual"
                  width={350}
                  height={350}
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        )
      )}

      {/* cards and user avatar image */}
      <div className="mt-30 grid justify-items-center">
        <Text as="h2" className="text-3xl font-bold text-white">
          Trusted by Professionals and Ambitious Learners
        </Text>
        <div className="mt-20 grid grid-cols-1 justify-items-center gap-4 md:grid-cols-3">
          {userMentorsLeanersItems.map(({ id, name, description, image, career }) => (
            <div key={id} className="col-span-1 h-full">
              <CardBox className="flex h-full flex-col gap-6 rounded-xl! px-10 py-6">
                <Text className="text-gray-light-100 w-full text-sm lg:w-[80%]" as="p">
                  {description}
                </Text>
                <div className="mt-auto flex flex-col gap-2 lg:flex-row lg:items-start">
                  <Image
                    className="shrink-0 rounded-full"
                    src={image}
                    priority={false}
                    loading="lazy"
                    alt="user-1"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col justify-center">
                    <Text as="h3" className="text-md font-semibold text-white">
                      {name}
                    </Text>
                    <Text className="text-gray-light-100 w-full text-sm leading-tight" as="p">
                      {career}
                    </Text>
                  </div>
                </div>
              </CardBox>
            </div>
          ))}
        </div>
      </div>

      {/* banner */}
      <div className="bg-green-light-100 mt-30 rounded-lg p-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <Text as="h2" className="text-green-dark-200 text-2xl font-bold">
            Ready to Start Your Journey?
          </Text>
          <Text as="p" className="text-gray-dark-100 text-md text-center opacity-80 md:w-[60%]">
            Whether you&apos;re looking to accelerate your career or share your expertise, your next
            chapter starts here. Join our community today.
          </Text>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Button className="text-gray-dark-100 bg-white">Find a Mentor</Button>
            <Button variant="secondary">Become a Mentor</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingMain;
