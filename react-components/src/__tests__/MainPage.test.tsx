import '../../setupTests';
import { render, screen, waitFor } from '@testing-library/react';
import { MainPage } from '../pages';
import { Provider } from 'react-redux';
import { store } from '../store';
import { mock } from './mockData';

describe('MainPage', () => {
  it('renders a list of users', async () => {
    render(
      <Provider store={store}>
        <MainPage title="" />
      </Provider>
    );
    await waitFor(() => screen.getByTestId('card'));
    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getAllByTestId('card')).toHaveLength(mock.results.length);
  });
});
