import { Search } from '../components/UI/Search';
import React from 'react';

export class MainPage extends React.Component {
  render() {
    return (
      <div className="page main">
        <div className="main__search">
          <Search />
        </div>
      </div>
    );
  }
}
