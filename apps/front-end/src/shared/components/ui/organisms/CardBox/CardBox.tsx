import React from 'react';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>> & {
  children: React.ReactNode;
};

export default function CardBox({ children, className = '', ...props }: Props) {
  const classNames = [
    className,
    'bg-green-dark-200 border-gray-dark-100 rounded-md border',
  ].join(' ');
  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
}
