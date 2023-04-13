import { useAppDispatch, useAppSelector } from '../../hooks';
import { SearchIcon } from '../icons/SearchIcon';
import React, { useState } from 'react';
import { setString } from '../../store/searchSlice';

export const Search = () => {
  const { value } = useAppSelector((state) => state.search);
  const [searchValue, setSearchValue] = useState(value);

  const dispatch = useAppDispatch();
  console.log(value);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setString(searchValue));
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="search__icon">
        <SearchIcon />
      </div>
      <input
        className="search__input"
        type="search"
        defaultValue={value}
        placeholder="let's start enter name for search..."
        onChange={changeHandler}
        role="search-input"
      />
    </form>
  );
};
