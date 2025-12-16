import Link from 'next/link';
import React from 'react';

import { useNavbar } from '@src/shared/components/layouts/NavbarCompound';

export const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const { closeMenu } = useNavbar(); // Access context
  return (
    <Link href={href} onClick={() => closeMenu()}>
      {children}
    </Link>
  );
};
