import React from 'react';
import { Char } from '../types';

export const Card = ({ char }: { char: Char }) => {
  return (
    <div className="catalog__card card" key={char.id} data-testid="card">
      <div className="card__img">
        <img src={char.image} alt="char photo" />
      </div>
      <div className="card__row">
        <span>Name</span>
        {char.name}
      </div>
    </div>
  );
};
