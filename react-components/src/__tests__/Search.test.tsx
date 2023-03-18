import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from '../components/UI/Search';

describe('Search component', () => {
  it('should contains input', () => {
    render(<Search />);
    expect(screen.getByRole('search-input')).toBeInTheDocument();
  });

  it('should contains svg-icon', () => {
    render(<Search />);
    expect(screen.getByRole('search-icon')).toBeInTheDocument();
  });

  it('value of input changes by user', () => {
    render(<Search />);
    const input = screen.getByRole('search-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'text for test' } });
    expect(input.value).toBe('text for test');
  });
});
