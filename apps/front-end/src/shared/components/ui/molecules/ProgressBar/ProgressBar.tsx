import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import Text from '@src/shared/components/ui/atoms/Text/Text';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>> & {
  value: number;
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));

export default function ProgressBar({ value = 20 }: Props) {
  let progressColor = '';

  if (value < 50) {
    progressColor = '#f97316';
  } else {
    progressColor = '#13ec80';
  }

  return (
    <div className="flex flex-col gap-2">
      <BorderLinearProgress
        variant="determinate"
        value={value}
        sx={{
          [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: progressColor,
          },
        }}
      />
      <Text as="p" className="text-gray-light-100 font-base">
        {value}%
      </Text>
    </div>
  );
}
