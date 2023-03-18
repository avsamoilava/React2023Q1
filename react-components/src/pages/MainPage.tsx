import { Search } from '../components/UI/Search';
import React from 'react';
import { products } from '../data/data';
import { CardList } from '../components/CardList';

export class MainPage extends React.Component {
  render() {
    return (
      <div className="page main">
        <div className="main__search">
          <Search />
        </div>
        <div className="main__catalog">
          <CardList list={products} />
        </div>
      </div>
    );
  }
}
