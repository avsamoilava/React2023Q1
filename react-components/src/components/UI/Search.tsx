import { SearchIcon } from '../icons/SearchIcon';
import React, { useEffect, useRef, useState } from 'react';

export const Search = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const temp = useRef<string>();

  useEffect(() => {
    temp.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', temp.current || '');
    };
  }, []);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  return (
    <form className="search">
      <div className="search__icon">
        <SearchIcon />
      </div>
      <input
        className="search__input"
        type="search"
        defaultValue={searchValue}
        placeholder="enter for search..."
        onChange={changeValue}
        role="search-input"
      />
    </form>
  );
};
