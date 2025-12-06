'use client';
import { useSignInForm } from '@src/features/auth/sign-in/hooks/useSignInForm';
import { signInValidationSchema } from '@src/features/auth/sign-in/types';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { CircularProgress } from '@mui/material';
import Snackbar from '@shared/components/ui/molecules/Snackbar/Snackbar';
import Button from '@src/shared/components/ui/atoms/Button/Button';
import Text from '@src/shared/components/ui/atoms/Text/Text';
import InputWithLabel from '@src/shared/components/ui/molecules/InputWithLabel/InputWithLabel';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import React from 'react';

const SignInForm = () => {
  const { initialValues, handleSubmit, snackbar, handleCloseSnackbar } =
    useSignInForm();
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signInValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex h-full w-full flex-col">
            <div className="flex w-full flex-col p-8">
              <div className="flex w-full flex-col gap-6">
                <InputWithLabel
                  name="email"
                  id="email"
                  label="Enter your email"
                  className="w-72"
                  placeholder="you@example.com"
                />

                <InputWithLabel
                  name="password"
                  id="password"
                  label="Enter your password"
                  type="password"
                  className="w-72"
                  icon={[
                    <VisibilityIcon key="visible" fontSize="small" />,
                    <VisibilityOffIcon key="hidden" fontSize="small" />,
                  ]}
                  placeholder="••••••••"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="regular"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-md p-3"
                >
                  Sign In
                  {isSubmitting && (
                    <CircularProgress size={16} color="inherit" />
                  )}
                </Button>

                <div className="mt-2 flex flex-col items-center justify-center gap-2">
                  <Text
                    as="p"
                    className="text-center text-[11px] text-zinc-600 md:text-[13px] dark:text-zinc-400"
                  >
                    Didn&apos;t have an account?
                    <Link
                      className="text-green-light-100 mx-1! text-[11px] hover:underline md:text-[13px]"
                      href="/sign-up"
                    >
                      Sign Up
                    </Link>
                  </Text>
                  <Link
                    className="text-green-light-100 mx-1! text-[11px] hover:underline md:text-[13px]"
                    href="/forget-password"
                  >
                    Forget Password?
                  </Link>
                </div>
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

export default SignInForm;
