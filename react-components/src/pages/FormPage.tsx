import { Form } from '../components/Form/Form';
import { FormResultCard } from '../components/Form/FormResultCard';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../hooks';
import { Helmet } from 'react-helmet';

export const FormPage = ({ title }: { title: string }) => {
  const { cards } = useAppSelector((state) => state.form);

  return (
    <div className="form-page page">
      <Helmet>
        <title>{title}</title>
      </Helmet>
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
