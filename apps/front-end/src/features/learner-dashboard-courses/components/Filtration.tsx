'use client';

import useFiltrationSearchParams from '@src/features/learner-dashboard-courses/hooks/useFiltrationSearchParams';
import Button from '@src/shared/components/ui/atoms/Button/Button';
import ComboBox from '@src/shared/components/ui/molecules/ComboBox/ComboBox';
import { coursesTechLevelItems, coursesTechItems } from '@src/shared/constants';

const Filtration = () => {
  const { item, setItem, level, setLevel, handleSearch } = useFiltrationSearchParams();

  return (
    <div className="mt-4 flex w-full items-center justify-center gap-4 px-4">
      <ComboBox className="w-full" items={coursesTechItems} item={item} setItem={setItem} />
      <ComboBox className="w-full" items={coursesTechLevelItems} item={level} setItem={setLevel} />

      {/* 9. Attach the handler to the button */}
      <Button className="rounded-md" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default Filtration;
