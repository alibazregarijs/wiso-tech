import SignUpForm from '@features/auth/sign-up/components/SignUpForm';
import React from 'react';

const Page = () => {
  return (
    <div className="bg-green-dark-100 mx-auto mt-8 mb-6 flex w-[80%] flex-col items-center justify-center rounded-lg border pb-6 md:w-[50%] dark:border-zinc-800">
      <SignUpForm />
    </div>
  );
};

export default Page;
