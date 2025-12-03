import { headers } from 'next/headers';
import React, { Suspense } from 'react';

export const Header = async () => {
  const headersList = await headers();
  const pathname = headersList.get('x-url') || '/';
  const isSignInPage = pathname === '/sign-in';

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl leading-tight font-bold tracking-tight text-zinc-900 md:text-2xl lg:text-4xl dark:text-white">
        {isSignInPage ? 'Welcome Back!' : 'Join our community'}
      </h1>
      <p className="mt-2 text-[11px] text-zinc-600 md:text-[12px] lg:text-base dark:text-zinc-400">
        {isSignInPage
          ? 'sign in to your account'
          : 'Create an account to start your learning and mentoring journey'}
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
