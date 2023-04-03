import { Form } from '../components/Form/Form';
import { useEffect, useState } from 'react';
import { FormCard } from '../types';
import { FormResultCard } from '../components/Form/FormResultCard';
import { v4 as uuidv4 } from 'uuid';

export const FormPage = ({ title }: { title: string }) => {
  const [cards, setCards] = useState<FormCard[]>([]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const addCard = (card: FormCard): void => {
    setCards([...cards, card]);
  };

  return (
    <div className="form-page page">
      <div className="_container">
        <Form cb={addCard} />
        <div className="form-page__cards cards-gallery">
          {cards.map((card) => (
            <FormResultCard key={uuidv4()} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
