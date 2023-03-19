import React from 'react';
import { Card } from './Card';
import { Product } from '../data/data';

type CardListProps = {
  list: Product[];
};

export class CardList extends React.Component<CardListProps> {
  products: Product[];

  constructor(props: CardListProps) {
    super(props);
    this.products = props.list;
  }

  render() {
    return (
      <div className="catalog">
        {this.products.map((prod: Product) => (
          <Card key={prod.id} product={prod} />
        ))}
      </div>
    );
  }
}
