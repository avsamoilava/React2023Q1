import React from 'react';
import { Char } from '../../types';
import { CloseIcon } from '../icons';

export const CardModal = ({ char, cb }: { char: Char; cb: () => void }) => {
  return (
    <div className="modal-card" onClick={cb}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        <div className="card__img">
          <img src={char.image} alt="char photo" />
        </div>
        <div className="card__row">
          <span>Name</span>
          {char.name}
        </div>

        <div className="card__row">
          <span>Status</span>
          {char.status}
        </div>
        <div className="card__row">
          <span>Type</span>
          {char.type}
        </div>
        <div className="card__row">
          <span>Gender</span>
          {char.gender}
        </div>
        <div className="card__row">
          <span>Species</span>
          {char.species}
        </div>
        <div className="card__close" onClick={cb}>
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};
