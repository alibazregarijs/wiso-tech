'use client';
import { CircularProgress } from '@mui/material';
import Snackbar from '@shared/components/ui/molecules/Snackbar/Snackbar';
import { useForgetPasswordForm } from '@src/features/auth/forget-password/hooks/useForgetPassword';
import { forgetPasswordSchema } from '@src/features/auth/forget-password/types';
import Button from '@src/shared/components/ui/atoms/Button/Button';
import Text from '@src/shared/components/ui/atoms/Text/Text';
import InputWithLabel from '@src/shared/components/ui/molecules/InputWithLabel/InputWithLabel';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import React from 'react';

const ForgetPasswordForm = () => {
  const { initialValues, handleSubmit, snackbar, handleCloseSnackbar } =
    useForgetPasswordForm();
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={forgetPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex w-full flex-col">
            <div className="bg-green-dark-200 flex flex-col justify-center gap-6 p-8">
              <InputWithLabel
                placeholder="you@example.com"
                name="email"
                id="email"
                label="Enter your email"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="regular"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-md p-3"
              >
                Send Reset Link
                {isSubmitting && <CircularProgress size={16} color="inherit" />}
              </Button>
              <div>
                <Text
                  as="p"
                  className="text-center text-[11px] text-zinc-600 md:text-[13px] dark:text-zinc-400"
                >
                  Remember your password?
                  <Link
                    className="text-green-light-100 mx-1! text-[11px] hover:underline md:text-[13px]"
                    href="/sign-up"
                  >
                    Sign In
                  </Link>
                </Text>
              </div>
            </div>
          </Form>
        )}
      </Formik>
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

export default ForgetPasswordForm;
