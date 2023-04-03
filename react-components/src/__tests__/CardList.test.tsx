import { render, screen } from '@testing-library/react';
import { CardList } from '../components/CardList';
import { products } from '../data/data';

describe('CardList component', () => {
  it('should be render all cards', () => {
    render(<CardList list={products} />);
    expect(screen.getAllByTestId('card').length).toBe(products.length);
  });

  it('all cards have img', () => {
    render(<CardList list={products} />);
    const images = screen.getAllByRole('img').map((img) => img.getAttribute('src'));
    expect(products.map((product) => product.image)).toEqual(images);
  });
});
