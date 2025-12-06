import React from 'react';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>> & {
  children: React.ReactNode;
};

export default function CardBox({ children, ...props }: Props) {
  return (
    <div
      {...props}
      className="bg-green-dark-200 border-gray-light-100 rounded-md border"
    >
      {children}
    </div>
  );
}
