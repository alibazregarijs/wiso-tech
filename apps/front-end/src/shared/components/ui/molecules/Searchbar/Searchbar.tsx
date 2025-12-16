'use client';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

import Input from '@shared/components/ui/atoms/Input/Input';

type Props = Readonly<React.InputHTMLAttributes<HTMLInputElement>>;

export default function Searchbar(props: Props) {
  const [isTyping, setIsTyping] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e);
    setIsTyping(e.target.value);
  };

  const clearInput = () => {
    setIsTyping('');
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
          onClick={() => clearInput()}
          type="button"
          aria-label="search icon"
          className="absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer border-0 bg-transparent p-0 text-zinc-400"
        >
          {<CloseIcon />}
        </button>
      ) : null}
      <Input
        value={isTyping}
        onChange={handleChange}
        placeholder="Search"
        className="w-full pl-11"
        {...props}
      />
    </div>
  );
}
