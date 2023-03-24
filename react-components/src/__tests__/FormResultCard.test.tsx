import { render, screen } from '@testing-library/react';
import { FormCard } from '../types';
import { FormResultCard } from '../components/Form/FormResultCard';

const fakeCard: FormCard = {
  name: 'Ivan Ivanov',
  country: 'Belarus',
  date: '2023-12-12',
  image: 'image.png',
  gender: 'male',
};

describe('FormResultCard component', () => {
  it('should have a name', () => {
    render(<FormResultCard card={fakeCard} />);
    expect(screen.getByText(fakeCard.name)).toBeInTheDocument();
  });

  it('should have a country', () => {
    render(<FormResultCard card={fakeCard} />);
    expect(screen.getByText(fakeCard.country)).toBeInTheDocument();
  });

  it('should have a date', () => {
    render(<FormResultCard card={fakeCard} />);
    expect(screen.getByText(fakeCard.date)).toBeInTheDocument();
  });

  it('should have a gender', () => {
    render(<FormResultCard card={fakeCard} />);
    expect(screen.getByText(fakeCard.gender)).toBeInTheDocument();
  });

  it('should have an image', () => {
    render(<FormResultCard card={fakeCard} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', fakeCard.image);
  });
});
