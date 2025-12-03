import SignInForm from '@src/features/auth/sign-in/components/SignInForm';
import React from 'react';

const page = () => {
  return (
    <div className="bg-secondary-background-color mx-auto mt-8 mb-6 flex w-[80%] flex-col items-center justify-center rounded-lg border pb-6 md:w-[40%] dark:border-zinc-800">
      <SignInForm />
    </div>
  );
};

export default page;
