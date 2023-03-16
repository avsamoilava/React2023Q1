import { Search } from '../components/UI/Search';
import React from 'react';
import { products, Product } from '../data/data';

export class MainPage extends React.Component {
  render() {
    return (
      <div className="page main">
        <div className="main__search">
          <Search />
        </div>
        <div className="main__catalog">
          <div className="catalog">
            {products.map((prod: Product) => {
              return (
                <div className="catalog__card card" key={prod.id}>
                  <div className="card__img">
                    <img src={prod.image} alt={`${prod.title} photo`} />
                  </div>
                  <div className="card__title">{prod.title}</div>
                  <div className="card__category">{prod.category}</div>
                  <div className="card__price">{prod.price}€</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
