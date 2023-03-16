import { SearchIcon } from '../icons/SearchIcon';
import React from 'react';

export class Search extends React.Component {
  render() {
    return (
      <form className="search">
        <div className="search__icon">
          <SearchIcon />
        </div>
        <input className="search__input" type="text" placeholder="enter for search..." />
      </form>
    );
  }
}
