import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from '../components/UI/Search';
import { initialState, mockStore } from './mockData';
import { Provider } from 'react-redux';

describe('Search component', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
  });

  it('should contains input', () => {
    expect(screen.getByRole('search-input')).toBeInTheDocument();
  });

  it('should contains svg-icon', () => {
    expect(screen.getByRole('search-icon')).toBeInTheDocument();
  });

  it('value of input changes by user', () => {
    const input = screen.getByRole('search-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'text for test' } });
    expect(input.value).toBe('text for test');
  });
});
