import ForgetPasswordForm from '@src/features/auth/forget-password/components/ForgetPasswordForm';
import React from 'react';

const Page = () => {
  return (
    <div className="bg-green-dark-200 mx-auto mt-8 mb-6 flex w-[80%] flex-col items-center justify-center rounded-lg border pb-6 md:w-[50%] dark:border-zinc-800">
      <ForgetPasswordForm />
    </div>
  );
};

export default Page;
