import React, { Suspense } from 'react';

import ResetPasswordForm from '@src/features/auth/reset-password/components/ResetPassword';

const ResetPassword = () => {
  return (
    <div className="bg-green-dark-200 mx-auto mt-8 mb-6 flex w-[80%] flex-col items-center justify-center rounded-lg border pb-6 md:w-[50%] dark:border-zinc-800">
      <Suspense fallback={<div className="p-8 text-center">Loading form...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
};

export default ResetPassword;
