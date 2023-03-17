import { Search } from '../components/UI/Search';
import React from 'react';
import { products, Product } from '../data/data';
import { Card } from '../components/Card';

export class MainPage extends React.Component {
  render() {
    return (
      <div className="page main">
        <div className="main__search">
          <Search />
        </div>
        <div className="main__catalog">
          <div className="catalog">
            {products.map((prod: Product) => (
              <Card key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
