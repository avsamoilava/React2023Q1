import { SearchIcon } from '../icons/SearchIcon';
import React, { useEffect, useRef, useState } from 'react';

export const Search = ({ cb }: { cb: (param: string) => void }) => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const temp = useRef<string>();

  useEffect(() => {
    temp.current = searchValue;
  }, [searchValue]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    cb(temp.current || '');
    localStorage.setItem('searchValue', temp.current || '');
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="search__icon">
        <SearchIcon />
      </div>
      <input
        className="search__input"
        type="search"
        defaultValue={searchValue}
        placeholder="let's start enter name for search..."
        onChange={changeHandler}
        role="search-input"
      />
    </form>
  );
};
