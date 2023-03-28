import React from 'react';
import { FormCard } from '../../types';

type Props = {
  card: FormCard;
};

export class FormResultCard extends React.Component<Props> {
  card: FormCard;
  constructor(props: Props) {
    super(props);
    this.card = this.props.card;
  }

  render() {
    return (
      <div className="form-card">
        <div className="form-card__image">
          <img src={this.card.image} alt={`photo by ${this.card.name}`} />
        </div>
        <div className="form-card__content">
          <div className="form-card__row">
            <div className="form-card__name">{this.card.name}</div>
          </div>
          <div className="form-card__row">
            <div className="form-card__country">{this.card.country}</div>
          </div>
          <div className="form-card__row">
            <div className="form-card__date">{this.card.date}</div>
            <div className="form-card__gender">{this.card.gender}</div>
          </div>
          <div className="form-card__row">
            <div className="form-card__agreement">
              The user agrees to the processing of personal data
            </div>
          </div>
        </div>
      </div>
    );
  }
}
