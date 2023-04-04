import { render, screen } from '@testing-library/react';
import { Card } from '../components/Card/Card';
import { Char } from '../types';

const fakeChar: Char = {
  id: 361,
  name: 'Toxic Rick',
  status: 'Dead',
  species: 'Humanoid',
  type: "Rick's Toxic Side",
  gender: 'Male',
  origin: {
    name: 'Alien Spa',
    url: 'https://rickandmortyapi.com/api/location/64',
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/27'],
  url: 'https://rickandmortyapi.com/api/character/361',
  created: '2018-01-10T18:20:41.703Z',
};

describe('Card component', () => {
  it('should have a name', () => {
    render(<Card char={fakeChar} />);
    expect(screen.getByText(fakeChar.name)).toBeInTheDocument();
  });

  it('should have a status', () => {
    render(<Card char={fakeChar} />);
    expect(screen.getByText(fakeChar.status)).toBeInTheDocument();
  });

  it('should have a species', () => {
    render(<Card char={fakeChar} />);
    expect(screen.getByText(fakeChar.species)).toBeInTheDocument();
  });

  it('should have a gender', () => {
    render(<Card char={fakeChar} />);
    expect(screen.getByText(fakeChar.gender)).toBeInTheDocument();
  });

  it('should have a type', () => {
    render(<Card char={fakeChar} />);
    expect(screen.getByText(fakeChar.type)).toBeInTheDocument();
  });

  it('should have a picture', () => {
    render(<Card char={fakeChar} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', fakeChar.image);
  });
});
