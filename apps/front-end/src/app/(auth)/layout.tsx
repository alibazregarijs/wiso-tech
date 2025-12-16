import { headers } from 'next/headers';
import React, { Suspense } from 'react';

export const Header = async () => {
  const headersList = await headers();
  const pathname = headersList.get('x-url') || '/';
  const isSignInPage = pathname === '/sign-in';
  const isResetPasswordPage = pathname === '/reset-password';
  const isForgetPasswordPage = pathname === '/forget-password';

  // ✅ Extracted ternaries into independent statements
  let title: string;
  let subtitle: string;

  if (isSignInPage) {
    title = 'Welcome Back!';
    subtitle = 'sign in to your account';
  } else if (isResetPasswordPage) {
    title = 'Reset Password';
    subtitle = 'Enter your email to receive a password reset link';
  } else if (isForgetPasswordPage) {
    title = 'Forget Password';
    subtitle = 'Enter your new password';
  } else {
    title = 'Join our community';
    subtitle = 'Create an account to start your learning and mentoring journey';
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl leading-tight font-bold tracking-tight text-zinc-900 md:text-2xl lg:text-4xl dark:text-white">
        {title}
      </h1>
      <p className="mt-2 text-[11px] text-zinc-600 md:text-[12px] lg:text-base dark:text-zinc-400">
        {subtitle}
      </p>
    </div>
  );
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-green-dark-100 flex min-h-screen flex-col pt-4">
      <Suspense fallback={<div>loading...</div>}>
        <Header />
      </Suspense>
      {children}
    </div>
  );
};

export default AuthLayout;
