import React from 'react';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>>;

export default function Devider(props: Props) {
  const { className, ...rest } = props;

  const classNames = [
    className,
    'mt-4',
    'mx-6',
    'border',
    'border-gray-light-100',
  ].join(' ');

  return <div {...rest} className={classNames} />;
}
