'use client';

import { useCallback, useState } from 'react';

import { authClient } from '@/lib/auth-client';

export const useForgetPasswordForm = () => {
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
  };

  const handleSubmit = useCallback(
    async (
      values: typeof initialValues,
      { resetForm }: { resetForm?: () => void } = {}
    ) => {
      try {
        const { error } = await authClient.requestPasswordReset({
          email: values.email,
          redirectTo: '/reset-password', // URL to redirect to after clicking link in email
        });
        if (error) {
          setSnackbar({
            open: true,
            message: error.message || 'Failed to send reset email.',
            severity: 'error',
          });
          return; // Stop execution
        }

        setSnackbar({
          open: true,
          message: 'If an account exists, a reset link has been sent.',
          severity: 'success',
        });

        if (resetForm) {
          resetForm();
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Forget Password Error:', err);
        setSnackbar({
          open: true,
          message:
            err instanceof Error
              ? err.message
              : 'An unexpected error occurred. Please try again.',
          severity: 'error',
        });
      }
    },
    []
  );

  return {
    initialValues,
    handleSubmit,
    snackbar,
    handleCloseSnackbar,
  };
};
