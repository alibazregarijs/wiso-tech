import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';

import Text from '@shared/components/ui/atoms/Text/Text';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>> & {
  fontSize?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
};

const textSize = {
  small: 'text-sm',
  medium: 'text-md',
  large: 'text-lg',
};

export default function CheckboxLabel({
  className,
  children,
  fontSize = 'medium', // default size
  ...props
}: Props) {
  const classNames = [className, 'flex', 'items-center', 'gap-4'].filter(Boolean).join(' ');

  const textClassName = ['text-white', textSize[fontSize]].filter(Boolean).join(' ');

  return (
    <div className={classNames} {...props}>
      <CheckCircleIcon fontSize={fontSize} className="text-green-light-100" />
      <Text as="p" className={textClassName}>
        {children}
      </Text>
    </div>
  );
}
