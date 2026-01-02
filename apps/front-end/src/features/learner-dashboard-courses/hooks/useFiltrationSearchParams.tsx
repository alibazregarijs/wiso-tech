import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState } from 'react';

const useFiltrationSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Read values from URL
  const techFromUrl = searchParams.get('tech') || '';
  const levelFromUrl = searchParams.get('level') || '';

  // Local input state (controlled inputs)
  const [item, setItem] = useState(techFromUrl);
  const [level, setLevel] = useState(levelFromUrl);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);

    item ? params.set('tech', item) : params.delete('tech');
    level ? params.set('level', level) : params.delete('level');

    params.set('page', '1');

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { item, setItem, level, setLevel, handleSearch };
};

export default useFiltrationSearchParams;
