import { SearchIcon } from '../icons/SearchIcon';
import React from 'react';

type SearchState = {
  value: string;
};

export class Search extends React.Component {
  state: SearchState;

  constructor(props: object) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount(): void {
    this.setState({ value: localStorage.getItem('searchValue') || '' });
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.state.value);
  }

  changeValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.currentTarget.value });
  }

  render() {
    return (
      <form className="search">
        <div className="search__icon">
          <SearchIcon />
        </div>
        <input
          className="search__input"
          type="search"
          defaultValue={this.state.value}
          placeholder="enter for search..."
          onChange={(e) => this.changeValue(e)}
          role="search-input"
        />
      </form>
    );
  }
}
