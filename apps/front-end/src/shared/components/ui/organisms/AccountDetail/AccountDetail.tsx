'use client';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputWithLabel from '@shared/components/ui/molecules/InputWithLabel/InputWithLabel';
import { useField } from 'formik';
import React from 'react';

export default function AccountDetail() {
  const [usernameField] = useField('username');

  const [emailField] = useField('email');

  const [passwordField] = useField('password');

  return (
    <div className="flex h-full w-full flex-col rounded-lg px-6 pt-8">
      <h2 className="text-sm font-semibold text-zinc-900 lg:text-[18px] dark:text-white">
        Account Detail
      </h2>
      <div className="mt-6 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <InputWithLabel
            id="username"
            {...usernameField} // ✅ controlled props from Formik
            label="Username"
            placeholder="Enter a unique username"
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <InputWithLabel
            id="email"
            {...emailField}
            label="Email Address"
            placeholder="you@example.com"
          />
        </div>

        <div className="col-span-12">
          <InputWithLabel
            id="password"
            {...passwordField}
            label="Password"
            type="password"
            icon={[
              <VisibilityIcon key="visible" fontSize="small" />,
              <VisibilityOffIcon key="hidden" fontSize="small" />,
            ]}
            placeholder="Enter a strong password"
          />
        </div>
      </div>
    </div>
  );
}
