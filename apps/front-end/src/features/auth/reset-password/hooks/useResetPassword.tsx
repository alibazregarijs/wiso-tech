'use client';

import { useRouter, useSearchParams } from 'next/navigation'; // 1. Import useSearchParams
import { useCallback, useEffect, useState } from 'react';

import { authClient } from '@/lib/auth-client';

export const useResetPassword = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const router = useRouter();
  const searchParams = useSearchParams(); // 2. Initialize search params
  const token = searchParams.get('token'); // 3. Get the token from URL

  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        setSnackbar({
          open: true,
          message: 'Missing reset token. Please click the link in your email again.',
          severity: 'error',
        });
      }, 0);

      const timeout = setTimeout(() => router.push('/sign-in'), 3000);
      return () => clearTimeout(timeout);
    }
  }, [token, router]);

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const initialValues = {
    password: '',
  };

  const handleSubmit = useCallback(
    async (values: typeof initialValues, { resetForm }: { resetForm?: () => void } = {}) => {
      // 4. Guard clause: Ensure token exists before calling API
      if (!token) {
        setSnackbar({
          open: true,
          message: 'Missing reset token. Please click the link in your email again.',
          severity: 'error',
        });
        return;
      }

      try {
        const { error } = await authClient.resetPassword({
          newPassword: values.password,
          token: token, // 5. Explicitly pass the token here
        });

        if (error) {
          // Handle API error (e.g. invalid or expired token)
          setSnackbar({
            open: true,
            message: error.message || 'Failed to reset password',
            severity: 'error',
          });
        } else {
          // Success case
          setSnackbar({
            open: true,
            message: 'Password reset successfully!',
            severity: 'success',
          });

          if (resetForm) resetForm();

          // Optional: Delay redirect slightly so user sees success message
          setTimeout(() => {
            router.push('/sign-in');
          }, 2000);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        setSnackbar({
          open: true,
          message: 'An unexpected error occurred',
          severity: 'error',
        });
      }
    },
    [router, token] // Add token to dependency array
  );

  return {
    initialValues,
    handleSubmit,
    snackbar,
    handleCloseSnackbar,
  };
};
