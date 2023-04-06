import { render, screen } from '@testing-library/react';
import { CardList } from '../components/Card/CardList';
import { fakeCharList } from './mockData';

describe('CardList component', () => {
  it('should be render all cards', () => {
    render(<CardList chars={fakeCharList} />);
    expect(screen.getAllByTestId('card').length).toBe(fakeCharList.length);
  });

  it('all cards have img', () => {
    render(<CardList chars={fakeCharList} />);
    const images = screen.getAllByRole('img').map((img) => img.getAttribute('src'));
    expect(fakeCharList.map((char) => char.image)).toEqual(images);
  });
});
