'use client';

import React from 'react';
import Link from 'next/link';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';

// Shared Components
import Text from '@shared/components/ui/atoms/Text/Text';
import Button from '@shared/components/ui/atoms/Button/Button';
import { navItems } from '@shared/constants';
import { MobileNavLink } from '@src/shared/components/layouts/MobileNavLink';
// The Compound Component
import Navbar from '@shared/components/layouts/NavbarCompound';

// Helper: A Link that closes the menu when clicked

const LandingNavbar = () => {
  return (
    <Navbar>
      {/* --- TOP BAR --- */}
      <Navbar.Container>
        {/* BRAND */}
        <Navbar.Brand>
          <HomeFilledIcon fontSize="large" className="text-green-light-100" />
          <Text as="h1" className="font-inter ml-4 text-2xl font-bold text-white">
            Wiso-Tech
          </Text>
        </Navbar.Brand>

        {/* DESKTOP NAV (Hidden on Mobile) */}
        <Navbar.Desktop>
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <Text
                as="span"
                className="text-md text-gray-light-100 transition-colors hover:text-white"
              >
                {item.name}
              </Text>
            </Link>
          ))}
        </Navbar.Desktop>

        {/* DESKTOP ACTIONS (Hidden on Mobile) */}
        <Navbar.Desktop className="space-x-8">
          <Link href="/sign-in">
            <Text as="span" className="text-md cursor-pointer text-white">
              Sign In
            </Text>
          </Link>
          <Link href="/sign-up">
            <Button variant="regular" color="primary">
              Sign Up
            </Button>
          </Link>
        </Navbar.Desktop>

        {/* MOBILE TOGGLE (Visible on Mobile) */}
        <Navbar.Toggle />
      </Navbar.Container>

      {/* --- MOBILE DROPDOWN --- */}
      <Navbar.MobileMenu>
        {/* Mobile Links */}
        <div className="mt-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <MobileNavLink key={item.name} href={item.href}>
              <Text as="div" className="text-gray-light-100 text-lg hover:text-white">
                {item.name}
              </Text>
            </MobileNavLink>
          ))}
        </div>

        {/* Mobile Actions */}
        <div className="mt-4 flex justify-between border-t border-white/10 pt-4">
          <MobileNavLink href="/sign-in">
            <Text as="div" className="text-lg text-white">
              Sign In
            </Text>
          </MobileNavLink>

          <MobileNavLink href="/sign-up">
            <Button variant="regular" color="primary" className="justify-center">
              Sign Up
            </Button>
          </MobileNavLink>
        </div>
      </Navbar.MobileMenu>
    </Navbar>
  );
};

export default LandingNavbar;
