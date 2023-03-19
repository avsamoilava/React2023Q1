import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Navigate test', () => {
  it('Header contains Main-link', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Main')).toBeInTheDocument();
  });

  it('Header contains About-us-link', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('About us')).toBeInTheDocument();
  });

  it('Go to page "About" when clicking on link "About us"', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText('About us'));
    expect(await screen.findByText('About page')).toBeInTheDocument();
  });

  it('Go to page "Main" when clicking on link "Main"', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText('Main'));
    expect(await screen.findByRole('search-input')).toBeInTheDocument();
  });

  it('landing on a bad page', () => {
    const badRoute = '/some/bad/route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
