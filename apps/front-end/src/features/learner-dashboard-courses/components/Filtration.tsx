'use client';

import React from 'react';

import Button from '@src/shared/components/ui/atoms/Button/Button';
import ComboBox from '@src/shared/components/ui/molecules/ComboBox/ComboBox';
import { coursesTechLevelItems, coursesTechItems } from '@src/shared/constants';

const Filtration = () => {
  const [item, setItem] = React.useState('');
  const [level, setLevel] = React.useState('');

  return (
    <div className="mt-4 flex w-full items-center justify-center gap-4 px-4">
      <ComboBox className="w-full" items={coursesTechItems} item={item} setItem={setItem} />
      <ComboBox className="w-full" items={coursesTechLevelItems} item={level} setItem={setLevel} />
      <Button className="rounded-md">Search</Button>
    </div>
  );
};

export default Filtration;
