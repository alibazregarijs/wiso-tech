import React from 'react';

import { cn } from '@src/shared/utils';

// Optional: A helper utility (standard in most projects)

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>>;

export default function Divider({ className, ...rest }: Props) {
  const classes = cn('border border-gray-light-100', className);

  return <div {...rest} className={classes} />;
}
