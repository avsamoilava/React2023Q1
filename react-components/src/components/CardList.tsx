import React from 'react';
import { Card } from './Card';
import { Char } from '../types';

export const CardList = ({ chars }: { chars: Char[] }) => {
  return (
    <div className="catalog">
      {chars.map((char: Char) => (
        <Card key={char.id} char={char} />
      ))}
    </div>
  );
};
