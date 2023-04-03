import { render, screen } from '@testing-library/react';
import { FormCard } from '../types';
import { FormResultCard } from '../components/Form/FormResultCard';

const fakeCard: FormCard = {
  userName: 'Ivan Ivanov',
  country: 'belarus',
  date: '2023-12-12',
  image: 'image.png',
  gender: 'male',
  agreement: true,
};

describe('FormResultCard component', () => {
  const { image, country, date, gender, userName } = fakeCard;
  it('should have a name', () => {
    render(<FormResultCard card={fakeCard} />);
    expect(screen.getByText(userName as string)).toBeInTheDocument();
  });

  it('should have a country', () => {
    render(<FormResultCard card={fakeCard} />);
    expect(screen.getByText(country as string)).toBeInTheDocument();
  });

  it('should have a date', () => {
    render(<FormResultCard card={fakeCard} />);
    expect(screen.getByText(date as string)).toBeInTheDocument();
  });

  it('should have a gender', () => {
    render(<FormResultCard card={fakeCard} />);
    expect(screen.getByText(gender as string)).toBeInTheDocument();
  });

  it('should have an image', () => {
    render(<FormResultCard card={fakeCard} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', image);
  });
});
