'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import { authClient } from '@/lib/auth-client';

interface AppError extends Error {
  statusCode?: number;
  code?: string;
}

export const useSignInForm = () => {
  const router = useRouter();

  // --- Material UI Snackbar State ---
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false, // Optional: useful for session persistence
  };

  const handleSubmit = useCallback(
    async (
      values: typeof initialValues,
      { resetForm }: { resetForm?: () => void } = {}
    ) => {
      try {
        // 1. Auth Logic
        await authClient.signIn.email(
          {
            email: values.email,
            password: values.password,
            rememberMe: !values.rememberMe, // Better-auth uses 'dontRememberMe', so we invert the boolean
          },
          {
            onSuccess: () => {
              // 2. Show the success message immediately
              setSnackbar({
                open: true,
                message: 'Signed in successfully! Redirecting...',
                severity: 'success',
              });

              if (resetForm) resetForm();

              // 3. DELAY the redirect so the user sees the toast
              setTimeout(() => {
                // You might want to check for a 'callbackUrl' in the query params here
                // For now, we default to dashboard
                router.push('/dashboard');
                router.refresh(); // Ensure the layout updates with the new session
              }, 2000);
            },
            onError: (ctx) => {
              setSnackbar({
                open: true,
                message: ctx.error.message || 'Invalid email or password',
                severity: 'error',
              });
            },
          }
        );
      } catch (err) {
        const error = err as AppError;
        setSnackbar({
          open: true,
          message: error.message || 'Something went wrong',
          severity: 'error',
        });
      }
    },
    [router]
  );

  return {
    initialValues,
    handleSubmit,
    snackbar,
    handleCloseSnackbar,
  };
};
