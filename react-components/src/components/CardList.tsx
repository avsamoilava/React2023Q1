import React from 'react';
import { Card } from './Card';
import { Product } from '../data/data';

export const CardList = ({ list }: { list: Product[] }) => {
  return (
    <div className="catalog">
      {list.map((prod: Product) => (
        <Card key={prod.id} product={prod} />
      ))}
    </div>
  );
};
