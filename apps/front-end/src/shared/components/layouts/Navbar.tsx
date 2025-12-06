import React from 'react';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import Text from '@shared/components/ui/atoms/Text/Text';
import Link from 'next/link';
import { navItems } from '@shared/constants';
import Button from '@shared/components/ui/atoms/Button/Button';
import Devider from '../ui/atoms/Devider/Devider';

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <HomeFilledIcon fontSize="large" className="text-green-light-100" />
          <Text
            as="h1"
            className="font-inter ml-4 text-2xl font-bold text-white"
          >
            Wiso-Tech
          </Text>
        </div>
        <div className="flex items-center justify-center space-x-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <Text as="h1" className="text-md text-gray-light-100">
                {item.name}
              </Text>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-8">
          <Link href="/sign-in">
            <Text as="h1" className="text-md text-white">
              Sign In
            </Text>
          </Link>
          <Link href="/sign-up">
            <Button variant="regular" color="primary">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
      <Devider className="border-gray-light-100! mt-1! opacity-30" />
    </>
  );
};

export default Navbar;
