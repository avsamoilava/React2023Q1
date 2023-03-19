import { Product } from 'data/data';
import React from 'react';

type CardProps = {
  product: Product;
};

export class Card extends React.Component<CardProps> {
  product: Product;

  constructor(props: CardProps) {
    super(props);
    this.product = props.product;
  }
  render() {
    return (
      <div className="catalog__card card" key={this.product.id} data-testid="card">
        <div className="card__img">
          <img src={this.product.image} alt={`${this.product.title} photo`} />
        </div>
        <div className="card__title">{this.product.title}</div>
        <div className="card__category">{this.product.category}</div>
        <div className="card__price">{this.product.price}€</div>
      </div>
    );
  }
}
