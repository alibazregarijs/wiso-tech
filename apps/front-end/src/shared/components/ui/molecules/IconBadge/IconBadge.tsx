import React from 'react';

import { cn } from '@src/shared/utils';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>> & {
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  icon?: React.ReactNode;
};

export default function IconBadge({ className, children, ...props }: Props) {
  const classNames = cn(
    `rounded-lg flex items-center justify-center bg-green-light-100 p-3`,
    className
  );
  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
}
