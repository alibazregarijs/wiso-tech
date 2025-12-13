// src/hooks/useGetUserSession.ts
import { authClient } from '@src/lib/auth-client';

const useGetUserSession = () => {
  const {
    data: sessionData, // rename to avoid confusion
    isPending,
    error,
  } = authClient.useSession();

  // If you want the ErrorBoundary to catch errors, keep this throw
  if (error) {
    throw error;
  }

  // ✅ RETURN DATA, NOT JSX
  return {
    user: sessionData?.user ?? null, // Safely access user
    session: sessionData?.session ?? null,
    isPending,
  };
};

export default useGetUserSession;
