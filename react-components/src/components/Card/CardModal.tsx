import React from 'react';
import { Char } from '../../types';
import { CloseIcon } from '../icons';
import { RemoveScroll } from 'react-remove-scroll';

export const CardModal = ({ char, cb }: { char: Char; cb: () => void }) => {
  return (
    <RemoveScroll>
      <div className="modal-card" onClick={cb} data-testid="modal-overlay">
        <div className="card" onClick={(e) => e.stopPropagation()} data-testid="modal-content">
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
          <div className="card__close" onClick={cb} data-testid="close-btn">
            <CloseIcon />
          </div>
        </div>
      </div>
    </RemoveScroll>
  );
};
