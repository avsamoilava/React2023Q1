import '../../setupTests';
import { render, screen, waitFor } from '@testing-library/react';
import { MainPage } from '../pages';
import '../../setupTests';
import { mock } from './mockData';

describe('Tests for MainPage', () => {
  test('data from API are render on MainPage', async () => {
    render(<MainPage title="" />);
    await waitFor(() => expect(screen.getAllByTestId('card')).toHaveLength(mock.results.length));
  });
});
