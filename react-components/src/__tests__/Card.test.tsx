import { render, screen } from '@testing-library/react';
import { Product } from 'data/data';
import { Card } from '../components/Card';

const fakeProduct: Product = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};

describe('Card component', () => {
  it('should have a title', () => {
    render(<Card product={fakeProduct} />);
    expect(screen.getByText(fakeProduct.title)).toBeInTheDocument();
  });

  it('should have a category', () => {
    render(<Card product={fakeProduct} />);
    expect(screen.getByText(fakeProduct.category)).toBeInTheDocument();
  });

  it('should have a price', () => {
    render(<Card product={fakeProduct} />);
    expect(screen.getByText(`${fakeProduct.price}€`)).toBeInTheDocument();
  });

  it('should have a picture', () => {
    render(<Card product={fakeProduct} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', fakeProduct.image);
  });
});
