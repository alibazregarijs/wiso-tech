'use client';
import React from 'react';
import Navbar from '@src/shared/components/layouts/NavbarCompound';
import Link from 'next/link';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import Text from '@shared/components/ui/atoms/Text/Text';
import { navItems } from '@src/shared/constants';
import { MobileNavLink } from '@src/shared/components/layouts/MobileNavLink';
import Searchbar from '@src/shared/components/ui/molecules/Searchbar/Searchbar';
import Notification from '@src/shared/components/ui/atoms/Notification/Notification';
import { Avatar } from '@mui/material';
import useGetUserSession from '@src/shared/utils/useGetUserSession';

const LearnerNavbar = () => {
  return (
    <Navbar>
      {/* --- TOP BAR --- */}
      <Navbar.Container>
        {/* BRAND */}
        <Navbar.Brand className="gap-4">
          <div className="flex items-center justify-center">
            <HomeFilledIcon fontSize="large" className="text-green-light-100" />
            <Text as="h1" className="font-inter ml-2 font-bold text-white lg:ml-4 lg:text-2xl">
              Wiso-Tech
            </Text>
          </div>
          <Navbar.Desktop>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Text
                  as="span"
                  className="lg:text-md text-gray-light-100 transition-colors hover:text-white"
                >
                  {item.name}
                </Text>
              </Link>
            ))}
          </Navbar.Desktop>
        </Navbar.Brand>

        {/* DESKTOP NAV (Hidden on Mobile) */}

        {/* DESKTOP ACTIONS (Hidden on Mobile) */}
        <Navbar.Desktop className="">
          <Searchbar />
          <Notification isNotifications={false} />
          <UserAvatar />
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
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
          <Searchbar />
          <Notification isNotifications={false} />
          <UserAvatar />
        </div>
      </Navbar.MobileMenu>
    </Navbar>
  );
};

export const UserAvatar = () => {
  const { user } = useGetUserSession();

  return <Avatar alt="user image" src={user?.profilePhoto} />;
};

export default LearnerNavbar;
