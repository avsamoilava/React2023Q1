import React from 'react';
import { FormCard } from '../../types';

export const FormResultCard = ({ card }: { card: FormCard }) => {
  const { country, date, gender, image, name } = card;
  return (
    <div className="form-card">
      <div className="form-card__image">
        <img src={image} alt={`photo by ${name}`} />
      </div>
      <div className="form-card__content">
        <div className="form-card__row">
          <div className="form-card__name">{name}</div>
        </div>
        <div className="form-card__row">
          <div className="form-card__country">{country}</div>
        </div>
        <div className="form-card__row">
          <div className="form-card__date">{date}</div>
          <div className="form-card__gender">{gender}</div>
        </div>
        <div className="form-card__row">
          <div className="form-card__agreement">
            The user agrees to the processing of personal data
          </div>
        </div>
      </div>
    </div>
  );
};
