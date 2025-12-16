'use client';
import { Formik, Form } from 'formik';
import React from 'react';

import Devider from '@shared/components/ui/atoms/Devider/Devider';
import Snackbar from '@shared/components/ui/molecules/Snackbar/Snackbar';
import AccountDetail from '@shared/components/ui/organisms/AccountDetail/AccountDetail';
import LearnerMentor from '@shared/components/ui/organisms/LearnerMentor/LearnerMentor';
import ProfileInformation from '@shared/components/ui/organisms/ProfileInformation/ProfileInformation';
import { LearnerMentorProvider } from '@src/features/auth/sign-up/context/LearnerMentorContextProvider';
import { useSignUpForm } from '@src/features/auth/sign-up/hooks/useSignUpForm';
import { signUpValidationSchema } from '@src/features/auth/sign-up/types';

const SignUpForm = () => {
  const { initialValues, handleSubmit, snackbar, handleCloseSnackbar } = useSignUpForm();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex w-full flex-col">
            <LearnerMentorProvider>
              <AccountDetail />
              <Devider />
              <ProfileInformation />
              <Devider className="mt-6!" />
              <LearnerMentor isSubmitting={isSubmitting} />
            </LearnerMentorProvider>
          </Form>
        )}
      </Formik>

      {/* 2. Add the Snackbar here */}
      <Snackbar
        open={snackbar.open}
        time={2000} // use your `time` prop instead of autoHideDuration
        message={snackbar.message}
        severity={snackbar.severity}
        handleCloseSnackbar={handleCloseSnackbar}
      />
    </>
  );
};

export default SignUpForm;
