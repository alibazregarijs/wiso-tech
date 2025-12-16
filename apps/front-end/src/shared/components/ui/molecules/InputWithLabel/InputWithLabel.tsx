import { useField } from 'formik';
import type { HTMLProps, ReactNode } from 'react';

import Input from '@shared/components/ui/atoms/Input/Input';
import Text from '@shared/components/ui/atoms/Text/Text';

interface Props extends Omit<HTMLProps<HTMLInputElement>, 'name'> {
  readonly name: string; // <-- required for Formik
  readonly label: string;
  readonly icon?: ReactNode | ReactNode[];
}

export default function InputWithLabel({ label, icon, ...props }: Props) {
  const [field, meta] = useField({ name: props.name }); // ensure name is passed
  return (
    <div className="mb-medium grid gap-2">
      <Text
        as="label"
        htmlFor={props.id ?? props.name}
        className="cursor-pointer text-[14px] text-white lg:text-[16px]"
      >
        {label}
      </Text>
      <Input {...field} {...props} icon={icon} />
      {meta.touched && meta.error && (
        <Text as="span" className="text-xs text-red-500">
          {meta.error}
        </Text>
      )}
    </div>
  );
}
