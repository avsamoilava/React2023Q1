import { useAppDispatch, useAppSelector } from '../../hooks';
import { SearchIcon } from '../icons/SearchIcon';
import React from 'react';
import { setString } from '../../store/search/searchSlice';

export const Search = () => {
  const { value } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const enterHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && dispatch(setString(event.currentTarget.value));
  };

  return (
    <div className="search">
      <div className="search__icon">
        <SearchIcon />
      </div>
      <input
        className="search__input"
        type="search"
        defaultValue={value}
        placeholder="let's start enter name for search..."
        onKeyDown={enterHandler}
        role="search-input"
      />
    </div>
  );
};
