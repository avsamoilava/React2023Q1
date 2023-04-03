import React, { useState } from 'react';
import { Char } from '../../types';
import { CardModal } from './CardModal';

export const Card = ({ char }: { char: Char }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <React.Fragment>
      <div
        className="catalog__card card"
        key={char.id}
        data-testid="card"
        onClick={() => setModalShow(true)}
      >
        <div className="card__img">
          <img src={char.image} alt="char photo" />
        </div>
        <div className="card__row">
          <span>{char.name}</span>
        </div>
      </div>
      {modalShow && <CardModal char={char} cb={() => setModalShow(false)} />}
    </React.Fragment>
  );
};
