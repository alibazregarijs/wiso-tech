'use client';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import Text from '@src/shared/components/ui/atoms/Text/Text';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>> & {
  value: number;
  text?: string;
};

type ProgressBarBaseProps = {
  children?: React.ReactNode;
};

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));

export const LinearProgressBar = ({ value = 20 }: Props) => {
  let progressColor = '';
  if (value < 50) {
    progressColor = '#f97316';
  } else {
    progressColor = '#13ec80';
  }
  return (
    <BorderLinearProgress
      variant="determinate"
      value={value}
      sx={{
        [`& .${linearProgressClasses.bar}`]: {
          backgroundColor: progressColor,
        },
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: '#102219',
        },
      }}
    />
  );
};

export const ProgressBarFooter = ({ value, text }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <LinearProgressBar value={value} />
      <div className="flex gap-2">
        <Text as="p" className="text-gray-light-100 font-base text-sm">
          {value}%{' '}
        </Text>
        <Text as="strong" className="text-gray-light-100 text-sm whitespace-nowrap">
          {text}
        </Text>
      </div>
    </div>
  );
};

export const ProgressBarHeader = ({ text, value }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Text as="p" className="text-gray-light-100 font-base">
          {text}
        </Text>
        <Text as="p" className="text-gray-light-100 font-base">
          {value}%
        </Text>
      </div>
      <LinearProgressBar value={value} />
    </div>
  );
};

// 1. Rename this component to avoid the name collision
const ProgressBarBase = ({ children }: ProgressBarBaseProps) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

// 2. Create the final variable using Object.assign on the Base component
const ProgressBar = Object.assign(ProgressBarBase, {
  Header: ProgressBarHeader,
  Footer: ProgressBarFooter,
});

export default ProgressBar;
