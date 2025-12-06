import React from 'react';
import Navbar from '@src/shared/components/layouts/Navbar';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import Button from '@shared/components/ui/atoms/Button/Button';
import Text from '@shared/components/ui/atoms/Text/Text';
import { navItems } from '@shared/constants';
import Link from 'next/link';

const page = () => {
  return (
    <div className="bg-green-dark-100 min-h-screen">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <HomeFilledIcon fontSize="large" className="text-green-light-100" />
            <Navbar.Title>Wiso-Tech</Navbar.Title>
          </Navbar.Brand>

          <Navbar.Links>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Text as="h1" className="text-md text-gray-light-100">
                  {item.name}
                </Text>
              </Link>
            ))}
          </Navbar.Links>

          <Navbar.Actions>
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
          </Navbar.Actions>
        </Navbar.Header>

        <Navbar.Divider />
      </Navbar>
    </div>
  );
};

export default page;
