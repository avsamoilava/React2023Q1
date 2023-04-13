import { Form } from '../components/Form/Form';
import { useEffect } from 'react';
import { FormResultCard } from '../components/Form/FormResultCard';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../hooks';

export const FormPage = ({ title }: { title: string }) => {
  const { cards } = useAppSelector((state) => state.form);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="form-page page">
      <div className="_container">
        <Form />
        <div className="form-page__cards cards-gallery">
          {cards.map((card) => (
            <FormResultCard key={uuidv4()} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
