import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('Navigate test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });

  it('Header contains Main-link', async () => {
    expect(screen.getByText('Main')).toBeInTheDocument();
  });

  it('Header contains About-us-link', async () => {
    expect(screen.getByText('About us')).toBeInTheDocument();
  });

  it('Header contains Form-link', async () => {
    expect(screen.getByText('Form')).toBeInTheDocument();
  });

  it('Go to page "About" when clicking on link "About us"', async () => {
    userEvent.click(screen.getByText('About us'));
    expect(await screen.findByText('About page')).toBeInTheDocument();
  });

  it('Go to page "Main" when clicking on link "Main"', async () => {
    userEvent.click(screen.getByText('Main'));
    expect(await screen.findByRole('search-input')).toBeInTheDocument();
  });

  it('Go to page "Form" when clicking on link "Form"', async () => {
    userEvent.click(screen.getByText('Form'));
    expect(await screen.findByText(/submit/i)).toBeInTheDocument();
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
