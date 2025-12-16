'use client';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import React, { createContext, useContext, useState, ReactNode, useMemo, useCallback } from 'react';

// --- 1. Context Setup ---
interface NavbarContextType {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a <Navbar />');
  }
  return context;
};

// --- 2. Types ---
interface CommonProps {
  children: ReactNode;
  className?: string;
}

// --- 3. Sub-Components ---

// Root Component
const NavbarRoot = ({ children, className = '' }: CommonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const value = useMemo(() => ({ isOpen, toggleMenu, closeMenu }), [isOpen, toggleMenu, closeMenu]);

  return (
    <NavbarContext.Provider value={value}>
      <nav className={`relative w-full ${className}`}>{children}</nav>
    </NavbarContext.Provider>
  );
};

const NavbarContainer = ({ children, className = '' }: CommonProps) => {
  return <div className={`flex items-center justify-between p-4 ${className}`}>{children}</div>;
};

const NavbarBrand = ({ children, className = '' }: CommonProps) => {
  return <div className={`flex items-center ${className}`}>{children}</div>;
};

const NavbarDesktop = ({ children, className = '' }: CommonProps) => {
  return (
    <div className={`hidden items-center justify-center space-x-4 md:flex ${className}`}>
      {children}
    </div>
  );
};

const NavbarMobileToggle = ({ className = '' }: { className?: string }) => {
  const { isOpen, toggleMenu } = useNavbar();
  return (
    <div className={`md:hidden ${className}`}>
      <IconButton
        onClick={toggleMenu}
        className="text-white"
        aria-label="toggle menu"
        // Optional: Rotate icon slightly when clicked
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
};

// --- UPDATED: Smooth Animation Wrapper ---
const NavbarMobileMenu = ({ children, className = '' }: CommonProps) => {
  const { isOpen } = useNavbar();

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-96 translate-y-0 opacity-100' : 'max-h-0 -translate-y-2 opacity-0'} bg-green-dark-200 ${className} `}
    >
      <div className="flex flex-col space-y-4 px-4 pt-2 pb-6">{children}</div>
    </div>
  );
};

// --- 4. Composition & Export ---
const Navbar = Object.assign(NavbarRoot, {
  Container: NavbarContainer,
  Brand: NavbarBrand,
  Desktop: NavbarDesktop,
  Toggle: NavbarMobileToggle,
  MobileMenu: NavbarMobileMenu,
});

export default Navbar;
