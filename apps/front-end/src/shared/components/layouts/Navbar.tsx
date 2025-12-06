import React from 'react';
import Text from '@shared/components/ui/atoms/Text/Text';
import Devider from '../ui/atoms/Devider/Devider';

interface CommonProps {
  children: React.ReactNode;
  className?: string;
}

interface DividerProps {
  className?: string;
}

const NavbarHeader = ({ children, className = '' }: CommonProps) => {
  return (
    <div className={`flex items-center justify-between p-4 ${className}`}>
      {children}
    </div>
  );
};

const NavbarBrand = ({ children, className = '' }: CommonProps) => {
  return <div className={`flex items-center ${className}`}>{children}</div>;
};

const NavbarTitle = ({ children, className = '' }: CommonProps) => {
  return (
    <Text
      as="h1"
      className={`font-inter ml-4 text-2xl font-bold text-white ${className}`}
    >
      {children}
    </Text>
  );
};

const NavbarLinks = ({ children, className = '' }: CommonProps) => {
  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      {children}
    </div>
  );
};

const NavbarActions = ({ children, className = '' }: CommonProps) => {
  return (
    <div className={`flex items-center justify-center space-x-8 ${className}`}>
      {children}
    </div>
  );
};

const NavbarDivider = ({ className = '' }: DividerProps) => {
  return (
    <Devider
      className={`border-gray-light-100! mt-1! opacity-30 ${className}`}
    />
  );
};

const NavbarRoot = ({ children, className = '' }: CommonProps) => {
  return <div className={`w-full ${className}`}>{children}</div>;
};

const Navbar = Object.assign(NavbarRoot, {
  Header: NavbarHeader,
  Brand: NavbarBrand,
  Title: NavbarTitle,
  Links: NavbarLinks,
  Actions: NavbarActions,
  Divider: NavbarDivider,
});

export default Navbar;
