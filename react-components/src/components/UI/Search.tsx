import { SearchIcon } from '../icons/SearchIcon';
import React, { useEffect, useState } from 'react';

export const Search = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchValue);
    };
  }, [searchValue]);

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
