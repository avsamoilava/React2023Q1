import { Form } from '../components/Form/Form';
import React, { useEffect, useState } from 'react';
import { FormCard } from '../types';
import { FormResultCard } from '../components/Form/FormResultCard';

type Props = {
  title: string;
};

export const FormPage = (props: Props) => {
  const [cards, setCards] = useState<FormCard[]>([]);

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const addCard = (card: FormCard): void => {
    setCards([...cards, card]);
  };

  return (
    <div className="form-page page">
      <div className="_container">
        <Form cb={addCard} />
        <div className="form-page__cards cards-gallery">
          {cards.map((card, index) => (
            <FormResultCard key={card.name + index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
