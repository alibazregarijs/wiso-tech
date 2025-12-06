import React from 'react';

const Navbar = () => {
  return (
    <button className="text-text-secondary hover:text-primary relative p-2">
      <span className="material-symbols-outlined text-2xl">notifications</span>
      <span className="absolute top-1 right-1 flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
      </span>
    </button>
  );
};

export default Navbar;
