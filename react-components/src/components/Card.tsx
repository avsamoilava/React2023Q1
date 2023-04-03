import { Product } from 'data/data';
import React from 'react';

export const Card = ({ product }: { product: Product }) => {
  const { category, id, image, price, title } = product;
  return (
    <div className="catalog__card card" key={id} data-testid="card">
      <div className="card__img">
        <img src={image} alt={`${title} photo`} />
      </div>
      <div className="card__title">{title}</div>
      <div className="card__category">{category}</div>
      <div className="card__price">{price}€</div>
    </div>
  );
};
