import '../../setupTests';
import { render, screen, waitFor } from '@testing-library/react';
import { MainPage } from '../pages';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { mock } from './mockData';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(mock));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterEach(() => {
  server.close();
});

describe('Tests for MainPage', () => {
  test('data from API are render on MainPage', async () => {
    render(<MainPage title="" />);
    await waitFor(() => expect(screen.getAllByTestId('card')).toHaveLength(mock.results.length));
  });
});
