import { render, screen } from '@testing-library/react';
import { Card } from '../components/Card/Card';
import { fakeChar } from './mockData';
import { CardModal } from '../components/Card/CardModal';

describe('Card component', () => {
  it('should have a name', () => {
    render(<Card char={fakeChar} />);
    expect(screen.getByText(fakeChar.name)).toBeInTheDocument();
  });
  it('should have a picture', () => {
    render(<Card char={fakeChar} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', fakeChar.image);
  });
});

describe('CardModal component', () => {
  it('should have a name', () => {
    render(
      <CardModal
        char={fakeChar}
        cb={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(fakeChar.name)).toBeInTheDocument();
  });

  it('should have a status', () => {
    render(
      <CardModal
        char={fakeChar}
        cb={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(fakeChar.status)).toBeInTheDocument();
  });

  it('should have a species', () => {
    render(
      <CardModal
        char={fakeChar}
        cb={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(fakeChar.species)).toBeInTheDocument();
  });

  it('should have a gender', () => {
    render(
      <CardModal
        char={fakeChar}
        cb={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(fakeChar.gender)).toBeInTheDocument();
  });

  it('should have a type', () => {
    render(
      <CardModal
        char={fakeChar}
        cb={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(fakeChar.type)).toBeInTheDocument();
  });

  it('should have a picture', () => {
    render(
      <CardModal
        char={fakeChar}
        cb={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByRole('img')).toHaveAttribute('src', fakeChar.image);
  });
});
