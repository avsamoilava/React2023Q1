import React, { useState } from 'react';
import { Char } from '../../types';
import { CardModal } from './CardModal';

export const Card = ({ char }: { char: Char }) => {
  const [isModalShow, setIsModalShow] = useState(false);
  const closeModal = () => setIsModalShow(false);

  return (
    <React.Fragment>
      <div
        className="catalog__card card"
        key={char.id}
        data-testid="card"
        onClick={() => setIsModalShow(true)}
      >
        <div className="card__img">
          <img src={char.image} alt="char photo" />
        </div>
        <div className="card__row card__row_name">
          <span>{char.name}</span>
        </div>
      </div>
      {isModalShow && <CardModal char={char} cb={closeModal} />}
    </React.Fragment>
  );
};
