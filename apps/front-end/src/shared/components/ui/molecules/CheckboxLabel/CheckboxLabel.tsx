import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Text from '@shared/components/ui/atoms/Text/Text';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>>;

export default function CheckboxLabel({ className, ...props }: Props) {
  const classNames = [className, 'flex', 'items-center', 'gap-4'].join(' ');
  return (
    <div className={classNames} {...props}>
      <CheckCircleIcon className="text-green-light-100" />
      <Text className="text-lg text-white">
        Track milestones and see your progress in real-time.
      </Text>
    </div>
  );
}
