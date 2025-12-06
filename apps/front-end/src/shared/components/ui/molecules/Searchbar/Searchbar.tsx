import React from 'react';
import Input from '@shared/components/ui/atoms/Input/Input';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

type Props = Readonly<React.HTMLAttributes<HTMLInputElement>>;

export default function Searchbar(props: Props) {
  const [isTyping, setIsTyping] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(e.target.value);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        aria-label="search icon"
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer border-0 bg-transparent p-0 text-zinc-400"
      >
        {<SearchIcon />}
      </button>

      {isTyping.length > 0 ? (
        <button
          type="button"
          aria-label="search icon"
          className="absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer border-0 bg-transparent p-0 text-zinc-400"
        >
          {<CloseIcon />}
        </button>
      ) : null}
      <Input
        onChange={handleChange}
        placeholder="Search"
        className="w-full pl-11"
        {...props}
      />
    </div>
  );
}
